import { KnowageHighcharts } from './KnowageHighcharts'
import { IWidget } from '@/modules/documentExecution/dashboard/Dashboard'
import { updateBubbleChartModel } from './updater/KnowageHighchartsBubbleChartUpdater'
import deepcopy from 'deepcopy'
import { getAllColumnsOfSpecificAxisTypeFromDataResponse, getAllColumnsOfSpecificTypeFromDataResponse, getColumnConditionalStyles } from './helpers/setData/HighchartsSetDataHelpers'
import { updateSeriesLabelSettingsWhenAllOptionIsAvailable } from './helpers/dataLabels/HighchartsDataLabelsHelpers'
import * as highchartsDefaultValues from '../../../WidgetEditor/helpers/chartWidget/highcharts/HighchartsDefaultValues'

export class KnowageHighchartsBubbleChart extends KnowageHighcharts {
    constructor(model: any) {
        super()
        this.setSpecificOptionsDefaultValues()
        if (model && model.CHART) this.updateModel(deepcopy(model))
        else if (model && model.plotOptions) {
            this.model = deepcopy(model)
            if (model.chart.type !== 'bubble') {
                this.setSpecificOptionsDefaultValues()
            }
        }
        this.model.chart.type = 'bubble'
    }

    updateModel(oldModel: any) {
        updateBubbleChartModel(oldModel, this.model)
    }

    setSpecificOptionsDefaultValues() {
        this.setPlotOptions()
        this.setBubbleXAxis()
        this.setBubbleYAxis()
    }

    setPlotOptions() {
        this.model.plotOptions.line = {
            marker: {
                symbol: 'circle',
                lineWidth: 2
            }
        }
    }

    setBubbleXAxis() {
        this.model.xAxis = [highchartsDefaultValues.getDefaultScatterXAxis()]
    }

    setBubbleYAxis() {
        this.model.yAxis = [highchartsDefaultValues.getDefaultScatterYAxis()]
    }

