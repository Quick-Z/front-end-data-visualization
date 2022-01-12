import{p as a,b as c,A as n,C as l,f as i,g as e,o as t}from"./vendor.ab550d3c.js";import{f as o}from"./fabric.7a42a7e0.js";a("data-v-b8714bb8");const s={class:"box"},d=e("div",{class:"canvas_x"},[e("div",null,"1、空画布"),e("canvas",{width:"200",height:"200",id:"canvas1",style:{border:"1px solid #ccc"}})],-1),r=e("div",{class:"canvas_x"},[e("div",null,"2、有背景色的画布"),e("canvas",{width:"200",height:"200",id:"canvas2",style:{border:"1px solid #ccc"}})],-1),v=e("div",{class:"canvas_x"},[e("div",null,"3、有图案的 toJSON"),e("canvas",{width:"200",height:"200",id:"canvas3",style:{border:"1px solid #ccc"}})],-1),f=e("div",{class:"canvas_x"},[e("div",null,"4、有图案的 toObject"),e("canvas",{width:"200",height:"200",id:"canvas4",style:{border:"1px solid #ccc"}})],-1),b=e("div",null,"5、输出base64 - png",-1),g=e("canvas",{width:"200",height:"200",id:"canvas5",style:{border:"1px solid #ccc"}},null,-1),u=e("div",null,"6、toSVG",-1),h=e("canvas",{width:"200",height:"200",id:"canvas6",style:{border:"1px solid #ccc"}},null,-1);c();const p={setup(a){const c=n();let p=null;function w(){console.log("toPng",p.toDataURL("png"))}let C=null;function x(){console.log(C.toSVG())}return l((()=>{c.commit("setComponentPath","src/views/FabricJS/Basic/pages/Serialization/Serialization.vue"),function(){let a=new o.fabric.Canvas("canvas1");console.log("canvas1",JSON.stringify(a)),console.log("canvas1",a.toJSON())}(),function(){let a=new o.fabric.Canvas("canvas2",{backgroundColor:"#ddd"});console.log("canvas2: ",a.toJSON())}(),function(){let a=new o.fabric.Canvas("canvas3",{backgroundColor:"#ddd"});a.add(new o.fabric.Rect({left:50,top:50,height:20,width:20,fill:"green"})),a.add(new o.fabric.Circle({left:80,top:80,radius:40,fill:"red"})),console.log("canvas3",a.toJSON())}(),function(){let a=new o.fabric.Canvas("canvas4",{backgroundColor:"#ddd"});a.add(new o.fabric.Rect({left:50,top:50,height:20,width:20,fill:"green"})),a.add(new o.fabric.Circle({left:80,top:80,radius:40,fill:"red"})),console.log("canvas4",a.toObject())}(),p=new o.fabric.Canvas("canvas5",{backgroundColor:"#a5dee5"}),p.add(new o.fabric.Rect({left:50,top:50,height:20,width:20,fill:"green"})),p.add(new o.fabric.Circle({left:80,top:80,radius:40,fill:"red"})),C=new o.fabric.Canvas("canvas6",{backgroundColor:"#a5dee5"}),C.add(new o.fabric.Rect({left:50,top:50,height:20,width:20,fill:"green"})),C.add(new o.fabric.Circle({left:80,top:80,radius:40,fill:"red"}))})),(a,c)=>(t(),i("div",s,[d,r,v,f,e("div",{class:"canvas_x"},[b,g,e("div",null,[e("button",{onClick:w},"toDataURL('png')")])]),e("div",{class:"canvas_x"},[u,h,e("div",null,[e("button",{onClick:x},"toSVG")])])]))},__scopeId:"data-v-b8714bb8"};export{p as default};