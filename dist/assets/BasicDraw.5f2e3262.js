import{C as b,b as r,H as g,A as S,o as l,e as n,J as y,L as j,f as p,F as v,g as D,u as B,s as I,v as M,t as L}from"./vendor.ab263734.js";import{T as V}from"./TileImage.2b84d652.js";import{O as h}from"./OSM.bd1bc34c.js";import{S as x,L as P}from"./Vector.796a2063.js";import{D as C}from"./Draw.e7faf820.js";import{M as O,V as k}from"./ol.088d4eef.js";import{_ as N}from"./index.ad29fbe7.js";import"./XYZ.d2af7eca.js";import"./LineString.7dafb842.js";import"./MultiPolygon.77e2e555.js";const T=a=>(I("data-v-72659684"),a=a(),M(),a),E=T(()=>p("div",{id:"map",class:"map__x"},null,-1)),F=["value"],X={setup(a){const d=b(),o=r("Polygon"),m=g([{value:"Point",label:"\u70B9"},{value:"LineString",label:"\u7EBF"},{value:"Polygon",label:"\u591A\u8FB9\u5F62"},{value:"Circle",label:"\u5706"},{value:"None",label:"\u65E0"}]),c=new x({wrapX:!1});let _=new P({source:c});const f=new V({source:new h}),s=r(null);function w(){s.value=new O({target:"map",layers:[f,_],view:new k({projection:"EPSG:4326",center:[113.1206,23.034996],zoom:10})}),i()}const t=r(null);function i(){t.value!=null&&s.value.removeInteraction(t.value),o.value!="None"&&(t.value=new C({source:c,type:o.value}),s.value.addInteraction(t.value))}return S(()=>{d.commit("setComponentPath","src/views/OpenLayers/Basic/pages/BasicDraw/BasicDraw.vue"),w()}),(z,u)=>(l(),n(v,null,[E,y(p("select",{id:"type","onUpdate:modelValue":u[0]||(u[0]=e=>o.value=e),onChange:i},[(l(!0),n(v,null,D(B(m),e=>(l(),n("option",{key:e.value,value:e.value},L(e.label),9,F))),128))],544),[[j,o.value]])],64))}};var R=N(X,[["__scopeId","data-v-72659684"]]);export{R as default};
