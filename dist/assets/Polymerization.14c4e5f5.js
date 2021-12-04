import{C,b as x,A as D,o as S,e as T}from"./vendor.87a044ad.js";import{T as b}from"./TileImage.0ebee0ae.js";import{O as j}from"./OSM.7622e957.js";import{a as m,S as y,L as F,b as M,e as O,c as E,d as _}from"./Vector.c1a6c122.js";import{d as P,ar as R,E as v,j as g,ce as z,aD as I,cf as L,cg as V,J as k,bc as w,g as A,M as G,V as B}from"./ol.bb58850a.js";import{_ as N}from"./index.79183bd5.js";import{T as X}from"./Text.cc0ffa7e.js";import"./XYZ.0d304f3a.js";var H=globalThis&&globalThis.__extends||function(){var i=function(s,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},i(s,e)};return function(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(s,e);function t(){this.constructor=s}s.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}}(),U=function(i){H(s,i);function s(e){var t=i.call(this,{attributions:e.attributions,wrapX:e.wrapX})||this;return t.resolution=void 0,t.distance=e.distance!==void 0?e.distance:20,t.minDistance=e.minDistance||0,t.interpolationRatio=0,t.features=[],t.geometryFunction=e.geometryFunction||function(r){var n=r.getGeometry();return P(n.getType()==R.POINT,10),n},t.createCustomCluster_=e.createCluster,t.source=null,t.boundRefresh_=t.refresh.bind(t),t.updateDistance(t.distance,t.minDistance),t.setSource(e.source||null),t}return s.prototype.clear=function(e){this.features.length=0,i.prototype.clear.call(this,e)},s.prototype.getDistance=function(){return this.distance},s.prototype.getSource=function(){return this.source},s.prototype.loadFeatures=function(e,t,r){this.source.loadFeatures(e,t,r),t!==this.resolution&&(this.resolution=t,this.refresh())},s.prototype.setDistance=function(e){this.updateDistance(e,this.minDistance)},s.prototype.setMinDistance=function(e){this.updateDistance(this.distance,e)},s.prototype.getMinDistance=function(){return this.minDistance},s.prototype.setSource=function(e){this.source&&this.source.removeEventListener(v.CHANGE,this.boundRefresh_),this.source=e,e&&e.addEventListener(v.CHANGE,this.boundRefresh_),this.refresh()},s.prototype.refresh=function(){this.clear(),this.cluster(),this.addFeatures(this.features)},s.prototype.updateDistance=function(e,t){var r=e===0?0:Math.min(t,e)/e,n=e!==this.distance||this.interpolationRatio!==r;this.distance=e,this.minDistance=t,this.interpolationRatio=r,n&&this.refresh()},s.prototype.cluster=function(){if(!(this.resolution===void 0||!this.source))for(var e=A(),t=this.distance*this.resolution,r=this.source.getFeatures(),n={},c=0,f=r.length;c<f;c++){var o=r[c];if(!(g(o)in n)){var l=this.geometryFunction(o);if(l){var h=l.getCoordinates();z(h,e),I(e,t,e);var d=this.source.getFeaturesInExtent(e).filter(function(u){var a=g(u);return a in n?!1:(n[a]=!0,!0)});this.features.push(this.createCluster(d,e))}}}},s.prototype.createCluster=function(e,t){for(var r=[0,0],n=e.length-1;n>=0;--n){var c=this.geometryFunction(e[n]);c?L(r,c.getCoordinates()):e.splice(n,1)}V(r,1/e.length);var f=k(t),o=this.interpolationRatio,l=new w([r[0]*(1-o)+f[0]*o,r[1]*(1-o)+f[1]*o]);return this.createCustomCluster_?this.createCustomCluster_(l,e):new m({geometry:l,features:e})},s}(y),J=U;const Y={id:"map",class:"map__x"},Z={setup(i){const s=C(),e=x(null);let t=2e4,r=[],n=45e5;for(let u=0;u<t;++u){let a=[2*n*Math.random()-n,2*n*Math.random()-n];r[u]=new m(new w(a))}let c=new y({features:r}),f=new J({distance:parseInt(40,10),source:c}),o={},l=new F({source:f,style:u=>{let a=u.get("features").length,p=o[a];return p||(p=new M({image:new O({radius:10,stroke:new E({color:"#fff"}),fill:new _({color:"#3399cc"})}),text:new X({text:a.toString(),fill:new _({color:"#fff"})})}),o[a]=p),p}}),h=new b({source:new j});function d(){e.value=new G({target:"map",layers:[h,l],view:new B({center:[0,0],zoom:2})})}return D(()=>{s.commit("setComponentPath","src/views/OpenLayers/Basic/pages/Polymerization/Polymerization.vue"),d()}),(u,a)=>(S(),T("div",Y))}};var se=N(Z,[["__scopeId","data-v-7c6816bf"]]);export{se as default};
