import*as e from"react";import t,{useState as n,useEffect as r,useCallback as i,useRef as o}from"react";import{createPortal as a}from"react-dom";var s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)};function l(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}function c(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var u,d,p,f=function(e,t){return function(e){return"function"==typeof e}(e)?e(t):e},m=(u=0,function(){return(++u).toString()}),g=(d=void 0,function(){if(void 0===d&&"undefined"!=typeof window){var e=matchMedia("(prefers-reduced-motion: reduce)");d=!e||e.matches}return d}),v=function(e){switch(e){case"info":return"rgb(2, 136, 209)";case"success":return"rgb(56, 142, 60)";case"error":return"rgb(211, 47, 47)";case"warning":return"rgb(245, 124, 0)";default:return"#262626"}};!function(e){e[e.ADD_TOAST=0]="ADD_TOAST",e[e.UPDATE_TOAST=1]="UPDATE_TOAST",e[e.UPSERT_TOAST=2]="UPSERT_TOAST",e[e.DISMISS_TOAST=3]="DISMISS_TOAST",e[e.REMOVE_TOAST=4]="REMOVE_TOAST",e[e.START_PAUSE=5]="START_PAUSE",e[e.END_PAUSE=6]="END_PAUSE"}(p||(p={}));var h=new Map,b=function(e){if(!h.has(e)){var t=setTimeout((function(){h.delete(e),E({type:p.REMOVE_TOAST,toastId:e})}),1e3);h.set(e,t)}},y=function(e,t){switch(t.type){case p.ADD_TOAST:return s(s({},e),{toasts:l([t.toast],e.toasts,!0).slice(0,20)});case p.UPDATE_TOAST:return t.toast.id&&(o=t.toast.id,(a=h.get(o))&&clearTimeout(a)),s(s({},e),{toasts:e.toasts.map((function(e){return e.id===t.toast.id?s(s({},e),t.toast):e}))});case p.UPSERT_TOAST:var n=t.toast;return e.toasts.find((function(e){return e.id===n.id}))?y(e,{type:p.UPDATE_TOAST,toast:n}):y(e,{type:p.ADD_TOAST,toast:n});case p.DISMISS_TOAST:var r=t.toastId;return r?b(r):e.toasts.forEach((function(e){b(e.id)})),s(s({},e),{toasts:e.toasts.map((function(e){return e.id===r||void 0===r?s(s({},e),{visible:!1}):e}))});case p.REMOVE_TOAST:return void 0===t.toastId?s(s({},e),{toasts:[]}):s(s({},e),{toasts:e.toasts.filter((function(e){return e.id!==t.toastId}))});case p.START_PAUSE:return s(s({},e),{pausedAt:t.time});case p.END_PAUSE:var i=t.time-(e.pausedAt||0);return s(s({},e),{pausedAt:void 0,toasts:e.toasts.map((function(e){return s(s({},e),{pauseDuration:e.pauseDuration+i})}))})}var o,a},x=[],w={toasts:[],pausedAt:void 0},E=function(e){w=y(w,e),x.forEach((function(e){e(w)}))},S={blank:4e3,error:4e3,success:4e3,info:4e3,warning:4e3,loading:1/0,custom:4e3},T=function(e){void 0===e&&(e={});var t=n(w),i=t[0],o=t[1];r((function(){return x.push(o),function(){var e=x.indexOf(o);e>-1&&x.splice(e,1)}}),[i]);var a=i.toasts.map((function(t){var n,r;return s(s(s(s({},e),e[t.type]),t),{duration:t.duration||(null===(n=e[t.type])||void 0===n?void 0:n.duration)||(null==e?void 0:e.duration)||S[t.type],style:s(s(s({},e.style),null===(r=e[t.type])||void 0===r?void 0:r.style),t.style)})}));return s(s({},i),{toasts:a})},A=function(e){return function(t,n){var r=function(e,t,n){var r,i,o,a;return void 0===t&&(t="blank"),s(s({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0},n),{id:(null==n?void 0:n.id)||m(),theme:(null==n?void 0:n.theme)?n.theme:"coloured",style:s({backgroundColor:(null===(r=null==n?void 0:n.style)||void 0===r?void 0:r.backgroundColor)?null===(i=null==n?void 0:n.style)||void 0===i?void 0:i.backgroundColor:"coloured"===(null==n?void 0:n.theme)?v(t):"#fff",color:(null===(o=null==n?void 0:n.style)||void 0===o?void 0:o.color)?null===(a=null==n?void 0:n.style)||void 0===a?void 0:a.color:"coloured"===(null==n?void 0:n.theme)?"#fff":"#262626"},null==n?void 0:n.style)})}("string"==typeof t?t.trim():t,e,n);return E({type:p.UPSERT_TOAST,toast:r}),r.id}},_=function(e,t){return A("blank")(e,t)};_.success=A("success"),_.info=A("info"),_.error=A("error"),_.warning=A("warning"),_.loading=A("loading"),_.custom=A("custom"),_.dismiss=function(e){E({type:p.DISMISS_TOAST,toastId:e})},_.remove=function(e){return E({type:p.REMOVE_TOAST,toastId:e})},_.promise=function(e,t,n){var r=_.loading(t.loading,s(s({},n),null==n?void 0:n.loading));return e.then((function(e){return _.success(f(t.success,e),s(s({id:r},n),null==n?void 0:n.success)),e})).catch((function(e){_.error(f(t.error,e),s(s({id:r},n),null==n?void 0:n.error))})),e};var O=function(e,t){E({type:p.UPDATE_TOAST,toast:{id:e,height:t}})},k=function(){E({type:p.START_PAUSE,time:Date.now()})},R=function(e){var t=T(e),n=t.toasts,o=t.pausedAt;r((function(){if(!o){var e=Date.now(),t=n.map((function(t){if(t.duration!==1/0){var n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(n<0))return setTimeout((function(){return _.dismiss(t.id)}),n);t.visible&&_.dismiss(t.id)}}));return function(){t.forEach((function(e){return e&&clearTimeout(e)}))}}}),[n,o]);var a=i((function(){o&&E({type:p.END_PAUSE,time:Date.now()})}),[o]),s=i((function(e,t){var r,i=t||{},o=i.reverseOrder,a=void 0!==o&&o,s=i.gutter,l=void 0===s?8:s,c=i.defaultPosition,u=n.filter((function(t){return(t.position||c)===(e.position||c)&&t.height})),d=u.findIndex((function(t){return t.id===e.id})),p=u.filter((function(e,t){return t<d&&e.visible})).length,f=(r=u.filter((function(e){return e.visible}))).slice.apply(r,a?[p+1]:[0,p]).reduce((function(e,t){return e+(t.height||0)+l}),0);return f}),[n]);return{toasts:n,handlers:{updateHeight:O,startPause:k,endPause:a,calculateOffset:s}}};let D,C,P,M={data:""},j=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||M,z=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,U=/\/\*[^]*?\*\/|  +/g,V=/\n+/g,I=(e,t)=>{let n="",r="",i="";for(let o in e){let a=e[o];"@"==o[0]?"i"==o[1]?n=o+" "+a+";":r+="f"==o[1]?I(a,o):o+"{"+I(a,"k"==o[1]?"":t)+"}":"object"==typeof a?r+=I(a,t?t.replace(/([^,])+/g,(e=>o.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):o):null!=a&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=I.p?I.p(o,a):o+":"+a+";")}return n+(t&&i?t+"{"+i+"}":i)+r},N={},G=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+G(e[n]);return t}return e},L=(e,t,n,r,i)=>{let o=G(e),a=N[o]||(N[o]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(o));if(!N[a]){let t=o!==e?e:(e=>{let t,n,r=[{}];for(;t=z.exec(e.replace(U,""));)t[4]?r.shift():t[3]?(n=t[3].replace(V," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(V," ").trim();return r[0]})(e);N[a]=I(i?{["@keyframes "+a]:t}:t,n?"":"."+a)}let s=n&&N.g?N.g:null;return n&&(N.g=N[a]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(N[a],t,r,s),a},H=(e,t,n)=>e.reduce(((e,r,i)=>{let o=t[i];if(o&&o.call){let e=o(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":I(e,""):!1===e?"":e}return e+r+(null==o?"":o)}),"");function Z(e){let t=this||{},n=e.call?e(t.p):e;return L(n.unshift?n.raw?H(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>Object.assign(e,n&&n.call?n(t.p):n)),{}):n,j(t.target),t.g,t.o,t.k)}Z.bind({g:1});let B=Z.bind({k:1});function F(e,t){let n=this||{};return function(){let r=arguments;function i(o,a){let s=Object.assign({},o),l=s.className||i.className;n.p=Object.assign({theme:C&&C()},s),n.o=/ *go\d+/.test(l),s.className=Z.apply(n,r)+(l?" "+l:""),t&&(s.ref=a);let c=e;return e[0]&&(c=s.as||e,delete s.as),P&&c[0]&&P(s),D(c,s)}return t?t(i):i}}var Q,q,Y,$,J,K,W,X,ee,te=F("div")(Q||(Q=c(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n  font-size: 18px;\n"],["\n  position: relative;\n  display: flex;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n  font-size: 18px;\n"]))),ne=B(q||(q=c(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }"],["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }"]))),re=F("div")(Y||(Y=c(["\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: inline-block;\n  border-top: 3px solid #262626;\n  border-right: 3px solid transparent;\n  box-sizing: border-box;\n  animation: "," 1s linear infinite;\n"],["\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: inline-block;\n  border-top: 3px solid #262626;\n  border-right: 3px solid transparent;\n  box-sizing: border-box;\n  animation: "," 1s linear infinite;\n"])),ne),ie=B($||($=c(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"],["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),oe=F("div")(J||(J=c(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"],["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),ie),ae=function(t){var n=t.toast,r=n.icon,i=n.type,o=n.theme,a=n.iconColor;return void 0!==r?"string"==typeof r?e.createElement(oe,null,r):r:"blank"===i?null:e.createElement(te,null,"loading"!==i&&("error"===i?e.createElement("svg",{width:"19px",height:"19px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),e.createElement("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("g",{id:"SVGRepo_iconCarrier"},e.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.5-5.009c0-.867.659-1.491 1.491-1.491.85 0 1.509.624 1.509 1.491 0 .867-.659 1.509-1.509 1.509-.832 0-1.491-.642-1.491-1.509zM11.172 6a.5.5 0 0 0-.499.522l.306 7a.5.5 0 0 0 .5.478h1.043a.5.5 0 0 0 .5-.478l.305-7a.5.5 0 0 0-.5-.522h-1.655z",fill:"#000000",style:{fill:a||("coloured"===o?"#fff":"rgb(211, 47, 47)")}}))):"info"===i?e.createElement("svg",{fill:"#000000",xmlns:"http://www.w3.org/2000/svg",width:"18px",height:"18px",viewBox:"0 0 52 52","enable-background":"new 0 0 52 52"},e.createElement("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),e.createElement("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("g",{id:"SVGRepo_iconCarrier"},e.createElement("path",{d:"M26,2C12.7,2,2,12.7,2,26s10.7,24,24,24s24-10.7,24-24S39.3,2,26,2z M26,14.1c1.7,0,3,1.3,3,3s-1.3,3-3,3 s-3-1.3-3-3S24.3,14.1,26,14.1z M31,35.1c0,0.5-0.4,0.9-1,0.9h-3c-0.4,0-3,0-3,0h-2c-0.5,0-1-0.3-1-0.9v-2c0-0.5,0.4-1.1,1-1.1l0,0 c0.5,0,1-0.3,1-0.9v-4c0-0.5-0.4-1.1-1-1.1l0,0c-0.5,0-1-0.3-1-0.9v-2c0-0.5,0.4-1.1,1-1.1h6c0.5,0,1,0.5,1,1.1v8 c0,0.5,0.4,0.9,1,0.9l0,0c0.5,0,1,0.5,1,1.1V35.1z",style:{fill:a||("coloured"===o?"#fff":"rgb(2, 136, 209)")}})," ")):"warning"===i?e.createElement("svg",{fill:"#000000",width:"18px",height:"18px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),e.createElement("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("g",{id:"SVGRepo_iconCarrier"},e.createElement("path",{d:"M22.25,17.55,14.63,3.71a3,3,0,0,0-5.26,0L1.75,17.55A3,3,0,0,0,4.38,22H19.62a3,3,0,0,0,2.63-4.45ZM12,18a1,1,0,1,1,1-1A1,1,0,0,1,12,18Zm1-5a1,1,0,0,1-2,0V9a1,1,0,0,1,2,0Z",style:{fill:a||("coloured"===o?"#262626":"rgb(245, 124, 0)")}}))):e.createElement("svg",{viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",fill:"#000000",width:"18px",height:"18px"},e.createElement("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),e.createElement("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("g",{id:"SVGRepo_iconCarrier"},e.createElement("title",null,"check-circle-solid"),e.createElement("g",{id:"Layer_2","data-name":"Layer 2"},e.createElement("g",{id:"invisible_box","data-name":"invisible box"},e.createElement("rect",{width:"48",height:"48",fill:"none"})),e.createElement("g",{id:"icons_Q2","data-name":"icons Q2"},e.createElement("path",{d:"M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM35.4,18.4l-14,14a1.9,1.9,0,0,1-2.8,0l-5.9-5.9a2.2,2.2,0,0,1-.4-2.7,2,2,0,0,1,3.1-.2L20,28.2,32.6,15.6a2,2,0,0,1,2.8,2.8Z",style:{fill:a||("coloured"===o?"#fff":"rgb(56, 142, 60)")}}))))))||"loading"===i&&e.createElement(re,null))},se=function(e){return"\n0% {transform: translate3d(0,".concat(-200*e,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},le=function(e){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*e,"%,-1px) scale(.6); opacity:0;}\n")},ce=F("div")(K||(K=c(['\n  display: flex;\n  align-items: center;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 360px;\n  pointer-events: auto;\n  border-radius: 8px;\n  position: relative;\n  font-size: 14px;\n  padding: 6px 8px;\n  font-family: "Roboto", sans-serif;\n'],['\n  display: flex;\n  align-items: center;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 360px;\n  pointer-events: auto;\n  border-radius: 8px;\n  position: relative;\n  font-size: 14px;\n  padding: 6px 8px;\n  font-family: "Roboto", sans-serif;\n']))),ue=F("div")(W||(W=c(["\n  display: flex;\n  justify-content: flex-start;\n  color: inherit;\n  margin: 4px 4px 4px 8px;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"],["\n  display: flex;\n  justify-content: flex-start;\n  color: inherit;\n  margin: 4px 4px 4px 8px;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),de=F("div")(X||(X=c(["\n  position: absolute;\n  bottom: 0.1%;\n  left: 0.5%;\n  right: 0.1%;\n  width: 98%;\n  height: 0.3rem;\n  background-color: transparent;\n"],["\n  position: absolute;\n  bottom: 0.1%;\n  left: 0.5%;\n  right: 0.1%;\n  width: 98%;\n  height: 0.3rem;\n  background-color: transparent;\n"]))),pe=F("div")(ee||(ee=c(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n"],["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n"]))),fe=t.memo((function(e){var i,a,l=e.toast,c=e.position,u=e.style,d=e.children,p=l.height?function(e,t){var n=e.includes("top")?1:-1,r=g()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[se(n),le(n)],i=r[1];return{animation:t?"".concat(B(r[0])," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(B(i)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(l.position||c||"top-center",l.visible):{opacity:0},m=t.createElement(ae,{toast:l}),h=t.createElement(ue,s({},l.ariaProps),f(l.message,l)),b=o(),y=n(100),x=y[0],w=y[1];r((function(){return l.duration&&(b.current=setInterval((function(){x>0&&w((function(e){return e-1}))}),l.duration/100)),function(){clearInterval(b.current)}}),[]);var E=l.progressbar&&t.createElement(de,null,t.createElement(pe,{style:{width:"".concat(x,"%"),backgroundColor:"coloured"===l.theme?"#fff":v(l.type),borderRadius:(null===(i=l.style)||void 0===i?void 0:i.borderRadius)?null===(a=l.style)||void 0===a?void 0:a.borderRadius:"8px"}}));return t.createElement(ce,{className:l.className,style:s(s(s({},p),u),l.style)},"function"==typeof d?d({icon:m,message:h}):t.createElement(t.Fragment,null,m,h,E))}));!function(e,t,n,r){I.p=t,D=e,C=n,P=r}(e.createElement);var me,ge=function(t){var n=t.id,r=t.className,i=t.style,o=t.onHeightUpdate,a=t.children,s=e.useCallback((function(e){if(e){var t=function(){var t=e.getBoundingClientRect().height;o(n,t)};t(),new MutationObserver(t).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[n,o]);return e.createElement("div",{ref:s,className:r,style:i},a)},ve=Z(me||(me=c(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"],["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),he=function(t){var n=t.reverseOrder,r=t.position,i=void 0===r?"top-center":r,o=t.toastOptions,l=t.gutter,c=t.children,u=t.containerStyle,d=t.containerClassName,p=R(o),m=p.toasts,v=p.handlers;return a(e.createElement("div",{style:s({position:"fixed",zIndex:99999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},u),className:d},m.map((function(t){var r=t.position||i,o=function(e,t){var n=e.includes("top"),r=n?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return s(s({left:0,right:0,display:"flex",position:"absolute",transition:g()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(n?1:-1),"px)")},r),i)}(r,v.calculateOffset(t,{reverseOrder:n,gutter:l,defaultPosition:i}));return e.createElement(ge,{id:t.id,key:t.id,onHeightUpdate:v.updateHeight,className:t.visible?ve:"",style:o},"custom"===t.type?f(t.message,t):c?c(t):e.createElement(fe,{toast:t,position:r}))}))),document.body)};export{fe as ToastBar,ae as ToastIcon,he as Toaster,_ as default,f as resolveValue,_ as toast,R as useToaster,T as useToasterStore};
//# sourceMappingURL=index.js.map
