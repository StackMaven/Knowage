import { KnowageHighchartsGaugeChart } from './KnowageHighchartsGaugeChart'
import { IWidget } from '@/modules/documentExecution/dashboard/Dashboard'
import { IHighchartsChartModel, IHighchartsSeriesLabelsSetting } from '@/modules/documentExecution/dashboard/interfaces/highcharts/DashboardHighchartsWidget'
import { updateActivityGaugeChartModel } from './updater/KnowageHighchartsActivityGaugeChartUpdater'
import * as highchartsDefaultValues from '../../../WidgetEditor/helpers/chartWidget/highcharts/HighchartsDefaultValues'
import deepcopy from 'deepcopy'

export class KnowageHighchartsActivityGaugeChart extends KnowageHighchartsGaugeChart {
    constructor(model: any) {
        super()
        this.setSpecificOptionsDefaultValues()
        this.setTooltipSettings()
        if (model && model.CHART) this.updateModel(deepcopy(model))
        else if (model && model.plotOptions) {
            this.model = deepcopy(model)
            if (model.chart.type !== 'activitygauge') {
                this.formatSeriesFromOtherChartTypeSeries()
                this.setSpecificOptionsDefaultValues()
                this.setTooltipSettings()
            }
        }
        this.model.chart.type = 'activitygauge'
        if (!this.model.annotations) this.model.annotations = highchartsDefaultValues.getDefaultAnnotations()
        delete this.model.chart.inverted
        delete this.model.sonification
    }

    updateModel(oldModel: any) {
        updateActivityGaugeChartModel(oldModel, this.model)
    }

    setModel(model: IHighchartsChartModel) {
        this.model = model
    }

    setSpecificOptionsDefaultValues() {
        this.setGaugePlotOptions()
        this.setGaugePaneSettings()
        this.setGaugeYAxis()
    }

    setData(data: any, widgetModel: IWidget) {
        this.setGaugeData(data, widgetModel, 4)
    }

    setGaugePlotOptions() {
        this.model.plotOptions.solidgauge = highchartsDefaultValues.getdefaultActivityGaugeChartPlotOptions()
    }

    setGaugePaneSettings() {
        this.model.pane = highchartsDefaultValues.getDefaultActivityGaugePaneOptions()
    }

    setGaugeYAxis() {
        this.model.yAxis = [highchartsDefaultValues.getDefaultActivityGaugeYAxis()]
    }

    setTooltipSettings() {
        this.model.tooltip = highchartsDefaultValues.getDefaultActivityGaugeTooltip()
    }

    updateSeriesLabelSettings(widgetModel: IWidget) {
        if (!widgetModel || !widgetModel.settings.series || !widgetModel.settings.series.seriesSettings) return
        this.setAllSeriesSettings(widgetModel)
        this.setSpecificSeriesSettings(widgetModel)
    }

    setAllSeriesSettings(widgetModel: IWidget) {
        const allSeriesSettings = widgetModel.settings.series.seriesSettings[0]
        if (allSeriesSettings?.serieColorEnabled) {
            this.model.series.forEach((serie: any) => {
                this.updateSeriesDataWithSerieSettings(serie, allSeriesSettings)
            })
        } else {
            this.resetSeriesSettings()
        }
    }

    resetSeriesSettings() {
        this.model.series.forEach((serie: any) => {
            serie.data.forEach((data: any) => {
                data.color = ''
                delete data.dataLabels
            })
        })
    }
    setSpecificSeriesSettings(widgetModel: IWidget) {
        for (let i = 1; i < widgetModel.settings.series.seriesSettings.length; i++) {
            const seriesSettings = widgetModel.settings.series.seriesSettings[i] as IHighchartsSeriesLabelsSetting
            if (seriesSettings.serieColorEnabled) seriesSettings.names.forEach((serieName: string) => this.updateSpecificSeriesSettings(serieName, seriesSettings))
        }
    }

    updateSpecificSeriesSettings(serieName: string, seriesSettings: IHighchartsSeriesLabelsSetting) {
        const index = this.model.series.findIndex((serie: any) => serie.name === serieName)
        if (index !== -1) this.updateSeriesDataWithSerieSettings(this.model.series[index], seriesSettings)
    }

    updateSeriesDataWithSerieSettings(serie: any, seriesSettings: IHighchartsSeriesLabelsSetting) {
        serie.data.forEach((data: any) => {
            data.color = seriesSettings.serieColor ?? ''
            delete data.dataLabels
        })
    }
}
