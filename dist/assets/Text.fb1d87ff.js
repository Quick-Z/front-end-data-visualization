import{C as e,A as t,f as o,o as n,g as i}from"./vendor.02edd428.js";import{f as a}from"./fabric.566d3038.js";const l=[i("canvas",{width:"600",height:"600",id:"canvas",style:{border:"1px solid #ccc"}},null,-1)],r={setup(i){const r=e();return t((()=>{r.commit("setComponentPath","src/views/FabricJS/Basic/pages/Text/Text.vue"),function(){let e=new a.fabric.Canvas("canvas"),t=new a.fabric.Text("Hello World!",{left:40,top:10,fontFamily:"Comic Sans",fontSize:60,fontWeight:600,charSpacing:100,fill:"red",cornerColor:"pink",angle:30,backgroundColor:"#ffd460",borderColor:"yellowGreen",borderScaleFactor:4,borderDashArray:[10,4,20],stroke:"#3f72af",strokeWidth:2,textAlign:"lfet",opacity:.8,selectable:!0,shadow:"rgba(0, 0, 0, 0.5) 5px 5px 5px"});e.add(t);let o=new a.fabric.Text("下划线",{left:0,top:400,fontSize:20,underline:!0});e.add(o);let n=new a.fabric.Text("中划线",{left:80,top:400,fontSize:20,linethrough:!0});e.add(n);let i=new a.fabric.Text("上划线",{left:160,top:400,fontSize:20,overline:!0});e.add(i);let l=new a.fabric.Text("上中下划线",{left:240,top:400,fontSize:20,overline:!0,linethrough:!0,underline:!0});e.add(l);let r=new a.fabric.Text("投影 shadow",{left:0,top:440,fontSize:20,shadow:"rgba(0, 0, 0, 0.8) 5px 5px 2px"});e.add(r);let d=new a.fabric.Text("投影 shadow",{left:140,top:440,fontSize:20,shadow:"#f6416c -3px -3px 2px"});e.add(d);let f=new a.fabric.Text("左\n左左\n左对齐",{top:10,left:500,fontSize:16,textAlign:"left"});e.add(f);let c=new a.fabric.Text("中\n中中\n居中对齐",{top:100,left:500,fontSize:16,textAlign:"center"});e.add(c);let s=new a.fabric.Text("右\n右右\n右对齐",{top:200,left:500,fontSize:16,textAlign:"right"});e.add(s);var p="Lorem ipsum dolor sit amet,\nconsectetur adipisicing elit,\nsed do eiusmod tempor incididunt\nut labo";let x=new a.fabric.Text(p,{top:350,left:380,fontSize:16,lineHeight:1}),b=new a.fabric.Text(p,{top:450,left:380,fontSize:16,lineHeight:2});e.add(b,x)}()})),(e,t)=>(n(),o("div",null,l))}};export{r as default};
