import{p as t,b as e,A as o,d as n,C as a,f as r,o as s}from"./vendor.ab550d3c.js";import{T as i}from"./TileImage.6719d572.js";import{B as l}from"./BingMaps.f431ad9d.js";import{E as c,c0 as p,bX as u,bW as d,bZ as m,M as f,V as v,bY as x}from"./ol.bbcea228.js";import"./net.5778e213.js";var b,h=(b=function(t,e){return(b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}b(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),y=function(t){function e(e){var o=this,n=e||{};(o=t.call(this,{element:document.createElement("div"),target:n.target})||this).extent=n.extent?n.extent:null;var a=void 0!==n.className?n.className:"ol-zoom-extent",r=void 0!==n.label?n.label:"E",s=void 0!==n.tipLabel?n.tipLabel:"Fit to extent",i=document.createElement("button");i.setAttribute("type","button"),i.title=s,i.appendChild("string"==typeof r?document.createTextNode(r):r),i.addEventListener(c.CLICK,o.handleClick_.bind(o),!1);var l=a+" "+d+" "+m,p=o.element;return p.className=l,p.appendChild(i),o}return h(e,t),e.prototype.handleClick_=function(t){t.preventDefault(),this.handleZoomToExtent()},e.prototype.handleZoomToExtent=function(){var t=this.getMap().getView(),e=this.extent?this.extent:t.getProjection().getExtent();t.fitInternal(p(e))},e}(u);t("data-v-2f574447");const _={id:"map",class:"map__x"};e();const g={setup(t){const e=o(),c=n(null);return a((()=>{e.commit("setComponentPath","src/views/OpenLayers/Basic/pages/ZoomToExtent/ZoomToExtent.vue"),c.value=new f({target:"map",layers:[new i({source:new l({key:"AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-",imagerySet:"Aerial"})})],view:new v({projection:"EPSG:4326",center:[114.064839,22.548857],zoom:12}),controls:x().extend([new y({extent:[813079.7791264898,5929220.284081122,848966.9639063801,5936863.986909639]})])})})),(t,e)=>(s(),r("div",_))},__scopeId:"data-v-2f574447"};export{g as default};
