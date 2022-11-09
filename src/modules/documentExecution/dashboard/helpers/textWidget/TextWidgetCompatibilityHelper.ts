import { IWidget, IWidgetColumn, IWidgetExports, IWidgetInteractions } from "../../Dashboard"
import { ITextWidgetConfiguration, ITextWidgetEditor, ITextWidgetSettings } from "../../interfaces/DashboardTextWidget"
import { getFormattedStyle } from "./TextWidgetStyleHelper"
import * as widgetCommonDefaultValues from '../../widget/WidgetEditor/helpers/common/WidgetCommonDefaultValues'
import cryptoRandomString from "crypto-random-string"
import { getFormattedInteractions } from "../common/WidgetInteractionsHelper"

const columnNameIdMap = {}

export const formatTextWidget = (widget: any) => {
    const formattedWidget = {
        id: widget.id,
        dataset: widget.dataset.dsId ? widget.dataset.dsId[0] : null,
        type: widget.type,
        columns: getFormattedWidgetColumns(widget),
        theme: '',
        settings: {} as ITextWidgetSettings
    } as IWidget
    formattedWidget.settings = getFormattedWidgetSettings(widget) as ITextWidgetSettings
    return formattedWidget
}

const getFormattedWidgetColumns = (widget: any,) => {
    if (!widget.content || !widget.content.columnSelectedOfDataset) return []
    const formattedColumns = [] as IWidgetColumn[]
    for (let i = 0; i < widget.content.columnSelectedOfDataset.length; i++) {
        formattedColumns.push(getFormattedWidgetColumn(widget.content.columnSelectedOfDataset[i]))
    }
    return formattedColumns
}

const getFormattedWidgetColumn = (widgetColumn: any) => {
    const formattedColumn = { id: cryptoRandomString({ length: 16, type: 'base64' }), columnName: widgetColumn.name, alias: widgetColumn.alias, type: widgetColumn.type, fieldType: widgetColumn.fieldType, multiValue: widgetColumn.multiValue, filter: {} } as IWidgetColumn
    if (widgetColumn.isCalculated) {
        formattedColumn.formula = widgetColumn.formula
        formattedColumn.formulaEditor = widgetColumn.formulaEditor
    }
    columnNameIdMap[formattedColumn.columnName] = formattedColumn.id
    if (widgetColumn.aggregationSelected) formattedColumn.aggregation = widgetColumn.aggregationSelected
    return formattedColumn
}

const getFormattedWidgetSettings = (widget: any) => {
    const formattedSettings = {
        updatable: widget.updateble,
        clickable: widget.cliccable,
        editor: getFormattedEditor(widget),
        configuration: getFormattedConfiguration(widget),
        style: getFormattedStyle(widget),
        interactions: getFormattedInteractions(widget) as IWidgetInteractions,
        responsive: widgetCommonDefaultValues.getDefaultResponsivnes()
    } as ITextWidgetSettings
    return formattedSettings
}

const getFormattedEditor = (widget: any) => {
    return { text: widget.content?.text ? getFormattedText(widget.content.text) : '' } as ITextWidgetEditor
}

const getFormattedConfiguration = (widget: any) => {
    return {
        exports: { showExcelExport: widget.style?.showExcelExport ?? false, showScreenshot: widget.style?.showScreenshot ?? false } as IWidgetExports
    } as ITextWidgetConfiguration
}

const getFormattedText = (originalText: string) => {
    console.log(">>>>>>>> ORIGINAL TEXT: ", originalText)
    if ((originalText.indexOf("$F{") < 0 && originalText.indexOf("$P{") < 0 && originalText.indexOf("$V{") < 0)) return originalText
    let formattedText = replaceParameters(originalText)
    formattedText = replaceVariables(formattedText)
    formattedText = replaceColumns(formattedText)

    console.log(">>>>>>>>>>>>> FORMATTED TEXT: ", formattedText)
    return formattedText
}

const replaceParameters = (text: string) => {
    const regex = /\$P{(.+?)\}/g;
    return text.replace(regex, parametersReplacer)
}

const parametersReplacer = (match: string, parameterUrlName: string) => {
    return `[kn-parameter='${parameterUrlName}']`
}

const replaceVariables = (text: string) => {
    const regex = /\$V{(.+?)\}/g;
    return text.replace(regex, variablesReplacer)
}

const variablesReplacer = (match: string, variableName: string) => {
    return `[kn-variable='${variableName}']`
}

const replaceColumns = (text: string) => {
    return text
}

const columnsReplacer = (match: string, parameterUrlName: string) => {
    return `[kn-parameter='${parameterUrlName}']`
}