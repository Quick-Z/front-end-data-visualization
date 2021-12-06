import{p as t,b as e,C as s,d as r,A as o,f as n,o as i}from"./vendor.8623c498.js";import{T as a}from"./TileImage.6719d572.js";import{O as c}from"./OSM.b07225a9.js";import{a as u,S as p,L as f,b as l,e as h,c as d,d as m}from"./Vector.d80cd09d.js";import{d as y,aq as v,E as g,j as w,ce as b,aC as _,cf as D,cg as j,I as C,bb as F,g as O,M as x,V as E}from"./ol.bbcea228.js";import{T as M}from"./Text.3f45d4c4.js";import"./XYZ.4ee3e030.js";var R,S=(R=function(t,e){return(R=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function s(){this.constructor=t}R(t,e),t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)}),T=function(t){function e(e){var s=t.call(this,{attributions:e.attributions,wrapX:e.wrapX})||this;return s.resolution=void 0,s.distance=void 0!==e.distance?e.distance:20,s.minDistance=e.minDistance||0,s.interpolationRatio=0,s.features=[],s.geometryFunction=e.geometryFunction||function(t){var e=t.getGeometry();return y(e.getType()==v.POINT,10),e},s.source=null,s.boundRefresh_=s.refresh.bind(s),s.updateDistance(s.distance,s.minDistance),s.setSource(e.source||null),s}return S(e,t),e.prototype.clear=function(e){this.features.length=0,t.prototype.clear.call(this,e)},e.prototype.getDistance=function(){return this.distance},e.prototype.getSource=function(){return this.source},e.prototype.loadFeatures=function(t,e,s){this.source.loadFeatures(t,e,s),e!==this.resolution&&(this.resolution=e,this.refresh())},e.prototype.setDistance=function(t){this.updateDistance(t,this.minDistance)},e.prototype.setMinDistance=function(t){this.updateDistance(this.distance,t)},e.prototype.getMinDistance=function(){return this.minDistance},e.prototype.setSource=function(t){this.source&&this.source.removeEventListener(g.CHANGE,this.boundRefresh_),this.source=t,t&&t.addEventListener(g.CHANGE,this.boundRefresh_),this.refresh()},e.prototype.refresh=function(){this.clear(),this.cluster(),this.addFeatures(this.features)},e.prototype.updateDistance=function(t,e){var s=0===t?0:Math.min(e,t)/t,r=t!==this.distance||this.interpolationRatio!==s;this.distance=t,this.minDistance=e,this.interpolationRatio=s,r&&this.refresh()},e.prototype.cluster=function(){if(void 0!==this.resolution&&this.source)for(var t=O(),e=this.distance*this.resolution,s=this.source.getFeatures(),r={},o=0,n=s.length;o<n;o++){var i=s[o];if(!(w(i)in r)){var a=this.geometryFunction(i);if(a){var c=a.getCoordinates();b(c,t),_(t,e,t);var u=this.source.getFeaturesInExtent(t).filter((function(t){var e=w(t);return!(e in r)&&(r[e]=!0,!0)}));this.features.push(this.createCluster(u,t))}}}},e.prototype.createCluster=function(t,e){for(var s=[0,0],r=t.length-1;r>=0;--r){var o=this.geometryFunction(t[r]);o?D(s,o.getCoordinates()):t.splice(r,1)}j(s,1/t.length);var n=C(e),i=this.interpolationRatio,a=new F([s[0]*(1-i)+n[0]*i,s[1]*(1-i)+n[1]*i]),c=new u(a);return c.set("features",t,!0),c},e}(p);t("data-v-7c6816bf");const I={id:"map",class:"map__x"};e();const P={setup(t){const e=s(),y=r(null);let v=[],g=45e5;for(let s=0;s<2e4;++s){let t=[2*g*Math.random()-g,2*g*Math.random()-g];v[s]=new u(new F(t))}let w=new p({features:v}),b=new T({distance:parseInt(40,10),source:w}),_={},D=new f({source:b,style:t=>{let e=t.get("features").length,s=_[e];return s||(s=new l({image:new h({radius:10,stroke:new d({color:"#fff"}),fill:new m({color:"#3399cc"})}),text:new M({text:e.toString(),fill:new m({color:"#fff"})})}),_[e]=s),s}}),j=new a({source:new c});return o((()=>{e.commit("setComponentPath","src/views/OpenLayers/Basic/pages/Polymerization/Polymerization.vue"),y.value=new x({target:"map",layers:[j,D],view:new E({center:[0,0],zoom:2})})})),(t,e)=>(i(),n("div",I))},__scopeId:"data-v-7c6816bf"};export{P as default};
