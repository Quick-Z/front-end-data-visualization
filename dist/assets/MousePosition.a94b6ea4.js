import{A as m,b as p,C as M,o as v,e as P,f as u,F as g,s as T,v as y}from"./vendor.b99b632f.js";import{T as j}from"./TileImage.0ebee0ae.js";import{B as O}from"./BingMaps.5a522d6d.js";import{Q as d,c8 as f,_ as S,ah as _,c9 as x,bX as w,ca as C,M as L,V as E,bY as F,cb as H}from"./ol.bb58850a.js";import{_ as N}from"./index.b0d71010.js";import"./net.a0d7cd86.js";var B=globalThis&&globalThis.__extends||function(){var r=function(n,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])},r(n,t)};return function(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(n,t);function e(){this.constructor=n}n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}}(),c="projection",h="coordinateFormat",I=function(r){B(n,r);function n(t){var e=this,o=t||{},s=document.createElement("div");s.className=o.className!==void 0?o.className:"ol-mouse-position",e=r.call(this,{element:s,render:o.render,target:o.target})||this,e.on,e.once,e.un,e.addChangeListener(c,e.handleProjectionChanged_),o.coordinateFormat&&e.setCoordinateFormat(o.coordinateFormat),o.projection&&e.setProjection(o.projection);var i=!0,a="&#160;";return"undefinedHTML"in o?(o.undefinedHTML!==void 0&&(a=o.undefinedHTML),i=!!a):"placeholder"in o&&(o.placeholder===!1?i=!1:a=String(o.placeholder)),e.placeholder_=a,e.renderOnMouseOut_=i,e.renderedHTML_=s.innerHTML,e.mapProjection_=null,e.transform_=null,e}return n.prototype.handleProjectionChanged_=function(){this.transform_=null},n.prototype.getCoordinateFormat=function(){return this.get(h)},n.prototype.getProjection=function(){return this.get(c)},n.prototype.handleMouseMove=function(t){var e=this.getMap();this.updateHTML_(e.getEventPixel(t))},n.prototype.handleMouseOut=function(t){this.updateHTML_(null)},n.prototype.setMap=function(t){if(r.prototype.setMap.call(this,t),t){var e=t.getViewport();this.listenerKeys.push(d(e,f.POINTERMOVE,this.handleMouseMove,this)),this.renderOnMouseOut_&&this.listenerKeys.push(d(e,f.POINTEROUT,this.handleMouseOut,this)),this.updateHTML_(null)}},n.prototype.setCoordinateFormat=function(t){this.set(h,t)},n.prototype.setProjection=function(t){this.set(c,S(t))},n.prototype.updateHTML_=function(t){var e=this.placeholder_;if(t&&this.mapProjection_){if(!this.transform_){var o=this.getProjection();o?this.transform_=_(this.mapProjection_,o):this.transform_=x}var s=this.getMap(),i=s.getCoordinateFromPixelInternal(t);if(i){var a=C();a&&(this.transform_=_(this.mapProjection_,a)),this.transform_(i,i);var l=this.getCoordinateFormat();l?e=l(i):e=i.toString()}}(!this.renderedHTML_||e!==this.renderedHTML_)&&(this.element.innerHTML=e,this.renderedHTML_=e)},n.prototype.render=function(t){var e=t.frameState;e?this.mapProjection_!=e.viewState.projection&&(this.mapProjection_=e.viewState.projection,this.transform_=null):this.mapProjection_=null},n}(w),b=I;const U=r=>(T("data-v-a7b1494a"),r=r(),y(),r),A=U(()=>u("div",{id:"map",class:"map__x"},null,-1)),R={setup(r){const n=m(),t=p(null),e=p(null);function o(){e.value=new L({target:"map",layers:[new j({source:new O({key:"AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-",imagerySet:"Aerial"})})],view:new E({projection:"EPSG:4326",center:[114.064839,22.548857],zoom:6}),controls:F().extend([new b({coordinateFormat:H(4),projection:"EPSG:4326",target:t.value})])})}return M(()=>{n.commit("setComponentPath","src/views/OpenLayers/Basic/pages/MousePosition/MousePosition.vue"),o()}),(s,i)=>(v(),P(g,null,[A,u("div",{ref:(a,l)=>{l.mousePositionTxt=a,t.value=a},class:"mouse__position__txt"},null,512)],64))}};var D=N(R,[["__scopeId","data-v-a7b1494a"]]);export{D as default};
