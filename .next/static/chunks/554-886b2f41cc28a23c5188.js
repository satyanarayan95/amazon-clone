(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[554],{6049:function(e,t,n){"use strict";n.d(t,{Oqj:function(){return o},W1M:function(){return i},Q1y:function(){return a}});var r=n(7294);var o=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"}))};var i=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))};var a=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"}))}},9917:function(e,t,n){"use strict";var r=n(3848),o=n(3115),i=n(2426);t.default=function(e){var t=e.src,n=e.sizes,o=e.unoptimized,i=void 0!==o&&o,l=e.priority,p=void 0!==l&&l,m=e.loading,v=e.className,g=e.quality,y=e.width,b=e.height,w=e.objectFit,S=e.objectPosition,M=e.loader,j=void 0===M?A:M,O=e.placeholder,_=void 0===O?"empty":O,z=e.blurDataURL,E=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader","placeholder","blurDataURL"]),C=n?"responsive":"intrinsic";"layout"in E&&(E.layout&&(C=E.layout),delete E.layout);var I="";if(function(e){return"object"===typeof e&&(h(e)||function(e){return void 0!==e.src}(e))}(t)){var D=h(t)?t.default:t;if(!D.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(D)));if(z=z||D.blurDataURL,I=D.src,(!C||"fill"!==C)&&(b=b||D.height,y=y||D.width,!D.height||!D.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(D)))}t="string"===typeof t?t:I;var P=k(y),R=k(b),L=k(g);0;var q=!p&&("lazy"===m||"undefined"===typeof m);t&&t.startsWith("data:")&&(i=!0,q=!1);var W,H,N,B=(0,f.useIntersection)({rootMargin:"200px",disabled:!q}),U=r(B,2),F=U[0],T=U[1],Q=!q||T,V=(0,c.default)({position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:w,objectPosition:S},"blur"===_?{filter:"blur(20px)",backgroundSize:"cover",backgroundImage:'url("'.concat(z,'")')}:void 0);if("undefined"!==typeof P&&"undefined"!==typeof R&&"fill"!==C){var J=R/P,Z=isNaN(J)?"100%":"".concat(100*J,"%");"responsive"===C?(W={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},H={display:"block",boxSizing:"border-box",paddingTop:Z}):"intrinsic"===C?(W={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},H={boxSizing:"border-box",display:"block",maxWidth:"100%"},N='<svg width="'.concat(P,'" height="').concat(R,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===C&&(W={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:P,height:R})}else"undefined"===typeof P&&"undefined"===typeof R&&"fill"===C&&(W={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var $={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};Q&&($=x({src:t,unoptimized:i,layout:C,width:P,quality:L,sizes:n,loader:j}));return u.default.createElement("div",{style:W},H?u.default.createElement("div",{style:H},N?u.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,d.toBase64)(N))}):null):null,!Q&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},E,x({src:t,unoptimized:i,layout:C,width:P,quality:L,sizes:n,loader:j}),{decoding:"async",style:V,className:v}))),u.default.createElement("img",Object.assign({},E,$,{decoding:"async",className:v,ref:function(e){F(e),function(e,t){if("blur"===t&&e){var n=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"}))};e.complete?n():e.onload=n}}(e,_)},style:V})),p?u.default.createElement(s.default,null,u.default.createElement("link",{key:"__nimg-"+$.src+$.srcSet+$.sizes,rel:"preload",as:"image",href:$.srcSet?void 0:$.src,imagesrcset:$.srcSet,imagesizes:$.sizes})):null)};var a=i(n(6169)),c=i(n(9566)),u=i(n(7294)),s=i(n(2775)),d=n(8814),l=n(5655),f=n(7426);var p=new Map([["imgix",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,i=["auto=format","fit=max","w="+r],a="";o&&i.push("q="+o);i.length&&(a="?"+i.join("&"));return"".concat(t).concat(S(n)).concat(a)}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,i=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(i).concat(S(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(S(n),"?imwidth=").concat(r)}],["default",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}]]);function h(e){return void 0!==e.default}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||l.imageConfigDefault,v=m.deviceSizes,g=m.imageSizes,y=m.loader,b=m.path,w=(m.domains,[].concat(o(v),o(g)));function x(e){var t=e.src,n=e.unoptimized,r=e.layout,i=e.width,a=e.quality,c=e.sizes,u=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var s=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,a=[];r=i.exec(n);r)a.push(parseInt(r[2]));if(a.length){var c=.01*Math.min.apply(Math,a);return{widths:w.filter((function(e){return e>=v[0]*c})),kind:"w"}}return{widths:w,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:v,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return w.find((function(t){return t>=e}))||w[w.length-1]})))),kind:"x"}}(i,r,c),d=s.widths,l=s.kind,f=d.length-1;return{sizes:c||"w"!==l?c:"100vw",srcSet:d.map((function(e,n){return"".concat(u({src:t,quality:a,width:e})," ").concat("w"===l?e:n+1).concat(l)})).join(", "),src:u({src:t,quality:a,width:d[f]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t=p.get(y);if(t)return t((0,c.default)({root:b},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(y))}function S(e){return"/"===e[0]?e.slice(1):e}v.sort((function(e,t){return e-t})),w.sort((function(e,t){return e-t}))},7426:function(e,t,n){"use strict";var r=n(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,u=(0,o.useRef)(),s=(0,o.useState)(!1),d=r(s,2),l=d[0],f=d[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||l||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,l]);return(0,o.useEffect)((function(){if(!a&&!l){var e=(0,i.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[l]),[p,l]};var o=n(7294),i=n(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},i=n(3398);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},2775:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(i=n(3244))&&i.__esModule?i:{default:i},u=n(3398),s=n(1165),d=n(6393);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var u=0,s=h.length;u<s;u++){var d=h[u];if(o.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?i=!1:n.add(d);else{var l=o.props[d],f=r[d]||new Set;"name"===d&&a||!f.has(l)?(f.add(l),r[d]=f):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,a.default.cloneElement(e,c)}return a.default.cloneElement(e,{key:i})}))}var v=function(e){var t=e.children,n=(0,a.useContext)(u.AmpStateContext),r=(0,a.useContext)(s.HeadManagerContext);return a.default.createElement(c.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,d.isInAmpMode)(n)},t)};t.default=v},3244:function(e,t,n){"use strict";var r=n(3115),o=n(2553),i=n(2012),a=(n(450),n(9807)),c=n(7690),u=n(9828);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n(7294),l=function(e){a(n,e);var t=s(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},8814:function(e,t){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},5655:function(e,t){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1}},5675:function(e,t,n){e.exports=n(9917)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},4121:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(355);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),o=n(7381),i=n(3585),a=n(5725);e.exports=function(e){return r(e)||o(e)||i(e)||a()}},1163:function(e,t,n){e.exports=n(4651)}}]);