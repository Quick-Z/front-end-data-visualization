import{p as e,b as t,C as a,A as o,f as s,o as i,g as r}from"./vendor.02edd428.js";e("data-v-5320e456");const n={class:"map__x"},p=[r("div",{id:"map_container"},null,-1)];t();const c={setup(e){const t=a();return o((()=>{!function(e,t){let a=new mapvgl.View({map:e}),o=new mapvgl.ShapeLayer({color:"#fce38a",opacity:.3,style:"normal"});a.addLayer(o),o.setData(t)}((mapv.utilCityCenter.getCenterByCityName("北京"),initMap({tilt:80,heading:-45.3,center:[116.392394,39.910683],zoom:17})),[{geometry:{type:"Polygon",coordinates:[[[116.392394,39.910683],[116.405976,39.927727],[116.420996,39.910351]]]},properties:{height:500}}]),t.commit("setComponentPath","src/views/BaiduMap/Basic/pages/3DArchitecture/3DArchitecture.vue")})),(e,t)=>(i(),s("div",n,p))},__scopeId:"data-v-5320e456"};export{c as default};
