import{C as n,A as o,f as t,g as e,o as c}from"./vendor.8623c498.js";import{f as s}from"./fabric.3796ca4f.js";const a=e("canvas",{width:"600",height:"600",id:"canvas",style:{border:"1px solid #ccc"}},null,-1),i=e("div",null,"打开控制台，然后用鼠标点击画布试试",-1),l={setup(l){const f=n();let r=null;function u(){r.off("mouse:down")}function d(){u(),r.on("mouse:down",(n=>{console.log(`x轴坐标: ${n.e.clientX};    y轴坐标: ${n.e.clientY}`)}))}return o((()=>{f.commit("setComponentPath","src/views/FabricJS/Basic/pages/Event/Event.vue"),function(){r=new s.fabric.Canvas("canvas");let n=new s.fabric.Rect({top:20,left:20,width:100,height:50,fill:"#9896f1"});n.on("selected",(n=>{console.log("选中矩形啦",n)})),r.add(n),d()}()})),(n,o)=>(c(),t("div",null,[a,e("button",{onClick:d},"添加画布点击事件"),e("button",{onClick:u},"移除画布点击事件"),i]))}};export{l as default};
