import{C as m,b as o,A as u,o as f,e as v,F as M,s as S,v as w,f as e}from"./vendor.ab263734.js";import{T as t}from"./TileImage.2b84d652.js";import{O as B}from"./OSM.bd1bc34c.js";import{B as y}from"./BingMaps.1d49b295.js";import{V as h,M as n}from"./ol.088d4eef.js";import{_ as g}from"./index.ad29fbe7.js";import"./XYZ.d2af7eca.js";import"./net.bced231e.js";const i=s=>(S("data-v-1896556f"),s=s(),w(),s),O=i(()=>e("div",{class:"map__container"},[e("div",{id:"OSM",class:"map__x"}),e("div",{id:"BingMaps",class:"map__x"})],-1)),x=i(()=>e("div",{class:"explain"},[e("p",null,"\u4E24\u4E2A\u5730\u56FE\u4F7F\u7528\u540C\u4E00\u4E2Aview\uFF0C\u6240\u4EE5\u5728\u79FB\u52A8\u3001\u7F29\u653E\u3001\u65CB\u8F6C\u7B49\u64CD\u4F5C\u90FD\u662F\u540C\u6B65\u7684\u3002"),e("p",null,"\u6309\u4F4Fshift\uFF0C\u9F20\u6807\u5728\u5730\u56FE\u4E0A\u9009\u533A\uFF0C\u53EF\u4EE5\u653E\u5927\u9009\u533A\u3002"),e("p",null,"\u6309\u4F4Falt+shift\uFF0C\u9F20\u6807\u53EF\u4EE5\u5728\u5730\u56FE\u4E0A\u62D6\u62FD\uFF0C\u8FDB\u884C\u65CB\u8F6C\u3002")],-1)),b={setup(s){const r=m(),c=o(null),p=o(null),a=new h({center:[0,0],zoom:2}),l=new t({source:new B}),_=new t({source:new y({key:"AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-",imagerySet:"Aerial"})});function d(){c.value=new n({target:"OSM",layers:[l],view:a}),p.value=new n({target:"BingMaps",layers:[_],view:a})}return u(()=>{r.commit("setComponentPath","src/views/OpenLayers/Basic/pages/Synchronization/Synchronization.vue"),d()}),(j,z)=>(f(),v(M,null,[O,x],64))}};var F=g(b,[["__scopeId","data-v-1896556f"]]);export{F as default};
