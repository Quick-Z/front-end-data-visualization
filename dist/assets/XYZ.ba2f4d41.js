import{c as o,e as t,a as i}from"./TileImage.6d4ae649.js";var r,e=(r=function(o,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i])})(o,t)},function(o,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=o}r(o,t),o.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),n=function(i){function r(r){var e=r||{},n=void 0!==e.projection?e.projection:"EPSG:3857",a=void 0!==e.tileGrid?e.tileGrid:o({extent:t(n),maxResolution:e.maxResolution,maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});return i.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,imageSmoothing:e.imageSmoothing,opaque:e.opaque,projection:n,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:a,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection})||this}return e(r,i),r}(i);export{n as X};