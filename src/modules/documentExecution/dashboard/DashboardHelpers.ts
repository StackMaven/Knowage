import { IDashboard, IDashboardConfiguration, IDataset, IVariable, IWidget } from './Dashboard'
import { formatWidgetForSave } from './widget/WidgetEditor/helpers/WidgetEditorHelpers'
import { setVariableValueFromDataset } from './generalSettings/VariablesHelper'
import mitt from 'mitt'
export const emitter = mitt()
import cryptoRandomString from 'crypto-random-string'
import deepcopy from 'deepcopy'
import { formatChartJSWidget } from './widget/WidgetEditor/helpers/chartWidget/chartJS/ChartJSHelpers'
import { formatHighchartsWidget } from './widget/WidgetEditor/helpers/chartWidget/highcharts/HighchartsHelpers'
import { KnowageHighchartsPieChart } from './widget/ChartWidget/classes/highcharts/KnowageHighchartsPieChart'


export const createNewDashboardModel = () => {
    const dashboardModel = {
        sheets: [],
        widgets: [],
        configuration: {
            id: cryptoRandomString({ length: 16, type: 'base64' }),
            name: '',
            label: '',
            description: '',
            associations: [],
            datasets: [],
            variables: [],
            themes: {},
            selections: []
        },
        version: "8.2.0"
    } as IDashboard

    return dashboardModel
}

export const updateWidgetHelper = (dashboardId: string, widget: IWidget, dashboards: any) => {
    for (let i = 0; i < dashboards[dashboardId].widgets.length; i++) {
        if (widget.id === dashboards[dashboardId].widgets[i].id) {
            const tempWidget = deepcopy(widget)
            tempWidget.settings.chartModel = new KnowageHighchartsPieChart(tempWidget.settings.chartModel.model)
            dashboards[dashboardId].widgets[i] = tempWidget
            emitter.emit("widgetUpdatedFromStore", widget)
        }
    }
}

export const deleteWidgetHelper = (dashboardId: string, widget: IWidget, dashboards: any) => {
    if (!dashboards[dashboardId]) return
    const index = dashboards[dashboardId].widgets.findIndex((tempWidget: IWidget) => tempWidget.id === widget.id)
    if (index !== -1) {
        dashboards[dashboardId].widgets.splice(index, 1)
        deleteWidgetFromSheets(dashboards[dashboardId], widget.id as string)
    }

}

const deleteWidgetFromSheets = (dashboard: IDashboard, widgetId: string) => {
    const sheets = dashboard.sheets as any
    for (let i = sheets.length - 1; i >= 0; i--) {
        const widgets = sheets[i].widgets.lg
        for (let j = widgets.length - 1; j >= 0; j--) {
            if (widgets[j].id === widgetId) {
                widgets.splice(j, 1)
            }
        }
    }
}

export const formatDashboardForSave = (dashboard: IDashboard) => {
    for (let i = 0; i < dashboard.widgets.length; i++) {
        dashboard.widgets[i] = formatWidgetForSave(dashboard.widgets[i]) as IWidget
    }
    formatVariablesForSave(dashboard.configuration)
}

const formatVariablesForSave = (dashboardConfiguration: IDashboardConfiguration) => {
    if (!dashboardConfiguration || !dashboardConfiguration.variables) return
    dashboardConfiguration.variables.forEach((variable: IVariable) => delete variable.pivotedValues)
}

export const formatNewModel = async (dashboard: IDashboard, datasets: IDataset[], $http: any) => {
    for (let i = 0; i < dashboard.configuration.variables.length; i++) {
        if (dashboard.configuration.variables[i].type === 'dataset') await setVariableValueFromDataset(dashboard.configuration.variables[i], datasets, $http)
    }

    for (let i = 0; i < dashboard.widgets.length; i++) {
        formatWidget(dashboard.widgets[i])
    }
    return dashboard
}

const formatWidget = (widget: IWidget) => {
    switch (widget.type) {
        case 'chartJS':
            formatChartJSWidget(widget)
            break
        case 'highcharts':
            formatHighchartsWidget(widget)
    }
}