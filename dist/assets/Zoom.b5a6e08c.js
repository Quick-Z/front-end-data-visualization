import{C as d,b as v,d as f,A as Z,o as w,e as g,f as o,t as n,u as x,F as S,s as b,v as j}from"./vendor.87a044ad.js";import{T as z}from"./TileImage.0ebee0ae.js";import{O as h}from"./OSM.7622e957.js";import{M as I,V as M}from"./ol.bb58850a.js";import{_ as V}from"./index.79183bd5.js";import"./XYZ.0d304f3a.js";const y=s=>(b("data-v-5344a3fe"),s=s(),j(),s),O=y(()=>o("div",{id:"map",class:"map__x"},null,-1)),k={class:"zoom__info"},B={setup(s){const c=d(),t=v(null),m=12,r=10,i=14;function l(){t.value=new I({target:"map",layers:[new z({source:new h})],view:new M({projection:"EPSG:4326",center:[114.064839,22.548857],zoom:m,minZoom:r,maxZoom:i})})}const p=f(()=>t.value?t.value.getView().getZoom():m);function u(){let e=t.value.getView(),a=e.getZoom();e.setZoom(a+1)}function _(){let e=t.value.getView(),a=e.getZoom();e.setZoom(a-1)}return Z(()=>{c.commit("setComponentPath","src/views/OpenLayers/Basic/pages/Zoom/Zoom.vue"),l()}),(e,a)=>(w(),g(S,null,[O,o("div",k,[o("p",null,"\u5F53\u524Dzoom: "+n(x(p)),1),o("p",null,"minZoom: "+n(r)),o("p",null,"maxZoom: "+n(i))]),o("div",null,[o("button",{onClick:u},"\u653E\u5927"),o("button",{onClick:_},"\u7F29\u5C0F")])],64))}};var D=V(B,[["__scopeId","data-v-5344a3fe"]]);export{D as default};
