import{p as t,b as e,C as a,A as n,f as r,o as s,g as o}from"./vendor.8623c498.js";t("data-v-e4d48974");const i={class:"map__x"},p=[o("div",{id:"map_container"},null,-1)];e();const m={setup(t){const e=a();return n((()=>{!function(t,e){const a=new mapvgl.View({map:t}),n=new mapvgl.Intensity({min:0,max:100,mixSize:5,maxSize:30,gradient:{0:"rgba(25, 66, 102, 0.8)",.3:"rgba(145, 102, 192, 0.8)",.7:"rgba(210, 131, 137, 0.8)",1:"rgba(248, 177, 149, 0.8)"}}),r=new mapvgl.PointLayer({size:function(t){return n.getSize(t.properties.sales)},color:function(t){return n.getColor(t.properties.sales)}});a.addLayer(r),r.setData(e)}(function(){const t=mapv.utilCityCenter.getCenterByCityName("上海");return initMap({tilt:0,center:[t.lng,t.lat],zoom:10,style:snowStyle})}(),function(){let t=[],e=700;const a=["北京","天津","上海","重庆","石家庄","太原","呼和浩特","哈尔滨","长春","沈阳","济南","南京","合肥","杭州","南昌","福州","郑州","武汉","长沙","广州","南宁","西安","银川","兰州","西宁","乌鲁木齐","成都","贵阳","昆明","拉萨","海口"];for(;e--;){const e=mapv.utilCityCenter.getCenterByCityName(a[parseInt(Math.random()*a.length)]);t.push({geometry:{type:"Point",coordinates:[e.lng-2+4*Math.random(),e.lat-2+4*Math.random()]},properties:{sales:100*Math.random()}})}return t=t.filter((t=>t.properties.sales>90)),t}()),e.commit("setComponentPath","src/views/BaiduMap/Basic/pages/ScatterDiagram/ScatterDiagram.vue")})),(t,e)=>(s(),r("div",i,p))},__scopeId:"data-v-e4d48974"};export{m as default};
