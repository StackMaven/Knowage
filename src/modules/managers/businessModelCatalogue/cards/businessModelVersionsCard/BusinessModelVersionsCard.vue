<template>
    <Card class="p-m-2">
        <template #header>
            <Toolbar class="kn-toolbar kn-toolbar--primary">
                <template #left>
                    {{ $t('managers.buisnessModelCatalogue.savedVersions') }}
                </template>
            </Toolbar>
        </template>
        <template #content>
            <Listbox class="kn-list" :options="businessModelVersions" data-test="versions-list">
                <template #empty>{{ $t('managers.buisnessModelCatalogue.noSavedVersions') }}</template>
                <template #option="slotProps">
                    <div class="kn-list-item" :data-test="'version-' + slotProps.option.id">
                        <RadioButton name="active" :value="slotProps.option" v-model="activeVersion" @change="setActive"></RadioButton>
                        <div class="kn-list-item-text">
                            <span>{{ slotProps.option.fileName }}</span>
                            <span class="kn-list-item-text-secondary">{{ creationDate(slotProps.option.creationDate) }}</span>
                        </div>
                        <div class="kn-list-item-text">
                            <span>{{ slotProps.option.creationUser }}</span>
                        </div>
                        <Button class="p-button-link p-button-sm" icon="fa fa-ellipsis-v" @click="toggle($event, slotProps.option)" aria-haspopup="true" aria-controls="overlay_menu" />
                        <Menu ref="menu" :model="items" :popup="true" />
                    </div>
                </template>
            </Listbox>
        </template>
    </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { iBusinessModelVersion } from '../../BusinessModelCatalogue'
import { formatDate } from '@/helpers/commons/localeHelper'
import { downloadDirect } from '@/helpers/commons/fileHelper'
import axios from 'axios'
import Card from 'primevue/card'
import Listbox from 'primevue/listbox'
import Menu from 'primevue/menu'
import RadioButton from 'primevue/radiobutton'

export default defineComponent({
    name: 'metadata-card',
    components: {
        Card,
        Listbox,
        Menu,
        RadioButton
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        versions: {
            type: Array,
            required: true
        }
    },
    emits: ['touched', 'deleted'],
    watch: {
        versions() {
            this.loadVersions()
        }
    },
    created() {
        this.loadVersions()
    },
    data() {
        return {
            businessModelVersions: [] as iBusinessModelVersion[],
            items: [] as { label: string; icon: string; command: Function }[],
            previousActiveVersion: { active: false },
            activeVersion: { active: false }
        }
    },
    methods: {
        loadVersions() {
            this.businessModelVersions = [] as iBusinessModelVersion[]
            this.versions.forEach((version: any) => {
                if (version.active) {
                    this.previousActiveVersion = version
                    this.activeVersion = version
                }
                this.businessModelVersions.push(version)
            })
        },
        creationDate(date: string) {
            return formatDate(date, 'DD/MM/yyyy HH:mm:ss')
        },
        toggle(event: any, version: iBusinessModelVersion) {
            this.createMenuItems(version)

            const menu = this.$refs.menu as any
            menu.toggle(event)
        },
        createMenuItems(version: iBusinessModelVersion) {
            this.items = []
            if (version.hasContent && !version.hasLog) {
                this.items.push({ label: this.$t('managers.buisnessModelCatalogue.downloadJar'), icon: 'fa fa-file-archive-o', command: () => this.downloadFile(version.id, 'JAR') })
            }
            if (version.hasLog) {
                this.items.push({ label: this.$t('managers.buisnessModelCatalogue.downloadLog'), icon: 'fa fa-file-text-o', command: () => this.downloadFile(version.id, 'LOG') })
            }
            if (version.hasFileModel) {
                this.items.push({ label: this.$t('managers.buisnessModelCatalogue.downloadModel'), icon: 'fa fa-file-code-o', command: () => this.downloadFile(version.id, 'SBIMODEL') })
            }
            this.items.push({ label: this.$t('common.delete'), icon: 'far fa-trash-alt', command: () => this.deleteVersionConfirm(version.id) })
        },
        setActive() {
            this.previousActiveVersion.active = false
            this.previousActiveVersion = this.activeVersion
            this.activeVersion.active = true
            this.$emit('touched')
        },
        async downloadFile(versionId: number, filetype: string) {
            await axios
                .get(process.env.VUE_APP_RESTFUL_SERVICES_PATH + `2.0/businessmodels/${this.id}/versions/${versionId}/${filetype}/file`, {
                    headers: {
                        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
                    }
                })
                .then((response) => {
                    if (response.data.errors) {
                        this.$store.commit('setError', {
                            title: this.$t('common.error.downloading'),
                            msg: this.$t('common.error.errorCreatingPackage')
                        })
                    } else {
                        if (response.headers) {
                            var contentDisposition = response.headers['content-disposition']
                            var fileAndExtension = contentDisposition.match(/filename[^;\n=]*=((['"]).*?\2|[^;\n]*)/i)[1]
                            var completeFileName = fileAndExtension.replaceAll('"', '')
                            downloadDirect(response.data, completeFileName, 'application/zip; charset=utf-8')
                        }
                        this.$store.commit('setInfo', { title: this.$t('common.toast.success') })
                    }
                })
        },
        deleteVersionConfirm(versionId: number) {
            this.$confirm.require({
                message: this.$t('common.toast.deleteMessage'),
                header: this.$t('common.toast.deleteTitle'),
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.deleteVersion(versionId)
                }
            })
        },
        async deleteVersion(versionId: number) {
            await axios.delete(process.env.VUE_APP_RESTFUL_SERVICES_PATH + `2.0/businessmodels/${this.id}/versions/${versionId}/`).then(() => {
                this.$store.commit('setInfo', {
                    title: this.$t('common.toast.deleteTitle'),
                    msg: this.$t('common.toast.deleteSuccess')
                })
                this.$emit('deleted')
            })
        }
    }
})
</script>