    setData(data: any, widgetModel: IWidget) {
        // const mockedData = {
        //     "metaData": {
        //         "totalProperty": "results",
        //         "root": "rows",
        //         "id": "id",
        //         "fields": [
        //             "recNo",
        //             {
        //                 "name": "column_1",
        //                 "header": "QUARTER",
        //                 "dataIndex": "column_1",
        //                 "type": "string",
        //                 "multiValue": false
        //             },
        //             {
        //                 "name": "column_2",
        //                 "header": "UNITS_ORDERED_SUM",
        //                 "dataIndex": "column_2",
        //                 "type": "float",
        //                 "precision": 54,
        //                 "scale": 0,
        //                 "multiValue": false
        //             },
        //             {
        //                 "name": "column_3",
        //                 "header": "UNITS_SHIPPED_SUM",
        //                 "dataIndex": "column_3",
        //                 "type": "float",
        //                 "precision": 54,
        //                 "scale": 0,
        //                 "multiValue": false
        //             },
        //             {
        //                 "name": "column_4",
        //                 "header": "WAREHOUSE_COST_SUM",
        //                 "dataIndex": "column_4",
        //                 "type": "float",
        //                 "precision": 54,
        //                 "scale": 4,
        //                 "multiValue": false
        //             },
        //             {
        //                 "name": "column_5",
        //                 "header": "SUPPLY_TIME_SUM",
        //                 "dataIndex": "column_5",
        //                 "type": "float",
        //                 "precision": 31,
        //                 "scale": 4,
        //                 "multiValue": false
        //             }
        //         ],
        //         "cacheDate": "2023-06-12 14:39:31.954"
        //     },
        //     "results": 4,
        //     "rows": [
        //         {
        //             "id": 1,
        //             "column_1": "Q2",
        //             "column_2": 1665964,
        //             "column_3": 1517603,
        //             "column_4": 710180.1995,
        //             "column_5": 298.7387
        //         },
        //         {
        //             "id": 2,
        //             "column_1": "Q3",
        //             "column_2": 2.08226E+6,
        //             "column_3": 1.90871E+6,
        //             "column_4": 831461.175,
        //             "column_5": 318.0512
        //         },
        //         {
        //             "id": 3,
        //             "column_1": "Q1",
        //             "column_2": 1744587,
        //             "column_3": 1616511,
        //             "column_4": 739653.4604,
        //             "column_5": 287.2794
        //         },
        //         {
        //             "id": 4,
        //             "column_1": "Q4",
        //             "column_2": 1646594,
        //             "column_3": 1473639,
        //             "column_4": 643147.8198,
        //             "column_5": 259.8922
        //         }
        //     ],
        //     "stats": {
        //         "1": {
        //             "max": "Q4",
        //             "min": "Q1",
        //             "distinct": [
        //                 "Q1",
        //                 "Q2",
        //                 "Q3",
        //                 "Q4"
        //             ],
        //             "cardinality": 4
        //         },
        //         "2": {
        //             "max": 2.08226E+6,
        //             "min": 1646594,
        //             "distinct": [
        //                 1646594,
        //                 1665964,
        //                 1744587,
        //                 2.08226E+6
        //             ],
        //             "cardinality": 4
        //         },
        //         "3": {
        //             "max": 1.90871E+6,
        //             "min": 1473639,
        //             "distinct": [
        //                 1473639,
        //                 1517603,
        //                 1616511,
        //                 1.90871E+6
        //             ],
        //             "cardinality": 4
        //         },
        //         "4": {
        //             "max": 831461.175,
        //             "min": 643147.8198,
        //             "distinct": [
        //                 643147.8198,
        //                 710180.1995,
        //                 739653.4604,
        //                 831461.175
        //             ],
        //             "cardinality": 4
        //         },
        //         "5": {
        //             "max": 318.0512,
        //             "min": 259.8922,
        //             "distinct": [
        //                 259.8922,
        //                 287.2794,
        //                 298.7387,
        //                 318.0512
        //             ],
        //             "cardinality": 4
        //         }
        //     }
        // }
        // const mockedDataSplitted = {
        //     "metaData": {
        //         "totalProperty": "results",
        //         "root": "rows",
        //         "id": "id",
        //         "fields": [
        //             "recNo",
        //             {
        //                 "name": "column_1",
        //                 "header": "QUARTER",
        //                 "dataIndex": "column_1",
        //                 "type": "string",
        //                 "multiValue": false
        //             },
        //             {
        //                 "name": "column_2",
        //                 "header": "PRODUCT_FAMILY",
        //                 "dataIndex": "column_2",
        //                 "type": "string",
        //                 "multiValue": false
        //             },
        //             {
        //                 "name": "column_3",
        //                 "header": "UNITS_ORDERED_SUM",
        //                 "dataIndex": "column_3",
        //                 "type": "float",
        //                 "precision": 54,
        //                 "scale": 0,
        //                 "multiValue": false
        //             },
        //             {
        //                 "name": "column_4",
        //                 "header": "UNITS_SHIPPED_SUM",
        //                 "dataIndex": "column_4",
        //                 "type": "float",
        //                 "precision": 54,
        //                 "scale": 0,
        //                 "multiValue": false
        //             },
        //             {
        //                 "name": "column_5",
        //                 "header": "WAREHOUSE_COST_SUM",
        //                 "dataIndex": "column_5",
        //                 "type": "float",
        //                 "precision": 54,
        //                 "scale": 4,
        //                 "multiValue": false
        //             },
        //             {
        //                 "name": "column_6",
        //                 "header": "SUPPLY_TIME_SUM",
        //                 "dataIndex": "column_6",
        //                 "type": "float",
        //                 "precision": 31,
        //                 "scale": 4,
        //                 "multiValue": false
        //             }
        //         ],
        //         "cacheDate": "2023-05-29 12:17:59.564"
        //     },
        //     "results": 13,
        //     "rows": [
        //         {
        //             "id": 1,
        //             "column_1": "Q2",
        //             "column_2": "Food",
        //             "column_3": 930864,
        //             "column_4": 825899,
        //             "column_5": 381572.4702,
        //             "column_6": 164.6676
        //         },
        //         {
        //             "id": 2,
        //             "column_1": "Q3",
        //             "column_2": "Food",
        //             "column_3": 1147708,
        //             "column_4": 1.03311E+6,
        //             "column_5": 423227.9038,
        //             "column_6": 167.8025
        //         },
        //         {
        //             "id": 3,
        //             "column_1": "Q1",
        //             "column_2": "Food",
        //             "column_3": 1047654,
        //             "column_4": 952575,
        //             "column_5": 450841.7237,
        //             "column_6": 152.2484
        //         },
        //         {
        //             "id": 4,
        //             "column_1": "Q4",
        //             "column_2": "Food",
        //             "column_3": 965621,
        //             "column_4": 892838,
        //             "column_5": 406493.3295,
        //             "column_6": 154.0932
        //         },
        //         {
        //             "id": 5,
        //             "column_1": "Q2",
        //             "column_2": "Drink",
        //             "column_3": 194835,
        //             "column_4": 175571,
        //             "column_5": 73330.7702,
        //             "column_6": 36
        //         },
        //         {
        //             "id": 6,
        //             "column_1": "Q1",
        //             "column_2": "Drink",
        //             "column_3": 128144,
        //             "column_4": 127451,
        //             "column_5": 45428.9849,
        //             "column_6": 4E+1
        //         },
        //         {
        //             "id": 7,
        //             "column_1": "Q3",
        //             "column_2": "Drink",
        //             "column_3": 202356,
        //             "column_4": 201344,
        //             "column_5": 74386.1514,
        //             "column_6": 29.4747
        //         },
        //         {
        //             "id": 8,
        //             "column_1": "Q1",
        //             "column_2": "Non-Consumable",
        //             "column_3": 568789,
        //             "column_4": 536485,
        //             "column_5": 243382.7518,
        //             "column_6": 95.031
        //         },
        //         {
        //             "id": 9,
        //             "column_1": "Q2",
        //             "column_2": "Non-Consumable",
        //             "column_3": 540265,
        //             "column_4": 516133,
        //             "column_5": 255276.9591,
        //             "column_6": 98.0711
        //         },
        //         {
        //             "id": 10,
        //             "column_1": "Q4",
        //             "column_2": "Non-Consumable",
        //             "column_3": 578788,
        //             "column_4": 478616,
        //             "column_5": 199965.9219,
        //             "column_6": 91.799
        //         },
        //         {
        //             "id": 11,
        //             "column_1": "Q3",
        //             "column_2": "Non-Consumable",
        //             "column_3": 714384,
        //             "column_4": 656444,
        //             "column_5": 325631.713,
        //             "column_6": 116.774
        //         },
        //         {
        //             "id": 12,
        //             "column_1": "Q4",
        //             "column_2": "Drink",
        //             "column_3": 102185,
        //             "column_4": 102185,
        //             "column_5": 36688.5684,
        //             "column_6": 14
        //         },
        //         {
        //             "id": 13,
        //             "column_1": "Q3",
        //             "column_2": "Car",
        //             "column_3": 17812,
        //             "column_4": 17812,
        //             "column_5": 8215.4068,
        //             "column_6": 4
        //         }
        //     ],
        //     "stats": {
        //         "1": {
        //             "max": "Q4",
        //             "min": "Q1",
        //             "distinct": [
        //                 "Q1",
        //                 "Q2",
        //                 "Q3",
        //                 "Q4"
        //             ],
        //             "cardinality": 4
        //         },
        //         "2": {
        //             "max": "Non-Consumable",
        //             "min": "Car",
        //             "distinct": [
        //                 "Car",
        //                 "Drink",
        //                 "Food",
        //                 "Non-Consumable"
        //             ],
        //             "cardinality": 4
        //         },
        //         "3": {
        //             "max": 1147708,
        //             "min": 17812,
        //             "distinct": [
        //                 17812,
        //                 102185,
        //                 128144,
        //                 194835,
        //                 202356,
        //                 540265,
        //                 568789,
        //                 578788,
        //                 714384,
        //                 930864,
        //                 965621,
        //                 1047654,
        //                 1147708
        //             ],
        //             "cardinality": 13
        //         },
        //         "4": {
        //             "max": 1.03311E+6,
        //             "min": 17812,
        //             "distinct": [
        //                 17812,
        //                 102185,
        //                 127451,
        //                 175571,
        //                 201344,
        //                 478616,
        //                 516133,
        //                 536485,
        //                 656444,
        //                 825899,
        //                 892838,
        //                 952575,
        //                 1.03311E+6
        //             ],
        //             "cardinality": 13
        //         },
        //         "5": {
        //             "max": 450841.7237,
        //             "min": 8215.4068,
        //             "distinct": [
        //                 8215.4068,
        //                 36688.5684,
        //                 45428.9849,
        //                 73330.7702,
        //                 74386.1514,
        //                 199965.9219,
        //                 243382.7518,
        //                 255276.9591,
        //                 325631.713,
        //                 381572.4702,
        //                 406493.3295,
        //                 423227.9038,
        //                 450841.7237
        //             ],
        //             "cardinality": 13
        //         },
        //         "6": {
        //             "max": 167.8025,
        //             "min": 4,
        //             "distinct": [
        //                 4,
        //                 14,
        //                 29.4747,
        //                 36,
        //                 4E+1,
        //                 91.799,
        //                 95.031,
        //                 98.0711,
        //                 116.774,
        //                 152.2484,
        //                 154.0932,
        //                 164.6676,
        //                 167.8025
        //             ],
        //             "cardinality": 13
        //         }
        //     }
        // }
        this.model.series = []

        const attributeColumns = getAllColumnsOfSpecificTypeFromDataResponse(data, widgetModel, 'ATTRIBUTE')
        const XAxisColumns = getAllColumnsOfSpecificAxisTypeFromDataResponse(data, widgetModel, 'X')
        const YAxisColumns = getAllColumnsOfSpecificAxisTypeFromDataResponse(data, widgetModel, 'Y')
        const ZAxisColumns = getAllColumnsOfSpecificAxisTypeFromDataResponse(data, widgetModel, 'Z')

        if (widgetModel.settings.configuration?.grouping?.secondDimension.enabled) {
            const serieName = widgetModel.settings.configuration.grouping.secondDimension.serie
            this.setSplittedData(data, widgetModel, serieName, attributeColumns, XAxisColumns, YAxisColumns, ZAxisColumns)
        } else {
            this.setRegularData(data, widgetModel, attributeColumns, XAxisColumns, YAxisColumns, ZAxisColumns)
        }

        return this.model.series
    }

