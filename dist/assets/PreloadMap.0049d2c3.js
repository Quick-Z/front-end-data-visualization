import{C as d,b as t,A as _,o as m,e as u,F as M,s as v,v as f,f as e}from"./vendor.87a044ad.js";import{T as r}from"./TileImage.0ebee0ae.js";import{B as p}from"./BingMaps.5a522d6d.js";import{V as w,M as n}from"./ol.bb58850a.js";import{_ as B}from"./index.79183bd5.js";import"./net.a0d7cd86.js";const s=a=>(v("data-v-5ab032c9"),a=a(),f(),a),x=s(()=>e("div",{id:"map1",class:"map__x"},null,-1)),y=s(()=>e("div",{id:"map2",class:"map__x"},null,-1)),S=s(()=>e("div",{class:"explain"},[e("p",null,"\u9884\u52A0\u8F7D\uFF1Apreload: Infinity"),e("p",null,"\u9ED8\u8BA4\u503C\uFF1Apreload: 0")],-1)),g={setup(a){const l=d(),i=t(null);t(null);const o=new w({projection:"EPSG:4326",center:[114.064839,22.548857],zoom:10});function c(){i.value=new n({target:"map1",layers:[new r({preload:1/0,source:new p({key:"AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-",imagerySet:"Aerial"})})],view:o}),map2.value=new n({target:"map2",layers:[new r({preload:0,source:new p({key:"AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-",imagerySet:"Aerial"})})],view:o})}return _(()=>{l.commit("setComponentPath","src/views/OpenLayers/Basic/pages/PreloadMap/PreloadMap.vue"),c()}),(U,P)=>(m(),u(M,null,[x,y,S],64))}};var k=B(g,[["__scopeId","data-v-5ab032c9"]]);export{k as default};
