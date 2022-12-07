import { IWidget } from "@/modules/documentExecution/dashboard/Dashboard"
import { hexToRgb } from "@/modules/documentExecution/dashboard/helpers/FormattingHelpers"
import { HighchartsPieChartModel } from "@/modules/documentExecution/dashboard/interfaces/highcharts/DashboardHighchartsPieChartWidget"
import { IHighchartsOptions3D } from "@/modules/documentExecution/dashboard/interfaces/highcharts/DashboardHighchartsWidget"

export const updatePieChartModel = (oldModel: any, newModel: HighchartsPieChartModel, widgetModel: IWidget) => {
    console.log("----------------------------------- OLD MODEL: ", oldModel)
    console.log("----------------------------------- NEW MODEL: ", newModel)
    console.log("----------------------------------- WIDGET MODEL: ", widgetModel)
    newModel.chart.type = "pie"
    newModel.title = oldModel.CHART.TITLE

    getFormatted3DConfiguration(oldModel, newModel)
    getFormattedNoDataConfiguration(oldModel, newModel)
    getFormattedSeries(oldModel, newModel)
    getFormattedLegend(oldModel, newModel)








    // newModel.plotOptions.pie.cursor = 'pointer'
    // newModel.settings.colorPalette = oldModel.CHART.COLORPALETTE



    // // CATEGORIES
    // newModel.settings.categories = [oldModel.CHART.VALUES.CATEGORY.name]
    // if (oldModel.CHART.VALUES.CATEGORY.groupby) {
    //     let categoriesArray = oldModel.CHART.VALUES.CATEGORY.groupby.split(',')
    //     categoriesArray = categoriesArray.map(element => element.trim())
    //     newModel.settings.categories.push(...categoriesArray)
    // }



    // // LEGEND
    // if (oldModel.CHART.LEGEND?.show) {
    //     newModel.plotOptions.pie.showInLegend = true
    //     newModel.legend = {
    //         enabled: true,
    //         align: 'center',
    //         verticalAlign: 'bottom',
    //         layout: 'horizontal',
    //     }
    // }

    // // DRILLDOWN
    // if (oldModel.CHART.drillable && newModel.settings.categories.length > 1) {
    //     newModel.settings.drilldown = true
    // }



    return newModel
}

const getFormatted3DConfiguration = (oldModel: any, newModel: HighchartsPieChartModel) => {
    if (oldModel.CHART.show3D) {
        newModel.plotOptions.pie.depth = oldModel.CHART.depth
        newModel.chart.options3d = {
            enabled: oldModel.CHART.show3D,
            alpha: oldModel.CHART.alpha,
            beta: oldModel.CHART.beta,
            viewDistance: oldModel.CHART.viewDistance ?? 25
        } as IHighchartsOptions3D
    }
}


const getFormattedNoDataConfiguration = (oldModel: any, newModel: HighchartsPieChartModel) => {
    if (oldModel.CHART.EMPTYMESSAGE) {
        newModel.lang.noData = oldModel.CHART.EMPTYMESSAGE.text
        newModel.noData.position = oldModel.CHART.EMPTYMESSAGE.position ? { align: oldModel.CHART.EMPTYMESSAGE.position.align, verticalAlign: oldModel.CHART.EMPTYMESSAGE.position.verticalAlign } : { align: '', verticalAlign: '' }

        if (oldModel.CHART.EMPTYMESSAGE.style) {
            newModel.noData.style = {
                fontFamily: oldModel.CHART.EMPTYMESSAGE.style.fontFamily ?? '',
                fontSize: oldModel.CHART.EMPTYMESSAGE.style.fontSize ?? '',
                fontWeight: oldModel.CHART.EMPTYMESSAGE.style.fontWeight,
                color: oldModel.CHART.EMPTYMESSAGE.style.color ? hexToRgb(oldModel.CHART.EMPTYMESSAGE.style.color) : '',
                backgroundColor: ''
            }
        }
    }
}

const getFormattedSeries = (oldModel: any, newModel: HighchartsPieChartModel) => {
    if (oldModel.CHART.VALUES.SERIE) {
        const serie = oldModel.CHART.VALUES.SERIE[0]
        newModel.series.push({
            name: serie.name,
            colorByPoint: false, // TODO
            groupingFunction: serie.groupingFunction,
            data: [],
            accessibility: {
                enabled: false,
                description: '',
                exposeAsGroupOnly: false,
                keyboardNavigation: { enabled: false }
            }
        })
    }
}

const getFormattedLegend = (oldModel: any, newModel: HighchartsPieChartModel) => {
    if (oldModel.CHART.LEGEND) {
        console.log(">>>>>>>>>>>>>>>>>> oldModel.CHART.LEGEND: ", oldModel.CHART.LEGEND)
        newModel.legend = {
            enabled: oldModel.CHART.LEGEND.show,
            align: oldModel.CHART.LEGEND.position !== 'top' ? oldModel.CHART.LEGEND.position : 'center',
            layout: 'horizontal',
            verticalAlign: oldModel.CHART.LEGEND.position === 'top' ? 'top' : 'middle',
            itemStyle: {
                fontFamily: oldModel.CHART.LEGEND.style.fontFamily ?? '',
                fontSize: oldModel.CHART.LEGEND.style.fontSize ?? '',
                fontWeight: oldModel.CHART.LEGEND.style.fontWeight ?? '',
                color: oldModel.CHART.LEGEND.style.color ? hexToRgb(oldModel.CHART.LEGEND.style.color) : ''
            },
            backgroundColor: oldModel.CHART.LEGEND.style.backgroundColor ? hexToRgb(oldModel.CHART.LEGEND.style.backgroundColor) : '',
            borderColor: ''
        }
    }
}

// {
//     enabled: false,
//         align: '',
//             verticalAlign: '',
//                 layout: '',
//                     itemStyle: {
//         fontFamily: '',
//             fontSize: '',
//                 fontWeight: '',
//                     color: ''
//     },
//     backgroundColor: '',
//         borderColor: ''
// }