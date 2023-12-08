import { KnowageHighchartsGaugeChart } from './KnowageHighchartsGaugeChart'
import { IWidget } from '@/modules/documentExecution/dashboard/Dashboard'
import { IHighchartsSeriesLabelsSetting } from '@/modules/documentExecution/dashboard/interfaces/highcharts/DashboardHighchartsWidget'
import { updateGaugeChartModel } from './updater/KnowageHighchartsGaugeChartUpdater'
import * as highchartsDefaultValues from '../../../WidgetEditor/helpers/chartWidget/highcharts/HighchartsDefaultValues'
import deepcopy from 'deepcopy'


export class KnowageHighchartsGaugeSeriesChart extends KnowageHighchartsGaugeChart {
    constructor(model: any) {
        super()
        this.setSpecificOptionsDefaultValues()
        if (model && model.CHART) {
            this.updateModel(deepcopy(model))
        }
        else if (model && model.plotOptions) {
            this.model = deepcopy(model)
            if (model.chart.type !== 'gauge') {
                this.formatSeriesFromOtherChartTypeSeries()
                this.setSpecificOptionsDefaultValues()
            }
        }
        this.model.chart.type = 'gauge'
        if (!this.model.annotations) this.model.annotations = highchartsDefaultValues.getDefaultAnnotations()
        delete this.model.chart.inverted
        delete this.model.sonification
    }

    updateModel(oldModel: any) {
        updateGaugeChartModel(oldModel, this.model)
    }

    setData(data: any, widgetModel: IWidget) {
        this.setGaugeData(data, widgetModel, undefined)
    }

    setSpecificOptionsDefaultValues() {
        this.setGaugePlotOptions()
        this.setGaugePaneSettings()
        this.setGaugeYAxis()
    }

    setGaugePlotOptions() {
        this.model.plotOptions.gauge = highchartsDefaultValues.getDafaultGaugeChartPlotOptions()
    }

    setGaugePaneSettings() {
        this.model.pane = highchartsDefaultValues.getDafaultPaneOptions()
    }

    setGaugeYAxis() {
        this.model.yAxis = highchartsDefaultValues.getDefaultGaugeYAxis()
    }

    updateSeriesLabelSettings(widgetModel: IWidget) {
        if (!widgetModel || !widgetModel.settings.series || !widgetModel.settings.series.seriesSettings) return
        const chartColors = widgetModel.settings.chart.colors
        this.setAllSeriesSettings(widgetModel, chartColors)
        this.setSpecificSeriesSettings(widgetModel, chartColors)
    }

    setAllSeriesSettings(widgetModel: IWidget, chartColors: string[]) {
        const allSeriesSettings = widgetModel.settings.series.seriesSettings[0]
        if (allSeriesSettings.label.enabled) {
            this.model.series.forEach((serie: any, index: number) => {
                const color = chartColors[index % chartColors.length] ?? ''
                this.updateSeriesDataWithSerieSettings(serie, allSeriesSettings, index, color)
            })
        } else {
            this.resetSeriesSettings(chartColors)
        }
    }

    resetSeriesSettings(chartColors: string[]) {
        this.model.series.forEach((serie: any, index: number) => {
            const color = chartColors[index % chartColors.length] ?? ''
            serie.data.forEach((data: any) => {
                data.dataLabels = { ...highchartsDefaultValues.getDefaultSerieLabelSettings(), position: '' }
                data.dataLabels.formatter = undefined
            })
            this.resetDialAndPivotSerieSettings(serie, color)
        })
    }

    resetDialAndPivotSerieSettings(serie: any, color: string) {
        serie.dial = highchartsDefaultValues.getDefaultSerieDialSettings()
        serie.dial.backgroundColor = color
        serie.pivot = highchartsDefaultValues.getDefaultSeriePivotSettings()
        serie.pivot.backgroundColor = color
    }

    setSpecificSeriesSettings(widgetModel: IWidget, chartColors: string[]) {
        for (let i = 1; i < widgetModel.settings.series.seriesSettings.length; i++) {
            const seriesSettings = widgetModel.settings.series.seriesSettings[i] as IHighchartsSeriesLabelsSetting
            if (seriesSettings.label.enabled) seriesSettings.names.forEach((serieName: string) => this.updateSpecificSeriesLabelSettings(serieName, seriesSettings, chartColors))
        }
    }

    updateSpecificSeriesLabelSettings(serieName: string, seriesSettings: IHighchartsSeriesLabelsSetting, chartColors: string[]) {
        const index = this.model.series.findIndex((serie: any) => serie.name === serieName)
        if (index !== -1) {
            const color = chartColors[index % chartColors.length] ?? ''
            this.updateSeriesDataWithSerieSettings(this.model.series[index], seriesSettings, index, color)
        }
    }

    updateSeriesDataWithSerieSettings(serie: any, seriesSettings: IHighchartsSeriesLabelsSetting, index: number, color: string) {
        serie.data.forEach((data: any) => {
            data.dataLabels = {
                y: index * 40,
                backgroundColor: seriesSettings.label.backgroundColor ?? color,
                distance: 30,
                enabled: true,
                position: '',
                style: {
                    fontFamily: seriesSettings.label.style.fontFamily,
                    fontSize: seriesSettings.label.style.fontSize,
                    fontWeight: seriesSettings.label.style.fontWeight,
                    color: seriesSettings.label.style.color ?? color
                },
                formatter: function () {
                    return KnowageHighchartsGaugeChart.prototype.handleFormatter(this, seriesSettings.label, this.model.chart.type)
                }
            }
        })
        this.updateSeriesDialAndPivotSettings(serie, seriesSettings, color)
    }

    updateSeriesDialAndPivotSettings(serie: any, seriesSettings: IHighchartsSeriesLabelsSetting, color: string) {
        if (seriesSettings.dial) {
            serie.dial = { ...seriesSettings.dial }
            if (!seriesSettings.dial.backgroundColor) serie.dial.backgroundColor = color
        }
        if (seriesSettings.pivot) {
            serie.pivot = { ...seriesSettings.pivot }
            if (!seriesSettings.pivot.backgroundColor) serie.pivot.backgroundColor = color
        }
    }
}
