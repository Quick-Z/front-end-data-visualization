import{l as e}from"./logo.f549c8cc.js";import{q as a,s as n,k as o,y as l,G as t,b as s,o as i,i as c}from"./vendor.e18d4800.js";a("data-v-33964222");const u={class:"map__x"},v=[c("div",{id:"container"},null,-1)];n();const r={setup(a){const n=o(null),c=o(null),r=o(null);function d(){const e=new BMapGL.InfoWindow("内容：数据可视化",{width:250,height:100,title:"标题标题",offset:new BMapGL.Size(0,-20)});n.value.openInfoWindow(e,c.value)}return l((()=>{!function(){n.value=new BMapGL.Map("container"),c.value=new BMapGL.Point(113.298378,23.20661),n.value.centerAndZoom(c.value,18),n.value.enableScrollWheelZoom(!0);const a=new BMapGL.Icon(e,new BMapGL.Size(60,60));r.value=new BMapGL.Marker(c.value,{icon:a}),r.value.addEventListener("click",d),n.value.addOverlay(r.value)}()})),t((()=>{r.value.removeEventListener("click",d)})),(e,a)=>(i(),s("div",u,v))},__scopeId:"data-v-33964222"};export{r as default};