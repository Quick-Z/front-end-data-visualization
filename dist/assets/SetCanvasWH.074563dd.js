import{p as a,b as s,A as i,C as v,r as n,f as c,g as e,a as t,w as d,B as l,o as r,l as o}from"./vendor.ab550d3c.js";import{f as b}from"./fabric.7a42a7e0.js";a("data-v-840e8a54");const h={class:"box"},u=l('<div class="canvas_x" data-v-840e8a54><div data-v-840e8a54>1、默认宽高</div><canvas id="canvas1" style="border:1px solid #ccc;" data-v-840e8a54></canvas></div><div class="canvas_x" data-v-840e8a54><div data-v-840e8a54>2、在元素上设置</div><canvas width="200" height="200" id="canvas2" style="border:1px solid #ccc;" data-v-840e8a54></canvas></div><div class="canvas_x" data-v-840e8a54><div data-v-840e8a54>3、初始化时设置</div><canvas id="canvas3" style="border:1px solid #ccc;" data-v-840e8a54></canvas></div>',3),m={class:"canvas_x"},p=e("div",null,"4、设置宽度",-1),x={style:{"margin-bottom":"10px"}},f=o("设置宽度"),w=e("canvas",{width:"100",height:"100",id:"canvas4",style:{border:"1px solid #ccc"}},null,-1),C={class:"canvas_x"},g=e("div",null,"5、设置高度",-1),_={style:{"margin-bottom":"10px"}},y=o("设置高度"),k=e("canvas",{width:"100",height:"100",id:"canvas5",style:{border:"1px solid #ccc"}},null,-1),z={class:"canvas_x"},H=e("div",null,"6、一键设置宽高",-1),S={style:{"margin-bottom":"10px"}},W=o("宽200, 高300"),j=e("canvas",{width:"100",height:"100",id:"canvas6",style:{border:"1px solid #ccc"}},null,-1);s();const B={setup(a){const s=i();let l=null;let o=null;let B=null;return v((()=>{s.commit("setComponentPath","src/views/FabricJS/Basic/pages/SetCanvasWH/SetCanvasWH.vue"),new b.fabric.Canvas("canvas1"),new b.fabric.Canvas("canvas2"),new b.fabric.Canvas("canvas3",{width:300,height:200}),l=new b.fabric.Canvas("canvas4"),o=new b.fabric.Canvas("canvas5"),B=new b.fabric.Canvas("canvas6")})),(a,s)=>{const i=n("el-button");return r(),c("div",h,[u,e("div",m,[p,e("div",x,[t(i,{size:"mini",onClick:s[0]||(s[0]=a=>{return s=200,void l.setWidth(s);var s})},{default:d((()=>[f])),_:1})]),w]),e("div",C,[g,e("div",_,[t(i,{size:"mini",onClick:s[1]||(s[1]=a=>{return s=300,void o.setHeight(s);var s})},{default:d((()=>[y])),_:1})]),k]),e("div",z,[H,e("div",S,[t(i,{size:"mini",onClick:s[2]||(s[2]=a=>{return s=200,i=300,void B.setDimensions({width:s,height:i});var s,i})},{default:d((()=>[W])),_:1})]),j])])}},__scopeId:"data-v-840e8a54"};export{B as default};
