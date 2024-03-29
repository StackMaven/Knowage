<template>
    <div v-if="model?.yAxis && model.yAxis[0]" class="p-grid p-jc-center p-ai-center p-p-4">
        <div class="p-col-12 p-md-6 p-lg-6 p-d-flex p-flex-column kn-flex">
            <label class="kn-material-input-label p-mr-2">{{ $t('common.min') }}</label>
            <div class="p-d-flex p-flex-row p-ai-center p-fluid">
                <InputNumber v-model="model.yAxis[0].min" class="kn-material-input p-inputtext-sm" @blur="modelChanged" />
                <i v-tooltip.top="$t('dashboard.widgetEditor.highcharts.scale.minHint')" class="pi pi-question-circle kn-cursor-pointer p-ml-2"></i>
                <Button icon="fa fa-eraser" class="p-button-text p-button-rounded p-button-plain" @click="onInputChanged('min')" />
            </div>
        </div>
        <div class="p-col-12 p-md-6 p-lg-6 p-d-flex p-flex-column kn-flex">
            <label class="kn-material-input-label p-mr-2">{{ $t('common.max') }}</label>
            <div class="p-d-flex p-flex-row p-ai-center p-fluid">
                <InputNumber v-model="model.yAxis[0].max" class="kn-material-input p-inputtext-sm" @blur="modelChanged" />
                <i v-tooltip.top="$t('dashboard.widgetEditor.highcharts.scale.maxHint')" class="pi pi-question-circle kn-cursor-pointer p-ml-2"></i>
                <Button icon="fa fa-eraser" class="p-button-text p-button-rounded p-button-plain" @click="onInputChanged('max')" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { emitter } from '@/modules/documentExecution/dashboard/DashboardHelpers'
import { IWidget } from '@/modules/documentExecution/dashboard/Dashboard'
import { IHighchartsChartModel } from '@/modules/documentExecution/dashboard/interfaces/highcharts/DashboardHighchartsWidget'
import InputNumber from 'primevue/inputnumber'

export default defineComponent({
    name: 'hihgcharts-gauge-scale-settings',
    components: { InputNumber },
    props: { widgetModel: { type: Object as PropType<IWidget>, required: true } },
    data() {
        return {
            model: null as IHighchartsChartModel | null
        }
    },
    computed: {},
    created() {
        this.loadModel()
    },
    methods: {
        loadModel() {
            this.model = this.widgetModel.settings.chartModel ? this.widgetModel.settings.chartModel.model : null
        },
        modelChanged() {
            setTimeout(() => emitter.emit('refreshChart', this.widgetModel.id), 250)
        },
        onInputChanged(type: 'min' | 'max') {
            if (!this.model) return
            type === 'min' ? (this.model.yAxis[0].min = null) : (this.model.yAxis[0].max = null)
            setTimeout(() => this.modelChanged(), 250)
        }
    }
})
</script>
