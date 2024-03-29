<template>
    <Dialog class="p-fluid kn-dialog--toolbar--primary" :content-style="documentExecutionLinkDialogDescriptor.dialog.style" :visible="visible" :modal="true" :closable="false">
        <template #header>
            <Toolbar class="kn-toolbar kn-toolbar--primary p-p-0 p-m-0 p-col-12">
                <template #start>
                    {{ $t('documentExecution.main.linkToDocument ') }}
                </template>
            </Toolbar>
        </template>

        <div class="p-m-2">
            <Message v-if="linkInfo && !linkInfo.isPublic" class="kn-flex p-m-4" severity="info" :closable="false">
                {{ $t('documentExecution.main.publicUrlExecutionDisabled') }}
            </Message>
            <div class="p-m-2">
                <p class="p-pl-2">{{ $t('documentExecution.main.copyLinkAndShare') }}</p>
            </div>

            <div class="p-fluid p-formgrid p-grid p-m-2">
                <div class="p-field p-col-12">
                    <Textarea v-if="embedHTML" v-model="publicUrl" class="kn-material-input" :rows="6" readonly @click="copyUrl"></Textarea>
                    <InputText v-else v-model="publicUrl" class="kn-material-input p-inputtext-sm" readonly @click="copyUrl" />
                </div>
            </div>

            <div class="p-fluid p-formgrid p-grid p-m-2">
                <div class="p-d-flex p-jc-around p-col-12">
                    <div class="kn-flex p-m-2">
                        <label class="kn-material-input-label p-mr-4">{{ $t('documentExecution.main.showMenu') }}</label>
                        <InputSwitch v-model="showMenu" @change="getPublicUrl" />
                    </div>
                    <div class="kn-flex p-m-2">
                        <label class="kn-material-input-label p-mr-4">{{ $t('documentExecution.main.showToolbar') }}</label>
                        <InputSwitch v-model="showToolbar" @change="getPublicUrl" />
                    </div>
                </div>
                <div v-if="embedHTML" class="p-field p-col-12 p-d-flex p-flex-row">
                    <div class="p-d-flex p-flex-column kn-flex p-p-2">
                        <label class="kn-material-input-label p-mr-2">{{ $t('common.width') }}</label>
                        <InputNumber v-model="iframeWidth" class="kn-material-input p-inputtext-sm" @blur="onInputNumberChanged" />
                    </div>
                    <div class="p-d-flex p-flex-column kn-flex p-p-2">
                        <label class="kn-material-input-label p-mr-2">{{ $t('common.height') }}</label>
                        <InputNumber v-model="iframeHeight" class="kn-material-input p-inputtext-sm" @blur="onInputNumberChanged" />
                    </div>
                </div>
            </div>
        </div>

        <template #footer>
            <div class="p-d-flex p-flex-row p-jc-end">
                <Button class="kn-button kn-button--primary" @click="closeDialog"> {{ $t('common.cancel') }}</Button>
            </div>
        </template>
    </Dialog>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { iParameter } from '@/components/UI/KnParameterSidebar/KnParameterSidebar'
import { IURLDriver } from '../../DocumentExecution'
import { mapState, mapActions } from 'pinia'
import Dialog from 'primevue/dialog'
import documentExecutionLinkDialogDescriptor from './DocumentExecutionLinkDialogDescriptor.json'
import Textarea from 'primevue/textarea'
import mainStore from '@/App.store'
import Message from 'primevue/message'
import InputNumber from 'primevue/inputnumber'
import InputSwitch from 'primevue/inputswitch'

export default defineComponent({
    name: 'document-execution-link-dialog',
    components: { Dialog, Message, Textarea, InputNumber, InputSwitch },
    props: {
        visible: { type: Boolean },
        linkInfo: {
            type: Object as PropType<{
                isPublic: boolean
                noPublicRoleError: boolean
            } | null>
        },
        embedHTML: { type: Boolean },
        propDocument: { type: Object },
        propFiltersData: {
            type: Object as PropType<{
                filterStatus: iParameter[]
                isReadyForExecution: boolean
            }>
        }
    },
    emits: ['close'],
    data() {
        return {
            documentExecutionLinkDialogDescriptor,
            publicUrl: '',
            document: null as any,
            showMenu: true,
            setPublic: false,
            showToolbar: true,
            iframeWidth: 600 as number,
            iframeHeight: 600 as number,
            params: [] as IURLDriver[]
        }
    },
    computed: {
        ...mapState(mainStore, {
            user: 'user'
        })
    },
    watch: {
        visible() {
            this.loadLink()
        },
        propDocument() {
            this.loadLink()
        },
        linkParameters() {
            this.loadLink()
        }
    },
    created() {
        this.loadLink()
    },
    methods: {
        ...mapActions(mainStore, ['setInfo']),
        loadLink() {
            this.loadDocument()
            this.loadFilters()
            this.getPublicUrl()
        },
        loadDocument() {
            this.document = this.propDocument
        },
        loadFilters() {
            if (!this.propFiltersData) return
            this.params = []
            this.propFiltersData.filterStatus?.forEach((parameter: iParameter) => {
                const tempParameter = { value: [...parameter.parameterValue], urlName: parameter.urlName, multivalue: parameter.multivalue }
                this.params.push(tempParameter)
            })
        },
        getPublicUrl() {
            if (!this.document) return
            this.createLink()
        },
        copyUrl() {
            navigator.clipboard.writeText(this.publicUrl)
            this.setInfo({ title: this.$t('common.info.info'), msg: this.$t('documentExecution.main.urlCopiedToClipboard') })
        },
        createLink() {
            if (!this.document || !this.user) return

            const documentType = this.getDocumentType()
            const params = this.params && Object.keys(this.params).length > 0 ? btoa(JSON.stringify(this.params)) : false
            const role = this.getUserRole()

            const linkUrl = `${location.origin}${import.meta.env.VITE_PUBLIC_PATH}${documentType}/${this.document.label}?organization=${this.document.tenant}&toolbar=${this.showToolbar}&menu=${this.showMenu}${this.linkInfo?.isPublic ? '&public=true' : ''}${role ? `&role=${role}` : ''}${
                params ? `&params=${params}` : ''
            }`

            if (this.embedHTML) this.publicUrl = `<iframe width="${this.iframeWidth}" height="${this.iframeHeight}" src="${linkUrl}"></iframe>`
            else this.publicUrl = linkUrl
        },
        getUserRole() {
            if (this.user.sessionRole && this.user.sessionRole !== this.$t('role.defaultRolePlaceholder')) return this.user.sessionRole
            else if (this.user.roles?.length > 1) return this.user.roles[0]
            else return null
        },
        getDocumentType() {
            switch (this.document?.typeCode) {
                case 'DOCUMENT_COMPOSITE':
                    return 'document-composite'
                case 'DASHBOARD':
                    return 'dashboard'
                default:
                    return ''
            }
        },
        onInputNumberChanged() {
            setTimeout(() => this.createLink(), 250)
        },
        closeDialog() {
            this.$emit('close')
            this.showMenu = true
            this.showToolbar = true
            this.iframeHeight = 600
            this.iframeWidth = 600
            this.publicUrl = ''
            this.params = []
        }
    }
})
</script>
