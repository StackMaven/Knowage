<template>
    <div v-show="widgetModel && descriptor">
        <HTMLWidgetSettingsAccordion
            v-if="selectedSetting != 'Gallery'"
            v-show="selectedSetting"
            :widget-model="widgetModel"
            :settings="descriptor.settings[selectedSetting]"
            :datasets="datasets"
            :selected-datasets="selectedDatasets"
            :variables="variables"
            :dashboard-id="dashboardId"
        ></HTMLWidgetSettingsAccordion>

        <HTMLWidgetSettingsGallery v-if="selectedSetting == 'Gallery'" v-show="selectedSetting" :widget-model="widgetModel" :dashboard-id="dashboardId" :prop-gallery-items="propGalleryItems" @galleryItemSelected="$emit('galleryItemSelected')"></HTMLWidgetSettingsGallery>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IWidget, IDataset, IVariable, IGalleryItem } from '@/modules/documentExecution/Dashboard/Dashboard'
import htmlDescriptor from './HTMLWidgetSettingsDescriptor.json'
import customDashboardHeaderDescriptor from './CustomDashboardHeaderDescriptor.json'
import HTMLWidgetSettingsAccordion from './HTMLWidgetSettingsAccordion.vue'
import HTMLWidgetSettingsGallery from './gallery/HTMLWidgetGallery.vue'

export default defineComponent({
    name: 'html-widget-settings-container',
    components: { HTMLWidgetSettingsAccordion, HTMLWidgetSettingsGallery },
    props: {
        widgetModel: { type: Object as PropType<IWidget>, required: true },
        selectedSetting: { type: String, required: true },
        datasets: { type: Array as PropType<IDataset[]> },
        selectedDatasets: { type: Array as PropType<IDataset[]> },
        variables: { type: Array as PropType<IVariable[]>, required: true },
        dashboardId: { type: String, required: true },
        propGalleryItems: { type: Array as PropType<IGalleryItem[]>, required: true }
    },
    emits: ['galleryItemSelected'],
    data() {
        return {
            descriptor: null as any,
            setting: ''
        }
    },
    created() {
        this.loadDescriptor()
    },
    methods: {
        loadDescriptor() {
            this.descriptor = this.widgetModel.settings.isCustomDashboardHeader ? customDashboardHeaderDescriptor : htmlDescriptor
        }
    }
})
</script>
