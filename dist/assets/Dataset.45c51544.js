import{i as e}from"./index.1df546ee.js";import{q as t,s as a,k as s,B as d,b as l,i as n,F as o,o as r}from"./vendor.ce0b2847.js";t("data-v-4b1df683");const i=n("aside",null,[n("p",null,"dataset用法：http://echarts.apache.org/zh/option.html#dataset"),n("p",null,"dataset可以把数据集中起来管理")],-1);a();const c={setup(t){const a=s(null),c={dataset:{source:[["一季度",100,79,"分类1",50],["二季度",112,81,"分类2",60],["三季度",96,88,"分类3",55],["四季度",123,72,"分类4",70]]},title:{text:"ECharts 多系列案例"},xAxis:{data:["一季度","二季度","三季度","四季度"]},yAxis:{},series:[{type:"pie",center:["65%",60],radius:35,encode:{itemName:3,value:4}},{type:"line",encode:{x:0,y:1}},{type:"bar",encode:{x:0,y:2}}]};return d((()=>{e(a.value).setOption(c)})),(e,t)=>(r(),l(o,null,[n("div",{id:"chart",class:"chart",ref:a},null,512),i],64))},__scopeId:"data-v-4b1df683"};export{c as default};