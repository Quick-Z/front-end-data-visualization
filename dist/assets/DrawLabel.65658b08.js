import{q as e,s as a,k as n,y as t,G as o,b as s,o as l,i}from"./vendor.e18d4800.js";e("data-v-0405f209");const c={class:"map__x"},d=[i("div",{id:"container"},null,-1)];a();const r={setup(e){function a(e){alert(e.target.content)}const i=n(null);return t((()=>{!function(){const e=new BMapGL.Map("container"),n=new BMapGL.Point(113.942651,22.53945);e.centerAndZoom(n,12),e.enableScrollWheelZoom(!0),i.value=new BMapGL.Label("数据可视化 - 数据可视化",{position:n,offset:new BMapGL.Size(-100,20)}),i.value.setStyle({width:"220px",height:"50px",padding:"20px",color:"#07689f",fontSize:"20px",background:"#b9d7ea",border:"10px solid #8c82fc"}),i.value.addEventListener("click",a),e.addOverlay(i.value)}()})),o((()=>{i.value.removeEventListener("click",a)})),(e,a)=>(l(),s("div",c,d))},__scopeId:"data-v-0405f209"};export{r as default};