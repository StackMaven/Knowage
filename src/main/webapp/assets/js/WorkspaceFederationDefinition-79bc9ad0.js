import{m as T}from"./WorkspaceDescriptor-d4693b02.js";import{d as h,i as _,_ as w,r as l,o as k,c as m,f as d,w as r,g as f,t as i,a as o,A as x,D as g,G as A,z as $,Y as S,a4 as C,q as B,V as I,ad as D,h as y,C as V,B as F,X,s as R}from"./index-1e676509.js";import{W}from"./WorkspaceWarningDialog-b684933b.js";const Q={style:{width:"40vw"}};var j={dialog:Q};const O=h({name:"workspace-federation-dataset-dialog",components:{Dialog:_},emits:["close"],props:{visible:{type:Boolean},dataset:{type:Object}},data(){return{worskpaceFederationDatasetDialogDescriptor:j}}}),J={class:"p-d-flex p-flex-row p-ai-center"},Y={class:"p-m-2"},K={class:"dataset-info-span"},P={class:"p-d-flex p-flex-row p-ai-center"},q={class:"p-m-2"},G={class:"dataset-info-span"},Z={key:0,class:"p-d-flex p-flex-row p-ai-center"},H={class:"p-m-2"},aa={class:"dataset-info-span"};function ta(a,t,e,s,b,u){const c=l("Button"),p=l("Dialog");return k(),m("div",null,[d(p,{header:a.$t("workspace.federationDefinition.datasetDetail"),style:g(a.worskpaceFederationDatasetDialogDescriptor.dialog.style),visible:a.visible,modal:!0,class:"p-fluid kn-dialog--toolbar--primary",closable:!1},{footer:r(()=>[d(c,{class:"kn-button kn-button--primary",onClick:t[0]||(t[0]=v=>a.$emit("close"))},{default:r(()=>[f(i(a.$t("common.close")),1)]),_:1})]),default:r(()=>[o("div",null,[o("div",J,[o("h3",Y,i(a.$t("common.name")),1),o("span",K,i(a.dataset.name),1)]),o("div",P,[o("h3",q,i(a.$t("common.label")),1),o("span",G,i(a.dataset.label),1)]),a.dataset.description?(k(),m("div",Z,[o("h3",H,i(a.$t("common.description")),1),o("span",aa,i(a.dataset.description),1)])):x("",!0)])]),_:1},8,["header","style","visible"])])}var ea=w(O,[["render",ta],["__scopeId","data-v-67410ef2"]]);const oa={style:{width:"60vw"}};var ra={dialog:oa};const na=h({name:"workspace-federation-save-dialog",components:{Dialog:_},emits:["close","save"],props:{visible:{type:Boolean},federatedDataset:{type:Object}},data(){return{workspaceFederationSaveDialogDescriptor:ra,dataset:null,labelDirty:!1,nameDirty:!1}},watch:{federatedDataset(){this.loadDataset()}},computed:{saveButtonDisabled(){return this.dataset.label.length===0||this.dataset.name.length===0}},created(){this.loadDataset()},methods:{loadDataset(){this.dataset=this.federatedDataset?{...this.federatedDataset}:{}},closeDialog(){this.dataset={...this.federatedDataset},this.labelDirty=!1,this.nameDirty=!1,this.$emit("close")},saveFederation(){this.$emit("save",this.dataset)}}}),ia={key:0},da={class:"p-m-4"},la={class:"kn-material-input-label"},sa={class:"p-m-4"},ca={class:"kn-material-input-label"},ba={class:"p-m-4"},pa={class:"kn-material-input-label"};function ka(a,t,e,s,b,u){const c=l("InputText"),p=l("Button"),v=l("Dialog");return k(),m("div",null,[d(v,{header:a.$t("workspace.federationDefinition.savingFederation"),style:g(a.workspaceFederationSaveDialogDescriptor.dialog.style),visible:a.visible,modal:!0,class:"p-fluid kn-dialog--toolbar--primary",closable:!1},{footer:r(()=>[d(p,{class:"kn-button kn-button--primary",onClick:a.closeDialog},{default:r(()=>[f(i(a.$t("common.close")),1)]),_:1},8,["onClick"]),d(p,{class:"kn-button kn-button--primary",disabled:a.saveButtonDisabled,onClick:a.saveFederation},{default:r(()=>[f(i(a.$t("common.save")),1)]),_:1},8,["disabled","onClick"])]),default:r(()=>[a.dataset?(k(),m("div",ia,[o("div",da,[o("span",null,[o("label",la,i(a.$t("common.label"))+" *",1),d(c,{class:A(["kn-material-input p-inputtext-sm",{"p-invalid":a.labelDirty&&(!a.dataset.label||a.dataset.label.length===0)}]),modelValue:a.dataset.label,"onUpdate:modelValue":t[0]||(t[0]=n=>a.dataset.label=n),onInput:t[1]||(t[1]=n=>a.labelDirty=!0),onBlur:t[2]||(t[2]=n=>a.labelDirty=!0)},null,8,["modelValue","class"])]),$(o("div",{class:"p-error p-my-2"},i(a.$t("common.validation.required",{fieldName:a.$t("common.label")})),513),[[S,a.labelDirty&&(!a.dataset.label||a.dataset.label.length===0)]])]),o("div",sa,[o("span",null,[o("label",ca,i(a.$t("common.name"))+" *",1),d(c,{class:A(["kn-material-input p-inputtext-sm",{"p-invalid":a.nameDirty&&(!a.dataset.name||a.dataset.name.length===0)}]),modelValue:a.dataset.name,"onUpdate:modelValue":t[3]||(t[3]=n=>a.dataset.name=n),onInput:t[4]||(t[4]=n=>a.nameDirty=!0),onBlur:t[5]||(t[5]=n=>a.nameDirty=!0)},null,8,["modelValue","class"])]),$(o("div",{class:"p-error p-my-2"},i(a.$t("common.validation.required",{fieldName:a.$t("common.name")})),513),[[S,a.nameDirty&&(!a.dataset.name||a.dataset.name.length===0)]])]),o("div",ba,[o("span",null,[o("label",pa,i(a.$t("common.description")),1),d(c,{class:"kn-material-input p-inputtext-sm",modelValue:a.dataset.description,"onUpdate:modelValue":t[6]||(t[6]=n=>a.dataset.description=n)},null,8,["modelValue"])])])])):x("",!0)]),_:1},8,["header","style","visible"])])}var va=w(na,[["render",ka]]);const fa={assContainer:{"max-height":"35vh",overflow:"auto"},dsList:{height:"75vh"},maxHeight:"height:100%",message:{"align-items":"center",display:"flex","justify-content":"center","text-align":"center"},metaContainer:{"min-width":0,overflow:"hidden"},metaList:{"min-width":"250px"}};var E={styles:fa};const ua=h({name:"workspace-federation-dataset-list",components:{Listbox:C,Message:B},props:{mode:{type:String},propDatasets:{type:Array}},emits:["showInfo","datasetSelected"],data(){return{workspaceFederationDatasetListDescriptor:E,dataset:[]}},watch:{propDatasets(){this.loadDatasets()}},created(){this.loadDatasets()},methods:{loadDatasets(){this.dataset=this.propDatasets},selectDataset(a){this.$emit("datasetSelected",{dataset:a,mode:this.mode})}}}),ma={class:"p-col federation-listbox-container"},ga={class:"kn-list-item p-d-flex p-flex-row"},ha={class:"kn-list-item-text"},wa=["onClick"];function xa(a,t,e,s,b,u){const c=l("Toolbar"),p=l("Message"),v=l("Listbox");return k(),m("div",ma,[d(c,{class:"kn-toolbar kn-toolbar--secondary"},{start:r(()=>[f(i(a.mode==="available"?a.$t("workspace.federationDefinition.availableDatasets"):a.$t("workspace.federationDefinition.selectedDatasets")),1)]),_:1}),d(p,{class:"p-m-4",severity:"info",closable:!1,style:g(a.workspaceFederationDatasetListDescriptor.styles.message)},{default:r(()=>[f(i(a.mode==="available"?a.$t("workspace.federationDefinition.availableDatasetsMessage"):a.$t("workspace.federationDefinition.selectedDatasetsMessage")),1)]),_:1},8,["style"]),d(v,{class:"kn-list listbox-container",listStyle:a.workspaceFederationDatasetListDescriptor.styles.dsList,options:a.dataset,filter:!0,optionLabel:"name",onChange:t[0]||(t[0]=n=>a.selectDataset(n.value))},{empty:r(()=>[f(i(a.$t("common.info.noDataFound")),1)]),option:r(n=>[o("div",ga,[o("div",ha,[o("span",null,i(n.option.name),1)]),a.mode==="available"?(k(),m("i",{key:0,class:"fas fa-info-circle dataset-info-icon",onClick:I(M=>a.$emit("showInfo",n.option),["stop"])},null,8,wa)):x("",!0)])]),_:1},8,["listStyle","options"])])}var ya=w(ua,[["render",xa],["__scopeId","data-v-3a6ea8b1"]]);const Ma=h({name:"workspace-federation-definition-metafields-list",components:{Card:D,Listbox:C},props:{propDataset:{type:Object},selectedMetafields:{type:Array},resetSelectedMetafield:{type:Boolean}},data(){return{dataset:null,selectedMetafield:null,selected:[]}},watch:{propDataset(){this.loadDataset()},selectedMetafields(){this.loadSelectedMetafields()},resetSelectedMetafield(){this.selectedMetafield=null}},created(){this.loadDataset(),this.loadSelectedMetafields()},methods:{loadDataset(){this.dataset=this.propDataset},loadSelectedMetafields(){this.selected=this.selectedMetafields},metafieldsSelected(a){var t,e,s,b;this.selectedMetafield?this.selected.length<2&&this.dataset.id!==((t=this.selected[0])==null?void 0:t.dataset.id)&&this.dataset.id!==((e=this.selected[1])==null?void 0:e.dataset.id)?this.selected.push({dataset:this.dataset,metafield:a}):this.dataset.id===((s=this.selected[0])==null?void 0:s.dataset.id)||this.dataset.id===((b=this.selected[1])==null?void 0:b.dataset.id)?(this.removeMetafieldFromSelected(),this.selected.push({dataset:this.dataset,metafield:a})):this.selected.length===2&&(this.removeMetafieldFromSelected(),this.selectedMetafield=null):this.removeMetafieldFromSelected()},removeMetafieldFromSelected(){const a=this.selected.findIndex(t=>t.dataset.id===this.dataset.id);a!==-1&&this.selected.splice(a,1)}}}),Aa={class:"kn-list-item-text"},Ca={class:"p-text-uppercase"};function Da(a,t,e,s,b,u){const c=l("Toolbar"),p=l("Listbox"),v=l("Card");return a.dataset?(k(),y(v,{key:0},{header:r(()=>[d(c,{class:"kn-toolbar kn-toolbar--secondary"},{start:r(()=>[f(i(a.dataset.name),1)]),_:1})]),content:r(()=>[d(p,{class:"metafield-list",modelValue:a.selectedMetafield,"onUpdate:modelValue":t[0]||(t[0]=n=>a.selectedMetafield=n),options:a.dataset.metadata.fieldsMeta,onChange:t[1]||(t[1]=n=>a.metafieldsSelected(n.value))},{empty:r(()=>[f(i(a.$t("common.info.noDataFound")),1)]),option:r(n=>[o("div",{class:A(["kn-list-item p-d-flex p-flex-row",{" selected-metafield":n.option.selected}])},[o("div",Aa,[o("span",Ca,i(n.option.name),1)])],2)]),_:1},8,["modelValue","options"])]),_:1})):x("",!0)}var Ea=w(Ma,[["render",Da],["__scopeId","data-v-461b034e"]]);const za=h({name:"workspace-federation-definition-associations-editor",components:{Card:D,WorkspaceFederationDefinitionMetafieldsList:Ea},props:{selectedDatasets:{type:Array},selectedMetafields:{type:Array},resetSelectedMetafield:{type:Boolean}},data(){return{datasets:[],workspaceFederationDatasetListDescriptor:E}},watch:{selectedDatasets(){this.loadDatasets()}},created(){this.loadDatasets()},methods:{loadDatasets(){this.datasets=this.selectedDatasets}}}),$a={class:"p-d-flex p-flex-row kn-flex kn-overflow"};function Sa(a,t,e,s,b,u){const c=l("Toolbar"),p=l("WorkspaceFederationDefinitionMetafieldsList"),v=l("Card");return k(),y(v,null,{header:r(()=>[d(c,{class:"kn-toolbar kn-toolbar--secondary"},{start:r(()=>[f(i(a.$t("workspace.federationDefinition.associationsEditor")),1)]),_:1})]),content:r(()=>[o("div",{class:"p-d-flex kn-flex",style:g(a.workspaceFederationDatasetListDescriptor.styles.metaContainer)},[o("div",$a,[(k(!0),m(F,null,V(a.datasets,n=>(k(),y(p,{style:g(a.workspaceFederationDatasetListDescriptor.styles.metaList),class:"metafield-select-list p-mx-2 p-mb-2",key:n.id,propDataset:n,selectedMetafields:a.selectedMetafields,resetSelectedMetafield:a.resetSelectedMetafield},null,8,["style","propDataset","selectedMetafields","resetSelectedMetafield"]))),128))])],4)]),_:1})}var _a=w(za,[["render",Sa],["__scopeId","data-v-00a5d956"]]);const Ia=h({name:"workspace-federation-definition-associations-list",components:{Card:D,KnFabButton:X,Listbox:C},props:{propAssociations:{type:Array}},emits:["createAssociationClick"],data(){return{workspaceFederationDatasetListDescriptor:E,associations:[]}},watch:{propAssociations(){this.loadAssociations()}},created(){this.loadAssociations()},methods:{loadAssociations(){this.associations=this.propAssociations},createAssociation(){this.$emit("createAssociationClick")},deleteAssociationConfirm(a){this.$confirm.require({message:this.$t("common.toast.deleteMessage"),header:this.$t("common.toast.deleteTitle"),icon:"pi pi-exclamation-triangle",accept:()=>this.deleteAssociation(a)})},deleteAssociation(a){const t=this.associations.findIndex(e=>e.relationship===a.relationship);t!==-1&&this.associations.splice(t,1)}}}),Fa={class:"kn-list-item p-d-flex p-flex-row"},Na={class:"kn-list-item-text"},Ua=["onClick"];function La(a,t,e,s,b,u){const c=l("KnFabButton"),p=l("Toolbar"),v=l("Listbox"),n=l("Card");return k(),y(n,null,{header:r(()=>[d(p,{class:"kn-toolbar kn-toolbar--secondary"},{start:r(()=>[f(i(a.$t("workspace.federationDefinition.associationsList")),1)]),end:r(()=>[d(c,{icon:"fas fa-plus",onClick:a.createAssociation},null,8,["onClick"])]),_:1})]),content:r(()=>[o("div",{style:g(a.workspaceFederationDatasetListDescriptor.styles.assContainer)},[d(v,{id:"associations-list",options:a.associations,listStyle:a.workspaceFederationDatasetListDescriptor.styles.maxHeight},{empty:r(()=>[f(i(a.$t("common.info.noDataFound")),1)]),option:r(M=>[o("div",Fa,[o("div",Na,[o("span",null,i(M.option.relationship),1)]),o("i",{class:"fas fa-trash-alt delete-association-icon",onClick:I(z=>a.deleteAssociationConfirm(M.option),["stop"])},null,8,Ua)])]),_:1},8,["options","listStyle"])],4)]),_:1})}var Ta=w(Ia,[["render",La],["__scopeId","data-v-673f0302"]]);const Ba=h({name:"workspace-federation-definition",components:{WorkspaceFederationDatasetList:ya,WorskpaceFederationDatasetDialog:ea,WorkspaceWarningDialog:W,WorkspaceFederationDefinitionAssociationsEditor:_a,WorkspaceFederationDefinitionAssociationsList:Ta,WorkspaceFederationSaveDialog:va},props:{id:{type:String}},data(){return{mainDescriptor:T,federatedDataset:null,datasets:[],availableDatasets:[],selectedDatasets:[],sourceDatasetUsedInRelations:[],multirelationships:[],selectedDataset:null,selectedMetafields:[],resetSelectedMetafield:!1,infoDialogVisible:!1,warningDialogVisbile:!1,warningMessage:"",saveDialogVisible:!1,operation:"create",user:null,step:0,loading:!1}},watch:{async id(){await this.loadPage()}},setup(){return{store:R()}},async created(){this.user=this.store.$state.user,await this.loadPage()},methods:{async loadPage(){this.loading=!0,await this.loadDatasets(),this.id?(await this.loadFederatedDataset(),this.formatRelationship()):this.federatedDataset={name:"",label:"",description:"",relationships:[],degenerated:!1,owner:this.user.userId},this.setSelectedDatasets(),this.loading=!1},async loadFederatedDataset(){await this.$http.get(`/knowage/restful-services/federateddataset/${this.id}/`).then(a=>this.federatedDataset={...a.data,relationships:JSON.parse(a.data.relationships)})},async loadDatasets(){this.datasets=[],await this.$http.get("/knowage/restful-services/2.0/datasets/?includeDerived=no").then(a=>{a.data.forEach(t=>{t.pars.length===0&&(this.formatDatasetMetaFields(t),this.datasets.push(t))})})},formatDatasetMetaFields(a){if(a.metadata||(a.metadata={}),!a.metadata.fieldsMeta&&(a.metadata.fieldsMeta=[],a.meta&&a.meta.columns)){let t={};for(let e in a.meta.columns)a.meta.columns[e].pname==="fieldAlias"&&(t[a.meta.columns[e].column]=a.meta.columns[e].pvalue);for(let e in t)a.metadata.fieldsMeta.push({name:e,alias:t[e]})}},formatRelationship(){var a;(a=this.federatedDataset)==null||a.relationships.forEach(t=>{t.forEach(e=>{var s,b,u,c;this.sourceDatasetUsedInRelations.push(e.sourceTable.name),this.sourceDatasetUsedInRelations.push(e.destinationTable.name),this.multirelationships.push({relationship:((s=e.sourceTable)==null?void 0:s.name.toUpperCase())+"."+e.sourceColumns[0]+" -> "+((b=e.destinationTable)==null?void 0:b.name.toUpperCase())+"."+e.destinationColumns[0],datasets:[{...e.sourceTable,label:(u=e.sourceTable)==null?void 0:u.name},{...e.destinationTable,label:(c=e.destinationTable)==null?void 0:c.name}]})})})},setSelectedDatasets(){this.availableDatasets=[...this.datasets],this.sourceDatasetUsedInRelations.forEach(a=>{const t=this.availableDatasets.findIndex(e=>e.label===a);t!==-1&&(this.selectedDatasets.push(this.availableDatasets[t]),this.availableDatasets.splice(t,1))})},changeSteps(){this.step===0&&this.canMoveToNextStep()?this.step=1:this.step=0},canMoveToNextStep(){return this.selectedDatasets.length===0||this.selectedDatasets.length===1?(this.warningMessage=this.selectedDatasets.length===0?this.$t("workspace.federationDefinition.noDatasetsSelectedError"):this.$t("workspace.federationDefinition.onlyOneSelectedDatasetError"),this.warningDialogVisbile=!0,!1):!0},showDatasetInfo(a){this.selectedDataset=a,this.infoDialogVisible=!0},closeInfoDialog(){this.selectedDataset=null,this.infoDialogVisible=!1},moveDataset(a){const t=a.mode==="available"?this.availableDatasets:this.selectedDatasets,e=a.mode==="available"?this.selectedDatasets:this.availableDatasets;if(a.mode==="selected"&&!this.datasetCanBeUnselected(a.dataset)){this.warningMessage=this.$t("workspace.federationDefinition.removeSelectedDatasetError"),this.warningDialogVisbile=!0;return}const s=t.findIndex(b=>b.name===a.dataset.name);s!==-1&&(e.push(t[s]),t.splice(s,1))},datasetCanBeUnselected(a){return this.multirelationships.findIndex(e=>e.datasets[0].name===a.name||e.datasets[1].name===a.name)===-1},closeWarningDialog(){this.warningMessage="",this.warningDialogVisbile=!1},closeFederationDefinition(){this.federatedDataset=null,this.$router.push("/workspace/models")},createAssociation(){if(this.selectedMetafields.length===2){const a={relationship:this.selectedMetafields[0].dataset.label+"."+this.selectedMetafields[0].metafield.name+" -> "+this.selectedMetafields[1].dataset.label+"."+this.selectedMetafields[1].metafield.name,datasets:[this.selectedMetafields[0].dataset,this.selectedMetafields[1].dataset]};this.checkIfAssociationAlreadyPresent(a)?(this.warningMessage=this.$t("workspace.federationDefinition.relationshipAlreadyPresentError"),this.warningDialogVisbile=!0):(this.multirelationships.push(a),this.selectedMetafields=[],this.resetSelectedMetafield=!this.resetSelectedMetafield)}},checkIfAssociationAlreadyPresent(a){return this.multirelationships.findIndex(e=>e.relationship===a.relationship)!==-1},checkIfAllSelectedDatasetArePresentInRelationships(){let a=!0;for(let t=0;t<this.selectedDatasets.length;t++)if(this.multirelationships.findIndex(s=>s.datasets[0].label===this.selectedDatasets[t].label||s.datasets[1].label===this.selectedDatasets[t].label)===-1){a=!1;break}return a},saveFederation(){this.checkIfAllSelectedDatasetArePresentInRelationships()?this.saveDialogVisible=!0:(this.warningMessage=this.$t("workspace.federationDefinition.datasetNotInRelationshipError"),this.warningDialogVisbile=!0)},closeSaveDialog(){this.saveDialogVisible=!1},async handleSaveFederation(a){a.relationships=[this.getFormattedRelationshipsForSave()],await this.saveFederationDataset(a)},getFormattedRelationshipsForSave(){const a=[];return this.multirelationships.forEach(t=>{var c,p,v;const e=(c=t.relationship)==null?void 0:c.split("->"),s=e?(p=e[0])==null?void 0:p.trim().split("."):[],b=e?(v=e[1])==null?void 0:v.trim().split("."):[],u={bidirectional:!0,cardinality:"many-to-one",sourceTable:{name:s[0],className:s[0]},sourceColumns:[s[1]],destinationTable:{name:b[0],className:b[0]},destinationColumns:[b[1]]};a.push(u)}),a},async saveFederationDataset(a){let t="/knowage/restful-services/federateddataset/post";const e={...a};e.federation_id&&(this.operation="update",t=`/knowage/restful-services/federateddataset/${a.federation_id}`,delete e.federation_id),delete e.owner,delete e.degenerated,await this.sendRequest(t,e).then(()=>{this.store.setInfo({title:this.$t("common.toast."+this.operation+"Title"),msg:this.$t("common.toast.success")}),this.saveDialogVisible=!1,this.$router.push("/workspace/models")}).catch(s=>{this.warningMessage=s.message,this.warningDialogVisbile=!0})},sendRequest(a,t){return this.operation==="create"?this.$http.post(a,t,{headers:{"X-Disable-Errors":"true"}}):this.$http.put(a,t,{headers:{"X-Disable-Errors":"true"}})}}}),Va={class:"kn-overflow-y kn-flex p-d-flex p-flex-column"},Xa={key:0,class:"p-d-flex p-flex-row p-flex-wrap kn-flex"},Ra={key:1,class:"kn-flex"},Wa={class:"p-d-flex p-flex-row p-jc-end p-m-2"};function Qa(a,t,e,s,b,u){const c=l("Button"),p=l("Toolbar"),v=l("ProgressBar"),n=l("WorkspaceFederationDatasetList"),M=l("WorkspaceFederationDefinitionAssociationsEditor"),z=l("WorkspaceFederationDefinitionAssociationsList"),N=l("WorskpaceFederationDatasetDialog"),U=l("WorkspaceFederationSaveDialog"),L=l("WorkspaceWarningDialog");return k(),m(F,null,[d(p,{class:"kn-toolbar kn-toolbar--primary",style:g(a.mainDescriptor.style.maxWidth)},{start:r(()=>[f(i(a.$t("workspace.federationDefinition.title")),1)]),end:r(()=>[d(c,{class:"kn-button p-button-text p-button-rounded",onClick:a.closeFederationDefinition},{default:r(()=>[f(i(a.$t("common.close")),1)]),_:1},8,["onClick"])]),_:1},8,["style"]),a.loading?(k(),y(v,{key:0,mode:"indeterminate",class:"kn-progress-bar"})):x("",!0),o("div",Va,[a.step===0?(k(),m("div",Xa,[d(n,{class:"kn-flex p-m-2",mode:"available",propDatasets:a.availableDatasets,onShowInfo:a.showDatasetInfo,onDatasetSelected:a.moveDataset},null,8,["propDatasets","onShowInfo","onDatasetSelected"]),d(n,{class:"kn-flex p-m-2",mode:"selected",propDatasets:a.selectedDatasets,onDatasetSelected:a.moveDataset},null,8,["propDatasets","onDatasetSelected"])])):(k(),m("div",Ra,[d(M,{class:"p-m-2",selectedDatasets:a.selectedDatasets,selectedMetafields:a.selectedMetafields,resetSelectedMetafield:a.resetSelectedMetafield},null,8,["selectedDatasets","selectedMetafields","resetSelectedMetafield"]),d(z,{class:"p-m-2",propAssociations:a.multirelationships,onCreateAssociationClick:t[0]||(t[0]=ja=>a.createAssociation())},null,8,["propAssociations"])])),o("div",Wa,[d(c,{class:"kn-button kn-button--secondary",onClick:a.changeSteps},{default:r(()=>[f(i(a.step===0?a.$t("common.next"):a.$t("common.back")),1)]),_:1},8,["onClick"]),a.step===1?(k(),y(c,{key:0,class:"kn-button kn-button--secondary p-mx-2",onClick:a.saveFederation},{default:r(()=>[f(i(a.$t("workspace.federationDefinition.saveFederation")),1)]),_:1},8,["onClick"])):x("",!0)]),d(N,{visible:a.infoDialogVisible,dataset:a.selectedDataset,onClose:a.closeInfoDialog},null,8,["visible","dataset","onClose"]),d(U,{visible:a.saveDialogVisible,federatedDataset:a.federatedDataset,onClose:a.closeSaveDialog,onSave:a.handleSaveFederation},null,8,["visible","federatedDataset","onClose","onSave"]),d(L,{visible:a.warningDialogVisbile,title:a.$t("workspace.federationDefinition.title"),warningMessage:a.warningMessage,onClose:a.closeWarningDialog},null,8,["visible","title","warningMessage","onClose"])])],64)}var Ka=w(Ba,[["render",Qa]]);export{Ka as default};
//# sourceMappingURL=WorkspaceFederationDefinition-79bc9ad0.js.map
