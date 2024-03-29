<template>
    <div v-if="linksModel" class="p-grid p-p-4">
        <div v-for="(link, index) in linksModel.links" :key="index" class="dynamic-form-item p-grid p-ai-center p-col-12">
            <div v-if="widgetType === 'table'" class="p-sm-12 p-md-12 p-d-flex p-flex-column">
                <label class="kn-material-input-label"> {{ $t('common.type') }}</label>
                <Dropdown v-model="link.type" class="kn-material-input" :options="descriptor.interactionTypes" option-value="value" :disabled="linksDisabled" @change="onInteractionTypeChanged(link)">
                    <template #value="slotProps">
                        <div>
                            <span>{{ getTranslatedLabel(slotProps.value, descriptor.interactionTypes, $t) }}</span>
                        </div>
                    </template>
                    <template #option="slotProps">
                        <div>
                            <span>{{ $t(slotProps.option.label) }}</span>
                        </div>
                    </template>
                </Dropdown>
            </div>

            <div class="kn-flex p-d-flex p-flex-column p-pt-2 p-ml-2">
                <label class="kn-material-input-label">{{ $t('dashboard.widgetEditor.interactions.basicUrl') }}</label>
                <InputText v-model="link.baseurl" class="kn-material-input p-inputtext-sm" :disabled="linksDisabled" />
            </div>

            <div v-if="link.type === 'singleColumn'" class="kn-flex">
                <div class="p-d-flex p-flex-column kn-flex p-mx-2">
                    <label class="kn-material-input-label"> {{ $t('common.column') }}</label>
                    <Dropdown v-model="link.column" class="kn-material-input" :options="widgetModel.columns" option-label="alias" option-value="columnName" :disabled="linksDisabled"> </Dropdown>
                </div>
            </div>
            <div v-else-if="link.type === 'icon'" class="kn-flex p-mt-5 p-mx-2">
                <WidgetEditorStyleToolbar :options="[{ type: 'icon' }]" :prop-model="{ icon: link.icon }" :disabled="linksDisabled" @change="onStyleToolbarChange($event, link)"> </WidgetEditorStyleToolbar>
            </div>

            <div class="kn-flex p-d-flex p-flex-column p-mx-2">
                <label class="kn-material-input-label"> {{ $t('dashboard.widgetEditor.interactions.linkType') }}</label>
                <Dropdown v-model="link.action" class="kn-material-input" :options="descriptor.linkTypes" option-value="value" :disabled="linksDisabled" @change="onInteractionTypeChanged(link)">
                    <template #value="slotProps">
                        <div>
                            <span>{{ getTranslatedLabel(slotProps.value, descriptor.linkTypes, $t) }}</span>
                        </div>
                    </template>
                    <template #option="slotProps">
                        <div>
                            <span>{{ $t(slotProps.option.label) }}</span>
                        </div>
                    </template>
                </Dropdown>
            </div>

            <div class="p-text-left p-mt-3 p-ml-3">
                <i :class="[index === 0 ? 'pi pi-plus-circle' : 'pi pi-trash']" class="kn-cursor-pointer" @click="index === 0 ? addLink() : removeLink(index)"></i>
            </div>

            <div class="p-sm-12 p-md-12">
                <TableWidgetLinkParameterList
                    class="kn-flex p-mr-2"
                    :widget-model="widgetModel"
                    :prop-parameters="link.parameters"
                    :selected-datasets-columns-map="selectedDatasetColumnNameMap"
                    :disabled="linksDisabled"
                    :dashboard-id="dashboardId"
                    @change="onParametersChanged($event, link)"
                    @addParameter="onAddParameter(link)"
                    @delete="onParameterDelete($event, link)"
                ></TableWidgetLinkParameterList>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IWidget, IDataset, IWidgetLinks, ITableWidgetLink, IWidgetStyleToolbarModel, IWidgetInteractionParameter } from '@/modules/documentExecution/dashboard/Dashboard'
import { emitter } from '../../../../../../DashboardHelpers'
import { getTranslatedLabel } from '@/helpers/commons/dropdownHelper'
import descriptor from '../WidgetInteractionsDescriptor.json'
import Dropdown from 'primevue/dropdown'
import WidgetEditorStyleToolbar from '../../styleToolbar/WidgetEditorStyleToolbar.vue'
import TableWidgetLinkParameterList from './WidgetLinkParameterList.vue'

