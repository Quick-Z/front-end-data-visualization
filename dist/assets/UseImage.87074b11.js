import{l as a}from"./logo.652bbcc2.js";import{p as e,b as s,C as o,A as t,f as c,o as n,g as d}from"./vendor.02edd428.js";import{f as l}from"./fabric.566d3038.js";e("data-v-f5b7faa4");const i=[d("canvas",{width:"600",height:"600",id:"canvas",style:{border:"1px solid #ccc"}},null,-1),d("img",{src:a,id:"logo"},null,-1)];s();const r={setup(e){const s=o();return t((()=>{s.commit("setComponentPath","src/views/FabricJS/Basic/pages/UseImage/UseImage.vue"),function(){let e=new l.fabric.Canvas("canvas"),s=document.getElementById("logo");console.log(s),s.onload=()=>{let a=new l.fabric.Image(s,{left:100,top:100,width:200,height:200,angle:50});e.add(a)},l.fabric.Image.fromURL(a,(a=>{a.scale(.5),e.add(a)}))}()})),(a,e)=>(n(),c("div",null,i))},__scopeId:"data-v-f5b7faa4"};export{r as default};
