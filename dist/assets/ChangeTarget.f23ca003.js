import{p as a,b as e,C as s,d as t,A as o,f as n,g as m,F as r,o as c}from"./vendor.8623c498.js";import{T as p}from"./TileImage.6719d572.js";import{O as i}from"./OSM.b07225a9.js";import{M as l,V as u}from"./ol.bbcea228.js";import"./XYZ.4ee3e030.js";a("data-v-7685ecf5");const v=m("div",{class:"map__container"},[m("div",{id:"map1",class:"map__x"}),m("div",{id:"map2",class:"map__x"})],-1);e();const d={setup(a){const e=s(),d=t(null);function g(){let a="map1"===d.value.getTarget()?"map2":"map1";d.value.setTarget(a)}return o((()=>{e.commit("setComponentPath","src/views/OpenLayers/Basic/pages/ChangeTarget/ChangeTarget.vue"),d.value=new l({layers:[new p({source:new i})],view:new u({projection:"EPSG:4326",center:[114.064839,22.548857],minZoom:10,zoom:12})}),d.value.setTarget("map1")})),(a,e)=>(c(),n(r,null,[v,m("button",{class:"btn",onClick:g},"change")],64))},__scopeId:"data-v-7685ecf5"};export{d as default};
