import{C as s,A as f,o as d,e as h,f as p}from"./vendor.ab263734.js";import{f as e}from"./fabric.c200722d.js";const u=p("canvas",{id:"canvas",width:"600",height:"600",style:{border:"1px solid #ccc"}},null,-1),w=[u],v={setup(b){const n=s();function r(){let c=new e.fabric.Canvas("canvas"),t=new e.fabric.Rect({width:100,height:50,fill:"#ffde7d",top:20,left:20});t.lockMovementX=!0;let i=new e.fabric.Rect({width:100,height:50,fill:"#f6416c",top:100,left:20});i.lockMovementY=!0;let o=new e.fabric.Rect({width:100,height:50,fill:"#3490de",top:60,left:160});o.lockRotation=!0;let a=new e.fabric.Rect({width:100,height:50,fill:"#ff9a3c",top:200,left:400});a.lockScalingX=!0;let l=new e.fabric.Rect({width:100,height:50,fill:"#f95959",top:300,left:200});l.lockScalingY=!0,c.add(t,i,o,a,l)}return f(()=>{n.commit("setComponentPath","src/views/FabricJS/Basic/pages/Locking/Locking.vue"),r()}),(c,t)=>(d(),h("div",null,w))}};export{v as default};
