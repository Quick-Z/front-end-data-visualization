import{C as _,A as m,o as p,e as u,s as g,v as h,f as s}from"./vendor.87a044ad.js";import{f as n}from"./fabric.f33bdb2a.js";import{_ as w}from"./index.79183bd5.js";const r=i=>(g("data-v-649b910c"),i=i(),h(),i),b={class:"box"},P=r(()=>s("div",{class:"canvas_x"},[s("div",null,"\u9F20\u6807\u6EDA\u8F6E\u7F29\u653E\u753B\u5E03\uFF0Calt + \u5355\u51FB\u52A8\u4F5C\u8FDB\u884C\u62D6\u52A8\u753B\u5E03"),s("canvas",{width:"400",height:"400",id:"canvas1"})],-1)),x=r(()=>s("div",{class:"canvas_x"},[s("div",null,"\u4EE5\u9F20\u6807\u6307\u9488\u4E3A\u7F29\u653E\u4E2D\u5FC3"),s("canvas",{width:"400",height:"400",id:"canvas2"})],-1)),Y=[P,x],X={setup(i){const d=_();function f(){let e=new n.fabric.Canvas("canvas1"),l=new n.fabric.Rect({left:10,top:10,fill:"orange",width:40,height:40}),c=new n.fabric.Circle({radius:50,fill:"green",left:30,top:30});e.add(l,c),e.on("mouse:wheel",a=>{let o=a.e.deltaY,t=e.getZoom();t*=.999**o,t>20&&(t=20),t<.01&&(t=.01),e.setZoom(t),a.e.preventDefault(),a.e.stopPropagation()}),e.on("mouse:down",a=>{let o=a.e;o.altKey===!0&&(e.isDragging=!0,e.lastPosX=o.clientX,e.lastPosY=o.clientY)}),e.on("mouse:move",a=>{if(e.isDragging){let o=a.e,t=e.viewportTransform;t[4]+=o.clientX-e.lastPosX,t[5]+=o.clientY-e.lastPosY,e.requestRenderAll(),e.lastPosX=o.clientX,e.lastPosY=o.clientY}}),e.on("mouse:up",a=>{e.setViewportTransform(e.viewportTransform),e.isDragging=!1})}function v(){let e=new n.fabric.Canvas("canvas2"),l=new n.fabric.Rect({left:210,top:210,fill:"orange",width:40,height:40}),c=new n.fabric.Circle({radius:50,fill:"green",left:120,top:130});e.add(l,c),e.on("mouse:wheel",a=>{let o=a.e.deltaY,t=e.getZoom();t*=.999**o,t>20&&(t=20),t<.01&&(t=.01),e.zoomToPoint({x:a.e.offsetX,y:a.e.offsetY},t),a.e.preventDefault(),a.e.stopPropagation()})}return m(()=>{d.commit("setComponentPath","src/views/FabricJS/Basic/pages/ZoomAndPanning/ZoomAndPanning.vue"),f(),v()}),(e,l)=>(p(),u("div",b,Y))}};var D=w(X,[["__scopeId","data-v-649b910c"]]);export{D as default};
