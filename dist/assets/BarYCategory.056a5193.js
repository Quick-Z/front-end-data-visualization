import{i as a}from"./index.d19ecb39.js";import{B as t,k as e,C as s,b as r,o}from"./vendor.16ac0002.js";const i={setup(i){const n=t(),d={title:{text:"条形图"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["2011年","2012年"]},grid:{containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["巴西","印尼","美国","印度","中国","世界人口(万)"]},series:[{name:"2011年",type:"bar",data:[18203,23489,29034,104970,131744,630230]},{name:"2012年",type:"bar",data:[19325,23438,31e3,121594,134141,681807]}]},c=e(null);return s((()=>{n.commit("setComponentPath","src/views/ECharts/Basic/pages/BarYCategory/BarYCategory.vue"),a(c.value).setOption(d)})),(a,t)=>(o(),r("div",{id:"chart",class:"chart",ref:(a,t)=>{t.chartDom=a,c.value=a}},null,512))},__scopeId:"data-v-3392a69c"};export{i as default};
