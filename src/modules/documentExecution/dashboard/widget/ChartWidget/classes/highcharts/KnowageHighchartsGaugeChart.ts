import { IWidget, IWidgetColumn } from '@/modules/documentExecution/dashboard/Dashboard'
import { IHighchartsChartSerie } from '@/modules/documentExecution/dashboard/interfaces/highcharts/DashboardHighchartsWidget'
import { KnowageHighcharts } from './KnowageHighcharts'
import { createGaugeSerie } from './updater/KnowageHighchartsCommonUpdater'

export class KnowageHighchartsGaugeChart extends KnowageHighcharts {
    constructor() {
        super()
    }

    setGaugeData(data: any, widgetModel: IWidget, maxNumberOfSeries: number | undefined) {
        this.getSeriesFromWidgetModel(widgetModel, maxNumberOfSeries)

        let startingRadius = 112
        let startingInnerRadius = 88

        for (let i = 0; i < this.model.series.length; i++) {
            const serie = this.model.series[i] as any
            serie.data = []
            data?.rows?.forEach((row: any) => {
                const value = row[`column_${i + 1}`]
                const serieElement = {
                    name: serie.name,
                    y: isNaN(value) || value == '' ? 0 : value
                } as any
                if (this.model.chart.type === 'activitygauge') {
                    serieElement.radius = startingRadius + '%'
                    serieElement.innerRadius = startingInnerRadius + '%'
                    startingRadius -= 25
                    startingInnerRadius -= 25
                }
                serie.data.push(serieElement)
            })
        }
        return this.model.series
    }

    getSeriesFromWidgetModel(widgetModel: IWidget, maxNumberOfSeries: number | undefined) {
        const newSeries = [] as any[]
        let seriesAdded = 0

        for (let i = 0; i < widgetModel.columns.length; i++) {
            this.addSerieFromExistingSeriesOrWidgetColumns(widgetModel.columns[i], newSeries)
            seriesAdded++
            if (seriesAdded === maxNumberOfSeries) break
        }
        this.model.series = newSeries
    }

    addSerieFromExistingSeriesOrWidgetColumns(column: IWidgetColumn, newSeries: any[]) {
        if (column.fieldType === 'MEASURE') {
            const index = this.model.series.findIndex((serie: any) => serie.name === column.columnName)
            index !== -1 ? newSeries.push(this.model.series[index]) : newSeries.push(createGaugeSerie(column.columnName))
        }
    }

    formatSeriesFromOtherChartTypeSeries() {
        this.model.series = this.model.series.map((serie: IHighchartsChartSerie) => { return this.getFormattedSerieFromOtherChartTypeSerie(serie) })
    }

    getFormattedSerieFromOtherChartTypeSerie(otherChartSerie: IHighchartsChartSerie) {
        const formattedSerie = { name: otherChartSerie.name, data: [], colorByPoint: false } as any
        if (otherChartSerie.accessibility) formattedSerie.accessibility
        return formattedSerie
    }
}