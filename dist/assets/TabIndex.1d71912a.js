import{p as a,b as e,C as s,d as n,A as o,f as t,o as l,F as d,g as p}from"./vendor.02edd428.js";import{T as r}from"./TileImage.6719d572.js";import{O as i}from"./OSM.b07225a9.js";import{M as m,V as c}from"./ol.bbcea228.js";import"./XYZ.4ee3e030.js";a("data-v-2b2d75da");const u=p("div",{tabindex:"2",id:"map",class:"map__x"},null,-1),b=p("div",{class:"explain"},[p("p",null,'通过给地图容器设置 tabindex="2" 来控制默认不会选中地图。'),p("p",null,"只有当鼠标点击地图时，才能进行缩放等操作。"),p("p",null,"如果没选中地图，即使在地图上滑动滚轮，也不会操作到地图。")],-1),v=p("div",{class:"occupied"},null,-1);e();const x={setup(a){const e=s(),p=n(null);return o((()=>{e.commit("setComponentPath","src/views/OpenLayers/Basic/pages/TabIndex/TabIndex.vue"),p.value=new m({target:"map",layers:[new r({source:new i})],view:new c({projection:"EPSG:4326",center:[113.120444,23.034742],zoom:12})})})),(a,e)=>(l(),t(d,null,[u,b,v],64))},__scopeId:"data-v-2b2d75da"};export{x as default};
