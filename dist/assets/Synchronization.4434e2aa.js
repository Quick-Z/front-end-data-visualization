import{C as m,b as o,A as u,o as v,e as f,F as M,s as S,v as w,f as e}from"./vendor.87a044ad.js";import{T as t}from"./TileImage.0ebee0ae.js";import{O as B}from"./OSM.7622e957.js";import{B as y}from"./BingMaps.5a522d6d.js";import{V as h,M as n}from"./ol.bb58850a.js";import{_ as g}from"./index.79183bd5.js";import"./XYZ.0d304f3a.js";import"./net.a0d7cd86.js";const i=a=>(S("data-v-1896556f"),a=a(),w(),a),O=i(()=>e("div",{class:"map__container"},[e("div",{id:"OSM",class:"map__x"}),e("div",{id:"BingMaps",class:"map__x"})],-1)),x=i(()=>e("div",{class:"explain"},[e("p",null,"\u4E24\u4E2A\u5730\u56FE\u4F7F\u7528\u540C\u4E00\u4E2Aview\uFF0C\u6240\u4EE5\u5728\u79FB\u52A8\u3001\u7F29\u653E\u3001\u65CB\u8F6C\u7B49\u64CD\u4F5C\u90FD\u662F\u540C\u6B65\u7684\u3002"),e("p",null,"\u6309\u4F4Fshift\uFF0C\u9F20\u6807\u5728\u5730\u56FE\u4E0A\u9009\u533A\uFF0C\u53EF\u4EE5\u653E\u5927\u9009\u533A\u3002"),e("p",null,"\u6309\u4F4Falt+shift\uFF0C\u9F20\u6807\u53EF\u4EE5\u5728\u5730\u56FE\u4E0A\u62D6\u62FD\uFF0C\u8FDB\u884C\u65CB\u8F6C\u3002")],-1)),j={setup(a){const r=m(),p=o(null),c=o(null),s=new h({center:[0,0],zoom:2}),l=new t({source:new B}),_=new t({source:new y({key:"AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-",imagerySet:"Aerial"})});function d(){p.value=new n({target:"OSM",layers:[l],view:s}),c.value=new n({target:"BingMaps",layers:[_],view:s})}return u(()=>{r.commit("setComponentPath","src/views/OpenLayers/Basic/pages/Synchronization/Synchronization.vue"),d()}),(z,b)=>(v(),f(M,null,[O,x],64))}};var F=g(j,[["__scopeId","data-v-1896556f"]]);export{F as default};
