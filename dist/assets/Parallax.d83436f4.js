import{p as a,b as s,C as e,A as t,E as r,f as c,o as l,g as o}from"./vendor.8623c498.js";a("data-v-747b3891");const d={class:"page__x",id:"pageX"},i=[o("div",{class:"cards"},[o("h3",null,"Movies"),o("h1",null,"Popular"),o("div",{class:"card princess-mononoke"},[o("div",{class:"card__bg"}),o("img",{class:"card__img",src:"/front-end-data-visualization/assets/3dr_mono.2d411455.png"}),o("div",{class:"card__text"},[o("p",{class:"card__title"},"Princess Mononoke")])]),o("div",{class:"card spirited-away"},[o("div",{class:"card__bg"}),o("img",{class:"card__img",src:"/front-end-data-visualization/assets/3dr_chihiro.7682e81a.png"}),o("div",{class:"card__text"},[o("p",{class:"card__title"},"Spirited Away")])]),o("div",{class:"card howl-s-moving-castle"},[o("div",{class:"card__bg"}),o("img",{class:"card__img",src:"/front-end-data-visualization/assets/3dr_howlcastle.4b578cb9.png"}),o("div",{class:"card__text"},[o("p",{class:"card__title"},"Howl's Moving Castle")])])],-1)];s();const n={setup(a){e().commit("setComponentPath","src/views/CSS/ThreePiece/pages/Parallax/Parallax.vue");let s,o=null,n=null,_=null,m=null,u=(a,s)=>(a/s*40-20).toFixed(1);function v(a){let e=a.x,t=a.y;s&&window.cancelAnimationFrame(s),s=window.requestAnimationFrame((function(){let a=u(e,o.offsetWidth),s=u(t,o.offsetHeight);n.style.transform="rotateX("+s+"deg) rotateY("+a+"deg)",_.forEach((e=>{e.style.transform="translateX("+-a+"px) translateY("+s+"px)"})),m.forEach((e=>{e.style.backgroundPosition=.45*a+"px "+.45*-s+"px"}))}))}return t((()=>{o=document.querySelector("#pageX"),n=document.querySelector(".cards"),_=document.querySelectorAll(".card__img"),m=document.querySelectorAll(".card__bg"),o.addEventListener("mousemove",v,!1)})),r((()=>{o.removeEventListener("mousemove",v)})),(a,s)=>(l(),c("div",d,i))},__scopeId:"data-v-747b3891"};export{n as default};
