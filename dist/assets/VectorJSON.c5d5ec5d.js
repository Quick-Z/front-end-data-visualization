import{A as r,b as a,C as s,o as c,e as n}from"./vendor.b99b632f.js";import{L as i,S as p}from"./Vector.c1a6c122.js";import{G as m}from"./GeoJSON.bd168292.js";import{C as _}from"./MapOfChina.61651cea.js";import{M as d,V as u}from"./ol.bb58850a.js";import{_ as f}from"./index.b0d71010.js";import"./LineString.191ddcd6.js";import"./MultiPolygon.abfd4d82.js";const l={id:"map",class:"map__x"},S={setup(j){const e=r(),o=a(null);function t(){o.value=new d({target:"map",layers:[new i({source:new p({features:new m().readFeatures(_,{dataProjection:"EPSG:4326",featureProjection:"EPSG:4326"})})})],view:new u({projection:"EPSG:4326",center:[114.064839,22.548857],zoom:3})})}return s(()=>{e.commit("setComponentPath","src/views/OpenLayers/Basic/pages/VectorJSON/VectorJSON.vue"),t()}),(v,V)=>(c(),n("div",l))}};var J=f(S,[["__scopeId","data-v-6269a544"]]);export{J as default};