import{C as f,A as h,o as p,e as _,D as u}from"./vendor.87a044ad.js";import{f as d}from"./fabric.f33bdb2a.js";import{j as w}from"./jail_cell_bars.f128aded.js";import{_ as g}from"./index.79183bd5.js";const m={class:"box"},C=u('<div class="canvas_x" data-v-546b8dd2><div data-v-546b8dd2>\u53EF\u4EA4\u4E92</div><canvas width="400" height="400" id="canvas1" data-v-546b8dd2></canvas></div><div class="canvas_x" data-v-546b8dd2><div data-v-546b8dd2>\u4E0D\u53EF\u4EA4\u4E92</div><canvas width="400" height="400" id="canvas2" data-v-546b8dd2></canvas></div><div class="canvas_x" data-v-546b8dd2><div data-v-546b8dd2>\u521D\u59CB\u5316\u753B\u5E03\u6837\u5F0F</div><canvas id="canvas3" data-v-546b8dd2></canvas></div><div class="canvas_x" data-v-546b8dd2><div data-v-546b8dd2>\u4F7F\u7528\u80CC\u666F\u56FE</div><canvas width="400" height="400" id="canvas4" data-v-546b8dd2></canvas></div><div class="canvas_x" data-v-546b8dd2><div data-v-546b8dd2>\u65CB\u8F6C\u80CC\u666F\u56FE</div><canvas width="400" height="400" id="canvas5" data-v-546b8dd2></canvas></div><div class="canvas_x" data-v-546b8dd2><div data-v-546b8dd2>\u62C9\u4F38\u80CC\u666F\u56FE</div><canvas width="400" height="400" id="canvas6" data-v-546b8dd2></canvas></div><div class="canvas_x" data-v-546b8dd2><div data-v-546b8dd2>\u91CD\u590D\u80CC\u666F\u56FE</div><canvas width="400" height="400" id="canvas7" data-v-546b8dd2></canvas></div><div class="canvas_x" data-v-546b8dd2><div data-v-546b8dd2>\u91CD\u53E0\u5F71\u8C61</div><canvas width="400" height="400" id="canvas8" data-v-546b8dd2></canvas></div>',8),k=[C],x={setup(j){const e=f(),i="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27d1b4e5f8824198b6d51a2b1c2d0d75~tplv-k3u1fbpfcp-zoom-crop-mark:400:400:400:400.awebp";function c(){let a=new d.fabric.Canvas("canvas1"),t=new d.fabric.Rect({top:100,left:100,fill:"red",width:30,height:30});a.add(t)}function n(){let a=new d.fabric.StaticCanvas("canvas2"),t=new d.fabric.Rect({top:100,left:100,fill:"red",width:30,height:30});a.add(t)}function s(){let a=new d.fabric.Canvas("canvas3",{width:300,height:300,backgroundColor:"#eee"}),t=new d.fabric.Circle({radius:30,top:20,left:20,fill:"pink"});a.add(t)}function v(){let a=new d.fabric.Canvas("canvas4");a.setBackgroundImage(i,a.renderAll.bind(a))}function r(){let a=new d.fabric.Canvas("canvas5");a.setBackgroundImage(i,a.renderAll.bind(a),{angle:15})}function o(){let a=new d.fabric.Canvas("canvas6");d.fabric.Image.fromURL(i,t=>{console.log(t.width),t.set({scaleX:a.width/t.width,scaleY:a.height/t.height}),a.setBackgroundImage(t,a.renderAll.bind(a),{repeat:"repeat"})})}function l(){let a=new d.fabric.Canvas("canvas7");a.setBackgroundColor({source:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27d1b4e5f8824198b6d51a2b1c2d0d75~tplv-k3u1fbpfcp-zoom-crop-mark:40:40:40:40.awebp",repeat:"repeat"},a.renderAll.bind(a))}function b(){let a=new d.fabric.Canvas("canvas8");a.add(new d.fabric.Circle({radius:30,fill:"#f55",top:70,left:70})),a.setOverlayImage(w,a.renderAll.bind(a))}return h(()=>{e.commit("setComponentPath","src/views/FabricJS/Basic/pages/Stated/Stated.vue"),c(),n(),s(),v(),r(),o(),l(),b()}),(a,t)=>(p(),_("div",m,k))}};var y=g(x,[["__scopeId","data-v-546b8dd2"]]);export{y as default};
