import{p as a,b as e,B as l,m as s,H as t,d as o,e as r,J as n,L as u,f as c,F as i,j as v,v as m,o as p,t as d}from"./vendor.c69a3b38.js";import{T as b}from"./TileImage.6719d572.js";import{O as w}from"./OSM.b07225a9.js";import{S as f,L as g}from"./Vector.d80cd09d.js";import{D as h,c as j,a as M}from"./Draw.12b5e8b7.js";import{M as y,V as S,ba as x}from"./ol.bbcea228.js";import"./XYZ.4ee3e030.js";import"./LineString.9ae0adb3.js";import"./MultiPolygon.1b740cf8.js";a("data-v-0ba3cc5a");const C=c("div",{id:"map",class:"map__x"},null,-1),I=["value"];e();const D={setup(a){const e=l(),D=s("Hexagram"),H=t([{value:"Circle",label:"圆"},{value:"Square",label:"方形"},{value:"Rectangle",label:"矩形"},{value:"Hexagram",label:"六芒星"},{value:"None",label:"无"}]),L=s(null),P=new b({source:new w}),_=new f({wrapX:!1}),q=new g({source:_});const G=s(null);function O(){if(null!==G.value&&L.value.removeInteraction(G.value),"None"!==D.value){let a,e="Circle";"Square"===D.value?a=j(4):"Rectangle"===D.value?a=M():"Hexagram"===D.value&&(a=function(a,e){for(var l=a[0],s=a[1],t=l[0]-s[0],o=l[1]-s[1],r=Math.sqrt(t*t+o*o),n=Math.atan2(o,t),u=[],c=0;c<12;++c){var i=n+2*c*Math.PI/12,v=c%2==0?1:.58,m=r*v*Math.cos(i),p=r*v*Math.sin(i);u.push([l[0]+m,l[1]+p])}return u.push(u[0].slice()),e?e.setCoordinates([u]):e=new x([u]),e}),G.value=new h({source:_,type:e,geometryFunction:a}),L.value.addInteraction(G.value)}}return o((()=>{e.commit("setComponentPath","src/views/OpenLayers/Basic/pages/DrawGraph/DrawGraph.vue"),L.value=new y({target:"map",layers:[P,q],view:new S({projection:"EPSG:4326",center:[113.1206,23.034996],zoom:10})}),O()})),(a,e)=>(p(),r(i,null,[C,n(c("select",{id:"type","onUpdate:modelValue":e[0]||(e[0]=a=>D.value=a),onChange:O},[(p(!0),r(i,null,v(m(H),(a=>(p(),r("option",{key:a.value,value:a.value},d(a.label),9,I)))),128))],544),[[u,D.value]])],64))},__scopeId:"data-v-0ba3cc5a"};export{D as default};