    setSplittedData(data: any, widgetModel, serieName: string, attributeColumns: any[], XAxisColumns: any[], YAxisColumns: any[], ZAxisColumns: any[]) {
        const measureForGrouping = YAxisColumns.find((measureColumn: any) => measureColumn.column.columnName === serieName)
        if (!data || attributeColumns.length < 2 || !measureForGrouping) return
        const firstAttributeColumn = attributeColumns[0]
        const secondAttributeColumn = attributeColumns[1]
        const categoryValueMap = {}
        const uniqueCategoryValues = [] as string[]
        const XColumn = XAxisColumns[0]
        const ZColumn = ZAxisColumns[0]
        data.rows.forEach((row: any) => {
            const firstAttributeValue = row[firstAttributeColumn.metadata.dataIndex]
            if (!uniqueCategoryValues.includes(firstAttributeValue)) uniqueCategoryValues.push(firstAttributeValue)
            const secondAttributeValue = row[secondAttributeColumn.metadata.dataIndex]

            if (!categoryValueMap[secondAttributeValue]) categoryValueMap[secondAttributeValue] = {}
            if (!categoryValueMap[secondAttributeValue][firstAttributeValue]) categoryValueMap[secondAttributeValue][firstAttributeValue] = {}
            categoryValueMap[secondAttributeValue][firstAttributeValue] = {
                x: row[XColumn.metadata.dataIndex],
                y: row[measureForGrouping.metadata.dataIndex],
                z: row[ZColumn.metadata.dataIndex],
                color: getColumnConditionalStyles(widgetModel, measureForGrouping.column.id, row[measureForGrouping.metadata.dataIndex])?.color
            }
        })
        const measureSerieElementValueMap = {}
        this.createSeriesForGroupedByCategoriesData(categoryValueMap, measureSerieElementValueMap)
        this.createMeasureSerieForGroupedByCategoriesData(measureForGrouping, measureSerieElementValueMap)
    }

