import{C as p,A as d,o as u,e as _,s as m,v as y,f as v}from"./vendor.87a044ad.js";import{_ as C}from"./index.79183bd5.js";const g=n=>(m("data-v-6daec6c8"),n=n(),y(),n),h={class:"map__x"},f=g(()=>v("div",{id:"map_container"},null,-1)),B=[f],L={setup(n){const o=p();function i(){const e=mapv.utilCityCenter.getCenterByCityName("\u4E0A\u6D77");return initMap({tilt:60,center:[e.lng,e.lat],zoom:6,style:purpleStyle})}function r(){let e=[];const t=new mapvgl.BezierCurve;let s=mapv.utilCityCenter.getCenterByCityName("\u4E0A\u6D77"),a=mapv.utilCityCenter.getCenterByCityName("\u5317\u4EAC");t.setOptions({start:[s.lng,s.lat],end:[a.lng,a.lat]});let l=t.getPoints();return e.push({geometry:{type:"LineString",coordinates:l}}),e}function c(e,t){const s=new mapvgl.View({map:e}),a=new mapvgl.FlyLineLayer({style:"chaos",color:"rgba(33, 242, 214, 0.3)",step:.3,textureColor:"blue",textureWidth:20,textureLength:10});s.addLayer(a),a.setData(t)}return d(()=>{const e=i(),t=r();c(e,t),o.commit("setComponentPath","src/views/BaiduMap/Basic/pages/FlyLine/FlyLine.vue")}),(e,t)=>(u(),_("div",h,B))}};var S=C(L,[["__scopeId","data-v-6daec6c8"]]);export{S as default};
