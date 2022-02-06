import{A as f,b as m,C as v,o as y,e as E}from"./vendor.b99b632f.js";import{T as L}from"./TileImage.0ebee0ae.js";import{B as S}from"./BingMaps.5a522d6d.js";import{bW as _,bZ as R,c8 as l,E as g,cc as b,bI as O,Q as p,R as C,S as c,bX as T,M as w,V as P,bY as I}from"./ol.bb58850a.js";import{_ as F}from"./index.b0d71010.js";import"./net.a0d7cd86.js";var M=globalThis&&globalThis.__extends||function(){var s=function(n,e){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},s(n,e)};return function(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");s(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}}(),d={VERTICAL:0,HORIZONTAL:1},N=function(s){M(n,s);function n(e){var t=this,i=e||{};t=s.call(this,{element:document.createElement("div"),render:i.render})||this,t.dragListenerKeys_=[],t.currentResolution_=void 0,t.direction_=d.VERTICAL,t.dragging_,t.heightLimit_=0,t.widthLimit_=0,t.startX_,t.startY_,t.thumbSize_=null,t.sliderInitialized_=!1,t.duration_=i.duration!==void 0?i.duration:200;var r=i.className!==void 0?i.className:"ol-zoomslider",o=document.createElement("button");o.setAttribute("type","button"),o.className=r+"-thumb "+_;var a=t.element;return a.className=r+" "+_+" "+R,a.appendChild(o),a.addEventListener(l.POINTERDOWN,t.handleDraggerStart_.bind(t),!1),a.addEventListener(l.POINTERMOVE,t.handleDraggerDrag_.bind(t),!1),a.addEventListener(l.POINTERUP,t.handleDraggerEnd_.bind(t),!1),a.addEventListener(g.CLICK,t.handleContainerClick_.bind(t),!1),o.addEventListener(g.CLICK,b,!1),t}return n.prototype.setMap=function(e){s.prototype.setMap.call(this,e),e&&e.render()},n.prototype.initSlider_=function(){var e=this.element,t=e.offsetWidth,i=e.offsetHeight;if(t===0&&i===0)return this.sliderInitialized_=!1;var r=getComputedStyle(e);t-=parseFloat(r.paddingRight)+parseFloat(r.paddingLeft),i-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom);var o=e.firstElementChild,a=getComputedStyle(o),h=o.offsetWidth+parseFloat(a.marginRight)+parseFloat(a.marginLeft),u=o.offsetHeight+parseFloat(a.marginTop)+parseFloat(a.marginBottom);return this.thumbSize_=[h,u],t>i?(this.direction_=d.HORIZONTAL,this.widthLimit_=t-h):(this.direction_=d.VERTICAL,this.heightLimit_=i-u),this.sliderInitialized_=!0},n.prototype.handleContainerClick_=function(e){var t=this.getMap().getView(),i=this.getRelativePosition_(e.offsetX-this.thumbSize_[0]/2,e.offsetY-this.thumbSize_[1]/2),r=this.getResolutionForPosition_(i),o=t.getConstrainedZoom(t.getZoomForResolution(r));t.animateInternal({zoom:o,duration:this.duration_,easing:O})},n.prototype.handleDraggerStart_=function(e){if(!this.dragging_&&e.target===this.element.firstElementChild){var t=this.element.firstElementChild;if(this.getMap().getView().beginInteraction(),this.startX_=e.clientX-parseFloat(t.style.left),this.startY_=e.clientY-parseFloat(t.style.top),this.dragging_=!0,this.dragListenerKeys_.length===0){var i=this.handleDraggerDrag_,r=this.handleDraggerEnd_,o=this.getMap().getOwnerDocument();this.dragListenerKeys_.push(p(o,l.POINTERMOVE,i,this),p(o,l.POINTERUP,r,this))}}},n.prototype.handleDraggerDrag_=function(e){if(this.dragging_){var t=e.clientX-this.startX_,i=e.clientY-this.startY_,r=this.getRelativePosition_(t,i);this.currentResolution_=this.getResolutionForPosition_(r),this.getMap().getView().setResolution(this.currentResolution_)}},n.prototype.handleDraggerEnd_=function(e){if(this.dragging_){var t=this.getMap().getView();t.endInteraction(),this.dragging_=!1,this.startX_=void 0,this.startY_=void 0,this.dragListenerKeys_.forEach(C),this.dragListenerKeys_.length=0}},n.prototype.setThumbPosition_=function(e){var t=this.getPositionForResolution_(e),i=this.element.firstElementChild;this.direction_==d.HORIZONTAL?i.style.left=this.widthLimit_*t+"px":i.style.top=this.heightLimit_*t+"px"},n.prototype.getRelativePosition_=function(e,t){var i;return this.direction_===d.HORIZONTAL?i=e/this.widthLimit_:i=t/this.heightLimit_,c(i,0,1)},n.prototype.getResolutionForPosition_=function(e){var t=this.getMap().getView().getResolutionForValueFunction();return t(1-e)},n.prototype.getPositionForResolution_=function(e){var t=this.getMap().getView().getValueForResolutionFunction();return c(1-t(e),0,1)},n.prototype.render=function(e){if(!!e.frameState&&!(!this.sliderInitialized_&&!this.initSlider_())){var t=e.frameState.viewState.resolution;this.currentResolution_=t,this.setThumbPosition_(t)}},n}(T),V=N;const x={id:"map",class:"map__x"},A={setup(s){const n=f(),e=m(null);function t(){e.value=new w({target:"map",layers:[new L({source:new S({key:"AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-",imagerySet:"Aerial"})})],view:new P({projection:"EPSG:4326",center:[114.064839,22.548857],zoom:6}),controls:I().extend([new V])})}return v(()=>{n.commit("setComponentPath","src/views/OpenLayers/Basic/pages/ZoomSlider/ZoomSlider.vue"),t()}),(i,r)=>(y(),E("div",x))}};var X=F(A,[["__scopeId","data-v-34b38ebe"]]);export{X as default};
