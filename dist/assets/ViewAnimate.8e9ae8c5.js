import{q as e,s as t,B as a,k as n,C as o,b as i,i as s,F as r,o as c}from"./vendor.c4f0aeec.js";import{M as u,V as l,bH as m,e as g}from"./ol.c16104b5.js";import{T as d}from"./TileImage.6d4ae649.js";import{B as v}from"./BingMaps.addd526c.js";e("data-v-7887eb89");const p=s("div",{id:"map",class:"map__x"},null,-1);t();const w={setup(e){const t=a(),w=n(null),f=[-.12755,51.507222],b=[37.6178,55.7517],V=[28.9744,41.0128],C=[12.5,41.9],k=[7.4458,46.95];function M(){let e=w.value.getView().getRotation();w.value.getView().animate({rotation:e+1})}function h(){let e=w.value.getView().getRotation();w.value.getView().animate({rotation:e-1})}function B(){w.value.getView().animate({center:f,duration:2e3})}function P(){w.value.getView().animate({center:b,easing:m})}function I(){w.value.getView().animate({center:V,duration:2e3,easing:R})}function _(){let e=w.value.getView(),t=e.getCenter();e.animate({center:[t[0]+(C[0]-t[0])/2,t[1]+(C[1]-t[1])/2],rotation:Math.PI,easing:g},{center:C,rotation:2*Math.PI,easing:m})}function j(){let e=w.value.getView(),t=e.getRotation();e.animate({rotation:t+Math.PI,anchor:C,easing:g},{rotation:t+2*Math.PI,anchor:C,easing:m})}function x(){let e=w.value.getView(),t=2e3,a=e.getZoom(),n=2,o=!1;function i(e){--n,o||0!==n&&e||(o=!0)}e.animate({center:k,duration:t},i),e.animate({zoom:a-1,duration:1e3},{zoom:a,duration:1e3},i)}function R(e){let t,a=7.5625,n=2.75;return t=e<1/n?a*e*e:e<2/n?a*(e-=1.5/n)*e+.75:e<2.5/n?a*(e-=2.25/n)*e+.9375:a*(e-=2.625/n)*e+.984375,t}return o((()=>{t.commit("setComponentPath","src/views/OpenLayers/Basic/pages/ViewAnimate/ViewAnimate.vue"),w.value=new u({target:"map",layers:[new d({preload:1/0,source:new v({key:"AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-",imagerySet:"Road"})})],view:new l({projection:"EPSG:4326",center:[114.064839,22.548857],zoom:6})})})),(e,t)=>(c(),i(r,null,[p,s("div",{class:"btn__x"},[s("button",{onClick:M},"↻"),s("button",{onClick:h},"↺"),s("button",{onClick:B},"平移到伦敦"),s("button",{onClick:P},"弹性平移到莫斯科"),s("button",{onClick:I},"弹跳平移到伊斯坦布尔"),s("button",{onClick:_},"旋转平移到罗马"),s("button",{onClick:j},"绕着罗马旋转"),s("button",{onClick:x},"飞行到伯尔尼")])],64))},__scopeId:"data-v-7887eb89"};export{w as default};