    createSeriesForGroupedByCategoriesData(categoryValueMap: any, measureSerieElementValueMap: any) {
        Object.keys(categoryValueMap).forEach((key: string, index: number) => {
            const serieElement = { id: index, name: key, data: [] as any[], connectNulls: true }
            Object.keys(categoryValueMap[key]).forEach((tempKey: string) => {
                const tempData = { name: tempKey } as { name: string; x?: number; y?: number; z?: number }
                if (categoryValueMap[key][tempKey]) {
                    tempData.x = categoryValueMap[key][tempKey].x
                    tempData.y = categoryValueMap[key][tempKey].y
                    tempData.z = categoryValueMap[key][tempKey].z
                }
                serieElement.data.push(tempData)

                if (!measureSerieElementValueMap[tempKey]) measureSerieElementValueMap[tempKey] = { x: 0, y: 0, z: 0 }
                measureSerieElementValueMap[tempKey].x += categoryValueMap[key][tempKey].x ?? 0
                measureSerieElementValueMap[tempKey].y += categoryValueMap[key][tempKey].y ?? 0
                measureSerieElementValueMap[tempKey].z += categoryValueMap[key][tempKey].z ?? 0
            })
            this.model.series.push(serieElement)
        })
    }

    createMeasureSerieForGroupedByCategoriesData(measureForGrouping: any, measureSerieElementValueMap: any) {
        const measureSerieElement = { id: this.model.series.length, name: measureForGrouping.column.columnName, data: [] as any[], connectNulls: true }
        Object.keys(measureSerieElementValueMap).forEach((key: string) => {
            measureSerieElement.data.push({ name: key, x: measureSerieElementValueMap[key].x, y: measureSerieElementValueMap[key].y, z: measureSerieElementValueMap[key].z, dataLabels: { enabled: true, format: '{point.name}' } })
        })
        this.model.series.push(measureSerieElement)
    }

