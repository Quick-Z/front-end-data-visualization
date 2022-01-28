import{p as a,b as i,A as t,C as e,f as c,o as n,B as d}from"./vendor.da7f5a2b.js";import{f as l}from"./fabric.630692b0.js";a("data-v-14746743");const f={class:"box"},r=[d('<div class="canvas_x" data-v-14746743><div data-v-14746743>裁剪单一图形</div><canvas width="300" height="300" id="canvas1" data-v-14746743></canvas></div><div class="canvas_x" data-v-14746743><div data-v-14746743>裁剪一个组</div><canvas width="300" height="300" id="canvas2" data-v-14746743></canvas></div><div class="canvas_x" data-v-14746743><div data-v-14746743>组合剪辑</div><canvas width="300" height="300" id="canvas3" data-v-14746743></canvas></div><div class="canvas_x" data-v-14746743><div data-v-14746743>剪完再剪（组合剪辑）</div><canvas width="300" height="300" id="canvas4" data-v-14746743></canvas></div><div class="canvas_x" data-v-14746743><div data-v-14746743>组内嵌套剪辑</div><canvas width="300" height="300" id="canvas5" data-v-14746743></canvas></div><div class="canvas_x" data-v-14746743><div data-v-14746743>剪文字</div><canvas width="300" height="300" id="canvas6" data-v-14746743></canvas></div><div class="canvas_x" data-v-14746743><div data-v-14746743>裁剪画布</div><canvas width="300" height="300" id="canvas7" data-v-14746743></canvas></div><div class="canvas_x" data-v-14746743><div data-v-14746743>裁剪画布，但不裁控件</div><canvas width="300" height="300" id="canvas8" data-v-14746743></canvas></div><div class="canvas_x" data-v-14746743><div data-v-14746743>动画裁剪</div><canvas width="300" height="300" id="canvas9" data-v-14746743></canvas></div><div class="canvas_x" data-v-14746743><div data-v-14746743>使用绝对定位裁剪</div><canvas width="300" height="300" id="canvas10" data-v-14746743></canvas></div><div class="canvas_x" data-v-14746743><div data-v-14746743>颠倒的clipPaths</div><canvas width="300" height="300" id="canvas11" data-v-14746743></canvas></div>',11)];i();const h={setup(a){const i=t();return e((()=>{i.commit("setComponentPath","src/views/FabricJS/Basic/pages/ClipPath/ClipPath.vue"),function(){const a=new l.fabric.Canvas("canvas1"),i=new l.fabric.Circle({radius:40,left:-40,top:-40}),t=new l.fabric.Rect({width:200,height:100,fill:"red"});t.clipPath=i,a.add(t)}(),function(){const a=new l.fabric.Canvas("canvas2"),i=new l.fabric.Circle({radius:40,left:-40,top:-40}),t=new l.fabric.Group([new l.fabric.Rect({width:100,height:100,fill:"red"}),new l.fabric.Rect({width:100,height:100,fill:"yellow",left:100}),new l.fabric.Rect({width:100,height:100,fill:"blue",top:100}),new l.fabric.Rect({width:100,height:100,fill:"green",left:100,top:100})]);t.clipPath=i,a.add(t)}(),function(){const a=new l.fabric.Canvas("canvas3"),i=new l.fabric.Group([new l.fabric.Circle({radius:70,top:-70,left:-70}),new l.fabric.Circle({radius:40,top:-95,left:-95}),new l.fabric.Circle({radius:40,top:15,left:15})],{left:-95,top:-95}),t=new l.fabric.Group([new l.fabric.Rect({width:100,height:100,fill:"red"}),new l.fabric.Rect({width:100,height:100,fill:"yellow",left:100}),new l.fabric.Rect({width:100,height:100,fill:"blue",top:100}),new l.fabric.Rect({width:100,height:100,fill:"green",left:100,top:100})]);t.clipPath=i,a.add(t)}(),function(){const a=new l.fabric.Canvas("canvas4"),i=new l.fabric.Circle({radius:70,top:-50,left:-50}),t=new l.fabric.Circle({radius:70,top:-90,left:-90});i.clipPath=t;const e=new l.fabric.Group([new l.fabric.Rect({width:100,height:100,fill:"red"}),new l.fabric.Rect({width:100,height:100,fill:"yellow",left:100}),new l.fabric.Rect({width:100,height:100,fill:"blue",top:100}),new l.fabric.Rect({width:100,height:100,fill:"green",left:100,top:100})]);e.clipPath=i,a.add(e)}(),function(){const a=new l.fabric.Canvas("canvas5"),i=new l.fabric.Circle({radius:100,top:-100,left:-100}),t=new l.fabric.Circle({radius:50,top:-50,left:-50}),e=new l.fabric.Group([new l.fabric.Rect({width:100,height:100,fill:"red",clipPath:t}),new l.fabric.Rect({width:100,height:100,fill:"yellow",left:100}),new l.fabric.Rect({width:100,height:100,fill:"blue",top:100}),new l.fabric.Rect({width:100,height:100,fill:"green",left:100,top:100})]);e.clipPath=i,a.add(e)}(),function(){const a=new l.fabric.Canvas("canvas6"),i=new l.fabric.Text("Hi I'm the \nnew ClipPath!\nI hope we'll\nbe friends",{top:-100,left:-100}),t=new l.fabric.Group([new l.fabric.Rect({width:100,height:100,fill:"red"}),new l.fabric.Rect({width:100,height:100,fill:"yellow",left:100}),new l.fabric.Rect({width:100,height:100,fill:"blue",top:100}),new l.fabric.Rect({width:100,height:100,fill:"green",left:100,top:100})]);t.clipPath=i,a.add(t)}(),function(){const a=new l.fabric.Canvas("canvas7",{backgroundColor:"#ddd"}),i=new l.fabric.Group([new l.fabric.Rect({width:100,height:100,fill:"red"}),new l.fabric.Rect({width:100,height:100,fill:"yellow",left:100}),new l.fabric.Rect({width:100,height:100,fill:"blue",top:100}),new l.fabric.Rect({width:100,height:100,fill:"green",left:100,top:100})]),t=new l.fabric.Circle({radius:100,top:0,left:50});a.clipPath=t,a.add(i)}(),function(){const a=new l.fabric.Canvas("canvas8",{backgroundColor:"#ddd"}),i=new l.fabric.Group([new l.fabric.Rect({width:100,height:100,fill:"red"}),new l.fabric.Rect({width:100,height:100,fill:"yellow",left:100}),new l.fabric.Rect({width:100,height:100,fill:"blue",top:100}),new l.fabric.Rect({width:100,height:100,fill:"green",left:100,top:100})]);a.controlsAboveOverlay=!0;const t=new l.fabric.Circle({radius:100,top:0,left:50});a.clipPath=t,a.add(i)}(),function(){const a=new l.fabric.Canvas("canvas9",{backgroundColor:"#ddd"}),i=new l.fabric.Rect({width:100,height:100,top:0,left:0});function t(){i.animate({left:200},{duration:900,onChange:a.requestRenderAll.bind(a),onComplete:e})}function e(){i.animate({left:0},{duration:1200,onChange:a.requestRenderAll.bind(a),onComplete:t})}function c(){i.animate({top:100},{duration:500,onChange:a.requestRenderAll.bind(a),onComplete:n})}function n(){i.animate({top:0},{duration:400,onChange:a.requestRenderAll.bind(a),onComplete:c})}const d=new l.fabric.Group([new l.fabric.Rect({width:100,height:100,fill:"red"}),new l.fabric.Rect({width:100,height:100,fill:"yellow",left:100}),new l.fabric.Rect({width:100,height:100,fill:"blue",top:100}),new l.fabric.Rect({width:100,height:100,fill:"green",left:100,top:100})],{scale:1.5});a.controlsAboveOverlay=!0,t(),c(),a.clipPath=i,a.add(d)}(),function(){const a=new l.fabric.Canvas("canvas10"),i=new l.fabric.Rect({width:300,height:300,top:0,left:0,absolutePositioned:!0}),t=new l.fabric.Rect({width:300,height:300,top:0,left:0,absolutePositioned:!0});l.fabric.Image.fromURL("http://fabricjs.com/assets/dragon.jpg",(function(t){t.clipPath=i,t.scaleToWidth(300),a.add(t)})),l.fabric.Image.fromURL("http://fabricjs.com/assets/dragon2.jpg",(function(i){i.clipPath=t,i.scaleToWidth(300),i.top=150,a.add(i)}))}(),function(){const a=new l.fabric.Canvas("canvas11"),i=new l.fabric.Circle({radius:100,top:-200,left:-200}),t=new l.fabric.Circle({radius:100,top:0,left:0}),e=new l.fabric.Circle({radius:100,top:0,left:-200}),c=new l.fabric.Circle({radius:100,top:-200,left:0}),n=new l.fabric.Group([i,t,e,c]);n.inverted=!0,l.fabric.Image.fromURL("http://fabricjs.com/assets/dragon.jpg",(function(i){i.clipPath=n,i.scaleToWidth(500),a.add(i)}))}()})),(a,i)=>(n(),c("div",f,r))},__scopeId:"data-v-14746743"};export{h as default};