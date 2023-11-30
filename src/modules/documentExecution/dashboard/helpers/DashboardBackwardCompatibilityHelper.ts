import { formatVegaChartsWidget } from './chartWidget/vega/VegaChartsCompatibilityHelper'
import { formatMapWidget } from './mapWidget/MapCompatibilityHelper'
import { formatTableWidget } from './tableWidget/TableWidgetCompatibilityHelper'
import { formatSelectorWidget } from '@/modules/documentExecution/dashboard/helpers/selectorWidget/SelectorWidgetCompatibilityHelper'
import { IAssociation, IDashboard, IDashboardConfiguration, IDataset, IDatasetParameter, ISelection, IVariable, IWidget, IWidgetColumn, IWidgetColumnFilter, IDashboardDataset, IDashboardDriver, IBackground, IMenuAndWidgets } from '../Dashboard'
import { formatSelectionWidget } from './selectionWidget/SelectionsWidgetCompatibilityHelper'
import { setVariableValueFromDataset } from '../generalSettings/VariablesHelper'
import deepcopy from 'deepcopy'
import cryptoRandomString from 'crypto-random-string'
import { formatHTMLWidget } from './htmlWidget/HTMLWidgetCompatibilityHelper'
import { formatTextWidget } from './textWidget/TextWidgetCompatibilityHelper'
import { getFormattedDatasetDrivers } from '../dataset/DatasetEditorDataTab/DatasetEditorDataDetail/DatasetEditorDriverDialog/DatasetEditorDatasetDriverFormatterHelper'
import { formatHighchartsWidget } from './chartWidget/highcharts/HighchartsWidgetCompatibilityHelper'
import { formatChartJSWidget } from './chartWidget/chartJS/ChartJSWidgetCompatibilityHelper'
import { formatImageWidget } from './imageWidget/ImageWidgetCompatibilityHelper'
import { formatCustomChartWidget } from './customChart/CustomChartWidgetCompatibilityHelper'
import { formatPivotTabletWidget } from './pivotWidget/PivotTableCompatibilityHelper'
import { formatDiscoveryWidget } from './discoveryWidget/DiscoveryWidgetCompatibilityHelper'
import { formatPythonWidget } from './pythonWidget/PythonWidgetCompatibilityHelper'
import { formatRWidget } from './rWidget/RWidgetCompatibilityHelper'
import { addWidgetMenuConfig } from '../DashboardHelpers'

const datasetIdLabelMap = {}

export const formatModel = async (model: any, document: any, datasets: IDataset[], drivers: IDashboardDriver[], profileAttributes: { name: string; value: string }[], $http: any, user: any) => {
    if (!model.sheets) return

    loadDatasetIdNameMap(datasets)
    const formattedModel = {
        id: cryptoRandomString({ length: 16, type: 'base64' }),
        widgets: [],
        version: model.knowageVersion,
        configuration: await getFormattedModelConfiguration(model, document, drivers, profileAttributes, datasets, $http),
        sheets: []
    } as any
    for (let i = 0; i < model.sheets.length; i++) {
        const formattedSheet = formatSheet(model.sheets[i], formattedModel, user, drivers)
        formattedModel.sheets.push(formattedSheet)
    }

    return formattedModel
}

const loadDatasetIdNameMap = (datasets: IDataset[]) => {
    if (!datasets) return
    datasets.forEach((dataset: IDataset) => {
        datasetIdLabelMap[dataset.label] = dataset.id.dsId
    })
}

const getDatasetId = (datasetLabel: string) => {
    return datasetIdLabelMap[datasetLabel]
}

const getFormattedModelConfiguration = async (model: any, document: any, drivers: any[], profileAttributes: { name: string; value: string }[], datasets: IDataset[], $http: any) => {
    const formattedConfiguration = {
        id: document.id,
        name: document.name,
        label: document.label,
        description: document.description,
        cssToRender: model.configuration.cssToRender,
        associations: getFormattedAssociations(model),
        datasets: getFormattedDatasets(model),
        variables: await getFormattedVariables(model, drivers, profileAttributes, datasets, $http),
        selections: getFormattedSelections(model),
        theme: {},
        background: getFormattedSheetBackground(model),
        menuWidgets: getFormattedMenuAndWidgets(model)
    } as IDashboardConfiguration

    return formattedConfiguration
}

