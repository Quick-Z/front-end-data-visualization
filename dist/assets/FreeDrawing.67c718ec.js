import{C as v,b as w,A as h,r as g,o,e as m,f as i,c as _,w as r,l as d,a as b,s as D,v as k,k as c}from"./vendor.87a044ad.js";import{f as l}from"./fabric.f33bdb2a.js";import{_ as x}from"./index.79183bd5.js";const C=t=>(D("data-v-7861e7fc"),t=t(),k(),t),y={class:"box"},B=C(()=>i("canvas",{id:"canvas",width:"600",height:"600",style:{border:"1px solid #ccc"}},null,-1)),S={class:"tools__x"},F=c("\u7ED8\u56FE\u6A21\u5F0F"),I=c("\u6846\u9009\u6A21\u5F0F"),N=c("\u6E05\u7A7A\u753B\u5E03"),V={setup(t){const u=v();let e=null;const a=w(!0);function f(){e=new l.fabric.Canvas("canvas",{isDrawingMode:a.value}),e.freeDrawingBrush.color="#11999e",e.freeDrawingBrush.width=10,e.freeDrawingBrush.shadow=new l.fabric.Shadow({blur:10,offsetX:10,offsetY:10,affectStroke:!0,color:"#30e3ca"})}function n(){a.value=!a.value,e.isDrawingMode=a.value}function p(){e.clear()}return h(()=>{u.commit("setComponentPath","src/views/FabricJS/Basic/pages/FreeDrawing/FreeDrawing.vue"),f()}),(j,M)=>{const s=g("el-button");return o(),m("div",y,[B,i("div",S,[a.value?d("",!0):(o(),_(s,{key:0,type:"primary",onClick:n},{default:r(()=>[F]),_:1})),a.value?(o(),_(s,{key:1,type:"success",onClick:n},{default:r(()=>[I]),_:1})):d("",!0),b(s,{type:"danger",onClick:p},{default:r(()=>[N]),_:1})])])}}};var P=x(V,[["__scopeId","data-v-7861e7fc"]]);export{P as default};
