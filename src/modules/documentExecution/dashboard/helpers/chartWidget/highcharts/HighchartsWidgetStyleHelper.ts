
import { IHighchartsWidgetStyle } from '../../../interfaces/highcharts/DashboardHighchartsWidget'
import { getFormattedTitleStyle, getFormattedPaddingStyle, getFormattedBorderStyle, getFormattedShadowsStyle, getFormattedBackgroundStyle } from '../../common/WidgetStyleHelper'

export const getFormattedStyle = (widget: any) => {
    return {
        themeName: '',
        title: getFormattedTitleStyle(widget),
        padding: getFormattedPaddingStyle(widget),
        borders: getFormattedBorderStyle(widget),
        shadows: getFormattedShadowsStyle(widget),
        background: getFormattedBackgroundStyle(widget)
    } as IHighchartsWidgetStyle
}
