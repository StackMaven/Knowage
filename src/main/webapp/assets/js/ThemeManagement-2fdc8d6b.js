import{d as $,M as O,ad as F,l as L,n as X,X as N,q as P,u as H,v as Q,_ as V,r as n,o as d,c,a,f as t,w as o,t as M,B as C,p as j,b as J,g as l,bd as R,s as Y,y as G,h as z,A as u,V as W,z as S,C as I,a3 as Z}from"./index-1e676509.js";import{a as ee,s as te}from"./fieldset.esm-61ec4a9f.js";import{s as oe}from"./inputswitch.esm-80317a38.js";import{K as ae}from"./KnListBox-94855720.js";import{K as re}from"./KnHint-6d455703.js";import"./menu.esm-6bee86d0.js";const ne={active:!1,config:{},themeName:"New Custom Theme"},ie={dataTable:[{category:"Accessories",code:"f230fh0g3",inventoryStatus:"INSTOCK",name:"Bamboo Watch",rating:5},{category:"Accessories",code:"nvklal433",inventoryStatus:"INSTOCK",name:"Black Watch",rating:4},{category:"Fitness",code:"zz21cz3c1",inventoryStatus:"LOWSTOCK",name:"Blue Band",rating:3},{category:"Clothing",code:"244wgerg2",inventoryStatus:"INSTOCK",name:"Blue T-Shirt",rating:5},{category:"Accessories",code:"h456wer53",inventoryStatus:"INSTOCK",name:"Bracelet",rating:4},{category:"Accessories",code:"av2231fwg",inventoryStatus:"OUTOFSTOCK",name:"Brown Purse",rating:4},{category:"Accessories",code:"bib36pfvm",inventoryStatus:"LOWSTOCK",name:"Chakra Bracelet",rating:3},{category:"Accessories",code:"mbvjkgip5",inventoryStatus:"INSTOCK",name:"Galaxy Earrings",rating:5},{category:"Electronics",code:"vbb124btr",inventoryStatus:"LOWSTOCK",name:"Game Controller",rating:4},{category:"Electronics",code:"cm230f032",inventoryStatus:"INSTOCK",name:"Gaming Set",rating:3}],input:{disabled:"disabled",invalid:"invalid",number:10,text:"text"}},de={badgeIcon:"active",badgeSeverity:"success",buttons:[{emits:"delete",icon:"far fa-trash-alt",label:"common.delete"}],defaultSortField:"id",filterFields:["themeName"],interaction:{parameterLabel:"id",parameterValue:"id",type:"event"},selectProperty:"id",textField:!1,titleField:"themeName"};var B={emptyTheme:ne,examples:ie,knListSettings:de};const le=$({name:"theme-management-examples",components:{Button:O,Card:F,Column:L,DataTable:X,FabButton:N,Message:P,TabPanel:H,TabView:Q},props:{properties:Object},data(){return{examples:B.examples}},mounted(){this.updateStyle(this.properties)},updated(){this.updateStyle(this.properties)},methods:{updateStyle(e){for(let r in e)this.$refs.example.style.setProperty(r,e[r])}}}),f=e=>(j("data-v-4e9fd96b"),e=e(),J(),e),se={class:"kn-page-content p-m-0 p-p-4",ref:"example",id:"example"},ce={class:"p-fluid p-m-5 p-grid"},be={class:"p-field p-col-3 p-md-4"},pe={class:"p-float-label"},ke=f(()=>a("label",{for:"exampleTextInput",class:"kn-material-input-label"}," Example Text Input ",-1)),me={class:"p-field p-col-3 p-md-4"},ue={class:"p-float-label"},fe=f(()=>a("label",{for:"exampleTextInputDisabled",class:"kn-material-input-label"}," Example Text Input disabled",-1)),ge={class:"p-field p-col-3 p-md-4"},ve={class:"p-float-label"},he=f(()=>a("label",{for:"exampleTextInputInvalid",class:"kn-material-input-label"}," Example Text Input invalid",-1)),xe={class:"p-field p-col-3 p-md-4"},we={class:"p-float-label"},ye=f(()=>a("label",{for:"exampleNumberInput",class:"kn-material-input-label"}," Example Number Input ",-1)),Me=l(" Example Primary toolbar "),_e=l(" Example Secondary toolbar "),Te=l("Primary"),Ae=l("Secondary"),Ce=l("Default"),Ee=l("disabled"),ze=l("Warning"),Se=l("Flat"),Ie=l("Flat disabled"),$e=l("Success Message Content"),Ne=l("Info Message Content"),Ve=l("Warning Message Content"),Be=l("Error Message Content"),Ue=f(()=>a("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)),qe=f(()=>a("p",null," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1)),De=f(()=>a("p",null," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1)),Ke={key:0,class:"fas fa-times-circle"},Oe={key:1,class:"fas fa-check-circle"},Fe={class:"hiddenProperties"};function Le(e,r,h,U,q,D){const g=n("InputText"),p=n("Card"),i=n("Button"),T=n("FabButton"),_=n("Toolbar"),v=n("Message"),x=n("TabPanel"),w=n("TabView"),m=n("Column"),A=n("DataTable");return d(),c(C,null,[a("div",se,[t(p,{class:"p-mt-4"},{content:o(()=>[a("form",ce,[a("div",be,[a("span",pe,[t(g,{id:"exampleTextInput",class:"kn-material-input",type:"text",modelValue:e.examples.input.text,"onUpdate:modelValue":r[0]||(r[0]=b=>e.examples.input.text=b)},null,8,["modelValue"]),ke])]),a("div",me,[a("span",ue,[t(g,{id:"exampleTextInputDisabled",class:"kn-material-input",type:"text",disabled:"",modelValue:e.examples.input.disabled,"onUpdate:modelValue":r[1]||(r[1]=b=>e.examples.input.disabled=b)},null,8,["modelValue"]),fe])]),a("div",ge,[a("span",ve,[t(g,{id:"exampleTextInputInvalid",class:"kn-material-input p-invalid",type:"text",modelValue:e.examples.input.invalid,"onUpdate:modelValue":r[2]||(r[2]=b=>e.examples.input.invalid=b)},null,8,["modelValue"]),he])]),a("div",xe,[a("span",we,[t(g,{id:"exampleNumberInput",class:"kn-material-input",type:"number",modelValue:e.examples.input.number,"onUpdate:modelValue":r[3]||(r[3]=b=>e.examples.input.number=b)},null,8,["modelValue"]),ye])])])]),_:1}),t(_,{class:"kn-toolbar kn-toolbar--primary p-mt-4"},{start:o(()=>[Me]),end:o(()=>[t(i,{icon:"fas fa-bookmark",class:"p-button-text p-button-rounded p-button-plain"}),t(i,{icon:"pi pi-briefcase",class:"p-button-text p-button-rounded p-button-plain"}),t(i,{icon:"fas fa-box",class:"p-button-text p-button-rounded p-button-plain",disabled:""}),t(T,{icon:"fas fa-plus",style:{"z-index":"10"}})]),_:1}),t(_,{class:"kn-toolbar kn-toolbar--secondary p-mt-4"},{start:o(()=>[_e]),end:o(()=>[t(i,{icon:"fas fa-bookmark",class:"p-button-text p-button-rounded p-button-plain"}),t(i,{icon:"pi pi-briefcase",class:"p-button-text p-button-rounded p-button-plain"}),t(i,{icon:"fas fa-box",class:"p-button-text p-button-rounded p-button-plain",disabled:""})]),_:1}),t(p,{class:"p-mt-4"},{content:o(()=>[t(i,{class:"p-m-2 kn-button--primary"},{default:o(()=>[Te]),_:1}),t(i,{class:"p-m-2 kn-button--secondary"},{default:o(()=>[Ae]),_:1}),t(i,{class:"p-m-2 kn-button"},{default:o(()=>[Ce]),_:1}),t(i,{class:"p-m-2 kn-button--primary",disabled:""},{default:o(()=>[Ee]),_:1}),t(i,{class:"p-m-2 kn-button--warning"},{default:o(()=>[ze]),_:1}),t(i,{class:"p-m-2 p-button-text kn-button--primary"},{default:o(()=>[Se]),_:1}),t(i,{class:"p-m-2 p-button-text kn-button--primary",disabled:""},{default:o(()=>[Ie]),_:1})]),_:1}),t(p,{class:"p-mt-4"},{content:o(()=>[t(v,{severity:"success"},{default:o(()=>[$e]),_:1}),t(v,{severity:"info"},{default:o(()=>[Ne]),_:1}),t(v,{severity:"warn"},{default:o(()=>[Ve]),_:1}),t(v,{severity:"error"},{default:o(()=>[Be]),_:1})]),_:1}),t(p,{class:"p-mt-4"},{content:o(()=>[t(w,{class:"kn-tab"},{default:o(()=>[t(x,{header:"Header I"},{default:o(()=>[Ue]),_:1}),t(x,{header:"Header II"},{default:o(()=>[qe]),_:1}),t(x,{header:"Header III"},{default:o(()=>[De]),_:1})]),_:1})]),_:1}),t(p,{class:"p-mt-4"},{content:o(()=>[t(A,{class:"kn-table",value:e.examples.dataTable,responsiveLayout:"scroll",paginator:!0,rows:5},{default:o(()=>[t(m,{field:"code",header:"Code",sortable:!0}),t(m,{field:"name",header:"Name",sortable:!0}),t(m,{field:"category",header:"Category",sortable:!0}),t(m,{field:"rating",header:"Icon",sortable:!0},{body:o(b=>[b.data.rating<4?(d(),c("i",Ke)):(d(),c("i",Oe))]),_:1}),t(m,{style:{padding:"0","text-align":"end"}},{body:o(()=>[t(i,{icon:"fas fa-play-circle",class:"p-button-text p-button-rounded p-button-plain p-button-link"}),t(i,{icon:"fas fa-ellipsis-v",class:"p-button-text p-button-rounded p-button-plain p-button-link"})]),_:1})]),_:1},8,["value"])]),_:1})],512),a("div",Fe,M(e.properties),1)],64)}var Xe=V(le,[["render",Le],["__scopeId","data-v-4e9fd96b"]]);const Pe=$({name:"theme-management",components:{Divider:ee,FabButton:N,Fieldset:te,InputSwitch:oe,KnHint:re,KnListBox:ae,ThemeManagementExamples:Xe},data(){return{descriptor:B,currentTheme:{},selectedTheme:{config:{}},themeToSend:{config:{}},availableThemes:[],loading:!1,themeHelper:new R}},setup(){return{store:Y()}},mounted(){this.loading=!0,this.currentTheme=this.themeHelper.getDefaultKnowageTheme(),this.getAllThemes()},methods:{addTheme(){this.themeToSend={...this.descriptor.emptyTheme},this.overrideDefaultValues(this.descriptor.emptyTheme)},deleteThemeConfirm(e){this.$confirm.require({message:this.$t("common.toast.deleteMessage"),header:this.$t("common.toast.deleteTitle"),icon:"pi pi-exclamation-triangle",accept:()=>this.deleteTheme(e)})},async deleteTheme(e){this.loading=!0,await this.$http.delete(`/knowage/restful-services/thememanagement/${e.item.id}`).then(()=>{this.store.setInfo({title:this.$t("common.toast.deleteTitle"),msg:this.$t("common.toast.deleteSuccess")}),this.themeToSend={config:{}},this.selectedTheme={config:{}},this.getAllThemes()}),this.loading=!1},async getAllThemes(e=!0){this.loading=!0,await this.$http.get("/knowage/restful-services/thememanagement").then(r=>{this.availableThemes=r.data,e&&this.overrideDefaultValues(this.availableThemes.filter(h=>h.active===!0)[0]),this.availableThemes.filter(h=>h.active===!0).length==0&&(this.setActiveTheme({}),this.themeToSend={config:{}},this.selectedTheme={config:{}})}),this.loading=!1},async handleSave(){await this.$http.post("/knowage/restful-services/thememanagement",this.themeToSend).then(e=>{this.store.setInfo({title:this.$t("common.toast.updateTitle"),msg:this.$t("common.toast.updateSuccess")}),this.themeToSend.id||(this.themeToSend.id=e.data,this.selectedTheme.id=e.data)}),await this.getAllThemes(!1),this.themeToSend.active&&this.setActiveTheme(this.themeToSend),this.loading=!1},overrideDefaultValues(e){e?(this.themeToSend={...e},this.selectedTheme.id=e.id,this.selectedTheme.themeName=e.themeName,this.selectedTheme.active=e.active,this.selectedTheme.config={...this.currentTheme,...e.config}):(this.store.setTheme({}),this.themeHelper.setTheme(this.store.$state.defaultTheme))},selectTheme(e){this.overrideDefaultValues(e.item)},setActiveTheme(e){let r={...this.store.$state.defaultTheme,...e.config};this.store.setTheme(r),this.themeHelper.setTheme(r)},updateModelToSend(e){this.themeToSend.config[e]=this.selectedTheme.config[e]}},watch:{selectedTheme(e,r){e!=r&&(this.selectedTheme={...this.store.$state.defaultTheme,...e.config})}}}),He={class:"p-grid p-m-0 kn-theme-management"},Qe={class:"kn-list--column kn-page p-col-2 p-sm-2 p-md-3 p-p-0"},je={key:0,class:"p-col p-p-0 p-m-0 kn-page"},Je={key:1,class:"p-col p-p-0 p-m-0 kn-page"},Re={key:2,class:"kn-list--column kn-page p-col-2 p-sm-2 p-md-3 p-p-0"},Ye={class:"p-p-2 p-mt-2 p-d-flex p-ai-center"},Ge={class:"p-float-label kn-flex"},We=a("label",{for:"themeName",class:"kn-material-input-label"}," Theme name ",-1),Ze={key:0,class:"p-p-2 kn-page-content"},et={class:"p-field"},tt={key:0,class:"p-float-label"},ot={for:"exampleTextInput",class:"kn-material-input-label"},at={key:1,class:"p-float-label"},rt=["onUpdate:modelValue","onChange"],nt={for:"exampleTextInput",class:"kn-material-input-label"};function it(e,r,h,U,q,D){const g=n("FabButton"),p=n("Toolbar"),i=n("ProgressBar"),T=n("KnListBox"),_=n("KnHint"),v=n("ThemeManagementExamples"),x=n("Button"),w=n("InputText"),m=n("InputSwitch"),A=n("Divider"),b=n("Fieldset"),K=G("tooltip");return d(),c("div",He,[a("div",Qe,[t(p,{class:"kn-toolbar kn-toolbar--primary"},{start:o(()=>[l(M(e.$t("managers.themeManagement.title")),1)]),end:o(()=>[t(g,{icon:"fas fa-plus",onClick:e.addTheme},null,8,["onClick"])]),_:1}),e.loading?(d(),z(i,{key:0,mode:"indeterminate",class:"kn-progress-bar"})):u("",!0),t(T,{options:e.availableThemes,selected:e.selectedTheme,settings:e.descriptor.knListSettings,onClick:e.selectTheme,onDelete:W(e.deleteThemeConfirm,["stop"])},null,8,["options","selected","settings","onClick","onDelete"])]),e.selectedTheme.themeName?u("",!0):(d(),c("div",je,[t(_,{title:e.$t("managers.themeManagement.title"),hint:e.$t("managers.themeManagement.hint")},null,8,["title","hint"])])),e.selectedTheme.themeName?(d(),c("div",Je,[t(v,{properties:e.selectedTheme.config},null,8,["properties"])])):u("",!0),e.selectedTheme.themeName?(d(),c("div",Re,[t(p,{class:"kn-toolbar kn-toolbar--secondary"},{start:o(()=>[l(M(e.themeToSend.themeName),1)]),end:o(()=>[t(x,{icon:"pi pi-save",class:"p-button-text p-button-rounded p-button-plain",onClick:e.handleSave},null,8,["onClick"])]),_:1}),a("div",Ye,[a("span",Ge,[t(w,{id:"themeName",class:"kn-material-input",type:"text",modelValue:e.themeToSend.themeName,"onUpdate:modelValue":r[0]||(r[0]=y=>e.themeToSend.themeName=y)},null,8,["modelValue"]),We]),S(t(m,{modelValue:e.themeToSend.active,"onUpdate:modelValue":r[1]||(r[1]=y=>e.themeToSend.active=y)},null,8,["modelValue"]),[[K,"active"]])]),t(A,{class:"p-my-2"}),e.selectedTheme.themeName?(d(),c("div",Ze,[a("div",null,[(d(!0),c(C,null,I(e.themeHelper.descriptor,(y,E)=>(d(),z(b,{key:E,legend:E,toggleable:!0,collapsed:!0},{default:o(()=>[(d(!0),c(C,null,I(y.properties,s=>(d(),c("div",{key:s.key},[a("div",et,[s.type==="text"?(d(),c("span",tt,[t(w,{id:"exampleTextInput",class:"kn-material-input p-inputtext-sm",type:"text",onChange:k=>e.updateModelToSend(s.key),modelValue:e.selectedTheme.config[s.key],"onUpdate:modelValue":k=>e.selectedTheme.config[s.key]=k},null,8,["onChange","modelValue","onUpdate:modelValue"]),a("label",ot,M(s.label),1)])):u("",!0),s.type==="color"?(d(),c("span",at,[t(w,{id:"exampleTextInput",class:"kn-material-input p-inputtext-sm",type:"text",modelValue:e.selectedTheme.config[s.key],"onUpdate:modelValue":k=>e.selectedTheme.config[s.key]=k,onChange:k=>e.updateModelToSend(s.key)},null,8,["modelValue","onUpdate:modelValue","onChange"]),S(a("input",{type:"color","onUpdate:modelValue":k=>e.selectedTheme.config[s.key]=k,onChange:k=>e.updateModelToSend(s.key)},null,40,rt),[[Z,e.selectedTheme.config[s.key]]]),a("label",nt,M(s.label),1)])):u("",!0)])]))),128))]),_:2},1032,["legend"]))),128))])])):u("",!0)])):u("",!0)])}var kt=V(Pe,[["render",it]]);export{kt as default};
//# sourceMappingURL=ThemeManagement-2fdc8d6b.js.map
