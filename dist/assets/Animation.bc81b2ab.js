import{C as a,A as n,f as e,o as t,g as i}from"./vendor.8623c498.js";import{f as s}from"./fabric.3796ca4f.js";const c=[i("canvas",{width:"600",height:"600",id:"canvas",style:{border:"1px solid #ccc"}},null,-1)],o={setup(i){const o=a();return n((()=>{o.commit("setComponentPath","src/views/FabricJS/Basic/pages/Animation/Animation.vue"),function(){let a=new s.fabric.Canvas("canvas"),n=new s.fabric.Rect({left:100,top:100,width:100,height:100,fill:"red"});n.animate("angle","-50",{onChange:a.renderAll.bind(a)}),a.add(n)}()})),(a,n)=>(t(),e("div",null,c))}};export{o as default};
