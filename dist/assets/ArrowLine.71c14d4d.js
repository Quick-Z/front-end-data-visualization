import{C as _,b as d,A as g,o as D,e as z}from"./vendor.ab263734.js";import{T as P}from"./TileImage.2b84d652.js";import{O as y}from"./OSM.bd1bc34c.js";import{S as b,L as v,b as c,c as j,I as L}from"./Vector.796a2063.js";import{D as S}from"./Draw.e7faf820.js";import{bc as T,M,V}from"./ol.088d4eef.js";import{_ as h}from"./index.5de4ac7a.js";import"./XYZ.d2af7eca.js";import"./LineString.7dafb842.js";import"./MultiPolygon.77e2e555.js";var B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAMAAACTKxybAAAAQlBMVEUAAAD/zDP/zDP/yzT/zDP/zDP/zDP/zTL/zTL/zjH/zDP/zDP/yzT/zDP/zDP/zDP/zDP/zDP/yTb/0i3/zDP/zDOmcHYSAAAAFXRSTlMABa8N1NvFRBwX9s7LtamkoJsTEb4ouja1AAAAT0lEQVQI12XPWxKAIAgFUCrL3uWD/W9V/MArI39nGOBC5J+FtPzJW9PMDE1Vd+p1RdUrcofq60W/aN1VwciJ8tjBDLbZO0hgsyH1+I/5tADT2QXY/bIQKgAAAABJRU5ErkJggg==";const I={id:"map",class:"map__x"},x={setup(E){const i=_();function A(r){let a=r.getGeometry(),s=[new c({stroke:new j({color:"#ffcc33",width:2})})];return a.forEachSegment((n,e)=>{let w=e[0]-n[0],u=e[1]-n[1],f=Math.atan2(u,w);s.push(new c({geometry:new T(e),image:new L({src:B,anchor:[.75,.5],rotateWithView:!0,rotation:-f})}))}),s}const m=new P({source:new y}),t=new b({wrapX:!1}),p=new v({source:t,style:A}),o=d(null);function l(){o.value=new M({target:"map",layers:[m,p],view:new V({projection:"EPSG:4326",center:[115.543045,45.16871],zoom:10})}),o.value.addInteraction(new S({source:t,type:"LineString"}))}return g(()=>{i.commit("setComponentPath","src/views/OpenLayers/Basic/pages/ArrowLine/ArrowLine.vue"),l()}),(r,a)=>(D(),z("div",I))}};var G=h(x,[["__scopeId","data-v-7f6fb646"]]);export{G as default};
