import{p as e,b as A,C as a,d as s,A as o,f as l,J as n,O as r,g as t,F as i,o as c}from"./vendor.02edd428.js";import{T as m}from"./TileImage.6719d572.js";import{T as p}from"./TileJSON.ad28b714.js";import{bb as u,M as U,V as g}from"./ol.bbcea228.js";import{a as N,b as I,I as k,S as M,L as Q}from"./Vector.d80cd09d.js";import{O as T}from"./Overlay.0513226a.js";import"./net.5778e213.js";e("data-v-119ab039");const b=t("div",{id:"map",class:"map__x"},null,-1);A();const v={setup(e){const A=a(),v=s(null),V=new m({source:new p({url:"https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q",crossOrigin:""})});let f=new N({geometry:new u([0,0]),name:"你点我了",population:4e3,rainfall:500}),w=new I({image:new k({anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",src:"data:image/png;base64,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"})});f.setStyle(w);let E=new M({features:[f]}),j=new Q({source:E});const S=s(!1),y=s(null),D=s(null);return o((()=>{A.commit("setComponentPath","src/views/OpenLayers/Basic/pages/SimplenessLabel/SimplenessLabel.vue"),v.value=new U({target:"map",layers:[V,j],view:new g({center:[0,0],zoom:3})}),v.value.on("singleclick",(e=>{let A=y.value;D.value=new T({element:A,positioning:"bottom-center",stopEvent:!1,offset:[0,-50]}),v.value.addOverlay(D.value);let a=v.value.forEachFeatureAtPixel(e.pixel,(e=>e));if(a){S.value=!0,A.innerHTML=a.values_.name;let e=a.getGeometry().getCoordinates();setTimeout((()=>{D.value.setPosition(e)}),0)}else S.value=!1}))})),(e,A)=>(c(),l(i,null,[b,n(t("div",{ref:(e,A)=>{A.popupCom=e,y.value=e},class:"popup"},null,512),[[r,S.value]])],64))},__scopeId:"data-v-119ab039"};export{v as default};