    setRegularData(data: any, widgetModel, attributeColumns: any[], XAxisColumns: any[], YAxisColumns: any[], ZAxisColumns: any[]) {
        if (!data || !attributeColumns[0] || !XAxisColumns[0] || !YAxisColumns[0] || !ZAxisColumns[0]) return
        const attributeColumn = attributeColumns[0]
        const XColumn = XAxisColumns[0]
        const ZColumn = ZAxisColumns[0]
        const series = [] as any[]

        YAxisColumns.forEach((yAxisColumn: any, index: number) => {
            const tempSerie = { id: index, name: yAxisColumn.column.columnName, data: [] as any[], connectNulls: true }
            data.rows.forEach((row: any) => {
                tempSerie.data.push({
                    x: row[XColumn.metadata.dataIndex],
                    y: row[yAxisColumn.metadata.dataIndex],
                    z: row[ZColumn.metadata.dataIndex],
                    name: row[attributeColumn.metadata.dataIndex],
                    dataLabels: { enabled: true, format: '{point.name}' },
                    color: getColumnConditionalStyles(widgetModel, yAxisColumn.column.id, row[yAxisColumn.metadata.dataIndex])?.color
                })
            })
            series.push(tempSerie)
        })
        this.model.series = series
    }

    updateSeriesLabelSettings(widgetModel: IWidget) {
        updateSeriesLabelSettingsWhenAllOptionIsAvailable(this.model, widgetModel)
    }
}
