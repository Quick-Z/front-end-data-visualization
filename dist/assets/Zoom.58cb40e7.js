import{A as d,b as v,d as f,C as Z,o as w,e as g,f as o,t as n,u as b,F as x,s as S,v as j}from"./vendor.b99b632f.js";import{T as z}from"./TileImage.0ebee0ae.js";import{O as h}from"./OSM.7622e957.js";import{M as I,V as M}from"./ol.bb58850a.js";import{_ as V}from"./index.b0d71010.js";import"./XYZ.0d304f3a.js";const y=s=>(S("data-v-5344a3fe"),s=s(),j(),s),O=y(()=>o("div",{id:"map",class:"map__x"},null,-1)),k={class:"zoom__info"},B={setup(s){const c=d(),t=v(null),m=12,r=10,i=14;function l(){t.value=new I({target:"map",layers:[new z({source:new h})],view:new M({projection:"EPSG:4326",center:[114.064839,22.548857],zoom:m,minZoom:r,maxZoom:i})})}const p=f(()=>t.value?t.value.getView().getZoom():m);function u(){let e=t.value.getView(),a=e.getZoom();e.setZoom(a+1)}function _(){let e=t.value.getView(),a=e.getZoom();e.setZoom(a-1)}return Z(()=>{c.commit("setComponentPath","src/views/OpenLayers/Basic/pages/Zoom/Zoom.vue"),l()}),(e,a)=>(w(),g(x,null,[O,o("div",k,[o("p",null,"\u5F53\u524Dzoom: "+n(b(p)),1),o("p",null,"minZoom: "+n(r)),o("p",null,"maxZoom: "+n(i))]),o("div",null,[o("button",{onClick:u},"\u653E\u5927"),o("button",{onClick:_},"\u7F29\u5C0F")])],64))}};var D=V(B,[["__scopeId","data-v-5344a3fe"]]);export{D as default};