import{p as s,b as e,A as a,d as o,C as t,f as n,o as i,F as r,g as m}from"./vendor.ab550d3c.js";import{T as l}from"./TileImage.6719d572.js";import{M as p,V as u}from"./ol.bbcea228.js";import{O as c}from"./OSM.b07225a9.js";import{T as d}from"./TileJSON.ad28b714.js";import"./XYZ.4ee3e030.js";import"./net.5778e213.js";s("data-v-31da17d0");const b=m("div",{id:"map",class:"map__x"},null,-1),v=m("div",{class:"explain"},[m("p",null,"在限制的范围之内时显示图层，在限制的范围之外时不显示图层"),m("p",null,"只有当指定图层在 minResolution 和 maxResolution 范围内，才显示。")],-1);e();const j={setup(s){const e=a(),m=o(null);return t((()=>{e.commit("setComponentPath","src/views/OpenLayers/Basic/pages/SetResolution/SetResolution.vue"),m.value=new p({target:"map",layers:[new l({source:new c}),new l({source:new d({url:"https://api.tiles.mapbox.com/v4/mapbox.natural-earth-hypso-bathy.json?secure&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q",crossOrigin:"anonymous"}),minResolution:2e3,maxResolution:2e4})],view:new u({center:[653600,5723680],zoom:5})})})),(s,e)=>(i(),n(r,null,[b,v],64))},__scopeId:"data-v-31da17d0"};export{j as default};
