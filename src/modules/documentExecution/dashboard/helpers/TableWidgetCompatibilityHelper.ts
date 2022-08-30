import { IWidget, IWidgetColumn, IWidgetColumnFilter } from '../Dashboard'
import cryptoRandomString from 'crypto-random-string'

export const formatTableWidget = (widget: any) => {
    console.log("TableWidgetCompatibilityHelper - formatTableWidget called for: ", widget)
    const formattedWidget = {
        id: widget.id, dataset: widget.dataset.dsId, type: widget.type, columns: getFormattedWidgetColumns(widget), conditionalStyles: [], interactions: [], theme: '', styles: {}, settings: getFormattedWidgetSettings(widget)
    } as IWidget
    getFiltersForColumns(formattedWidget, widget)

    console.log("TableWidgetCompatibilityHelper - FORMATTED WIDGET: ", formattedWidget)
    return formattedWidget
}

const getFormattedWidgetColumns = (widget: any) => {
    if (!widget?.content?.columnSelectedOfDataset) return
    const formattedColumns = [] as IWidgetColumn[]
    for (let i = 0; i < widget.content.columnSelectedOfDataset.length; i++) {
        formattedColumns.push(getFormattedWidgetColumn(widget.content.columnSelectedOfDataset[i]))
    }
    return formattedColumns
}

const getFormattedWidgetColumn = (widgetColumn: any) => {
    const formattedColumn = { id: cryptoRandomString({ length: 16, type: 'base64' }), columnName: widgetColumn.name, alias: widgetColumn.alias, type: widgetColumn.type, fieldType: widgetColumn.fieldType, multiValue: widgetColumn.multiValue, filter: {} } as IWidgetColumn
    if (widgetColumn.aggregationSelected) formattedColumn.aggregation = widgetColumn.aggregationSelected
    return formattedColumn
}


const getFormattedWidgetSettings = (widget: any) => {
    const formattedSettings = { sortingColumn: widget.settings?.sortingColumn, sortingOrder: widget.settings?.sortingOrder, updatable: widget.updateble, clickable: widget.cliccable, conditionalStyle: getFormattedConditionalStyles(widget), configuration: getFormattedConfiguration(widget), interactions: getFormattedInteractions(widget), pagination: getFormattedPaginations(widget), style: getFormattedStyle(widget), tooltips: getFormattedTooltips(widget), visualization: getFormattedVisualizations(widget), responsive: getFormattedResponsivnes(widget) }
    return formattedSettings
}

// TODO
const getFormattedConditionalStyles = (widget: any) => {
    return {}
}

// TODO
const getFormattedConfiguration = (widget: any) => {
    return { columnGroups: [], exports: {}, headers: {}, rows: getFormattedRows(widget), summaryRows: getFormattedSummaryRows(widget) }
}

const getFormattedRows = (widget: any) => {
    const formattedRows = { "indexColumn": widget.settings?.indexColumn, rowSpan: { enabled: false, column: [] as string[] } }
    if (!widget?.content?.columnSelectedOfDataset) return formattedRows

    for (let i = 0; i < widget.content.columnSelectedOfDataset.length; i++) {
        const tempColumn = widget.content.columnSelectedOfDataset[i]
        if (tempColumn.rowSpan) {
            formattedRows.rowSpan.enabled = true;
            formattedRows.rowSpan.column.push(widget.content.columnSelectedOfDataset[i].name)
        }
    }
    return formattedRows
}

const getFormattedSummaryRows = (widget: any) => {
    let formattedSummaryRows = {}
    if (widget.settings.summary) formattedSummaryRows = widget.settings.summary
    return formattedSummaryRows
}

// TODO
const getFormattedInteractions = (widget: any) => {
    return {}
}

// TODO
const getFormattedPaginations = (widget: any) => {
    if (!widget.settings?.pagination) return {}
    return { enabled: widget.settings.pagination.enabled, itemsNumber: widget.settings.pagination.itemsNumber }
}


// TODO
const getFormattedStyle = (widget: any) => {
    return {}
}


// TODO
const getFormattedTooltips = (widget: any) => {
    return []
}


// TODO
const getFormattedVisualizations = (widget: any) => {
    return {}
}

// TODO
const getFormattedResponsivnes = (widget: any) => {
    return {}
}

const getFiltersForColumns = (formattedWidget: IWidget, oldWidget: any) => {
    // console.log("----------------------- getFiltersForColumns: ", formattedWidget)
    // console.log("----------------------- getFiltersForColumns oldWidget: ", oldWidget)
    if (!oldWidget.filters || oldWidget.filters.length === 0) return
    for (let i = 0; i < oldWidget.filters.length; i++) {
        const tempFilter = oldWidget.filters[i]
        const index = formattedWidget.columns?.findIndex((column: IWidgetColumn) => column.columnName === tempFilter.colName)
        if (index !== -1) {
            formattedWidget.columns[index].filter = { enabled: true, operator: tempFilter.filterOperator, value: tempFilter.filterVal1 }
            if (tempFilter.filterVal2 && formattedWidget.columns[index].filter) (formattedWidget.columns[index].filter as IWidgetColumnFilter).value2 = tempFilter.filterVal2
        }
    }
}