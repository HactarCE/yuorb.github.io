import{h as p,i as v,j as c,s as n,k as f,l as g,m,p as a,q as y,_ as w}from"./app-310ea7eb.js";const R=e=>JSON.parse(decodeURIComponent(e));var h=p({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const i=v(),o=c(!0),t=n(),l=n(),s=f(()=>g({},i,R(e.settings))),u=async()=>{const{ReplStore:r,Repl:d}=await w(()=>import("./vue-repl-559586d9.js"),["assets/vue-repl-559586d9.js","assets/app-310ea7eb.js","assets/commonjs-dynamic-modules-302442b1.js","assets/commonjsHelpers-87174ba5.js"]);t.value=d,l.value=new r({serializedState:decodeURIComponent(e.files)}),s.value.vueVersion&&await l.value.setVueVersion(s.value.vueVersion)};return m(async()=>{await u(),o.value=!1}),()=>[a("div",{class:"vue-playground-wrapper"},[e.title?a("div",{class:"header"},decodeURIComponent(e.title)):null,a("div",{class:"repl-container"},[o.value?a(y,{class:"preview-loading",height:192}):null,t.value?a(t.value,{store:l.value,autoResize:!0,...s.value,layout:"horizontal"}):null])])]}});export{h as default};
