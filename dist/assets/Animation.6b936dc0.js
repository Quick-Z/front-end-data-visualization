import{C as o,A as c,o as i,e as r,f as d}from"./vendor.87a044ad.js";import{f as t}from"./fabric.f33bdb2a.js";const l=d("canvas",{width:"600",height:"600",id:"canvas",style:{border:"1px solid #ccc"}},null,-1),f=[l],u={setup(m){const n=o();function s(){let e=new t.fabric.Canvas("canvas"),a=new t.fabric.Rect({left:100,top:100,width:100,height:100,fill:"red"});a.animate("angle","-50",{onChange:e.renderAll.bind(e)}),e.add(a)}return c(()=>{n.commit("setComponentPath","src/views/FabricJS/Basic/pages/Animation/Animation.vue"),s()}),(e,a)=>(i(),r("div",null,f))}};export{u as default};
