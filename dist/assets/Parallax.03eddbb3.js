import{A as x,C as f,D as h,o as w,e as y,F as b,s as S,v as P,f as e,k}from"./vendor.b99b632f.js";import{_ as A}from"./index.b0d71010.js";var q="/front-end-data-visualization/assets/3dr_mono.2d411455.png",E="/front-end-data-visualization/assets/3dr_chihiro.7682e81a.png",F="/front-end-data-visualization/assets/3dr_howlcastle.4b578cb9.png";const v=s=>(S("data-v-412c3007"),s=s(),P(),s),V=v(()=>e("div",{class:"explain"},[e("p",null,[k("\u672C\u4F8B\u5B9E\u73B0\u539F\u7406\uFF1A"),e("a",{href:"https://juejin.cn/post/7040283893106212895",target:"_blank"},"\u300A\u{1F3C6}\u89C6\u5DEE\u7279\u6548\u7684\u539F\u7406\u548C\u5B9E\u73B0\u65B9\u6CD5\u300B---- \u5E2E\u6211\u7684\u6587\u7AE0\u70B9\u4E2A\u8D5E\u5427~\u8C22\u8C22~")])],-1)),X=v(()=>e("div",{class:"page__x",id:"pageX"},[e("div",{class:"cards"},[e("h3",null,"Movies"),e("h1",null,"Popular"),e("div",{class:"card princess-mononoke"},[e("div",{class:"card__bg"}),e("img",{class:"card__img",src:q}),e("div",{class:"card__text"},[e("p",{class:"card__title"},"Princess Mononoke")])]),e("div",{class:"card spirited-away"},[e("div",{class:"card__bg"}),e("img",{class:"card__img",src:E}),e("div",{class:"card__text"},[e("p",{class:"card__title"},"Spirited Away")])]),e("div",{class:"card howl-s-moving-castle"},[e("div",{class:"card__bg"}),e("img",{class:"card__img",src:F}),e("div",{class:"card__text"},[e("p",{class:"card__title"},"Howl's Moving Castle")])])])],-1)),j={setup(s){x().commit("setComponentPath","src/views/CSS/ThreePiece/pages/Parallax/Parallax.vue");let r=null,i=null,d=null,_=null,p=40,u=(a,t)=>(a/t*p-p/2).toFixed(1),o;function m(a){let t=a.x,g=a.y;o&&window.cancelAnimationFrame(o),o=window.requestAnimationFrame(function(){let l=u(t,window.innerWidth),c=u(g,window.innerHeight);i.style.transform="rotateX("+c+"deg) rotateY("+l+"deg)",d.forEach(n=>{n.style.transform="translateX("+-l+"px) translateY("+c+"px)"}),_.forEach(n=>{n.style.backgroundPosition=l*.45+"px "+-c*.45+"px"})})}return f(()=>{r=document.querySelector("#pageX"),i=document.querySelector(".cards"),d=document.querySelectorAll(".card__img"),_=document.querySelectorAll(".card__bg"),r.addEventListener("mousemove",m,!1)}),h(()=>{r.removeEventListener("mousemove",m)}),(a,t)=>(w(),y(b,null,[V,X],64))}};var z=A(j,[["__scopeId","data-v-412c3007"]]);export{z as default};