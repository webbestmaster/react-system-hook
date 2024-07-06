(()=>{"use strict";var e={d:(t,i)=>{for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{ScreenWidthNameEnum:()=>r,getDocumentIsVisible:()=>s,getScreenName:()=>c,screenMinWidth:()=>u,useDocumentVisibility:()=>o,useScreenHeight:()=>f,useScreenSize:()=>b,useScreenWidth:()=>m,useSystem:()=>h});const i=require("react");function n(e,t){let i=null;return function(...n){null!==i&&clearTimeout(i),i=setTimeout((()=>{e(...n)}),t)}}function s(){return"undefined"!=typeof document&&"visible"===document.visibilityState}function o(){const[e,t]=(0,i.useState)(s()),o=(0,i.useCallback)((()=>{t(s())}),[]);return(0,i.useEffect)((()=>{const e=n(o,150);return document.addEventListener("visibilitychange",e,{capture:!1,passive:!0}),()=>{document.removeEventListener("visibilitychange",e,{capture:!1})}}),[o]),(0,i.useMemo)((()=>e),[e])}var r;!function(e){e.desktop="desktop",e.mobile="mobile",e.tablet="tablet"}(r||(r={}));const u={[r.desktop]:1024,[r.mobile]:320,[r.tablet]:768},a={height:u.tablet,width:u.desktop};function c(e){return e>=u[r.desktop]?r.desktop:e>=u[r.tablet]?r.tablet:r.mobile}function d(){if("undefined"==typeof document)return a;const{documentElement:e}=document,{clientWidth:t,clientHeight:i}=e;return{height:i,width:t}}function l(){if("undefined"==typeof window)return 2;const{devicePixelRatio:e}=window;return e<=2?2:e}function p(e,t){const i=e>t,n=c(e);return{devicePixelRatio:l(),isDesktop:n===r.desktop,isLandscape:i,isMobile:n===r.mobile,isPortrait:!i,isTablet:n===r.tablet,name:n}}function f(){const{height:e}=d(),[t,s]=(0,i.useState)(e),o=(0,i.useCallback)((()=>{const{height:e}=d();s(e)}),[]);return(0,i.useEffect)((()=>{const e=n(o,150);return window.addEventListener("resize",e,{capture:!1,passive:!0}),()=>{window.removeEventListener("resize",e,{capture:!1})}}),[o]),t}function b(){const{width:e,height:t}=d(),[s,o]=(0,i.useState)(e),[r,u]=(0,i.useState)(t),a=(0,i.useCallback)((()=>{const{width:e,height:t}=d();o(e),u(t)}),[]);return(0,i.useEffect)((()=>{const e=n(a,150);return window.addEventListener("resize",e,{capture:!1,passive:!0}),()=>{window.removeEventListener("resize",e,{capture:!1})}}),[a]),(0,i.useMemo)((()=>({height:r,width:s})),[r,s])}function m(){const{width:e}=d(),[t,s]=(0,i.useState)(e),o=(0,i.useCallback)((()=>{const{width:e}=d();s(e)}),[]);return(0,i.useEffect)((()=>{const e=n(o,150);return window.addEventListener("resize",e,{capture:!1,passive:!0}),()=>{window.removeEventListener("resize",e,{capture:!1})}}),[o]),t}function h(){const e="undefined"!=typeof window,{width:t,height:s}=d(),{devicePixelRatio:o,isDesktop:r,isLandscape:u,isMobile:a,isPortrait:c,isTablet:l,name:f}=p(t,s),[b,m]=(0,i.useState)(o),[h,v]=(0,i.useState)(r),[w,S]=(0,i.useState)(u),[g,y]=(0,i.useState)(a),[E,k]=(0,i.useState)(c),[L,P]=(0,i.useState)(l),[M,z]=(0,i.useState)(f),T=(0,i.useCallback)((()=>{const{width:e,height:t}=d(),{devicePixelRatio:i,isDesktop:n,isLandscape:s,isMobile:o,isPortrait:r,isTablet:u,name:a}=p(e,t);m(i),v(n),S(s),y(o),k(r),P(u),z(a)}),[]);(0,i.useEffect)((()=>{const e=n(T,150);return window.addEventListener("resize",e,{capture:!1,passive:!0}),()=>{window.removeEventListener("resize",e,{capture:!1})}}),[T]);const x=(0,i.useMemo)((()=>({devicePixelRatio:b,isDesktop:h,isLandscape:w,isMobile:g,isPortrait:E,isTablet:L,name:M})),[b,h,w,g,E,L,M]);return(0,i.useMemo)((()=>({isBrowser:e,screenInfo:x})),[e,x])}module.exports=t})();
//# sourceMappingURL=index.js.map