const getFormattedSheetBackground = (model: any) => {
    const modelStyle = model.configuration.style

    const formattedBackground = { sheetsBackgroundColor: '', imageBackgroundUrl: '', imageBackgroundSize: '' } as IBackground
    if (modelStyle.sheetsBackgroundColor) formattedBackground.sheetsBackgroundColor = modelStyle.sheetsBackgroundColor
    if (modelStyle.imageBackgroundUrl) formattedBackground.imageBackgroundUrl = modelStyle.imageBackgroundUrl
    if (modelStyle.imageBackgroundSize) formattedBackground.imageBackgroundSize = modelStyle.imageBackgroundSize

    return formattedBackground
}

const getFormattedMenuAndWidgets = (model: any) => {
    const modelConfig = model.configuration
    const formattedMenuAndWIdgets = { showExcelExport: modelConfig.showExcelExport ?? true, showScreenshot: modelConfig.showScreenshot ?? true, showSelectionButton: modelConfig.showSelectionButton ?? true, enableChartChange: true, enableCaching: true, enableCustomHeader: false, enableWidgetMenu: true } as IMenuAndWidgets

    return formattedMenuAndWIdgets
}

const getFormattedAssociations = (model: any) => {
    if (!model.configuration || !model.configuration.associations) return []
    const formattedAssociations = [] as IAssociation[]
    for (let i = 0; i < model.configuration.associations.length; i++) {
        formattedAssociations.push(getFormattedAssociation(model.configuration.associations[i]))
    }
    return formattedAssociations
}

const getFormattedAssociation = (association: any) => {
    const formattedAssociation = { id: association.id, fields: [] } as IAssociation
    association.fields?.forEach((field: { column: string; store: string; type: string }) => formattedAssociation.fields.push({ column: field.column, dataset: getDatasetId(field.store) }))
    return formattedAssociation
}

const getFormattedDatasets = (model: any) => {
    if (!model.configuration || !model.configuration.datasets) return
    const formattedDatasets = [] as IDashboardDataset[]
    for (let i = 0; i < model.configuration.datasets.length; i++) {
        formattedDatasets.push(getFormattedDataset(model.configuration.datasets[i]))
    }

    return formattedDatasets
}

const getFormattedDataset = (dataset: any) => {
    const formattedDataset = { id: dataset.dsId, dsLabel: dataset.dsLabel, cache: dataset.useCache } as IDashboardDataset
    if (dataset.indexes) formattedDataset.indexes = dataset.indexes
    if (dataset.parameters) formattedDataset.parameters = getFormattedDatasetParameters(dataset)
    if (dataset.drivers) formattedDataset.drivers = getFormattedDatasetDrivers(dataset)

    return formattedDataset
}

const getFormattedDatasetParameters = (dataset: any) => {
    const parameters = [] as IDatasetParameter[]
    Object.keys(dataset.parameters).forEach((key: string) =>
        parameters.push({
            name: key,
            type: 'static',
            value: dataset.parameters[key]
        })
    )
    return parameters
}

const getFormattedVariables = async (model: any, drivers: any[], profileAttributes: { name: string; value: string }[], datasets: IDataset[], $http: any) => {
    const formattedVariables = [] as IVariable[]
    if (!model.configuration || !model.configuration.variables) return formattedVariables
    for (let i = 0; i < model.configuration.variables.length; i++) {
        const tempVariable = model.configuration.variables[i]
        const formattedVariable = { name: tempVariable.name, type: tempVariable.type, value: '' } as IVariable
        switch (formattedVariable.type) {
            case 'static':
                formattedVariable.value = tempVariable.value
                break
            case 'dataset':
                formattedVariable.dataset = tempVariable.dataset
                formattedVariable.column = tempVariable.column
                await setVariableValueFromDataset(formattedVariable, datasets, $http)
                break
            case 'driver':
                formattedVariable.driver = tempVariable.driver
                formattedVariable.value = getDriverValue(tempVariable.driver, drivers)
                break
            case 'profile':
                formattedVariable.attribute = tempVariable.attribute
                formattedVariable.value = getProfileAttributeValue(tempVariable.attribute, profileAttributes)
                break
        }
        formattedVariables.push(formattedVariable)
    }
    return formattedVariables
}

const getDriverValue = (driverUrlName: string, drivers: any[]) => {
    if (!drivers) return ''
    const index = drivers.findIndex((driver: any) => driver.urlName === driverUrlName)
    return index !== -1 ? drivers[index].value : ''
}

const getProfileAttributeValue = (profileAttributeName: string, profileAttributes: { name: string; value: string }[]) => {
    if (!profileAttributes) return ''
    const index = profileAttributes.findIndex((profileAttribute: { name: string; value: string }) => profileAttribute.name === profileAttributeName)
    return index !== -1 ? profileAttributes[index].value : ''
}

