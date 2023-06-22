import { IWidget, IWidgetColumn } from "@/modules/documentExecution/dashboard/Dashboard";
import { emitter } from '@/modules/documentExecution/dashboard/DashboardHelpers'

export const addHighchartsColumnToTable = (tempColumn: IWidgetColumn, rows: IWidgetColumn[], chartType: string | undefined, attributesOnly: boolean, measuresOnly: boolean, widgetModel: IWidget) => {
    let mode = ''
    if (attributesOnly) mode = 'attributesOnly'
    else if (measuresOnly) mode = 'measuresOnly'
    switch (chartType) {
        case 'pie':
        case 'gauge':
        case 'activitygauge':
        case 'solidgauge':
        case 'heatmap':
        case 'radar':
        case 'area':
        case 'bar':
        case 'column':
        case 'line':
        case 'scatter':
        case 'bubble':
        case 'sunburst':
        case 'treemap':
        case 'dependencywheel':
            addHighchartsColumnToTableRows(tempColumn, rows, chartType, mode, widgetModel)
    }
}

const addHighchartsColumnToTableRows = (tempColumn: IWidgetColumn, rows: IWidgetColumn[], chartType: string | undefined, mode: string, widgetModel: IWidget) => {
    if (mode === 'attributesOnly') {
        addAttributeColumnToTableRows(tempColumn, rows)
    } else if (mode === 'measuresOnly') {
        addMeasureColumnToTableRows(tempColumn, rows, chartType, widgetModel)
    }
}


const addAttributeColumnToTableRows = (tempColumn: IWidgetColumn, rows: IWidgetColumn[]) => {
    if (tempColumn.fieldType === 'MEASURE') {
        tempColumn.fieldType = 'ATTRIBUTE'
        tempColumn.aggregation = ''
    }
    tempColumn.drillOrder = {
        "orderColumn": "",
        "orderColumnId": "",
        "orderType": ""
    }
    addColumnToRows(rows, tempColumn)
}

const addMeasureColumnToTableRows = (tempColumn: IWidgetColumn, rows: IWidgetColumn[], chartType: string | undefined, widgetModel: IWidget) => {
    convertColumnToMeasure(tempColumn)
    addColumnToRows(rows, tempColumn)
    widgetModel.settings.chartModel.addSerie(tempColumn, chartType)
    emitter.emit('seriesAdded', tempColumn)
}

const convertColumnToMeasure = (tempColumn: IWidgetColumn) => {
    if (tempColumn.fieldType === 'ATTRIBUTE') {
        tempColumn.fieldType = 'MEASURE'
        tempColumn.aggregation = 'COUNT'
    }
}

const addColumnToRows = (rows: IWidgetColumn[], tempColumn: IWidgetColumn) => {
    const index = rows.findIndex((column: IWidgetColumn) => column.columnName === tempColumn.columnName)
    if (index === -1) rows.push(tempColumn)
}

export const removeSerieFromWidgetModel = (widgetModel: IWidget, column: IWidgetColumn, chartType: string | undefined) => {
    widgetModel.settings.chartModel.removeSerie(column)
    const allSeriesOption = chartType !== 'pie' && chartType !== 'solidgauge'
    removeColumnFromSubmodel(column, widgetModel.settings.accesssibility.seriesAccesibilitySettings, allSeriesOption)
    removeColumnFromSubmodel(column, widgetModel.settings.series.seriesSettings, allSeriesOption)
    emitter.emit('seriesRemoved', column)
}

const removeColumnFromSubmodel = (column: IWidgetColumn, array: any[], allSeriesOption: boolean) => {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = array[i].names.length - 1; j >= 0; j--) {
            const serieName = array[i].names[j]
            if (serieName === column.columnName) {
                array[i].names.splice(j, 1)
            }
            if (!allSeriesOption && array[i].names.length === 0) array.splice(i, 1)
        }
    }
}