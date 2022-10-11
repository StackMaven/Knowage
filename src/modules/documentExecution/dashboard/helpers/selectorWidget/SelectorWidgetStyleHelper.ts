import { IWidgetBordersStyle, IWidgetPaddingStyle, IWidgetShadowsStyle, IWidgetTitle } from "../../Dashboard"
import { ISelectorWidgetBackgroundStyle, ISelectorWidgetLabelStyle, ISelectorWidgetStyle } from "../../interfaces/DashboardSelectorWidget"
import { hexToRgb } from '../FormattingHelpers'
import * as widgetCommonDefaultValues from '../../widget/WidgetEditor/helpers/common/WidgetCommonDefaultValues'
import * as selectorWidgetDefaultValues from '../../widget/WidgetEditor/helpers/selectorWidget/SelectorWidgetDefaultValues'

export const getFormattedStyle = (widget: any) => {
    return {
        title: getFormattedTitleStyle(widget),
        label: getFormattedLabelStyle(widget),
        background: getFormattedBackgroundStyle(widget),
        padding: getFormattedPaddingStyle(widget),
        borders: getFormattedBorderStyle(widget),
        shadow: getFormattedShadowsStyle(widget)
    } as ISelectorWidgetStyle
}

const getFormattedTitleStyle = (widget: any) => {
    if (!widget.style || !widget.style.title) return widgetCommonDefaultValues.getDefaultTitleStyle()
    const formattedTitleStyle = {
        enabled: widget.style.titles,
        text: widget.style.title.label,
        height: widget.style.title.height,
        properties: {
            'font-weight': widget.style.title.font['font-weight'] ?? '',
            'font-style': widget.style.title.font['font-style'] ?? '',
            'font-size': widget.style.title.font['font-size'] ?? '',
            'font-family': widget.style.title.font['font-family'] ?? '',
            'justify-content': widget.style.title.font['text-align'] ?? '',
            color: widget.style.title.font.color ?? '',
            'background-color': widget.style.title['background-color'] ?? ''
        }
    } as IWidgetTitle

    return formattedTitleStyle

}

const getFormattedLabelStyle = (widget) => {
    if (!widget.style) return selectorWidgetDefaultValues.getDefaultLabelStyle()
    const formattedLabelStyle = {
        wrapText: widget.settings.wrapText ?? '',
        properties: {
            'font-weight': widget.style['font-weight'] ?? '',
            'font-style': widget.style['font-style'] ?? '',
            'font-size': widget.style['font-size'] ?? '',
            'font-family': widget.style['font-family'] ?? '',
            'justify-content': widget.style['justify-content'] ?? '',
            color: widget.style.color ?? '',
            'background-color': widget.style['background-color'] ?? '',
        }
    } as ISelectorWidgetLabelStyle

    return formattedLabelStyle
}

const getFormattedBackgroundStyle = (widget) => {
    return { properties: { 'background-color': widget.style?.backgroundColor ?? '' } } as ISelectorWidgetBackgroundStyle
}


const getFormattedPaddingStyle = (widget: any) => {
    if (!widget.style || !widget.style.padding) return widgetCommonDefaultValues.getDefaultPaddingStyle()

    return {
        enabled: widget.style.padding.enabled,
        properties: {
            "padding-top": widget.style.padding['padding-top'],
            "padding-left": widget.style.padding['padding-left'],
            "padding-bottom": widget.style.padding['padding-bottom'],
            "padding-right": widget.style.padding['padding-right'],
            unlinked: widget.style.padding.unlinked
        }
    } as IWidgetPaddingStyle
}

const getFormattedBorderStyle = (widget: any) => {
    if (!widget.style || !widget.style.border) return widgetCommonDefaultValues.getDefaultBordersStyle()

    return { enabled: widget.style.borders, properties: { ...widget.style.border, 'border-color': hexToRgb(widget.style.border['border-color']) } } as IWidgetBordersStyle
}

const getFormattedShadowsStyle = (widget: any) => {
    if (!widget.style || !widget.style.shadow) return widgetCommonDefaultValues.getDefaultShadowsStyle()

    return {
        enabled: widget.style.shadows,
        properties: {
            "box-shadow": widget.style.shadow["box-shadow"],
            "color": hexToRgb(widget.style.backgroundColor)
        }
    } as IWidgetShadowsStyle
}
