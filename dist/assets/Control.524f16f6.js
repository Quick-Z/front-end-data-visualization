import{q as o,s as n,B as a,C as e,b as t,o as s,i as c}from"./vendor.1e7a51da.js";o("data-v-25ab9773");const r={class:"map__x"},d=[c("div",{id:"container"},null,-1)];n();const i={setup(o){const n=a();return e((()=>{!function(){const o=new BMapGL.Map("container",{minZoom:11,maxZoom:16,mapType:BMAP_NORMAL_MAP}),n=new BMapGL.Point(116.404,39.915);o.centerAndZoom(n,12),o.enableScrollWheelZoom(!0);const a=new BMapGL.ZoomControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT,offset:new BMapGL.Size(10,10)});o.addControl(a);const e=new BMapGL.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT,offset:new BMapGL.Size(10,10)});o.addControl(e),o.addEventListener("zoomstart",(function(){console.log("zoom缩放前：",o.getZoom())})),o.addEventListener("zoomend",(function(){console.log("zoom缩放后：",o.getZoom())}))}(),n.commit("setComponentPath","src/views/BaiduMap/Basic/pages/Control/Control.vue")})),(o,n)=>(s(),t("div",r,d))},__scopeId:"data-v-25ab9773"};export{i as default};
