(()=>{"use strict";var e={d:(t,i)=>{for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{useScreenHeight:()=>f,useScreenSize:()=>l,useScreenWidth:()=>p,useSystem:()=>d});const i=require("react");function n(e,t){let i=null;return function(...n){null!==i&&clearTimeout(i),i=setTimeout((()=>{e(...n)}),t)}}var s;!function(e){e.desktop="desktop",e.mobile="mobile",e.tablet="tablet"}(s||(s={}));const o={[s.desktop]:980,[s.mobile]:320,[s.tablet]:768},r={height:o.tablet,width:o.desktop};function a(){if("undefined"==typeof document)return r;const{documentElement:e}=document;if(!e)return r;const{clientWidth:t,clientHeight:i}=e;return{height:i,width:t}}function u(){if("undefined"==typeof window)return 2;const{devicePixelRatio:e}=window;return e<=2?2:e}function c(e,t){const i=e>t,n=(r=e)>=o[s.desktop]?s.desktop:r>=o[s.tablet]?s.tablet:s.mobile;var r;return{devicePixelRatio:u(),isDesktop:n===s.desktop,isLandscape:i,isMobile:n===s.mobile,isPortrait:!i,isTablet:n===s.tablet,name:n}}function d(){const e="undefined"!=typeof window,{width:t,height:s}=a(),{devicePixelRatio:o,isDesktop:r,isLandscape:u,isMobile:d,isPortrait:l,isTablet:p,name:f}=c(t,s),[w,b]=(0,i.useState)(o),[h,m]=(0,i.useState)(r),[v,S]=(0,i.useState)(u),[g,k]=(0,i.useState)(d),[y,E]=(0,i.useState)(l),[P,L]=(0,i.useState)(p),[z,M]=(0,i.useState)(f),T=(0,i.useCallback)((()=>{const{width:e,height:t}=a(),{devicePixelRatio:i,isDesktop:n,isLandscape:s,isMobile:o,isPortrait:r,isTablet:u,name:d}=c(e,t);b(i),m(n),S(s),k(o),E(r),L(u),M(d)}),[]);(0,i.useEffect)((()=>{const e=n(T,150);return window.addEventListener("resize",e,{capture:!1,passive:!0}),()=>{window.removeEventListener("resize",e,{capture:!1})}}),[T]);const x=(0,i.useMemo)((()=>({devicePixelRatio:w,isDesktop:h,isLandscape:v,isMobile:g,isPortrait:y,isTablet:P,name:z})),[w,h,v,g,y,P,z]);return(0,i.useMemo)((()=>({isBrowser:e,screenInfo:x})),[e,x])}function l(){const{width:e,height:t}=a(),[s,o]=(0,i.useState)(e),[r,u]=(0,i.useState)(t),c=(0,i.useCallback)((()=>{const{width:e,height:t}=a();o(e),u(t)}),[]);return(0,i.useEffect)((()=>{const e=n(c,150);return window.addEventListener("resize",e,{capture:!1,passive:!0}),()=>{window.removeEventListener("resize",e,{capture:!1})}}),[c]),(0,i.useMemo)((()=>({height:r,width:s})),[r,s])}function p(){const{width:e}=a(),[t,s]=(0,i.useState)(e),o=(0,i.useCallback)((()=>{const{width:e}=a();s(e)}),[]);return(0,i.useEffect)((()=>{const e=n(o,150);return window.addEventListener("resize",e,{capture:!1,passive:!0}),()=>{window.removeEventListener("resize",e,{capture:!1})}}),[o]),t}function f(){const{height:e}=a(),[t,s]=(0,i.useState)(e),o=(0,i.useCallback)((()=>{const{height:e}=a();s(e)}),[]);return(0,i.useEffect)((()=>{const e=n(o,150);return window.addEventListener("resize",e,{capture:!1,passive:!0}),()=>{window.removeEventListener("resize",e,{capture:!1})}}),[o]),t}module.exports=t})();