export default defineComponent({
    name: 'table-widget-interactions-links',
    components: { Dropdown, TableWidgetLinkParameterList, WidgetEditorStyleToolbar },
    props: {
        widgetModel: { type: Object as PropType<IWidget>, required: true },
        datasets: { type: Array as PropType<IDataset[]> },
        selectedDatasets: { type: Array as PropType<IDataset[]> },
        dashboardId: { type: String, required: true }
    },
    data() {
        return {
            descriptor,
            widget: null as IWidget | null,
            linksModel: null as IWidgetLinks | null,
            selectedDatasetColumnNameMap: {},
            getTranslatedLabel
        }
    },
    computed: {
        linksDisabled() {
            return !this.linksModel || !this.linksModel.enabled
        },
        widgetType() {
            return this.widgetModel?.type
        }
    },
    watch: {
        linksDisabled() {
            this.onLinkEnabledChange()
        }
    },
    created() {
        this.setEventListeners()
        this.loadWidgetModel()
        this.loadLinksModel()
        this.loadSelectedDatasetColumnNames()
    },
    unmounted() {
        this.removeEventListeners()
    },
    methods: {
        setEventListeners() {
            emitter.on('columnRemovedFromLinks', this.onColumnRemovedFromLinks)
        },
        removeEventListeners() {
            emitter.off('columnRemovedFromLinks', this.onColumnRemovedFromLinks)
        },
        onColumnRemovedFromLinks() {
            this.onColumnRemoved()
        },
        loadWidgetModel() {
            this.widget = this.widgetModel
        },
        loadLinksModel() {
            if (this.widgetModel?.settings?.interactions?.link) this.linksModel = this.widgetModel.settings.interactions.link
        },
        loadSelectedDatasetColumnNames() {
            if (!this.selectedDatasets || this.selectedDatasets.length === 0) return
            this.selectedDatasets.forEach((dataset: IDataset) => this.loadSelectedDatasetColumnName(dataset))
        },
        loadSelectedDatasetColumnName(dataset: IDataset) {
            this.selectedDatasetColumnNameMap[dataset.name] = []
            for (let i = 0; i < dataset.metadata.fieldsMeta.length; i++) {
                this.selectedDatasetColumnNameMap[dataset.name].push(dataset.metadata.fieldsMeta[i].name)
            }
        },
        onInteractionTypeChanged(link: ITableWidgetLink) {
            switch (link.type) {
                case 'allRow':
                    delete link.column
                    delete link.icon
                    break
                case 'singleColumn':
                    delete link.icon
                    break
                case 'icon':
                    delete link.column
            }
        },
        onStyleToolbarChange(model: IWidgetStyleToolbarModel, link: ITableWidgetLink) {
            link.icon = model.icon
        },
        onColumnRemoved() {
            this.loadLinksModel()
        },
        onLinkEnabledChange() {
            if (!this.linksModel) return
            if (this.linksModel.enabled && this.linksModel.links.length === 0) {
                this.linksModel.links.push({ type: '', baseurl: '', action: '', parameters: [] })
            }
            this.updateOtherInteractions()
        },
        updateOtherInteractions() {
            if (this.widget && this.linksModel?.enabled && this.widgetType !== 'table') {
                if (this.widget.settings.interactions.selection) this.widget.settings.interactions.selection.enabled = false
                if (this.widget.settings.interactions.crossNavigation) this.widget.settings.interactions.crossNavigation.enabled = false
                if (this.widget.settings.interactions.preview) this.widget.settings.interactions.preview.enabled = false
                if (this.widget.settings.interactions.iframe) this.widget.settings.interactions.iframe.enabled = false
            }
        },
        addLink() {
            if (!this.linksModel || this.linksDisabled) return
            this.linksModel.links.push({ type: '', baseurl: '', action: '', parameters: [] })
        },
        removeLink(index: number) {
            if (!this.linksModel || this.linksDisabled) return
            this.linksModel.links.splice(index, 1)
        },
        onParametersChanged(parameters: IWidgetInteractionParameter[], link: ITableWidgetLink) {
            link.parameters = parameters
        },
        onAddParameter(link: ITableWidgetLink) {
            link.parameters.push({ enabled: true, name: '', type: '', dataType: '' })
        },
        onParameterDelete(index: number, link: ITableWidgetLink) {
            link.parameters.splice(index, 1)
        }
    }
})
</script>
