<template>
    <div v-if="headersStyleModel" class="p-ai-center kn-flex p-p-4">
        <form class="p-fluid p-formgrid p-grid">
            <div class="p-field p-col-12">
                <span class="p-float-label">
                    <InputNumber v-model="headersStyleModel.height" class="kn-material-input p-inputtext-sm" @blur="headersStyleChanged" />
                    <label class="kn-material-input-label p-mr-2">{{ $t('common.height') }}</label>
                </span>
            </div>
        </form>

        <WidgetEditorStyleToolbar :options="settingsDescriptor.defaultToolbarStyleOptions" :prop-model="headersStyleModel.properties" @change="onStyleToolbarChange"> </WidgetEditorStyleToolbar>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IWidget, ITableWidgetHeadersStyle, IWidgetStyleToolbarModel } from '@/modules/documentExecution/Dashboard/Dashboard'
import { emitter } from '@/modules/documentExecution/dashboard/DashboardHelpers'
import settingsDescriptor from '../../WidgetEditorSettingsTabDescriptor.json'
import InputNumber from 'primevue/inputnumber'
import WidgetEditorStyleToolbar from '../../common/styleToolbar/WidgetEditorStyleToolbar.vue'

export default defineComponent({
    name: 'table-widget-headers',
    components: { InputNumber, WidgetEditorStyleToolbar },
    props: { widgetModel: { type: Object as PropType<IWidget | null>, required: true }, themeStyle: { type: Object as PropType<ITableWidgetHeadersStyle | null>, required: true } },
    emits: ['styleChanged'],
    data() {
        return {
            settingsDescriptor,
            headersStyleModel: null as ITableWidgetHeadersStyle | null
        }
    },
    mounted() {
        this.setEventListeners()
        this.loadHeaderModel()
    },
    unmounted() {
        this.removeEventListeners()
    },
    methods: {
        setEventListeners() {
            emitter.on('themeSelected', this.loadHeaderModel)
        },
        removeEventListeners() {
            emitter.off('themeSelected', this.loadHeaderModel)
        },
        loadHeaderModel() {
            if (this.widgetModel?.settings?.style?.headers) this.headersStyleModel = this.widgetModel.settings.style.headers
            else if (this.themeStyle) this.headersStyleModel = this.themeStyle
        },
        headersStyleChanged() {
            if (this.widgetModel) this.$emit('styleChanged')
        },
        onStyleToolbarChange(model: IWidgetStyleToolbarModel) {
            if (!this.headersStyleModel) return
            this.headersStyleModel.properties = {
                'background-color': model['background-color'] ?? 'rgb(137, 158, 175)',
                color: model.color ?? 'rgb(255, 255, 255)',
                'justify-content': model['justify-content'] ?? 'center',
                'font-size': model['font-size'] ?? '14px',
                'font-family': model['font-family'] ?? '',
                'font-style': model['font-style'] ?? 'normal',
                'font-weight': model['font-weight'] ?? ''
            }
            this.headersStyleChanged()
        }
    }
})
</script>

<style lang="scss" scoped>
#height-input-container {
    max-width: 200px;
}
</style>
