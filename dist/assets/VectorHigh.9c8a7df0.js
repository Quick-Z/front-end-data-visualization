import{p as e,b as a,C as t,d as o,A as r,f as s,g as n,t as l,F as i,o as u}from"./vendor.02edd428.js";import{b as c,c as f,d as m,L as v,S as d}from"./Vector.d80cd09d.js";import{G as w}from"./GeoJSON.4eb8f900.js";import{C as p}from"./MapOfChina.61651cea.js";import{M as g,V as x}from"./ol.bbcea228.js";import{T as b}from"./Text.3f45d4c4.js";import"./LineString.9ae0adb3.js";import"./MultiPolygon.1b740cf8.js";e("data-v-1fe12542");const j=n("div",{id:"map",class:"map__x"},null,-1);a();const h={setup(e){const a=t(),h=o(null);function P(){let e=new c({fill:new m({color:"rgba(255, 255, 255, 0.6)"}),stroke:new f({color:"#319FD3",width:1}),text:new b({font:"12px Calibri,sans-serif",fill:new m({color:"#000"}),stroke:new f({color:"#fff",width:3})})});h.value=new g({target:"map",layers:[new v({source:new d({features:(new w).readFeatures(p,{dataProjection:"EPSG:4326",featureProjection:"EPSG:4326"})}),style:a=>(e.getText().setText(a.get("name")),e)})],view:new x({projection:"EPSG:4326",center:[104.064839,30.548857],zoom:4})}),h.value.on("pointermove",(e=>{if(e.dragging)return;!function(e){S.value||(S.value=new v({source:new d,map:h.value,style:e=>(C.getText().setText(e.get("name")),C)}));let a=h.value.forEachFeatureAtPixel(e,(e=>e));a?(console.log(a.get("name")),F.value=a.get("name")):F.value="";a!==E.value&&(E.value&&S.value.getSource().removeFeature(E.value),a&&S.value.getSource().addFeature(a),E.value=a)}(h.value.getEventPixel(e.originalEvent))}))}const S=o(null),C=new c({stroke:new f({color:"#f00",width:1}),fill:new m({color:"rgba(255, 0, 0, 0.1)"}),text:new b({font:"12px Calibri, sans-serif",fill:new m({color:"#000"}),stroke:new f({color:"#f00",width:3})})}),E=o(null),F=o("");return r((()=>{a.commit("setComponentPath","src/views/OpenLayers/Basic/pages/VectorHigh/VectorHigh.vue"),P()})),(e,a)=>(u(),s(i,null,[j,n("div",null,l(F.value),1)],64))},__scopeId:"data-v-1fe12542"};export{h as default};
