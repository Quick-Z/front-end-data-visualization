import{q as a,s as e,B as n,C as t,b as o,o as i,i as s}from"./vendor.c4f0aeec.js";a("data-v-108ebdb4");const c={class:"map__x"},p=[s("div",{id:"container"},null,-1)];e();const r={setup(a){const e=n();return t((()=>{!function(){const a=new BMapGL.Map("container"),e=new BMapGL.Point(116.2967611,40.047363);a.centerAndZoom(e,15),a.enableScrollWheelZoom(!0),a.setHeading(0);let n=[new BMapGL.Point(116.418038,39.91979),new BMapGL.Point(116.418267,40.0592479),new BMapGL.Point(116.307899,40.057038)];const t=new BMapGL.Polyline(n);new BMapGLLib.TrackAnimation(a,t,{delay:1e3,duration:2e4,titl:30,overallView:!0}).start()}(),e.commit("setComponentPath","src/views/BaiduMap/Basic/pages/Animation/TrackAnimation.vue")})),(a,e)=>(i(),o("div",c,p))},__scopeId:"data-v-108ebdb4"};export{r as default};