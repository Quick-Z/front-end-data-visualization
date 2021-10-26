import{b4 as t,b7 as e,bl as s,bm as i,bg as n,au as o,bn as r,aq as a,bo as h,bp as l,bk as d,bq as f,av as u,bb as p,br as c,bj as g,bs as y,g as _,bt as C,bu as v,bv as b,bw as P,bx as F,at as w,by as O,bz as x,bA as m,ba as R,bB as I,bC as L}from"./ol.bbcea228.js";import{l as E,L as A,i as j}from"./LineString.9ae0adb3.js";var D,M=(D=function(t,e){return(D=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function s(){this.constructor=t}D(t,e),t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)}),T=function(d){function f(e,s,i){var n=d.call(this)||this;if(n.ends_=[],n.maxDelta_=-1,n.maxDeltaRevision_=-1,Array.isArray(e[0]))n.setCoordinates(e,s);else if(void 0!==s&&i)n.setFlatCoordinates(s,e),n.ends_=i;else{for(var o=n.getLayout(),r=e,a=[],h=[],l=0,f=r.length;l<f;++l){var u=r[l];0===l&&(o=u.getLayout()),t(a,u.getFlatCoordinates()),h.push(a.length)}n.setFlatCoordinates(o,a),n.ends_=h}return n}return M(f,d),f.prototype.appendLineString=function(e){this.flatCoordinates?t(this.flatCoordinates,e.getFlatCoordinates().slice()):this.flatCoordinates=e.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()},f.prototype.clone=function(){var t=new f(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t},f.prototype.closestPointXY=function(t,n,o,r){return r<e(this.getExtent(),t,n)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(s(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),i(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,t,n,o,r))},f.prototype.getCoordinateAtM=function(t,e,s){if(this.layout!=n.XYM&&this.layout!=n.XYZM||0===this.flatCoordinates.length)return null;var i=void 0!==e&&e,o=void 0!==s&&s;return E(this.flatCoordinates,0,this.ends_,this.stride,t,i,o)},f.prototype.getCoordinates=function(){return o(this.flatCoordinates,0,this.ends_,this.stride)},f.prototype.getEnds=function(){return this.ends_},f.prototype.getLineString=function(t){return t<0||this.ends_.length<=t?null:new A(this.flatCoordinates.slice(0===t?0:this.ends_[t-1],this.ends_[t]),this.layout)},f.prototype.getLineStrings=function(){for(var t=this.flatCoordinates,e=this.ends_,s=this.layout,i=[],n=0,o=0,r=e.length;o<r;++o){var a=e[o],h=new A(t.slice(n,a),s);i.push(h),n=a}return i},f.prototype.getFlatMidpoints=function(){for(var e=[],s=this.flatCoordinates,i=0,n=this.ends_,o=this.stride,r=0,a=n.length;r<a;++r){var h=n[r],l=j(s,i,h,o,.5);t(e,l),i=h}return e},f.prototype.getSimplifiedGeometryInternal=function(t){var e=[],s=[];return e.length=r(this.flatCoordinates,0,this.ends_,this.stride,t,e,0,s),new f(e,n.XY,s)},f.prototype.getType=function(){return a.MULTI_LINE_STRING},f.prototype.intersectsExtent=function(t){return h(this.flatCoordinates,0,this.ends_,this.stride,t)},f.prototype.setCoordinates=function(t,e){this.setLayout(e,t,2),this.flatCoordinates||(this.flatCoordinates=[]);var s=l(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=0===s.length?0:s[s.length-1],this.changed()},f}(d),S=function(){var t=function(e,s){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])})(e,s)};return function(e,s){if("function"!=typeof s&&null!==s)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");function i(){this.constructor=e}t(e,s),e.prototype=null===s?Object.create(s):(i.prototype=s.prototype,new i)}}(),Y=function(s){function i(t,e){var i=s.call(this)||this;return e&&!Array.isArray(t[0])?i.setFlatCoordinates(e,t):i.setCoordinates(t,e),i}return S(i,s),i.prototype.appendPoint=function(e){this.flatCoordinates?t(this.flatCoordinates,e.getFlatCoordinates()):this.flatCoordinates=e.getFlatCoordinates().slice(),this.changed()},i.prototype.clone=function(){var t=new i(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t},i.prototype.closestPointXY=function(t,s,i,n){if(n<e(this.getExtent(),t,s))return n;for(var o=this.flatCoordinates,r=this.stride,a=0,h=o.length;a<h;a+=r){var l=f(t,s,o[a],o[a+1]);if(l<n){n=l;for(var d=0;d<r;++d)i[d]=o[a+d];i.length=r}}return n},i.prototype.getCoordinates=function(){return u(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},i.prototype.getPoint=function(t){var e=this.flatCoordinates?this.flatCoordinates.length/this.stride:0;return t<0||e<=t?null:new p(this.flatCoordinates.slice(t*this.stride,(t+1)*this.stride),this.layout)},i.prototype.getPoints=function(){for(var t=this.flatCoordinates,e=this.layout,s=this.stride,i=[],n=0,o=t.length;n<o;n+=s){var r=new p(t.slice(n,n+s),e);i.push(r)}return i},i.prototype.getType=function(){return a.MULTI_POINT},i.prototype.intersectsExtent=function(t){for(var e=this.flatCoordinates,s=this.stride,i=0,n=e.length;i<n;i+=s){var o=e[i],r=e[i+1];if(c(t,o,r))return!0}return!1},i.prototype.setCoordinates=function(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=g(this.flatCoordinates,0,t,this.stride),this.changed()},i}(d);var X=function(){var t=function(e,s){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])})(e,s)};return function(e,s){if("function"!=typeof s&&null!==s)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");function i(){this.constructor=e}t(e,s),e.prototype=null===s?Object.create(s):(i.prototype=s.prototype,new i)}}(),q=function(s){function i(e,i,n){var o=s.call(this)||this;if(o.endss_=[],o.flatInteriorPointsRevision_=-1,o.flatInteriorPoints_=null,o.maxDelta_=-1,o.maxDeltaRevision_=-1,o.orientedRevision_=-1,o.orientedFlatCoordinates_=null,!n&&!Array.isArray(e[0])){for(var r=o.getLayout(),a=e,h=[],l=[],d=0,f=a.length;d<f;++d){var u=a[d];0===d&&(r=u.getLayout());for(var p=h.length,c=u.getEnds(),g=0,y=c.length;g<y;++g)c[g]+=p;t(h,u.getFlatCoordinates()),l.push(c)}i=r,e=h,n=l}return void 0!==i&&n?(o.setFlatCoordinates(i,e),o.endss_=n):o.setCoordinates(e,i),o}return X(i,s),i.prototype.appendPolygon=function(e){var s;if(this.flatCoordinates){var i=this.flatCoordinates.length;t(this.flatCoordinates,e.getFlatCoordinates());for(var n=0,o=(s=e.getEnds().slice()).length;n<o;++n)s[n]+=i}else this.flatCoordinates=e.getFlatCoordinates().slice(),s=e.getEnds().slice(),this.endss_.push();this.endss_.push(s),this.changed()},i.prototype.clone=function(){for(var t=this.endss_.length,e=new Array(t),s=0;s<t;++s)e[s]=this.endss_[s].slice();var n=new i(this.flatCoordinates.slice(),this.layout,e);return n.applyProperties(this),n},i.prototype.closestPointXY=function(t,s,i,n){return n<e(this.getExtent(),t,s)?n:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(C(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),v(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,t,s,i,n))},i.prototype.containsXY=function(t,e){return b(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t,e)},i.prototype.getArea=function(){return P(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)},i.prototype.getCoordinates=function(t){var e;return void 0!==t?(e=this.getOrientedFlatCoordinates().slice(),F(e,0,this.endss_,this.stride,t)):e=this.flatCoordinates,w(e,0,this.endss_,this.stride)},i.prototype.getEndss=function(){return this.endss_},i.prototype.getFlatInteriorPoints=function(){if(this.flatInteriorPointsRevision_!=this.getRevision()){var t=function(t,e,s,i){for(var n=[],o=_(),r=0,a=s.length;r<a;++r){var h=s[r];o=y(t,e,h[0],i),n.push((o[0]+o[2])/2,(o[1]+o[3])/2),e=h[h.length-1]}return n}(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=O(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_},i.prototype.getInteriorPoints=function(){return new Y(this.getFlatInteriorPoints().slice(),n.XYM)},i.prototype.getOrientedFlatCoordinates=function(){if(this.orientedRevision_!=this.getRevision()){var t=this.flatCoordinates;x(t,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=F(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_},i.prototype.getSimplifiedGeometryInternal=function(t){var e=[],s=[];return e.length=m(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(t),e,0,s),new i(e,n.XY,s)},i.prototype.getPolygon=function(t){if(t<0||this.endss_.length<=t)return null;var e;if(0===t)e=0;else{var s=this.endss_[t-1];e=s[s.length-1]}var i=this.endss_[t].slice(),n=i[i.length-1];if(0!==e)for(var o=0,r=i.length;o<r;++o)i[o]-=e;return new R(this.flatCoordinates.slice(e,n),this.layout,i)},i.prototype.getPolygons=function(){for(var t=this.layout,e=this.flatCoordinates,s=this.endss_,i=[],n=0,o=0,r=s.length;o<r;++o){var a=s[o].slice(),h=a[a.length-1];if(0!==n)for(var l=0,d=a.length;l<d;++l)a[l]-=n;var f=new R(e.slice(n,h),t,a);i.push(f),n=h}return i},i.prototype.getType=function(){return a.MULTI_POLYGON},i.prototype.intersectsExtent=function(t){return I(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t)},i.prototype.setCoordinates=function(t,e){this.setLayout(e,t,3),this.flatCoordinates||(this.flatCoordinates=[]);var s=L(this.flatCoordinates,0,t,this.stride,this.endss_);if(0===s.length)this.flatCoordinates.length=0;else{var i=s[s.length-1];this.flatCoordinates.length=0===i.length?0:i[i.length-1]}this.changed()},i}(d);export{q as M,T as a,Y as b};
