import{C as a,A as e,f as n,o as t,g as i}from"./vendor.02edd428.js";import{f as s}from"./fabric.566d3038.js";const o=[i("canvas",{width:"600",height:"600",id:"canvas",style:{border:"1px solid #ccc"}},null,-1)],r={setup(i){const r=a();return e((()=>{r.commit("setComponentPath","src/views/FabricJS/Basic/pages/Animation/Animation.vue"),function(){let a=new s.fabric.Canvas("canvas"),e=new s.fabric.Rect({left:100,top:100,width:100,height:100,fill:"red"});e.animate("angle","-50",{onChange:a.renderAll.bind(a)}),a.add(e)}()})),(a,e)=>(t(),n("div",null,o))}};export{r as default};
