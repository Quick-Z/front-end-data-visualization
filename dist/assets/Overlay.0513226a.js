import{a7 as t,a8 as e,a9 as n,Q as i,P as o,aa as s,ab as r,ac as a,ad as p,ae as l}from"./ol.bbcea228.js";var h,d={BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right",CENTER_LEFT:"center-left",CENTER_CENTER:"center-center",CENTER_RIGHT:"center-right",TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right"},f=(h=function(t,e){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}h(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u="element",g="map",c="offset",m="position",E="positioning",T=function(l){function h(e){var n=l.call(this)||this;n.on,n.once,n.un,n.options=e,n.id=e.id,n.insertFirst=void 0===e.insertFirst||e.insertFirst,n.stopEvent=void 0===e.stopEvent||e.stopEvent,n.element=document.createElement("div"),n.element.className=void 0!==e.className?e.className:"ol-overlay-container "+t,n.element.style.position="absolute",n.element.style.pointerEvents="auto";var i=e.autoPan;return i&&"object"!=typeof i&&(i={animation:e.autoPanAnimation,margin:e.autoPanMargin}),n.autoPan=i||!1,n.rendered={transform_:"",visible:!0},n.mapPostrenderListenerKey=null,n.addChangeListener(u,n.handleElementChanged),n.addChangeListener(g,n.handleMapChanged),n.addChangeListener(c,n.handleOffsetChanged),n.addChangeListener(m,n.handlePositionChanged),n.addChangeListener(E,n.handlePositioningChanged),void 0!==e.element&&n.setElement(e.element),n.setOffset(void 0!==e.offset?e.offset:[0,0]),n.setPositioning(void 0!==e.positioning?e.positioning:d.TOP_LEFT),void 0!==e.position&&n.setPosition(e.position),n}return f(h,l),h.prototype.getElement=function(){return this.get(u)},h.prototype.getId=function(){return this.id},h.prototype.getMap=function(){return this.get(g)},h.prototype.getOffset=function(){return this.get(c)},h.prototype.getPosition=function(){return this.get(m)},h.prototype.getPositioning=function(){return this.get(E)},h.prototype.handleElementChanged=function(){e(this.element);var t=this.getElement();t&&this.element.appendChild(t)},h.prototype.handleMapChanged=function(){this.mapPostrenderListenerKey&&(n(this.element),i(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);var t=this.getMap();if(t){this.mapPostrenderListenerKey=o(t,s.POSTRENDER,this.render,this),this.updatePixelPosition();var e=this.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this.insertFirst?e.insertBefore(this.element,e.childNodes[0]||null):e.appendChild(this.element),this.performAutoPan()}},h.prototype.render=function(){this.updatePixelPosition()},h.prototype.handleOffsetChanged=function(){this.updatePixelPosition()},h.prototype.handlePositionChanged=function(){this.updatePixelPosition(),this.performAutoPan()},h.prototype.handlePositioningChanged=function(){this.updatePixelPosition()},h.prototype.setElement=function(t){this.set(u,t)},h.prototype.setMap=function(t){this.set(g,t)},h.prototype.setOffset=function(t){this.set(c,t)},h.prototype.setPosition=function(t){this.set(m,t)},h.prototype.performAutoPan=function(){this.autoPan&&this.panIntoView(this.autoPan)},h.prototype.panIntoView=function(t){var e=this.getMap();if(e&&e.getTargetElement()&&this.get(m)){var n=this.getRect(e.getTargetElement(),e.getSize()),i=this.getElement(),o=this.getRect(i,[r(i),a(i)]),s=t||{},l=void 0===s.margin?20:s.margin;if(!p(n,o)){var h=o[0]-n[0],d=n[2]-o[2],f=o[1]-n[1],u=n[3]-o[3],g=[0,0];if(h<0?g[0]=h-l:d<0&&(g[0]=Math.abs(d)+l),f<0?g[1]=f-l:u<0&&(g[1]=Math.abs(u)+l),0!==g[0]||0!==g[1]){var c=e.getView().getCenterInternal(),E=e.getPixelFromCoordinateInternal(c);if(!E)return;var T=[E[0]+g[0],E[1]+g[1]],P=s.animation||{};e.getView().animateInternal({center:e.getCoordinateFromPixelInternal(T),duration:P.duration,easing:P.easing})}}}},h.prototype.getRect=function(t,e){var n=t.getBoundingClientRect(),i=n.left+window.pageXOffset,o=n.top+window.pageYOffset;return[i,o,i+e[0],o+e[1]]},h.prototype.setPositioning=function(t){this.set(E,t)},h.prototype.setVisible=function(t){this.rendered.visible!==t&&(this.element.style.display=t?"":"none",this.rendered.visible=t)},h.prototype.updatePixelPosition=function(){var t=this.getMap(),e=this.getPosition();if(t&&t.isRendered()&&e){var n=t.getPixelFromCoordinate(e),i=t.getSize();this.updateRenderedPosition(n,i)}else this.setVisible(!1)},h.prototype.updateRenderedPosition=function(t,e){var n=this.element.style,i=this.getOffset(),o=this.getPositioning();this.setVisible(!0);var s=Math.round(t[0]+i[0])+"px",r=Math.round(t[1]+i[1])+"px",a="0%",p="0%";o==d.BOTTOM_RIGHT||o==d.CENTER_RIGHT||o==d.TOP_RIGHT?a="-100%":o!=d.BOTTOM_CENTER&&o!=d.CENTER_CENTER&&o!=d.TOP_CENTER||(a="-50%"),o==d.BOTTOM_LEFT||o==d.BOTTOM_CENTER||o==d.BOTTOM_RIGHT?p="-100%":o!=d.CENTER_LEFT&&o!=d.CENTER_CENTER&&o!=d.CENTER_RIGHT||(p="-50%");var l="translate("+a+", "+p+") translate("+s+", "+r+")";this.rendered.transform_!=l&&(this.rendered.transform_=l,n.transform=l,n.msTransform=l)},h.prototype.getOptions=function(){return this.options},h}(l);export{T as O,d as a};
