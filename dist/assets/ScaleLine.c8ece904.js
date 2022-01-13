import{p as e,b as t,A as i,d as s,I as n,C as a,f as r,J as o,L as l,g as c,F as d,h as p,u,o as h,t as f}from"./vendor.ab550d3c.js";import{T as v}from"./TileImage.6719d572.js";import{B as m}from"./BingMaps.f431ad9d.js";import{bW as _,$ as y,N as S,_ as g,d as b,bX as w,M as x,V as M,bY as E}from"./ol.bbcea228.js";import"./net.5778e213.js";var B,T=(B=function(e,t){return(B=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}B(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),U="degrees",j="imperial",k="nautical",L="metric",N="us",C=[1,2,5],O=function(e){function t(t){var i=this,s=t||{},n=void 0!==s.className?s.className:s.bar?"ol-scale-bar":"ol-scale-line";return(i=e.call(this,{element:document.createElement("div"),render:s.render,target:s.target})||this).on,i.once,i.un,i.innerElement_=document.createElement("div"),i.innerElement_.className=n+"-inner",i.element.className=n+" "+_,i.element.appendChild(i.innerElement_),i.viewState_=null,i.minWidth_=void 0!==s.minWidth?s.minWidth:64,i.renderedVisible_=!1,i.renderedWidth_=void 0,i.renderedHTML_="",i.addChangeListener("units",i.handleUnitsChanged_),i.setUnits(s.units||L),i.scaleBar_=s.bar||!1,i.scaleBarSteps_=s.steps||4,i.scaleBarText_=s.text||!1,i.dpi_=s.dpi||void 0,i}return T(t,e),t.prototype.getUnits=function(){return this.get("units")},t.prototype.handleUnitsChanged_=function(){this.updateElement_()},t.prototype.setUnits=function(e){this.set("units",e)},t.prototype.setDpi=function(e){this.dpi_=e},t.prototype.updateElement_=function(){var e=this.viewState_;if(e){var t=e.center,i=e.projection,s=this.getUnits(),n=s==U?y.DEGREES:y.METERS,a=S(i,e.resolution,t,n),r=this.minWidth_*(this.dpi_||90.7142857142857)/90.7142857142857,o=r*a,l="";if(s==U){var c=g[y.DEGREES];(o*=c)<c/60?(l="″",a*=3600):o<c?(l="′",a*=60):l="°"}else s==j?o<.9144?(l="in",a/=.0254):o<1609.344?(l="ft",a/=.3048):(l="mi",a/=1609.344):s==k?(a/=1852,l="nm"):s==L?o<.001?(l="μm",a*=1e6):o<1?(l="mm",a*=1e3):o<1e3?l="m":(l="km",a/=1e3):s==N?o<.9144?(l="in",a*=39.37):o<1609.344?(l="ft",a/=.30480061):(l="mi",a/=1609.3472):b(!1,33);for(var d,p,u,h,f=3*Math.floor(Math.log(r*a)/Math.log(10));;){u=Math.floor(f/3);var v=Math.pow(10,u);if(d=C[(f%3+3)%3]*v,p=Math.round(d/a),isNaN(p))return this.element.style.display="none",void(this.renderedVisible_=!1);if(p>=r)break;++f}h=this.scaleBar_?this.createScaleBar(p,d,l):d.toFixed(u<0?-u:0)+" "+l,this.renderedHTML_!=h&&(this.innerElement_.innerHTML=h,this.renderedHTML_=h),this.renderedWidth_!=p&&(this.innerElement_.style.width=p+"px",this.renderedWidth_=p),this.renderedVisible_||(this.element.style.display="",this.renderedVisible_=!0)}else this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1)},t.prototype.createScaleBar=function(e,t,i){for(var s="1 : "+Math.round(this.getScaleForResolution()).toLocaleString(),n=[],a=e/this.scaleBarSteps_,r="#ffffff",o=0;o<this.scaleBarSteps_;o++)0===o&&n.push(this.createMarker("absolute",o)),n.push('<div><div class="ol-scale-singlebar" style="width: '+a+"px;background-color: "+r+';"></div>'+this.createMarker("relative",o)+(o%2==0||2===this.scaleBarSteps_?this.createStepText(o,e,!1,t,i):"")+"</div>"),o===this.scaleBarSteps_-1&&n.push(this.createStepText(o+1,e,!0,t,i)),r="#ffffff"===r?"#000000":"#ffffff";return'<div style="display: flex;">'+(this.scaleBarText_?'<div class="ol-scale-text" style="width: '+e+'px;">'+s+"</div>":"")+n.join("")+"</div>"},t.prototype.createMarker=function(e,t){return'<div class="ol-scale-step-marker" style="position: '+e+";top: "+("absolute"===e?3:-10)+'px;"></div>'},t.prototype.createStepText=function(e,t,i,s,n){var a=(0===e?0:Math.round(s/this.scaleBarSteps_*e*100)/100)+(0===e?"":" "+n);return'<div class="ol-scale-step-text" style="margin-left: '+(0===e?-3:t/this.scaleBarSteps_*-1)+"px;text-align: "+(0===e?"left":"center")+"; min-width: "+(0===e?0:t/this.scaleBarSteps_*2)+"px;left: "+(i?t+"px":"unset")+';">'+a+"</div>"},t.prototype.getScaleForResolution=function(){var e=S(this.viewState_.projection,this.viewState_.resolution,this.viewState_.center),t=this.dpi_||90.7142857142857,i=this.viewState_.projection.getMetersPerUnit();return parseFloat(e.toString())*i*(1e3/25.4)*t},t.prototype.render=function(e){var t=e.frameState;this.viewState_=t?t.viewState:null,this.updateElement_()},t}(w);e("data-v-7ec7182f");const V=c("div",{id:"map",class:"map__x"},null,-1);t();const W={setup(e){const t=i(),_=s("度"),y=n([{t:"度",v:"degrees"},{t:"英制英尺",v:"imperial"},{t:"美制英尺",v:"us"},{t:"海里",v:"nautical"},{t:"公制",v:"metric"}]),S=s(null),g=s(null);function b(){let e=y.find((e=>e.t===_.value));S.value.setUnits(e.v)}return a((()=>{t.commit("setComponentPath","src/views/OpenLayers/Basic/pages/ScaleLine/ScaleLine.vue"),S.value=new O,g.value=new x({target:"map",layers:[new v({source:new m({key:"AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-",imagerySet:"Aerial"})})],view:new M({projection:"EPSG:4326",center:[114.064839,22.548857],zoom:12}),controls:E().extend([S.value])}),b()})),(e,t)=>(h(),r(d,null,[V,o(c("select",{id:"units","onUpdate:modelValue":t[0]||(t[0]=e=>_.value=e),onChange:b},[(h(!0),r(d,null,p(u(y),(e=>(h(),r("option",{key:e.v},f(e.t),1)))),128))],544),[[l,_.value]])],64))},__scopeId:"data-v-7ec7182f"};export{W as default};
