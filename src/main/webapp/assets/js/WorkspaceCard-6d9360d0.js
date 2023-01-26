import{s as B}from"./sidebar.esm-2131cfd1.js";import{s as E}from"./contextmenu.esm-4301c9fe.js";import{d as A,s as M,ae as z,_ as C,r as k,y as $,o,c as n,f as w,w as V,a as r,D as b,B as p,C as x,z as h,h as I,G as S,A as c,t as l,g as D}from"./index-1e676509.js";const _=[{translation:"importExport.gallery.column.name",type:"text",value:"name"},{translation:"managers.configurationManagement.headers.label",type:"text",value:"label"},{translation:"managers.businessModelManager.description",type:"text",value:"description"},{translation:"importExport.gallery.column.type",type:"text",value:"typeCode"},{translation:"common.author",type:"text",value:"creationUser"},{translation:"managers.mondrianSchemasManagement.headers.creationDate",type:"date",value:"creationDate"}],O=[{translation:"common.name",type:"text",value:"name"},{translation:"common.description",type:"text",value:"description"}],P=[{translation:"importExport.gallery.column.name",type:"text",value:"name"},{translation:"managers.configurationManagement.headers.label",type:"text",value:"label"},{translation:"common.category",type:"category",value:"catTypeId"},{translation:"managers.businessModelManager.description",type:"text",value:"description"},{translation:"importExport.gallery.column.type",type:"text",value:"dsTypeCd"},{translation:"common.author",type:"text",value:"owner"},{translation:"workspace.myData.modified",type:"date",value:"dateIn"}],L=[{translation:"importExport.gallery.column.name",type:"text",value:"documentName"},{translation:"managers.configurationManagement.headers.label",type:"text",value:"documentLabel"},{translation:"managers.businessModelManager.description",type:"text",value:"documentDescription"},{translation:"importExport.gallery.column.type",type:"text",value:"documentType"},{translation:"workspace.recent.sidebarLabels.executionTime",type:"date",value:"requestTime"}],N=[{translation:"common.label",type:"text",value:"label"},{translation:"common.name",type:"text",value:"name"}],Q="/knowage/servlet/AdapterHTTP?ACTION_NAME=MANAGE_PREVIEW_FILE_ACTION&SBI_ENVIRONMENT=DOCBROWSER&LIGHT_NAVIGATOR_DISABLED=TRUE&operation=DOWNLOAD&fileName=",H="82300081364511eca64e159ee59cd4dc.jpg",U={menuItems:{"min-width":"200px"},sidebarContainer:{display:"flex","flex-direction":"column"},sidebarImage:{"align-self":"center",width:"80%"},sidebarItem:{height:"auto","min-height":"72px"},sidebarToolbar:{display:"flex","justify-content":"space-evenly"}},R=["businessModel","analysis","dataset"];var s={analysisViewFields:_,businessModelViewFields:O,datasetViewFields:P,defaultViewFields:L,federationDatasetViewFields:N,imgPath:Q,imgSource:H,style:U,typesWithoutImages:R};const X=A({name:"workspace-sidebar",components:{Sidebar:B,Menu:E},emits:["close","executeRecent","executeDocumentFromOrganizer","moveDocumentToFolder","deleteDocumentFromOrganizer","executeAnalysisDocument","editAnalysisDocument","shareAnalysisDocument","cloneAnalysisDocument","deleteAnalysisDocument","uploadAnalysisPreviewFile","openDatasetInQBE","editDataset","previewDataset","deleteDataset","editDataset","exportToXlsx","exportToCsv","getHelp","downloadDatasetFile","shareDataset","cloneDataset","prepareData","openDataPreparation"],props:{visible:Boolean,viewType:String,document:Object,isPrepared:Boolean,datasetCategories:Array},computed:{isOwner(){return this.store.$state.user.userId===this.document.creationUser},isAnalysisShared(){return this.document.functionalities.length>1},isDatasetOwner(){return this.store.$state.user.userId===this.document.owner},showQbeEditButton(){return this.store.$state.user.userId===this.document.owner&&(this.document.dsTypeCd=="Federated"||this.document.dsTypeCd=="Qbe")},datasetHasDrivers(){return this.document.drivers&&this.document.length>0},datasetHasParams(){return this.document.pars&&this.document.pars>0},datasetIsIterable(){return!["Federated"].includes(this.document.dsTypeCd)},canLoadData(){if(this.document.actions)for(var t=0;t<this.document.actions.length;t++){var a=this.document.actions[t];if(a.name=="loaddata")return!0}return!1},datasetCategory(){let t="";return this.datasetCategories&&this.datasetCategories.find(a=>{a.VALUE_ID===this.document.catTypeId&&(t=a.VALUE_CD)}),t},documentImageSource(){return""+s.imgPath+this.document.previewFile},documentFields(){switch(this.viewType){case"recent":return s.defaultViewFields;case"repository":return s.defaultViewFields;case"dataset":return s.datasetViewFields;case"analysis":return s.analysisViewFields;case"businessModel":return s.businessModelViewFields;case"federationDataset":return s.federationDatasetViewFields;default:return[]}},documentButtons(){switch(this.viewType){case"recent":return[{icon:"fas fa-play-circle",class:"p-button-text p-button-rounded",tooltip:this.$t("workspace.buttonsTooltips.executeDoc"),visible:!0,command:this.emitEvent("executeRecent")}];case"repository":return[{icon:"fas fa-play-circle",class:"p-button-text p-button-rounded p-button-plain",tooltip:this.$t("workspace.buttonsTooltips.executeDoc"),visible:!0,command:this.emitEvent("executeDocumentFromOrganizer")},{icon:"fas fa-share",class:"p-button-text p-button-rounded p-button-plain",tooltip:this.$t("workspace.buttonsTooltips.moveDoc"),visible:!0,command:this.emitEvent("moveDocumentToFolder")},{icon:"fas fa-trash",class:"p-button-text p-button-rounded p-button-plain",tooltip:this.$t("workspace.buttonsTooltips.deleteDoc"),visible:!0,command:this.emitEvent("deleteDocumentFromOrganizer")}];case"dataset":return[{icon:"fas fa-eye",class:"p-button-text p-button-rounded p-button-plain",tooltip:this.$t("workspace.buttonsTooltips.previewDs"),visible:this.canLoadData,command:this.emitEvent("previewDataset")},{icon:"fas fa-question-circle",class:"p-button-text p-button-rounded p-button-plain",tooltip:this.$t("workspace.buttonsTooltips.help"),visible:!0,command:this.emitEvent("getHelp")},{icon:"fas fa-ellipsis-v",class:"p-button-text p-button-rounded p-button-plain",tooltip:this.$t("workspace.buttonsTooltips.other"),visible:!0,command:this.showMenu}];case"analysis":return[{icon:"fas fa-play-circle",class:"p-button-text p-button-rounded p-button-plain",tooltip:this.$t("workspace.buttonsTooltips.executeDoc"),visible:!0,command:this.emitEvent("executeAnalysisDocument")},{icon:"fas fa-edit",class:"p-button-text p-button-rounded p-button-plain",tooltip:this.$t("workspace.buttonsTooltips.editDoc"),visible:this.isOwner,command:this.emitEvent("editAnalysisDocument")},{icon:"fas fa-ellipsis-v",class:"p-button-text p-button-rounded p-button-plain",tooltip:this.$t("workspace.buttonsTooltips.other"),visible:!0,command:this.showMenu}];case"businessModel":return[{icon:"fa fa-search",class:"p-button-text p-button-rounded p-button-plain",tooltip:this.$t("workspace.myModels.openInQBE"),visible:!0,command:this.emitEvent("openDatasetInQBE")}];case"federationDataset":return[{icon:"fa fa-search",class:"p-button-text p-button-rounded p-button-plain",visible:!0,command:this.emitEvent("openDatasetInQBE")},{icon:"pi pi-pencil",class:"p-button-text p-button-rounded p-button-plain",visible:!0,command:this.emitEvent("editDataset")},{icon:"fas fa-trash-alt",class:"p-button-text p-button-rounded p-button-plain",visible:this.store.$state.user.isSuperadmin||this.store.$state.user.userId===this.document.owner,command:this.emitEvent("deleteDataset")}];default:return[]}}},data(){return{descriptor:s,sidebarVisible:!1,menuButtons:[]}},setup(){return{store:M()}},created(){this.sidebarVisible=this.visible},watch:{visible(){this.sidebarVisible=this.visible}},methods:{showMenu(t){this.createMenuItems(),this.$refs.optionsMenu.toggle(t)},createMenuItems(){var t;if(this.menuButtons=[],this.viewType=="analysis")this.menuButtons.push({key:"1",label:this.$t("workspace.myAnalysis.menuItems.share"),icon:"fas fa-share-alt",command:this.emitEvent("shareAnalysisDocument"),visible:!this.isAnalysisShared},{key:"2",label:this.$t("workspace.myAnalysis.menuItems.unshare"),icon:"fas fa-times-circle",command:this.emitEvent("shareAnalysisDocument"),visible:this.isAnalysisShared},{key:"3",label:this.$t("workspace.myAnalysis.menuItems.clone"),icon:"fas fa-clone",command:this.emitEvent("cloneAnalysisDocument")},{key:"4",label:this.$t("workspace.myAnalysis.menuItems.delete"),icon:"fas fa-trash",command:this.emitEvent("deleteAnalysisDocument")},{key:"5",label:this.$t("workspace.myAnalysis.menuItems.upload"),icon:"fas fa-upload",command:this.emitEvent("uploadAnalysisPreviewFile")});else if(this.viewType=="dataset"){let a=[];a.push({key:"0",label:this.$t("workspace.myAnalysis.menuItems.showDsDetails"),icon:"fas fa-pen",command:this.emitEvent("editDataset"),visible:this.isDatasetOwner&&(this.document.dsTypeCd=="File"||this.document.dsTypeCd=="Prepared")},{key:"1",label:this.$t("workspace.myModels.openInQBE"),icon:"fas fa-pen",command:this.emitEvent("openDatasetInQBE"),visible:this.showQbeEditButton},{key:"2",label:this.$t("workspace.myData.xlsxExport"),icon:"fas fa-file-excel",command:this.emitEvent("exportToXlsx"),visible:this.canLoadData&&!this.datasetHasDrivers&&!this.datasetHasParams&&this.document.dsTypeCd!="File"&&this.datasetIsIterable},{key:"3",label:this.$t("workspace.myData.csvExport"),icon:"fas fa-file-csv",command:this.emitEvent("exportToCsv"),visible:this.canLoadData&&!this.datasetHasDrivers&&!this.datasetHasParams&&this.document.dsTypeCd!="File"},{key:"4",label:this.$t("workspace.myData.fileDownload"),icon:"fas fa-download",command:this.emitEvent("downloadDatasetFile"),visible:this.document.dsTypeCd=="File"},{key:"5",label:this.$t("workspace.myData.shareDataset"),icon:"fas fa-share-alt",command:this.emitEvent("shareDataset"),visible:this.canLoadData&&this.isDatasetOwner&&this.document.dsTypeCd!="Prepared"},{key:"6",label:this.$t("workspace.myData.cloneDataset"),icon:"fas fa-clone",command:this.emitEvent("cloneDataset"),visible:this.canLoadData&&this.document.dsTypeCd=="Qbe"},{key:"9",label:this.$t("workspace.myData.deleteDataset"),icon:"fas fa-trash",command:this.emitEvent("deleteDataset"),visible:this.isDatasetOwner}),(t=this.store.$state.user)!=null&&t.functionalities.includes("DataPreparation")&&a.push({key:"7",label:this.$t("workspace.myData.openDataPreparation"),icon:"fas fa-cogs",command:this.emitEvent("openDataPreparation"),visible:this.canLoadData&&this.document.dsTypeCd!="Qbe"&&this.document.pars&&this.document.pars.length==0}),a=a.sort((m,u)=>m.key.localeCompare(u.key)),this.menuButtons=a}},getFormattedDate(t,a){return z(t,a)},emitEvent(t){return()=>this.$emit(t,this.document)}}}),j=["src"],W={class:"p-m-5"},G={class:"p-m-0"},q={key:0,class:"p-m-0"},J={key:1,class:"p-m-0"},Y={key:2,class:"p-m-0"};function K(t,a,m,u,F,T){const f=k("Button"),g=k("Sidebar"),v=k("Menu"),d=$("tooltip");return o(),n(p,null,[w(g,{class:"mySidebar",visible:t.sidebarVisible,"onUpdate:visible":a[0]||(a[0]=e=>t.sidebarVisible=e),showCloseIcon:!1,position:"right",onHide:a[1]||(a[1]=e=>t.$emit("close"))},{default:V(()=>[r("div",{id:"sidebarItemsContainer",style:b(t.descriptor.style.sidebarContainer)},[r("div",{class:"kn-toolbar kn-toolbar--default",style:b(t.descriptor.style.sidebarToolbar)},[(o(!0),n(p,null,x(t.documentButtons,(e,y)=>(o(),n("span",{key:y},[e.visible?h((o(),I(f,{key:0,icon:e.icon,class:S(e.class),onClick:e.command},null,8,["icon","class","onClick"])),[[d,e.tooltip,void 0,{top:!0}]]):c("",!0)]))),128))],4),t.viewType&&t.document.previewFile&&!t.descriptor.typesWithoutImages.includes(t.viewType)?(o(),n("img",{key:0,class:"p-mt-5",style:b(t.descriptor.style.sidebarImage),align:"center",src:t.documentImageSource},null,12,j)):c("",!0),r("div",W,[(o(!0),n(p,null,x(t.documentFields,(e,y)=>(o(),n("div",{class:"p-mb-5",key:y},[r("h3",G,[r("b",null,l(t.$t(e.translation)),1)]),e.type==="category"&&t.datasetCategory?(o(),n("p",q,l(t.datasetCategory),1)):c("",!0),e.type==="date"?(o(),n("p",J,l(t.getFormattedDate(t.document[e.value],{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})),1)):c("",!0),e.type!="date"&&e.type!="category"?(o(),n("p",Y,l(t.document[e.value]),1)):c("",!0)]))),128))])],4)]),_:1},8,["visible"]),w(v,{id:"optionsMenu",ref:"optionsMenu",model:t.menuButtons,style:b(t.descriptor.style.menuItems)},null,8,["model","style"])],64)}var ft=C(X,[["render",K]]);const Z={image:"previewFile",label:"label",name:"name",type:"typeCode"},tt={image:"previewFile",label:"name",name:"description",type:"dataSourceLabel"},at={image:"previewFile",label:"label",name:"name",type:"dsTypeCd"},et={businessModel:"model.jpg",missing:"dashboard.jpg"},ot={image:"previewFile",label:"documentLabel",name:"documentName",type:"documentType"},nt={image:"previewFile",label:"label",name:"name",type:"owner"};var i={analysisViewFields:Z,businessModelViewFields:tt,datasetViewFields:at,defaultImages:et,defaultViewFields:ot,federationDatasetViewFields:nt};const rt=A({name:"workspace-sidebar",components:{Menu:E},emits:["executeRecent","executeDocumentFromOrganizer","moveDocumentToFolder","deleteDocumentFromOrganizer","executeAnalysisDocument","editAnalysisDocument","shareAnalysisDocument","cloneAnalysisDocument","deleteAnalysisDocument","uploadAnalysisPreviewFile","openDatasetInQBE","editDataset","deleteDataset","previewDataset","deleteDataset","editDataset","exportToXlsx","exportToCsv","getHelp","downloadDatasetFile","shareDataset","openSidebar","cloneDataset","prepareData","openDataPreparation"],props:{visible:Boolean,viewType:String,document:Object,isPrepared:Boolean},computed:{isOwner(){return this.store.$state.user.fullName===this.document.creationUser},isAnalysisShared(){return this.document.functionalities.length>1},isDatasetOwner(){return this.store.$state.user.fullName===this.document.owner},showQbeEditButton(){return this.store.$state.user.fullName===this.document.owner&&(this.document.dsTypeCd=="Federated"||this.document.dsTypeCd=="Qbe")},datasetHasDrivers(){return this.document.drivers&&this.document.length>0},datasetHasParams(){return this.document.pars&&this.document.pars>0},datasetIsIterable(){return!["Federated"].includes(this.document.dsTypeCd)},canLoadData(){if(this.document.actions)for(var t=0;t<this.document.actions.length;t++){var a=this.document.actions[t];if(a.name=="loaddata")return!0}return!1},documentImageSource(){return this.document[this.documentFields.image]?{"background-image":`url(${{}.VUE_APP_HOST_URL}${s.imgPath}${this.document[this.documentFields.image]}),url(${require("@/assets/images/workspace/documentTypes/"+i.defaultImages.missing)})`}:{"background-image":`url(${require("@/assets/images/workspace/documentTypes/"+(i.defaultImages[this.document.type]||i.defaultImages.missing))})`}},documentFields(){switch(this.viewType){case"recent":return i.defaultViewFields;case"repository":return i.defaultViewFields;case"dataset":return i.datasetViewFields;case"analysis":return i.analysisViewFields;case"businessModel":return i.businessModelViewFields;case"federationDataset":return i.federationDatasetViewFields;default:return[]}},documentButtons(){switch(this.viewType){case"recent":return[{icon:"fas fa-info-circle",id:"list-button",visible:!0,command:this.emitEvent("openSidebar"),label:"common.details"},{icon:"fas fa-play-circle",visible:!0,command:this.emitEvent("executeRecent"),label:"common.execute"}];case"repository":return[{icon:"fas fa-ellipsis-v",id:"list-button",visible:!0,command:this.showMenu,label:"common.menu"},{icon:"fas fa-info-circle",id:"list-button",visible:!0,command:this.emitEvent("openSidebar"),label:"common.details"},{icon:"fas fa-play-circle",visible:!0,command:this.emitEvent("executeDocumentFromOrganizer"),label:"common.execute"}];case"dataset":return[{icon:"fas fa-ellipsis-v",id:"list-button",visible:!0,command:this.showMenu,label:"common.menu"},{icon:"fas fa-info-circle",id:"list-button",visible:!0,command:this.emitEvent("openSidebar"),label:"common.details"},{icon:"fas fa-eye",visible:!0,command:this.emitEvent("previewDataset"),label:"common.details"}];case"analysis":return[{icon:"fas fa-ellipsis-v",id:"list-button",visible:!0,command:this.showMenu,label:"common.menu"},{icon:"fas fa-info-circle",id:"list-button",visible:!0,command:this.emitEvent("openSidebar"),label:"common.details"},{icon:"fas fa-play-circle",visible:!0,command:this.emitEvent("executeAnalysisDocument"),label:"common.execute"}];case"businessModel":return[{icon:"fas fa-info-circle",id:"list-button",visible:!0,command:this.emitEvent("openSidebar"),label:"common.details"},{icon:"fa fa-search",visible:!0,command:this.emitEvent("openDatasetInQBE"),label:"common.execute"}];case"federationDataset":return[{icon:"fas fa-ellipsis-v",id:"list-button",visible:!0,command:this.showMenu,label:"common.menu"},{icon:"fas fa-info-circle",id:"list-button",visible:!0,command:this.emitEvent("openSidebar"),label:"common.details"},{icon:"fa fa-search",visible:!0,command:this.emitEvent("openDatasetInQBE"),label:"common.execute"}];default:return[]}}},data(){return{cardDescriptor:i,sidebarVisible:!1,menuButtons:[]}},setup(){return{store:M()}},methods:{showMenu(t){this.createMenuItems(),this.$refs.optionsMenu.toggle(t)},emitEvent(t){return()=>this.$emit(t,this.document)},createMenuItems(){var t;if(this.menuButtons=[],this.viewType=="analysis")this.menuButtons.push({key:"0",label:this.$t("workspace.myAnalysis.menuItems.edit"),icon:"fas fa-edit",command:this.emitEvent("editAnalysisDocument"),visible:this.isOwner},{key:"1",label:this.$t("workspace.myAnalysis.menuItems.share"),icon:"fas fa-share-alt",command:this.emitEvent("shareAnalysisDocument"),visible:!this.isAnalysisShared},{key:"2",label:this.$t("workspace.myAnalysis.menuItems.unshare"),icon:"fas fa-times-circle",command:this.emitEvent("shareAnalysisDocument"),visible:this.isAnalysisShared},{key:"3",label:this.$t("workspace.myAnalysis.menuItems.clone"),icon:"fas fa-clone",command:this.emitEvent("cloneAnalysisDocument")},{key:"4",label:this.$t("workspace.myAnalysis.menuItems.delete"),icon:"fas fa-trash",command:this.emitEvent("deleteAnalysisDocument")},{key:"5",label:this.$t("workspace.myAnalysis.menuItems.upload"),icon:"fas fa-upload",command:this.emitEvent("uploadAnalysisPreviewFile")});else if(this.viewType=="dataset"){let a=[];a.push({key:"0",label:this.$t("workspace.myAnalysis.menuItems.showDsDetails"),icon:"fas fa-pen",command:this.emitEvent("editDataset"),visible:this.isDatasetOwner&&(this.document.dsTypeCd=="File"||this.document.dsTypeCd=="Prepared")},{key:"1",label:this.$t("workspace.myModels.openInQBE"),icon:"fas fa-pen",command:this.emitEvent("openDatasetInQBE"),visible:this.showQbeEditButton},{key:"2",label:this.$t("workspace.myData.xlsxExport"),icon:"fas fa-file-excel",command:this.emitEvent("exportToXlsx"),visible:this.canLoadData&&!this.datasetHasDrivers&&!this.datasetHasParams&&this.document.dsTypeCd!="File"&&this.datasetIsIterable},{key:"3",label:this.$t("workspace.myData.csvExport"),icon:"fas fa-file-csv",command:this.emitEvent("exportToCsv"),visible:this.canLoadData&&!this.datasetHasDrivers&&!this.datasetHasParams&&this.document.dsTypeCd!="File"},{key:"4",label:this.$t("workspace.myData.fileDownload"),icon:"fas fa-download",command:this.emitEvent("downloadDatasetFile"),visible:this.document.dsTypeCd=="File"},{key:"5",label:this.$t("workspace.myData.shareDataset"),icon:"fas fa-share-alt",command:this.emitEvent("shareDataset"),visible:this.canLoadData&&this.isDatasetOwner},{key:"6",label:this.$t("workspace.myData.cloneDataset"),icon:"fas fa-clone",command:this.emitEvent("cloneDataset"),visible:this.canLoadData&&this.document.dsTypeCd=="Qbe"},{key:"9",label:this.$t("workspace.myData.deleteDataset"),icon:"fas fa-trash",command:this.emitEvent("deleteDataset"),visible:this.isDatasetOwner}),(t=this.store.$state.user)!=null&&t.functionalities.includes("DataPreparation")&&a.push({key:"7",label:this.$t("workspace.myData.openDataPreparation"),icon:"fas fa-cogs",command:this.emitEvent("openDataPreparation"),visible:this.canLoadData&&this.document.dsTypeCd!="Qbe"&&this.document.pars&&this.document.pars.length==0},{key:"8",label:this.$t("workspace.myData.monitoring"),icon:"fas fa-cogs",command:this.emitEvent("monitoring"),visible:this.canLoadData&&this.document.dsTypeCd!="Qbe"&&this.document.pars&&this.document.pars.length==0}),a=a.sort((m,u)=>m.key.localeCompare(u.key)),this.menuButtons=a}else this.viewType==="federationDataset"?this.menuButtons.push({key:"0",icon:"pi pi-pencil",label:this.$t("workspace.myModels.editDataset"),class:"p-button-text p-button-rounded p-button-plain",visible:!0,command:this.emitEvent("editDataset")},{key:"1",icon:"fas fa-trash-alt",label:this.$t("workspace.myModels.deleteDataset"),class:"p-button-text p-button-rounded p-button-plain",visible:this.store.$state.user.isSuperadmin||this.store.$state.user.userId===this.document.owner,command:this.emitEvent("deleteDataset")}):this.viewType==="repository"&&this.menuButtons.push({key:"3",label:this.$t("workspace.myRepository.moveDocument"),icon:"fas fa-share",command:this.emitEvent("moveDocumentToFolder")},{key:"4",label:this.$t("workspace.myAnalysis.menuItems.delete"),icon:"fas fa-trash",command:this.emitEvent("deleteDocumentFromOrganizer")})}}}),it={class:"p-col-12 p-md-6 p-lg-4 p-xl-3",tabindex:"0"},st={class:"card-container"},dt={class:"details-container"},lt={class:"p-ml-3 detail-type",role:"type"},ct={class:"p-ml-3 detail-info"},bt={class:"p-m-0 kn-truncated",role:"title"},pt={class:"p-m-0 kn-truncated"},mt={class:"detail-buttons"};function ut(t,a,m,u,F,T){const f=k("Button"),g=k("Menu"),v=$("tooltip");return o(),n(p,null,[r("div",it,[r("div",st,[r("span",dt,[r("div",lt,l(t.document[t.documentFields.type]),1),r("div",ct,[h((o(),n("h4",bt,[D(l(t.document[t.documentFields.label]),1)])),[[v,t.document[t.documentFields.label]]]),h((o(),n("p",pt,[D(l(t.document[t.documentFields.name]),1)])),[[v,t.document[t.documentFields.name]]])]),r("div",mt,[(o(!0),n(p,null,x(t.documentButtons,(d,e)=>(o(),n(p,{key:e},[d.visible?h((o(),I(f,{key:0,id:d.id,icon:d.icon,class:"p-mx-1 p-button-text p-button-rounded p-button-plain p-button-lg",onClick:d.command,"aria-label":t.$t(d.label)},null,8,["id","icon","onClick","aria-label"])),[[v,t.$t(d.label)]]):c("",!0)],64))),128))])]),t.document[t.documentFields.image]?(o(),n("div",{key:0,"aria-hidden":"true",class:"card-image",style:b(t.documentImageSource)},null,4)):(o(),n("div",{key:1,"aria-hidden":"true",class:"card-image",style:b(t.documentImageSource)},null,4))])]),w(g,{id:"optionsMenu",ref:"optionsMenu",model:t.menuButtons},null,8,["model"])],64)}var gt=C(rt,[["render",ut],["__scopeId","data-v-60ab185c"]]);export{ft as D,gt as W};
//# sourceMappingURL=WorkspaceCard-6d9360d0.js.map
