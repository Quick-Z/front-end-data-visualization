import{C as e,A as t,f as i,o as r,g as l}from"./vendor.8623c498.js";import{f as a}from"./fabric.3796ca4f.js";import{l as c}from"./logo.652bbcc2.js";const f=[l("canvas",{id:"canvas",width:"600",height:"600",style:{border:"1px solid #ccc"}},null,-1)],o={setup(l){const o=e();let n=null;return t((()=>{o.commit("setComponentPath","src/views/FabricJS/Basic/pages/Groups/Groups.vue"),function(){n=new a.fabric.Canvas("canvas");const e=new a.fabric.Ellipse({top:20,left:20,rx:100,ry:50,fill:"#ddd",originX:"center",originY:"center"}),t=new a.fabric.Text("Hello World",{top:40,left:20,fontSize:20,originX:"center",originY:"center"}),i=new a.fabric.Group([e,t],{top:50,left:100,angle:-10});i.item(0).set("fill","#ea5455"),i.item(1).set({text:"雷猴，世界",fill:"#fff"}),n.add(i);const r=new a.fabric.Circle({radius:50,fill:"red",left:0}),l=new a.fabric.Circle({radius:50,fill:"green",left:100}),f=new a.fabric.Circle({radius:50,fill:"blue",left:200}),o=new a.fabric.Group([r,l,f],{left:50,top:200});n.add(o),o.add(new a.fabric.Rect({width:50,height:50,fill:"orange",left:0,top:0,originX:"center",originY:"center"})),o.addWithUpdate(new a.fabric.Rect({width:80,height:80,fill:"#dcedc1",originX:"center",originY:"center",left:400,top:o.get("top")})),o.addWithUpdate(new a.fabric.Rect({width:40,height:40,fill:"#07689f",originX:"center",originY:"center",left:o.get("left")+100,top:o.get("top")+100})),a.fabric.Image.fromURL(c,(e=>{let t=e.scale(.3).set({left:0,top:0});a.fabric.Image.fromURL(c,(e=>{let i=e.scale(.3).set({left:80,top:0});a.fabric.Image.fromURL(c,(e=>{let r=e.scale(.3).set({left:160,top:0});n.add(new a.fabric.Group([t,i,r],{left:10,top:400}))}))}))}))}()})),(e,t)=>(r(),i("div",null,f))}};export{o as default};
