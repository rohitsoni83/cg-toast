"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),e=require("react-dom");function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}function r(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}})),e.default=t,Object.freeze(e)}var o=r(t),i=n(t),a=function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)};function s(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}function l(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var c,u,d,f=function(t,e){return function(t){return"function"==typeof t}(t)?t(e):t},p=(c=0,function(){return(++c).toString()}),m=(u=void 0,function(){if(void 0===u&&"undefined"!=typeof window){var t=matchMedia("(prefers-reduced-motion: reduce)");u=!t||t.matches}return u}),g=function(t){switch(t){case"info":return"rgb(2, 136, 209)";case"success":return"rgb(56, 142, 60)";case"error":return"rgb(211, 47, 47)";case"warning":return"rgb(245, 124, 0)";default:return"#262626"}};!function(t){t[t.ADD_TOAST=0]="ADD_TOAST",t[t.UPDATE_TOAST=1]="UPDATE_TOAST",t[t.UPSERT_TOAST=2]="UPSERT_TOAST",t[t.DISMISS_TOAST=3]="DISMISS_TOAST",t[t.REMOVE_TOAST=4]="REMOVE_TOAST",t[t.START_PAUSE=5]="START_PAUSE",t[t.END_PAUSE=6]="END_PAUSE"}(d||(d={}));var v=new Map,b=function(t){if(!v.has(t)){var e=setTimeout((function(){v.delete(t),T({type:d.REMOVE_TOAST,toastId:t})}),1e3);v.set(t,e)}},h=function(t,e){switch(e.type){case d.ADD_TOAST:return a(a({},t),{toasts:s([e.toast],t.toasts,!0).slice(0,20)});case d.UPDATE_TOAST:return e.toast.id&&(i=e.toast.id,(l=v.get(i))&&clearTimeout(l)),a(a({},t),{toasts:t.toasts.map((function(t){return t.id===e.toast.id?a(a({},t),e.toast):t}))});case d.UPSERT_TOAST:var n=e.toast;return t.toasts.find((function(t){return t.id===n.id}))?h(t,{type:d.UPDATE_TOAST,toast:n}):h(t,{type:d.ADD_TOAST,toast:n});case d.DISMISS_TOAST:var r=e.toastId;return r?b(r):t.toasts.forEach((function(t){b(t.id)})),a(a({},t),{toasts:t.toasts.map((function(t){return t.id===r||void 0===r?a(a({},t),{visible:!1}):t}))});case d.REMOVE_TOAST:return void 0===e.toastId?a(a({},t),{toasts:[]}):a(a({},t),{toasts:t.toasts.filter((function(t){return t.id!==e.toastId}))});case d.START_PAUSE:return a(a({},t),{pausedAt:e.time});case d.END_PAUSE:var o=e.time-(t.pausedAt||0);return a(a({},t),{pausedAt:void 0,toasts:t.toasts.map((function(t){return a(a({},t),{pauseDuration:t.pauseDuration+o})}))})}var i,l},y=[],x={toasts:[],pausedAt:void 0},T=function(t){x=h(x,t),y.forEach((function(t){t(x)}))},E={blank:4e3,error:4e3,success:4e3,info:4e3,warning:4e3,loading:1/0,custom:4e3},S=function(e){void 0===e&&(e={});var n=t.useState(x),r=n[0],o=n[1];t.useEffect((function(){return y.push(o),function(){var t=y.indexOf(o);t>-1&&y.splice(t,1)}}),[r]);var i=r.toasts.map((function(t){var n,r;return a(a(a(a({},e),e[t.type]),t),{duration:t.duration||(null===(n=e[t.type])||void 0===n?void 0:n.duration)||(null==e?void 0:e.duration)||E[t.type],style:a(a(a({},e.style),null===(r=e[t.type])||void 0===r?void 0:r.style),t.style)})}));return a(a({},r),{toasts:i})},A=function(t){return function(e,n){var r=function(t,e,n){var r,o,i,s;return void 0===e&&(e="blank"),a(a({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},n),{id:(null==n?void 0:n.id)||p(),theme:(null==n?void 0:n.theme)?n.theme:"light",style:a({backgroundColor:(null===(r=null==n?void 0:n.style)||void 0===r?void 0:r.backgroundColor)?null===(o=null==n?void 0:n.style)||void 0===o?void 0:o.backgroundColor:"coloured"===(null==n?void 0:n.theme)?g(e):"#fff",color:(null===(i=null==n?void 0:n.style)||void 0===i?void 0:i.color)?null===(s=null==n?void 0:n.style)||void 0===s?void 0:s.color:"coloured"===(null==n?void 0:n.theme)?"#fff":"#262626"},null==n?void 0:n.style)})}("string"==typeof e?e.trim():e,t,n);return T({type:d.UPSERT_TOAST,toast:r}),r.id}},O=function(t,e){return A("blank")(t,e)};O.success=A("success"),O.info=A("info"),O.error=A("error"),O.warning=A("warning"),O.loading=A("loading"),O.custom=A("custom"),O.dismiss=function(t){T({type:d.DISMISS_TOAST,toastId:t})},O.remove=function(t){return T({type:d.REMOVE_TOAST,toastId:t})},O.promise=function(t,e,n){var r=O.loading(e.loading,a(a({},n),null==n?void 0:n.loading));return t.then((function(t){return O.success(f(e.success,t),a(a({id:r},n),null==n?void 0:n.success)),t})).catch((function(t){O.error(f(e.error,t),a(a({id:r},n),null==n?void 0:n.error))})),t};var w=function(t,e){T({type:d.UPDATE_TOAST,toast:{id:t,height:e}})},_=function(){T({type:d.START_PAUSE,time:Date.now()})},D=function(e){var n=S(e),r=n.toasts,o=n.pausedAt;t.useEffect((function(){if(!o){var t=Date.now(),e=r.map((function(e){if(e.duration!==1/0){var n=(e.duration||0)+e.pauseDuration-(t-e.createdAt);if(!(n<0))return setTimeout((function(){return O.dismiss(e.id)}),n);e.visible&&O.dismiss(e.id)}}));return function(){e.forEach((function(t){return t&&clearTimeout(t)}))}}}),[r,o]);var i=t.useCallback((function(){o&&T({type:d.END_PAUSE,time:Date.now()})}),[o]),a=t.useCallback((function(t,e){var n,o=e||{},i=o.reverseOrder,a=void 0!==i&&i,s=o.gutter,l=void 0===s?8:s,c=o.defaultPosition,u=r.filter((function(e){return(e.position||c)===(t.position||c)&&e.height})),d=u.findIndex((function(e){return e.id===t.id})),f=u.filter((function(t,e){return e<d&&t.visible})).length,p=(n=u.filter((function(t){return t.visible}))).slice.apply(n,a?[f+1]:[0,f]).reduce((function(t,e){return t+(e.height||0)+l}),0);return p}),[r]);return{toasts:r,handlers:{updateHeight:w,startPause:_,endPause:i,calculateOffset:a}}};let P,j,k,I={data:""},R=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||I,N=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,U=/\/\*[^]*?\*\/|  +/g,C=/\n+/g,z=(t,e)=>{let n="",r="",o="";for(let i in t){let a=t[i];"@"==i[0]?"i"==i[1]?n=i+" "+a+";":r+="f"==i[1]?z(a,i):i+"{"+z(a,"k"==i[1]?"":e)+"}":"object"==typeof a?r+=z(a,e?e.replace(/([^,])+/g,(t=>i.replace(/(^:.*)|([^,])+/g,(e=>/&/.test(e)?e.replace(/&/g,t):t?t+" "+e:e)))):i):null!=a&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=z.p?z.p(i,a):i+":"+a+";")}return n+(e&&o?e+"{"+o+"}":o)+r},M={},V=t=>{if("object"==typeof t){let e="";for(let n in t)e+=n+V(t[n]);return e}return t},F=(t,e,n,r,o)=>{let i=V(t),a=M[i]||(M[i]=(t=>{let e=0,n=11;for(;e<t.length;)n=101*n+t.charCodeAt(e++)>>>0;return"go"+n})(i));if(!M[a]){let e=i!==t?t:(t=>{let e,n,r=[{}];for(;e=N.exec(t.replace(U,""));)e[4]?r.shift():e[3]?(n=e[3].replace(C," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][e[1]]=e[2].replace(C," ").trim();return r[0]})(t);M[a]=z(o?{["@keyframes "+a]:e}:e,n?"":"."+a)}let s=n&&M.g?M.g:null;return n&&(M.g=M[a]),((t,e,n,r)=>{r?e.data=e.data.replace(r,t):-1===e.data.indexOf(t)&&(e.data=n?t+e.data:e.data+t)})(M[a],e,r,s),a},H=(t,e,n)=>t.reduce(((t,r,o)=>{let i=e[o];if(i&&i.call){let t=i(n),e=t&&t.props&&t.props.className||/^go/.test(t)&&t;i=e?"."+e:t&&"object"==typeof t?t.props?"":z(t,""):!1===t?"":t}return t+r+(null==i?"":i)}),"");function q(t){let e=this||{},n=t.call?t(e.p):t;return F(n.unshift?n.raw?H(n,[].slice.call(arguments,1),e.p):n.reduce(((t,n)=>Object.assign(t,n&&n.call?n(e.p):n)),{}):n,R(e.target),e.g,e.o,e.k)}q.bind({g:1});let L=q.bind({k:1});function B(t,e){let n=this||{};return function(){let r=arguments;function o(i,a){let s=Object.assign({},i),l=s.className||o.className;n.p=Object.assign({theme:j&&j()},s),n.o=/ *go\d+/.test(l),s.className=q.apply(n,r)+(l?" "+l:""),e&&(s.ref=a);let c=t;return t[0]&&(c=s.as||t,delete s.as),k&&c[0]&&k(s),P(c,s)}return e?e(o):o}}var Y,Z,$,G,J,K,Q,W,X,tt=B("div")(Y||(Y=l(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n  font-size: 18px;\n"],["\n  position: relative;\n  display: flex;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n  font-size: 18px;\n"]))),et=L(Z||(Z=l(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }"],["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }"]))),nt=B("div")($||($=l(["\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: inline-block;\n  border-top: 3px solid #262626;\n  border-right: 3px solid transparent;\n  box-sizing: border-box;\n  animation: "," 1s linear infinite;\n"],["\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: inline-block;\n  border-top: 3px solid #262626;\n  border-right: 3px solid transparent;\n  box-sizing: border-box;\n  animation: "," 1s linear infinite;\n"])),et),rt=L(G||(G=l(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"],["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ot=B("div")(J||(J=l(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"],["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),rt),it=function(t){var e=t.toast,n=e.icon,r=e.type,i=e.theme,a=e.customIconColor;return void 0!==n?"string"==typeof n?o.createElement(ot,null,n):n:"blank"===r?null:o.createElement(tt,null,"loading"!==r&&("error"===r?o.createElement("i",{className:"fa-solid fa-circle-exclamation",style:{color:a||("coloured"===i?"#fff":"rgb(211, 47, 47)")}}):"info"===r?o.createElement("i",{className:"fa-solid fa-circle-info",style:{color:a||("coloured"===i?"#fff":"rgb(2, 136, 209)")}}):"warning"===r?o.createElement("i",{className:"fa-solid fa-triangle-exclamation",style:{color:a||("coloured"===i?"#262626":"rgb(245, 124, 0)")}}):o.createElement("i",{className:"fa-solid fa-circle-check",style:{color:a||("coloured"===i?"#fff":"rgb(56, 142, 60)")}}))||"loading"===r&&o.createElement(nt,null))},at=function(t){return"\n0% {transform: translate3d(0,".concat(-200*t,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},st=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*t,"%,-1px) scale(.6); opacity:0;}\n")},lt=B("div")(K||(K=l(['\n  display: flex;\n  align-items: center;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 360px;\n  pointer-events: auto;\n  border-radius: 8px;\n  position: relative;\n  font-size: 16px;\n  padding: 10px;\n  font-family: "Roboto", sans-serif;\n'],['\n  display: flex;\n  align-items: center;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 360px;\n  pointer-events: auto;\n  border-radius: 8px;\n  position: relative;\n  font-size: 16px;\n  padding: 10px;\n  font-family: "Roboto", sans-serif;\n']))),ct=B("div")(Q||(Q=l(["\n  display: flex;\n  justify-content: flex-start;\n  color: inherit;\n  margin: 4px 4px 4px 8px;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"],["\n  display: flex;\n  justify-content: flex-start;\n  color: inherit;\n  margin: 4px 4px 4px 8px;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),ut=B("div")(W||(W=l(["\n  position: absolute;\n  bottom: 0.1%;\n  left: 0.5%;\n  right: 0.1%;\n  width: 98%;\n  height: 0.3rem;\n  background-color: transparent;\n"],["\n  position: absolute;\n  bottom: 0.1%;\n  left: 0.5%;\n  right: 0.1%;\n  width: 98%;\n  height: 0.3rem;\n  background-color: transparent;\n"]))),dt=B("div")(X||(X=l(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n"],["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n"]))),ft=i.default.memo((function(e){var n,r,o=e.toast,s=e.position,l=e.style,c=e.children,u=o.height?function(t,e){var n=t.includes("top")?1:-1,r=m()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[at(n),st(n)],o=r[1];return{animation:e?"".concat(L(r[0])," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(L(o)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(o.position||s||"top-center",o.visible):{opacity:0},d=i.default.createElement(it,{toast:o}),p=i.default.createElement(ct,a({},o.ariaProps),f(o.message,o)),v=t.useRef(),b=t.useState(100),h=b[0],y=b[1];t.useEffect((function(){return o.duration&&(v.current=setInterval((function(){h>0&&y((function(t){return t-1}))}),o.duration/100)),function(){clearInterval(v.current)}}),[]);var x=o.progressbar&&i.default.createElement(ut,null,i.default.createElement(dt,{style:{width:"".concat(h,"%"),backgroundColor:"coloured"===o.theme?"#fff":g(o.type),borderRadius:(null===(n=o.style)||void 0===n?void 0:n.borderRadius)?null===(r=o.style)||void 0===r?void 0:r.borderRadius:"8px"}}));return i.default.createElement(lt,{className:o.className,style:a(a(a({},u),l),o.style)},"function"==typeof c?c({icon:d,message:p}):i.default.createElement(i.default.Fragment,null,d,p,x))}));!function(t,e,n,r){z.p=e,P=t,j=n,k=r}(o.createElement);var pt,mt=function(t){var e=t.id,n=t.className,r=t.style,i=t.onHeightUpdate,a=t.children,s=o.useCallback((function(t){if(t){var n=function(){var n=t.getBoundingClientRect().height;i(e,n)};n(),new MutationObserver(n).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,i]);return o.createElement("div",{ref:s,className:n,style:r},a)},gt=q(pt||(pt=l(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"],["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"])));exports.ToastBar=ft,exports.ToastIcon=it,exports.Toaster=function(t){var n=t.reverseOrder,r=t.position,i=void 0===r?"top-center":r,s=t.toastOptions,l=t.gutter,c=t.children,u=t.containerStyle,d=t.containerClassName,p=D(s),g=p.toasts,v=p.handlers;return e.createPortal(o.createElement("div",{style:a({position:"fixed",zIndex:99999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},u),className:d},g.map((function(t){var e=t.position||i,r=function(t,e){var n=t.includes("top"),r=n?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return a(a({left:0,right:0,display:"flex",position:"absolute",transition:m()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(e*(n?1:-1),"px)")},r),o)}(e,v.calculateOffset(t,{reverseOrder:n,gutter:l,defaultPosition:i}));return o.createElement(mt,{id:t.id,key:t.id,onHeightUpdate:v.updateHeight,className:t.visible?gt:"",style:r},"custom"===t.type?f(t.message,t):c?c(t):o.createElement(ft,{toast:t,position:e}))}))),document.body)},exports.default=O,exports.resolveValue=f,exports.toast=O,exports.useToaster=D,exports.useToasterStore=S;
//# sourceMappingURL=index.js.map
