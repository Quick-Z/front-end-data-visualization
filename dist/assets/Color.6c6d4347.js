import{A as o,C as a,f as e,o as r,g as t}from"./vendor.ab550d3c.js";import{f as l}from"./fabric.7a42a7e0.js";const c=[t("canvas",{width:"600",height:"600",id:"canvas",style:{border:"1px solid #ccc"}},null,-1)],s={setup(t){const s=o();return a((()=>{s.commit("setComponentPath","src/views/FabricJS/Basic/pages/Color/Color.vue"),function(){let o=new l.fabric.Canvas("canvas"),a=new l.fabric.Color("#ff0");new l.fabric.Color("#ffff00"),new l.fabric.Color("ff0");let e=new l.fabric.Color("rgb(10, 200, 80)");new l.fabric.Color("rgba(10, 200, 80, 0.5)"),console.log(e);let r=a.toRgb(),t=e.toHex();console.log(r),console.log(t);let c=a.overlayWith(e).toRgb(),s=new l.fabric.Rect({left:100,top:100,width:100,height:100,fill:c});o.add(s)}()})),(o,a)=>(r(),e("div",null,c))}};export{s as default};