import{m as _}from"./WorkspaceDescriptor-d4693b02.js";import{D as Y,W as J}from"./WorkspaceCard-6d9360d0.js";import{d as x,i as z,_ as A,r,o as k,c as y,f as a,w as i,g,t as d,a as n,G as $,z as E,Y as F,A as w,D,p as G,b as P,h as v,s as U,y as T,n as q,l as Z,X as H,q as tt,a9 as ot,ae as at,B as V,C as et}from"./index-1e676509.js";import{s as rt}from"./contextmenu.esm-4301c9fe.js";import{W as nt}from"./WorkspaceWarningDialog-b684933b.js";import{s as it}from"./checkbox.esm-fa6c8259.js";import{s as lt}from"./tree.esm-837306a6.js";import"./sidebar.esm-2131cfd1.js";const dt="400",st={style:{width:"60vw"}},ct="100",bt="200";var C={descriptionMaxLength:dt,dialog:st,labelMaxLength:ct,nameMaxLength:bt};const pt=x({name:"workspace-analysis-edit-dialog",components:{Dialog:z},emits:["close","save"],props:{visible:{type:Boolean},propAnalysis:{type:Object}},data(){return{workspaceAnalysisViewEditDialogDescriptor:C,analysis:null,labelDirty:!1}},computed:{labelHelp(){var t,o;return((o=(t=this.analysis.label)==null?void 0:t.length)!=null?o:"0")+" / "+C.labelMaxLength},nameHelp(){var t,o;return((o=(t=this.analysis.name)==null?void 0:t.length)!=null?o:"0")+" / "+C.nameMaxLength},descriptionHelp(){var t,o;return((o=(t=this.analysis.description)==null?void 0:t.length)!=null?o:"0")+" / "+C.descriptionMaxLength},saveButtonDisabled(){return this.analysis.label.length===0||this.analysis.name.length===0}},watch:{propAnalysis(){this.loadAnalysis()}},created(){this.loadAnalysis()},methods:{loadAnalysis(){this.analysis=this.propAnalysis?{...this.propAnalysis}:{}},closeDialog(){this.analysis={...this.propAnalysis},this.$emit("close")},saveAnalysis(){this.$emit("save",this.analysis)}}}),kt=t=>(G("data-v-9cffd3f4"),t=t(),P(),t),ft={key:0},ut={class:"p-m-4"},mt={class:"kn-material-input-label"},vt={class:"p-d-flex p-flex-row p-jc-between"},gt={class:"input-help p-m-0"},ht={class:"p-m-4"},wt={class:"kn-material-input-label"},yt={class:"p-d-flex p-flex-row p-jc-between"},xt={class:"input-help p-m-0"},At={class:"p-m-4"},Mt={class:"kn-material-input-label"},Ct={class:"p-d-flex p-flex-row p-jc-between"},Dt=kt(()=>n("div",null,null,-1)),Et={class:"input-help p-m-0"};function $t(t,o,e,c,f,u){const b=r("InputText"),m=r("Button"),p=r("Dialog");return k(),y("div",null,[a(p,{header:t.$t("workspace.myAnalysis.editAnalysis"),style:D(t.workspaceAnalysisViewEditDialogDescriptor.dialog.style),visible:t.visible,modal:!0,class:"p-fluid kn-dialog--toolbar--primary",closable:!1},{footer:i(()=>[a(m,{class:"kn-button kn-button--primary",onClick:t.closeDialog},{default:i(()=>[g(d(t.$t("common.close")),1)]),_:1},8,["onClick"]),a(m,{class:"kn-button kn-button--primary",disabled:t.saveButtonDisabled,onClick:t.saveAnalysis},{default:i(()=>[g(d(t.$t("common.save")),1)]),_:1},8,["disabled","onClick"])]),default:i(()=>[t.analysis?(k(),y("div",ft,[n("div",ut,[n("span",null,[n("label",mt,d(t.$t("common.label"))+" *",1),a(b,{class:$(["kn-material-input p-inputtext-sm",{"p-invalid":t.labelDirty&&(!t.analysis.label||t.analysis.label.length===0)}]),modelValue:t.analysis.label,"onUpdate:modelValue":o[0]||(o[0]=s=>t.analysis.label=s),maxLength:t.workspaceAnalysisViewEditDialogDescriptor.labelMaxLength,onInput:o[1]||(o[1]=s=>t.labelDirty=!0),onBlur:o[2]||(o[2]=s=>t.labelDirty=!0)},null,8,["modelValue","class","maxLength"])]),n("div",vt,[n("div",null,[E(n("div",{class:"p-error p-grid p-m-2"},d(t.$t("common.validation.required",{fieldName:t.$t("common.label")})),513),[[F,t.labelDirty&&(!t.analysis.label||t.analysis.label.length===0)]])]),n("p",gt,d(t.labelHelp),1)])]),n("div",ht,[n("span",null,[n("label",wt,d(t.$t("common.name"))+" *",1),a(b,{class:$(["kn-material-input p-inputtext-sm",{"p-invalid":t.nameDirty&&(!t.analysis.name||t.analysis.name.length===0)}]),modelValue:t.analysis.name,"onUpdate:modelValue":o[3]||(o[3]=s=>t.analysis.name=s),maxLength:t.workspaceAnalysisViewEditDialogDescriptor.nameMaxLength,onInput:o[4]||(o[4]=s=>t.nameDirty=!0),onBlur:o[5]||(o[5]=s=>t.nameDirty=!0)},null,8,["modelValue","class","maxLength"])]),n("div",yt,[n("div",null,[E(n("div",{class:"p-error p-grid p-m-2"},d(t.$t("common.validation.required",{fieldName:t.$t("common.name")})),513),[[F,t.nameDirty&&(!t.analysis.name||t.analysis.name.length===0)]])]),n("p",xt,d(t.nameHelp),1)])]),n("div",At,[n("span",null,[n("label",Mt,d(t.$t("common.description")),1),a(b,{class:"kn-material-input p-inputtext-sm",modelValue:t.analysis.description,"onUpdate:modelValue":o[6]||(o[6]=s=>t.analysis.description=s),maxLength:t.workspaceAnalysisViewEditDialogDescriptor.descriptionMaxLength},null,8,["modelValue","maxLength"])]),n("div",Ct,[Dt,n("p",Et,d(t.descriptionHelp),1)])])])):w("",!0)]),_:1},8,["header","style","visible"])])}var zt=A(pt,[["render",$t],["__scopeId","data-v-9cffd3f4"]]);const It={style:{width:"60vw"}};var St={dialog:It};const Ft={style:{padding:"0"}};var Vt={node:Ft};const Ut=x({name:"workspace-document-tree",components:{Checkbox:it,Tree:lt},props:{propFolders:{type:Array}},emits:["foldersSelected"],data(){return{workspaceAnalysisFolderTreeDescriptor:Vt,folders:[],nodes:[],selectedFolders:[]}},watch:{propFolders(){this.loadTree()}},created(){this.loadTree()},methods:{loadTree(){this.loadFolders(),this.createNodeTree()},loadFolders(){this.folders=this.propFolders},createNodeTree(){this.nodes=[];const t=[];this.folders.forEach(o=>{const e={key:o.id,id:o.id,parentId:o.parentId,label:o.name,children:[],data:o,style:this.workspaceAnalysisFolderTreeDescriptor.node.style,customIcon:"pi pi-folder"};t.filter(f=>e.id===f.parentId).forEach(f=>e.children.push(f)),this.attachFolderToTree(e,t)})},attachFolderToTree(t,o){var e,c;if(t.parentId){let f=null;for(let u=0;u<o.length;u++)if(t.parentId===o[u].id){(e=o[u].children)==null||e.push(t);break}for(let u=0;u<this.nodes.length;u++)if(f=this.findParentFolder(t,this.nodes[u]),f){(c=f.children)==null||c.push(t);break}f||o.push(t)}else this.nodes.push(t)},findParentFolder(t,o){if(t.parentId===o.id)return o;{let e=null;if(o.children)for(let c=0;c<o.children.length&&(e=this.findParentFolder(t,o.children[c]),!e);c++);return e}},setOpenFolderIcon(t){t.customIcon="pi pi-folder-open"},setClosedFolderIcon(t){t.customIcon="pi pi-folder"},emitSelectedFolders(){this.$emit("foldersSelected",this.selectedFolders)}}});function Tt(t,o,e,c,f,u){const b=r("Checkbox"),m=r("Tree");return k(),v(m,{id:"folders-tree",value:t.nodes,onNodeExpand:o[1]||(o[1]=p=>t.setOpenFolderIcon(p)),onNodeCollapse:o[2]||(o[2]=p=>t.setClosedFolderIcon(p))},{default:i(p=>[a(b,{name:"folders",modelValue:t.selectedFolders,"onUpdate:modelValue":o[0]||(o[0]=s=>t.selectedFolders=s),value:p.node.id,onChange:t.emitSelectedFolders},null,8,["modelValue","value","onChange"]),n("i",{class:$([p.node.customIcon,"p-mx-2"])},null,2),n("b",null,d(p.node.label),1)]),_:1},8,["value"])}var Bt=A(Ut,[["render",Tt],["__scopeId","data-v-335b0259"]]);const Nt=x({name:"workspace-analysis-view-share-dialog",components:{Dialog:z,WorkspaceAnalysisFolderTree:Bt},props:{visible:{type:Boolean},propFolders:{type:Array}},emits:["close","share"],data(){return{workspaceAnalysisViewShareDialogDescriptor:St,folders:[],selectedFoldersKeys:{}}},watch:{propFolders(){this.loadFolders()}},created(){this.loadFolders()},methods:{loadFolders(){this.folders=this.propFolders},closeDialog(){this.folders=[],this.$emit("close")},shareDocument(){this.$emit("share",this.selectedFoldersKeys)},setSelectedFolders(t){this.selectedFoldersKeys=t}}}),Lt={class:"p-d-flex p-flex-row p-jc-end"};function Wt(t,o,e,c,f,u){const b=r("Toolbar"),m=r("WorkspaceAnalysisFolderTree"),p=r("Button"),s=r("Dialog");return k(),v(s,{class:"p-fluid kn-dialog--toolbar--primary",contentStyle:t.workspaceAnalysisViewShareDialogDescriptor.dialog.style,visible:t.visible,modal:!0,closable:!1},{header:i(()=>[a(b,{class:"kn-toolbar kn-toolbar--primary p-p-0 p-m-0 p-col-12"},{start:i(()=>[g(d(t.$t("workspace.myRepository.destinationFolder")),1)]),_:1})]),footer:i(()=>[n("div",Lt,[a(p,{class:"kn-button kn-button--primary",onClick:t.closeDialog},{default:i(()=>[g(d(t.$t("common.cancel")),1)]),_:1},8,["onClick"]),a(p,{class:"kn-button kn-button--primary",onClick:t.shareDocument},{default:i(()=>[g(d(t.$t("common.share")),1)]),_:1},8,["onClick"])])]),default:i(()=>[a(m,{propFolders:t.folders,onFoldersSelected:t.setSelectedFolders},null,8,["propFolders","onFoldersSelected"])]),_:1},8,["contentStyle","visible"])}var Ot=A(Nt,[["render",Wt]]);const Xt={style:{height:"100vh",width:"100vw"}},Rt={flex:{display:"flex",flex:1,"flex-direction":"column"}};var Kt={dialog:Xt,style:Rt};const jt=x({name:"workspace-cockpit-dialog",components:{Dialog:z},props:{visible:{type:Boolean}},emits:["close"],data(){return{workspaceCockpitDialogDescriptor:Kt,url:""}},computed:{},watch:{},setup(){return{store:U()}},created(){this.createUrl()},methods:{createUrl(){const t=this.store.$state.user,o=t.locale.split("_")[0],e=t.userUniqueIdentifier,c=t.locale.split("_")[1];this.url=`/knowagecockpitengine/api/1.0/pages/edit?NEW_SESSION=TRUE&SBI_LANGUAGE=${o}&SBI_SCRIPT=&user_id=${e}&SBI_COUNTRY=${c}&SBI_ENVIRONMENT=WORKSPACE&IS_TECHNICAL_USER=true&documentMode=EDIT`},close(){this.$emit("close")}}}),Qt=["src"];function _t(t,o,e,c,f,u){const b=r("Button"),m=r("Toolbar"),p=r("Dialog"),s=T("tooltip");return k(),v(p,{class:"workspace-cockpit-dialog remove-padding p-fluid kn-dialog--toolbar--primary",contentStyle:t.workspaceCockpitDialogDescriptor.style.flex,visible:t.visible,modal:!1,closable:!1,position:"right",baseZIndex:1,autoZIndex:!0},{header:i(()=>[a(m,{class:"kn-toolbar kn-toolbar--primary p-p-0 p-m-0 p-col-12"},{start:i(()=>[]),end:i(()=>[E(a(b,{icon:"pi pi-times",class:"p-button-text p-button-rounded p-button-plain",onClick:t.close},null,8,["onClick"]),[[s,t.$t("common.close"),void 0,{bottom:!0}]])]),_:1})]),default:i(()=>[n("iframe",{ref:"iframe",class:"workspace-cockpit-iframe",src:t.url},null,8,Qt)]),_:1},8,["contentStyle","visible"])}var Yt=A(jt,[["render",_t]]);const Jt=x({name:"workspace-analysis-view",components:{DataTable:q,Column:Z,DetailSidebar:Y,WorkspaceCard:J,KnFabButton:H,Menu:rt,Message:tt,KnInputFile:ot,WorkspaceAnalysisViewEditDialog:zt,WorkspaceWarningDialog:nt,WorkspaceAnalysisViewShareDialog:Ot,WorkspaceCockpitDialog:Yt},emits:["showMenu","toggleDisplayView","execute"],props:{toggleCardDisplay:{type:Boolean}},computed:{isOwner(){return this.store.$state.user.userId===this.selectedAnalysis.creationUser},isShared(){return this.selectedAnalysis.functionalities.length>1}},data(){return{mainDescriptor:_,loading:!1,showDetailSidebar:!1,analysisDocuments:[],filteredAnalysisDocuments:[],selectedAnalysis:{},menuButtons:[],folders:[],searchWord:"",editDialogVisible:!1,warningDialogVisbile:!1,warningMessage:"",triggerUpload:!1,uploading:!1,shareDialogVisible:!1,creationMenuButtons:[],cockpitDialogVisible:!1}},setup(){return{store:U()}},created(){this.getAnalysisDocs()},methods:{getAnalysisDocs(){return this.loading=!0,this.$http.get("/knowage/restful-services/documents/myAnalysisDocsList").then(t=>{this.analysisDocuments=[...t.data.root],this.filteredAnalysisDocuments=[...this.analysisDocuments]}).finally(()=>this.loading=!1)},formatDate(t){return at(t,{dateStyle:"short",timeStyle:"short"})},showSidebar(t){this.selectedAnalysis=t,this.showDetailSidebar=!0},showMenu(t,o){this.selectedAnalysis=o,this.createMenuItems(),this.$refs.optionsMenu.toggle(t)},createMenuItems(){this.menuButtons=[],this.menuButtons.push({key:"0",label:this.$t("workspace.myAnalysis.menuItems.edit"),icon:"fas fa-edit",command:()=>{this.editAnalysisDocument(this.selectedAnalysis)},visible:this.isOwner},{key:"1",label:this.$t("workspace.myAnalysis.menuItems.share"),icon:"fas fa-share-alt",command:()=>{this.shareAnalysisDocument(this.selectedAnalysis)},visible:!this.isShared},{key:"1",label:this.$t("workspace.myAnalysis.menuItems.unshare"),icon:"fas fa-times-circle",command:()=>{this.shareAnalysisDocument(this.selectedAnalysis)},visible:this.isShared},{key:"2",label:this.$t("workspace.myAnalysis.menuItems.clone"),icon:"fas fa-clone",command:()=>{this.cloneAnalysisDocument(this.selectedAnalysis)}},{key:"3",label:this.$t("workspace.myAnalysis.menuItems.delete"),icon:"fas fa-trash",command:()=>{this.deleteAnalysisDocumentConfirm(this.selectedAnalysis)}},{key:"4",label:this.$t("workspace.myAnalysis.menuItems.upload"),icon:"fas fa-upload",command:()=>{this.uploadAnalysisPreviewFile(this.selectedAnalysis)}})},executeAnalysisDocument(t){this.$emit("execute",t)},openKpiDesigner(t){this.$router.push(`/kpi-edit/${t==null?void 0:t.id}?from=Workspace`)},editAnalysisDocument(t){this.selectedAnalysis=t,this.editDialogVisible=!0},async handleEditAnalysis(t){const o={document:{name:t.label,label:t.name,description:t.description,id:t.id},updateFromWorkspace:!0};await this.$http.post("/knowage/restful-services/2.0/saveDocument/",o,{headers:{"X-Disable-Errors":"true"}}).then(()=>{this.store.setInfo({title:this.$t("common.toast.updateTitle"),msg:this.$t("common.toast.success")}),this.editDialogVisible=!1,this.showDetailSidebar=!1,this.getAnalysisDocs()}).catch(e=>{this.warningMessage=e,this.warningDialogVisbile=!0})},async shareAnalysisDocument(t){this.selectedAnalysis=t,this.loading=!0;const o=this.selectedAnalysis.functionalities.length>1;o?await this.handleAnalysShared(null,o):await this.$http.get(`/knowage/restful-services/2.0/functionalities/forsharing/${t.id}`).then(e=>{this.folders=e.data,this.shareDialogVisible=!0}),this.loading=!1},async handleAnalysShared(t,o){this.loading=!0;let e=`/knowage/restful-services/documents/share?docId=${this.selectedAnalysis.id}&`;o||Object.keys(t).forEach(c=>e+=`functs=${t[c]}&`),e+=`isShare=${!o}`,await this.$http.post(e).then(()=>{this.store.setInfo({title:this.$t("common.toast.updateTitle"),msg:this.$t("common.toast.success")}),this.shareDialogVisible=!1,this.showDetailSidebar=!1,this.getAnalysisDocs()}).catch(()=>{}),this.loading=!1},async cloneAnalysisDocumentConfirm(t){this.$confirm.require({header:this.$t("common.toast.cloneConfirmTitle"),accept:async()=>await this.cloneAnalysisDocument(t)})},async cloneAnalysisDocument(t){this.loading=!0,await this.$http.post(`/knowage/restful-services/documents/clone?docId=${t.id}`).then(()=>{this.store.setInfo({title:this.$t("common.toast.createTitle"),msg:this.$t("common.toast.success")}),this.showDetailSidebar=!1,this.getAnalysisDocs()}).catch(()=>{}),this.loading=!0},deleteAnalysisDocumentConfirm(t){this.$confirm.require({message:this.$t("common.toast.deleteMessage"),header:this.$t("common.toast.deleteTitle"),icon:"pi pi-exclamation-triangle",accept:()=>this.deleteAnalysis(t)})},deleteAnalysis(t){this.loading=!0,this.$http.delete(`/knowage/restful-services/1.0/documents/${t.label}`).then(()=>{this.store.setInfo({title:this.$t("common.toast.deleteTitle"),msg:this.$t("common.toast.success")}),this.showDetailSidebar=!1,this.getAnalysisDocs()}).catch(()=>{}),this.loading=!1},uploadAnalysisPreviewFile(t){this.selectedAnalysis=t,this.triggerUpload=!1,setTimeout(()=>this.triggerUpload=!0,200)},uploadAnalysisFile(t){this.uploading=!0;let o=t.target.files[0];this.startUpload(o),this.triggerUpload=!1,setTimeout(()=>this.uploading=!1,200)},startUpload(t){var o=new FormData;o.append("file",t),this.$http.post(`/knowage/restful-services/2.0/analysis/${this.selectedAnalysis.id}`,o,{headers:{"Content-Type":"multipart/form-data"}}).then(()=>{this.store.setInfo({title:this.$t("common.uploading"),msg:this.$t("common.toast.uploadSuccess")}),this.showDetailSidebar=!1,this.getAnalysisDocs()}).catch().finally(()=>{this.triggerUpload=!1})},closeWarningDialog(){this.warningMessage="",this.warningDialogVisbile=!1},searchItems(){setTimeout(()=>{this.searchWord.trim().length?this.filteredAnalysisDocuments=this.analysisDocuments.filter(t=>{var o,e;return((o=t.name)==null?void 0:o.toLowerCase().includes(this.searchWord.toLowerCase()))||((e=t.creationUser)==null?void 0:e.toLowerCase().includes(this.searchWord.toLowerCase()))}):this.filteredAnalysisDocuments=[...this.analysisDocuments]},250)},showCreationMenu(t){this.createCreationMenuButtons(),this.$refs.creationMenu.toggle(t)},createCreationMenuButtons(){this.creationMenuButtons=[],this.creationMenuButtons.push({key:"0",label:this.$t("common.cockpit"),command:this.openCockpitDialog,visible:!0},{key:"1",label:this.$t("workspace.myAnalysis.geoRef"),command:this.openGeoRefCreation,visible:!0},{key:"2",label:this.$t("common.kpi"),command:this.openKpiDocumentDesigner,visible:!0})},openCockpitDialog(){this.cockpitDialogVisible=!0},closeCockpitDialog(){this.cockpitDialogVisible=!1,this.getAnalysisDocs()},openKpiDocumentDesigner(){this.$router.push("/kpi-edit/new-kpi?from=Workspace")},openGeoRefCreation(){this.$router.push("/gis/new")}}}),Gt={class:"p-m-2 kn-overflow"},Pt={key:1,class:"p-grid p-m-2","data-test":"card-container"};function qt(t,o,e,c,f,u){const b=r("Button"),m=r("KnFabButton"),p=r("Toolbar"),s=r("ProgressBar"),I=r("InputText"),M=r("Column"),B=r("DataTable"),N=r("Message"),L=r("WorkspaceCard"),W=r("DetailSidebar"),S=r("Menu"),O=r("WorkspaceAnalysisViewShareDialog"),X=r("WorkspaceAnalysisViewEditDialog"),R=r("WorkspaceWarningDialog"),K=r("KnInputFile"),j=r("WorkspaceCockpitDialog"),Q=T("tooltip");return k(),y(V,null,[a(p,{class:"kn-toolbar kn-toolbar--secondary"},{start:i(()=>[a(b,{id:"showSidenavIcon",icon:"fas fa-bars",class:"p-button-text p-button-rounded p-button-plain",onClick:o[0]||(o[0]=l=>t.$emit("showMenu"))}),g(" "+d(t.$t("workspace.menuLabels.myAnalysis")),1)]),end:i(()=>[t.toggleCardDisplay?(k(),v(b,{key:0,icon:"fas fa-list",class:"p-button-text p-button-rounded p-button-plain",onClick:o[1]||(o[1]=l=>t.$emit("toggleDisplayView"))})):w("",!0),t.toggleCardDisplay?w("",!0):(k(),v(b,{key:1,icon:"fas fa-th-large",class:"p-button-text p-button-rounded p-button-plain",onClick:o[2]||(o[2]=l=>t.$emit("toggleDisplayView"))})),a(m,{icon:"fas fa-plus","data-test":"new-folder-button",onClick:t.showCreationMenu},null,8,["onClick"])]),_:1}),t.loading?(k(),v(s,{key:0,mode:"indeterminate",class:"kn-progress-bar"})):w("",!0),a(I,{class:"kn-material-input p-m-2",style:D(t.mainDescriptor.style.filterInput),modelValue:t.searchWord,"onUpdate:modelValue":o[3]||(o[3]=l=>t.searchWord=l),type:"text",placeholder:t.$t("common.search"),onInput:t.searchItems,"data-test":"search-input"},null,8,["style","modelValue","placeholder","onInput"]),n("div",Gt,[t.toggleCardDisplay?w("",!0):(k(),v(B,{key:0,class:"p-datatable-sm kn-table p-mx-2",value:t.filteredAnalysisDocuments,loading:t.loading,dataKey:"id",responsiveLayout:"stack",breakpoint:"600px","data-test":"analysis-table"},{empty:i(()=>[g(d(t.$t("common.info.noDataFound")),1)]),filter:i(({filterModel:l})=>[a(I,{type:"text",modelValue:l.value,"onUpdate:modelValue":h=>l.value=h,class:"p-column-filter"},null,8,["modelValue","onUpdate:modelValue"])]),default:i(()=>[a(M,{field:"name",header:t.$t("importExport.gallery.column.name"),sortable:!0},null,8,["header"]),a(M,{field:"creationUser",header:t.$t("kpi.targetDefinition.kpiAuthor"),sortable:!0},null,8,["header"]),a(M,{field:"creationDate",header:t.$t("kpi.targetDefinition.kpiDate"),sortable:!0},{body:i(({data:l})=>[g(d(t.formatDate(l.creationDate)),1)]),_:1},8,["header"]),a(M,{style:D(t.mainDescriptor.style.iconColumn)},{body:i(l=>[a(b,{icon:"fas fa-ellipsis-v",class:"p-button-link",onClick:h=>t.showMenu(h,l.data)},null,8,["onClick"]),E(a(b,{icon:"fas fa-info-circle",class:"p-button-link",onClick:h=>t.showSidebar(l.data),"data-test":"info-button-"+l.data.name},null,8,["onClick","data-test"]),[[Q,t.$t("workspace.myModels.showInfo"),void 0,{left:!0}]]),a(b,{icon:"fas fa-play-circle",class:"p-button-link",onClick:h=>t.executeAnalysisDocument(l.data)},null,8,["onClick"])]),_:1},8,["style"])]),_:1},8,["value","loading"])),t.toggleCardDisplay?(k(),y("div",Pt,[t.filteredAnalysisDocuments.length===0?(k(),v(N,{key:0,class:"kn-flex p-m-2",severity:"info",closable:!1,style:D(t.mainDescriptor.style.message)},{default:i(()=>[g(d(t.$t("common.info.noDataFound")),1)]),_:1},8,["style"])):(k(!0),y(V,{key:1},et(t.filteredAnalysisDocuments,(l,h)=>(k(),v(L,{key:h,viewType:"analysis",document:l,onExecuteAnalysisDocument:t.executeAnalysisDocument,onEditAnalysisDocument:t.openKpiDesigner,onShareAnalysisDocument:t.shareAnalysisDocument,onCloneAnalysisDocument:t.cloneAnalysisDocument,onDeleteAnalysisDocument:t.deleteAnalysisDocumentConfirm,onUploadAnalysisPreviewFile:t.uploadAnalysisPreviewFile,onOpenSidebar:t.showSidebar},null,8,["document","onExecuteAnalysisDocument","onEditAnalysisDocument","onShareAnalysisDocument","onCloneAnalysisDocument","onDeleteAnalysisDocument","onUploadAnalysisPreviewFile","onOpenSidebar"]))),128))])):w("",!0)]),a(W,{visible:t.showDetailSidebar,viewType:"analysis",document:t.selectedAnalysis,onExecuteAnalysisDocument:t.executeAnalysisDocument,onEditAnalysisDocument:t.editAnalysisDocument,onShareAnalysisDocument:t.shareAnalysisDocument,onCloneAnalysisDocument:t.cloneAnalysisDocumentConfirm,onDeleteAnalysisDocument:t.deleteAnalysisDocumentConfirm,onUploadAnalysisPreviewFile:t.uploadAnalysisPreviewFile,onClose:o[4]||(o[4]=l=>t.showDetailSidebar=!1),"data-test":"detail-sidebar"},null,8,["visible","document","onExecuteAnalysisDocument","onEditAnalysisDocument","onShareAnalysisDocument","onCloneAnalysisDocument","onDeleteAnalysisDocument","onUploadAnalysisPreviewFile"]),a(S,{id:"optionsMenu",ref:"optionsMenu",model:t.menuButtons},null,8,["model"]),a(S,{id:"creationMenu",ref:"creationMenu",model:t.creationMenuButtons},null,8,["model"]),a(O,{visible:t.shareDialogVisible,propFolders:t.folders,onClose:o[5]||(o[5]=l=>t.shareDialogVisible=!1),onShare:o[6]||(o[6]=l=>t.handleAnalysShared(l,!1))},null,8,["visible","propFolders"]),a(X,{visible:t.editDialogVisible,propAnalysis:t.selectedAnalysis,onClose:o[7]||(o[7]=l=>t.editDialogVisible=!1),onSave:t.handleEditAnalysis},null,8,["visible","propAnalysis","onSave"]),a(R,{visible:t.warningDialogVisbile,title:t.$t("workspace.menuLabels.myAnalysis"),warningMessage:t.warningMessage,onClose:t.closeWarningDialog},null,8,["visible","title","warningMessage","onClose"]),t.uploading?w("",!0):(k(),v(K,{key:1,changeFunction:t.uploadAnalysisFile,accept:"image/*",triggerInput:t.triggerUpload},null,8,["changeFunction","triggerInput"])),a(j,{visible:t.cockpitDialogVisible,onClose:t.closeCockpitDialog},null,8,["visible","onClose"])],64)}var io=A(Jt,[["render",qt]]);export{io as default};
//# sourceMappingURL=WorkspaceAnalysisView-128ada28.js.map
