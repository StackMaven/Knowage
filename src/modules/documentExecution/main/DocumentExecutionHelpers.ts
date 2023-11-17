import moment from 'moment'
import { iExporter } from './DocumentExecution'
import UserFunctionalitiesConstants from '@/UserFunctionalitiesConstants.json'
import deepcopy from 'deepcopy'
import { parameterSidebarEmitter } from '@/components/UI/KnParameterSidebar/KnParameterSidebarHelper'
import { emitter } from '../dashboard/DashboardHelpers'
import { iParameter } from '@/components/UI/KnParameterSidebar/KnParameterSidebar'
import store from '@/App.store.js'

const mainStore = store()

export function createToolbarMenuItems(document: any, functions: any, exporters: iExporter[] | null, user: any, isOrganizerEnabled: boolean, mode: string | null, $t: any, newDashboardMode: boolean, filtersData: { filterStatus: iParameter[]; isReadyForExecution: boolean }) {
    const toolbarMenuItems = [] as any[]

    if (mode === 'dashboard' && user.functionalities?.includes(UserFunctionalitiesConstants.DOCUMENT_ADMIN_MANAGEMENT)) {
        toolbarMenuItems.push({
            label: $t('common.settings'),
            items: [
                { icon: 'pi pi-cog', label: $t('common.general'), command: () => functions.openDashboardGeneralSettings('General') },
                { icon: 'fa-brands fa-diaspora', label: $t('common.variables'), command: () => functions.openDashboardGeneralSettings('Variables') },
            ]
        })
        if (mainStore.isEnterprise) toolbarMenuItems[0].items.push({ icon: 'fas fa-paint-roller', label: $t('common.themes'), command: () => functions.openDashboardGeneralSettings('Themes') })
        toolbarMenuItems[0].items.push({ icon: 'fas fa-recycle', label: $t('documentExecution.main.clearCache') })
    }

    if (!newDashboardMode) {
        toolbarMenuItems.push({
            label: $t('common.file'),
            items: [{ icon: 'pi pi-print', label: $t('common.print'), command: () => functions.print() }]
        })
    }

    if (exporters && exporters.length !== 0 && !newDashboardMode) {
        toolbarMenuItems.push({
            label: $t('common.export'),
            items: []
        })
    }

    toolbarMenuItems.push({
        label: $t('documentExecution.main.views'),
        items: [
            { icon: 'fa-solid fa-floppy-disk', label: $t('documentExecution.main.saveCurrentView'), command: () => (document.typeCode === 'DASHBOARD' ? emitter.emit('openSaveCurrentViewDialog', document.dashboardId) : functions.openSaveCurrentViewDialog()) },
            { icon: 'pi pi-list', label: $t('documentExecution.main.savedViewsList'), command: () => (document.typeCode === 'DASHBOARD' ? emitter.emit('openSavedViewsListDialog', document.dashboardId) : functions.openSavedViewsListDialog()) }
        ]
    })

    if (user.enterprise && !newDashboardMode) {
        toolbarMenuItems.push({
            label: $t('common.info.info'),
            items: [
                { icon: 'pi pi-star', label: $t('common.rank'), command: () => functions.openRank() },
                { icon: 'pi pi-book', label: $t('common.onlineHelp'), command: () => functions.openHelp() }
            ]
        })
    }

    if (!newDashboardMode) {
        toolbarMenuItems.push({
            label: $t('common.shortcuts'),
            items: []
        })
    }

    if (!newDashboardMode) exporters?.forEach((exporter: any) => toolbarMenuItems[1].items.push({ icon: 'fa fa-file-excel', label: exporter.name, command: () => functions.export(exporter.name) }))

    if (user.functionalities.includes(UserFunctionalitiesConstants.SEND_MAIL_FUNCTIONALITY) && document.typeCode === 'REPORT') {
        const index = toolbarMenuItems.findIndex((item: any) => item.label === $t('common.info.info'))
        if (index !== -1) {
            toolbarMenuItems[index].items.push({ icon: 'pi pi-envelope', label: $t('common.sendByEmail'), command: () => functions.openMailDialog() })
        } else {
            toolbarMenuItems.push({
                label: $t('common.export'),
                items: [{ icon: 'pi pi-envelope', label: $t('common.sendByEmail'), command: () => functions.openMailDialog() }]
            })
        }
    }

    if (user.functionalities.includes(UserFunctionalitiesConstants.SEE_METADATA_FUNCTIONALITY) && !newDashboardMode) {
        const index = toolbarMenuItems.findIndex((item: any) => item.label === $t('common.info.info'))
        if (index !== -1) toolbarMenuItems[index].items.unshift({ icon: 'pi pi-info-circle', label: $t('common.metadata'), command: () => functions.openMetadata() })
    }

    if (user.functionalities.includes(UserFunctionalitiesConstants.SEE_NOTES_FUNCTIONALITY) && !newDashboardMode) {
        const index = toolbarMenuItems.findIndex((item: any) => item.label === $t('common.info.info'))
        if (index !== -1) toolbarMenuItems[index].items.push({ icon: 'pi pi-file', label: $t('common.notes'), command: () => functions.openNotes() })
    }

    if (user.functionalities.includes(UserFunctionalitiesConstants.SEE_SNAPSHOTS_FUNCTIONALITY) && user.enterprise && !newDashboardMode) {
        const index = toolbarMenuItems.findIndex((item: any) => item.label === $t('common.shortcuts'))
        if (index !== -1) toolbarMenuItems[index].items.unshift({ icon: '', label: $t('documentExecution.main.showScheduledExecutions'), command: () => functions.showScheduledExecutions() })
    }

    if (isOrganizerEnabled && !newDashboardMode) {
        const index = toolbarMenuItems.findIndex((item: any) => item.label === $t('common.shortcuts'))
        if (index !== -1) toolbarMenuItems[index].items.unshift({ icon: 'fa fa-suitcase ', label: $t('documentExecution.main.addToWorkspace'), command: () => functions.addToWorkspace() })
    }

    if (mode === 'olap') {
        const index = toolbarMenuItems.findIndex((item: any) => item.label === $t('common.shortcuts'))
        if (index !== -1) toolbarMenuItems[index].items.unshift({ icon: '', label: $t('documentExecution.main.showOLAPCustomView'), command: () => functions.showOLAPCustomView() })
    }

    if (user.functionalities.includes(UserFunctionalitiesConstants.ENABLE_TO_COPY_AND_EMBED) && !newDashboardMode) {
        const index = toolbarMenuItems.findIndex((item: any) => item.label === $t('common.shortcuts'))
        if (index !== -1) {
            toolbarMenuItems[index].items.push({ icon: 'fa fa-share', label: $t('documentExecution.main.copyLink'), command: () => functions.copyLink(false) })
            toolbarMenuItems[index].items.push({ icon: 'fa fa-share', label: $t('documentExecution.main.embedInHtml'), command: () => functions.copyLink(true) })
        }
    }

    if (filtersData && filtersData.filterStatus?.length > 0) toolbarMenuItems.push({ icon: 'fa fa-eraser', label: $t('documentExecution.main.resetParameters'), command: () => parameterSidebarEmitter.emit('resetAllParameters') })

    removeEmptyToolbarItems(toolbarMenuItems)

    return toolbarMenuItems
}

const removeEmptyToolbarItems = (toolbarMenuItems: any[]) => {
    for (let i = toolbarMenuItems.length - 1; i >= 0; i--) {
        if (toolbarMenuItems[i].items && toolbarMenuItems[i].items.length === 0) {
            toolbarMenuItems.splice(i, 1)
        }
    }
}

export function getValidDate(value: string) {
    let momentDate = moment(deepcopy(value))
    if (momentDate.isValid()) return momentDate.toDate()
    const validFormats = ['DD/MM/YYYY', 'DD/MM/YYYY HH:mm:ss.SSS']
    for (let i = 0; i < validFormats.length; i++) {
        momentDate = moment(deepcopy(value), validFormats[i])
        if (momentDate.isValid()) return momentDate.toDate()
    }
    return ''
}
