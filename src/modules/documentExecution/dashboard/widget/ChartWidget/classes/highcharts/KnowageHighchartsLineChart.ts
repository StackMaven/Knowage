import { KnowageHighcharts } from './KnowageHighcharts'
import { IWidget, IWidgetColumn } from '@/modules/documentExecution/dashboard/Dashboard'
import { IHighchartsChartSerie, IHighchartsChartSerieData } from '@/modules/documentExecution/dashboard/interfaces/highcharts/DashboardHighchartsWidget'
import { updateLineChartModel } from './updater/KnowageHighchartsLineChartUpdater'
import { createSerie } from './updater/KnowageHighchartsCommonUpdater'
import * as highchartsDefaultValues from '../../../WidgetEditor/helpers/chartWidget/highcharts/HighchartsDefaultValues'
import deepcopy from 'deepcopy'
import { getAllColumnsOfSpecificTypeFromDataResponse, setGroupedByCategoriesData, setGroupedBySeriesData, setGroupedCategoriesData, setRegularData } from './helpers/setData/HighchartsSetDataHelpers'

export class KnowageHighchartsLineChart extends KnowageHighcharts {
    constructor(model: any) {
        super()
        console.log('------ CREATED: !')
        this.setSpecificOptionsDefaultValues()
        if (model && model.CHART) this.updateModel(deepcopy(model))
        else if (model && model.plotOption) {
            this.model = deepcopy(model)
            if (model.chart.type !== 'line') {
                this.formatSeriesFromOtherChartTypeSeries()
                this.setSpecificOptionsDefaultValues()
            }
        }
        this.model.chart.type = 'line'
    }

    updateModel(oldModel: any) {
        updateLineChartModel(oldModel, this.model)
    }

    setSpecificOptionsDefaultValues() {
        this.setPlotOptions()
        this.setLineXAxis()
        this.setLineYAxis()
    }

    setPlotOptions() {
        this.model.plotOptions.line = {
            marker: {
                symbol: "circle",
                lineWidth: 2
            }
        }
        this.model.plotOptions.series.showCheckbox = true
        this.model.plotOptions.series.turboThreshold = 200000
    }

    setLineXAxis() {
        this.model.xAxis = [highchartsDefaultValues.getDefaultBarXAxis()]
    }

    setLineYAxis() {
        this.model.yAxis = [highchartsDefaultValues.getDefaultBarYAxis()]
    }

    setData(data: any, widgetModel: IWidget) {
        this.model.series = []
        // console.log('---------- data: ', data)
        // console.log('---------- WIDGET MODEL COLUMNS: ', widgetModel.columns)

        const attributeColumns = getAllColumnsOfSpecificTypeFromDataResponse(data, widgetModel, 'ATTRIBUTE')
        // console.log('---------- ATTRIBUTE COLUMNS: ', attributeColumns)
        const measureColumns = getAllColumnsOfSpecificTypeFromDataResponse(data, widgetModel, 'MEASURE')
        // console.log('---------- MEASURE COLUMNS: ', measureColumns)
        const drilldownEnabled = widgetModel.settings.interactions.drilldown ? widgetModel.settings.interactions.drilldown.enabled : false
        // console.log('------- drilldownEnabled: ', drilldownEnabled)
        const dateFormat = widgetModel.settings?.configuration?.datetypeSettings && widgetModel.settings.configuration.datetypeSettings.enabled ? widgetModel.settings?.configuration?.datetypeSettings?.format : ''
        // console.log('------- dateFormat: ', dateFormat)

        if (widgetModel.settings.configuration?.grouping?.enabled) {
            setGroupedCategoriesData(this.model, data, attributeColumns, measureColumns, dateFormat)
        } else if (widgetModel.settings.configuration?.grouping?.secondSeries.enabled) {
            setGroupedBySeriesData(this.model, data, attributeColumns, measureColumns)
        } else if (widgetModel.settings.configuration?.grouping?.secondDimension.enabled) {
            const serieName = widgetModel.settings.configuration.grouping.secondDimension.serie
            setGroupedByCategoriesData(this.model, data, attributeColumns, measureColumns, serieName)
        } else {
            setRegularData(this.model, data, attributeColumns, measureColumns, drilldownEnabled, dateFormat)
        }

        return this.model.series
    }

    getSeriesFromWidgetModel(widgetModel: IWidget) {
        // TODO
        const measureColumn = widgetModel.columns.find((column: IWidgetColumn) => column.fieldType === 'MEASURE')
        if (!measureColumn) return
        this.model.series = [createSerie(measureColumn.columnName, measureColumn.aggregation, true)]
    }

    updateSeriesLabelSettings(widgetModel: IWidget) {
        // TODO
        if (!widgetModel || !widgetModel.settings.series || !widgetModel.settings.series.seriesSettings || !widgetModel.settings.series.seriesSettings[0]) return
        const seriesLabelSetting = widgetModel.settings.series.seriesSettings[0]
        if (!seriesLabelSetting.label.enabled) return
        this.model.series.forEach((serie: IHighchartsChartSerie) => {
            serie.data.forEach((data: IHighchartsChartSerieData) => {
                data.dataLabels = {
                    backgroundColor: seriesLabelSetting.label.backgroundColor ?? '',
                    distance: 30,
                    enabled: true,
                    position: '',
                    style: {
                        fontFamily: seriesLabelSetting.label.style.fontFamily,
                        fontSize: seriesLabelSetting.label.style.fontSize,
                        fontWeight: seriesLabelSetting.label.style.fontWeight,
                        color: seriesLabelSetting.label.style.color ?? ''
                    },
                    formatter: function () {
                        return KnowageHighchartsLineChart.prototype.handleFormatter(this, seriesLabelSetting.label)
                    }
                }
            })
        })
    }

    formatSeriesFromOtherChartTypeSeries() {
        this.model.series = this.model.series.map((serie: any) => { return this.getFormattedSerieFromOtherChartTypeSerie(serie) })
    }

    getFormattedSerieFromOtherChartTypeSerie(otherChartSerie: any) {
        const formattedSerie = { name: otherChartSerie.name, data: [], colorByPoint: true } as IHighchartsChartSerie
        if (otherChartSerie.accessibility) formattedSerie.accessibility
        return formattedSerie
    }
}
