import{C as n,A as s,o as d,e as f,f as h}from"./vendor.87a044ad.js";import{f as r}from"./fabric.f33bdb2a.js";const u=h("canvas",{id:"canvas",width:"800",height:"600",style:{border:"1px solid #ccc"}},null,-1),b=[u],S={setup(p){const i=n();function c(){let e=new r.fabric.Canvas("canvas"),t=new r.fabric.Circle({top:100,left:100,fill:"#17b978",radius:50});t.set({transparentCorners:!1,hasBorders:!0,borderColor:"red",borderScaleFactor:5,borderDashArray:[20,5,10,7],cornerColor:"#a1de93",cornerStrokeColor:"pink",cornerStyle:"circle",cornerSize:20,cornerDashArray:[10,2,6],selectionBackgroundColor:"#ffc300",padding:20,borderOpacityWhenMoving:.6});let o=new r.fabric.Rect({width:200,height:100,top:100,left:300,fill:"#0074e4",stroke:"#f6416c",strokeWidth:5,strokeDashArray:[20,5,14]});o.selectable=!1;let a=new r.fabric.Triangle({width:80,height:100,fill:"blue",left:10,top:300});a.perPixelTargetFind=!0;let l=new r.fabric.Triangle({width:80,height:100,fill:"green",left:160,top:300});l.uniScaleTransform=!0,e.add(t,o,a,l),e.selection=!0,e.selectionColor="rgba(106, 101, 216, 0.3)",e.selectionBorderColor="#1d2786",e.selectionLineWidth=6,e.selectionDashArray=[30,4,10],e.selectionFullyContained=!0}return s(()=>{i.commit("setComponentPath","src/views/FabricJS/Basic/pages/SelectedStyle/SelectedStyle.vue"),c()}),(e,t)=>(d(),f("div",null,b))}};export{S as default};
