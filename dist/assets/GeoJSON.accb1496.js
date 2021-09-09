import{l as t,L as e,i as r,F as o,a as n}from"./Vector.e623616e.js";import{ak as i,al as s,bh as a,bi as u,ap as c,aH as p,bj as h,as as l,bk as f,bl as d,av as y,bm as g,aq as _,bn as v,bo as m,au as C,bp as O,g as P,bq as b,br as F,bs as j,bt as w,bu as G,aG as E,bv as T,bw as I,bx as x,by as L,bz as N,bA as R,Q as S,P as M,E as A,bB as Y,F as k,I as X,bC as D,Z as U,a3 as q,$ as J,f as H,a as K,d as Z,b2 as z}from"./ol.c16104b5.js";var B,Q=(B=function(t,e){return(B=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}B(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),V=function(o){function n(t,e,r){var n=o.call(this)||this;if(n.ends_=[],n.maxDelta_=-1,n.maxDeltaRevision_=-1,Array.isArray(t[0]))n.setCoordinates(t,e);else if(void 0!==e&&r)n.setFlatCoordinates(e,t),n.ends_=r;else{for(var s=n.getLayout(),a=t,u=[],c=[],p=0,h=a.length;p<h;++p){var l=a[p];0===p&&(s=l.getLayout()),i(u,l.getFlatCoordinates()),c.push(u.length)}n.setFlatCoordinates(s,u),n.ends_=c}return n}return Q(n,o),n.prototype.appendLineString=function(t){this.flatCoordinates?i(this.flatCoordinates,t.getFlatCoordinates().slice()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()},n.prototype.clone=function(){var t=new n(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t},n.prototype.closestPointXY=function(t,e,r,o){return o<s(this.getExtent(),t,e)?o:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(a(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),u(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,t,e,r,o))},n.prototype.getCoordinateAtM=function(e,r,o){if(this.layout!=c.XYM&&this.layout!=c.XYZM||0===this.flatCoordinates.length)return null;var n=void 0!==r&&r,i=void 0!==o&&o;return t(this.flatCoordinates,0,this.ends_,this.stride,e,n,i)},n.prototype.getCoordinates=function(){return p(this.flatCoordinates,0,this.ends_,this.stride)},n.prototype.getEnds=function(){return this.ends_},n.prototype.getLineString=function(t){return t<0||this.ends_.length<=t?null:new e(this.flatCoordinates.slice(0===t?0:this.ends_[t-1],this.ends_[t]),this.layout)},n.prototype.getLineStrings=function(){for(var t=this.flatCoordinates,r=this.ends_,o=this.layout,n=[],i=0,s=0,a=r.length;s<a;++s){var u=r[s],c=new e(t.slice(i,u),o);n.push(c),i=u}return n},n.prototype.getFlatMidpoints=function(){for(var t=[],e=this.flatCoordinates,o=0,n=this.ends_,s=this.stride,a=0,u=n.length;a<u;++a){var c=n[a],p=r(e,o,c,s,.5);i(t,p),o=c}return t},n.prototype.getSimplifiedGeometryInternal=function(t){var e=[],r=[];return e.length=h(this.flatCoordinates,0,this.ends_,this.stride,t,e,0,r),new n(e,c.XY,r)},n.prototype.getType=function(){return l.MULTI_LINE_STRING},n.prototype.intersectsExtent=function(t){return f(this.flatCoordinates,0,this.ends_,this.stride,t)},n.prototype.setCoordinates=function(t,e){this.setLayout(e,t,2),this.flatCoordinates||(this.flatCoordinates=[]);var r=d(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=0===r.length?0:r[r.length-1],this.changed()},n}(y),W=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),$=function(t){function e(e,r){var o=t.call(this)||this;return r&&!Array.isArray(e[0])?o.setFlatCoordinates(r,e):o.setCoordinates(e,r),o}return W(e,t),e.prototype.appendPoint=function(t){this.flatCoordinates?i(this.flatCoordinates,t.getFlatCoordinates()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.changed()},e.prototype.clone=function(){var t=new e(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t},e.prototype.closestPointXY=function(t,e,r,o){if(o<s(this.getExtent(),t,e))return o;for(var n=this.flatCoordinates,i=this.stride,a=0,u=n.length;a<u;a+=i){var c=g(t,e,n[a],n[a+1]);if(c<o){o=c;for(var p=0;p<i;++p)r[p]=n[a+p];r.length=i}}return o},e.prototype.getCoordinates=function(){return _(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getPoint=function(t){var e=this.flatCoordinates?this.flatCoordinates.length/this.stride:0;return t<0||e<=t?null:new v(this.flatCoordinates.slice(t*this.stride,(t+1)*this.stride),this.layout)},e.prototype.getPoints=function(){for(var t=this.flatCoordinates,e=this.layout,r=this.stride,o=[],n=0,i=t.length;n<i;n+=r){var s=new v(t.slice(n,n+r),e);o.push(s)}return o},e.prototype.getType=function(){return l.MULTI_POINT},e.prototype.intersectsExtent=function(t){for(var e=this.flatCoordinates,r=this.stride,o=0,n=e.length;o<n;o+=r){var i=e[o],s=e[o+1];if(m(t,i,s))return!0}return!1},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=C(this.flatCoordinates,0,t,this.stride),this.changed()},e}(y);var tt=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),et=function(t){function e(e,r,o){var n=t.call(this)||this;if(n.endss_=[],n.flatInteriorPointsRevision_=-1,n.flatInteriorPoints_=null,n.maxDelta_=-1,n.maxDeltaRevision_=-1,n.orientedRevision_=-1,n.orientedFlatCoordinates_=null,!o&&!Array.isArray(e[0])){for(var s=n.getLayout(),a=e,u=[],c=[],p=0,h=a.length;p<h;++p){var l=a[p];0===p&&(s=l.getLayout());for(var f=u.length,d=l.getEnds(),y=0,g=d.length;y<g;++y)d[y]+=f;i(u,l.getFlatCoordinates()),c.push(d)}r=s,e=u,o=c}return void 0!==r&&o?(n.setFlatCoordinates(r,e),n.endss_=o):n.setCoordinates(e,r),n}return tt(e,t),e.prototype.appendPolygon=function(t){var e;if(this.flatCoordinates){var r=this.flatCoordinates.length;i(this.flatCoordinates,t.getFlatCoordinates());for(var o=0,n=(e=t.getEnds().slice()).length;o<n;++o)e[o]+=r}else this.flatCoordinates=t.getFlatCoordinates().slice(),e=t.getEnds().slice(),this.endss_.push();this.endss_.push(e),this.changed()},e.prototype.clone=function(){for(var t=this.endss_.length,r=new Array(t),o=0;o<t;++o)r[o]=this.endss_[o].slice();var n=new e(this.flatCoordinates.slice(),this.layout,r);return n.applyProperties(this),n},e.prototype.closestPointXY=function(t,e,r,o){return o<s(this.getExtent(),t,e)?o:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(b(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),F(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,t,e,r,o))},e.prototype.containsXY=function(t,e){return j(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t,e)},e.prototype.getArea=function(){return w(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)},e.prototype.getCoordinates=function(t){var e;return void 0!==t?(e=this.getOrientedFlatCoordinates().slice(),G(e,0,this.endss_,this.stride,t)):e=this.flatCoordinates,E(e,0,this.endss_,this.stride)},e.prototype.getEndss=function(){return this.endss_},e.prototype.getFlatInteriorPoints=function(){if(this.flatInteriorPointsRevision_!=this.getRevision()){var t=function(t,e,r,o){for(var n=[],i=P(),s=0,a=r.length;s<a;++s){var u=r[s];i=O(t,e,u[0],o),n.push((i[0]+i[2])/2,(i[1]+i[3])/2),e=u[u.length-1]}return n}(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=T(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_},e.prototype.getInteriorPoints=function(){return new $(this.getFlatInteriorPoints().slice(),c.XYM)},e.prototype.getOrientedFlatCoordinates=function(){if(this.orientedRevision_!=this.getRevision()){var t=this.flatCoordinates;I(t,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=G(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_},e.prototype.getSimplifiedGeometryInternal=function(t){var r=[],o=[];return r.length=x(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(t),r,0,o),new e(r,c.XY,o)},e.prototype.getPolygon=function(t){if(t<0||this.endss_.length<=t)return null;var e;if(0===t)e=0;else{var r=this.endss_[t-1];e=r[r.length-1]}var o=this.endss_[t].slice(),n=o[o.length-1];if(0!==e)for(var i=0,s=o.length;i<s;++i)o[i]-=e;return new L(this.flatCoordinates.slice(e,n),this.layout,o)},e.prototype.getPolygons=function(){for(var t=this.layout,e=this.flatCoordinates,r=this.endss_,o=[],n=0,i=0,s=r.length;i<s;++i){var a=r[i].slice(),u=a[a.length-1];if(0!==n)for(var c=0,p=a.length;c<p;++c)a[c]-=n;var h=new L(e.slice(n,u),t,a);o.push(h),n=u}return o},e.prototype.getType=function(){return l.MULTI_POLYGON},e.prototype.intersectsExtent=function(t){return N(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t)},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,3),this.flatCoordinates||(this.flatCoordinates=[]);var r=R(this.flatCoordinates,0,t,this.stride,this.endss_);if(0===r.length)this.flatCoordinates.length=0;else{var o=r[r.length-1];this.flatCoordinates.length=0===o.length?0:o[o.length-1]}this.changed()},e}(y),rt=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();function ot(t){for(var e=[],r=0,o=t.length;r<o;++r)e.push(t[r].clone());return e}var nt=function(t){function e(e){var r=t.call(this)||this;return r.geometries_=e||null,r.changeEventsKeys_=[],r.listenGeometriesChange_(),r}return rt(e,t),e.prototype.unlistenGeometriesChange_=function(){this.changeEventsKeys_.forEach(S),this.changeEventsKeys_.length=0},e.prototype.listenGeometriesChange_=function(){if(this.geometries_)for(var t=0,e=this.geometries_.length;t<e;++t)this.changeEventsKeys_.push(M(this.geometries_[t],A.CHANGE,this.changed,this))},e.prototype.clone=function(){var t=new e(null);return t.setGeometries(this.geometries_),t.applyProperties(this),t},e.prototype.closestPointXY=function(t,e,r,o){if(o<s(this.getExtent(),t,e))return o;for(var n=this.geometries_,i=0,a=n.length;i<a;++i)o=n[i].closestPointXY(t,e,r,o);return o},e.prototype.containsXY=function(t,e){for(var r=this.geometries_,o=0,n=r.length;o<n;++o)if(r[o].containsXY(t,e))return!0;return!1},e.prototype.computeExtent=function(t){Y(t);for(var e=this.geometries_,r=0,o=e.length;r<o;++r)k(t,e[r].getExtent());return t},e.prototype.getGeometries=function(){return ot(this.geometries_)},e.prototype.getGeometriesArray=function(){return this.geometries_},e.prototype.getGeometriesArrayRecursive=function(){for(var t=[],e=this.geometries_,r=0,o=e.length;r<o;++r)e[r].getType()===this.getType()?t=t.concat(e[r].getGeometriesArrayRecursive()):t.push(e[r]);return t},e.prototype.getSimplifiedGeometry=function(t){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||0!==this.simplifiedGeometryMaxMinSquaredTolerance&&t<this.simplifiedGeometryMaxMinSquaredTolerance)return this;for(var r=[],o=this.geometries_,n=!1,i=0,s=o.length;i<s;++i){var a=o[i],u=a.getSimplifiedGeometry(t);r.push(u),u!==a&&(n=!0)}if(n){var c=new e(null);return c.setGeometriesArray(r),c}return this.simplifiedGeometryMaxMinSquaredTolerance=t,this},e.prototype.getType=function(){return l.GEOMETRY_COLLECTION},e.prototype.intersectsExtent=function(t){for(var e=this.geometries_,r=0,o=e.length;r<o;++r)if(e[r].intersectsExtent(t))return!0;return!1},e.prototype.isEmpty=function(){return 0===this.geometries_.length},e.prototype.rotate=function(t,e){for(var r=this.geometries_,o=0,n=r.length;o<n;++o)r[o].rotate(t,e);this.changed()},e.prototype.scale=function(t,e,r){var o=r;o||(o=X(this.getExtent()));for(var n=this.geometries_,i=0,s=n.length;i<s;++i)n[i].scale(t,e,o);this.changed()},e.prototype.setGeometries=function(t){this.setGeometriesArray(ot(t))},e.prototype.setGeometriesArray=function(t){this.unlistenGeometriesChange_(),this.geometries_=t,this.listenGeometriesChange_(),this.changed()},e.prototype.applyTransform=function(t){for(var e=this.geometries_,r=0,o=e.length;r<o;++r)e[r].applyTransform(t);this.changed()},e.prototype.translate=function(t,e){for(var r=this.geometries_,o=0,n=r.length;o<n;++o)r[o].translate(t,e);this.changed()},e.prototype.disposeInternal=function(){this.unlistenGeometriesChange_(),t.prototype.disposeInternal.call(this)},e}(D),it=function(){function t(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0}return t.prototype.getReadOptions=function(t,e){var r;if(e){var o=e.dataProjection?U(e.dataProjection):this.readProjection(t);e.extent&&o&&o.getUnits()===J.TILE_PIXELS&&(o=U(o)).setWorldExtent(e.extent),r={dataProjection:o,featureProjection:e.featureProjection}}return this.adaptOptions(r)},t.prototype.adaptOptions=function(t){return H({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection},t)},t.prototype.getType=function(){return K()},t.prototype.readFeature=function(t,e){return K()},t.prototype.readFeatures=function(t,e){return K()},t.prototype.readGeometry=function(t,e){return K()},t.prototype.readProjection=function(t){return K()},t.prototype.writeFeature=function(t,e){return K()},t.prototype.writeFeatures=function(t,e){return K()},t.prototype.writeGeometry=function(t,e){return K()},t}();function st(t,e,r){var o,n=r?U(r.featureProjection):null,i=r?U(r.dataProjection):null;if(o=n&&i&&!q(n,i)?(e?t.clone():t).transform(e?n:i,e?i:n):t,e&&r&&void 0!==r.decimals){var s=Math.pow(10,r.decimals);o===t&&(o=t.clone()),o.applyTransform((function(t){for(var e=0,r=t.length;e<r;++e)t[e]=Math.round(t[e]*s)/s;return t}))}return o}var at=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();function ut(t){if("string"==typeof t){var e=JSON.parse(t);return e||null}return null!==t?t:null}var ct=function(t){function e(){return t.call(this)||this}return at(e,t),e.prototype.getType=function(){return o.JSON},e.prototype.readFeature=function(t,e){return this.readFeatureFromObject(ut(t),this.getReadOptions(t,e))},e.prototype.readFeatures=function(t,e){return this.readFeaturesFromObject(ut(t),this.getReadOptions(t,e))},e.prototype.readFeatureFromObject=function(t,e){return K()},e.prototype.readFeaturesFromObject=function(t,e){return K()},e.prototype.readGeometry=function(t,e){return this.readGeometryFromObject(ut(t),this.getReadOptions(t,e))},e.prototype.readGeometryFromObject=function(t,e){return K()},e.prototype.readProjection=function(t){return this.readProjectionFromObject(ut(t))},e.prototype.readProjectionFromObject=function(t){return K()},e.prototype.writeFeature=function(t,e){return JSON.stringify(this.writeFeatureObject(t,e))},e.prototype.writeFeatureObject=function(t,e){return K()},e.prototype.writeFeatures=function(t,e){return JSON.stringify(this.writeFeaturesObject(t,e))},e.prototype.writeFeaturesObject=function(t,e){return K()},e.prototype.writeGeometry=function(t,e){return JSON.stringify(this.writeGeometryObject(t,e))},e.prototype.writeGeometryObject=function(t,e){return K()},e}(it),pt=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();function ht(t,r){if(!t)return null;var o;switch(t.type){case l.POINT:o=function(t){return new v(t.coordinates)}(t);break;case l.LINE_STRING:o=function(t){return new e(t.coordinates)}(t);break;case l.POLYGON:o=function(t){return new L(t.coordinates)}(t);break;case l.MULTI_POINT:o=function(t){return new $(t.coordinates)}(t);break;case l.MULTI_LINE_STRING:o=function(t){return new V(t.coordinates)}(t);break;case l.MULTI_POLYGON:o=function(t){return new et(t.coordinates)}(t);break;case l.GEOMETRY_COLLECTION:o=function(t,e){var r=t.geometries.map((function(t){return ht(t,e)}));return new nt(r)}(t);break;default:throw new Error("Unsupported GeoJSON type: "+t.type)}return st(o,!1,r)}function lt(t,e){var r,o=(t=st(t,!0,e)).getType();switch(o){case l.POINT:r=function(t,e){return{type:"Point",coordinates:t.getCoordinates()}}(t);break;case l.LINE_STRING:r=function(t,e){return{type:"LineString",coordinates:t.getCoordinates()}}(t);break;case l.POLYGON:r=function(t,e){var r;e&&(r=e.rightHanded);return{type:"Polygon",coordinates:t.getCoordinates(r)}}(t,e);break;case l.MULTI_POINT:r=function(t,e){return{type:"MultiPoint",coordinates:t.getCoordinates()}}(t);break;case l.MULTI_LINE_STRING:r=function(t,e){return{type:"MultiLineString",coordinates:t.getCoordinates()}}(t);break;case l.MULTI_POLYGON:r=function(t,e){var r;e&&(r=e.rightHanded);return{type:"MultiPolygon",coordinates:t.getCoordinates(r)}}(t,e);break;case l.GEOMETRY_COLLECTION:r=function(t,e){return{type:"GeometryCollection",geometries:t.getGeometriesArray().map((function(t){var r=H({},e);return delete r.featureProjection,lt(t,r)}))}}(t,e);break;case l.CIRCLE:r={type:"GeometryCollection",geometries:[]};break;default:throw new Error("Unsupported geometry type: "+o)}return r}var ft=function(t){function e(e){var r=this,o=e||{};return(r=t.call(this)||this).dataProjection=U(o.dataProjection?o.dataProjection:"EPSG:4326"),o.featureProjection&&(r.defaultFeatureProjection=U(o.featureProjection)),r.geometryName_=o.geometryName,r.extractGeometryName_=o.extractGeometryName,r}return pt(e,t),e.prototype.readFeatureFromObject=function(t,e){var r=null,o=ht((r="Feature"===t.type?t:{type:"Feature",geometry:t,properties:null}).geometry,e),i=new n;return this.geometryName_?i.setGeometryName(this.geometryName_):this.extractGeometryName_&&"geometry_name"in r!==void 0&&i.setGeometryName(r.geometry_name),i.setGeometry(o),"id"in r&&i.setId(r.id),r.properties&&i.setProperties(r.properties,!0),i},e.prototype.readFeaturesFromObject=function(t,e){var r=null;if("FeatureCollection"===t.type){r=[];for(var o=t.features,n=0,i=o.length;n<i;++n)r.push(this.readFeatureFromObject(o[n],e))}else r=[this.readFeatureFromObject(t,e)];return r},e.prototype.readGeometryFromObject=function(t,e){return ht(t,e)},e.prototype.readProjectionFromObject=function(t){var e,r=t.crs;return r?"name"==r.type?e=U(r.properties.name):"EPSG"===r.type?e=U("EPSG:"+r.properties.code):Z(!1,36):e=this.dataProjection,e},e.prototype.writeFeatureObject=function(t,e){e=this.adaptOptions(e);var r={type:"Feature",geometry:null,properties:null},o=t.getId();if(void 0!==o&&(r.id=o),!t.hasProperties())return r;var n=t.getProperties(),i=t.getGeometry();return i&&(r.geometry=lt(i,e),delete n[t.getGeometryName()]),z(n)||(r.properties=n),r},e.prototype.writeFeaturesObject=function(t,e){e=this.adaptOptions(e);for(var r=[],o=0,n=t.length;o<n;++o)r.push(this.writeFeatureObject(t[o],e));return{type:"FeatureCollection",features:r}},e.prototype.writeGeometryObject=function(t,e){return lt(t,this.adaptOptions(e))},e}(ct);export{ft as G};