import { IWidgetInteractions, IWidgetResponsive } from "../../Dashboard";
import { HighchartsPieChart } from "../../widget/ChartWidget/classes/highcharts/KnowageHighchartsPieChart";
import { HighchartsPieChartModel } from "./DashboardHighchartsPieChartWidget";

export interface IHighchartsWidgetSettings {
    updatable: boolean,
    clickable: boolean,
    chartModel: HighchartsPieChart | null,
    configuration: IHighchartsWidgetConfiguration,
    interactions: IWidgetInteractions,
    style: IHighchartsWidgetStyle,
    responsive: IWidgetResponsive
}

export interface IDrillOrderItem {
    orderColumnId: string
    orderColumn: string,
    orderType: "ASC" | "DESC"
}

export interface IHighchartsWidgetConfiguration {
    exports: IWidgetExports
}

export interface IHighchartsWidgetStyle {
    title: IWidgetTitle,
    padding: IWidgetPaddingStyle,
    borders: IWidgetBordersStyle,
    shadows: IWidgetShadowsStyle,
    background: IWidgetBackgroundStyle
}

export interface HighchartsChartModel {
    lang: {
        noData: string
    },
    chart: {
        options3d: HighchartsOptions3D
        events: any,
        plotBackgroundColor: any,
        plotBorderWidth: any,
        plotShadow: boolean,
        type: string
    },
    noData: HighchartsNoDataConfiguration,
    plotOptions: any,
    series: HighchartsChartSerie[],
    settings: any,
    credits: {
        enabled: boolean
    },
    title: {
        text: string
    },
    tooltip: {
        pointFormat: string
    },
    accessibility: HighchartsAccessibilitySettings,
    plotOptions: {
        pie: HighchartsChartPiePlotOptions
    },
    legend: {
        enabled: boolean,
        align: string,
        verticalAlign: string,
        layout: string,
    }
}

export interface HighchartsOptions3D {
    enabled: boolean,
    alpha: number,
    beta: number,
    viewDistance: number
}


export interface HighchartsNoDataConfiguration {
    position: {
        align: string,
        verticalAlign: string
    },
    style: {
        fontFamily: string
        fontSize: string
        fontWeight: string
        color: string
        backgroundColor: string
    }
}

export interface HighchartsAccessibilitySettings {
    enabled: boolean,
    description: string,
    keyboardNavigation: {
        enabled: boolean,
        order: string[]
    }
}

export interface HighchartsChartPiePlotOptions {
    depth: string,
    allowPointSelect: boolean,
    cursor: string,
    dataLabels: {
        enabled: boolean,
        format: string
    }
}

export interface HighchartsChartSerie {
    name: string,
    colorByPoint: boolean,
    groupingFunction: string,
    data: HighchartsChartSerieData[]
    accessibility: HighchartsSerieAccessibility
}

export interface HighchartsSerieAccessibility {
    enabled: boolean,
    description: string,
    exposeAsGroupOnly: boolean
    keyboardNavigation: { enabled: boolean }
}

export interface HighchartsChartSerieData {
    name: string,
    y: number,
    sliced?: boolean,
    selected?: boolean
}