const getFormattedSelections = (model: any) => {
    if (!model.configuration || !model.selections) return []
    const formattedSelections = [] as ISelection[]
    model.selections.forEach((selection: { ds: string; columnName: string; value: string | (string | number)[]; aggregated: boolean }) => {
        formattedSelections.push({ datasetId: getDatasetId(selection.ds), datasetLabel: selection.ds, columnName: selection.columnName, value: Array.isArray(selection.value) ? selection.value : [selection.value], aggregated: selection.aggregated, timestamp: new Date().getTime() })
    })
    return formattedSelections
}

const formatSheet = (sheet: any, formattedModel: any, user: any, drivers: IDashboardDriver[]) => {
    if (!sheet.widgets) return

    const formattedSheet = deepcopy(sheet)
    formattedSheet.id = cryptoRandomString({ length: 16, type: 'base64' })
    formattedSheet.widgets = { lg: [], md: [], sm: [], xs: [], xxs: [] }

    for (let i = 0; i < sheet.widgets.length; i++) {
        const tempWidget = sheet.widgets[i]
        const sizes = ['lg', 'md', 'sm', 'xs', 'xxs']
        sizes.forEach((size: string) => formattedSheet.widgets[size].push({ id: tempWidget.id, h: tempWidget.sizeY, w: tempWidget.sizeX, x: tempWidget.col, y: tempWidget.row, i: cryptoRandomString({ length: 16, type: 'base64' }), moved: false }))
        addWidgetToModel(tempWidget, formattedModel, user, drivers)
    }

    return formattedSheet
}

const addWidgetToModel = (widget: any, formattedModel: any, user: any, drivers: IDashboardDriver[]) => {
    if (checkIfWidgetInModel(widget, formattedModel)) return
    const formattedWidget = formatWidget(widget, formattedModel, user, drivers)
    if (formattedWidget.settings.configuration.updateFromSelections === undefined) formattedWidget.settings.configuration.updateFromSelections = true
    addWidgetMenuConfig(formattedWidget)
    formattedModel.widgets.push(formattedWidget)
}

const checkIfWidgetInModel = (widget: any, formattedModel: any) => {
    let found = false
    if (!formattedModel.widgets) return found
    for (let i = 0; i < formattedModel.widgets.length; i++) {
        if (formattedModel.widgets[i].id === widget.id) {
            found = true
            break
        }
    }

    return found
}

export const formatWidget = (widget: any, formattedModel: IDashboard, user: any, drivers: IDashboardDriver[]) => {
    let formattedWidget = {} as any
    switch (widget.type) {
        case 'table':
            formattedWidget = formatTableWidget(widget, formattedModel, drivers)
            break
        case 'selector':
            formattedWidget = formatSelectorWidget(widget)
            break
        case 'selection':
            formattedWidget = formatSelectionWidget(widget)
            break
        case 'html':
            formattedWidget = formatHTMLWidget(widget)
            break
        case 'text':
            formattedWidget = formatTextWidget(widget)
            break
        case 'chart':
            formattedWidget = getFormattedChartWidget(widget, user)
            break
        case 'image':
            formattedWidget = formatImageWidget(widget)
            break
        case 'customchart':
            formattedWidget = formatCustomChartWidget(widget)
            break
        case 'static-pivot-table':
            formattedWidget = getFormattedPivotWidget(widget, user)
            break
        case 'discovery':
            formattedWidget = formatDiscoveryWidget(widget, drivers)
            break
        case 'map':
            formattedWidget = formatMapWidget(widget, formattedModel, drivers)
            break
        case 'python':
            formattedWidget = formatPythonWidget(widget)
            break
        case 'r':
            formattedWidget = formatRWidget(widget)
    }

    return formattedWidget
}

const getFormattedChartWidget = (widget: any, user: any) => {
    // TODO widgetChange
    if (widget.content?.chartTemplate?.CHART?.type === 'WORDCLOUD') return formatVegaChartsWidget(widget)
    else if (user?.enterprise) return formatHighchartsWidget(widget)
    else return formatChartJSWidget(widget)
}

const getFormattedPivotWidget = (widget: any, user: any) => {
    // TODO widgetChange
    // return formatCEPivotTabletWidget(widget)

    if (user?.enterprise) return formatPivotTabletWidget(widget)
    else return formatPivotTabletWidget(widget)
}

export const getFiltersForColumns = (formattedWidget: IWidget, oldWidget: any) => {
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
