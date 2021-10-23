import{Y as R,ar as l,B as S,K as F,ch as G,aK as M,ci as x,bl as j,a7 as A,cj as Y,b7 as U,ck as g,cl as P,cm as V,cn as q,bE as b,co as H,E as B,cp as _,cq as W,bc as k,bG as X,cr as K,cs as $,A as z,x as L,w as J,v as Q,o as Z,bb as O}from"./ol.088d4eef.js";import{L as tt,S as et,a as y,f as it}from"./Vector.796a2063.js";import{L as w}from"./LineString.7dafb842.js";import{b as rt,a as st,M as nt}from"./MultiPolygon.77e2e555.js";var at=function(){var h=function(n,t){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,i){e.__proto__=i}||function(e,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])},h(n,t)};return function(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");h(n,t);function e(){this.constructor=n}n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}}(),N=function(h){at(n,h);function n(t,e,i){var r=h.call(this)||this;if(i!==void 0&&e===void 0)r.setFlatCoordinates(i,t);else{var s=e||0;r.setCenterAndRadius(t,s,i)}return r}return n.prototype.clone=function(){var t=new n(this.flatCoordinates.slice(),void 0,this.layout);return t.applyProperties(this),t},n.prototype.closestPointXY=function(t,e,i,r){var s=this.flatCoordinates,a=t-s[0],d=e-s[1],c=a*a+d*d;if(c<r){if(c===0)for(var f=0;f<this.stride;++f)i[f]=s[f];else{var u=this.getRadius()/Math.sqrt(c);i[0]=s[0]+u*a,i[1]=s[1]+u*d;for(var f=2;f<this.stride;++f)i[f]=s[f]}return i.length=this.stride,c}else return r},n.prototype.containsXY=function(t,e){var i=this.flatCoordinates,r=t-i[0],s=e-i[1];return r*r+s*s<=this.getRadiusSquared_()},n.prototype.getCenter=function(){return this.flatCoordinates.slice(0,this.stride)},n.prototype.computeExtent=function(t){var e=this.flatCoordinates,i=e[this.stride]-e[0];return R(e[0]-i,e[1]-i,e[0]+i,e[1]+i,t)},n.prototype.getRadius=function(){return Math.sqrt(this.getRadiusSquared_())},n.prototype.getRadiusSquared_=function(){var t=this.flatCoordinates[this.stride]-this.flatCoordinates[0],e=this.flatCoordinates[this.stride+1]-this.flatCoordinates[1];return t*t+e*e},n.prototype.getType=function(){return l.CIRCLE},n.prototype.intersectsExtent=function(t){var e=this.getExtent();if(S(t,e)){var i=this.getCenter();return t[0]<=i[0]&&t[2]>=i[0]||t[1]<=i[1]&&t[3]>=i[1]?!0:F(t,this.intersectsCoordinate.bind(this))}return!1},n.prototype.setCenter=function(t){var e=this.stride,i=this.flatCoordinates[e]-this.flatCoordinates[0],r=t.slice();r[e]=r[0]+i;for(var s=1;s<e;++s)r[e+s]=t[s];this.setFlatCoordinates(this.layout,r),this.changed()},n.prototype.setCenterAndRadius=function(t,e,i){this.setLayout(i,t,0),this.flatCoordinates||(this.flatCoordinates=[]);var r=this.flatCoordinates,s=G(r,0,t,this.stride);r[s++]=r[0]+e;for(var a=1,d=this.stride;a<d;++a)r[s++]=r[a];r.length=s,this.changed()},n.prototype.getCoordinates=function(){return null},n.prototype.setCoordinates=function(t,e){},n.prototype.setRadius=function(t){this.flatCoordinates[this.stride]=this.flatCoordinates[0]+t,this.changed()},n.prototype.rotate=function(t,e){var i=this.getCenter(),r=this.getStride();this.setCenter(M(i,0,i.length,r,t,e,i)),this.changed()},n.prototype.translate=function(t,e){var i=this.getCenter(),r=this.getStride();this.setCenter(x(i,0,i.length,r,t,e,i)),this.changed()},n}(j);N.prototype.transform;var E=N,I=function(){var h=function(n,t){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,i){e.__proto__=i}||function(e,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])},h(n,t)};return function(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");h(n,t);function e(){this.constructor=n}n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}}(),o={POINT:"Point",LINE_STRING:"LineString",POLYGON:"Polygon",CIRCLE:"Circle"},v={DRAWSTART:"drawstart",DRAWEND:"drawend",DRAWABORT:"drawabort"},m=function(h){I(n,h);function n(t,e){var i=h.call(this,t)||this;return i.feature=e,i}return n}(A),ot=function(h){I(n,h);function n(t){var e=this,i=t;i.stopDown||(i.stopDown=Y),e=h.call(this,i)||this,e.on,e.once,e.un,e.shouldHandle_=!1,e.downPx_=null,e.downTimeout_,e.lastDragTime_,e.pointerType_,e.freehand_=!1,e.source_=t.source?t.source:null,e.features_=t.features?t.features:null,e.snapTolerance_=t.snapTolerance?t.snapTolerance:12,e.type_=t.type,e.mode_=ct(e.type_),e.stopClick_=!!t.stopClick,e.minPoints_=t.minPoints?t.minPoints:e.mode_===o.POLYGON?3:2,e.maxPoints_=e.mode_===o.CIRCLE?2:t.maxPoints?t.maxPoints:1/0,e.finishCondition_=t.finishCondition?t.finishCondition:U;var r=t.geometryFunction;if(!r){var s=e.mode_;if(s===o.CIRCLE)r=function(d,c,f){var u=c||new E([NaN,NaN]),p=g(d[0]),C=P(p,g(d[d.length-1]));return u.setCenterAndRadius(p,Math.sqrt(C)),u};else{var a;s===o.POINT?a=k:s===o.LINE_STRING?a=w:s===o.POLYGON&&(a=O),r=function(d,c,f){return c?s===o.POLYGON?d[0].length?c.setCoordinates([d[0].concat([d[0][0]])]):c.setCoordinates([]):c.setCoordinates(d):c=new a(d),c}}}return e.geometryFunction_=r,e.dragVertexDelay_=t.dragVertexDelay!==void 0?t.dragVertexDelay:500,e.finishCoordinate_=null,e.sketchFeature_=null,e.sketchPoint_=null,e.sketchCoords_=null,e.sketchLine_=null,e.sketchLineCoords_=null,e.squaredClickTolerance_=t.clickTolerance?t.clickTolerance*t.clickTolerance:36,e.overlay_=new tt({source:new et({useSpatialIndex:!1,wrapX:t.wrapX?t.wrapX:!1}),style:t.style?t.style:ht(),updateWhileInteracting:!0}),e.geometryName_=t.geometryName,e.condition_=t.condition?t.condition:V,e.freehandCondition_,t.freehand?e.freehandCondition_=q:e.freehandCondition_=t.freehandCondition?t.freehandCondition:b,e.addChangeListener(H.ACTIVE,e.updateState_),e}return n.prototype.setMap=function(t){h.prototype.setMap.call(this,t),this.updateState_()},n.prototype.getOverlay=function(){return this.overlay_},n.prototype.handleEvent=function(t){t.originalEvent.type===B.CONTEXTMENU&&t.originalEvent.preventDefault(),this.freehand_=this.mode_!==o.POINT&&this.freehandCondition_(t);var e=t.type===_.POINTERMOVE,i=!0;if(!this.freehand_&&this.lastDragTime_&&t.type===_.POINTERDRAG){var r=Date.now();r-this.lastDragTime_>=this.dragVertexDelay_?(this.downPx_=t.pixel,this.shouldHandle_=!this.freehand_,e=!0):this.lastDragTime_=void 0,this.shouldHandle_&&this.downTimeout_!==void 0&&(clearTimeout(this.downTimeout_),this.downTimeout_=void 0)}return this.freehand_&&t.type===_.POINTERDRAG&&this.sketchFeature_!==null?(this.addToDrawing_(t.coordinate),i=!1):this.freehand_&&t.type===_.POINTERDOWN?i=!1:e&&this.getPointerCount()<2?(i=t.type===_.POINTERMOVE,i&&this.freehand_?(this.handlePointerMove_(t),this.shouldHandle_&&t.originalEvent.preventDefault()):(t.originalEvent.pointerType==="mouse"||t.type===_.POINTERDRAG&&this.downTimeout_===void 0)&&this.handlePointerMove_(t)):t.type===_.DBLCLICK&&(i=!1),h.prototype.handleEvent.call(this,t)&&i},n.prototype.handleDownEvent=function(t){return this.shouldHandle_=!this.freehand_,this.freehand_?(this.downPx_=t.pixel,this.finishCoordinate_||this.startDrawing_(t.coordinate),!0):this.condition_(t)?(this.lastDragTime_=Date.now(),this.downTimeout_=setTimeout(function(){this.handlePointerMove_(new W(_.POINTERMOVE,t.map,t.originalEvent,!1,t.frameState))}.bind(this),this.dragVertexDelay_),this.downPx_=t.pixel,!0):(this.lastDragTime_=void 0,!1)},n.prototype.handleUpEvent=function(t){var e=!0;if(this.getPointerCount()===0)if(this.downTimeout_&&(clearTimeout(this.downTimeout_),this.downTimeout_=void 0),this.handlePointerMove_(t),this.shouldHandle_){var i=!this.finishCoordinate_;i&&this.startDrawing_(t.coordinate),!i&&this.freehand_?this.finishDrawing():!this.freehand_&&(!i||this.mode_===o.POINT)&&(this.atFinish_(t.pixel)?this.finishCondition_(t)&&this.finishDrawing():this.addToDrawing_(t.coordinate)),e=!1}else this.freehand_&&this.abortDrawing();return!e&&this.stopClick_&&t.preventDefault(),e},n.prototype.handlePointerMove_=function(t){if(this.pointerType_=t.originalEvent.pointerType,this.downPx_&&(!this.freehand_&&this.shouldHandle_||this.freehand_&&!this.shouldHandle_)){var e=this.downPx_,i=t.pixel,r=e[0]-i[0],s=e[1]-i[1],a=r*r+s*s;if(this.shouldHandle_=this.freehand_?a>this.squaredClickTolerance_:a<=this.squaredClickTolerance_,!this.shouldHandle_)return}this.finishCoordinate_?this.modifyDrawing_(t.coordinate):this.createOrUpdateSketchPoint_(t.coordinate.slice())},n.prototype.atFinish_=function(t){var e=!1;if(this.sketchFeature_){var i=!1,r=[this.finishCoordinate_],s=this.mode_;if(s===o.POINT)e=!0;else if(s===o.CIRCLE)e=this.sketchCoords_.length===2;else if(s===o.LINE_STRING)i=this.sketchCoords_.length>this.minPoints_;else if(s===o.POLYGON){var a=this.sketchCoords_;i=a[0].length>this.minPoints_,r=[a[0][0],a[0][a[0].length-2]]}if(i)for(var d=this.getMap(),c=0,f=r.length;c<f;c++){var u=r[c],p=d.getPixelFromCoordinate(u),C=t[0]-p[0],T=t[1]-p[1],D=this.freehand_?1:this.snapTolerance_;if(e=Math.sqrt(C*C+T*T)<=D,e){this.finishCoordinate_=u;break}}}return e},n.prototype.createOrUpdateSketchPoint_=function(t){if(!this.sketchPoint_)this.sketchPoint_=new y(new k(t)),this.updateSketchFeatures_();else{var e=this.sketchPoint_.getGeometry();e.setCoordinates(t)}},n.prototype.createOrUpdateCustomSketchLine_=function(t){this.sketchLine_||(this.sketchLine_=new y);var e=t.getLinearRing(0),i=this.sketchLine_.getGeometry();i?(i.setFlatCoordinates(e.getLayout(),e.getFlatCoordinates()),i.changed()):(i=new w(e.getFlatCoordinates(),e.getLayout()),this.sketchLine_.setGeometry(i))},n.prototype.startDrawing_=function(t){var e=this.getMap().getView().getProjection();this.finishCoordinate_=t,this.mode_===o.POINT?this.sketchCoords_=t.slice():this.mode_===o.POLYGON?(this.sketchCoords_=[[t.slice(),t.slice()]],this.sketchLineCoords_=this.sketchCoords_[0]):this.sketchCoords_=[t.slice(),t.slice()],this.sketchLineCoords_&&(this.sketchLine_=new y(new w(this.sketchLineCoords_)));var i=this.geometryFunction_(this.sketchCoords_,void 0,e);this.sketchFeature_=new y,this.geometryName_&&this.sketchFeature_.setGeometryName(this.geometryName_),this.sketchFeature_.setGeometry(i),this.updateSketchFeatures_(),this.dispatchEvent(new m(v.DRAWSTART,this.sketchFeature_))},n.prototype.modifyDrawing_=function(t){var e=this.getMap(),i=this.sketchFeature_.getGeometry(),r=e.getView().getProjection(),s,a;if(this.mode_===o.POINT?a=this.sketchCoords_:this.mode_===o.POLYGON?(s=this.sketchCoords_[0],a=s[s.length-1],this.atFinish_(e.getPixelFromCoordinate(t))&&(t=this.finishCoordinate_.slice())):(s=this.sketchCoords_,a=s[s.length-1]),a[0]=t[0],a[1]=t[1],this.geometryFunction_(this.sketchCoords_,i,r),this.sketchPoint_){var d=this.sketchPoint_.getGeometry();d.setCoordinates(t)}if(i.getType()===l.POLYGON&&this.mode_!==o.POLYGON)this.createOrUpdateCustomSketchLine_(i);else if(this.sketchLineCoords_){var c=this.sketchLine_.getGeometry();c.setCoordinates(this.sketchLineCoords_)}this.updateSketchFeatures_()},n.prototype.addToDrawing_=function(t){var e=this.sketchFeature_.getGeometry(),i=this.getMap().getView().getProjection(),r,s,a=this.mode_;a===o.LINE_STRING||a===o.CIRCLE?(this.finishCoordinate_=t.slice(),s=this.sketchCoords_,s.length>=this.maxPoints_&&(this.freehand_?s.pop():r=!0),s.push(t.slice()),this.geometryFunction_(s,e,i)):a===o.POLYGON&&(s=this.sketchCoords_[0],s.length>=this.maxPoints_&&(this.freehand_?s.pop():r=!0),s.push(t.slice()),r&&(this.finishCoordinate_=s[0]),this.geometryFunction_(this.sketchCoords_,e,i)),this.createOrUpdateSketchPoint_(t.slice()),this.updateSketchFeatures_(),r&&this.finishDrawing()},n.prototype.removeLastPoint=function(){if(!!this.sketchFeature_){var t=this.sketchFeature_.getGeometry(),e=this.getMap().getView().getProjection(),i,r=this.mode_;if(r===o.LINE_STRING||r===o.CIRCLE){if(i=this.sketchCoords_,i.splice(-2,1),i.length>=2){this.finishCoordinate_=i[i.length-2].slice();var s=this.finishCoordinate_.slice();i[i.length-1]=s,this.createOrUpdateSketchPoint_(s)}this.geometryFunction_(i,t,e),t.getType()===l.POLYGON&&this.sketchLine_&&this.createOrUpdateCustomSketchLine_(t)}else if(r===o.POLYGON){i=this.sketchCoords_[0],i.splice(-2,1);var a=this.sketchLine_.getGeometry();if(i.length>=2){var s=i[i.length-2].slice();i[i.length-1]=s,this.createOrUpdateSketchPoint_(s)}a.setCoordinates(i),this.geometryFunction_(this.sketchCoords_,t,e)}i.length===1&&this.abortDrawing(),this.updateSketchFeatures_()}},n.prototype.finishDrawing=function(){var t=this.abortDrawing_();if(!!t){var e=this.sketchCoords_,i=t.getGeometry(),r=this.getMap().getView().getProjection();this.mode_===o.LINE_STRING?(e.pop(),this.geometryFunction_(e,i,r)):this.mode_===o.POLYGON&&(e[0].pop(),this.geometryFunction_(e,i,r),e=i.getCoordinates()),this.type_===l.MULTI_POINT?t.setGeometry(new rt([e])):this.type_===l.MULTI_LINE_STRING?t.setGeometry(new st([e])):this.type_===l.MULTI_POLYGON&&t.setGeometry(new nt([e])),this.dispatchEvent(new m(v.DRAWEND,t)),this.features_&&this.features_.push(t),this.source_&&this.source_.addFeature(t)}},n.prototype.abortDrawing_=function(){this.finishCoordinate_=null;var t=this.sketchFeature_;return this.sketchFeature_=null,this.sketchPoint_=null,this.sketchLine_=null,this.overlay_.getSource().clear(!0),t},n.prototype.abortDrawing=function(){var t=this.abortDrawing_();t&&this.dispatchEvent(new m(v.DRAWABORT,t))},n.prototype.appendCoordinates=function(t){var e=this.mode_,i=!this.sketchFeature_;i&&this.startDrawing_(t[0]);var r;if(e===o.LINE_STRING||e===o.CIRCLE)r=this.sketchCoords_;else if(e===o.POLYGON)r=this.sketchCoords_&&this.sketchCoords_.length?this.sketchCoords_[0]:[];else return;i&&r.shift(),r.pop();for(var s=0;s<t.length;s++)this.addToDrawing_(t[s]);var a=t[t.length-1];this.addToDrawing_(a),this.modifyDrawing_(a)},n.prototype.extend=function(t){var e=t.getGeometry(),i=e;this.sketchFeature_=t,this.sketchCoords_=i.getCoordinates();var r=this.sketchCoords_[this.sketchCoords_.length-1];this.finishCoordinate_=r.slice(),this.sketchCoords_.push(r.slice()),this.sketchPoint_=new y(new k(r)),this.updateSketchFeatures_(),this.dispatchEvent(new m(v.DRAWSTART,this.sketchFeature_))},n.prototype.updateSketchFeatures_=function(){var t=[];this.sketchFeature_&&t.push(this.sketchFeature_),this.sketchLine_&&t.push(this.sketchLine_),this.sketchPoint_&&t.push(this.sketchPoint_);var e=this.overlay_.getSource();e.clear(!0),e.addFeatures(t)},n.prototype.updateState_=function(){var t=this.getMap(),e=this.getActive();(!t||!e)&&this.abortDrawing(),this.overlay_.setMap(e?t:null)},n}(X);function ht(){var h=it();return function(n,t){return h[n.getGeometry().getType()]}}function _t(h,n){return function(t,e,i){var r=g(t[0]),s=g(t[t.length-1]),a=Math.sqrt(P(r,s)),d=e||K(new E(r),h),c=n;if(!n&&n!==0){var f=s[0]-r[0],u=s[1]-r[1];c=Math.atan2(u,f)}return $(d,r,a,c),d}}function pt(){return function(h,n,t){var e=z([h[0],h[h.length-1]].map(function(s){return g(s)})),i=[[L(e),J(e),Q(e),Z(e),L(e)]],r=n;return r?r.setCoordinates(i):r=new O(i),r}}function ct(h){switch(h){case l.POINT:case l.MULTI_POINT:return o.POINT;case l.LINE_STRING:case l.MULTI_LINE_STRING:return o.LINE_STRING;case l.POLYGON:case l.MULTI_POLYGON:return o.POLYGON;case l.CIRCLE:return o.CIRCLE;default:throw new Error("Invalid type: "+h)}}var gt=ot;export{gt as D,pt as a,_t as c};
