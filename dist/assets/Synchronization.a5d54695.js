import{p as s,b as a,C as e,d as n,A as i,f as t,o,F as r,g as l}from"./vendor.8623c498.js";import{T as p}from"./TileImage.6719d572.js";import{O as c}from"./OSM.b07225a9.js";import{B as m}from"./BingMaps.f431ad9d.js";import{V as d,M as u}from"./ol.bbcea228.js";import"./XYZ.4ee3e030.js";import"./net.5778e213.js";s("data-v-1896556f");const v=l("div",{class:"map__container"},[l("div",{id:"OSM",class:"map__x"}),l("div",{id:"BingMaps",class:"map__x"})],-1),f=l("div",{class:"explain"},[l("p",null,"两个地图使用同一个view，所以在移动、缩放、旋转等操作都是同步的。"),l("p",null,"按住shift，鼠标在地图上选区，可以放大选区。"),l("p",null,"按住alt+shift，鼠标可以在地图上拖拽，进行旋转。")],-1);a();const w={setup(s){const a=e(),l=n(null),w=n(null),M=new d({center:[0,0],zoom:2}),g=new p({source:new c}),B=new p({source:new m({key:"AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-",imagerySet:"Aerial"})});return i((()=>{a.commit("setComponentPath","src/views/OpenLayers/Basic/pages/Synchronization/Synchronization.vue"),l.value=new u({target:"OSM",layers:[g],view:M}),w.value=new u({target:"BingMaps",layers:[B],view:M})})),(s,a)=>(o(),t(r,null,[v,f],64))},__scopeId:"data-v-1896556f"};export{w as default};
