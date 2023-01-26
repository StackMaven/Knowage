import{d as C,i as P,n as F,l as L,x as A,_ as D,r as d,o as l,h as u,w as c,f as r,a as t,E as I,g as M,t as i,c as v,C as S,D as w,B as N,ad as V,e as U,H as B,W as _,A as m,p as R,b as j}from"./index-1e676509.js";import{s as O}from"./calendar.esm-60a451ba.js";import{s as x}from"./SchedulationAgendaDescriptor-311b564c.js";import{f}from"./filterHelper-a723991a.js";const Y=C({name:"configuration-management-dialog",components:{Dialog:P,DataTable:F,Column:L},props:{model:Object,title:String,itemList:Array},emits:["close","changed"],data(){return{schedulationAgendaDescriptor:x,selectedItem:null,dirty:!1,options:[!0,!1],loading:!1,columns:x.columns,filters:{global:[f],name:{operator:A.AND,constraints:[f]},description:{operator:A.AND,constraints:[f]}}}},mounted(){this.model&&(this.selectedItem={...this.model})},computed:{buttonDisabled(){return!1}},watch:{model(){this.selectedItem={...this.model}}},methods:{closeTemplate(){this.$emit("close")},selectRow(a){a&&(this.selectedItem=a.data)},handleSubmit(){this.$emit("changed",this.selectedItem)}}}),X={class:"p-fluid p-m-5"},Q={id:"noDataFound"},J={class:"table-header p-d-flex"},G={class:"p-input-icon-left p-mr-3 p-col-12"},H=t("i",{class:"pi pi-search"},null,-1);function K(a,e,y,s,T,$){const g=d("InputText"),h=d("Column"),b=d("DataTable"),k=d("Button"),p=d("Dialog");return l(),u(p,{visible:!0,modal:!0,class:"kn-dialog--toolbar--primary",header:a.title,closable:!1,style:w(a.schedulationAgendaDescriptor.form.style)},{footer:c(()=>[r(k,{class:"kn-button kn-button--secondary",label:a.$t("managers.schedulationAgendaManagement.detail.close"),onClick:a.closeTemplate},null,8,["label","onClick"]),r(k,{class:"kn-button kn-button--primary",label:a.$t("managers.schedulationAgendaManagement.detail.select"),onClick:a.handleSubmit},null,8,["label","onClick"])]),default:c(()=>[t("form",X,[r(b,{id:"dataitem-datatable",value:a.itemList,rows:10,loading:a.loading,class:"p-datatable-sm kn-table",dataKey:"id",filters:a.filters,"onUpdate:filters":e[1]||(e[1]=n=>a.filters=n),selection:a.selectedItem,"onUpdate:selection":e[2]||(e[2]=n=>a.selectedItem=n),globalFilterFields:a.schedulationAgendaDescriptor.globalFilterFields,responsiveLayout:a.schedulationAgendaDescriptor.responsiveLayout,breakpoint:a.schedulationAgendaDescriptor.breakpoint,onRowClick:a.selectRow,paginator:!0,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[10,15,20],currentPageReportTemplate:a.$t("common.table.footer.paginated",{first:"{first}",last:"{last}",totalRecords:"{totalRecords}"})},I({empty:c(()=>[t("div",Q,i(a.$t("managers.schedulationAgendaManagement.info.noDataFound")),1)]),header:c(()=>[t("div",J,[t("span",G,[H,r(g,{class:"kn-material-input",modelValue:a.filters.global.value,"onUpdate:modelValue":e[0]||(e[0]=n=>a.filters.global.value=n),type:"text",placeholder:a.$t("common.search"),"data-test":"filterInput"},null,8,["modelValue","placeholder"])])])]),default:c(()=>[(l(!0),v(N,null,S(a.schedulationAgendaDescriptor.columns,n=>(l(),u(h,{class:"kn-truncated",style:w(n.style),field:n.field,header:a.$t(n.header),sortable:!1,key:n.field},null,8,["style","field","header"]))),128))]),_:2},[a.loading?{name:"loading",fn:c(()=>[M(i(a.$t("managers.schedulationAgendaManagement.info.dataLoading")),1)])}:void 0]),1032,["value","loading","filters","selection","globalFilterFields","responsiveLayout","breakpoint","onRowClick","currentPageReportTemplate"])])]),_:1},8,["header","style"])}var Z=D(Y,[["render",K]]);const q=C({name:"schedulation-agenda",components:{Calendar:O,Card:V,Toolbar:U,ProgressBar:B,SchedulationAgendaDialog:Z},data(){return{schedulationAgendaDescriptor:x,schedulations:[],selectedPackage:null,selectedDocument:null,selectedPackageName:"",selectedDocumentName:"",packageList:[],documentList:[],loading:!1,startDateTime:null,endDateTime:null,displayFormType:""}},computed:{minStartDate(){return new Date}},created(){this.startDateTime=new Date,this.endDateTime=new Date,this.endDateTime.setDate(this.endDateTime.getDate()+7),this.loadPackages(),this.loadDocuments()},watch:{selectedPackage(){this.selectedPackage&&(this.selectedPackageName=this.selectedPackage.name)},selectedDocument(){this.selectedDocument&&(this.selectedDocumentName=this.selectedDocument.name)}},methods:{async loadPackages(){this.loading=!0,await this.$http.get("/knowage/restful-services//scheduleree/listAllJobs").then(a=>{a.data.root.filter(s=>s.jobGroup=="BIObjectExecutions").map(s=>{this.packageList.push({id:s.jobName,name:s.jobName,description:s.jobDescription})})}).finally(()=>this.loading=!1)},async loadDocuments(){this.loading=!0,await this.$http.get("/knowage/restful-services/2.0/documents").then(a=>{this.documentList=a.data}).finally(()=>this.loading=!1)},showForm(a){this.displayFormType=a},closeForm(){this.displayFormType=""},selectedPackageChanged(a){this.selectedPackage=a,this.displayFormType=""},selectedDocumentChanged(a){this.selectedDocument=a,this.displayFormType=""},runSearch(){this.loading=!0;let a=`/knowage/restful-services/scheduleree/nextExecutions?start=${this.formatDateTime(this.startDateTime)}&end=${this.formatDateTime(this.endDateTime)}`;this.selectedPackage&&(a+=`&jobPackageName=${this.selectedPackage.id}`),this.selectedDocument&&(a+=`&document=${this.selectedDocument.label}`),this.$http.get(a).then(e=>{this.schedulations=e.data.root}).finally(()=>this.loading=!1),this.$router.push("/schedulation-agenda/search-result")},formatDateTime(a){return _(a,"YYYY-MM-DDTHH:MM:SS")},removeSelectedPackage(){this.selectedPackage=null,this.selectedPackageName=""},removeSelectedDocument(){this.selectedDocument=null,this.selectedDocumentName=""}}}),W=a=>(R("data-v-c3aa5ed6"),a=a(),j(),a),aa={class:"kn-page"},ea={class:"kn-page-content custom-kn-page-width p-d-flex p-flex-column"},ta={class:"p-d-flex custom-overflow-parent-container"},oa={class:"p-d-flex p-ai-center p-jc-between custom-overflow-auto"},ra={class:"p-d-flex p-mx-2"},na={for:"startDate",class:"kn-material-input-label p-m-2"},da={class:"p-d-flex p-ai-center p-mx-2"},ia={for:"startTime",class:"kn-material-input-label p-m-2"},la={class:"p-d-flex p-mx-2"},ca={for:"endDate",class:"kn-material-input-label p-m-2"},sa={class:"p-d-flex p-ai-center p-mx-2"},pa={for:"endTime",class:"kn-material-input-label p-m-2"},ba={class:"custom-timepicker"},ka={class:"p-d-flex p-ai-center p-mx-2"},ma={class:"p-d-flex p-flex-column"},ua={for:"package",class:"kn-material-input-label"},va={class:"p-d-flex p-ai-center p-mx-2"},ga={class:"p-d-flex p-flex-column"},ha={for:"document",class:"kn-material-input-label"},fa={class:"p-d-flex p-ai-center"},wa=W(()=>t("h1",null,null,-1)),xa={class:"kn-page-content p-grid p-m-0"},ya={key:0},Aa={key:1},Ca={class:"p-col-12 p-sm-12 p-md-12 p-p-0 p-d-flex p-flex-column flex-container-overflow-auto"};function Da(a,e,y,s,T,$){const g=d("Toolbar"),h=d("ProgressBar"),b=d("Calendar"),k=d("InputText"),p=d("Button"),n=d("SchedulationAgendaDialog"),E=d("Card"),z=d("router-view");return l(),v("div",aa,[t("div",ea,[r(g,{class:"kn-toolbar kn-toolbar--primary"},{start:c(()=>[M(i(a.$t("managers.schedulationAgendaManagement.title")),1)]),_:1}),a.loading?(l(),u(h,{key:0,mode:"indeterminate",class:"kn-progress-bar","data-test":"progress-bar"})):m("",!0),t("div",{style:w(a.schedulationAgendaDescriptor.hCard.style),class:"card-no-padding flex-no-resize p-p-3"},[r(E,null,{content:c(()=>[t("div",ta,[t("div",oa,[t("div",ra,[t("label",na,i(a.$t("managers.schedulationAgendaManagement.detail.startDate")+":"),1),t("span",null,[r(b,{id:"startDate",class:"kn-material-input",modelValue:a.startDateTime,"onUpdate:modelValue":e[0]||(e[0]=o=>a.startDateTime=o),showIcon:!0,manualInput:!1,minDate:a.minStartDate,"data-test":"start-date"},null,8,["modelValue","minDate"])])]),t("div",da,[t("label",ia,i(a.$t("managers.schedulationAgendaManagement.detail.startTime")+":"),1),t("span",null,[r(b,{id:"startTime",class:"kn-material-input custom-timepicker",modelValue:a.startDateTime,"onUpdate:modelValue":e[1]||(e[1]=o=>a.startDateTime=o),manualInput:!1,timeOnly:!0,hourFormat:"24",inline:!0,"data-test":"start-time"},null,8,["modelValue"])])]),t("div",la,[t("label",ca,i(a.$t("managers.schedulationAgendaManagement.detail.endDate")+":"),1),t("span",null,[r(b,{id:"endDate",class:"kn-material-input",modelValue:a.endDateTime,"onUpdate:modelValue":e[2]||(e[2]=o=>a.endDateTime=o),showIcon:!0,manualInput:!1,"data-test":"end-date"},null,8,["modelValue"])])]),t("div",sa,[t("label",pa,i(a.$t("managers.schedulationAgendaManagement.detail.endTime")+":"),1),t("span",ba,[r(b,{id:"endTime",class:"kn-material-input",modelValue:a.endDateTime,"onUpdate:modelValue":e[3]||(e[3]=o=>a.endDateTime=o),manualInput:!1,timeOnly:!0,hourFormat:"24",inline:!0,"data-test":"end-time"},null,8,["modelValue"])])]),t("div",ka,[t("div",ma,[t("label",ua,i(a.$t("managers.schedulationAgendaManagement.detail.package")),1),r(k,{modelValue:a.selectedPackageName,"onUpdate:modelValue":e[4]||(e[4]=o=>a.selectedPackageName=o),id:"package",class:"kn-material-input",type:"text","data-test":"package-input",onClick:e[5]||(e[5]=o=>a.showForm("packageForm")),readonly:!0},null,8,["modelValue"])]),r(p,{icon:"fas fa-external-link-alt",class:"p-button-text p-button-rounded p-button-plain",onClick:e[6]||(e[6]=o=>a.showForm("packageForm"))}),a.selectedPackage?(l(),u(p,{key:0,icon:"pi pi-times-circle",class:"p-button-text p-button-rounded p-button-plain",onClick:a.removeSelectedPackage},null,8,["onClick"])):m("",!0)]),t("div",va,[t("div",ga,[t("label",ha,i(a.$t("managers.schedulationAgendaManagement.detail.document")),1),r(k,{modelValue:a.selectedDocumentName,"onUpdate:modelValue":e[7]||(e[7]=o=>a.selectedDocumentName=o),id:"document",class:"kn-material-input",type:"text","data-test":"document-input",onClick:e[8]||(e[8]=o=>a.showForm("documentForm")),readonly:!0},null,8,["modelValue"])]),r(p,{icon:"fas fa-external-link-alt",class:"p-button-text p-button-rounded p-button-plain",onClick:e[9]||(e[9]=o=>a.showForm("documentForm"))}),a.selectedDocument?(l(),u(p,{key:0,icon:"pi pi-times-circle",class:"p-button-text p-button-rounded p-button-plain",onClick:a.removeSelectedDocument},null,8,["onClick"])):m("",!0)]),t("div",fa,[t("div",null,[r(p,{class:"p-button-text kn-button",label:a.$t("common.search"),onClick:a.runSearch,"data-test":"search-button"},null,8,["label","onClick"])])]),wa])]),t("div",xa,[a.displayFormType=="packageForm"?(l(),v("div",ya,[r(n,{itemList:a.packageList,model:a.selectedPackage,title:a.$t("managers.schedulationAgendaManagement.packageTypes.title"),onChanged:e[10]||(e[10]=o=>a.selectedPackageChanged(o)),onClose:a.closeForm,"data-test":"package-schedulation-form"},null,8,["itemList","model","title","onClose"])])):m("",!0),a.displayFormType=="documentForm"?(l(),v("div",Aa,[r(n,{itemList:a.documentList,model:a.selectedDocument,title:a.$t("managers.schedulationAgendaManagement.documentTypes.title"),onChanged:e[11]||(e[11]=o=>a.selectedDocumentChanged(o)),onClose:a.closeForm,"data-test":"document-schedulation-form"},null,8,["itemList","model","title","onClose"])])):m("",!0)])]),_:1})],4),t("div",Ca,[r(z,{itemList:a.schedulations},null,8,["itemList"])])])])}var za=D(q,[["render",Da],["__scopeId","data-v-c3aa5ed6"]]);export{za as default};
//# sourceMappingURL=SchedulationAgenda-8ed28d96.js.map
