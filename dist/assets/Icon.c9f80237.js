import{i as t}from"./index.5fa80180.js";import{A as e,d as a,C as s,f as o,o as c}from"./vendor.ab550d3c.js";const r={setup(r){const i=e(),l=a(null),p={title:{text:"自定义图标"},xAxis:{type:"value",show:!1},yAxis:{type:"category",show:!1},series:[{type:"bar",data:[100],stack:"总量",barWidth:10,itemStyle:{color:"#45c946"}},{type:"bar",data:[250],stack:"总量",barWidth:10,itemStyle:{color:"#ccc"}},{type:"custom",data:[100],stack:"重量",renderItem:(t,e)=>{const a=e.value(0);return{type:"group",position:e.coord([a,0]),children:[{type:"path",shape:{d:"M163.396608 289.168384c-40.577024 0-66.526208 54.183936-35.44064 85.25824L477.217792 723.704832c20.031488 20.031488 49.82272 20.031488 69.853184 0l349.274112-349.278208c30.30528-30.294016 6.677504-85.25824-34.927616-85.25824L163.396608 289.168384z",x:-5,y:-18,width:10,height:10,layout:"cover"},style:{fill:"#45c946"}},{type:"path",shape:{d:"M131.974144 648.752128c-30.418944 30.430208-6.474752 84.301824 34.917376 84.301824L858.258432 733.053952c42.899456 0 65.325056-53.85216 34.916352-84.301824L547.487744 302.569472c-19.930112-19.974144-49.374208-19.95264-69.327872 0L131.974144 648.752128z",x:-5,y:8,width:10,height:10,layout:"cover"},style:{fill:"#45c946"}}]}}}],grid:{top:0,bottom:0,left:0,right:0}};return s((()=>{i.commit("setComponentPath","src/views/ECharts/Basic/pages/TypeCustom/Icon.vue"),t(l.value).setOption(p)})),(t,e)=>(c(),o("div",{id:"chart",class:"chart",ref:(t,e)=>{e.chartDom=t,l.value=t}},null,512))},__scopeId:"data-v-0766dc8f"};export{r as default};
