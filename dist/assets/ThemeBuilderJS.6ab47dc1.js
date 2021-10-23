import{B as b,E as m,C as y,b as p,A as u,r as S,o as _,e as f,f as e,a as g,w as C,F as x,s as w,v,k as a}from"./vendor.ab263734.js";import{_ as W,i as k}from"./index.abdbd829.js";import{_ as L}from"./index.ad29fbe7.js";var A={},B=b(W);(function(r){(function(l,o){typeof r.nodeName!="string"?o(r,B):o({},l.echarts)})(m,function(l,o){var c=function(i){typeof console!="undefined"&&console&&console.error&&console.error(i)};if(!o){c("ECharts is not Loaded");return}o.registerTheme("vintage2",{color:["#d87c7c","#919e8b","#d7ab82","#6e7074","#61a0a8","#efa18d","#787464","#cc7e63","#724e58","#4b565b"],backgroundColor:"#fef8ef",textStyle:{},title:{textStyle:{color:"#bd2020"},subtextStyle:{color:"#aaaaaa"}},line:{itemStyle:{borderWidth:1},lineStyle:{width:2},symbolSize:4,symbol:"emptyCircle",smooth:!1},radar:{itemStyle:{borderWidth:1},lineStyle:{width:2},symbolSize:4,symbol:"emptyCircle",smooth:!1},bar:{itemStyle:{barBorderWidth:0,barBorderColor:"#ccc"}},pie:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},scatter:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},boxplot:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},parallel:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},sankey:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},funnel:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},gauge:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},candlestick:{itemStyle:{color:"#c23531",color0:"#314656",borderColor:"#c23531",borderColor0:"#314656",borderWidth:1}},graph:{itemStyle:{borderWidth:0,borderColor:"#ccc"},lineStyle:{width:1,color:"#aaaaaa"},symbolSize:4,symbol:"emptyCircle",smooth:!1,color:["#d87c7c","#919e8b","#d7ab82","#6e7074","#61a0a8","#efa18d","#787464","#cc7e63","#724e58","#4b565b"],label:{color:"#eeeeee"}},map:{itemStyle:{areaColor:"#eeeeee",borderColor:"#444444",borderWidth:.5},label:{color:"#000000"},emphasis:{itemStyle:{areaColor:"rgba(255,215,0,0.8)",borderColor:"#444444",borderWidth:1},label:{color:"rgb(100,0,0)"}}},geo:{itemStyle:{areaColor:"#eeeeee",borderColor:"#444444",borderWidth:.5},label:{color:"#000000"},emphasis:{itemStyle:{areaColor:"rgba(255,215,0,0.8)",borderColor:"#444444",borderWidth:1},label:{color:"rgb(100,0,0)"}}},categoryAxis:{axisLine:{show:!0,lineStyle:{color:"#333"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!1,lineStyle:{color:["#ccc"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},valueAxis:{axisLine:{show:!0,lineStyle:{color:"#333"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!0,lineStyle:{color:["#ccc"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},logAxis:{axisLine:{show:!0,lineStyle:{color:"#333"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!0,lineStyle:{color:["#ccc"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},timeAxis:{axisLine:{show:!0,lineStyle:{color:"#333"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!0,lineStyle:{color:["#ccc"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},toolbox:{iconStyle:{borderColor:"#999999"},emphasis:{iconStyle:{borderColor:"#666666"}}},legend:{textStyle:{color:"#333333"}},tooltip:{axisPointer:{lineStyle:{color:"#cccccc",width:1},crossStyle:{color:"#cccccc",width:1}}},timeline:{lineStyle:{color:"#293c55",width:1},itemStyle:{color:"#293c55",borderWidth:1},controlStyle:{color:"#293c55",borderColor:"#293c55",borderWidth:.5},checkpointStyle:{color:"#e43c59",borderColor:"#c23531"},label:{color:"#293c55"},emphasis:{itemStyle:{color:"#a9334c"},controlStyle:{color:"#293c55",borderColor:"#293c55",borderWidth:.5},label:{color:"#293c55"}}},visualMap:{color:["#bf444c","#d88273","#f6efa6"]},dataZoom:{backgroundColor:"rgba(47,69,84,0)",dataBackgroundColor:"rgba(47,69,84,0.3)",fillerColor:"rgba(167,183,204,0.4)",handleColor:"#a7b7cc",handleSize:"100%",textStyle:{color:"#333333"}},markPoint:{label:{color:"#eeeeee"},emphasis:{label:{color:"#eeeeee"}}}})})})(A);const t=r=>(w("data-v-0f60b23b"),r=r(),v(),r),T=t(()=>e("p",null,"\u81EA\u5B9A\u4E49echarts\u4E3B\u9898\u8BF4\u660E\uFF1A",-1)),j=a(" 1. \u5728 "),z=a(" \u300CEcharts\u5B98\u65B9\u7F16\u8F91\u4E3B\u9898"),E=t(()=>e("span",{class:"el-icon-link"},null,-1)),I=a("\u300D "),N=a(" \uFF0C\u5E76\u4E0B\u8F7Djs\u8D44\u6E90\u6587\u4EF6\u3002 "),J=t(()=>e("p",null,"2. \u5C06\u4E0B\u8F7D\u4E0B\u6765\u7684\u4E3B\u9898\u6587\u4EF6(js)\u653E\u5230 node_modules/echarts/theme \u76EE\u5F55\u4E0B",-1)),P=t(()=>e("p",null,"3. \u6253\u5F00\u4E0B\u8F7D\u597D\u7684\u4E3B\u9898\u6587\u4EF6\uFF0C\u641C\u7D22 \u201Cecharts.registerTheme\u201D \u5373\u53EF\u627E\u5230\u4E3B\u9898\u540D(\u53EF\u4EE5\u81EA\u5DF1\u4FEE\u6539\u6539\u4E3B\u9898\u540D)",-1)),V=t(()=>e("p",null,"4. \u5728vue\u4E2D\u5F15\u5165",-1)),D=t(()=>e("p",null,"5. \u4F7F\u7528",-1)),F=t(()=>e("p",null,"\u5907\u6CE8\uFF1A\u672C\u4F8B\u6240\u4F7F\u7528\u7684\u4E3B\u9898\u653E\u5728 src/assets/echarts/theme/vintage2.js \u3002\u672C\u4F8B\u7684\u4E3B\u9898\u53EA\u6539\u4E86\u5B98\u65B9\u63D0\u4F9B\u7684vintage\u4E3B\u9898\u7684\u6807\u9898\u989C\u8272",-1)),M={setup(r){const l=y(),o=p(null),c={title:{text:"\u81EA\u5B9A\u4E49\u4E3B\u9898 JS\u7248"},xAxis:{data:["\u886C\u886B","\u7F8A\u6BDB\u886B","\u96EA\u7EBA\u886B","\u88E4\u5B50","\u9AD8\u8DDF\u978B","\u889C\u5B50"]},yAxis:{},series:{name:"\u9500\u91CF",type:"bar",data:[5,20,36,10,10,20]}};function i(){k(o.value,"vintage2").setOption(c)}return u(()=>{l.commit("setComponentPath","src/views/ECharts/Basic/pages/ThemeBuilder/ThemeBuilderJS.vue"),i()}),(d,$)=>{const n=S("el-link");return _(),f(x,null,[e("div",{id:"chart",class:"chart",ref:(s,h)=>{h.chartDom=s,o.value=s}},null,512),e("aside",null,[T,e("p",null,[j,g(n,{href:"https://echarts.apache.org/zh/theme-builder.html",target:"_blank",type:"primary"},{default:C(()=>[z,E,I]),_:1}),N]),J,P,V,D,F])],64)}}};var Z=L(M,[["__scopeId","data-v-0f60b23b"]]);export{Z as default};
