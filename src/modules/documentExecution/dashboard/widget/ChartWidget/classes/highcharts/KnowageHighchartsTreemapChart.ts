import { KnowageHighcharts } from './KnowageHighcharts'
import { IWidget, } from '@/modules/documentExecution/dashboard/Dashboard'
import { updateTreemapChartModel } from './updater/KnowageHighchartsTreemapChartUpdater'
import deepcopy from 'deepcopy'
import { createHierarchyFromData, createTreeSeriesStructureFromHierarchy, getAllColumnsOfSpecificTypeFromDataResponse } from './helpers/setData/HighchartsSetDataHelpers'
import { updateSeriesLabelSettingsWhenAllOptionIsAvailable } from './helpers/dataLabels/HighchartsDataLabelsHelpers'

export class KnowageHighchartsTreemapChart extends KnowageHighcharts {
    constructor(model: any) {
        super()
        this.setSpecificOptionsDefaultValues()
        if (model && model.CHART) this.updateModel(deepcopy(model))
        else if (model && model.plotOption) {
            this.model = deepcopy(model)
            if (model.chart.type !== 'treemap') {
                this.setSpecificOptionsDefaultValues()
            }
        }
        this.model.chart.type = 'treemap'
    }

    updateModel(oldModel: any) {
        updateTreemapChartModel(oldModel, this.model)
    }

    setSpecificOptionsDefaultValues() {
        this.setPlotOptions()
    }

    setPlotOptions() {
        this.model.plotOptions.series.turboThreshold = 15000

    }

    setData(data: any, widgetModel: IWidget) {
        this.model.series = []

        const attributeColumns = getAllColumnsOfSpecificTypeFromDataResponse(data, widgetModel, 'ATTRIBUTE')
        console.log('---------- ATTRIBUTE COLUMNS: ', attributeColumns)
        const measureColumns = getAllColumnsOfSpecificTypeFromDataResponse(data, widgetModel, 'MEASURE')
        console.log('---------- MEASURE COLUMNS: ', measureColumns)
        const interactions = widgetModel.settings?.interactions
        const interactionsEnabled = interactions.selection.enabled || interactions.crossNavigation.enabled
        this.setTreeData(data, attributeColumns, measureColumns, interactionsEnabled)
        return this.model.series
    }


    setTreeData(data: any, attributeColumns: any[], measureColumns: any[], interactionsEnabled: boolean) {
        if (!data || !measureColumns[0] || attributeColumns.length < 2) return
        const measureColumn = measureColumns[0]
        const serieElement = this.createSereElement(measureColumn, interactionsEnabled)
        const hierarchy = {} as any
        createHierarchyFromData(this.model, hierarchy, data, attributeColumns, measureColumn)
        const treemapArray = createTreeSeriesStructureFromHierarchy(hierarchy)

        treemapArray.forEach((el: any) => {
            if (el.value === 0) delete el.value
        })
        treemapArray.splice(0, 1)
        serieElement.data = treemapArray
        this.model.series = [serieElement]
        this.model.colors = []
    }

    createSereElement(measureColumn: any, interactionsEnabled: boolean) {
        const serieElement = {
            id: 0, name: measureColumn.column.columnName, data: [] as any[],
            type: 'treemap',
            layoutAlgorithm: 'squarified',
            allowDrillToNode: !interactionsEnabled,
            showInLegend: false,
            animationLimit: 1000,
            dataLabels: {
                enabled: false,
            },
            levels: [
                {
                    level: 1,
                    dataLabels: {
                        enabled: true
                    },
                    borderWidth: 3,
                    levelIsConstant: false
                }, {
                    level: 1,
                    dataLabels: {
                        style: {
                            fontSize: '14px'
                        }
                    }
                },
                {
                    level: 2,
                    colorByPoint: true
                },
                {
                    level: 3,
                    colorVariation: {
                        key: "brightness",
                        to: 0.5
                    }
                },
                {
                    level: 4,
                    colorVariation: {
                        key: "brightness",
                        to: 0.5
                    }
                }
            ]
        }

        return serieElement
    }


    updateSeriesLabelSettings(widgetModel: IWidget) {
        // TODO
        // updateSeriesLabelSettingsWhenAllOptionIsAvailable(this.model, widgetModel)
    }

}
