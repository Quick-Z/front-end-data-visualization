import{p as e,b as a,A as l,d as n,H as s,N as t,C as o,f as u,g as r,J as i,K as d,F as c,l as p,o as v}from"./vendor.ec101613.js";import{b as w,R as m,d as b,c as f,a as x,S as g,L as I}from"./Vector.d80cd09d.js";import{M as Z,V as h,bb as k}from"./ol.bbcea228.js";e("data-v-8786f9bc");const y=r("div",{id:"map",class:"map__x"},null,-1),V={for:"idx1"},S=p(" 方块所在图层的 Z-index "),_={for:"idx1"},j=p(" 三角形所在图层的 Z-index "),M={for:"idx1"},P=p(" 星形所在图层的 Z-index ");a();const U={setup(e){const a=l(),p=n(1),U=n(0),q=n(0),C=n(null),L=n(null),z=n(null),A=n(null),B=s({square:new w({image:new m({fill:new b({color:"blue"}),stroke:new f({color:"black",width:1}),points:4,radius:80,angle:Math.PI/4})}),triangle:new w({image:new m({fill:new b({color:"red"}),stroke:new f({color:"black",width:1}),points:3,radius:80,rotation:Math.PI/4,angle:0})}),star:new w({image:new m({fill:new b({color:"green"}),stroke:new f({color:"black",width:1}),points:5,radius:80,radius2:4,angle:0})})});function F(e,a,l){let n=new x(new k(e));n.setStyle(a);let s=new g({features:[n]}),t=new I({source:s});return t.setZIndex(l),t}return t([q,p,U],(([e,a,l],[n,s,t])=>{C.value.setZIndex(parseInt(e,10)||0),L.value.setZIndex(parseInt(a,10)||0),z.value.setZIndex(parseInt(l,10)||0)})),o((()=>{a.commit("setComponentPath","src/views/OpenLayers/Basic/pages/SetZIndex/SetZIndex.vue"),function(){C.value=F([40,40],B.star,q.value),L.value=F([0,0],B.square,p.value),z.value=F([0,40],B.triangle,U.value),console.log(C.value);let e=[L.value,z.value,C.value];A.value=new Z({target:"map",layers:e,view:new h({center:[0,0],zoom:18})})}()})),(e,a)=>(v(),u(c,null,[y,r("label",V,[i(r("input",{type:"number","onUpdate:modelValue":a[0]||(a[0]=e=>p.value=e)},null,512),[[d,p.value]]),S]),r("label",_,[i(r("input",{type:"number","onUpdate:modelValue":a[1]||(a[1]=e=>U.value=e)},null,512),[[d,U.value]]),j]),r("label",M,[i(r("input",{type:"number","onUpdate:modelValue":a[2]||(a[2]=e=>q.value=e)},null,512),[[d,q.value]]),P])],64))},__scopeId:"data-v-8786f9bc"};export{U as default};
