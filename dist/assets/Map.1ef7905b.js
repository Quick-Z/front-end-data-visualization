import{C as l,b as c,A as i,o as m,e as p,f as u}from"./vendor.87a044ad.js";import{i as d}from"./index.04f38bd2.js";import{a as h}from"./ashenTheme.7b1ded72.js";import{_ as f}from"./index.79183bd5.js";const _={setup(v){const o=l(),t=c(null),r={title:{text:"\u5927\u6807\u9898",subtext:"\u5C0F\u6807\u9898\uFF08\u6709\u94FE\u63A5\uFF0C\u70B9\u51FB\u8DF3\u8F6C\uFF09",sublink:"https://mapv.baidu.com/gl/docs/CircleLayer.html",left:"center"},bmap:{key:"EcuCFchyeUS7tTG2De4AlsYos1Ky2FOC",center:[121.475941,31.222836],zoom:5,roam:!0,mapStyle:{styleJson:h}},tooltip:{},series:[{name:"\u9500\u552E\u989D",type:"scatter",coordinateSystem:"bmap",data:[{name:"\u6D77\u95E8",value:[121.15,31.89,80]},{name:"\u5357\u4EAC",value:[118.78,32.04,100]}],encode:{value:2},itemStyle:{color:"purple"},symbolSize:function(e){return e[2]/10},label:{show:!1,color:"purple",position:"right",formatter:function(e){return`${e.data.name} - ${e.data.value[2]}`}},emphasis:{label:{show:!0}}},{name:"Top 2",type:"effectScatter",coordinateSystem:"bmap",data:[{name:"\u5317\u4EAC",value:[116.404269,39.913385,200]},{name:"\u4E0A\u6D77",value:[121.475941,31.222836,200]}],symbolSize:function(e){return e[2]/10},encode:{value:2},label:{formatter:e=>`${e.data.name} - ${e.data.value[2]}`,position:"right",show:!0},hoverAnimation:!0,rippleEffect:{brushType:"stroke"},itemStyle:{color:"purple",shadowBlur:10,shadowColor:"#333"}}]};function s(){d(t.value).setOption(r)}return i(()=>{o.commit("setComponentPath","src/views/ECharts/Basic/pages/Map/Map.vue"),s()}),(e,b)=>(m(),p("div",null,[u("div",{id:"chart",class:"chart",ref:(a,n)=>{n.chartDom=a,t.value=a}},null,512)]))}};var w=f(_,[["__scopeId","data-v-495ef1b6"]]);export{w as default};
