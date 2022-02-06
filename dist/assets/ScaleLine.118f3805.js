import{A as U,b as S,I as b,C,o as E,e as y,J as I,L as R,f as T,F as L,g as N,u as j,s as A,v as k,t as P}from"./vendor.b99b632f.js";import{T as D}from"./TileImage.0ebee0ae.js";import{B as O}from"./BingMaps.5a522d6d.js";import{bW as V,a0 as g,O as w,$ as W,d as G,bX as F,M as H,V as $,bY as X}from"./ol.bb58850a.js";import{_ as z}from"./index.b0d71010.js";import"./net.a0d7cd86.js";var J=globalThis&&globalThis.__extends||function(){var c=function(l,t){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])},c(l,t)};return function(l,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");c(l,t);function e(){this.constructor=l}l.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}}(),M="units",u={DEGREES:"degrees",IMPERIAL:"imperial",NAUTICAL:"nautical",METRIC:"metric",US:"us"},K=[1,2,5],x=25.4/.28,q=function(c){J(l,c);function l(t){var e=this,a=t||{},r=a.className!==void 0?a.className:a.bar?"ol-scale-bar":"ol-scale-line";return e=c.call(this,{element:document.createElement("div"),render:a.render,target:a.target})||this,e.on,e.once,e.un,e.innerElement_=document.createElement("div"),e.innerElement_.className=r+"-inner",e.element.className=r+" "+V,e.element.appendChild(e.innerElement_),e.viewState_=null,e.minWidth_=a.minWidth!==void 0?a.minWidth:64,e.renderedVisible_=!1,e.renderedWidth_=void 0,e.renderedHTML_="",e.addChangeListener(M,e.handleUnitsChanged_),e.setUnits(a.units||u.METRIC),e.scaleBar_=a.bar||!1,e.scaleBarSteps_=a.steps||4,e.scaleBarText_=a.text||!1,e.dpi_=a.dpi||void 0,e}return l.prototype.getUnits=function(){return this.get(M)},l.prototype.handleUnitsChanged_=function(){this.updateElement_()},l.prototype.setUnits=function(t){this.set(M,t)},l.prototype.setDpi=function(t){this.dpi_=t},l.prototype.updateElement_=function(){var t=this.viewState_;if(!t){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}var e=t.center,a=t.projection,r=this.getUnits(),p=r==u.DEGREES?g.DEGREES:g.METERS,n=w(a,t.resolution,e,p),o=this.minWidth_*(this.dpi_||x)/x,s=o*n,i="";if(r==u.DEGREES){var f=W[g.DEGREES];s*=f,s<f/60?(i="\u2033",n*=3600):s<f?(i="\u2032",n*=60):i="\xB0"}else r==u.IMPERIAL?s<.9144?(i="in",n/=.0254):s<1609.344?(i="ft",n/=.3048):(i="mi",n/=1609.344):r==u.NAUTICAL?(n/=1852,i="nm"):r==u.METRIC?s<.001?(i="\u03BCm",n*=1e6):s<1?(i="mm",n*=1e3):s<1e3?i="m":(i="km",n/=1e3):r==u.US?s<.9144?(i="in",n*=39.37):s<1609.344?(i="ft",n/=.30480061):(i="mi",n/=1609.3472):G(!1,33);for(var m=3*Math.floor(Math.log(o*n)/Math.log(10)),h,d,_;;){_=Math.floor(m/3);var B=Math.pow(10,_);if(h=K[(m%3+3)%3]*B,d=Math.round(h/n),isNaN(d)){this.element.style.display="none",this.renderedVisible_=!1;return}else if(d>=o)break;++m}var v;this.scaleBar_?v=this.createScaleBar(d,h,i):v=h.toFixed(_<0?-_:0)+" "+i,this.renderedHTML_!=v&&(this.innerElement_.innerHTML=v,this.renderedHTML_=v),this.renderedWidth_!=d&&(this.innerElement_.style.width=d+"px",this.renderedWidth_=d),this.renderedVisible_||(this.element.style.display="",this.renderedVisible_=!0)},l.prototype.createScaleBar=function(t,e,a){for(var r="1 : "+Math.round(this.getScaleForResolution()).toLocaleString(),p=[],n=t/this.scaleBarSteps_,o="#ffffff",s=0;s<this.scaleBarSteps_;s++)s===0&&p.push(this.createMarker("absolute",s)),p.push('<div><div class="ol-scale-singlebar" style="width: '+n+"px;background-color: "+o+';"></div>'+this.createMarker("relative",s)+(s%2==0||this.scaleBarSteps_===2?this.createStepText(s,t,!1,e,a):"")+"</div>"),s===this.scaleBarSteps_-1&&p.push(this.createStepText(s+1,t,!0,e,a)),o==="#ffffff"?o="#000000":o="#ffffff";var i;this.scaleBarText_?i='<div class="ol-scale-text" style="width: '+t+'px;">'+r+"</div>":i="";var f='<div style="display: flex;">'+i+p.join("")+"</div>";return f},l.prototype.createMarker=function(t,e){var a=t==="absolute"?3:-10;return'<div class="ol-scale-step-marker" style="position: '+t+";top: "+a+'px;"></div>'},l.prototype.createStepText=function(t,e,a,r,p){var n=t===0?0:Math.round(r/this.scaleBarSteps_*t*100)/100,o=n+(t===0?"":" "+p),s=t===0?-3:e/this.scaleBarSteps_*-1,i=t===0?0:e/this.scaleBarSteps_*2;return'<div class="ol-scale-step-text" style="margin-left: '+s+"px;text-align: "+(t===0?"left":"center")+"; min-width: "+i+"px;left: "+(a?e+"px":"unset")+';">'+o+"</div>"},l.prototype.getScaleForResolution=function(){var t=w(this.viewState_.projection,this.viewState_.resolution,this.viewState_.center),e=this.dpi_||x,a=this.viewState_.projection.getMetersPerUnit(),r=1e3/25.4;return parseFloat(t.toString())*a*r*e},l.prototype.render=function(t){var e=t.frameState;e?this.viewState_=e.viewState:this.viewState_=null,this.updateElement_()},l}(F),Q=q;const Y=c=>(A("data-v-7ec7182f"),c=c(),k(),c),Z=Y(()=>T("div",{id:"map",class:"map__x"},null,-1)),ee={setup(c){const l=U(),t=S("\u5EA6"),e=b([{t:"\u5EA6",v:"degrees"},{t:"\u82F1\u5236\u82F1\u5C3A",v:"imperial"},{t:"\u7F8E\u5236\u82F1\u5C3A",v:"us"},{t:"\u6D77\u91CC",v:"nautical"},{t:"\u516C\u5236",v:"metric"}]),a=S(null),r=S(null);function p(){a.value=new Q,r.value=new H({target:"map",layers:[new D({source:new O({key:"AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-",imagerySet:"Aerial"})})],view:new $({projection:"EPSG:4326",center:[114.064839,22.548857],zoom:12}),controls:X().extend([a.value])}),n()}function n(){let o=e.find(s=>s.t===t.value);a.value.setUnits(o.v)}return C(()=>{l.commit("setComponentPath","src/views/OpenLayers/Basic/pages/ScaleLine/ScaleLine.vue"),p()}),(o,s)=>(E(),y(L,null,[Z,I(T("select",{id:"units","onUpdate:modelValue":s[0]||(s[0]=i=>t.value=i),onChange:n},[(E(!0),y(L,null,N(j(e),i=>(E(),y("option",{key:i.v},P(i.t),1))),128))],544),[[R,t.value]])],64))}};var le=z(ee,[["__scopeId","data-v-7ec7182f"]]);export{le as default};
