import{i as a}from"./index.5fa80180.js";import{A as t,d as e,C as s,f as r,o}from"./vendor.ab550d3c.js";const i={setup(i){const d=t(),n={title:{text:"条形图"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["2011年","2012年"]},grid:{containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["巴西","印尼","美国","印度","中国","世界人口(万)"]},series:[{name:"2011年",type:"bar",data:[18203,23489,29034,104970,131744,630230]},{name:"2012年",type:"bar",data:[19325,23438,31e3,121594,134141,681807]}]},p=e(null);return s((()=>{d.commit("setComponentPath","src/views/ECharts/Basic/pages/BarYCategory/BarYCategory.vue"),a(p.value).setOption(n)})),(a,t)=>(o(),r("div",{id:"chart",class:"chart",ref:(a,t)=>{t.chartDom=a,p.value=a}},null,512))},__scopeId:"data-v-3392a69c"};export{i as default};
