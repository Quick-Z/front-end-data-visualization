import{p as e,b as a,A as o,d as r,C as t,f as s,o as n}from"./vendor.ab550d3c.js";import{T as i}from"./TileImage.6719d572.js";import{O as c}from"./OSM.b07225a9.js";import{M as l,V as p}from"./ol.bbcea228.js";import"./XYZ.4ee3e030.js";e("data-v-a0e1edec");const v={id:"map",class:"map__x"};a();const m={setup(e){const a=o(),m=r(null);return t((()=>{a.commit("setComponentPath","src/views/OpenLayers/Basic/pages/CoverageModal/CoverageModal.vue"),function(){let e=new i({preload:1/0,source:new c});m.value=new l({target:"map",layers:[e],view:new p({projection:"EPSG:4326",center:[114.064839,22.548857],zoom:12})}),e.on("postrender",(e=>{var a=e.context;a.save();var o=e.frameState.pixelRatio,r=m.value.getSize();a.translate(r[0]/2*o,r[1]/2*o),a.scale(3*o,3*o),a.translate(-75,-80),a.beginPath(),a.moveTo(75,40),a.bezierCurveTo(75,37,70,25,50,25),a.bezierCurveTo(20,25,20,62.5,20,62.5),a.bezierCurveTo(20,80,40,102,75,120),a.bezierCurveTo(110,102,130,80,130,62.5),a.bezierCurveTo(130,62.5,130,25,100,25),a.bezierCurveTo(85,25,75,37,75,40),a.clip(),a.translate(75,80),a.scale(1/3/o,1/3/o),a.translate(-r[0]/2*o,-r[1]/2*o)})),e.on("rendercomplete",(function(e){e.context.restore()}))}()})),(e,a)=>(n(),s("div",v))},__scopeId:"data-v-a0e1edec"};export{m as default};