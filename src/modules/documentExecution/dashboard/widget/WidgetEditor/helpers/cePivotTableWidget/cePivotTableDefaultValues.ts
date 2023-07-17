import {
    IPivotTableColumnStyles,
    IPivotColumnsConfiguration,
    IPivotFieldPanel,
    IPivotFieldPicker,
    IPivotTableColumnHeadersStyle,
    IPivotTableWidgetConditionalStyle,
    IPivotTableWidgetConditionalStyles,
    IPivotTableWidgetVisualization,
    IPivotTooltips,
    IPivotTotal
} from '@/modules/documentExecution/dashboard/interfaces/pivotTable/DashboardPivotTableWidget'
import deepcopy from 'deepcopy'
import descriptor from './cePivotTableDefaultValuesDescriptor.json'

export const getDefaultColumnStyles = () => {
    return deepcopy(descriptor.defaultColumnStyles) as IPivotTableColumnStyles
}

export const getDefaultFieldPicker = () => {
    return deepcopy(descriptor.defaultFieldPicker) as IPivotFieldPicker
}

export const getDefaultFieldPanel = () => {
    return deepcopy(descriptor.defaultFieldPanel) as IPivotFieldPanel
}

export const getDefaultTooltips = () => {
    return deepcopy(descriptor.defaultTooltips) as IPivotTooltips[]
}

export const getDefaultTotals = () => {
    return deepcopy(descriptor.defaultTotals) as IPivotTotal
}

export const getDefaultFields = () => {
    return deepcopy(descriptor.defaultColumnStyles) as IPivotTableColumnStyles
}

export const getDefaultColumnHeadersStyle = () => {
    return deepcopy(descriptor.defaultColumnHeadersStyle) as IPivotTableColumnHeadersStyle
}

export const getDefaultRowsHeadersStyle = () => {
    return deepcopy(descriptor.defaultRowsHeadersStyle) as IPivotTableColumnHeadersStyle
}

export const getDefaultConditionalStyles = () => {
    return deepcopy(descriptor.defaultConditionalStyles) as IPivotTableWidgetConditionalStyles
}

export const getDefaultConditionalStyle = () => {
    return deepcopy(descriptor.defaultConditionalStyle) as IPivotTableWidgetConditionalStyle
}

export const getDefaultVisualisationSettings = () => {
    return deepcopy(descriptor.defaultVisualisationSettings) as IPivotTableWidgetVisualization
}

export const getDefaultTotalValues = () => {
    return deepcopy(descriptor.defaultTotalValues) as IPivotColumnsConfiguration
}
