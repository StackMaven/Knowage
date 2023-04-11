import { getFormattedStyle } from './MapStyleHelper'
import { IWidget, IWidgetResponsive, IWidgetExports } from './../../Dashboard.d'
import { IMapWidgetSettings, IMapWidgetStyle } from './../../interfaces/mapWidget/DashboardMapWidget.d'
import * as mapWidgetDefaultValues from '../../widget/WidgetEditor/helpers/mapWidget/MapWidgetDefaultValues'
import * as widgetCommonDefaultValues from '../../widget/WidgetEditor/helpers/common/WidgetCommonDefaultValues'
import { hexToRgba } from '../FormattingHelpers'

const columnNameIdMap = {}

export const formatMapWidget = (widget: any) => {
    console.log('--------- ORIGINAL WIDGET: ', widget)

    const formattedWidget = {
        id: widget.id,
        dataset: widget.dataset.dsId,
        type: widget.type,
        columns: [],
        layers: getFormattedLayers(widget),
        theme: '',
        style: {},
        settings: {} as IMapWidgetSettings
    } as IWidget
    formattedWidget.settings = getFormattedWidgetSettings(widget)
    getFormattedSettingsFromLayers(widget, formattedWidget) // TODO - Move to other file
    console.log('--------- FORMATTED WIDGET: ', formattedWidget)

    return formattedWidget
}

const getFormattedWidgetSettings = (widget: any) => {
    const formattedSettings = {
        updatable: widget.updateble,
        clickable: widget.cliccable,
        configuration: getFormattedConfiguration(widget),
        visualization: getFormattedVisualization(widget),
        conditionalStyles: getFormattedConditionalStyles(widget),
        legend: getFormattedLegend(widget),
        dialog: getFormattedDialogSettings(widget),
        style: getFormattedStyle(widget) as IMapWidgetStyle,
        responsive: widgetCommonDefaultValues.getDefaultResponsivnes() as IWidgetResponsive,
        tooltips: getFormattedTooltipsSettings()
    } as IMapWidgetSettings
    return formattedSettings
}

// TODO - formatirati layere kad zavrsimo sprint, pitaj boga sta nam sve treba odavde a sta ne......
const getFormattedLayers = (widget: any) => {
    return widget.content.layers
}

// TODO
const getFormattedConfiguration = (widget: any) => {
    return {
        baseLayer: getFormattedBaseLayer(widget),
        exports: { showExcelExport: widget.style?.showExcelExport ?? false, showScreenshot: widget.style?.showScreenshot ?? false } as IWidgetExports
    }
}

const getFormattedBaseLayer = (widget: any) => {
    const formattedBaseLayer = mapWidgetDefaultValues.getDefaultBaseLayerSettings()
    if (!widget.content) return formattedBaseLayer
    formattedBaseLayer.backgroundLayerId = widget.content.backgroundLayerId
    formattedBaseLayer.zoomFactor = widget.content.zoomFactor
    formattedBaseLayer.showScale = widget.content.showScale
    formattedBaseLayer.autoCentering = widget.content.autoCentering
    return formattedBaseLayer
}

// TODO
const getFormattedVisualization = (widget: any) => {
    return {}
}

// TODO
const getFormattedConditionalStyles = (widget: any) => {
    return {}
}

// TODO
const getFormattedLegend = (widget: any) => {
    const formattedLegendSettings = mapWidgetDefaultValues.getDefaultLegendSettings()
    if (!widget.style || !widget.style.legend) return formattedLegendSettings
    formattedLegendSettings.alignment = widget.style.legend.alignment
    formattedLegendSettings.visualizationType = widget.style.legend.visualizationType
    if (widget.style.legend.format) {
        formattedLegendSettings.precision = widget.style.legend.format.precision
        formattedLegendSettings.prefix = widget.style.legend.format.prefix
        formattedLegendSettings.suffix = widget.style.legend.format.suffix
    }
    return formattedLegendSettings
}

const getFormattedDialogSettings = (widget: any) => {
    const formattedDialogSettings = mapWidgetDefaultValues.getDefaultDialogSettings()
    if (!widget.style || !widget.style.tooltip) return formattedDialogSettings
    if (widget.style.tooltip.box) {
        formattedDialogSettings.height = widget.style.tooltip.box.height
        formattedDialogSettings.width = widget.style.tooltip.box.width
    }
    if (widget.style.tooltip.text) {
        formattedDialogSettings.style['font-size'] = widget.style.tooltip.text['font-size']
        formattedDialogSettings.style.color = widget.style.tooltip.text.color ? hexToRgba(widget.style.tooltip.text.color) : ''
    }
    return formattedDialogSettings
}

const getFormattedTooltipsSettings = () => {
    const formattedTooltips = mapWidgetDefaultValues.getDefaultMapTooltips()
    return formattedTooltips
}

const getFormattedSettingsFromLayers = (widget: any, formattedWidget: IWidget) => {
    const layers = widget.content.layers
    layers?.forEach((layer: any) => {
        layer?.content?.columnSelectedOfDataset?.forEach((column: any) => {
            addLayerColumnTooltipOptions(column, formattedWidget, layer.name)
        })
    })
}

const addLayerColumnTooltipOptions = (oldColumn: any, formattedWidget: IWidget, layerName: string) => {
    if (oldColumn?.properties?.showTooltip) {
        formattedWidget.settings.tooltips.layers.push({ name: layerName, columns: [oldColumn.name] })
    }
} 