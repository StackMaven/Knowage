import { IWidgetColumn } from "@/modules/documentExecution/dashboard/Dashboard";

export const addVegaColumnToTable = (tempColumn: IWidgetColumn, rows: IWidgetColumn[], chartType: string | undefined, attributesOnly: boolean, measuresOnly: boolean) => {
    let mode = ''
    if (attributesOnly) mode = 'attributesOnly'
    else if (measuresOnly) mode = 'measuresOnly'
    switch (chartType) {
        case 'wordcloud':
            addWordcloudColumnToTable(tempColumn, rows, chartType, mode)
    }
}

const addWordcloudColumnToTable = (tempColumn: IWidgetColumn, rows: IWidgetColumn[], chartType: string | undefined, mode: string) => {
    if (mode === 'attributesOnly' && rows.length <= 1) {
        if (tempColumn.fieldType === 'MEASURE') {
            tempColumn.fieldType = 'ATTRIBUTE'
            tempColumn.aggregation = ''
        }
        rows[0] = tempColumn
    } else if (mode === 'measuresOnly' && rows.length <= 1) {
        if (tempColumn.fieldType === 'ATTRIBUTE') {
            tempColumn.fieldType = 'MEASURE'
            tempColumn.aggregation = 'SUM'
        }
        rows[0] = tempColumn
    }
}

