import{bd as w,aL as A,b5 as L,b8 as P,be as j,bf as D,bg as E,bh as C,au as T,bi as G,ar as O,bj as X,bk as Y,bl as N}from"./ol.bb58850a.js";import{l as F}from"./Vector.c1a6c122.js";function I(e,n,i,t,r,a,s){var o,l,c=(i-n)/t;if(c===1)o=n;else if(c===2)o=n,l=r;else if(c!==0){for(var h=e[n],v=e[n+1],g=0,p=[0],u=n+t;u<i;u+=t){var y=e[u],_=e[u+1];g+=Math.sqrt((y-h)*(y-h)+(_-v)*(_-v)),p.push(g),h=y,v=_}var S=r*g,f=w(p,S);f<0?(l=(S-p[-f-2])/(p[-f-1]-p[-f-2]),o=n+(-f-2)*t):o=n+f*t}for(var b=s>1?s:2,R=a||new Array(b),u=0;u<b;++u)R[u]=o===void 0?NaN:l===void 0?e[o+u]:A(e[o+u],e[o+t+u],l);return R}function M(e,n,i,t,r,a){if(i==n)return null;var s;if(r<e[n+t-1])return a?(s=e.slice(n,n+t),s[t-1]=r,s):null;if(e[i-1]<r)return a?(s=e.slice(i-t,i),s[t-1]=r,s):null;if(r==e[n+t-1])return e.slice(n,n+t);for(var o=n/t,l=i/t;o<l;){var c=o+l>>1;r<e[(c+1)*t-1]?l=c:o=c+1}var h=e[o*t-1];if(r==h)return e.slice((o-1)*t,(o-1)*t+t);var v=e[(o+1)*t-1],g=(r-h)/(v-h);s=[];for(var p=0;p<t-1;++p)s.push(A(e[(o-1)*t+p],e[o*t+p],g));return s.push(r),s}function V(e,n,i,t,r,a,s){if(s)return M(e,n,i[i.length-1],t,r,a);var o;if(r<e[t-1])return a?(o=e.slice(0,t),o[t-1]=r,o):null;if(e[e.length-1]<r)return a?(o=e.slice(e.length-t),o[t-1]=r,o):null;for(var l=0,c=i.length;l<c;++l){var h=i[l];if(n!=h){if(r<e[n+t-1])return null;if(r<=e[h-1])return M(e,n,h,t,r,!1);n=h}}return null}var d=globalThis&&globalThis.__extends||function(){var e=function(n,i){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])},e(n,i)};return function(n,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");e(n,i);function t(){this.constructor=n}n.prototype=i===null?Object.create(i):(t.prototype=i.prototype,new t)}}(),k=function(e){d(n,e);function n(i,t){var r=e.call(this)||this;return r.flatMidpoint_=null,r.flatMidpointRevision_=-1,r.maxDelta_=-1,r.maxDeltaRevision_=-1,t!==void 0&&!Array.isArray(i[0])?r.setFlatCoordinates(t,i):r.setCoordinates(i,t),r}return n.prototype.appendCoordinate=function(i){this.flatCoordinates?L(this.flatCoordinates,i):this.flatCoordinates=i.slice(),this.changed()},n.prototype.clone=function(){var i=new n(this.flatCoordinates.slice(),this.layout);return i.applyProperties(this),i},n.prototype.closestPointXY=function(i,t,r,a){return a<P(this.getExtent(),i,t)?a:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(j(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),D(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,i,t,r,a))},n.prototype.forEachSegment=function(i){return E(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,i)},n.prototype.getCoordinateAtM=function(i,t){if(this.layout!=C.XYM&&this.layout!=C.XYZM)return null;var r=t!==void 0?t:!1;return M(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,i,r)},n.prototype.getCoordinates=function(){return T(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},n.prototype.getCoordinateAt=function(i,t){return I(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,i,t,this.stride)},n.prototype.getLength=function(){return F(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},n.prototype.getFlatMidpoint=function(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_},n.prototype.getSimplifiedGeometryInternal=function(i){var t=[];return t.length=G(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,i,t,0),new n(t,C.XY)},n.prototype.getType=function(){return O.LINE_STRING},n.prototype.intersectsExtent=function(i){return X(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,i)},n.prototype.setCoordinates=function(i,t){this.setLayout(t,i,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Y(this.flatCoordinates,0,i,this.stride),this.changed()},n}(N),Z=k;export{Z as L,I as i,V as l};