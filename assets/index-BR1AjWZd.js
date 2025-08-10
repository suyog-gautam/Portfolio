var Nm=t=>{throw TypeError(t)};var Xu=(t,e,n)=>e.has(t)||Nm("Cannot "+n);var J=(t,e,n)=>(Xu(t,e,"read from private field"),n?n.call(t):e.get(t)),nt=(t,e,n)=>e.has(t)?Nm("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),ze=(t,e,n,i)=>(Xu(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),Gt=(t,e,n)=>(Xu(t,e,"access private method"),n);var hl=(t,e,n,i)=>({set _(r){ze(t,e,r,n)},get _(){return J(t,e,i)}});function lE(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Ax(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cx={exports:{}},hu={},Rx={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ja=Symbol.for("react.element"),cE=Symbol.for("react.portal"),uE=Symbol.for("react.fragment"),dE=Symbol.for("react.strict_mode"),fE=Symbol.for("react.profiler"),hE=Symbol.for("react.provider"),pE=Symbol.for("react.context"),mE=Symbol.for("react.forward_ref"),gE=Symbol.for("react.suspense"),vE=Symbol.for("react.memo"),xE=Symbol.for("react.lazy"),Lm=Symbol.iterator;function _E(t){return t===null||typeof t!="object"?null:(t=Lm&&t[Lm]||t["@@iterator"],typeof t=="function"?t:null)}var Px={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nx=Object.assign,Lx={};function Oo(t,e,n){this.props=t,this.context=e,this.refs=Lx,this.updater=n||Px}Oo.prototype.isReactComponent={};Oo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Oo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dx(){}Dx.prototype=Oo.prototype;function Zh(t,e,n){this.props=t,this.context=e,this.refs=Lx,this.updater=n||Px}var Jh=Zh.prototype=new Dx;Jh.constructor=Zh;Nx(Jh,Oo.prototype);Jh.isPureReactComponent=!0;var Dm=Array.isArray,Ix=Object.prototype.hasOwnProperty,ep={current:null},Ux={key:!0,ref:!0,__self:!0,__source:!0};function Fx(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ix.call(e,i)&&!Ux.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ja,type:t,key:s,ref:o,props:r,_owner:ep.current}}function yE(t,e){return{$$typeof:Ja,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ja}function SE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Im=/\/+/g;function $u(t,e){return typeof t=="object"&&t!==null&&t.key!=null?SE(""+t.key):e.toString(36)}function cc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ja:case cE:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+$u(o,0):i,Dm(r)?(n="",t!=null&&(n=t.replace(Im,"$&/")+"/"),cc(r,e,n,"",function(c){return c})):r!=null&&(tp(r)&&(r=yE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Im,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Dm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+$u(s,a);o+=cc(s,e,n,l,r)}else if(l=_E(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+$u(s,a++),o+=cc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pl(t,e,n){if(t==null)return t;var i=[],r=0;return cc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function EE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var on={current:null},uc={transition:null},ME={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:uc,ReactCurrentOwner:ep};function Ox(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:pl,forEach:function(t,e,n){pl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pl(t,function(){e++}),e},toArray:function(t){return pl(t,function(e){return e})||[]},only:function(t){if(!tp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=Oo;Ge.Fragment=uE;Ge.Profiler=fE;Ge.PureComponent=Zh;Ge.StrictMode=dE;Ge.Suspense=gE;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ME;Ge.act=Ox;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Nx({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ep.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ix.call(e,l)&&!Ux.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ja,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:pE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hE,_context:t},t.Consumer=t};Ge.createElement=Fx;Ge.createFactory=function(t){var e=Fx.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:mE,render:t}};Ge.isValidElement=tp;Ge.lazy=function(t){return{$$typeof:xE,_payload:{_status:-1,_result:t},_init:EE}};Ge.memo=function(t,e){return{$$typeof:vE,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=uc.transition;uc.transition={};try{t()}finally{uc.transition=e}};Ge.unstable_act=Ox;Ge.useCallback=function(t,e){return on.current.useCallback(t,e)};Ge.useContext=function(t){return on.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return on.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return on.current.useEffect(t,e)};Ge.useId=function(){return on.current.useId()};Ge.useImperativeHandle=function(t,e,n){return on.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return on.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return on.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return on.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return on.current.useReducer(t,e,n)};Ge.useRef=function(t){return on.current.useRef(t)};Ge.useState=function(t){return on.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return on.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return on.current.useTransition()};Ge.version="18.3.1";Rx.exports=Ge;var L=Rx.exports;const cr=Ax(L),wE=lE({__proto__:null,default:cr},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TE=L,bE=Symbol.for("react.element"),AE=Symbol.for("react.fragment"),CE=Object.prototype.hasOwnProperty,RE=TE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,PE={key:!0,ref:!0,__self:!0,__source:!0};function kx(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)CE.call(e,i)&&!PE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:bE,type:t,key:s,ref:o,props:r,_owner:RE.current}}hu.Fragment=AE;hu.jsx=kx;hu.jsxs=kx;Cx.exports=hu;var E=Cx.exports,Bx={exports:{}},Ln={},zx={exports:{}},Hx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,G){var X=P.length;P.push(G);e:for(;0<X;){var ne=X-1>>>1,ge=P[ne];if(0<r(ge,G))P[ne]=G,P[X]=ge,X=ne;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var G=P[0],X=P.pop();if(X!==G){P[0]=X;e:for(var ne=0,ge=P.length,Re=ge>>>1;ne<Re;){var Q=2*(ne+1)-1,ae=P[Q],pe=Q+1,le=P[pe];if(0>r(ae,X))pe<ge&&0>r(le,ae)?(P[ne]=le,P[pe]=X,ne=pe):(P[ne]=ae,P[Q]=X,ne=Q);else if(pe<ge&&0>r(le,X))P[ne]=le,P[pe]=X,ne=pe;else break e}}return G}function r(P,G){var X=P.sortIndex-G.sortIndex;return X!==0?X:P.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,h=3,p=!1,g=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(P){for(var G=n(c);G!==null;){if(G.callback===null)i(c);else if(G.startTime<=P)i(c),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(c)}}function y(P){if(v=!1,_(P),!g)if(n(l)!==null)g=!0,W(C);else{var G=n(c);G!==null&&U(y,G.startTime-P)}}function C(P,G){g=!1,v&&(v=!1,d(R),R=-1),p=!0;var X=h;try{for(_(G),f=n(l);f!==null&&(!(f.expirationTime>G)||P&&!D());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,h=f.priorityLevel;var ge=ne(f.expirationTime<=G);G=t.unstable_now(),typeof ge=="function"?f.callback=ge:f===n(l)&&i(l),_(G)}else i(l);f=n(l)}if(f!==null)var Re=!0;else{var Q=n(c);Q!==null&&U(y,Q.startTime-G),Re=!1}return Re}finally{f=null,h=X,p=!1}}var A=!1,b=null,R=-1,w=5,S=-1;function D(){return!(t.unstable_now()-S<w)}function z(){if(b!==null){var P=t.unstable_now();S=P;var G=!0;try{G=b(!0,P)}finally{G?H():(A=!1,b=null)}}else A=!1}var H;if(typeof x=="function")H=function(){x(z)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,Y=B.port2;B.port1.onmessage=z,H=function(){Y.postMessage(null)}}else H=function(){m(z,0)};function W(P){b=P,A||(A=!0,H())}function U(P,G){R=m(function(){P(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,W(C))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var G=3;break;default:G=h}var X=h;h=G;try{return P()}finally{h=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,G){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var X=h;h=P;try{return G()}finally{h=X}},t.unstable_scheduleCallback=function(P,G,X){var ne=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ne+X:ne):X=ne,P){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=X+ge,P={id:u++,callback:G,priorityLevel:P,startTime:X,expirationTime:ge,sortIndex:-1},X>ne?(P.sortIndex=X,e(c,P),n(l)===null&&P===n(c)&&(v?(d(R),R=-1):v=!0,U(y,X-ne))):(P.sortIndex=ge,e(l,P),g||p||(g=!0,W(C))),P},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(P){var G=h;return function(){var X=h;h=G;try{return P.apply(this,arguments)}finally{h=X}}}})(Hx);zx.exports=Hx;var NE=zx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LE=L,Nn=NE;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vx=new Set,Ta={};function Ts(t,e){Eo(t,e),Eo(t+"Capture",e)}function Eo(t,e){for(Ta[t]=e,t=0;t<e.length;t++)Vx.add(e[t])}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),of=Object.prototype.hasOwnProperty,DE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Um={},Fm={};function IE(t){return of.call(Fm,t)?!0:of.call(Um,t)?!1:DE.test(t)?Fm[t]=!0:(Um[t]=!0,!1)}function UE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function FE(t,e,n,i){if(e===null||typeof e>"u"||UE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var np=/[\-:]([a-z])/g;function ip(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(np,ip);Ht[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(np,ip);Ht[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(np,ip);Ht[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function rp(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(FE(e,n,r,i)&&(n=null),i||r===null?IE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ji=LE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ml=Symbol.for("react.element"),Gs=Symbol.for("react.portal"),Ws=Symbol.for("react.fragment"),sp=Symbol.for("react.strict_mode"),af=Symbol.for("react.profiler"),Gx=Symbol.for("react.provider"),Wx=Symbol.for("react.context"),op=Symbol.for("react.forward_ref"),lf=Symbol.for("react.suspense"),cf=Symbol.for("react.suspense_list"),ap=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),jx=Symbol.for("react.offscreen"),Om=Symbol.iterator;function qo(t){return t===null||typeof t!="object"?null:(t=Om&&t[Om]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,qu;function ua(t){if(qu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qu=e&&e[1]||""}return`
`+qu+t}var Yu=!1;function Ku(t,e){if(!t||Yu)return"";Yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Yu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ua(t):""}function OE(t){switch(t.tag){case 5:return ua(t.type);case 16:return ua("Lazy");case 13:return ua("Suspense");case 19:return ua("SuspenseList");case 0:case 2:case 15:return t=Ku(t.type,!1),t;case 11:return t=Ku(t.type.render,!1),t;case 1:return t=Ku(t.type,!0),t;default:return""}}function uf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ws:return"Fragment";case Gs:return"Portal";case af:return"Profiler";case sp:return"StrictMode";case lf:return"Suspense";case cf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wx:return(t.displayName||"Context")+".Consumer";case Gx:return(t._context.displayName||"Context")+".Provider";case op:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ap:return e=t.displayName||null,e!==null?e:uf(t.type)||"Memo";case dr:e=t._payload,t=t._init;try{return uf(t(e))}catch{}}return null}function kE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uf(e);case 8:return e===sp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function BE(t){var e=Xx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gl(t){t._valueTracker||(t._valueTracker=BE(t))}function $x(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Xx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Lc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function df(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function km(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qx(t,e){e=e.checked,e!=null&&rp(t,"checked",e,!1)}function ff(t,e){qx(t,e);var n=Dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hf(t,e.type,n):e.hasOwnProperty("defaultValue")&&hf(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hf(t,e,n){(e!=="number"||Lc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var da=Array.isArray;function no(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function pf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(da(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function Yx(t,e){var n=Dr(e.value),i=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Hm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Kx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Kx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vl,Qx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vl=vl||document.createElement("div"),vl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zE=["Webkit","ms","Moz","O"];Object.keys(ma).forEach(function(t){zE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ma[e]=ma[t]})});function Zx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ma.hasOwnProperty(t)&&ma[t]?(""+e).trim():e+"px"}function Jx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Zx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var HE=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gf(t,e){if(e){if(HE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function vf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xf=null;function lp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _f=null,io=null,ro=null;function Vm(t){if(t=nl(t)){if(typeof _f!="function")throw Error(re(280));var e=t.stateNode;e&&(e=xu(e),_f(t.stateNode,t.type,e))}}function e0(t){io?ro?ro.push(t):ro=[t]:io=t}function t0(){if(io){var t=io,e=ro;if(ro=io=null,Vm(t),e)for(t=0;t<e.length;t++)Vm(e[t])}}function n0(t,e){return t(e)}function i0(){}var Qu=!1;function r0(t,e,n){if(Qu)return t(e,n);Qu=!0;try{return n0(t,e,n)}finally{Qu=!1,(io!==null||ro!==null)&&(i0(),t0())}}function Aa(t,e){var n=t.stateNode;if(n===null)return null;var i=xu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var yf=!1;if(ji)try{var Yo={};Object.defineProperty(Yo,"passive",{get:function(){yf=!0}}),window.addEventListener("test",Yo,Yo),window.removeEventListener("test",Yo,Yo)}catch{yf=!1}function VE(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ga=!1,Dc=null,Ic=!1,Sf=null,GE={onError:function(t){ga=!0,Dc=t}};function WE(t,e,n,i,r,s,o,a,l){ga=!1,Dc=null,VE.apply(GE,arguments)}function jE(t,e,n,i,r,s,o,a,l){if(WE.apply(this,arguments),ga){if(ga){var c=Dc;ga=!1,Dc=null}else throw Error(re(198));Ic||(Ic=!0,Sf=c)}}function bs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function s0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gm(t){if(bs(t)!==t)throw Error(re(188))}function XE(t){var e=t.alternate;if(!e){if(e=bs(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Gm(r),t;if(s===i)return Gm(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function o0(t){return t=XE(t),t!==null?a0(t):null}function a0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=a0(t);if(e!==null)return e;t=t.sibling}return null}var l0=Nn.unstable_scheduleCallback,Wm=Nn.unstable_cancelCallback,$E=Nn.unstable_shouldYield,qE=Nn.unstable_requestPaint,Tt=Nn.unstable_now,YE=Nn.unstable_getCurrentPriorityLevel,cp=Nn.unstable_ImmediatePriority,c0=Nn.unstable_UserBlockingPriority,Uc=Nn.unstable_NormalPriority,KE=Nn.unstable_LowPriority,u0=Nn.unstable_IdlePriority,pu=null,Si=null;function QE(t){if(Si&&typeof Si.onCommitFiberRoot=="function")try{Si.onCommitFiberRoot(pu,t,void 0,(t.current.flags&128)===128)}catch{}}var si=Math.clz32?Math.clz32:eM,ZE=Math.log,JE=Math.LN2;function eM(t){return t>>>=0,t===0?32:31-(ZE(t)/JE|0)|0}var xl=64,_l=4194304;function fa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=fa(a):(s&=o,s!==0&&(i=fa(s)))}else o=n&~r,o!==0?i=fa(o):s!==0&&(i=fa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-si(e),r=1<<n,i|=t[n],e&=~r;return i}function tM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-si(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=tM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ef(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function d0(){var t=xl;return xl<<=1,!(xl&4194240)&&(xl=64),t}function Zu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function el(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-si(e),t[e]=n}function iM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-si(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function up(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-si(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function f0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var h0,dp,p0,m0,g0,Mf=!1,yl=[],Mr=null,wr=null,Tr=null,Ca=new Map,Ra=new Map,hr=[],rM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jm(t,e){switch(t){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(e.pointerId)}}function Ko(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=nl(e),e!==null&&dp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function sM(t,e,n,i,r){switch(e){case"focusin":return Mr=Ko(Mr,t,e,n,i,r),!0;case"dragenter":return wr=Ko(wr,t,e,n,i,r),!0;case"mouseover":return Tr=Ko(Tr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ca.set(s,Ko(Ca.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ra.set(s,Ko(Ra.get(s)||null,t,e,n,i,r)),!0}return!1}function v0(t){var e=rs(t.target);if(e!==null){var n=bs(e);if(n!==null){if(e=n.tag,e===13){if(e=s0(n),e!==null){t.blockedOn=e,g0(t.priority,function(){p0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xf=i,n.target.dispatchEvent(i),xf=null}else return e=nl(n),e!==null&&dp(e),t.blockedOn=n,!1;e.shift()}return!0}function Xm(t,e,n){dc(t)&&n.delete(e)}function oM(){Mf=!1,Mr!==null&&dc(Mr)&&(Mr=null),wr!==null&&dc(wr)&&(wr=null),Tr!==null&&dc(Tr)&&(Tr=null),Ca.forEach(Xm),Ra.forEach(Xm)}function Qo(t,e){t.blockedOn===e&&(t.blockedOn=null,Mf||(Mf=!0,Nn.unstable_scheduleCallback(Nn.unstable_NormalPriority,oM)))}function Pa(t){function e(r){return Qo(r,t)}if(0<yl.length){Qo(yl[0],t);for(var n=1;n<yl.length;n++){var i=yl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Mr!==null&&Qo(Mr,t),wr!==null&&Qo(wr,t),Tr!==null&&Qo(Tr,t),Ca.forEach(e),Ra.forEach(e),n=0;n<hr.length;n++)i=hr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)v0(n),n.blockedOn===null&&hr.shift()}var so=Ji.ReactCurrentBatchConfig,Oc=!0;function aM(t,e,n,i){var r=st,s=so.transition;so.transition=null;try{st=1,fp(t,e,n,i)}finally{st=r,so.transition=s}}function lM(t,e,n,i){var r=st,s=so.transition;so.transition=null;try{st=4,fp(t,e,n,i)}finally{st=r,so.transition=s}}function fp(t,e,n,i){if(Oc){var r=wf(t,e,n,i);if(r===null)ld(t,e,i,kc,n),jm(t,i);else if(sM(r,t,e,n,i))i.stopPropagation();else if(jm(t,i),e&4&&-1<rM.indexOf(t)){for(;r!==null;){var s=nl(r);if(s!==null&&h0(s),s=wf(t,e,n,i),s===null&&ld(t,e,i,kc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ld(t,e,i,null,n)}}var kc=null;function wf(t,e,n,i){if(kc=null,t=lp(i),t=rs(t),t!==null)if(e=bs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=s0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kc=t,null}function x0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(YE()){case cp:return 1;case c0:return 4;case Uc:case KE:return 16;case u0:return 536870912;default:return 16}default:return 16}}var Sr=null,hp=null,fc=null;function _0(){if(fc)return fc;var t,e=hp,n=e.length,i,r="value"in Sr?Sr.value:Sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return fc=r.slice(t,1<i?1-i:void 0)}function hc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Sl(){return!0}function $m(){return!1}function Dn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Sl:$m,this.isPropagationStopped=$m,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),e}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pp=Dn(ko),tl=yt({},ko,{view:0,detail:0}),cM=Dn(tl),Ju,ed,Zo,mu=yt({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zo&&(Zo&&t.type==="mousemove"?(Ju=t.screenX-Zo.screenX,ed=t.screenY-Zo.screenY):ed=Ju=0,Zo=t),Ju)},movementY:function(t){return"movementY"in t?t.movementY:ed}}),qm=Dn(mu),uM=yt({},mu,{dataTransfer:0}),dM=Dn(uM),fM=yt({},tl,{relatedTarget:0}),td=Dn(fM),hM=yt({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),pM=Dn(hM),mM=yt({},ko,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gM=Dn(mM),vM=yt({},ko,{data:0}),Ym=Dn(vM),xM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function SM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yM[t])?!!e[t]:!1}function mp(){return SM}var EM=yt({},tl,{key:function(t){if(t.key){var e=xM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_M[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mp,charCode:function(t){return t.type==="keypress"?hc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),MM=Dn(EM),wM=yt({},mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=Dn(wM),TM=yt({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mp}),bM=Dn(TM),AM=yt({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),CM=Dn(AM),RM=yt({},mu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),PM=Dn(RM),NM=[9,13,27,32],gp=ji&&"CompositionEvent"in window,va=null;ji&&"documentMode"in document&&(va=document.documentMode);var LM=ji&&"TextEvent"in window&&!va,y0=ji&&(!gp||va&&8<va&&11>=va),Qm=" ",Zm=!1;function S0(t,e){switch(t){case"keyup":return NM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function DM(t,e){switch(t){case"compositionend":return E0(e);case"keypress":return e.which!==32?null:(Zm=!0,Qm);case"textInput":return t=e.data,t===Qm&&Zm?null:t;default:return null}}function IM(t,e){if(js)return t==="compositionend"||!gp&&S0(t,e)?(t=_0(),fc=hp=Sr=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return y0&&e.locale!=="ko"?null:e.data;default:return null}}var UM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!UM[t.type]:e==="textarea"}function M0(t,e,n,i){e0(i),e=Bc(e,"onChange"),0<e.length&&(n=new pp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var xa=null,Na=null;function FM(t){I0(t,0)}function gu(t){var e=qs(t);if($x(e))return t}function OM(t,e){if(t==="change")return e}var w0=!1;if(ji){var nd;if(ji){var id="oninput"in document;if(!id){var eg=document.createElement("div");eg.setAttribute("oninput","return;"),id=typeof eg.oninput=="function"}nd=id}else nd=!1;w0=nd&&(!document.documentMode||9<document.documentMode)}function tg(){xa&&(xa.detachEvent("onpropertychange",T0),Na=xa=null)}function T0(t){if(t.propertyName==="value"&&gu(Na)){var e=[];M0(e,Na,t,lp(t)),r0(FM,e)}}function kM(t,e,n){t==="focusin"?(tg(),xa=e,Na=n,xa.attachEvent("onpropertychange",T0)):t==="focusout"&&tg()}function BM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gu(Na)}function zM(t,e){if(t==="click")return gu(e)}function HM(t,e){if(t==="input"||t==="change")return gu(e)}function VM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ci=typeof Object.is=="function"?Object.is:VM;function La(t,e){if(ci(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!of.call(e,r)||!ci(t[r],e[r]))return!1}return!0}function ng(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ig(t,e){var n=ng(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ng(n)}}function b0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?b0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function A0(){for(var t=window,e=Lc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Lc(t.document)}return e}function vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function GM(t){var e=A0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&b0(n.ownerDocument.documentElement,n)){if(i!==null&&vp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ig(n,s);var o=ig(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var WM=ji&&"documentMode"in document&&11>=document.documentMode,Xs=null,Tf=null,_a=null,bf=!1;function rg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bf||Xs==null||Xs!==Lc(i)||(i=Xs,"selectionStart"in i&&vp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_a&&La(_a,i)||(_a=i,i=Bc(Tf,"onSelect"),0<i.length&&(e=new pp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Xs)))}function El(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $s={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionend:El("Transition","TransitionEnd")},rd={},C0={};ji&&(C0=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function vu(t){if(rd[t])return rd[t];if(!$s[t])return t;var e=$s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in C0)return rd[t]=e[n];return t}var R0=vu("animationend"),P0=vu("animationiteration"),N0=vu("animationstart"),L0=vu("transitionend"),D0=new Map,sg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(t,e){D0.set(t,e),Ts(e,[t])}for(var sd=0;sd<sg.length;sd++){var od=sg[sd],jM=od.toLowerCase(),XM=od[0].toUpperCase()+od.slice(1);Hr(jM,"on"+XM)}Hr(R0,"onAnimationEnd");Hr(P0,"onAnimationIteration");Hr(N0,"onAnimationStart");Hr("dblclick","onDoubleClick");Hr("focusin","onFocus");Hr("focusout","onBlur");Hr(L0,"onTransitionEnd");Eo("onMouseEnter",["mouseout","mouseover"]);Eo("onMouseLeave",["mouseout","mouseover"]);Eo("onPointerEnter",["pointerout","pointerover"]);Eo("onPointerLeave",["pointerout","pointerover"]);Ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$M=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function og(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,jE(i,e,void 0,t),t.currentTarget=null}function I0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;og(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;og(r,a,c),s=l}}}if(Ic)throw t=Sf,Ic=!1,Sf=null,t}function ft(t,e){var n=e[Nf];n===void 0&&(n=e[Nf]=new Set);var i=t+"__bubble";n.has(i)||(U0(e,t,2,!1),n.add(i))}function ad(t,e,n){var i=0;e&&(i|=4),U0(n,t,i,e)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function Da(t){if(!t[Ml]){t[Ml]=!0,Vx.forEach(function(n){n!=="selectionchange"&&($M.has(n)||ad(n,!1,t),ad(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ml]||(e[Ml]=!0,ad("selectionchange",!1,e))}}function U0(t,e,n,i){switch(x0(e)){case 1:var r=aM;break;case 4:r=lM;break;default:r=fp}n=r.bind(null,e,n,t),r=void 0,!yf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ld(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=rs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}r0(function(){var c=s,u=lp(n),f=[];e:{var h=D0.get(t);if(h!==void 0){var p=pp,g=t;switch(t){case"keypress":if(hc(n)===0)break e;case"keydown":case"keyup":p=MM;break;case"focusin":g="focus",p=td;break;case"focusout":g="blur",p=td;break;case"beforeblur":case"afterblur":p=td;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=dM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=bM;break;case R0:case P0:case N0:p=pM;break;case L0:p=CM;break;case"scroll":p=cM;break;case"wheel":p=PM;break;case"copy":case"cut":case"paste":p=gM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Km}var v=(e&4)!==0,m=!v&&t==="scroll",d=v?h!==null?h+"Capture":null:h;v=[];for(var x=c,_;x!==null;){_=x;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,d!==null&&(y=Aa(x,d),y!=null&&v.push(Ia(x,y,_)))),m)break;x=x.return}0<v.length&&(h=new p(h,g,null,n,u),f.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==xf&&(g=n.relatedTarget||n.fromElement)&&(rs(g)||g[Xi]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?rs(g):null,g!==null&&(m=bs(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(v=qm,y="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(v=Km,y="onPointerLeave",d="onPointerEnter",x="pointer"),m=p==null?h:qs(p),_=g==null?h:qs(g),h=new v(y,x+"leave",p,n,u),h.target=m,h.relatedTarget=_,y=null,rs(u)===c&&(v=new v(d,x+"enter",g,n,u),v.target=_,v.relatedTarget=m,y=v),m=y,p&&g)t:{for(v=p,d=g,x=0,_=v;_;_=Cs(_))x++;for(_=0,y=d;y;y=Cs(y))_++;for(;0<x-_;)v=Cs(v),x--;for(;0<_-x;)d=Cs(d),_--;for(;x--;){if(v===d||d!==null&&v===d.alternate)break t;v=Cs(v),d=Cs(d)}v=null}else v=null;p!==null&&ag(f,h,p,v,!1),g!==null&&m!==null&&ag(f,m,g,v,!0)}}e:{if(h=c?qs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=OM;else if(Jm(h))if(w0)C=HM;else{C=BM;var A=kM}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=zM);if(C&&(C=C(t,c))){M0(f,C,n,u);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&hf(h,"number",h.value)}switch(A=c?qs(c):window,t){case"focusin":(Jm(A)||A.contentEditable==="true")&&(Xs=A,Tf=c,_a=null);break;case"focusout":_a=Tf=Xs=null;break;case"mousedown":bf=!0;break;case"contextmenu":case"mouseup":case"dragend":bf=!1,rg(f,n,u);break;case"selectionchange":if(WM)break;case"keydown":case"keyup":rg(f,n,u)}var b;if(gp)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else js?S0(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(y0&&n.locale!=="ko"&&(js||R!=="onCompositionStart"?R==="onCompositionEnd"&&js&&(b=_0()):(Sr=u,hp="value"in Sr?Sr.value:Sr.textContent,js=!0)),A=Bc(c,R),0<A.length&&(R=new Ym(R,t,null,n,u),f.push({event:R,listeners:A}),b?R.data=b:(b=E0(n),b!==null&&(R.data=b)))),(b=LM?DM(t,n):IM(t,n))&&(c=Bc(c,"onBeforeInput"),0<c.length&&(u=new Ym("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=b))}I0(f,e)})}function Ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Aa(t,n),s!=null&&i.unshift(Ia(t,s,r)),s=Aa(t,e),s!=null&&i.push(Ia(t,s,r))),t=t.return}return i}function Cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ag(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Aa(n,s),l!=null&&o.unshift(Ia(n,l,a))):r||(l=Aa(n,s),l!=null&&o.push(Ia(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var qM=/\r\n?/g,YM=/\u0000|\uFFFD/g;function lg(t){return(typeof t=="string"?t:""+t).replace(qM,`
`).replace(YM,"")}function wl(t,e,n){if(e=lg(e),lg(t)!==e&&n)throw Error(re(425))}function zc(){}var Af=null,Cf=null;function Rf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pf=typeof setTimeout=="function"?setTimeout:void 0,KM=typeof clearTimeout=="function"?clearTimeout:void 0,cg=typeof Promise=="function"?Promise:void 0,QM=typeof queueMicrotask=="function"?queueMicrotask:typeof cg<"u"?function(t){return cg.resolve(null).then(t).catch(ZM)}:Pf;function ZM(t){setTimeout(function(){throw t})}function cd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Pa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Pa(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ug(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bo=Math.random().toString(36).slice(2),_i="__reactFiber$"+Bo,Ua="__reactProps$"+Bo,Xi="__reactContainer$"+Bo,Nf="__reactEvents$"+Bo,JM="__reactListeners$"+Bo,ew="__reactHandles$"+Bo;function rs(t){var e=t[_i];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xi]||n[_i]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ug(t);t!==null;){if(n=t[_i])return n;t=ug(t)}return e}t=n,n=t.parentNode}return null}function nl(t){return t=t[_i]||t[Xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function xu(t){return t[Ua]||null}var Lf=[],Ys=-1;function Vr(t){return{current:t}}function ht(t){0>Ys||(t.current=Lf[Ys],Lf[Ys]=null,Ys--)}function ut(t,e){Ys++,Lf[Ys]=t.current,t.current=e}var Ir={},Qt=Vr(Ir),hn=Vr(!1),gs=Ir;function Mo(t,e){var n=t.type.contextTypes;if(!n)return Ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function pn(t){return t=t.childContextTypes,t!=null}function Hc(){ht(hn),ht(Qt)}function dg(t,e,n){if(Qt.current!==Ir)throw Error(re(168));ut(Qt,e),ut(hn,n)}function F0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,kE(t)||"Unknown",r));return yt({},n,i)}function Vc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ir,gs=Qt.current,ut(Qt,t),ut(hn,hn.current),!0}function fg(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=F0(t,e,gs),i.__reactInternalMemoizedMergedChildContext=t,ht(hn),ht(Qt),ut(Qt,t)):ht(hn),ut(hn,n)}var Oi=null,_u=!1,ud=!1;function O0(t){Oi===null?Oi=[t]:Oi.push(t)}function tw(t){_u=!0,O0(t)}function Gr(){if(!ud&&Oi!==null){ud=!0;var t=0,e=st;try{var n=Oi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Oi=null,_u=!1}catch(r){throw Oi!==null&&(Oi=Oi.slice(t+1)),l0(cp,Gr),r}finally{st=e,ud=!1}}return null}var Ks=[],Qs=0,Gc=null,Wc=0,zn=[],Hn=0,vs=null,Bi=1,zi="";function Zr(t,e){Ks[Qs++]=Wc,Ks[Qs++]=Gc,Gc=t,Wc=e}function k0(t,e,n){zn[Hn++]=Bi,zn[Hn++]=zi,zn[Hn++]=vs,vs=t;var i=Bi;t=zi;var r=32-si(i)-1;i&=~(1<<r),n+=1;var s=32-si(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Bi=1<<32-si(e)+r|n<<r|i,zi=s+t}else Bi=1<<s|n<<r|i,zi=t}function xp(t){t.return!==null&&(Zr(t,1),k0(t,1,0))}function _p(t){for(;t===Gc;)Gc=Ks[--Qs],Ks[Qs]=null,Wc=Ks[--Qs],Ks[Qs]=null;for(;t===vs;)vs=zn[--Hn],zn[Hn]=null,zi=zn[--Hn],zn[Hn]=null,Bi=zn[--Hn],zn[Hn]=null}var Rn=null,An=null,gt=!1,ii=null;function B0(t,e){var n=Gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,An=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vs!==null?{id:Bi,overflow:zi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,An=null,!0):!1;default:return!1}}function Df(t){return(t.mode&1)!==0&&(t.flags&128)===0}function If(t){if(gt){var e=An;if(e){var n=e;if(!hg(t,e)){if(Df(t))throw Error(re(418));e=br(n.nextSibling);var i=Rn;e&&hg(t,e)?B0(i,n):(t.flags=t.flags&-4097|2,gt=!1,Rn=t)}}else{if(Df(t))throw Error(re(418));t.flags=t.flags&-4097|2,gt=!1,Rn=t}}}function pg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function Tl(t){if(t!==Rn)return!1;if(!gt)return pg(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rf(t.type,t.memoizedProps)),e&&(e=An)){if(Df(t))throw z0(),Error(re(418));for(;e;)B0(t,e),e=br(e.nextSibling)}if(pg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=Rn?br(t.stateNode.nextSibling):null;return!0}function z0(){for(var t=An;t;)t=br(t.nextSibling)}function wo(){An=Rn=null,gt=!1}function yp(t){ii===null?ii=[t]:ii.push(t)}var nw=Ji.ReactCurrentBatchConfig;function Jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function bl(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mg(t){var e=t._init;return e(t._payload)}function H0(t){function e(d,x){if(t){var _=d.deletions;_===null?(d.deletions=[x],d.flags|=16):_.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=Pr(d,x),d.index=0,d.sibling=null,d}function s(d,x,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<x?(d.flags|=2,x):_):(d.flags|=2,x)):(d.flags|=1048576,x)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,x,_,y){return x===null||x.tag!==6?(x=vd(_,d.mode,y),x.return=d,x):(x=r(x,_),x.return=d,x)}function l(d,x,_,y){var C=_.type;return C===Ws?u(d,x,_.props.children,y,_.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dr&&mg(C)===x.type)?(y=r(x,_.props),y.ref=Jo(d,x,_),y.return=d,y):(y=yc(_.type,_.key,_.props,null,d.mode,y),y.ref=Jo(d,x,_),y.return=d,y)}function c(d,x,_,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=xd(_,d.mode,y),x.return=d,x):(x=r(x,_.children||[]),x.return=d,x)}function u(d,x,_,y,C){return x===null||x.tag!==7?(x=ms(_,d.mode,y,C),x.return=d,x):(x=r(x,_),x.return=d,x)}function f(d,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return x=vd(""+x,d.mode,_),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ml:return _=yc(x.type,x.key,x.props,null,d.mode,_),_.ref=Jo(d,null,x),_.return=d,_;case Gs:return x=xd(x,d.mode,_),x.return=d,x;case dr:var y=x._init;return f(d,y(x._payload),_)}if(da(x)||qo(x))return x=ms(x,d.mode,_,null),x.return=d,x;bl(d,x)}return null}function h(d,x,_,y){var C=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(d,x,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ml:return _.key===C?l(d,x,_,y):null;case Gs:return _.key===C?c(d,x,_,y):null;case dr:return C=_._init,h(d,x,C(_._payload),y)}if(da(_)||qo(_))return C!==null?null:u(d,x,_,y,null);bl(d,_)}return null}function p(d,x,_,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(_)||null,a(x,d,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ml:return d=d.get(y.key===null?_:y.key)||null,l(x,d,y,C);case Gs:return d=d.get(y.key===null?_:y.key)||null,c(x,d,y,C);case dr:var A=y._init;return p(d,x,_,A(y._payload),C)}if(da(y)||qo(y))return d=d.get(_)||null,u(x,d,y,C,null);bl(x,y)}return null}function g(d,x,_,y){for(var C=null,A=null,b=x,R=x=0,w=null;b!==null&&R<_.length;R++){b.index>R?(w=b,b=null):w=b.sibling;var S=h(d,b,_[R],y);if(S===null){b===null&&(b=w);break}t&&b&&S.alternate===null&&e(d,b),x=s(S,x,R),A===null?C=S:A.sibling=S,A=S,b=w}if(R===_.length)return n(d,b),gt&&Zr(d,R),C;if(b===null){for(;R<_.length;R++)b=f(d,_[R],y),b!==null&&(x=s(b,x,R),A===null?C=b:A.sibling=b,A=b);return gt&&Zr(d,R),C}for(b=i(d,b);R<_.length;R++)w=p(b,d,R,_[R],y),w!==null&&(t&&w.alternate!==null&&b.delete(w.key===null?R:w.key),x=s(w,x,R),A===null?C=w:A.sibling=w,A=w);return t&&b.forEach(function(D){return e(d,D)}),gt&&Zr(d,R),C}function v(d,x,_,y){var C=qo(_);if(typeof C!="function")throw Error(re(150));if(_=C.call(_),_==null)throw Error(re(151));for(var A=C=null,b=x,R=x=0,w=null,S=_.next();b!==null&&!S.done;R++,S=_.next()){b.index>R?(w=b,b=null):w=b.sibling;var D=h(d,b,S.value,y);if(D===null){b===null&&(b=w);break}t&&b&&D.alternate===null&&e(d,b),x=s(D,x,R),A===null?C=D:A.sibling=D,A=D,b=w}if(S.done)return n(d,b),gt&&Zr(d,R),C;if(b===null){for(;!S.done;R++,S=_.next())S=f(d,S.value,y),S!==null&&(x=s(S,x,R),A===null?C=S:A.sibling=S,A=S);return gt&&Zr(d,R),C}for(b=i(d,b);!S.done;R++,S=_.next())S=p(b,d,R,S.value,y),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?R:S.key),x=s(S,x,R),A===null?C=S:A.sibling=S,A=S);return t&&b.forEach(function(z){return e(d,z)}),gt&&Zr(d,R),C}function m(d,x,_,y){if(typeof _=="object"&&_!==null&&_.type===Ws&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ml:e:{for(var C=_.key,A=x;A!==null;){if(A.key===C){if(C=_.type,C===Ws){if(A.tag===7){n(d,A.sibling),x=r(A,_.props.children),x.return=d,d=x;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dr&&mg(C)===A.type){n(d,A.sibling),x=r(A,_.props),x.ref=Jo(d,A,_),x.return=d,d=x;break e}n(d,A);break}else e(d,A);A=A.sibling}_.type===Ws?(x=ms(_.props.children,d.mode,y,_.key),x.return=d,d=x):(y=yc(_.type,_.key,_.props,null,d.mode,y),y.ref=Jo(d,x,_),y.return=d,d=y)}return o(d);case Gs:e:{for(A=_.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){n(d,x.sibling),x=r(x,_.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=xd(_,d.mode,y),x.return=d,d=x}return o(d);case dr:return A=_._init,m(d,x,A(_._payload),y)}if(da(_))return g(d,x,_,y);if(qo(_))return v(d,x,_,y);bl(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,_),x.return=d,d=x):(n(d,x),x=vd(_,d.mode,y),x.return=d,d=x),o(d)):n(d,x)}return m}var To=H0(!0),V0=H0(!1),jc=Vr(null),Xc=null,Zs=null,Sp=null;function Ep(){Sp=Zs=Xc=null}function Mp(t){var e=jc.current;ht(jc),t._currentValue=e}function Uf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function oo(t,e){Xc=t,Sp=Zs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(fn=!0),t.firstContext=null)}function jn(t){var e=t._currentValue;if(Sp!==t)if(t={context:t,memoizedValue:e,next:null},Zs===null){if(Xc===null)throw Error(re(308));Zs=t,Xc.dependencies={lanes:0,firstContext:t}}else Zs=Zs.next=t;return e}var ss=null;function wp(t){ss===null?ss=[t]:ss.push(t)}function G0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,wp(e)):(n.next=r.next,r.next=n),e.interleaved=n,$i(t,i)}function $i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fr=!1;function Tp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function W0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$i(t,n)}return r=i.interleaved,r===null?(e.next=e,wp(i)):(e.next=r.next,r.next=e),i.interleaved=e,$i(t,n)}function pc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,up(t,n)}}function gg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $c(t,e,n,i){var r=t.updateQueue;fr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(h=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){f=g.call(p,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(p,f,h):g,h==null)break e;f=yt({},f,h);break e;case 2:fr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);_s|=o,t.lanes=o,t.memoizedState=f}}function vg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var il={},Ei=Vr(il),Fa=Vr(il),Oa=Vr(il);function os(t){if(t===il)throw Error(re(174));return t}function bp(t,e){switch(ut(Oa,e),ut(Fa,t),ut(Ei,il),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mf(e,t)}ht(Ei),ut(Ei,e)}function bo(){ht(Ei),ht(Fa),ht(Oa)}function j0(t){os(Oa.current);var e=os(Ei.current),n=mf(e,t.type);e!==n&&(ut(Fa,t),ut(Ei,n))}function Ap(t){Fa.current===t&&(ht(Ei),ht(Fa))}var vt=Vr(0);function qc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dd=[];function Cp(){for(var t=0;t<dd.length;t++)dd[t]._workInProgressVersionPrimary=null;dd.length=0}var mc=Ji.ReactCurrentDispatcher,fd=Ji.ReactCurrentBatchConfig,xs=0,xt=null,Pt=null,Ft=null,Yc=!1,ya=!1,ka=0,iw=0;function Wt(){throw Error(re(321))}function Rp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ci(t[n],e[n]))return!1;return!0}function Pp(t,e,n,i,r,s){if(xs=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,mc.current=t===null||t.memoizedState===null?aw:lw,t=n(i,r),ya){s=0;do{if(ya=!1,ka=0,25<=s)throw Error(re(301));s+=1,Ft=Pt=null,e.updateQueue=null,mc.current=cw,t=n(i,r)}while(ya)}if(mc.current=Kc,e=Pt!==null&&Pt.next!==null,xs=0,Ft=Pt=xt=null,Yc=!1,e)throw Error(re(300));return t}function Np(){var t=ka!==0;return ka=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?xt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function Xn(){if(Pt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=Ft===null?xt.memoizedState:Ft.next;if(e!==null)Ft=e,Pt=t;else{if(t===null)throw Error(re(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Ft===null?xt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function Ba(t,e){return typeof e=="function"?e(t):e}function hd(t){var e=Xn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((xs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,xt.lanes|=u,_s|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ci(i,e.memoizedState)||(fn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,_s|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pd(t){var e=Xn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ci(s,e.memoizedState)||(fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function X0(){}function $0(t,e){var n=xt,i=Xn(),r=e(),s=!ci(i.memoizedState,r);if(s&&(i.memoizedState=r,fn=!0),i=i.queue,Lp(K0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,za(9,Y0.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(re(349));xs&30||q0(n,e,r)}return r}function q0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Y0(t,e,n,i){e.value=n,e.getSnapshot=i,Q0(e)&&Z0(t)}function K0(t,e,n){return n(function(){Q0(e)&&Z0(t)})}function Q0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ci(t,n)}catch{return!0}}function Z0(t){var e=$i(t,1);e!==null&&oi(e,t,1,-1)}function xg(t){var e=pi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:t},e.queue=t,t=t.dispatch=ow.bind(null,xt,t),[e.memoizedState,t]}function za(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function J0(){return Xn().memoizedState}function gc(t,e,n,i){var r=pi();xt.flags|=t,r.memoizedState=za(1|e,n,void 0,i===void 0?null:i)}function yu(t,e,n,i){var r=Xn();i=i===void 0?null:i;var s=void 0;if(Pt!==null){var o=Pt.memoizedState;if(s=o.destroy,i!==null&&Rp(i,o.deps)){r.memoizedState=za(e,n,s,i);return}}xt.flags|=t,r.memoizedState=za(1|e,n,s,i)}function _g(t,e){return gc(8390656,8,t,e)}function Lp(t,e){return yu(2048,8,t,e)}function e_(t,e){return yu(4,2,t,e)}function t_(t,e){return yu(4,4,t,e)}function n_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function i_(t,e,n){return n=n!=null?n.concat([t]):null,yu(4,4,n_.bind(null,e,t),n)}function Dp(){}function r_(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function s_(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function o_(t,e,n){return xs&21?(ci(n,e)||(n=d0(),xt.lanes|=n,_s|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,fn=!0),t.memoizedState=n)}function rw(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=fd.transition;fd.transition={};try{t(!1),e()}finally{st=n,fd.transition=i}}function a_(){return Xn().memoizedState}function sw(t,e,n){var i=Rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},l_(t))c_(e,n);else if(n=G0(t,e,n,i),n!==null){var r=rn();oi(n,t,i,r),u_(n,e,i)}}function ow(t,e,n){var i=Rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(l_(t))c_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ci(a,o)){var l=e.interleaved;l===null?(r.next=r,wp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=G0(t,e,r,i),n!==null&&(r=rn(),oi(n,t,i,r),u_(n,e,i))}}function l_(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function c_(t,e){ya=Yc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function u_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,up(t,n)}}var Kc={readContext:jn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},aw={readContext:jn,useCallback:function(t,e){return pi().memoizedState=[t,e===void 0?null:e],t},useContext:jn,useEffect:_g,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gc(4194308,4,n_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gc(4194308,4,t,e)},useInsertionEffect:function(t,e){return gc(4,2,t,e)},useMemo:function(t,e){var n=pi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=pi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=sw.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=pi();return t={current:t},e.memoizedState=t},useState:xg,useDebugValue:Dp,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=xg(!1),e=t[0];return t=rw.bind(null,t[1]),pi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=pi();if(gt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Ot===null)throw Error(re(349));xs&30||q0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,_g(K0.bind(null,i,s,t),[t]),i.flags|=2048,za(9,Y0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=pi(),e=Ot.identifierPrefix;if(gt){var n=zi,i=Bi;n=(i&~(1<<32-si(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=iw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lw={readContext:jn,useCallback:r_,useContext:jn,useEffect:Lp,useImperativeHandle:i_,useInsertionEffect:e_,useLayoutEffect:t_,useMemo:s_,useReducer:hd,useRef:J0,useState:function(){return hd(Ba)},useDebugValue:Dp,useDeferredValue:function(t){var e=Xn();return o_(e,Pt.memoizedState,t)},useTransition:function(){var t=hd(Ba)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:X0,useSyncExternalStore:$0,useId:a_,unstable_isNewReconciler:!1},cw={readContext:jn,useCallback:r_,useContext:jn,useEffect:Lp,useImperativeHandle:i_,useInsertionEffect:e_,useLayoutEffect:t_,useMemo:s_,useReducer:pd,useRef:J0,useState:function(){return pd(Ba)},useDebugValue:Dp,useDeferredValue:function(t){var e=Xn();return Pt===null?e.memoizedState=t:o_(e,Pt.memoizedState,t)},useTransition:function(){var t=pd(Ba)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:X0,useSyncExternalStore:$0,useId:a_,unstable_isNewReconciler:!1};function Jn(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ff(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Su={isMounted:function(t){return(t=t._reactInternals)?bs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=Rr(t),s=Gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,r),e!==null&&(oi(e,t,r,i),pc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=Rr(t),s=Gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,r),e!==null&&(oi(e,t,r,i),pc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=Rr(t),r=Gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ar(t,r,i),e!==null&&(oi(e,t,i,n),pc(e,t,i))}};function yg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!La(n,i)||!La(r,s):!0}function d_(t,e,n){var i=!1,r=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=jn(s):(r=pn(e)?gs:Qt.current,i=e.contextTypes,s=(i=i!=null)?Mo(t,r):Ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Su,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Su.enqueueReplaceState(e,e.state,null)}function Of(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Tp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=jn(s):(s=pn(e)?gs:Qt.current,r.context=Mo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ff(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Su.enqueueReplaceState(r,r.state,null),$c(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ao(t,e){try{var n="",i=e;do n+=OE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function md(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function kf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uw=typeof WeakMap=="function"?WeakMap:Map;function f_(t,e,n){n=Gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Zc||(Zc=!0,qf=i),kf(t,e)},n}function h_(t,e,n){n=Gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){kf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){kf(t,e),typeof i!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Eg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new uw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ww.bind(null,t,e,n),e.then(t,t))}function Mg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gi(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t)}var dw=Ji.ReactCurrentOwner,fn=!1;function tn(t,e,n,i){e.child=t===null?V0(e,null,n,i):To(e,t.child,n,i)}function Tg(t,e,n,i,r){n=n.render;var s=e.ref;return oo(e,r),i=Pp(t,e,n,i,s,r),n=Np(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(gt&&n&&xp(e),e.flags|=1,tn(t,e,i,r),e.child)}function bg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Hp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,p_(t,e,s,i,r)):(t=yc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(o,i)&&t.ref===e.ref)return qi(t,e,r)}return e.flags|=1,t=Pr(s,i),t.ref=e.ref,t.return=e,e.child=t}function p_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(La(s,i)&&t.ref===e.ref)if(fn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(fn=!0);else return e.lanes=t.lanes,qi(t,e,r)}return Bf(t,e,n,i,r)}function m_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(eo,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(eo,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(eo,wn),wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(eo,wn),wn|=i;return tn(t,e,r,n),e.child}function g_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bf(t,e,n,i,r){var s=pn(n)?gs:Qt.current;return s=Mo(e,s),oo(e,r),n=Pp(t,e,n,i,s,r),i=Np(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(gt&&i&&xp(e),e.flags|=1,tn(t,e,n,r),e.child)}function Ag(t,e,n,i,r){if(pn(n)){var s=!0;Vc(e)}else s=!1;if(oo(e,r),e.stateNode===null)vc(t,e),d_(e,n,i),Of(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=jn(c):(c=pn(n)?gs:Qt.current,c=Mo(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Sg(e,o,i,c),fr=!1;var h=e.memoizedState;o.state=h,$c(e,i,o,r),l=e.memoizedState,a!==i||h!==l||hn.current||fr?(typeof u=="function"&&(Ff(e,n,u,i),l=e.memoizedState),(a=fr||yg(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,W0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Jn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=jn(l):(l=pn(n)?gs:Qt.current,l=Mo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Sg(e,o,i,l),fr=!1,h=e.memoizedState,o.state=h,$c(e,i,o,r);var g=e.memoizedState;a!==f||h!==g||hn.current||fr?(typeof p=="function"&&(Ff(e,n,p,i),g=e.memoizedState),(c=fr||yg(e,n,c,i,h,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return zf(t,e,n,i,s,r)}function zf(t,e,n,i,r,s){g_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&fg(e,n,!1),qi(t,e,s);i=e.stateNode,dw.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=To(e,t.child,null,s),e.child=To(e,null,a,s)):tn(t,e,a,s),e.memoizedState=i.state,r&&fg(e,n,!0),e.child}function v_(t){var e=t.stateNode;e.pendingContext?dg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dg(t,e.context,!1),bp(t,e.containerInfo)}function Cg(t,e,n,i,r){return wo(),yp(r),e.flags|=256,tn(t,e,n,i),e.child}var Hf={dehydrated:null,treeContext:null,retryLane:0};function Vf(t){return{baseLanes:t,cachePool:null,transitions:null}}function x_(t,e,n){var i=e.pendingProps,r=vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(vt,r&1),t===null)return If(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wu(o,i,0,null),t=ms(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vf(n),e.memoizedState=Hf,t):Ip(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return fw(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Pr(a,s):(s=ms(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Vf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Hf,i}return s=t.child,t=s.sibling,i=Pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ip(t,e){return e=wu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Al(t,e,n,i){return i!==null&&yp(i),To(e,t.child,null,n),t=Ip(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fw(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=md(Error(re(422))),Al(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=wu({mode:"visible",children:i.children},r,0,null),s=ms(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&To(e,t.child,null,o),e.child.memoizedState=Vf(o),e.memoizedState=Hf,s);if(!(e.mode&1))return Al(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=md(s,i,void 0),Al(t,e,o,i)}if(a=(o&t.childLanes)!==0,fn||a){if(i=Ot,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$i(t,r),oi(i,t,r,-1))}return zp(),i=md(Error(re(421))),Al(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Tw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,An=br(r.nextSibling),Rn=e,gt=!0,ii=null,t!==null&&(zn[Hn++]=Bi,zn[Hn++]=zi,zn[Hn++]=vs,Bi=t.id,zi=t.overflow,vs=e),e=Ip(e,i.children),e.flags|=4096,e)}function Rg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Uf(t.return,e,n)}function gd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function __(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rg(t,n,e);else if(t.tag===19)Rg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&qc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),gd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&qc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}gd(e,!0,n,null,s);break;case"together":gd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_s|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function hw(t,e,n){switch(e.tag){case 3:v_(e),wo();break;case 5:j0(e);break;case 1:pn(e.type)&&Vc(e);break;case 4:bp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(jc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?x_(t,e,n):(ut(vt,vt.current&1),t=qi(t,e,n),t!==null?t.sibling:null);ut(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return __(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,m_(t,e,n)}return qi(t,e,n)}var y_,Gf,S_,E_;y_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gf=function(){};S_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,os(Ei.current);var s=null;switch(n){case"input":r=df(t,r),i=df(t,i),s=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),s=[];break;case"textarea":r=pf(t,r),i=pf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=zc)}gf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ta.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ta.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ft("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};E_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ea(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function pw(t,e,n){var i=e.pendingProps;switch(_p(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return pn(e.type)&&Hc(),jt(e),null;case 3:return i=e.stateNode,bo(),ht(hn),ht(Qt),Cp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Tl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(Qf(ii),ii=null))),Gf(t,e),jt(e),null;case 5:Ap(e);var r=os(Oa.current);if(n=e.type,t!==null&&e.stateNode!=null)S_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return jt(e),null}if(t=os(Ei.current),Tl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[_i]=e,i[Ua]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<ha.length;r++)ft(ha[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":km(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":zm(i,s),ft("invalid",i)}gf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&wl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wl(i.textContent,a,t),r=["children",""+a]):Ta.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ft("scroll",i)}switch(n){case"input":gl(i),Bm(i,s,!0);break;case"textarea":gl(i),Hm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=zc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Kx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[_i]=e,t[Ua]=i,y_(t,e,!1,!1),e.stateNode=t;e:{switch(o=vf(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<ha.length;r++)ft(ha[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":km(t,i),r=df(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),ft("invalid",t);break;case"textarea":zm(t,i),r=pf(t,i),ft("invalid",t);break;default:r=i}gf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Jx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ba(t,l):typeof l=="number"&&ba(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ta.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",t):l!=null&&rp(t,s,l,o))}switch(n){case"input":gl(t),Bm(t,i,!1);break;case"textarea":gl(t),Hm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Dr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?no(t,!!i.multiple,s,!1):i.defaultValue!=null&&no(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=zc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)E_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=os(Oa.current),os(Ei.current),Tl(e)){if(i=e.stateNode,n=e.memoizedProps,i[_i]=e,(s=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:wl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[_i]=e,e.stateNode=i}return jt(e),null;case 13:if(ht(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&An!==null&&e.mode&1&&!(e.flags&128))z0(),wo(),e.flags|=98560,s=!1;else if(s=Tl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[_i]=e}else wo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else ii!==null&&(Qf(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?Lt===0&&(Lt=3):zp())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return bo(),Gf(t,e),t===null&&Da(e.stateNode.containerInfo),jt(e),null;case 10:return Mp(e.type._context),jt(e),null;case 17:return pn(e.type)&&Hc(),jt(e),null;case 19:if(ht(vt),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ea(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=qc(t),o!==null){for(e.flags|=128,ea(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>Co&&(e.flags|=128,i=!0,ea(s,!1),e.lanes=4194304)}else{if(!i)if(t=qc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ea(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!gt)return jt(e),null}else 2*Tt()-s.renderingStartTime>Co&&n!==1073741824&&(e.flags|=128,i=!0,ea(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=vt.current,ut(vt,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return Bp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function mw(t,e){switch(_p(e),e.tag){case 1:return pn(e.type)&&Hc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return bo(),ht(hn),ht(Qt),Cp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ap(e),null;case 13:if(ht(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));wo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(vt),null;case 4:return bo(),null;case 10:return Mp(e.type._context),null;case 22:case 23:return Bp(),null;case 24:return null;default:return null}}var Cl=!1,Yt=!1,gw=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function Wf(t,e,n){try{n()}catch(i){wt(t,e,i)}}var Pg=!1;function vw(t,e){if(Af=Oc,t=A0(),vp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cf={focusedElem:t,selectionRange:n},Oc=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,m=g.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?v:Jn(e.type,v),m);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(y){wt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return g=Pg,Pg=!1,g}function Sa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Wf(e,n,s)}r=r.next}while(r!==i)}}function Eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function jf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function M_(t){var e=t.alternate;e!==null&&(t.alternate=null,M_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_i],delete e[Ua],delete e[Nf],delete e[JM],delete e[ew])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function w_(t){return t.tag===5||t.tag===3||t.tag===4}function Ng(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||w_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zc));else if(i!==4&&(t=t.child,t!==null))for(Xf(t,e,n),t=t.sibling;t!==null;)Xf(t,e,n),t=t.sibling}function $f(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for($f(t,e,n),t=t.sibling;t!==null;)$f(t,e,n),t=t.sibling}var Bt=null,ni=!1;function er(t,e,n){for(n=n.child;n!==null;)T_(t,e,n),n=n.sibling}function T_(t,e,n){if(Si&&typeof Si.onCommitFiberUnmount=="function")try{Si.onCommitFiberUnmount(pu,n)}catch{}switch(n.tag){case 5:Yt||Js(n,e);case 6:var i=Bt,r=ni;Bt=null,er(t,e,n),Bt=i,ni=r,Bt!==null&&(ni?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(ni?(t=Bt,n=n.stateNode,t.nodeType===8?cd(t.parentNode,n):t.nodeType===1&&cd(t,n),Pa(t)):cd(Bt,n.stateNode));break;case 4:i=Bt,r=ni,Bt=n.stateNode.containerInfo,ni=!0,er(t,e,n),Bt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Wf(n,e,o),r=r.next}while(r!==i)}er(t,e,n);break;case 1:if(!Yt&&(Js(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,er(t,e,n),Yt=i):er(t,e,n);break;default:er(t,e,n)}}function Lg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gw),e.forEach(function(i){var r=bw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Yn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,ni=!1;break e;case 3:Bt=a.stateNode.containerInfo,ni=!0;break e;case 4:Bt=a.stateNode.containerInfo,ni=!0;break e}a=a.return}if(Bt===null)throw Error(re(160));T_(s,o,r),Bt=null,ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)b_(e,t),e=e.sibling}function b_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yn(e,t),hi(t),i&4){try{Sa(3,t,t.return),Eu(3,t)}catch(v){wt(t,t.return,v)}try{Sa(5,t,t.return)}catch(v){wt(t,t.return,v)}}break;case 1:Yn(e,t),hi(t),i&512&&n!==null&&Js(n,n.return);break;case 5:if(Yn(e,t),hi(t),i&512&&n!==null&&Js(n,n.return),t.flags&32){var r=t.stateNode;try{ba(r,"")}catch(v){wt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&qx(r,s),vf(a,o);var c=vf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?Jx(r,f):u==="dangerouslySetInnerHTML"?Qx(r,f):u==="children"?ba(r,f):rp(r,u,f,c)}switch(a){case"input":ff(r,s);break;case"textarea":Yx(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?no(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?no(r,!!s.multiple,s.defaultValue,!0):no(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ua]=s}catch(v){wt(t,t.return,v)}}break;case 6:if(Yn(e,t),hi(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){wt(t,t.return,v)}}break;case 3:if(Yn(e,t),hi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Pa(e.containerInfo)}catch(v){wt(t,t.return,v)}break;case 4:Yn(e,t),hi(t);break;case 13:Yn(e,t),hi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Op=Tt())),i&4&&Lg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(c=Yt)||u,Yn(e,t),Yt=c):Yn(e,t),hi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ve=t,u=t.child;u!==null;){for(f=ve=u;ve!==null;){switch(h=ve,p=h.child,h.tag){case 0:case 11:case 14:case 15:Sa(4,h,h.return);break;case 1:Js(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){wt(i,n,v)}}break;case 5:Js(h,h.return);break;case 22:if(h.memoizedState!==null){Ig(f);continue}}p!==null?(p.return=h,ve=p):Ig(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Zx("display",o))}catch(v){wt(t,t.return,v)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){wt(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Yn(e,t),hi(t),i&4&&Lg(t);break;case 21:break;default:Yn(e,t),hi(t)}}function hi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(w_(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ba(r,""),i.flags&=-33);var s=Ng(t);$f(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ng(t);Xf(t,a,o);break;default:throw Error(re(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xw(t,e,n){ve=t,A_(t)}function A_(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Cl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Yt;a=Cl;var c=Yt;if(Cl=o,(Yt=l)&&!c)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?Ug(r):l!==null?(l.return=o,ve=l):Ug(r);for(;s!==null;)ve=s,A_(s),s=s.sibling;ve=r,Cl=a,Yt=c}Dg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):Dg(t)}}function Dg(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||Eu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Pa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Yt||e.flags&512&&jf(e)}catch(h){wt(e,e.return,h)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Ig(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Ug(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Eu(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{jf(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{jf(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var _w=Math.ceil,Qc=Ji.ReactCurrentDispatcher,Up=Ji.ReactCurrentOwner,Wn=Ji.ReactCurrentBatchConfig,Ke=0,Ot=null,Rt=null,zt=0,wn=0,eo=Vr(0),Lt=0,Ha=null,_s=0,Mu=0,Fp=0,Ea=null,dn=null,Op=0,Co=1/0,Fi=null,Zc=!1,qf=null,Cr=null,Rl=!1,Er=null,Jc=0,Ma=0,Yf=null,xc=-1,_c=0;function rn(){return Ke&6?Tt():xc!==-1?xc:xc=Tt()}function Rr(t){return t.mode&1?Ke&2&&zt!==0?zt&-zt:nw.transition!==null?(_c===0&&(_c=d0()),_c):(t=st,t!==0||(t=window.event,t=t===void 0?16:x0(t.type)),t):1}function oi(t,e,n,i){if(50<Ma)throw Ma=0,Yf=null,Error(re(185));el(t,n,i),(!(Ke&2)||t!==Ot)&&(t===Ot&&(!(Ke&2)&&(Mu|=n),Lt===4&&pr(t,zt)),mn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Co=Tt()+500,_u&&Gr()))}function mn(t,e){var n=t.callbackNode;nM(t,e);var i=Fc(t,t===Ot?zt:0);if(i===0)n!==null&&Wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Wm(n),e===1)t.tag===0?tw(Fg.bind(null,t)):O0(Fg.bind(null,t)),QM(function(){!(Ke&6)&&Gr()}),n=null;else{switch(f0(i)){case 1:n=cp;break;case 4:n=c0;break;case 16:n=Uc;break;case 536870912:n=u0;break;default:n=Uc}n=U_(n,C_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function C_(t,e){if(xc=-1,_c=0,Ke&6)throw Error(re(327));var n=t.callbackNode;if(ao()&&t.callbackNode!==n)return null;var i=Fc(t,t===Ot?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=eu(t,i);else{e=i;var r=Ke;Ke|=2;var s=P_();(Ot!==t||zt!==e)&&(Fi=null,Co=Tt()+500,ps(t,e));do try{Ew();break}catch(a){R_(t,a)}while(!0);Ep(),Qc.current=s,Ke=r,Rt!==null?e=0:(Ot=null,zt=0,e=Lt)}if(e!==0){if(e===2&&(r=Ef(t),r!==0&&(i=r,e=Kf(t,r))),e===1)throw n=Ha,ps(t,0),pr(t,i),mn(t,Tt()),n;if(e===6)pr(t,i);else{if(r=t.current.alternate,!(i&30)&&!yw(r)&&(e=eu(t,i),e===2&&(s=Ef(t),s!==0&&(i=s,e=Kf(t,s))),e===1))throw n=Ha,ps(t,0),pr(t,i),mn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Jr(t,dn,Fi);break;case 3:if(pr(t,i),(i&130023424)===i&&(e=Op+500-Tt(),10<e)){if(Fc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Pf(Jr.bind(null,t,dn,Fi),e);break}Jr(t,dn,Fi);break;case 4:if(pr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-si(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*_w(i/1960))-i,10<i){t.timeoutHandle=Pf(Jr.bind(null,t,dn,Fi),i);break}Jr(t,dn,Fi);break;case 5:Jr(t,dn,Fi);break;default:throw Error(re(329))}}}return mn(t,Tt()),t.callbackNode===n?C_.bind(null,t):null}function Kf(t,e){var n=Ea;return t.current.memoizedState.isDehydrated&&(ps(t,e).flags|=256),t=eu(t,e),t!==2&&(e=dn,dn=n,e!==null&&Qf(e)),t}function Qf(t){dn===null?dn=t:dn.push.apply(dn,t)}function yw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ci(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(t,e){for(e&=~Fp,e&=~Mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-si(e),i=1<<n;t[n]=-1,e&=~i}}function Fg(t){if(Ke&6)throw Error(re(327));ao();var e=Fc(t,0);if(!(e&1))return mn(t,Tt()),null;var n=eu(t,e);if(t.tag!==0&&n===2){var i=Ef(t);i!==0&&(e=i,n=Kf(t,i))}if(n===1)throw n=Ha,ps(t,0),pr(t,e),mn(t,Tt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jr(t,dn,Fi),mn(t,Tt()),null}function kp(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Co=Tt()+500,_u&&Gr())}}function ys(t){Er!==null&&Er.tag===0&&!(Ke&6)&&ao();var e=Ke;Ke|=1;var n=Wn.transition,i=st;try{if(Wn.transition=null,st=1,t)return t()}finally{st=i,Wn.transition=n,Ke=e,!(Ke&6)&&Gr()}}function Bp(){wn=eo.current,ht(eo)}function ps(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,KM(n)),Rt!==null)for(n=Rt.return;n!==null;){var i=n;switch(_p(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Hc();break;case 3:bo(),ht(hn),ht(Qt),Cp();break;case 5:Ap(i);break;case 4:bo();break;case 13:ht(vt);break;case 19:ht(vt);break;case 10:Mp(i.type._context);break;case 22:case 23:Bp()}n=n.return}if(Ot=t,Rt=t=Pr(t.current,null),zt=wn=e,Lt=0,Ha=null,Fp=Mu=_s=0,dn=Ea=null,ss!==null){for(e=0;e<ss.length;e++)if(n=ss[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ss=null}return t}function R_(t,e){do{var n=Rt;try{if(Ep(),mc.current=Kc,Yc){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Yc=!1}if(xs=0,Ft=Pt=xt=null,ya=!1,ka=0,Up.current=null,n===null||n.return===null){Lt=1,Ha=e,Rt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Mg(o);if(p!==null){p.flags&=-257,wg(p,o,a,s,e),p.mode&1&&Eg(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){Eg(s,c,e),zp();break e}l=Error(re(426))}}else if(gt&&a.mode&1){var m=Mg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),wg(m,o,a,s,e),yp(Ao(l,a));break e}}s=l=Ao(l,a),Lt!==4&&(Lt=2),Ea===null?Ea=[s]:Ea.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=f_(s,l,e);gg(s,d);break e;case 1:a=l;var x=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Cr===null||!Cr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=h_(s,a,e);gg(s,y);break e}}s=s.return}while(s!==null)}L_(n)}catch(C){e=C,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function P_(){var t=Qc.current;return Qc.current=Kc,t===null?Kc:t}function zp(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Ot===null||!(_s&268435455)&&!(Mu&268435455)||pr(Ot,zt)}function eu(t,e){var n=Ke;Ke|=2;var i=P_();(Ot!==t||zt!==e)&&(Fi=null,ps(t,e));do try{Sw();break}catch(r){R_(t,r)}while(!0);if(Ep(),Ke=n,Qc.current=i,Rt!==null)throw Error(re(261));return Ot=null,zt=0,Lt}function Sw(){for(;Rt!==null;)N_(Rt)}function Ew(){for(;Rt!==null&&!$E();)N_(Rt)}function N_(t){var e=I_(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?L_(t):Rt=e,Up.current=null}function L_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mw(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Rt=null;return}}else if(n=pw(n,e,wn),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Lt===0&&(Lt=5)}function Jr(t,e,n){var i=st,r=Wn.transition;try{Wn.transition=null,st=1,Mw(t,e,n,i)}finally{Wn.transition=r,st=i}return null}function Mw(t,e,n,i){do ao();while(Er!==null);if(Ke&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(iM(t,s),t===Ot&&(Rt=Ot=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rl||(Rl=!0,U_(Uc,function(){return ao(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Wn.transition,Wn.transition=null;var o=st;st=1;var a=Ke;Ke|=4,Up.current=null,vw(t,n),b_(n,t),GM(Cf),Oc=!!Af,Cf=Af=null,t.current=n,xw(n),qE(),Ke=a,st=o,Wn.transition=s}else t.current=n;if(Rl&&(Rl=!1,Er=t,Jc=r),s=t.pendingLanes,s===0&&(Cr=null),QE(n.stateNode),mn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Zc)throw Zc=!1,t=qf,qf=null,t;return Jc&1&&t.tag!==0&&ao(),s=t.pendingLanes,s&1?t===Yf?Ma++:(Ma=0,Yf=t):Ma=0,Gr(),null}function ao(){if(Er!==null){var t=f0(Jc),e=Wn.transition,n=st;try{if(Wn.transition=null,st=16>t?16:t,Er===null)var i=!1;else{if(t=Er,Er=null,Jc=0,Ke&6)throw Error(re(331));var r=Ke;for(Ke|=4,ve=t.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ve=c;ve!==null;){var u=ve;switch(u.tag){case 0:case 11:case 15:Sa(8,u,s)}var f=u.child;if(f!==null)f.return=u,ve=f;else for(;ve!==null;){u=ve;var h=u.sibling,p=u.return;if(M_(u),u===c){ve=null;break}if(h!==null){h.return=p,ve=h;break}ve=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Sa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ve=d;break e}ve=s.return}}var x=t.current;for(ve=x;ve!==null;){o=ve;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,ve=_;else e:for(o=x;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Eu(9,a)}}catch(C){wt(a,a.return,C)}if(a===o){ve=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ve=y;break e}ve=a.return}}if(Ke=r,Gr(),Si&&typeof Si.onPostCommitFiberRoot=="function")try{Si.onPostCommitFiberRoot(pu,t)}catch{}i=!0}return i}finally{st=n,Wn.transition=e}}return!1}function Og(t,e,n){e=Ao(n,e),e=f_(t,e,1),t=Ar(t,e,1),e=rn(),t!==null&&(el(t,1,e),mn(t,e))}function wt(t,e,n){if(t.tag===3)Og(t,t,n);else for(;e!==null;){if(e.tag===3){Og(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cr===null||!Cr.has(i))){t=Ao(n,t),t=h_(e,t,1),e=Ar(e,t,1),t=rn(),e!==null&&(el(e,1,t),mn(e,t));break}}e=e.return}}function ww(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(zt&n)===n&&(Lt===4||Lt===3&&(zt&130023424)===zt&&500>Tt()-Op?ps(t,0):Fp|=n),mn(t,e)}function D_(t,e){e===0&&(t.mode&1?(e=_l,_l<<=1,!(_l&130023424)&&(_l=4194304)):e=1);var n=rn();t=$i(t,e),t!==null&&(el(t,e,n),mn(t,n))}function Tw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),D_(t,n)}function bw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),D_(t,n)}var I_;I_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)fn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return fn=!1,hw(t,e,n);fn=!!(t.flags&131072)}else fn=!1,gt&&e.flags&1048576&&k0(e,Wc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;vc(t,e),t=e.pendingProps;var r=Mo(e,Qt.current);oo(e,n),r=Pp(null,e,i,t,r,n);var s=Np();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(i)?(s=!0,Vc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Tp(e),r.updater=Su,e.stateNode=r,r._reactInternals=e,Of(e,i,t,n),e=zf(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&xp(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(vc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Cw(i),t=Jn(i,t),r){case 0:e=Bf(null,e,i,t,n);break e;case 1:e=Ag(null,e,i,t,n);break e;case 11:e=Tg(null,e,i,t,n);break e;case 14:e=bg(null,e,i,Jn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Bf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Ag(t,e,i,r,n);case 3:e:{if(v_(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,W0(t,e),$c(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ao(Error(re(423)),e),e=Cg(t,e,i,n,r);break e}else if(i!==r){r=Ao(Error(re(424)),e),e=Cg(t,e,i,n,r);break e}else for(An=br(e.stateNode.containerInfo.firstChild),Rn=e,gt=!0,ii=null,n=V0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wo(),i===r){e=qi(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return j0(e),t===null&&If(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Rf(i,r)?o=null:s!==null&&Rf(i,s)&&(e.flags|=32),g_(t,e),tn(t,e,o,n),e.child;case 6:return t===null&&If(e),null;case 13:return x_(t,e,n);case 4:return bp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=To(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Tg(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ut(jc,i._currentValue),i._currentValue=o,s!==null)if(ci(s.value,o)){if(s.children===r.children&&!hn.current){e=qi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Gi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Uf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Uf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,oo(e,n),r=jn(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=Jn(i,e.pendingProps),r=Jn(i.type,r),bg(t,e,i,r,n);case 15:return p_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),vc(t,e),e.tag=1,pn(i)?(t=!0,Vc(e)):t=!1,oo(e,n),d_(e,i,r),Of(e,i,r,n),zf(null,e,i,!0,t,n);case 19:return __(t,e,n);case 22:return m_(t,e,n)}throw Error(re(156,e.tag))};function U_(t,e){return l0(t,e)}function Aw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,n,i){return new Aw(t,e,n,i)}function Hp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cw(t){if(typeof t=="function")return Hp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===op)return 11;if(t===ap)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=Gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Hp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ws:return ms(n.children,r,s,e);case sp:o=8,r|=8;break;case af:return t=Gn(12,n,e,r|2),t.elementType=af,t.lanes=s,t;case lf:return t=Gn(13,n,e,r),t.elementType=lf,t.lanes=s,t;case cf:return t=Gn(19,n,e,r),t.elementType=cf,t.lanes=s,t;case jx:return wu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gx:o=10;break e;case Wx:o=9;break e;case op:o=11;break e;case ap:o=14;break e;case dr:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Gn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ms(t,e,n,i){return t=Gn(7,t,i,e),t.lanes=n,t}function wu(t,e,n,i){return t=Gn(22,t,i,e),t.elementType=jx,t.lanes=n,t.stateNode={isHidden:!1},t}function vd(t,e,n){return t=Gn(6,t,null,e),t.lanes=n,t}function xd(t,e,n){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Rw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zu(0),this.expirationTimes=Zu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vp(t,e,n,i,r,s,o,a,l){return t=new Rw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tp(s),t}function Pw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function F_(t){if(!t)return Ir;t=t._reactInternals;e:{if(bs(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(pn(n))return F0(t,n,e)}return e}function O_(t,e,n,i,r,s,o,a,l){return t=Vp(n,i,!0,t,r,s,o,a,l),t.context=F_(null),n=t.current,i=rn(),r=Rr(n),s=Gi(i,r),s.callback=e??null,Ar(n,s,r),t.current.lanes=r,el(t,r,i),mn(t,i),t}function Tu(t,e,n,i){var r=e.current,s=rn(),o=Rr(r);return n=F_(n),e.context===null?e.context=n:e.pendingContext=n,e=Gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ar(r,e,o),t!==null&&(oi(t,r,o,s),pc(t,r,o)),o}function tu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gp(t,e){kg(t,e),(t=t.alternate)&&kg(t,e)}function Nw(){return null}var k_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wp(t){this._internalRoot=t}bu.prototype.render=Wp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Tu(t,e,null,null)};bu.prototype.unmount=Wp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ys(function(){Tu(null,t,null,null)}),e[Xi]=null}};function bu(t){this._internalRoot=t}bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=m0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hr.length&&e!==0&&e<hr[n].priority;n++);hr.splice(n,0,t),n===0&&v0(t)}};function jp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bg(){}function Lw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=tu(o);s.call(c)}}var o=O_(e,i,t,0,null,!1,!1,"",Bg);return t._reactRootContainer=o,t[Xi]=o.current,Da(t.nodeType===8?t.parentNode:t),ys(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=tu(l);a.call(c)}}var l=Vp(t,0,!1,null,null,!1,!1,"",Bg);return t._reactRootContainer=l,t[Xi]=l.current,Da(t.nodeType===8?t.parentNode:t),ys(function(){Tu(e,l,n,i)}),l}function Cu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=tu(o);a.call(l)}}Tu(e,o,t,r)}else o=Lw(n,e,t,r,i);return tu(o)}h0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fa(e.pendingLanes);n!==0&&(up(e,n|1),mn(e,Tt()),!(Ke&6)&&(Co=Tt()+500,Gr()))}break;case 13:ys(function(){var i=$i(t,1);if(i!==null){var r=rn();oi(i,t,1,r)}}),Gp(t,1)}};dp=function(t){if(t.tag===13){var e=$i(t,134217728);if(e!==null){var n=rn();oi(e,t,134217728,n)}Gp(t,134217728)}};p0=function(t){if(t.tag===13){var e=Rr(t),n=$i(t,e);if(n!==null){var i=rn();oi(n,t,e,i)}Gp(t,e)}};m0=function(){return st};g0=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};_f=function(t,e,n){switch(e){case"input":if(ff(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=xu(i);if(!r)throw Error(re(90));$x(i),ff(i,r)}}}break;case"textarea":Yx(t,n);break;case"select":e=n.value,e!=null&&no(t,!!n.multiple,e,!1)}};n0=kp;i0=ys;var Dw={usingClientEntryPoint:!1,Events:[nl,qs,xu,e0,t0,kp]},ta={findFiberByHostInstance:rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Iw={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=o0(t),t===null?null:t.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||Nw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{pu=Pl.inject(Iw),Si=Pl}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dw;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jp(e))throw Error(re(200));return Pw(t,e,null,n)};Ln.createRoot=function(t,e){if(!jp(t))throw Error(re(299));var n=!1,i="",r=k_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vp(t,1,!1,null,null,n,!1,i,r),t[Xi]=e.current,Da(t.nodeType===8?t.parentNode:t),new Wp(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=o0(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return ys(t)};Ln.hydrate=function(t,e,n){if(!Au(e))throw Error(re(200));return Cu(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!jp(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=k_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=O_(e,null,t,1,n??null,r,!1,s,o),t[Xi]=e.current,Da(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new bu(e)};Ln.render=function(t,e,n){if(!Au(e))throw Error(re(200));return Cu(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!Au(t))throw Error(re(40));return t._reactRootContainer?(ys(function(){Cu(null,null,t,!1,function(){t._reactRootContainer=null,t[Xi]=null})}),!0):!1};Ln.unstable_batchedUpdates=kp;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Au(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Cu(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function B_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B_)}catch(t){console.error(t)}}B_(),Bx.exports=Ln;var rl=Bx.exports;const Uw=Ax(rl);var z_,zg=rl;z_=zg.createRoot,zg.hydrateRoot;function Fw(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,i,r,s,o=[],a="",l=t.split("/");for(l[0]||l.shift();r=l.shift();)n=r[0],n==="*"?(o.push(n),a+=r[1]==="?"?"(?:/(.*))?":"/(.*)"):n===":"?(i=r.indexOf("?",1),s=r.indexOf(".",1),o.push(r.substring(1,~i?i:~s?s:r.length)),a+=~i&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(a+=(~i?"?":"")+"\\"+r.substring(s))):a+="/"+r;return{keys:o,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}var H_={exports:{}},V_={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ro=L;function Ow(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kw=typeof Object.is=="function"?Object.is:Ow,Bw=Ro.useState,zw=Ro.useEffect,Hw=Ro.useLayoutEffect,Vw=Ro.useDebugValue;function Gw(t,e){var n=e(),i=Bw({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return Hw(function(){r.value=n,r.getSnapshot=e,_d(r)&&s({inst:r})},[t,n,e]),zw(function(){return _d(r)&&s({inst:r}),t(function(){_d(r)&&s({inst:r})})},[t]),Vw(n),n}function _d(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kw(t,n)}catch{return!0}}function Ww(t,e){return e()}var jw=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Ww:Gw;V_.useSyncExternalStore=Ro.useSyncExternalStore!==void 0?Ro.useSyncExternalStore:jw;H_.exports=V_;var Xw=H_.exports;const $w=wE.useInsertionEffect,qw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yw=qw?L.useLayoutEffect:L.useEffect,Kw=$w||Yw,G_=t=>{const e=L.useRef([t,(...n)=>e[0](...n)]).current;return Kw(()=>{e[0]=t}),e[1]},Qw="popstate",Xp="pushState",$p="replaceState",Zw="hashchange",Hg=[Qw,Xp,$p,Zw],Jw=t=>{for(const e of Hg)addEventListener(e,t);return()=>{for(const e of Hg)removeEventListener(e,t)}},W_=(t,e)=>Xw.useSyncExternalStore(Jw,t,e),eT=()=>location.search,tT=({ssrSearch:t=""}={})=>W_(eT,()=>t),Vg=()=>location.pathname,nT=({ssrPath:t}={})=>W_(Vg,t?()=>t:Vg),iT=(t,{replace:e=!1,state:n=null}={})=>history[e?$p:Xp](n,"",t),rT=(t={})=>[nT(t),iT],Gg=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[Gg]>"u"){for(const t of[Xp,$p]){const e=history[t];history[t]=function(){const n=e.apply(this,arguments),i=new Event(t);return i.arguments=arguments,dispatchEvent(i),n}}Object.defineProperty(window,Gg,{value:!0})}const sT=(t,e)=>e.toLowerCase().indexOf(t.toLowerCase())?"~"+e:e.slice(t.length)||"/",j_=(t="")=>t==="/"?"":t,oT=(t,e)=>t[0]==="~"?t.slice(1):j_(e)+t,aT=(t="",e)=>sT(Wg(j_(t)),Wg(e)),Wg=t=>{try{return decodeURI(t)}catch{return t}},X_={hook:rT,searchHook:tT,parser:Fw,base:"",ssrPath:void 0,ssrSearch:void 0,hrefs:t=>t},$_=L.createContext(X_),Ru=()=>L.useContext($_),q_={},Y_=L.createContext(q_),lT=()=>L.useContext(Y_),qp=t=>{const[e,n]=t.hook(t);return[aT(t.base,e),G_((i,r)=>n(oT(i,t.base),r))]},K_=(t,e,n,i)=>{const{pattern:r,keys:s}=e instanceof RegExp?{keys:!1,pattern:e}:t(e||"*",i),o=r.exec(n)||[],[a,...l]=o;return a!==void 0?[!0,(()=>{const c=s!==!1?Object.fromEntries(s.map((f,h)=>[f,l[h]])):o.groups;let u={...l};return c&&Object.assign(u,c),u})(),...i?[a]:[]]:[!1,null]},cT=({children:t,...e})=>{var u,f;const n=Ru(),i=e.hook?X_:n;let r=i;const[s,o]=((u=e.ssrPath)==null?void 0:u.split("?"))??[];o&&(e.ssrSearch=o,e.ssrPath=s),e.hrefs=e.hrefs??((f=e.hook)==null?void 0:f.hrefs);let a=L.useRef({}),l=a.current,c=l;for(let h in i){const p=h==="base"?i[h]+(e[h]||""):e[h]||i[h];l===c&&p!==c[h]&&(a.current=c={...c}),c[h]=p,p!==i[h]&&(r=c)}return L.createElement($_.Provider,{value:r,children:t})},jg=({children:t,component:e},n)=>e?L.createElement(e,{params:n}):typeof t=="function"?t(n):t,uT=t=>{let e=L.useRef(q_),n=e.current;for(const i in t)t[i]!==n[i]&&(n=t);return Object.keys(t).length===0&&(n=t),e.current=n},Xg=({path:t,nest:e,match:n,...i})=>{const r=Ru(),[s]=qp(r),[o,a,l]=n??K_(r.parser,t,s,e),c=uT({...lT(),...a});if(!o)return null;const u=l?L.createElement(cT,{base:l},jg(i,c)):jg(i,c);return L.createElement(Y_.Provider,{value:c,children:u})};L.forwardRef((t,e)=>{const n=Ru(),[i,r]=qp(n),{to:s="",href:o=s,onClick:a,asChild:l,children:c,className:u,replace:f,state:h,...p}=t,g=G_(m=>{m.ctrlKey||m.metaKey||m.altKey||m.shiftKey||m.button!==0||(a==null||a(m),m.defaultPrevented||(m.preventDefault(),r(o,t)))}),v=n.hrefs(o[0]==="~"?o.slice(1):n.base+o,n);return l&&L.isValidElement(c)?L.cloneElement(c,{onClick:g,href:v}):L.createElement("a",{...p,onClick:g,href:v,className:u!=null&&u.call?u(i===o):u,children:c,ref:e})});const Q_=t=>Array.isArray(t)?t.flatMap(e=>Q_(e&&e.type===L.Fragment?e.props.children:e)):[t],dT=({children:t,location:e})=>{const n=Ru(),[i]=qp(n);for(const r of Q_(t)){let s=0;if(L.isValidElement(r)&&(s=K_(n.parser,r.props.path,e||i,r.props.nest))[0])return L.cloneElement(r,{match:s})}return null};var Pu=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Nu=typeof window>"u"||"Deno"in globalThis;function ei(){}function fT(t,e){return typeof t=="function"?t(e):t}function hT(t){return typeof t=="number"&&t>=0&&t!==1/0}function pT(t,e){return Math.max(t+(e||0)-Date.now(),0)}function $g(t,e){return typeof t=="function"?t(e):t}function mT(t,e){return typeof t=="function"?t(e):t}function qg(t,e){const{type:n="all",exact:i,fetchStatus:r,predicate:s,queryKey:o,stale:a}=t;if(o){if(i){if(e.queryHash!==Yp(o,e.options))return!1}else if(!Ga(e.queryKey,o))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||r&&r!==e.state.fetchStatus||s&&!s(e))}function Yg(t,e){const{exact:n,status:i,predicate:r,mutationKey:s}=t;if(s){if(!e.options.mutationKey)return!1;if(n){if(Va(e.options.mutationKey)!==Va(s))return!1}else if(!Ga(e.options.mutationKey,s))return!1}return!(i&&e.state.status!==i||r&&!r(e))}function Yp(t,e){return((e==null?void 0:e.queryKeyHashFn)||Va)(t)}function Va(t){return JSON.stringify(t,(e,n)=>Zf(n)?Object.keys(n).sort().reduce((i,r)=>(i[r]=n[r],i),{}):n)}function Ga(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!Ga(t[n],e[n])):!1}function Z_(t,e){if(t===e)return t;const n=Kg(t)&&Kg(e);if(n||Zf(t)&&Zf(e)){const i=n?t:Object.keys(t),r=i.length,s=n?e:Object.keys(e),o=s.length,a=n?[]:{};let l=0;for(let c=0;c<o;c++){const u=n?c:s[c];(!n&&i.includes(u)||n)&&t[u]===void 0&&e[u]===void 0?(a[u]=void 0,l++):(a[u]=Z_(t[u],e[u]),a[u]===t[u]&&t[u]!==void 0&&l++)}return r===o&&l===r?t:a}return e}function Kg(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Zf(t){if(!Qg(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!Qg(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function Qg(t){return Object.prototype.toString.call(t)==="[object Object]"}function gT(t){return new Promise(e=>{setTimeout(e,t)})}function vT(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?Z_(t,e):e}function xT(t,e,n=0){const i=[...t,e];return n&&i.length>n?i.slice(1):i}function _T(t,e,n=0){const i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var Kp=Symbol();function J_(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Kp?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var us,gr,ho,_x,yT=(_x=class extends Pu{constructor(){super();nt(this,us);nt(this,gr);nt(this,ho);ze(this,ho,e=>{if(!Nu&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){J(this,gr)||this.setEventListener(J(this,ho))}onUnsubscribe(){var e;this.hasListeners()||((e=J(this,gr))==null||e.call(this),ze(this,gr,void 0))}setEventListener(e){var n;ze(this,ho,e),(n=J(this,gr))==null||n.call(this),ze(this,gr,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){J(this,us)!==e&&(ze(this,us,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof J(this,us)=="boolean"?J(this,us):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},us=new WeakMap,gr=new WeakMap,ho=new WeakMap,_x),ey=new yT,po,vr,mo,yx,ST=(yx=class extends Pu{constructor(){super();nt(this,po,!0);nt(this,vr);nt(this,mo);ze(this,mo,e=>{if(!Nu&&window.addEventListener){const n=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){J(this,vr)||this.setEventListener(J(this,mo))}onUnsubscribe(){var e;this.hasListeners()||((e=J(this,vr))==null||e.call(this),ze(this,vr,void 0))}setEventListener(e){var n;ze(this,mo,e),(n=J(this,vr))==null||n.call(this),ze(this,vr,e(this.setOnline.bind(this)))}setOnline(e){J(this,po)!==e&&(ze(this,po,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return J(this,po)}},po=new WeakMap,vr=new WeakMap,mo=new WeakMap,yx),nu=new ST;function ET(){let t,e;const n=new Promise((r,s)=>{t=r,e=s});n.status="pending",n.catch(()=>{});function i(r){Object.assign(n,r),delete n.resolve,delete n.reject}return n.resolve=r=>{i({status:"fulfilled",value:r}),t(r)},n.reject=r=>{i({status:"rejected",reason:r}),e(r)},n}function MT(t){return Math.min(1e3*2**t,3e4)}function ty(t){return(t??"online")==="online"?nu.isOnline():!0}var ny=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function yd(t){return t instanceof ny}function iy(t){let e=!1,n=0,i=!1,r;const s=ET(),o=v=>{var m;i||(h(new ny(v)),(m=t.abort)==null||m.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>ey.isFocused()&&(t.networkMode==="always"||nu.isOnline())&&t.canRun(),u=()=>ty(t.networkMode)&&t.canRun(),f=v=>{var m;i||(i=!0,(m=t.onSuccess)==null||m.call(t,v),r==null||r(),s.resolve(v))},h=v=>{var m;i||(i=!0,(m=t.onError)==null||m.call(t,v),r==null||r(),s.reject(v))},p=()=>new Promise(v=>{var m;r=d=>{(i||c())&&v(d)},(m=t.onPause)==null||m.call(t)}).then(()=>{var v;r=void 0,i||(v=t.onContinue)==null||v.call(t)}),g=()=>{if(i)return;let v;const m=n===0?t.initialPromise:void 0;try{v=m??t.fn()}catch(d){v=Promise.reject(d)}Promise.resolve(v).then(f).catch(d=>{var A;if(i)return;const x=t.retry??(Nu?0:3),_=t.retryDelay??MT,y=typeof _=="function"?_(n,d):_,C=x===!0||typeof x=="number"&&n<x||typeof x=="function"&&x(n,d);if(e||!C){h(d);return}n++,(A=t.onFail)==null||A.call(t,n,d),gT(y).then(()=>c()?void 0:p()).then(()=>{e?h(d):g()})})};return{promise:s,cancel:o,continue:()=>(r==null||r(),s),cancelRetry:a,continueRetry:l,canStart:u,start:()=>(u()?g():p().then(g),s)}}function wT(){let t=[],e=0,n=a=>{a()},i=a=>{a()},r=a=>setTimeout(a,0);const s=a=>{e?t.push(a):r(()=>{n(a)})},o=()=>{const a=t;t=[],a.length&&r(()=>{i(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||o()}return l},batchCalls:a=>(...l)=>{s(()=>{a(...l)})},schedule:s,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{i=a},setScheduler:a=>{r=a}}}var nn=wT(),ds,Sx,ry=(Sx=class{constructor(){nt(this,ds)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),hT(this.gcTime)&&ze(this,ds,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Nu?1/0:5*60*1e3))}clearGcTimeout(){J(this,ds)&&(clearTimeout(J(this,ds)),ze(this,ds,void 0))}},ds=new WeakMap,Sx),go,vo,kn,qt,Qa,fs,ti,Ii,Ex,TT=(Ex=class extends ry{constructor(e){super();nt(this,ti);nt(this,go);nt(this,vo);nt(this,kn);nt(this,qt);nt(this,Qa);nt(this,fs);ze(this,fs,!1),ze(this,Qa,e.defaultOptions),this.setOptions(e.options),this.observers=[],ze(this,kn,e.cache),this.queryKey=e.queryKey,this.queryHash=e.queryHash,ze(this,go,AT(this.options)),this.state=e.state??J(this,go),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=J(this,qt))==null?void 0:e.promise}setOptions(e){this.options={...J(this,Qa),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&J(this,kn).remove(this)}setData(e,n){const i=vT(this.state.data,e,this.options);return Gt(this,ti,Ii).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(e,n){Gt(this,ti,Ii).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var i,r;const n=(i=J(this,qt))==null?void 0:i.promise;return(r=J(this,qt))==null||r.cancel(e),n?n.then(ei).catch(ei):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(J(this,go))}isActive(){return this.observers.some(e=>mT(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Kp||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!pT(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=J(this,qt))==null||n.continue()}onOnline(){var n;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=J(this,qt))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),J(this,kn).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(J(this,qt)&&(J(this,fs)?J(this,qt).cancel({revert:!0}):J(this,qt).cancelRetry()),this.scheduleGc()),J(this,kn).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Gt(this,ti,Ii).call(this,{type:"invalidate"})}fetch(e,n){var l,c,u;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(J(this,qt))return J(this,qt).continueRetry(),J(this,qt).promise}if(e&&this.setOptions(e),!this.options.queryFn){const f=this.observers.find(h=>h.options.queryFn);f&&this.setOptions(f.options)}const i=new AbortController,r=f=>{Object.defineProperty(f,"signal",{enumerable:!0,get:()=>(ze(this,fs,!0),i.signal)})},s=()=>{const f=J_(this.options,n),h={queryKey:this.queryKey,meta:this.meta};return r(h),ze(this,fs,!1),this.options.persister?this.options.persister(f,h,this):f(h)},o={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:s};r(o),(l=this.options.behavior)==null||l.onFetch(o,this),ze(this,vo,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=o.fetchOptions)==null?void 0:c.meta))&&Gt(this,ti,Ii).call(this,{type:"fetch",meta:(u=o.fetchOptions)==null?void 0:u.meta});const a=f=>{var h,p,g,v;yd(f)&&f.silent||Gt(this,ti,Ii).call(this,{type:"error",error:f}),yd(f)||((p=(h=J(this,kn).config).onError)==null||p.call(h,f,this),(v=(g=J(this,kn).config).onSettled)==null||v.call(g,this.state.data,f,this)),this.scheduleGc()};return ze(this,qt,iy({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,abort:i.abort.bind(i),onSuccess:f=>{var h,p,g,v;if(f===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(f)}catch(m){a(m);return}(p=(h=J(this,kn).config).onSuccess)==null||p.call(h,f,this),(v=(g=J(this,kn).config).onSettled)==null||v.call(g,f,this.state.error,this),this.scheduleGc()},onError:a,onFail:(f,h)=>{Gt(this,ti,Ii).call(this,{type:"failed",failureCount:f,error:h})},onPause:()=>{Gt(this,ti,Ii).call(this,{type:"pause"})},onContinue:()=>{Gt(this,ti,Ii).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0})),J(this,qt).start()}},go=new WeakMap,vo=new WeakMap,kn=new WeakMap,qt=new WeakMap,Qa=new WeakMap,fs=new WeakMap,ti=new WeakSet,Ii=function(e){const n=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...bT(i.data,this.options),fetchMeta:e.meta??null};case"success":return{...i,data:e.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const r=e.error;return yd(r)&&r.revert&&J(this,vo)?{...J(this,vo),fetchStatus:"idle"}:{...i,error:r,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=n(this.state),nn.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),J(this,kn).notify({query:this,type:"updated",action:e})})},Ex);function bT(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:ty(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function AT(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,i=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var mi,Mx,CT=(Mx=class extends Pu{constructor(e={}){super();nt(this,mi);this.config=e,ze(this,mi,new Map)}build(e,n,i){const r=n.queryKey,s=n.queryHash??Yp(r,n);let o=this.get(s);return o||(o=new TT({cache:this,queryKey:r,queryHash:s,options:e.defaultQueryOptions(n),state:i,defaultOptions:e.getQueryDefaults(r)}),this.add(o)),o}add(e){J(this,mi).has(e.queryHash)||(J(this,mi).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=J(this,mi).get(e.queryHash);n&&(e.destroy(),n===e&&J(this,mi).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){nn.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return J(this,mi).get(e)}getAll(){return[...J(this,mi).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(i=>qg(n,i))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(i=>qg(e,i)):n}notify(e){nn.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){nn.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){nn.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},mi=new WeakMap,Mx),gi,en,hs,vi,ur,wx,RT=(wx=class extends ry{constructor(e){super();nt(this,vi);nt(this,gi);nt(this,en);nt(this,hs);this.mutationId=e.mutationId,ze(this,en,e.mutationCache),ze(this,gi,[]),this.state=e.state||PT(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){J(this,gi).includes(e)||(J(this,gi).push(e),this.clearGcTimeout(),J(this,en).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){ze(this,gi,J(this,gi).filter(n=>n!==e)),this.scheduleGc(),J(this,en).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){J(this,gi).length||(this.state.status==="pending"?this.scheduleGc():J(this,en).remove(this))}continue(){var e;return((e=J(this,hs))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var r,s,o,a,l,c,u,f,h,p,g,v,m,d,x,_,y,C,A,b;ze(this,hs,iy({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(R,w)=>{Gt(this,vi,ur).call(this,{type:"failed",failureCount:R,error:w})},onPause:()=>{Gt(this,vi,ur).call(this,{type:"pause"})},onContinue:()=>{Gt(this,vi,ur).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>J(this,en).canRun(this)}));const n=this.state.status==="pending",i=!J(this,hs).canStart();try{if(!n){Gt(this,vi,ur).call(this,{type:"pending",variables:e,isPaused:i}),await((s=(r=J(this,en).config).onMutate)==null?void 0:s.call(r,e,this));const w=await((a=(o=this.options).onMutate)==null?void 0:a.call(o,e));w!==this.state.context&&Gt(this,vi,ur).call(this,{type:"pending",context:w,variables:e,isPaused:i})}const R=await J(this,hs).start();return await((c=(l=J(this,en).config).onSuccess)==null?void 0:c.call(l,R,e,this.state.context,this)),await((f=(u=this.options).onSuccess)==null?void 0:f.call(u,R,e,this.state.context)),await((p=(h=J(this,en).config).onSettled)==null?void 0:p.call(h,R,null,this.state.variables,this.state.context,this)),await((v=(g=this.options).onSettled)==null?void 0:v.call(g,R,null,e,this.state.context)),Gt(this,vi,ur).call(this,{type:"success",data:R}),R}catch(R){try{throw await((d=(m=J(this,en).config).onError)==null?void 0:d.call(m,R,e,this.state.context,this)),await((_=(x=this.options).onError)==null?void 0:_.call(x,R,e,this.state.context)),await((C=(y=J(this,en).config).onSettled)==null?void 0:C.call(y,void 0,R,this.state.variables,this.state.context,this)),await((b=(A=this.options).onSettled)==null?void 0:b.call(A,void 0,R,e,this.state.context)),R}finally{Gt(this,vi,ur).call(this,{type:"error",error:R})}}finally{J(this,en).runNext(this)}}},gi=new WeakMap,en=new WeakMap,hs=new WeakMap,vi=new WeakSet,ur=function(e){const n=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),nn.batch(()=>{J(this,gi).forEach(i=>{i.onMutationUpdate(e)}),J(this,en).notify({mutation:this,type:"updated",action:e})})},wx);function PT(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Mn,Za,Tx,NT=(Tx=class extends Pu{constructor(e={}){super();nt(this,Mn);nt(this,Za);this.config=e,ze(this,Mn,new Map),ze(this,Za,Date.now())}build(e,n,i){const r=new RT({mutationCache:this,mutationId:++hl(this,Za)._,options:e.defaultMutationOptions(n),state:i});return this.add(r),r}add(e){const n=Nl(e),i=J(this,Mn).get(n)??[];i.push(e),J(this,Mn).set(n,i),this.notify({type:"added",mutation:e})}remove(e){var i;const n=Nl(e);if(J(this,Mn).has(n)){const r=(i=J(this,Mn).get(n))==null?void 0:i.filter(s=>s!==e);r&&(r.length===0?J(this,Mn).delete(n):J(this,Mn).set(n,r))}this.notify({type:"removed",mutation:e})}canRun(e){var i;const n=(i=J(this,Mn).get(Nl(e)))==null?void 0:i.find(r=>r.state.status==="pending");return!n||n===e}runNext(e){var i;const n=(i=J(this,Mn).get(Nl(e)))==null?void 0:i.find(r=>r!==e&&r.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){nn.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...J(this,Mn).values()].flat()}find(e){const n={exact:!0,...e};return this.getAll().find(i=>Yg(n,i))}findAll(e={}){return this.getAll().filter(n=>Yg(e,n))}notify(e){nn.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return nn.batch(()=>Promise.all(e.map(n=>n.continue().catch(ei))))}},Mn=new WeakMap,Za=new WeakMap,Tx);function Nl(t){var e;return((e=t.options.scope)==null?void 0:e.id)??String(t.mutationId)}function Zg(t){return{onFetch:(e,n)=>{var u,f,h,p,g;const i=e.options,r=(h=(f=(u=e.fetchOptions)==null?void 0:u.meta)==null?void 0:f.fetchMore)==null?void 0:h.direction,s=((p=e.state.data)==null?void 0:p.pages)||[],o=((g=e.state.data)==null?void 0:g.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let v=!1;const m=_=>{Object.defineProperty(_,"signal",{enumerable:!0,get:()=>(e.signal.aborted?v=!0:e.signal.addEventListener("abort",()=>{v=!0}),e.signal)})},d=J_(e.options,e.fetchOptions),x=async(_,y,C)=>{if(v)return Promise.reject();if(y==null&&_.pages.length)return Promise.resolve(_);const A={queryKey:e.queryKey,pageParam:y,direction:C?"backward":"forward",meta:e.options.meta};m(A);const b=await d(A),{maxPages:R}=e.options,w=C?_T:xT;return{pages:w(_.pages,b,R),pageParams:w(_.pageParams,y,R)}};if(r&&s.length){const _=r==="backward",y=_?LT:Jg,C={pages:s,pageParams:o},A=y(i,C);a=await x(C,A,_)}else{const _=t??s.length;do{const y=l===0?o[0]??i.initialPageParam:Jg(i,a);if(l>0&&y==null)break;a=await x(a,y),l++}while(l<_)}return a};e.options.persister?e.fetchFn=()=>{var v,m;return(m=(v=e.options).persister)==null?void 0:m.call(v,c,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function Jg(t,{pages:e,pageParams:n}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,n[i],n):void 0}function LT(t,{pages:e,pageParams:n}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n):void 0}var Mt,xr,_r,xo,_o,yr,yo,So,bx,DT=(bx=class{constructor(t={}){nt(this,Mt);nt(this,xr);nt(this,_r);nt(this,xo);nt(this,_o);nt(this,yr);nt(this,yo);nt(this,So);ze(this,Mt,t.queryCache||new CT),ze(this,xr,t.mutationCache||new NT),ze(this,_r,t.defaultOptions||{}),ze(this,xo,new Map),ze(this,_o,new Map),ze(this,yr,0)}mount(){hl(this,yr)._++,J(this,yr)===1&&(ze(this,yo,ey.subscribe(async t=>{t&&(await this.resumePausedMutations(),J(this,Mt).onFocus())})),ze(this,So,nu.subscribe(async t=>{t&&(await this.resumePausedMutations(),J(this,Mt).onOnline())})))}unmount(){var t,e;hl(this,yr)._--,J(this,yr)===0&&((t=J(this,yo))==null||t.call(this),ze(this,yo,void 0),(e=J(this,So))==null||e.call(this),ze(this,So,void 0))}isFetching(t){return J(this,Mt).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return J(this,xr).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=J(this,Mt).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.getQueryData(t.queryKey);if(e===void 0)return this.fetchQuery(t);{const n=this.defaultQueryOptions(t),i=J(this,Mt).build(this,n);return t.revalidateIfStale&&i.isStaleByTime($g(n.staleTime,i))&&this.prefetchQuery(n),Promise.resolve(e)}}getQueriesData(t){return J(this,Mt).findAll(t).map(({queryKey:e,state:n})=>{const i=n.data;return[e,i]})}setQueryData(t,e,n){const i=this.defaultQueryOptions({queryKey:t}),r=J(this,Mt).get(i.queryHash),s=r==null?void 0:r.state.data,o=fT(e,s);if(o!==void 0)return J(this,Mt).build(this,i).setData(o,{...n,manual:!0})}setQueriesData(t,e,n){return nn.batch(()=>J(this,Mt).findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=J(this,Mt).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=J(this,Mt);nn.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=J(this,Mt),i={type:"active",...t};return nn.batch(()=>(n.findAll(t).forEach(r=>{r.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){const n={revert:!0,...e},i=nn.batch(()=>J(this,Mt).findAll(t).map(r=>r.cancel(n)));return Promise.all(i).then(ei).catch(ei)}invalidateQueries(t={},e={}){return nn.batch(()=>{if(J(this,Mt).findAll(t).forEach(i=>{i.invalidate()}),t.refetchType==="none")return Promise.resolve();const n={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(n,e)})}refetchQueries(t={},e){const n={...e,cancelRefetch:(e==null?void 0:e.cancelRefetch)??!0},i=nn.batch(()=>J(this,Mt).findAll(t).filter(r=>!r.isDisabled()).map(r=>{let s=r.fetch(void 0,n);return n.throwOnError||(s=s.catch(ei)),r.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(i).then(ei)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=J(this,Mt).build(this,e);return n.isStaleByTime($g(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(ei).catch(ei)}fetchInfiniteQuery(t){return t.behavior=Zg(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(ei).catch(ei)}ensureInfiniteQueryData(t){return t.behavior=Zg(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return nu.isOnline()?J(this,xr).resumePausedMutations():Promise.resolve()}getQueryCache(){return J(this,Mt)}getMutationCache(){return J(this,xr)}getDefaultOptions(){return J(this,_r)}setDefaultOptions(t){ze(this,_r,t)}setQueryDefaults(t,e){J(this,xo).set(Va(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...J(this,xo).values()];let n={};return e.forEach(i=>{Ga(t,i.queryKey)&&(n={...n,...i.defaultOptions})}),n}setMutationDefaults(t,e){J(this,_o).set(Va(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...J(this,_o).values()];let n={};return e.forEach(i=>{Ga(t,i.mutationKey)&&(n={...n,...i.defaultOptions})}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...J(this,_r).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=Yp(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.enabled!==!0&&e.queryFn===Kp&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...J(this,_r).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){J(this,Mt).clear(),J(this,xr).clear()}},Mt=new WeakMap,xr=new WeakMap,_r=new WeakMap,xo=new WeakMap,_o=new WeakMap,yr=new WeakMap,yo=new WeakMap,So=new WeakMap,bx),IT=L.createContext(void 0),UT=({client:t,children:e})=>(L.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),E.jsx(IT.Provider,{value:t,children:e}));async function FT(t){if(!t.ok){const e=await t.text()||t.statusText;throw new Error(`${t.status}: ${e}`)}}const OT=({on401:t})=>async({queryKey:e})=>{const n=await fetch(e[0],{credentials:"include"});return t==="returnNull"&&n.status===401?null:(await FT(n),await n.json())},kT=new DT({defaultOptions:{queries:{queryFn:OT({on401:"throw"}),refetchInterval:!1,refetchOnWindowFocus:!1,staleTime:1/0,retry:!1},mutations:{retry:!1}}}),BT=1,zT=1e6;let Sd=0;function HT(){return Sd=(Sd+1)%Number.MAX_SAFE_INTEGER,Sd.toString()}const Ed=new Map,ev=t=>{if(Ed.has(t))return;const e=setTimeout(()=>{Ed.delete(t),wa({type:"REMOVE_TOAST",toastId:t})},zT);Ed.set(t,e)},VT=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,BT)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=e;return n?ev(n):t.toasts.forEach(i=>{ev(i.id)}),{...t,toasts:t.toasts.map(i=>i.id===n||n===void 0?{...i,open:!1}:i)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)}}},Sc=[];let Ec={toasts:[]};function wa(t){Ec=VT(Ec,t),Sc.forEach(e=>{e(Ec)})}function GT({...t}){const e=HT(),n=r=>wa({type:"UPDATE_TOAST",toast:{...r,id:e}}),i=()=>wa({type:"DISMISS_TOAST",toastId:e});return wa({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:r=>{r||i()}}}),{id:e,dismiss:i,update:n}}function WT(){const[t,e]=L.useState(Ec);return L.useEffect(()=>(Sc.push(e),()=>{const n=Sc.indexOf(e);n>-1&&Sc.splice(n,1)}),[t]),{...t,toast:GT,dismiss:n=>wa({type:"DISMISS_TOAST",toastId:n})}}function Nt(t,e,{checkForDefaultPrevented:n=!0}={}){return function(r){if(t==null||t(r),n===!1||!r.defaultPrevented)return e==null?void 0:e(r)}}function tv(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function sy(...t){return e=>{let n=!1;const i=t.map(r=>{const s=tv(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():tv(t[r],null)}}}}function ui(...t){return L.useCallback(sy(...t),t)}function Lu(t,e=[]){let n=[];function i(s,o){const a=L.createContext(o),l=n.length;n=[...n,o];const c=f=>{var d;const{scope:h,children:p,...g}=f,v=((d=h==null?void 0:h[t])==null?void 0:d[l])||a,m=L.useMemo(()=>g,Object.values(g));return E.jsx(v.Provider,{value:m,children:p})};c.displayName=s+"Provider";function u(f,h){var v;const p=((v=h==null?void 0:h[t])==null?void 0:v[l])||a,g=L.useContext(p);if(g)return g;if(o!==void 0)return o;throw new Error(`\`${f}\` must be used within \`${s}\``)}return[c,u]}const r=()=>{const s=n.map(o=>L.createContext(o));return function(a){const l=(a==null?void 0:a[t])||s;return L.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,jT(r,...e)]}function jT(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const o=i.reduce((a,{useScope:l,scopeName:c})=>{const f=l(s)[`__scope${c}`];return{...a,...f}},{});return L.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return n.scopeName=e.scopeName,n}function Jf(t){const e=XT(t),n=L.forwardRef((i,r)=>{const{children:s,...o}=i,a=L.Children.toArray(s),l=a.find(qT);if(l){const c=l.props.children,u=a.map(f=>f===l?L.Children.count(c)>1?L.Children.only(null):L.isValidElement(c)?c.props.children:null:f);return E.jsx(e,{...o,ref:r,children:L.isValidElement(c)?L.cloneElement(c,void 0,u):null})}return E.jsx(e,{...o,ref:r,children:s})});return n.displayName=`${t}.Slot`,n}function XT(t){const e=L.forwardRef((n,i)=>{const{children:r,...s}=n;if(L.isValidElement(r)){const o=KT(r),a=YT(s,r.props);return r.type!==L.Fragment&&(a.ref=i?sy(i,o):o),L.cloneElement(r,a)}return L.Children.count(r)>1?L.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var oy=Symbol("radix.slottable");function $T(t){const e=({children:n})=>E.jsx(E.Fragment,{children:n});return e.displayName=`${t}.Slottable`,e.__radixId=oy,e}function qT(t){return L.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===oy}function YT(t,e){const n={...e};for(const i in e){const r=t[i],s=e[i];/^on[A-Z]/.test(i)?r&&s?n[i]=(...a)=>{s(...a),r(...a)}:r&&(n[i]=r):i==="style"?n[i]={...r,...s}:i==="className"&&(n[i]=[r,s].filter(Boolean).join(" "))}return{...t,...n}}function KT(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function QT(t){const e=t+"CollectionProvider",[n,i]=Lu(e),[r,s]=n(e,{collectionRef:{current:null},itemMap:new Map}),o=v=>{const{scope:m,children:d}=v,x=cr.useRef(null),_=cr.useRef(new Map).current;return E.jsx(r,{scope:m,itemMap:_,collectionRef:x,children:d})};o.displayName=e;const a=t+"CollectionSlot",l=Jf(a),c=cr.forwardRef((v,m)=>{const{scope:d,children:x}=v,_=s(a,d),y=ui(m,_.collectionRef);return E.jsx(l,{ref:y,children:x})});c.displayName=a;const u=t+"CollectionItemSlot",f="data-radix-collection-item",h=Jf(u),p=cr.forwardRef((v,m)=>{const{scope:d,children:x,..._}=v,y=cr.useRef(null),C=ui(m,y),A=s(u,d);return cr.useEffect(()=>(A.itemMap.set(y,{ref:y,..._}),()=>void A.itemMap.delete(y))),E.jsx(h,{[f]:"",ref:C,children:x})});p.displayName=u;function g(v){const m=s(t+"CollectionConsumer",v);return cr.useCallback(()=>{const x=m.collectionRef.current;if(!x)return[];const _=Array.from(x.querySelectorAll(`[${f}]`));return Array.from(m.itemMap.values()).sort((A,b)=>_.indexOf(A.ref.current)-_.indexOf(b.ref.current))},[m.collectionRef,m.itemMap])}return[{Provider:o,Slot:c,ItemSlot:p},g,i]}var ZT=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],_n=ZT.reduce((t,e)=>{const n=Jf(`Primitive.${e}`),i=L.forwardRef((r,s)=>{const{asChild:o,...a}=r,l=o?n:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),E.jsx(l,{...a,ref:s})});return i.displayName=`Primitive.${e}`,{...t,[e]:i}},{});function ay(t,e){t&&rl.flushSync(()=>t.dispatchEvent(e))}function wi(t){const e=L.useRef(t);return L.useEffect(()=>{e.current=t}),L.useMemo(()=>(...n)=>{var i;return(i=e.current)==null?void 0:i.call(e,...n)},[])}function JT(t,e=globalThis==null?void 0:globalThis.document){const n=wi(t);L.useEffect(()=>{const i=r=>{r.key==="Escape"&&n(r)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[n,e])}var e1="DismissableLayer",eh="dismissableLayer.update",t1="dismissableLayer.pointerDownOutside",n1="dismissableLayer.focusOutside",nv,ly=L.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Qp=L.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:s,onInteractOutside:o,onDismiss:a,...l}=t,c=L.useContext(ly),[u,f]=L.useState(null),h=(u==null?void 0:u.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=L.useState({}),g=ui(e,b=>f(b)),v=Array.from(c.layers),[m]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),d=v.indexOf(m),x=u?v.indexOf(u):-1,_=c.layersWithOutsidePointerEventsDisabled.size>0,y=x>=d,C=r1(b=>{const R=b.target,w=[...c.branches].some(S=>S.contains(R));!y||w||(r==null||r(b),o==null||o(b),b.defaultPrevented||a==null||a())},h),A=s1(b=>{const R=b.target;[...c.branches].some(S=>S.contains(R))||(s==null||s(b),o==null||o(b),b.defaultPrevented||a==null||a())},h);return JT(b=>{x===c.layers.size-1&&(i==null||i(b),!b.defaultPrevented&&a&&(b.preventDefault(),a()))},h),L.useEffect(()=>{if(u)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(nv=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(u)),c.layers.add(u),iv(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=nv)}},[u,h,n,c]),L.useEffect(()=>()=>{u&&(c.layers.delete(u),c.layersWithOutsidePointerEventsDisabled.delete(u),iv())},[u,c]),L.useEffect(()=>{const b=()=>p({});return document.addEventListener(eh,b),()=>document.removeEventListener(eh,b)},[]),E.jsx(_n.div,{...l,ref:g,style:{pointerEvents:_?y?"auto":"none":void 0,...t.style},onFocusCapture:Nt(t.onFocusCapture,A.onFocusCapture),onBlurCapture:Nt(t.onBlurCapture,A.onBlurCapture),onPointerDownCapture:Nt(t.onPointerDownCapture,C.onPointerDownCapture)})});Qp.displayName=e1;var i1="DismissableLayerBranch",cy=L.forwardRef((t,e)=>{const n=L.useContext(ly),i=L.useRef(null),r=ui(e,i);return L.useEffect(()=>{const s=i.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),E.jsx(_n.div,{...t,ref:r})});cy.displayName=i1;function r1(t,e=globalThis==null?void 0:globalThis.document){const n=wi(t),i=L.useRef(!1),r=L.useRef(()=>{});return L.useEffect(()=>{const s=a=>{if(a.target&&!i.current){let l=function(){uy(t1,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=l,e.addEventListener("click",r.current,{once:!0})):l()}else e.removeEventListener("click",r.current);i.current=!1},o=window.setTimeout(()=>{e.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(o),e.removeEventListener("pointerdown",s),e.removeEventListener("click",r.current)}},[e,n]),{onPointerDownCapture:()=>i.current=!0}}function s1(t,e=globalThis==null?void 0:globalThis.document){const n=wi(t),i=L.useRef(!1);return L.useEffect(()=>{const r=s=>{s.target&&!i.current&&uy(n1,n,{originalEvent:s},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function iv(){const t=new CustomEvent(eh);document.dispatchEvent(t)}function uy(t,e,n,{discrete:i}){const r=n.originalEvent.target,s=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?ay(r,s):r.dispatchEvent(s)}var o1=Qp,a1=cy,Ss=globalThis!=null&&globalThis.document?L.useLayoutEffect:()=>{},l1="Portal",dy=L.forwardRef((t,e)=>{var a;const{container:n,...i}=t,[r,s]=L.useState(!1);Ss(()=>s(!0),[]);const o=n||r&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return o?Uw.createPortal(E.jsx(_n.div,{...i,ref:e}),o):null});dy.displayName=l1;function c1(t,e){return L.useReducer((n,i)=>e[n][i]??n,t)}var Zp=t=>{const{present:e,children:n}=t,i=u1(e),r=typeof n=="function"?n({present:i.isPresent}):L.Children.only(n),s=ui(i.ref,d1(r));return typeof n=="function"||i.isPresent?L.cloneElement(r,{ref:s}):null};Zp.displayName="Presence";function u1(t){const[e,n]=L.useState(),i=L.useRef({}),r=L.useRef(t),s=L.useRef("none"),o=t?"mounted":"unmounted",[a,l]=c1(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return L.useEffect(()=>{const c=Ll(i.current);s.current=a==="mounted"?c:"none"},[a]),Ss(()=>{const c=i.current,u=r.current;if(u!==t){const h=s.current,p=Ll(c);t?l("MOUNT"):p==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(u&&h!==p?"ANIMATION_OUT":"UNMOUNT"),r.current=t}},[t,l]),Ss(()=>{if(e){let c;const u=e.ownerDocument.defaultView??window,f=p=>{const v=Ll(i.current).includes(p.animationName);if(p.target===e&&v&&(l("ANIMATION_END"),!r.current)){const m=e.style.animationFillMode;e.style.animationFillMode="forwards",c=u.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=m)})}},h=p=>{p.target===e&&(s.current=Ll(i.current))};return e.addEventListener("animationstart",h),e.addEventListener("animationcancel",f),e.addEventListener("animationend",f),()=>{u.clearTimeout(c),e.removeEventListener("animationstart",h),e.removeEventListener("animationcancel",f),e.removeEventListener("animationend",f)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:L.useCallback(c=>{c&&(i.current=getComputedStyle(c)),n(c)},[])}}function Ll(t){return(t==null?void 0:t.animationName)||"none"}function d1(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function f1({prop:t,defaultProp:e,onChange:n=()=>{}}){const[i,r]=h1({defaultProp:e,onChange:n}),s=t!==void 0,o=s?t:i,a=wi(n),l=L.useCallback(c=>{if(s){const f=typeof c=="function"?c(t):c;f!==t&&a(f)}else r(c)},[s,t,r,a]);return[o,l]}function h1({defaultProp:t,onChange:e}){const n=L.useState(t),[i]=n,r=L.useRef(i),s=wi(e);return L.useEffect(()=>{r.current!==i&&(s(i),r.current=i)},[i,r,s]),n}var p1="VisuallyHidden",Du=L.forwardRef((t,e)=>E.jsx(_n.span,{...t,ref:e,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...t.style}}));Du.displayName=p1;var m1=Du,Jp="ToastProvider",[em,g1,v1]=QT("Toast"),[fy,DD]=Lu("Toast",[v1]),[x1,Iu]=fy(Jp),hy=t=>{const{__scopeToast:e,label:n="Notification",duration:i=5e3,swipeDirection:r="right",swipeThreshold:s=50,children:o}=t,[a,l]=L.useState(null),[c,u]=L.useState(0),f=L.useRef(!1),h=L.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Jp}\`. Expected non-empty \`string\`.`),E.jsx(em.Provider,{scope:e,children:E.jsx(x1,{scope:e,label:n,duration:i,swipeDirection:r,swipeThreshold:s,toastCount:c,viewport:a,onViewportChange:l,onToastAdd:L.useCallback(()=>u(p=>p+1),[]),onToastRemove:L.useCallback(()=>u(p=>p-1),[]),isFocusedToastEscapeKeyDownRef:f,isClosePausedRef:h,children:o})})};hy.displayName=Jp;var py="ToastViewport",_1=["F8"],th="toast.viewportPause",nh="toast.viewportResume",my=L.forwardRef((t,e)=>{const{__scopeToast:n,hotkey:i=_1,label:r="Notifications ({hotkey})",...s}=t,o=Iu(py,n),a=g1(n),l=L.useRef(null),c=L.useRef(null),u=L.useRef(null),f=L.useRef(null),h=ui(e,f,o.onViewportChange),p=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),g=o.toastCount>0;L.useEffect(()=>{const m=d=>{var _;i.length!==0&&i.every(y=>d[y]||d.code===y)&&((_=f.current)==null||_.focus())};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[i]),L.useEffect(()=>{const m=l.current,d=f.current;if(g&&m&&d){const x=()=>{if(!o.isClosePausedRef.current){const A=new CustomEvent(th);d.dispatchEvent(A),o.isClosePausedRef.current=!0}},_=()=>{if(o.isClosePausedRef.current){const A=new CustomEvent(nh);d.dispatchEvent(A),o.isClosePausedRef.current=!1}},y=A=>{!m.contains(A.relatedTarget)&&_()},C=()=>{m.contains(document.activeElement)||_()};return m.addEventListener("focusin",x),m.addEventListener("focusout",y),m.addEventListener("pointermove",x),m.addEventListener("pointerleave",C),window.addEventListener("blur",x),window.addEventListener("focus",_),()=>{m.removeEventListener("focusin",x),m.removeEventListener("focusout",y),m.removeEventListener("pointermove",x),m.removeEventListener("pointerleave",C),window.removeEventListener("blur",x),window.removeEventListener("focus",_)}}},[g,o.isClosePausedRef]);const v=L.useCallback(({tabbingDirection:m})=>{const x=a().map(_=>{const y=_.ref.current,C=[y,...L1(y)];return m==="forwards"?C:C.reverse()});return(m==="forwards"?x.reverse():x).flat()},[a]);return L.useEffect(()=>{const m=f.current;if(m){const d=x=>{var C,A,b;const _=x.altKey||x.ctrlKey||x.metaKey;if(x.key==="Tab"&&!_){const R=document.activeElement,w=x.shiftKey;if(x.target===m&&w){(C=c.current)==null||C.focus();return}const z=v({tabbingDirection:w?"backwards":"forwards"}),H=z.findIndex(B=>B===R);Md(z.slice(H+1))?x.preventDefault():w?(A=c.current)==null||A.focus():(b=u.current)==null||b.focus()}};return m.addEventListener("keydown",d),()=>m.removeEventListener("keydown",d)}},[a,v]),E.jsxs(a1,{ref:l,role:"region","aria-label":r.replace("{hotkey}",p),tabIndex:-1,style:{pointerEvents:g?void 0:"none"},children:[g&&E.jsx(ih,{ref:c,onFocusFromOutsideViewport:()=>{const m=v({tabbingDirection:"forwards"});Md(m)}}),E.jsx(em.Slot,{scope:n,children:E.jsx(_n.ol,{tabIndex:-1,...s,ref:h})}),g&&E.jsx(ih,{ref:u,onFocusFromOutsideViewport:()=>{const m=v({tabbingDirection:"backwards"});Md(m)}})]})});my.displayName=py;var gy="ToastFocusProxy",ih=L.forwardRef((t,e)=>{const{__scopeToast:n,onFocusFromOutsideViewport:i,...r}=t,s=Iu(gy,n);return E.jsx(Du,{"aria-hidden":!0,tabIndex:0,...r,ref:e,style:{position:"fixed"},onFocus:o=>{var c;const a=o.relatedTarget;!((c=s.viewport)!=null&&c.contains(a))&&i()}})});ih.displayName=gy;var Uu="Toast",y1="toast.swipeStart",S1="toast.swipeMove",E1="toast.swipeCancel",M1="toast.swipeEnd",vy=L.forwardRef((t,e)=>{const{forceMount:n,open:i,defaultOpen:r,onOpenChange:s,...o}=t,[a=!0,l]=f1({prop:i,defaultProp:r,onChange:s});return E.jsx(Zp,{present:n||a,children:E.jsx(b1,{open:a,...o,ref:e,onClose:()=>l(!1),onPause:wi(t.onPause),onResume:wi(t.onResume),onSwipeStart:Nt(t.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Nt(t.onSwipeMove,c=>{const{x:u,y:f}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${u}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${f}px`)}),onSwipeCancel:Nt(t.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Nt(t.onSwipeEnd,c=>{const{x:u,y:f}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${u}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${f}px`),l(!1)})})})});vy.displayName=Uu;var[w1,T1]=fy(Uu,{onClose(){}}),b1=L.forwardRef((t,e)=>{const{__scopeToast:n,type:i="foreground",duration:r,open:s,onClose:o,onEscapeKeyDown:a,onPause:l,onResume:c,onSwipeStart:u,onSwipeMove:f,onSwipeCancel:h,onSwipeEnd:p,...g}=t,v=Iu(Uu,n),[m,d]=L.useState(null),x=ui(e,B=>d(B)),_=L.useRef(null),y=L.useRef(null),C=r||v.duration,A=L.useRef(0),b=L.useRef(C),R=L.useRef(0),{onToastAdd:w,onToastRemove:S}=v,D=wi(()=>{var Y;(m==null?void 0:m.contains(document.activeElement))&&((Y=v.viewport)==null||Y.focus()),o()}),z=L.useCallback(B=>{!B||B===1/0||(window.clearTimeout(R.current),A.current=new Date().getTime(),R.current=window.setTimeout(D,B))},[D]);L.useEffect(()=>{const B=v.viewport;if(B){const Y=()=>{z(b.current),c==null||c()},W=()=>{const U=new Date().getTime()-A.current;b.current=b.current-U,window.clearTimeout(R.current),l==null||l()};return B.addEventListener(th,W),B.addEventListener(nh,Y),()=>{B.removeEventListener(th,W),B.removeEventListener(nh,Y)}}},[v.viewport,C,l,c,z]),L.useEffect(()=>{s&&!v.isClosePausedRef.current&&z(C)},[s,C,v.isClosePausedRef,z]),L.useEffect(()=>(w(),()=>S()),[w,S]);const H=L.useMemo(()=>m?wy(m):null,[m]);return v.viewport?E.jsxs(E.Fragment,{children:[H&&E.jsx(A1,{__scopeToast:n,role:"status","aria-live":i==="foreground"?"assertive":"polite","aria-atomic":!0,children:H}),E.jsx(w1,{scope:n,onClose:D,children:rl.createPortal(E.jsx(em.ItemSlot,{scope:n,children:E.jsx(o1,{asChild:!0,onEscapeKeyDown:Nt(a,()=>{v.isFocusedToastEscapeKeyDownRef.current||D(),v.isFocusedToastEscapeKeyDownRef.current=!1}),children:E.jsx(_n.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":v.swipeDirection,...g,ref:x,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:Nt(t.onKeyDown,B=>{B.key==="Escape"&&(a==null||a(B.nativeEvent),B.nativeEvent.defaultPrevented||(v.isFocusedToastEscapeKeyDownRef.current=!0,D()))}),onPointerDown:Nt(t.onPointerDown,B=>{B.button===0&&(_.current={x:B.clientX,y:B.clientY})}),onPointerMove:Nt(t.onPointerMove,B=>{if(!_.current)return;const Y=B.clientX-_.current.x,W=B.clientY-_.current.y,U=!!y.current,P=["left","right"].includes(v.swipeDirection),G=["left","up"].includes(v.swipeDirection)?Math.min:Math.max,X=P?G(0,Y):0,ne=P?0:G(0,W),ge=B.pointerType==="touch"?10:2,Re={x:X,y:ne},Q={originalEvent:B,delta:Re};U?(y.current=Re,Dl(S1,f,Q,{discrete:!1})):rv(Re,v.swipeDirection,ge)?(y.current=Re,Dl(y1,u,Q,{discrete:!1}),B.target.setPointerCapture(B.pointerId)):(Math.abs(Y)>ge||Math.abs(W)>ge)&&(_.current=null)}),onPointerUp:Nt(t.onPointerUp,B=>{const Y=y.current,W=B.target;if(W.hasPointerCapture(B.pointerId)&&W.releasePointerCapture(B.pointerId),y.current=null,_.current=null,Y){const U=B.currentTarget,P={originalEvent:B,delta:Y};rv(Y,v.swipeDirection,v.swipeThreshold)?Dl(M1,p,P,{discrete:!0}):Dl(E1,h,P,{discrete:!0}),U.addEventListener("click",G=>G.preventDefault(),{once:!0})}})})})}),v.viewport)})]}):null}),A1=t=>{const{__scopeToast:e,children:n,...i}=t,r=Iu(Uu,e),[s,o]=L.useState(!1),[a,l]=L.useState(!1);return P1(()=>o(!0)),L.useEffect(()=>{const c=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(c)},[]),a?null:E.jsx(dy,{asChild:!0,children:E.jsx(Du,{...i,children:s&&E.jsxs(E.Fragment,{children:[r.label," ",n]})})})},C1="ToastTitle",xy=L.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return E.jsx(_n.div,{...i,ref:e})});xy.displayName=C1;var R1="ToastDescription",_y=L.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return E.jsx(_n.div,{...i,ref:e})});_y.displayName=R1;var yy="ToastAction",Sy=L.forwardRef((t,e)=>{const{altText:n,...i}=t;return n.trim()?E.jsx(My,{altText:n,asChild:!0,children:E.jsx(tm,{...i,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${yy}\`. Expected non-empty \`string\`.`),null)});Sy.displayName=yy;var Ey="ToastClose",tm=L.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t,r=T1(Ey,n);return E.jsx(My,{asChild:!0,children:E.jsx(_n.button,{type:"button",...i,ref:e,onClick:Nt(t.onClick,r.onClose)})})});tm.displayName=Ey;var My=L.forwardRef((t,e)=>{const{__scopeToast:n,altText:i,...r}=t;return E.jsx(_n.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0,...r,ref:e})});function wy(t){const e=[];return Array.from(t.childNodes).forEach(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent&&e.push(i.textContent),N1(i)){const r=i.ariaHidden||i.hidden||i.style.display==="none",s=i.dataset.radixToastAnnounceExclude==="";if(!r)if(s){const o=i.dataset.radixToastAnnounceAlt;o&&e.push(o)}else e.push(...wy(i))}}),e}function Dl(t,e,n,{discrete:i}){const r=n.originalEvent.currentTarget,s=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?ay(r,s):r.dispatchEvent(s)}var rv=(t,e,n=0)=>{const i=Math.abs(t.x),r=Math.abs(t.y),s=i>r;return e==="left"||e==="right"?s&&i>n:!s&&r>n};function P1(t=()=>{}){const e=wi(t);Ss(()=>{let n=0,i=0;return n=window.requestAnimationFrame(()=>i=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(i)}},[e])}function N1(t){return t.nodeType===t.ELEMENT_NODE}function L1(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function Md(t){const e=document.activeElement;return t.some(n=>n===e?!0:(n.focus(),document.activeElement!==e))}var D1=hy,Ty=my,by=vy,Ay=xy,Cy=_y,Ry=Sy,Py=tm;function Ny(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=Ny(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function Ly(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=Ny(t))&&(i&&(i+=" "),i+=e);return i}const sv=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,ov=Ly,I1=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return ov(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const u=n==null?void 0:n[c],f=s==null?void 0:s[c];if(u===null)return null;const h=sv(u)||sv(f);return r[c][h]}),a=n&&Object.entries(n).reduce((c,u)=>{let[f,h]=u;return h===void 0||(c[f]=h),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,u)=>{let{class:f,className:h,...p}=u;return Object.entries(p).every(g=>{let[v,m]=g;return Array.isArray(m)?m.includes({...s,...a}[v]):{...s,...a}[v]===m})?[...c,f,h]:c},[]);return ov(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Dy=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var F1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=L.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>L.createElement("svg",{ref:l,...F1,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Dy("lucide",r),...a},[...o.map(([c,u])=>L.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=(t,e)=>{const n=L.forwardRef(({className:i,...r},s)=>L.createElement(O1,{ref:s,iconNode:e,className:Dy(`lucide-${U1(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=Iy("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=Iy("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),nm="-",z1=t=>{const e=V1(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:o=>{const a=o.split(nm);return a[0]===""&&a.length!==1&&a.shift(),Uy(a,e)||H1(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&i[o]?[...l,...i[o]]:l}}},Uy=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?Uy(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=t.join(nm);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},av=/^\[(.+)\]$/,H1=t=>{if(av.test(t)){const e=av.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},V1=t=>{const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return W1(Object.entries(t.classGroups),n).forEach(([s,o])=>{rh(o,i,s,e)}),i},rh=(t,e,n,i)=>{t.forEach(r=>{if(typeof r=="string"){const s=r===""?e:lv(e,r);s.classGroupId=n;return}if(typeof r=="function"){if(G1(r)){rh(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([s,o])=>{rh(o,lv(e,s),n,i)})})},lv=(t,e)=>{let n=t;return e.split(nm).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},G1=t=>t.isThemeGetter,W1=(t,e)=>e?t.map(([n,i])=>{const r=i.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[n,r]}):t,j1=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const r=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,i=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=i.get(s))!==void 0)return r(s,o),o},set(s,o){n.has(s)?n.set(s,o):r(s,o)}}},Fy="!",X1=t=>{const{separator:e,experimentalParseClassName:n}=t,i=e.length===1,r=e[0],s=e.length,o=a=>{const l=[];let c=0,u=0,f;for(let m=0;m<a.length;m++){let d=a[m];if(c===0){if(d===r&&(i||a.slice(m,m+s)===e)){l.push(a.slice(u,m)),u=m+s;continue}if(d==="/"){f=m;continue}}d==="["?c++:d==="]"&&c--}const h=l.length===0?a:a.substring(u),p=h.startsWith(Fy),g=p?h.substring(1):h,v=f&&f>u?f-u:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:v}};return n?a=>n({className:a,parseClassName:o}):o},$1=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e},q1=t=>({cache:j1(t.cacheSize),parseClassName:X1(t),...z1(t)}),Y1=/\s+/,K1=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r}=e,s=[],o=t.trim().split(Y1);let a="";for(let l=o.length-1;l>=0;l-=1){const c=o[l],{modifiers:u,hasImportantModifier:f,baseClassName:h,maybePostfixModifierPosition:p}=n(c);let g=!!p,v=i(g?h.substring(0,p):h);if(!v){if(!g){a=c+(a.length>0?" "+a:a);continue}if(v=i(h),!v){a=c+(a.length>0?" "+a:a);continue}g=!1}const m=$1(u).join(":"),d=f?m+Fy:m,x=d+v;if(s.includes(x))continue;s.push(x);const _=r(v,g);for(let y=0;y<_.length;++y){const C=_[y];s.push(d+C)}a=c+(a.length>0?" "+a:a)}return a};function Q1(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=Oy(e))&&(i&&(i+=" "),i+=n);return i}const Oy=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=Oy(t[i]))&&(n&&(n+=" "),n+=e);return n};function Z1(t,...e){let n,i,r,s=o;function o(l){const c=e.reduce((u,f)=>f(u),t());return n=q1(c),i=n.cache.get,r=n.cache.set,s=a,a(l)}function a(l){const c=i(l);if(c)return c;const u=K1(l,n);return r(l,u),u}return function(){return s(Q1.apply(null,arguments))}}const dt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},ky=/^\[(?:([a-z-]+):)?(.+)\]$/i,J1=/^\d+\/\d+$/,eb=new Set(["px","full","screen"]),tb=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,nb=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ib=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,rb=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,sb=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ci=t=>lo(t)||eb.has(t)||J1.test(t),tr=t=>zo(t,"length",hb),lo=t=>!!t&&!Number.isNaN(Number(t)),wd=t=>zo(t,"number",lo),na=t=>!!t&&Number.isInteger(Number(t)),ob=t=>t.endsWith("%")&&lo(t.slice(0,-1)),Fe=t=>ky.test(t),nr=t=>tb.test(t),ab=new Set(["length","size","percentage"]),lb=t=>zo(t,ab,By),cb=t=>zo(t,"position",By),ub=new Set(["image","url"]),db=t=>zo(t,ub,mb),fb=t=>zo(t,"",pb),ia=()=>!0,zo=(t,e,n)=>{const i=ky.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1},hb=t=>nb.test(t)&&!ib.test(t),By=()=>!1,pb=t=>rb.test(t),mb=t=>sb.test(t),gb=()=>{const t=dt("colors"),e=dt("spacing"),n=dt("blur"),i=dt("brightness"),r=dt("borderColor"),s=dt("borderRadius"),o=dt("borderSpacing"),a=dt("borderWidth"),l=dt("contrast"),c=dt("grayscale"),u=dt("hueRotate"),f=dt("invert"),h=dt("gap"),p=dt("gradientColorStops"),g=dt("gradientColorStopPositions"),v=dt("inset"),m=dt("margin"),d=dt("opacity"),x=dt("padding"),_=dt("saturate"),y=dt("scale"),C=dt("sepia"),A=dt("skew"),b=dt("space"),R=dt("translate"),w=()=>["auto","contain","none"],S=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto",Fe,e],z=()=>[Fe,e],H=()=>["",Ci,tr],B=()=>["auto",lo,Fe],Y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],W=()=>["solid","dashed","dotted","double","none"],U=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],P=()=>["start","end","center","between","around","evenly","stretch"],G=()=>["","0",Fe],X=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ne=()=>[lo,Fe];return{cacheSize:500,separator:":",theme:{colors:[ia],spacing:[Ci,tr],blur:["none","",nr,Fe],brightness:ne(),borderColor:[t],borderRadius:["none","","full",nr,Fe],borderSpacing:z(),borderWidth:H(),contrast:ne(),grayscale:G(),hueRotate:ne(),invert:G(),gap:z(),gradientColorStops:[t],gradientColorStopPositions:[ob,tr],inset:D(),margin:D(),opacity:ne(),padding:z(),saturate:ne(),scale:ne(),sepia:G(),skew:ne(),space:z(),translate:z()},classGroups:{aspect:[{aspect:["auto","square","video",Fe]}],container:["container"],columns:[{columns:[nr]}],"break-after":[{"break-after":X()}],"break-before":[{"break-before":X()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Y(),Fe]}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:w()}],"overscroll-x":[{"overscroll-x":w()}],"overscroll-y":[{"overscroll-y":w()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",na,Fe]}],basis:[{basis:D()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Fe]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",na,Fe]}],"grid-cols":[{"grid-cols":[ia]}],"col-start-end":[{col:["auto",{span:["full",na,Fe]},Fe]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[ia]}],"row-start-end":[{row:["auto",{span:[na,Fe]},Fe]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Fe]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Fe]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...P()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...P(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...P(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[b]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[b]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Fe,e]}],"min-w":[{"min-w":[Fe,e,"min","max","fit"]}],"max-w":[{"max-w":[Fe,e,"none","full","min","max","fit","prose",{screen:[nr]},nr]}],h:[{h:[Fe,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Fe,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Fe,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Fe,e,"auto","min","max","fit"]}],"font-size":[{text:["base",nr,tr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",wd]}],"font-family":[{font:[ia]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Fe]}],"line-clamp":[{"line-clamp":["none",lo,wd]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ci,Fe]}],"list-image":[{"list-image":["none",Fe]}],"list-style-type":[{list:["none","disc","decimal",Fe]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[d]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[d]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...W(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ci,tr]}],"underline-offset":[{"underline-offset":["auto",Ci,Fe]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:z()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Fe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Fe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[d]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Y(),cb]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",lb]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},db]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[d]}],"border-style":[{border:[...W(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[d]}],"divide-style":[{divide:W()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...W()]}],"outline-offset":[{"outline-offset":[Ci,Fe]}],"outline-w":[{outline:[Ci,tr]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:H()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[d]}],"ring-offset-w":[{"ring-offset":[Ci,tr]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",nr,fb]}],"shadow-color":[{shadow:[ia]}],opacity:[{opacity:[d]}],"mix-blend":[{"mix-blend":[...U(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":U()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",nr,Fe]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[f]}],saturate:[{saturate:[_]}],sepia:[{sepia:[C]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[d]}],"backdrop-saturate":[{"backdrop-saturate":[_]}],"backdrop-sepia":[{"backdrop-sepia":[C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Fe]}],duration:[{duration:ne()}],ease:[{ease:["linear","in","out","in-out",Fe]}],delay:[{delay:ne()}],animate:[{animate:["none","spin","ping","pulse","bounce",Fe]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[y]}],"scale-x":[{"scale-x":[y]}],"scale-y":[{"scale-y":[y]}],rotate:[{rotate:[na,Fe]}],"translate-x":[{"translate-x":[R]}],"translate-y":[{"translate-y":[R]}],"skew-x":[{"skew-x":[A]}],"skew-y":[{"skew-y":[A]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Fe]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Fe]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":z()}],"scroll-mx":[{"scroll-mx":z()}],"scroll-my":[{"scroll-my":z()}],"scroll-ms":[{"scroll-ms":z()}],"scroll-me":[{"scroll-me":z()}],"scroll-mt":[{"scroll-mt":z()}],"scroll-mr":[{"scroll-mr":z()}],"scroll-mb":[{"scroll-mb":z()}],"scroll-ml":[{"scroll-ml":z()}],"scroll-p":[{"scroll-p":z()}],"scroll-px":[{"scroll-px":z()}],"scroll-py":[{"scroll-py":z()}],"scroll-ps":[{"scroll-ps":z()}],"scroll-pe":[{"scroll-pe":z()}],"scroll-pt":[{"scroll-pt":z()}],"scroll-pr":[{"scroll-pr":z()}],"scroll-pb":[{"scroll-pb":z()}],"scroll-pl":[{"scroll-pl":z()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Fe]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Ci,tr,wd]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},vb=Z1(gb);function In(...t){return vb(Ly(t))}const xb=D1,zy=L.forwardRef(({className:t,...e},n)=>E.jsx(Ty,{ref:n,className:In("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));zy.displayName=Ty.displayName;const _b=I1("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Hy=L.forwardRef(({className:t,variant:e,...n},i)=>E.jsx(by,{ref:i,className:In(_b({variant:e}),t),...n}));Hy.displayName=by.displayName;const yb=L.forwardRef(({className:t,...e},n)=>E.jsx(Ry,{ref:n,className:In("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",t),...e}));yb.displayName=Ry.displayName;const Vy=L.forwardRef(({className:t,...e},n)=>E.jsx(Py,{ref:n,className:In("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:E.jsx(B1,{className:"h-4 w-4"})}));Vy.displayName=Py.displayName;const Gy=L.forwardRef(({className:t,...e},n)=>E.jsx(Ay,{ref:n,className:In("text-sm font-semibold",t),...e}));Gy.displayName=Ay.displayName;const Wy=L.forwardRef(({className:t,...e},n)=>E.jsx(Cy,{ref:n,className:In("text-sm opacity-90",t),...e}));Wy.displayName=Cy.displayName;function Sb(){const{toasts:t}=WT();return E.jsxs(xb,{children:[t.map(function({id:e,title:n,description:i,action:r,...s}){return E.jsxs(Hy,{...s,children:[E.jsxs("div",{className:"grid gap-1",children:[n&&E.jsx(Gy,{children:n}),i&&E.jsx(Wy,{children:i})]}),r,E.jsx(Vy,{})]},e)}),E.jsx(zy,{})]})}const Eb=["top","right","bottom","left"],Ur=Math.min,Tn=Math.max,iu=Math.round,Il=Math.floor,Mi=t=>({x:t,y:t}),Mb={left:"right",right:"left",bottom:"top",top:"bottom"},wb={start:"end",end:"start"};function sh(t,e,n){return Tn(t,Ur(e,n))}function Yi(t,e){return typeof t=="function"?t(e):t}function Ki(t){return t.split("-")[0]}function Ho(t){return t.split("-")[1]}function im(t){return t==="x"?"y":"x"}function rm(t){return t==="y"?"height":"width"}function Fr(t){return["top","bottom"].includes(Ki(t))?"y":"x"}function sm(t){return im(Fr(t))}function Tb(t,e,n){n===void 0&&(n=!1);const i=Ho(t),r=sm(t),s=rm(r);let o=r==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(o=ru(o)),[o,ru(o)]}function bb(t){const e=ru(t);return[oh(t),e,oh(e)]}function oh(t){return t.replace(/start|end/g,e=>wb[e])}function Ab(t,e,n){const i=["left","right"],r=["right","left"],s=["top","bottom"],o=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:i:e?i:r;case"left":case"right":return e?s:o;default:return[]}}function Cb(t,e,n,i){const r=Ho(t);let s=Ab(Ki(t),n==="start",i);return r&&(s=s.map(o=>o+"-"+r),e&&(s=s.concat(s.map(oh)))),s}function ru(t){return t.replace(/left|right|bottom|top/g,e=>Mb[e])}function Rb(t){return{top:0,right:0,bottom:0,left:0,...t}}function jy(t){return typeof t!="number"?Rb(t):{top:t,right:t,bottom:t,left:t}}function su(t){const{x:e,y:n,width:i,height:r}=t;return{width:i,height:r,top:n,left:e,right:e+i,bottom:n+r,x:e,y:n}}function cv(t,e,n){let{reference:i,floating:r}=t;const s=Fr(e),o=sm(e),a=rm(o),l=Ki(e),c=s==="y",u=i.x+i.width/2-r.width/2,f=i.y+i.height/2-r.height/2,h=i[a]/2-r[a]/2;let p;switch(l){case"top":p={x:u,y:i.y-r.height};break;case"bottom":p={x:u,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:f};break;case"left":p={x:i.x-r.width,y:f};break;default:p={x:i.x,y:i.y}}switch(Ho(e)){case"start":p[o]-=h*(n&&c?-1:1);break;case"end":p[o]+=h*(n&&c?-1:1);break}return p}const Pb=async(t,e,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:o}=n,a=s.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(e));let c=await o.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:f}=cv(c,i,l),h=i,p={},g=0;for(let v=0;v<a.length;v++){const{name:m,fn:d}=a[v],{x,y:_,data:y,reset:C}=await d({x:u,y:f,initialPlacement:i,placement:h,strategy:r,middlewareData:p,rects:c,platform:o,elements:{reference:t,floating:e}});u=x??u,f=_??f,p={...p,[m]:{...p[m],...y}},C&&g<=50&&(g++,typeof C=="object"&&(C.placement&&(h=C.placement),C.rects&&(c=C.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:r}):C.rects),{x:u,y:f}=cv(c,h,l)),v=-1)}return{x:u,y:f,placement:h,strategy:r,middlewareData:p}};async function Wa(t,e){var n;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:o,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:h=!1,padding:p=0}=Yi(e,t),g=jy(p),m=a[h?f==="floating"?"reference":"floating":f],d=su(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(m)))==null||n?m:m.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),x=f==="floating"?{x:i,y:r,width:o.floating.width,height:o.floating.height}:o.reference,_=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),y=await(s.isElement==null?void 0:s.isElement(_))?await(s.getScale==null?void 0:s.getScale(_))||{x:1,y:1}:{x:1,y:1},C=su(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:x,offsetParent:_,strategy:l}):x);return{top:(d.top-C.top+g.top)/y.y,bottom:(C.bottom-d.bottom+g.bottom)/y.y,left:(d.left-C.left+g.left)/y.x,right:(C.right-d.right+g.right)/y.x}}const Nb=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:s,platform:o,elements:a,middlewareData:l}=e,{element:c,padding:u=0}=Yi(t,e)||{};if(c==null)return{};const f=jy(u),h={x:n,y:i},p=sm(r),g=rm(p),v=await o.getDimensions(c),m=p==="y",d=m?"top":"left",x=m?"bottom":"right",_=m?"clientHeight":"clientWidth",y=s.reference[g]+s.reference[p]-h[p]-s.floating[g],C=h[p]-s.reference[p],A=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c));let b=A?A[_]:0;(!b||!await(o.isElement==null?void 0:o.isElement(A)))&&(b=a.floating[_]||s.floating[g]);const R=y/2-C/2,w=b/2-v[g]/2-1,S=Ur(f[d],w),D=Ur(f[x],w),z=S,H=b-v[g]-D,B=b/2-v[g]/2+R,Y=sh(z,B,H),W=!l.arrow&&Ho(r)!=null&&B!==Y&&s.reference[g]/2-(B<z?S:D)-v[g]/2<0,U=W?B<z?B-z:B-H:0;return{[p]:h[p]+U,data:{[p]:Y,centerOffset:B-Y-U,...W&&{alignmentOffset:U}},reset:W}}}),Lb=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,i;const{placement:r,middlewareData:s,rects:o,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0,...m}=Yi(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const d=Ki(r),x=Fr(a),_=Ki(a)===a,y=await(l.isRTL==null?void 0:l.isRTL(c.floating)),C=h||(_||!v?[ru(a)]:bb(a)),A=g!=="none";!h&&A&&C.push(...Cb(a,v,g,y));const b=[a,...C],R=await Wa(e,m),w=[];let S=((i=s.flip)==null?void 0:i.overflows)||[];if(u&&w.push(R[d]),f){const B=Tb(r,o,y);w.push(R[B[0]],R[B[1]])}if(S=[...S,{placement:r,overflows:w}],!w.every(B=>B<=0)){var D,z;const B=(((D=s.flip)==null?void 0:D.index)||0)+1,Y=b[B];if(Y)return{data:{index:B,overflows:S},reset:{placement:Y}};let W=(z=S.filter(U=>U.overflows[0]<=0).sort((U,P)=>U.overflows[1]-P.overflows[1])[0])==null?void 0:z.placement;if(!W)switch(p){case"bestFit":{var H;const U=(H=S.filter(P=>{if(A){const G=Fr(P.placement);return G===x||G==="y"}return!0}).map(P=>[P.placement,P.overflows.filter(G=>G>0).reduce((G,X)=>G+X,0)]).sort((P,G)=>P[1]-G[1])[0])==null?void 0:H[0];U&&(W=U);break}case"initialPlacement":W=a;break}if(r!==W)return{reset:{placement:W}}}return{}}}};function uv(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function dv(t){return Eb.some(e=>t[e]>=0)}const Db=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:i="referenceHidden",...r}=Yi(t,e);switch(i){case"referenceHidden":{const s=await Wa(e,{...r,elementContext:"reference"}),o=uv(s,n.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:dv(o)}}}case"escaped":{const s=await Wa(e,{...r,altBoundary:!0}),o=uv(s,n.floating);return{data:{escapedOffsets:o,escaped:dv(o)}}}default:return{}}}}};async function Ib(t,e){const{placement:n,platform:i,elements:r}=t,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),o=Ki(n),a=Ho(n),l=Fr(n)==="y",c=["left","top"].includes(o)?-1:1,u=s&&l?-1:1,f=Yi(e,t);let{mainAxis:h,crossAxis:p,alignmentAxis:g}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return a&&typeof g=="number"&&(p=a==="end"?g*-1:g),l?{x:p*u,y:h*c}:{x:h*c,y:p*u}}const Ub=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:r,y:s,placement:o,middlewareData:a}=e,l=await Ib(e,t);return o===((n=a.offset)==null?void 0:n.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:s+l.y,data:{...l,placement:o}}}}},Fb=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:m=>{let{x:d,y:x}=m;return{x:d,y:x}}},...l}=Yi(t,e),c={x:n,y:i},u=await Wa(e,l),f=Fr(Ki(r)),h=im(f);let p=c[h],g=c[f];if(s){const m=h==="y"?"top":"left",d=h==="y"?"bottom":"right",x=p+u[m],_=p-u[d];p=sh(x,p,_)}if(o){const m=f==="y"?"top":"left",d=f==="y"?"bottom":"right",x=g+u[m],_=g-u[d];g=sh(x,g,_)}const v=a.fn({...e,[h]:p,[f]:g});return{...v,data:{x:v.x-n,y:v.y-i,enabled:{[h]:s,[f]:o}}}}}},Ob=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:i,placement:r,rects:s,middlewareData:o}=e,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=Yi(t,e),u={x:n,y:i},f=Fr(r),h=im(f);let p=u[h],g=u[f];const v=Yi(a,e),m=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(l){const _=h==="y"?"height":"width",y=s.reference[h]-s.floating[_]+m.mainAxis,C=s.reference[h]+s.reference[_]-m.mainAxis;p<y?p=y:p>C&&(p=C)}if(c){var d,x;const _=h==="y"?"width":"height",y=["top","left"].includes(Ki(r)),C=s.reference[f]-s.floating[_]+(y&&((d=o.offset)==null?void 0:d[f])||0)+(y?0:m.crossAxis),A=s.reference[f]+s.reference[_]+(y?0:((x=o.offset)==null?void 0:x[f])||0)-(y?m.crossAxis:0);g<C?g=C:g>A&&(g=A)}return{[h]:p,[f]:g}}}},kb=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,i;const{placement:r,rects:s,platform:o,elements:a}=e,{apply:l=()=>{},...c}=Yi(t,e),u=await Wa(e,c),f=Ki(r),h=Ho(r),p=Fr(r)==="y",{width:g,height:v}=s.floating;let m,d;f==="top"||f==="bottom"?(m=f,d=h===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(d=f,m=h==="end"?"top":"bottom");const x=v-u.top-u.bottom,_=g-u.left-u.right,y=Ur(v-u[m],x),C=Ur(g-u[d],_),A=!e.middlewareData.shift;let b=y,R=C;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(R=_),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(b=x),A&&!h){const S=Tn(u.left,0),D=Tn(u.right,0),z=Tn(u.top,0),H=Tn(u.bottom,0);p?R=g-2*(S!==0||D!==0?S+D:Tn(u.left,u.right)):b=v-2*(z!==0||H!==0?z+H:Tn(u.top,u.bottom))}await l({...e,availableWidth:R,availableHeight:b});const w=await o.getDimensions(a.floating);return g!==w.width||v!==w.height?{reset:{rects:!0}}:{}}}};function Fu(){return typeof window<"u"}function Vo(t){return Xy(t)?(t.nodeName||"").toLowerCase():"#document"}function Pn(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function bi(t){var e;return(e=(Xy(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Xy(t){return Fu()?t instanceof Node||t instanceof Pn(t).Node:!1}function di(t){return Fu()?t instanceof Element||t instanceof Pn(t).Element:!1}function Ti(t){return Fu()?t instanceof HTMLElement||t instanceof Pn(t).HTMLElement:!1}function fv(t){return!Fu()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Pn(t).ShadowRoot}function sl(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=fi(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(r)}function Bb(t){return["table","td","th"].includes(Vo(t))}function Ou(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function om(t){const e=am(),n=di(t)?fi(t):t;return["transform","translate","scale","rotate","perspective"].some(i=>n[i]?n[i]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function zb(t){let e=Or(t);for(;Ti(e)&&!Po(e);){if(om(e))return e;if(Ou(e))return null;e=Or(e)}return null}function am(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Po(t){return["html","body","#document"].includes(Vo(t))}function fi(t){return Pn(t).getComputedStyle(t)}function ku(t){return di(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Or(t){if(Vo(t)==="html")return t;const e=t.assignedSlot||t.parentNode||fv(t)&&t.host||bi(t);return fv(e)?e.host:e}function $y(t){const e=Or(t);return Po(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ti(e)&&sl(e)?e:$y(e)}function ja(t,e,n){var i;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=$y(t),s=r===((i=t.ownerDocument)==null?void 0:i.body),o=Pn(r);if(s){const a=ah(o);return e.concat(o,o.visualViewport||[],sl(r)?r:[],a&&n?ja(a):[])}return e.concat(r,ja(r,[],n))}function ah(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function qy(t){const e=fi(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=Ti(t),s=r?t.offsetWidth:n,o=r?t.offsetHeight:i,a=iu(n)!==s||iu(i)!==o;return a&&(n=s,i=o),{width:n,height:i,$:a}}function lm(t){return di(t)?t:t.contextElement}function co(t){const e=lm(t);if(!Ti(e))return Mi(1);const n=e.getBoundingClientRect(),{width:i,height:r,$:s}=qy(e);let o=(s?iu(n.width):n.width)/i,a=(s?iu(n.height):n.height)/r;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const Hb=Mi(0);function Yy(t){const e=Pn(t);return!am()||!e.visualViewport?Hb:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Vb(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==Pn(t)?!1:e}function Es(t,e,n,i){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=lm(t);let o=Mi(1);e&&(i?di(i)&&(o=co(i)):o=co(t));const a=Vb(s,n,i)?Yy(s):Mi(0);let l=(r.left+a.x)/o.x,c=(r.top+a.y)/o.y,u=r.width/o.x,f=r.height/o.y;if(s){const h=Pn(s),p=i&&di(i)?Pn(i):i;let g=h,v=ah(g);for(;v&&i&&p!==g;){const m=co(v),d=v.getBoundingClientRect(),x=fi(v),_=d.left+(v.clientLeft+parseFloat(x.paddingLeft))*m.x,y=d.top+(v.clientTop+parseFloat(x.paddingTop))*m.y;l*=m.x,c*=m.y,u*=m.x,f*=m.y,l+=_,c+=y,g=Pn(v),v=ah(g)}}return su({width:u,height:f,x:l,y:c})}function cm(t,e){const n=ku(t).scrollLeft;return e?e.left+n:Es(bi(t)).left+n}function Ky(t,e,n){n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=i.left+e.scrollLeft-(n?0:cm(t,i)),s=i.top+e.scrollTop;return{x:r,y:s}}function Gb(t){let{elements:e,rect:n,offsetParent:i,strategy:r}=t;const s=r==="fixed",o=bi(i),a=e?Ou(e.floating):!1;if(i===o||a&&s)return n;let l={scrollLeft:0,scrollTop:0},c=Mi(1);const u=Mi(0),f=Ti(i);if((f||!f&&!s)&&((Vo(i)!=="body"||sl(o))&&(l=ku(i)),Ti(i))){const p=Es(i);c=co(i),u.x=p.x+i.clientLeft,u.y=p.y+i.clientTop}const h=o&&!f&&!s?Ky(o,l,!0):Mi(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x+h.x,y:n.y*c.y-l.scrollTop*c.y+u.y+h.y}}function Wb(t){return Array.from(t.getClientRects())}function jb(t){const e=bi(t),n=ku(t),i=t.ownerDocument.body,r=Tn(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=Tn(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-n.scrollLeft+cm(t);const a=-n.scrollTop;return fi(i).direction==="rtl"&&(o+=Tn(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:o,y:a}}function Xb(t,e){const n=Pn(t),i=bi(t),r=n.visualViewport;let s=i.clientWidth,o=i.clientHeight,a=0,l=0;if(r){s=r.width,o=r.height;const c=am();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:s,height:o,x:a,y:l}}function $b(t,e){const n=Es(t,!0,e==="fixed"),i=n.top+t.clientTop,r=n.left+t.clientLeft,s=Ti(t)?co(t):Mi(1),o=t.clientWidth*s.x,a=t.clientHeight*s.y,l=r*s.x,c=i*s.y;return{width:o,height:a,x:l,y:c}}function hv(t,e,n){let i;if(e==="viewport")i=Xb(t,n);else if(e==="document")i=jb(bi(t));else if(di(e))i=$b(e,n);else{const r=Yy(t);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return su(i)}function Qy(t,e){const n=Or(t);return n===e||!di(n)||Po(n)?!1:fi(n).position==="fixed"||Qy(n,e)}function qb(t,e){const n=e.get(t);if(n)return n;let i=ja(t,[],!1).filter(a=>di(a)&&Vo(a)!=="body"),r=null;const s=fi(t).position==="fixed";let o=s?Or(t):t;for(;di(o)&&!Po(o);){const a=fi(o),l=om(o);!l&&a.position==="fixed"&&(r=null),(s?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||sl(o)&&!l&&Qy(t,o))?i=i.filter(u=>u!==o):r=a,o=Or(o)}return e.set(t,i),i}function Yb(t){let{element:e,boundary:n,rootBoundary:i,strategy:r}=t;const o=[...n==="clippingAncestors"?Ou(e)?[]:qb(e,this._c):[].concat(n),i],a=o[0],l=o.reduce((c,u)=>{const f=hv(e,u,r);return c.top=Tn(f.top,c.top),c.right=Ur(f.right,c.right),c.bottom=Ur(f.bottom,c.bottom),c.left=Tn(f.left,c.left),c},hv(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Kb(t){const{width:e,height:n}=qy(t);return{width:e,height:n}}function Qb(t,e,n){const i=Ti(e),r=bi(e),s=n==="fixed",o=Es(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const l=Mi(0);if(i||!i&&!s)if((Vo(e)!=="body"||sl(r))&&(a=ku(e)),i){const h=Es(e,!0,s,e);l.x=h.x+e.clientLeft,l.y=h.y+e.clientTop}else r&&(l.x=cm(r));const c=r&&!i&&!s?Ky(r,a):Mi(0),u=o.left+a.scrollLeft-l.x-c.x,f=o.top+a.scrollTop-l.y-c.y;return{x:u,y:f,width:o.width,height:o.height}}function Td(t){return fi(t).position==="static"}function pv(t,e){if(!Ti(t)||fi(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return bi(t)===n&&(n=n.ownerDocument.body),n}function Zy(t,e){const n=Pn(t);if(Ou(t))return n;if(!Ti(t)){let r=Or(t);for(;r&&!Po(r);){if(di(r)&&!Td(r))return r;r=Or(r)}return n}let i=pv(t,e);for(;i&&Bb(i)&&Td(i);)i=pv(i,e);return i&&Po(i)&&Td(i)&&!om(i)?n:i||zb(t)||n}const Zb=async function(t){const e=this.getOffsetParent||Zy,n=this.getDimensions,i=await n(t.floating);return{reference:Qb(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Jb(t){return fi(t).direction==="rtl"}const eA={convertOffsetParentRelativeRectToViewportRelativeRect:Gb,getDocumentElement:bi,getClippingRect:Yb,getOffsetParent:Zy,getElementRects:Zb,getClientRects:Wb,getDimensions:Kb,getScale:co,isElement:di,isRTL:Jb};function Jy(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function tA(t,e){let n=null,i;const r=bi(t);function s(){var a;clearTimeout(i),(a=n)==null||a.disconnect(),n=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const c=t.getBoundingClientRect(),{left:u,top:f,width:h,height:p}=c;if(a||e(),!h||!p)return;const g=Il(f),v=Il(r.clientWidth-(u+h)),m=Il(r.clientHeight-(f+p)),d=Il(u),_={rootMargin:-g+"px "+-v+"px "+-m+"px "+-d+"px",threshold:Tn(0,Ur(1,l))||1};let y=!0;function C(A){const b=A[0].intersectionRatio;if(b!==l){if(!y)return o();b?o(!1,b):i=setTimeout(()=>{o(!1,1e-7)},1e3)}b===1&&!Jy(c,t.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(C,{..._,root:r.ownerDocument})}catch{n=new IntersectionObserver(C,_)}n.observe(t)}return o(!0),s}function nA(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=lm(t),u=r||s?[...c?ja(c):[],...ja(e)]:[];u.forEach(d=>{r&&d.addEventListener("scroll",n,{passive:!0}),s&&d.addEventListener("resize",n)});const f=c&&a?tA(c,n):null;let h=-1,p=null;o&&(p=new ResizeObserver(d=>{let[x]=d;x&&x.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var _;(_=p)==null||_.observe(e)})),n()}),c&&!l&&p.observe(c),p.observe(e));let g,v=l?Es(t):null;l&&m();function m(){const d=Es(t);v&&!Jy(v,d)&&n(),v=d,g=requestAnimationFrame(m)}return n(),()=>{var d;u.forEach(x=>{r&&x.removeEventListener("scroll",n),s&&x.removeEventListener("resize",n)}),f==null||f(),(d=p)==null||d.disconnect(),p=null,l&&cancelAnimationFrame(g)}}const iA=Ub,rA=Fb,sA=Lb,oA=kb,aA=Db,mv=Nb,lA=Ob,cA=(t,e,n)=>{const i=new Map,r={platform:eA,...n},s={...r.platform,_c:i};return Pb(t,e,{...r,platform:s})};var Mc=typeof document<"u"?L.useLayoutEffect:L.useEffect;function ou(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,i,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;i--!==0;)if(!ou(t[i],e[i]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(i=n;i--!==0;)if(!{}.hasOwnProperty.call(e,r[i]))return!1;for(i=n;i--!==0;){const s=r[i];if(!(s==="_owner"&&t.$$typeof)&&!ou(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function eS(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function gv(t,e){const n=eS(t);return Math.round(e*n)/n}function bd(t){const e=L.useRef(t);return Mc(()=>{e.current=t}),e}function uA(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:i=[],platform:r,elements:{reference:s,floating:o}={},transform:a=!0,whileElementsMounted:l,open:c}=t,[u,f]=L.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[h,p]=L.useState(i);ou(h,i)||p(i);const[g,v]=L.useState(null),[m,d]=L.useState(null),x=L.useCallback(P=>{P!==A.current&&(A.current=P,v(P))},[]),_=L.useCallback(P=>{P!==b.current&&(b.current=P,d(P))},[]),y=s||g,C=o||m,A=L.useRef(null),b=L.useRef(null),R=L.useRef(u),w=l!=null,S=bd(l),D=bd(r),z=bd(c),H=L.useCallback(()=>{if(!A.current||!b.current)return;const P={placement:e,strategy:n,middleware:h};D.current&&(P.platform=D.current),cA(A.current,b.current,P).then(G=>{const X={...G,isPositioned:z.current!==!1};B.current&&!ou(R.current,X)&&(R.current=X,rl.flushSync(()=>{f(X)}))})},[h,e,n,D,z]);Mc(()=>{c===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,f(P=>({...P,isPositioned:!1})))},[c]);const B=L.useRef(!1);Mc(()=>(B.current=!0,()=>{B.current=!1}),[]),Mc(()=>{if(y&&(A.current=y),C&&(b.current=C),y&&C){if(S.current)return S.current(y,C,H);H()}},[y,C,H,S,w]);const Y=L.useMemo(()=>({reference:A,floating:b,setReference:x,setFloating:_}),[x,_]),W=L.useMemo(()=>({reference:y,floating:C}),[y,C]),U=L.useMemo(()=>{const P={position:n,left:0,top:0};if(!W.floating)return P;const G=gv(W.floating,u.x),X=gv(W.floating,u.y);return a?{...P,transform:"translate("+G+"px, "+X+"px)",...eS(W.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:G,top:X}},[n,a,W.floating,u.x,u.y]);return L.useMemo(()=>({...u,update:H,refs:Y,elements:W,floatingStyles:U}),[u,H,Y,W,U])}const dA=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:i,padding:r}=typeof t=="function"?t(n):t;return i&&e(i)?i.current!=null?mv({element:i.current,padding:r}).fn(n):{}:i?mv({element:i,padding:r}).fn(n):{}}}},fA=(t,e)=>({...iA(t),options:[t,e]}),hA=(t,e)=>({...rA(t),options:[t,e]}),pA=(t,e)=>({...lA(t),options:[t,e]}),mA=(t,e)=>({...sA(t),options:[t,e]}),gA=(t,e)=>({...oA(t),options:[t,e]}),vA=(t,e)=>({...aA(t),options:[t,e]}),xA=(t,e)=>({...dA(t),options:[t,e]});var _A="Arrow",tS=L.forwardRef((t,e)=>{const{children:n,width:i=10,height:r=5,...s}=t;return E.jsx(_n.svg,{...s,ref:e,width:i,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:E.jsx("polygon",{points:"0,0 30,0 15,10"})})});tS.displayName=_A;var yA=tS;function SA(t){const[e,n]=L.useState(void 0);return Ss(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const i=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const s=r[0];let o,a;if("borderBoxSize"in s){const l=s.borderBoxSize,c=Array.isArray(l)?l[0]:l;o=c.inlineSize,a=c.blockSize}else o=t.offsetWidth,a=t.offsetHeight;n({width:o,height:a})});return i.observe(t,{box:"border-box"}),()=>i.unobserve(t)}else n(void 0)},[t]),e}var nS="Popper",[iS,rS]=Lu(nS),[ID,sS]=iS(nS),oS="PopperAnchor",aS=L.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:i,...r}=t,s=sS(oS,n),o=L.useRef(null),a=ui(e,o);return L.useEffect(()=>{s.onAnchorChange((i==null?void 0:i.current)||o.current)}),i?null:E.jsx(_n.div,{...r,ref:a})});aS.displayName=oS;var um="PopperContent",[EA,MA]=iS(um),lS=L.forwardRef((t,e)=>{var le,Ae,Xe,Pe,pt,lt;const{__scopePopper:n,side:i="bottom",sideOffset:r=0,align:s="center",alignOffset:o=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:c=[],collisionPadding:u=0,sticky:f="partial",hideWhenDetached:h=!1,updatePositionStrategy:p="optimized",onPlaced:g,...v}=t,m=sS(um,n),[d,x]=L.useState(null),_=ui(e,ke=>x(ke)),[y,C]=L.useState(null),A=SA(y),b=(A==null?void 0:A.width)??0,R=(A==null?void 0:A.height)??0,w=i+(s!=="center"?"-"+s:""),S=typeof u=="number"?u:{top:0,right:0,bottom:0,left:0,...u},D=Array.isArray(c)?c:[c],z=D.length>0,H={padding:S,boundary:D.filter(TA),altBoundary:z},{refs:B,floatingStyles:Y,placement:W,isPositioned:U,middlewareData:P}=uA({strategy:"fixed",placement:w,whileElementsMounted:(...ke)=>nA(...ke,{animationFrame:p==="always"}),elements:{reference:m.anchor},middleware:[fA({mainAxis:r+R,alignmentAxis:o}),l&&hA({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?pA():void 0,...H}),l&&mA({...H}),gA({...H,apply:({elements:ke,rects:I,availableWidth:ln,availableHeight:je})=>{const{width:We,height:we}=I.reference,Je=ke.floating.style;Je.setProperty("--radix-popper-available-width",`${ln}px`),Je.setProperty("--radix-popper-available-height",`${je}px`),Je.setProperty("--radix-popper-anchor-width",`${We}px`),Je.setProperty("--radix-popper-anchor-height",`${we}px`)}}),y&&xA({element:y,padding:a}),bA({arrowWidth:b,arrowHeight:R}),h&&vA({strategy:"referenceHidden",...H})]}),[G,X]=dS(W),ne=wi(g);Ss(()=>{U&&(ne==null||ne())},[U,ne]);const ge=(le=P.arrow)==null?void 0:le.x,Re=(Ae=P.arrow)==null?void 0:Ae.y,Q=((Xe=P.arrow)==null?void 0:Xe.centerOffset)!==0,[ae,pe]=L.useState();return Ss(()=>{d&&pe(window.getComputedStyle(d).zIndex)},[d]),E.jsx("div",{ref:B.setFloating,"data-radix-popper-content-wrapper":"",style:{...Y,transform:U?Y.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ae,"--radix-popper-transform-origin":[(Pe=P.transformOrigin)==null?void 0:Pe.x,(pt=P.transformOrigin)==null?void 0:pt.y].join(" "),...((lt=P.hide)==null?void 0:lt.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:E.jsx(EA,{scope:n,placedSide:G,onArrowChange:C,arrowX:ge,arrowY:Re,shouldHideArrow:Q,children:E.jsx(_n.div,{"data-side":G,"data-align":X,...v,ref:_,style:{...v.style,animation:U?void 0:"none"}})})})});lS.displayName=um;var cS="PopperArrow",wA={top:"bottom",right:"left",bottom:"top",left:"right"},uS=L.forwardRef(function(e,n){const{__scopePopper:i,...r}=e,s=MA(cS,i),o=wA[s.placedSide];return E.jsx("span",{ref:s.onArrowChange,style:{position:"absolute",left:s.arrowX,top:s.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[s.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[s.placedSide],visibility:s.shouldHideArrow?"hidden":void 0},children:E.jsx(yA,{...r,ref:n,style:{...r.style,display:"block"}})})});uS.displayName=cS;function TA(t){return t!==null}var bA=t=>({name:"transformOrigin",options:t,fn(e){var m,d,x;const{placement:n,rects:i,middlewareData:r}=e,o=((m=r.arrow)==null?void 0:m.centerOffset)!==0,a=o?0:t.arrowWidth,l=o?0:t.arrowHeight,[c,u]=dS(n),f={start:"0%",center:"50%",end:"100%"}[u],h=(((d=r.arrow)==null?void 0:d.x)??0)+a/2,p=(((x=r.arrow)==null?void 0:x.y)??0)+l/2;let g="",v="";return c==="bottom"?(g=o?f:`${h}px`,v=`${-l}px`):c==="top"?(g=o?f:`${h}px`,v=`${i.floating.height+l}px`):c==="right"?(g=`${-l}px`,v=o?f:`${p}px`):c==="left"&&(g=`${i.floating.width+l}px`,v=o?f:`${p}px`),{data:{x:g,y:v}}}});function dS(t){const[e,n="center"]=t.split("-");return[e,n]}var AA=aS,CA=lS,RA=uS,[Bu,UD]=Lu("Tooltip",[rS]),dm=rS(),fS="TooltipProvider",PA=700,vv="tooltip.open",[NA,hS]=Bu(fS),pS=t=>{const{__scopeTooltip:e,delayDuration:n=PA,skipDelayDuration:i=300,disableHoverableContent:r=!1,children:s}=t,o=L.useRef(!0),a=L.useRef(!1),l=L.useRef(0);return L.useEffect(()=>{const c=l.current;return()=>window.clearTimeout(c)},[]),E.jsx(NA,{scope:e,isOpenDelayedRef:o,delayDuration:n,onOpen:L.useCallback(()=>{window.clearTimeout(l.current),o.current=!1},[]),onClose:L.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>o.current=!0,i)},[i]),isPointerInTransitRef:a,onPointerInTransitChange:L.useCallback(c=>{a.current=c},[]),disableHoverableContent:r,children:s})};pS.displayName=fS;var mS="Tooltip",[FD,zu]=Bu(mS),lh="TooltipTrigger",LA=L.forwardRef((t,e)=>{const{__scopeTooltip:n,...i}=t,r=zu(lh,n),s=hS(lh,n),o=dm(n),a=L.useRef(null),l=ui(e,a,r.onTriggerChange),c=L.useRef(!1),u=L.useRef(!1),f=L.useCallback(()=>c.current=!1,[]);return L.useEffect(()=>()=>document.removeEventListener("pointerup",f),[f]),E.jsx(AA,{asChild:!0,...o,children:E.jsx(_n.button,{"aria-describedby":r.open?r.contentId:void 0,"data-state":r.stateAttribute,...i,ref:l,onPointerMove:Nt(t.onPointerMove,h=>{h.pointerType!=="touch"&&!u.current&&!s.isPointerInTransitRef.current&&(r.onTriggerEnter(),u.current=!0)}),onPointerLeave:Nt(t.onPointerLeave,()=>{r.onTriggerLeave(),u.current=!1}),onPointerDown:Nt(t.onPointerDown,()=>{r.open&&r.onClose(),c.current=!0,document.addEventListener("pointerup",f,{once:!0})}),onFocus:Nt(t.onFocus,()=>{c.current||r.onOpen()}),onBlur:Nt(t.onBlur,r.onClose),onClick:Nt(t.onClick,r.onClose)})})});LA.displayName=lh;var DA="TooltipPortal",[OD,IA]=Bu(DA,{forceMount:void 0}),No="TooltipContent",gS=L.forwardRef((t,e)=>{const n=IA(No,t.__scopeTooltip),{forceMount:i=n.forceMount,side:r="top",...s}=t,o=zu(No,t.__scopeTooltip);return E.jsx(Zp,{present:i||o.open,children:o.disableHoverableContent?E.jsx(vS,{side:r,...s,ref:e}):E.jsx(UA,{side:r,...s,ref:e})})}),UA=L.forwardRef((t,e)=>{const n=zu(No,t.__scopeTooltip),i=hS(No,t.__scopeTooltip),r=L.useRef(null),s=ui(e,r),[o,a]=L.useState(null),{trigger:l,onClose:c}=n,u=r.current,{onPointerInTransitChange:f}=i,h=L.useCallback(()=>{a(null),f(!1)},[f]),p=L.useCallback((g,v)=>{const m=g.currentTarget,d={x:g.clientX,y:g.clientY},x=zA(d,m.getBoundingClientRect()),_=HA(d,x),y=VA(v.getBoundingClientRect()),C=WA([..._,...y]);a(C),f(!0)},[f]);return L.useEffect(()=>()=>h(),[h]),L.useEffect(()=>{if(l&&u){const g=m=>p(m,u),v=m=>p(m,l);return l.addEventListener("pointerleave",g),u.addEventListener("pointerleave",v),()=>{l.removeEventListener("pointerleave",g),u.removeEventListener("pointerleave",v)}}},[l,u,p,h]),L.useEffect(()=>{if(o){const g=v=>{const m=v.target,d={x:v.clientX,y:v.clientY},x=(l==null?void 0:l.contains(m))||(u==null?void 0:u.contains(m)),_=!GA(d,o);x?h():_&&(h(),c())};return document.addEventListener("pointermove",g),()=>document.removeEventListener("pointermove",g)}},[l,u,o,c,h]),E.jsx(vS,{...t,ref:s})}),[FA,OA]=Bu(mS,{isInside:!1}),kA=$T("TooltipContent"),vS=L.forwardRef((t,e)=>{const{__scopeTooltip:n,children:i,"aria-label":r,onEscapeKeyDown:s,onPointerDownOutside:o,...a}=t,l=zu(No,n),c=dm(n),{onClose:u}=l;return L.useEffect(()=>(document.addEventListener(vv,u),()=>document.removeEventListener(vv,u)),[u]),L.useEffect(()=>{if(l.trigger){const f=h=>{const p=h.target;p!=null&&p.contains(l.trigger)&&u()};return window.addEventListener("scroll",f,{capture:!0}),()=>window.removeEventListener("scroll",f,{capture:!0})}},[l.trigger,u]),E.jsx(Qp,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:o,onFocusOutside:f=>f.preventDefault(),onDismiss:u,children:E.jsxs(CA,{"data-state":l.stateAttribute,...c,...a,ref:e,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[E.jsx(kA,{children:i}),E.jsx(FA,{scope:n,isInside:!0,children:E.jsx(m1,{id:l.contentId,role:"tooltip",children:r||i})})]})})});gS.displayName=No;var xS="TooltipArrow",BA=L.forwardRef((t,e)=>{const{__scopeTooltip:n,...i}=t,r=dm(n);return OA(xS,n).isInside?null:E.jsx(RA,{...r,...i,ref:e})});BA.displayName=xS;function zA(t,e){const n=Math.abs(e.top-t.y),i=Math.abs(e.bottom-t.y),r=Math.abs(e.right-t.x),s=Math.abs(e.left-t.x);switch(Math.min(n,i,r,s)){case s:return"left";case r:return"right";case n:return"top";case i:return"bottom";default:throw new Error("unreachable")}}function HA(t,e,n=5){const i=[];switch(e){case"top":i.push({x:t.x-n,y:t.y+n},{x:t.x+n,y:t.y+n});break;case"bottom":i.push({x:t.x-n,y:t.y-n},{x:t.x+n,y:t.y-n});break;case"left":i.push({x:t.x+n,y:t.y-n},{x:t.x+n,y:t.y+n});break;case"right":i.push({x:t.x-n,y:t.y-n},{x:t.x-n,y:t.y+n});break}return i}function VA(t){const{top:e,right:n,bottom:i,left:r}=t;return[{x:r,y:e},{x:n,y:e},{x:n,y:i},{x:r,y:i}]}function GA(t,e){const{x:n,y:i}=t;let r=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const a=e[s].x,l=e[s].y,c=e[o].x,u=e[o].y;l>i!=u>i&&n<(c-a)*(i-l)/(u-l)+a&&(r=!r)}return r}function WA(t){const e=t.slice();return e.sort((n,i)=>n.x<i.x?-1:n.x>i.x?1:n.y<i.y?-1:n.y>i.y?1:0),jA(e)}function jA(t){if(t.length<=1)return t.slice();const e=[];for(let i=0;i<t.length;i++){const r=t[i];for(;e.length>=2;){const s=e[e.length-1],o=e[e.length-2];if((s.x-o.x)*(r.y-o.y)>=(s.y-o.y)*(r.x-o.x))e.pop();else break}e.push(r)}e.pop();const n=[];for(let i=t.length-1;i>=0;i--){const r=t[i];for(;n.length>=2;){const s=n[n.length-1],o=n[n.length-2];if((s.x-o.x)*(r.y-o.y)>=(s.y-o.y)*(r.x-o.x))n.pop();else break}n.push(r)}return n.pop(),e.length===1&&n.length===1&&e[0].x===n[0].x&&e[0].y===n[0].y?e:e.concat(n)}var XA=pS,_S=gS;const $A=XA,qA=L.forwardRef(({className:t,sideOffset:e=4,...n},i)=>E.jsx(_S,{ref:i,sideOffset:e,className:In("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",t),...n}));qA.displayName=_S.displayName;const yS=L.forwardRef(({className:t,...e},n)=>E.jsx("div",{ref:n,className:In("rounded-lg border bg-card text-card-foreground shadow-sm",t),...e}));yS.displayName="Card";const YA=L.forwardRef(({className:t,...e},n)=>E.jsx("div",{ref:n,className:In("flex flex-col space-y-1.5 p-6",t),...e}));YA.displayName="CardHeader";const KA=L.forwardRef(({className:t,...e},n)=>E.jsx("div",{ref:n,className:In("text-2xl font-semibold leading-none tracking-tight",t),...e}));KA.displayName="CardTitle";const QA=L.forwardRef(({className:t,...e},n)=>E.jsx("div",{ref:n,className:In("text-sm text-muted-foreground",t),...e}));QA.displayName="CardDescription";const SS=L.forwardRef(({className:t,...e},n)=>E.jsx("div",{ref:n,className:In("p-6 pt-0",t),...e}));SS.displayName="CardContent";const ZA=L.forwardRef(({className:t,...e},n)=>E.jsx("div",{ref:n,className:In("flex items-center p-6 pt-0",t),...e}));ZA.displayName="CardFooter";function JA(){return E.jsx("div",{className:"min-h-screen w-full flex items-center justify-center bg-gray-50",children:E.jsx(yS,{className:"w-full max-w-md mx-4",children:E.jsxs(SS,{className:"pt-6",children:[E.jsxs("div",{className:"flex mb-4 gap-2",children:[E.jsx(k1,{className:"h-8 w-8 text-red-500"}),E.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"404 Page Not Found"})]}),E.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Did you forget to add the page to the router?"})]})})})}const eC=()=>{const[t,e]=L.useState(!1),[n,i]=L.useState(!1),[r,s]=L.useState("hero"),o=()=>{e(!t)},a=()=>{e(!1)};L.useEffect(()=>{const c=()=>{i(window.scrollY>50);const u=document.querySelectorAll("section[id]");let f="hero";u.forEach(h=>{const p=h.offsetTop;window.scrollY>=p-100&&(f=h.getAttribute("id")||"hero")}),s(f)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const l=c=>{const u=document.getElementById(c);u&&window.scrollTo({top:u.offsetTop-80,behavior:"smooth"}),a()};return E.jsx("nav",{className:`fixed w-full z-50 px-4 md:px-8 py-4 transition-all duration-300 backdrop-blur-md ${n?"bg-midnight bg-opacity-80 shadow-md":"bg-opacity-90"}`,children:E.jsxs("div",{className:"max-w-7xl mx-auto flex flex-wrap items-center justify-center",children:[E.jsx("button",{onClick:o,className:"md:hidden absolute left-4 text-textPrimary hover:text-neonBlue focus:outline-none",children:E.jsx("i",{className:`fas ${t?"fa-times":"fa-bars"} text-xl`})}),E.jsx("div",{className:`${t?"flex":"hidden"} md:flex flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0 transition-all duration-300 justify-center`,children:E.jsx("div",{className:"flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center",children:[{id:"hero",label:"Home"},{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"education",label:"Education"},{id:"projects",label:"Projects"},{id:"contact",label:"Contact"}].map(c=>E.jsx("a",{href:`#${c.id}`,className:`text-textSecondary hover:text-neonBlue transition-colors duration-300 nav-link ${r===c.id?"nav-active":""}`,onClick:u=>{u.preventDefault(),l(c.id)},children:c.label},c.id))})})]})})},tC=()=>{const t=L.useRef(null);return L.useEffect(()=>{const e=new IntersectionObserver(([n])=>{n.isIntersecting&&n.target.classList.add("visible")},{threshold:.1});return t.current&&e.observe(t.current),()=>{t.current&&e.unobserve(t.current)}},[]),E.jsx("section",{id:"hero",ref:t,className:"min-h-screen flex items-center justify-center px-4 md:px-8 pt-24 pb-16 section",children:E.jsxs("div",{className:"max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center",children:[E.jsxs("div",{className:"order-2 md:order-1 space-y-6",children:[E.jsx("p",{className:"font-mono text-neonBlue opacity-80 fade-up",children:"Hi, my name is"}),E.jsx("h1",{className:"text-5xl md:text-7xl font-bold font-heading text-textPrimary fade-up delay-1",children:E.jsx("span",{className:"block",children:"Suyog Gautam"})}),E.jsx("p",{className:"text-lg md:text-xl text-textSecondary max-w-xl fade-up delay-2",children:"A motivated and detail-oriented individual seeking opportunities in the field of Computer Systems Engineering. Proficient in Python, JavaScript, React, Laravel, and MySQL. Skilled in web development with a passion for AI integration and problem-solving."}),E.jsxs("div",{className:"pt-4 flex flex-wrap gap-4 fade-up delay-3",children:[E.jsx("a",{href:"#projects",className:"hero-btn px-6 py-3 bg-transparent border-2 border-neonBlue text-neonBlue rounded hover:bg-neonBlue hover:bg-opacity-10 transition-all duration-300",onClick:e=>{e.preventDefault();const n=document.getElementById("projects");n&&window.scrollTo({top:n.offsetTop-80,behavior:"smooth"})},children:"View My Work"}),E.jsx("a",{href:"#contact",className:"hero-btn px-6 py-3 bg-neonBlue bg-opacity-10 text-neonBlue border-2 border-neonBlue rounded hover:bg-opacity-20 transition-all duration-300",onClick:e=>{e.preventDefault();const n=document.getElementById("contact");n&&window.scrollTo({top:n.offsetTop-80,behavior:"smooth"})},children:"Connect"})]})]}),E.jsx("div",{className:"order-1 md:order-2 flex justify-center items-center fade-up",children:E.jsxs("div",{className:"relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neonBlue animate-[glow_2s_ease-in-out_infinite_alternate] shadow-[0_0_25px_rgba(100,255,218,0.4)] profile-hover-container",children:[E.jsx("img",{src:"https://avatars.githubusercontent.com/u/96070397?v=4",alt:"Suyog Gautam",className:"w-full h-full object-cover object-center profile-image-hero transition-all duration-500"}),E.jsx("div",{className:"profile-image-overlay"})]})})]})})},ES=L.createContext(void 0),nC=({children:t})=>{const[e,n]=L.useState(!0);L.useEffect(()=>{e?document.body.classList.remove("light-mode"):document.body.classList.add("light-mode")},[e]);const i=()=>{n(r=>!r)};return E.jsx(ES.Provider,{value:{isDarkMode:e,toggleTheme:i},children:t})},Go=()=>{const t=L.useContext(ES);if(t===void 0)throw new Error("useTheme must be used within a ThemeProvider");return t},iC=()=>{const t=L.useRef(null);Go();const[e,n]=L.useState(!1);return L.useEffect(()=>{const i=new IntersectionObserver(([r])=>{r.isIntersecting&&(n(!0),r.target.classList.add("visible"))},{threshold:.1});return t.current&&i.observe(t.current),()=>{t.current&&i.unobserve(t.current)}},[]),E.jsxs("section",{id:"about",ref:t,className:"px-4 md:px-8 py-20 section relative overflow-hidden",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent to-darkBlue opacity-20 pointer-events-none"}),E.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[E.jsx("div",{className:`shape-circle top-20 left-10 ${e?"animate-float":""}`}),E.jsx("div",{className:`shape-square top-40 right-20 ${e?"animate-float-delay":""}`}),E.jsx("div",{className:`shape-triangle bottom-20 left-1/4 ${e?"animate-float-reverse":""}`}),E.jsx("div",{className:`shape-cross top-1/3 right-1/3 ${e?"animate-spin-slow":""}`})]}),E.jsxs("div",{className:"max-w-6xl mx-auto relative z-10",children:[E.jsxs("h2",{className:"text-3xl md:text-4xl font-bold font-heading mb-16 flex items-center section-title",children:[E.jsx("span",{children:"About Me"}),E.jsx("div",{className:"ml-4 h-px bg-textSecondary bg-opacity-30 flex-grow"})]}),E.jsxs("div",{className:"about-split-container",children:[E.jsx("div",{className:`about-split-side about-left ${e?"slide-in-left":""}`,children:E.jsxs("div",{className:"about-content-wrapper",children:[E.jsxs("div",{className:"profile-image-container",children:[E.jsx("img",{src:"https://avatars.githubusercontent.com/u/96070397?v=4",alt:"Suyog Gautam",className:"profile-image"}),E.jsx("div",{className:"image-glow"})]}),E.jsxs("div",{className:"about-text-content",children:[E.jsx("h3",{className:"text-xl font-semibold mb-6 text-neonBlue",children:"About Me"}),E.jsx("p",{className:"text-textSecondary leading-relaxed mb-4",children:"I am a Computer Systems Engineering student with a passion for creating efficient, user-friendly web and mobile applications. My journey in tech started with a curiosity about how digital systems work and evolved into a commitment to building solutions that make a difference."}),E.jsx("p",{className:"text-textSecondary leading-relaxed mb-4",children:"My focus areas include full-stack web development, mobile app development, and exploring the integration of AI in everyday applications. I believe in clean code, thoughtful architecture, and continuous learning."}),E.jsx("p",{className:"text-textSecondary leading-relaxed",children:"Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, and solving challenging problems that push the boundaries of what's possible with software development."})]})]})}),E.jsxs("div",{className:"about-divider",children:[E.jsx("div",{className:"divider-line"}),E.jsx("div",{className:`divider-dot dot-top ${e?"animate-pulse-slow":""}`}),E.jsx("div",{className:`divider-dot dot-middle ${e?"animate-pulse-slow-delay":""}`}),E.jsx("div",{className:`divider-dot dot-bottom ${e?"animate-pulse-slow":""}`})]}),E.jsx("div",{className:`about-split-side about-right ${e?"slide-in-right":""}`,children:E.jsxs("div",{className:"about-content-wrapper",children:[E.jsx("h3",{className:"text-xl font-semibold mb-6 text-neonBlue",children:"Technical Proficiencies"}),E.jsxs("div",{className:"space-y-6",children:[E.jsxs("div",{className:"proficiency-category",children:[E.jsx("h4",{className:"text-textPrimary font-medium mb-3",children:"Programming Languages"}),E.jsxs("div",{className:"flex flex-wrap gap-3",children:[E.jsx("span",{className:"px-4 py-2 bg-midnight border border-neonBlue text-neonBlue rounded-md text-sm tech-card",children:"Python"}),E.jsx("span",{className:"px-4 py-2 bg-midnight border border-neonBlue text-neonBlue rounded-md text-sm tech-card",children:"JavaScript"}),E.jsx("span",{className:"px-4 py-2 bg-midnight border border-neonBlue text-neonBlue rounded-md text-sm tech-card",children:"PHP"})]})]}),E.jsxs("div",{className:"proficiency-category",children:[E.jsx("h4",{className:"text-textPrimary font-medium mb-3",children:"Frontend"}),E.jsxs("div",{className:"flex flex-wrap gap-3",children:[E.jsx("span",{className:"px-4 py-2 bg-midnight border border-accentPurple text-accentPurple rounded-md text-sm tech-card",children:"React"}),E.jsx("span",{className:"px-4 py-2 bg-midnight border border-accentPurple text-accentPurple rounded-md text-sm tech-card",children:"React Native"})]})]}),E.jsxs("div",{className:"proficiency-category",children:[E.jsx("h4",{className:"text-textPrimary font-medium mb-3",children:"Backend & Databases"}),E.jsxs("div",{className:"flex flex-wrap gap-3",children:[E.jsx("span",{className:"px-4 py-2 bg-midnight border border-neonBlue text-neonBlue rounded-md text-sm tech-card",children:"Node"}),E.jsx("span",{className:"px-4 py-2 bg-midnight border border-neonBlue text-neonBlue rounded-md text-sm tech-card",children:"Express"}),E.jsx("span",{className:"px-4 py-2 bg-midnight border border-neonBlue text-neonBlue rounded-md text-sm tech-card",children:"Laravel"}),E.jsx("span",{className:"px-4 py-2 bg-midnight border border-neonBlue text-neonBlue rounded-md text-sm tech-card",children:"MongoDB"}),E.jsx("span",{className:"px-4 py-2 bg-midnight border border-neonBlue text-neonBlue rounded-md text-sm tech-card",children:"MySQL"}),E.jsx("span",{className:"px-4 py-2 bg-midnight border border-neonBlue text-neonBlue rounded-md text-sm tech-card",children:"Firebase"})]})]}),E.jsxs("div",{className:"proficiency-category",children:[E.jsx("h4",{className:"text-textPrimary font-medium mb-3",children:"Tools & Platforms"}),E.jsxs("div",{className:"flex flex-wrap gap-3",children:[E.jsx("span",{className:"px-4 py-2 bg-midnight border border-accentPurple text-accentPurple rounded-md text-sm tech-card",children:"Git"}),E.jsx("span",{className:"px-4 py-2 bg-midnight border border-accentPurple text-accentPurple rounded-md text-sm tech-card",children:"WordPress"})]})]})]})]})})]})]})]})},rC=()=>{const t=L.useRef(null);return L.useEffect(()=>{const e=new IntersectionObserver(([n])=>{n.isIntersecting&&n.target.classList.add("visible")},{threshold:.1});return t.current&&e.observe(t.current),()=>{t.current&&e.unobserve(t.current)}},[]),E.jsx("section",{id:"skills",ref:t,className:"px-4 md:px-8 py-20 section",children:E.jsxs("div",{className:"max-w-6xl mx-auto",children:[E.jsxs("h2",{className:"text-3xl md:text-4xl font-bold font-heading mb-12 flex items-center section-title",children:[E.jsx("span",{children:"Technical Skills"}),E.jsx("div",{className:"ml-4 h-px bg-textSecondary bg-opacity-30 flex-grow"})]}),E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[E.jsxs("div",{className:"about-content-wrapper card-3d",children:[E.jsxs("div",{className:"flex items-center mb-6",children:[E.jsx("i",{className:"fas fa-code text-neonBlue text-2xl mr-4"}),E.jsx("h3",{className:"text-xl font-semibold",children:"Programming"})]}),E.jsxs("ul",{className:"space-y-3",children:[E.jsxs("li",{className:"flex items-center",children:[E.jsx("i",{className:"fas fa-check text-neonBlue mr-2"}),E.jsx("span",{children:"Python"})]}),E.jsxs("li",{className:"flex items-center",children:[E.jsx("i",{className:"fas fa-check text-neonBlue mr-2"}),E.jsx("span",{children:"JavaScript"})]}),E.jsxs("li",{className:"flex items-center",children:[E.jsx("i",{className:"fas fa-check text-neonBlue mr-2"}),E.jsx("span",{children:"PHP"})]}),E.jsxs("li",{className:"flex items-center",children:[E.jsx("i",{className:"fas fa-check text-neonBlue mr-2"}),E.jsx("span",{children:"HTML/CSS"})]})]})]}),E.jsxs("div",{className:"about-content-wrapper card-3d",children:[E.jsxs("div",{className:"flex items-center mb-6",children:[E.jsx("i",{className:"fas fa-layer-group text-neonBlue text-2xl mr-4"}),E.jsx("h3",{className:"text-xl font-semibold",children:"Libraries & Frameworks"})]}),E.jsxs("ul",{className:"space-y-3",children:[E.jsxs("li",{className:"flex items-center",children:[E.jsx("i",{className:"fas fa-check text-neonBlue mr-2"}),E.jsx("span",{children:"React & React Native"})]}),E.jsxs("li",{className:"flex items-center",children:[E.jsx("i",{className:"fas fa-check text-neonBlue mr-2"}),E.jsx("span",{children:"Node.js & Express"})]}),E.jsxs("li",{className:"flex items-center",children:[E.jsx("i",{className:"fas fa-check text-neonBlue mr-2"}),E.jsx("span",{children:"Laravel"})]}),E.jsxs("li",{className:"flex items-center",children:[E.jsx("i",{className:"fas fa-check text-neonBlue mr-2"}),E.jsx("span",{children:"WordPress & WooCommerce"})]})]})]}),E.jsxs("div",{className:"about-content-wrapper card-3d",children:[E.jsxs("div",{className:"flex items-center mb-6",children:[E.jsx("i",{className:"fas fa-database text-neonBlue text-2xl mr-4"}),E.jsx("h3",{className:"text-xl font-semibold",children:"Databases & Tools"})]}),E.jsxs("ul",{className:"space-y-3",children:[E.jsxs("li",{className:"flex items-center",children:[E.jsx("i",{className:"fas fa-check text-neonBlue mr-2"}),E.jsx("span",{children:"MongoDB"})]}),E.jsxs("li",{className:"flex items-center",children:[E.jsx("i",{className:"fas fa-check text-neonBlue mr-2"}),E.jsx("span",{children:"MySQL"})]}),E.jsxs("li",{className:"flex items-center",children:[E.jsx("i",{className:"fas fa-check text-neonBlue mr-2"}),E.jsx("span",{children:"Firebase"})]}),E.jsxs("li",{className:"flex items-center",children:[E.jsx("i",{className:"fas fa-check text-neonBlue mr-2"}),E.jsx("span",{children:"Git & GitHub"})]})]})]})]}),E.jsxs("div",{className:"mt-12",children:[E.jsx("h3",{className:"text-2xl font-semibold mb-6",children:"Soft Skills"}),E.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:[E.jsxs("div",{className:"about-content-wrapper flex items-center card-3d",style:{padding:"1rem"},children:[E.jsx("i",{className:"fas fa-lightbulb text-neonBlue text-xl mr-3"}),E.jsx("span",{children:"Problem-solving"})]}),E.jsxs("div",{className:"about-content-wrapper flex items-center card-3d",style:{padding:"1rem"},children:[E.jsx("i",{className:"fas fa-sync-alt text-neonBlue text-xl mr-3"}),E.jsx("span",{children:"Flexibility"})]}),E.jsxs("div",{className:"about-content-wrapper flex items-center card-3d",style:{padding:"1rem"},children:[E.jsx("i",{className:"fas fa-bolt text-neonBlue text-xl mr-3"}),E.jsx("span",{children:"Quick Learner"})]})]})]})]})})},sC=()=>{const t=L.useRef(null);return L.useEffect(()=>{const e=new IntersectionObserver(([n])=>{n.isIntersecting&&n.target.classList.add("visible")},{threshold:.1});return t.current&&e.observe(t.current),()=>{t.current&&e.unobserve(t.current)}},[]),E.jsx("section",{id:"education",ref:t,className:"px-4 md:px-8 py-20 section",children:E.jsxs("div",{className:"max-w-6xl mx-auto",children:[E.jsxs("h2",{className:"text-3xl md:text-4xl font-bold font-heading mb-12 flex items-center section-title",children:[E.jsx("span",{children:"Education"}),E.jsx("div",{className:"ml-4 h-px bg-textSecondary bg-opacity-30 flex-grow"})]}),E.jsxs("div",{className:"space-y-12",children:[E.jsxs("div",{className:"relative pl-8 md:pl-0",children:[E.jsx("div",{className:"hidden md:block absolute top-0 bottom-0 left-0 w-0.5 bg-neonBlue"}),E.jsx("div",{className:"hidden md:flex absolute left-0 top-0 -translate-x-1/2 h-6 w-6 rounded-full border-2 border-neonBlue bg-midnight items-center justify-center",children:E.jsx("div",{className:"h-2 w-2 bg-neonBlue rounded-full"})}),E.jsx("div",{className:"md:ml-12",children:E.jsxs("div",{className:"about-content-wrapper education-card hover-shadow-glow transition-all duration-300",children:[E.jsxs("div",{className:"flex flex-col md:flex-row md:justify-between md:items-center mb-4",children:[E.jsx("h3",{className:"text-xl font-semibold text-textPrimary",children:"BSc (Hons) Computer Systems Engineering"}),E.jsx("span",{className:"font-mono text-neonBlue text-sm mt-2 md:mt-0",children:"2022–2025 (Expected)"})]}),E.jsx("p",{className:"text-textSecondary mb-4",children:"ISMT"}),E.jsx("p",{className:"text-textSecondary text-sm",children:"Studying modern computer systems engineering with focus on software development, systems architecture, and practical project implementation."})]})})]}),E.jsxs("div",{className:"relative pl-8 md:pl-0",children:[E.jsx("div",{className:"hidden md:block absolute top-0 bottom-0 left-0 w-0.5 bg-neonBlue"}),E.jsx("div",{className:"hidden md:flex absolute left-0 top-0 -translate-x-1/2 h-6 w-6 rounded-full border-2 border-neonBlue bg-midnight items-center justify-center",children:E.jsx("div",{className:"h-2 w-2 bg-neonBlue rounded-full"})}),E.jsx("div",{className:"md:ml-12",children:E.jsxs("div",{className:"about-content-wrapper education-card hover-shadow-glow transition-all duration-300",children:[E.jsxs("div",{className:"flex flex-col md:flex-row md:justify-between md:items-center mb-4",children:[E.jsx("h3",{className:"text-xl font-semibold text-textPrimary",children:"+2 HSEB Certificate in Science"}),E.jsx("span",{className:"font-mono text-neonBlue text-sm mt-2 md:mt-0",children:"2020–2022"})]}),E.jsx("p",{className:"text-textSecondary mb-4",children:"Ankuram Academy"}),E.jsx("p",{className:"text-textSecondary text-sm",children:"Completed higher secondary education with a focus on science subjects, building a strong foundation in mathematics and physics."})]})})]})]})]})})},oC=({project:t})=>{const{isDarkMode:e}=Go();return E.jsxs("div",{className:"about-content-wrapper rounded-lg overflow-hidden h-full hover-shadow-glow transition-all duration-300 hover:-translate-y-1",children:[E.jsx("div",{className:"h-48 bg-midnight relative overflow-hidden",children:E.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-deepBlue bg-opacity-70",children:E.jsx("i",{className:`${t.icon} text-neonBlue text-5xl ${e?"opacity-50":"opacity-70"}`})})}),E.jsxs("div",{className:"p-6",children:[E.jsxs("div",{className:"flex justify-between items-start mb-3",children:[E.jsx("h3",{className:"text-xl font-semibold text-textPrimary",children:t.title}),E.jsxs("div",{className:"flex space-x-3",children:[t.githubLink&&E.jsx("a",{href:t.githubLink,target:"_blank",rel:"noopener noreferrer",className:"text-neonBlue hover:text-opacity-80 transition-colors",children:E.jsx("i",{className:"fab fa-github"})}),t.demoLink&&E.jsx("a",{href:t.demoLink,target:"_blank",rel:"noopener noreferrer",className:"text-neonBlue hover:text-opacity-80 transition-colors",children:E.jsx("i",{className:"fas fa-external-link-alt"})})]})]}),E.jsx("p",{className:"text-textSecondary text-sm mb-4",children:t.description}),E.jsx("div",{className:"flex flex-wrap gap-2 mt-4",children:t.technologies.map((n,i)=>E.jsx("span",{className:"text-xs px-2 py-1 rounded-full bg-white/10 text-neonBlue backdrop-blur-sm border border-white/10 shadow-sm",children:n},i))})]})]})},aC=[{title:"Chat App",description:"Real-time chat with Firebase Auth & Firestore.",icon:"far fa-comments",technologies:["React","Firebase","NextUI"],githubLink:"https://github.com/suyog-gautam/Chat-App",demoLink:"https://chat-app-5e0a1.web.app/"},{title:"Quick Care",description:"Appointment booking and management system with admin panel and payment integration.",icon:"fas fa-hospital-user",technologies:["MERN Stack","Tailwind","ShadCN UI","E-Sewa"],githubLink:"https://github.com/suyog-gautam/QuickCare"},{title:"doKan",description:"E-commerce website with online ordering and management.",icon:"fas fa-shopping-cart",technologies:["WordPress","WooCommerce"],githubLink:"https://github.com/suyog-gautam/doKan.com"},{title:"Job Nest",description:"Job portal app for seekers and recruiters with resume upload and filtering features.",icon:"fas fa-briefcase",technologies:["React Native","Firebase"],githubLink:"https://github.com/suyog-gautam"},{title:"Gurus-Fitness",description:"Gym website with membership booking and community forum.",icon:"fas fa-dumbbell",technologies:["Laravel"],githubLink:"https://github.com/suyog-gautam"},{title:"Expense Tracker Tool",description:"Local storage-based tool for managing income and expenses.",icon:"fas fa-chart-line",technologies:["React"],demoLink:"#"},{title:"Keep Notes",description:"Personal note manager with auth, CRUD, and search features.",icon:"fas fa-sticky-note",technologies:["MERN Stack"],githubLink:"https://github.com/suyog-gautam"}],lC=()=>{const t=L.useRef(null);return L.useEffect(()=>{const e=new IntersectionObserver(([n])=>{n.isIntersecting&&n.target.classList.add("visible")},{threshold:.1});return t.current&&e.observe(t.current),()=>{t.current&&e.unobserve(t.current)}},[]),E.jsx("section",{id:"projects",ref:t,className:"px-4 md:px-8 py-20 section",children:E.jsxs("div",{className:"max-w-6xl mx-auto",children:[E.jsxs("h2",{className:"text-3xl md:text-4xl font-bold font-heading mb-12 flex items-center section-title",children:[E.jsx("span",{children:"Projects"}),E.jsx("div",{className:"ml-4 h-px bg-textSecondary bg-opacity-30 flex-grow"})]}),E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:aC.map((e,n)=>E.jsx(oC,{project:e},n))})]})})},cC=()=>{const t=L.useRef(null);return Go(),L.useEffect(()=>{const e=new IntersectionObserver(([n])=>{n.isIntersecting&&n.target.classList.add("visible")},{threshold:.1});return t.current&&e.observe(t.current),()=>{t.current&&e.unobserve(t.current)}},[]),E.jsx("section",{id:"contact",ref:t,className:"px-4 md:px-8 py-20 section",children:E.jsxs("div",{className:"max-w-4xl mx-auto",children:[E.jsxs("h2",{className:"text-3xl md:text-4xl font-bold font-heading mb-6 flex items-center section-title",children:[E.jsx("span",{children:"Contact"}),E.jsx("div",{className:"ml-4 h-px bg-textSecondary bg-opacity-30 flex-grow"})]}),E.jsx("p",{className:"text-textSecondary text-lg max-w-2xl mx-auto text-center mb-10",children:"I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'd love to hear from you!"}),E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[E.jsxs("a",{href:"mailto:gautamsuyog58@gmail.com",className:"about-content-wrapper hover-shadow-glow flex flex-col items-center justify-center transition-all duration-300 no-underline cursor-pointer",children:[E.jsx("div",{className:"w-16 h-16 rounded-full bg-neonBlue bg-opacity-10 flex items-center justify-center mb-4",children:E.jsx("i",{className:"fas fa-envelope text-neonBlue text-2xl"})}),E.jsx("h3",{className:"text-lg font-semibold text-textPrimary mb-2",children:"Email"}),E.jsx("span",{className:"text-textSecondary hover:text-neonBlue transition-colors",children:"gautamsuyog58@gmail.com"})]}),E.jsxs("a",{href:"https://www.linkedin.com/in/suyog-gautam-84bb10299/",target:"_blank",className:"about-content-wrapper hover-shadow-glow flex flex-col items-center justify-center transition-all duration-300 no-underline cursor-pointer",children:[E.jsx("div",{className:"w-16 h-16 rounded-full bg-neonBlue bg-opacity-10 flex items-center justify-center mb-4",children:E.jsx("i",{className:"fab fa-linkedin text-neonBlue text-2xl"})}),E.jsx("h3",{className:"text-lg font-semibold text-textPrimary mb-2",children:"LinkedIn"}),E.jsx("span",{className:"text-textSecondary hover:text-neonBlue transition-colors",children:"suyog-gautam"})]}),E.jsxs("a",{href:"https://github.com/suyog-gautam",target:"_blank",rel:"noopener noreferrer",className:"about-content-wrapper hover-shadow-glow flex flex-col items-center justify-center transition-all duration-300 no-underline cursor-pointer",children:[E.jsx("div",{className:"w-16 h-16 rounded-full bg-neonBlue bg-opacity-10 flex items-center justify-center mb-4",children:E.jsx("i",{className:"fab fa-github text-neonBlue text-2xl"})}),E.jsx("h3",{className:"text-lg font-semibold text-textPrimary mb-2",children:"GitHub"}),E.jsx("span",{className:"text-textSecondary hover:text-neonBlue transition-colors",children:"github.com/suyog-gautam"})]})]})]})})},uC=()=>E.jsx("footer",{className:"px-4 md:px-8 py-8 border-t border-textSecondary border-opacity-10",children:E.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[E.jsx("p",{className:"text-textSecondary",children:"Designed & Built by Suyog Gautam"}),E.jsxs("div",{className:"flex justify-center space-x-6 mt-4",children:[E.jsx("a",{href:"mailto:gautamsuyog58@gmail.com",className:"text-textSecondary hover:text-neonBlue transition-colors",children:E.jsx("i",{className:"fas fa-envelope"})}),E.jsx("a",{href:"https://www.linkedin.com/in/suyog-gautam-84bb10299/",target:"_blank",rel:"noopener noreferrer",className:"text-textSecondary hover:text-neonBlue transition-colors",children:E.jsx("i",{className:"fab fa-linkedin"})}),E.jsx("a",{href:"https://github.com/suyog-gautam",target:"_blank",rel:"noopener noreferrer",className:"text-textSecondary hover:text-neonBlue transition-colors",children:E.jsx("i",{className:"fab fa-github"})})]})]})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fm="175",dC=0,xv=1,fC=2,MS=1,hC=2,Ui=3,kr=0,gn=1,ki=2,Nr=0,uo=1,_v=2,yv=3,Sv=4,pC=5,ns=100,mC=101,gC=102,vC=103,xC=104,_C=200,yC=201,SC=202,EC=203,ch=204,uh=205,MC=206,wC=207,TC=208,bC=209,AC=210,CC=211,RC=212,PC=213,NC=214,dh=0,fh=1,hh=2,Lo=3,ph=4,mh=5,gh=6,vh=7,wS=0,LC=1,DC=2,Lr=0,IC=1,UC=2,FC=3,OC=4,kC=5,BC=6,zC=7,TS=300,Do=301,Io=302,xh=303,_h=304,Hu=306,yh=1e3,as=1001,Sh=1002,ai=1003,HC=1004,Ul=1005,yi=1006,Ad=1007,ls=1008,Qi=1009,bS=1010,AS=1011,Xa=1012,hm=1013,Ms=1014,Hi=1015,ol=1016,pm=1017,mm=1018,$a=1020,CS=35902,RS=1021,PS=1022,ri=1023,NS=1024,LS=1025,qa=1026,Ya=1027,DS=1028,gm=1029,IS=1030,vm=1031,xm=1033,wc=33776,Tc=33777,bc=33778,Ac=33779,Eh=35840,Mh=35841,wh=35842,Th=35843,bh=36196,Ah=37492,Ch=37496,Rh=37808,Ph=37809,Nh=37810,Lh=37811,Dh=37812,Ih=37813,Uh=37814,Fh=37815,Oh=37816,kh=37817,Bh=37818,zh=37819,Hh=37820,Vh=37821,Cc=36492,Gh=36494,Wh=36495,US=36283,jh=36284,Xh=36285,$h=36286,VC=3200,GC=3201,WC=0,jC=1,mr="",Bn="srgb",Uo="srgb-linear",au="linear",ot="srgb",Rs=7680,Ev=519,XC=512,$C=513,qC=514,FS=515,YC=516,KC=517,QC=518,ZC=519,Mv=35044,wv="300 es",Vi=2e3,lu=2001;class Wo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=Math.PI/180,qh=180/Math.PI;function al(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Ve(t,e,n){return Math.max(e,Math.min(n,t))}function JC(t,e){return(t%e+e)%e}function Cd(t,e,n){return(1-n)*t+n*e}function ra(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function un(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class at{constructor(e=0,n=0){at.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ve(this.x,e.x,n.x),this.y=Ve(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ve(this.x,e,n),this.y=Ve(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,s,o,a,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],v=r[0],m=r[3],d=r[6],x=r[1],_=r[4],y=r[7],C=r[2],A=r[5],b=r[8];return s[0]=o*v+a*x+l*C,s[3]=o*m+a*_+l*A,s[6]=o*d+a*y+l*b,s[1]=c*v+u*x+f*C,s[4]=c*m+u*_+f*A,s[7]=c*d+u*y+f*b,s[2]=h*v+p*x+g*C,s[5]=h*m+p*_+g*A,s[8]=h*d+p*y+g*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=n*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Rd.makeScale(e,n)),this}rotate(e){return this.premultiply(Rd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Rd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rd=new Oe;function OS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function cu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function eR(){const t=cu("canvas");return t.style.display="block",t}const Tv={};function Pc(t){t in Tv||(Tv[t]=!0,console.warn(t))}function tR(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function nR(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function iR(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bv=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Av=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rR(){const t={enabled:!0,workingColorSpace:Uo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ot&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(r.r=fo(r.r),r.g=fo(r.g),r.b=fo(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===mr?au:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Uo]:{primaries:e,whitePoint:i,transfer:au,toXYZ:bv,fromXYZ:Av,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:bv,fromXYZ:Av,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),t}const Ze=rR();function Wi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function fo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ps;class sR{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ps===void 0&&(Ps=cu("canvas")),Ps.width=e.width,Ps.height=e.height;const r=Ps.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ps}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=cu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Wi(n[i]/255)*255):n[i]=Wi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oR=0;class _m{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oR++}),this.uuid=al(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pd(r[o].image)):s.push(Pd(r[o]))}else s=Pd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Pd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?sR.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let aR=0;class vn extends Wo{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=as,r=as,s=yi,o=ls,a=ri,l=Qi,c=vn.DEFAULT_ANISOTROPY,u=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aR++}),this.uuid=al(),this.name="",this.source=new _m(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==TS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yh:e.x=e.x-Math.floor(e.x);break;case as:e.x=e.x<0?0:1;break;case Sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yh:e.y=e.y-Math.floor(e.y);break;case as:e.y=e.y<0?0:1;break;case Sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=TS;vn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(p+1)/2,C=(d+1)/2,A=(u+h)/4,b=(f+v)/4,R=(g+m)/4;return _>y&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=b/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=b/s,r=R/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-v)/x,this.z=(h-u)/x,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ve(this.x,e.x,n.x),this.y=Ve(this.y,e.y,n.y),this.z=Ve(this.z,e.z,n.z),this.w=Ve(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ve(this.x,e,n),this.y=Ve(this.y,e,n),this.z=Ve(this.z,e,n),this.w=Ve(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lR extends Wo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new vn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new _m(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ws extends lR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class kS extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ai,this.minFilter=ai,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cR extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ai,this.minFilter=ai,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ll{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(f!==v||l!==h||c!==p||u!==g){let m=1-a;const d=l*h+c*p+u*g+f*v,x=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const C=Math.sqrt(_),A=Math.atan2(C,d*x);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const y=a*x;if(l=l*m+h*y,c=c*m+p*y,u=u*m+g*y,f=f*m+v*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*p-c*h,e[n+1]=l*g+u*h+c*f-a*p,e[n+2]=c*g+u*p+a*h-l*f,e[n+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Cv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Cv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ve(this.x,e.x,n.x),this.y=Ve(this.y,e.y,n.y),this.z=Ve(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ve(this.x,e,n),this.y=Ve(this.y,e,n),this.z=Ve(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nd.copy(this).projectOnVector(e),this.sub(Nd)}reflect(e){return this.sub(Nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nd=new V,Cv=new ll;class cl{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(s,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fl.copy(i.boundingBox)),Fl.applyMatrix4(e.matrixWorld),this.union(Fl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),Ol.subVectors(this.max,sa),Ns.subVectors(e.a,sa),Ls.subVectors(e.b,sa),Ds.subVectors(e.c,sa),ir.subVectors(Ls,Ns),rr.subVectors(Ds,Ls),Xr.subVectors(Ns,Ds);let n=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Xr.z,Xr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Xr.z,0,-Xr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Xr.y,Xr.x,0];return!Ld(n,Ns,Ls,Ds,Ol)||(n=[1,0,0,0,1,0,0,0,1],!Ld(n,Ns,Ls,Ds,Ol))?!1:(kl.crossVectors(ir,rr),n=[kl.x,kl.y,kl.z],Ld(n,Ns,Ls,Ds,Ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new V,new V,new V,new V,new V,new V,new V,new V],Kn=new V,Fl=new cl,Ns=new V,Ls=new V,Ds=new V,ir=new V,rr=new V,Xr=new V,sa=new V,Ol=new V,kl=new V,$r=new V;function Ld(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){$r.fromArray(t,s);const a=r.x*Math.abs($r.x)+r.y*Math.abs($r.y)+r.z*Math.abs($r.z),l=e.dot($r),c=n.dot($r),u=i.dot($r);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const uR=new cl,oa=new V,Dd=new V;class ul{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):uR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);const n=oa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(oa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(Dd)),this.expandByPoint(oa.copy(e.center).sub(Dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new V,Id=new V,Bl=new V,sr=new V,Ud=new V,zl=new V,Fd=new V;class ym{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Id.copy(e).add(n).multiplyScalar(.5),Bl.copy(n).sub(e).normalize(),sr.copy(this.origin).sub(Id);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Bl),a=sr.dot(this.direction),l=-sr.dot(Bl),c=sr.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Id).addScaledVector(Bl,h),p}intersectSphere(e,n){Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),r=Pi.dot(Pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,i,r,s){Ud.subVectors(n,e),zl.subVectors(i,e),Fd.crossVectors(Ud,zl);let o=this.direction.dot(Fd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sr.subVectors(this.origin,e);const l=a*this.direction.dot(zl.crossVectors(sr,zl));if(l<0)return null;const c=a*this.direction.dot(Ud.cross(sr));if(c<0||l+c>o)return null;const u=-a*sr.dot(Fd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,g,v,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,g,v,m)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Is.setFromMatrixColumn(e,0).length(),s=1/Is.setFromMatrixColumn(e,1).length(),o=1/Is.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=h-v*c,n[9]=-a*l,n[2]=v-h*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,v=c*f;n[0]=h+v*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=v+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,v=c*f;n[0]=h-v*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=v-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=h*c+v,n[1]=l*f,n[5]=v*c+h,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-h*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+v,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=v*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dR,e,fR)}lookAt(e,n,i){const r=this.elements;return Sn.subVectors(e,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),or.crossVectors(i,Sn),or.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),or.crossVectors(i,Sn)),or.normalize(),Hl.crossVectors(Sn,or),r[0]=or.x,r[4]=Hl.x,r[8]=Sn.x,r[1]=or.y,r[5]=Hl.y,r[9]=Sn.y,r[2]=or.z,r[6]=Hl.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],x=i[3],_=i[7],y=i[11],C=i[15],A=r[0],b=r[4],R=r[8],w=r[12],S=r[1],D=r[5],z=r[9],H=r[13],B=r[2],Y=r[6],W=r[10],U=r[14],P=r[3],G=r[7],X=r[11],ne=r[15];return s[0]=o*A+a*S+l*B+c*P,s[4]=o*b+a*D+l*Y+c*G,s[8]=o*R+a*z+l*W+c*X,s[12]=o*w+a*H+l*U+c*ne,s[1]=u*A+f*S+h*B+p*P,s[5]=u*b+f*D+h*Y+p*G,s[9]=u*R+f*z+h*W+p*X,s[13]=u*w+f*H+h*U+p*ne,s[2]=g*A+v*S+m*B+d*P,s[6]=g*b+v*D+m*Y+d*G,s[10]=g*R+v*z+m*W+d*X,s[14]=g*w+v*H+m*U+d*ne,s[3]=x*A+_*S+y*B+C*P,s[7]=x*b+_*D+y*Y+C*G,s[11]=x*R+_*z+y*W+C*X,s[15]=x*w+_*H+y*U+C*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+v*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],x=f*m*c-v*h*c+v*l*p-a*m*p-f*l*d+a*h*d,_=g*h*c-u*m*c-g*l*p+o*m*p+u*l*d-o*h*d,y=u*v*c-g*f*c+g*a*p-o*v*p-u*a*d+o*f*d,C=g*f*l-u*v*l-g*a*h+o*v*h+u*a*m-o*f*m,A=n*x+i*_+r*y+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=x*b,e[1]=(v*h*s-f*m*s-v*r*p+i*m*p+f*r*d-i*h*d)*b,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*d+i*l*d)*b,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*b,e[4]=_*b,e[5]=(u*m*s-g*h*s+g*r*p-n*m*p-u*r*d+n*h*d)*b,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*d-n*l*d)*b,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*b,e[8]=y*b,e[9]=(g*f*s-u*v*s-g*i*p+n*v*p+u*i*d-n*f*d)*b,e[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*d+n*a*d)*b,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*b,e[12]=C*b,e[13]=(u*v*r-g*f*r+g*i*h-n*v*h-u*i*m+n*f*m)*b,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*m-n*a*m)*b,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,v=o*u,m=o*f,d=a*f,x=l*c,_=l*u,y=l*f,C=i.x,A=i.y,b=i.z;return r[0]=(1-(v+d))*C,r[1]=(p+y)*C,r[2]=(g-_)*C,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(h+d))*A,r[6]=(m+x)*A,r[7]=0,r[8]=(g+_)*b,r[9]=(m-x)*b,r[10]=(1-(h+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Is.set(r[0],r[1],r[2]).length();const o=Is.set(r[4],r[5],r[6]).length(),a=Is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qn.copy(this);const c=1/s,u=1/o,f=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=f,Qn.elements[9]*=f,Qn.elements[10]*=f,n.setFromRotationMatrix(Qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Vi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===Vi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===lu)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Vi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*u;let g,v;if(a===Vi)g=(o+s)*f,v=-2*f;else if(a===lu)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Is=new V,Qn=new _t,dR=new V(0,0,0),fR=new V(1,1,1),or=new V,Hl=new V,Sn=new V,Rv=new _t,Pv=new ll;class Zi{constructor(e=0,n=0,i=0,r=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Rv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Pv.setFromEuler(this),this.setFromQuaternion(Pv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class BS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hR=0;const Nv=new V,Us=new ll,Ni=new _t,Vl=new V,aa=new V,pR=new V,mR=new ll,Lv=new V(1,0,0),Dv=new V(0,1,0),Iv=new V(0,0,1),Uv={type:"added"},gR={type:"removed"},Fs={type:"childadded",child:null},Od={type:"childremoved",child:null};class sn extends Wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hR++}),this.uuid=al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new V,n=new Zi,i=new ll,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new Oe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new BS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Lv,e)}rotateY(e){return this.rotateOnAxis(Dv,e)}rotateZ(e){return this.rotateOnAxis(Iv,e)}translateOnAxis(e,n){return Nv.copy(e).applyQuaternion(this.quaternion),this.position.add(Nv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Lv,e)}translateY(e){return this.translateOnAxis(Dv,e)}translateZ(e){return this.translateOnAxis(Iv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Vl.copy(e):Vl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(aa,Vl,this.up):Ni.lookAt(Vl,aa,this.up),this.quaternion.setFromRotationMatrix(Ni),r&&(Ni.extractRotation(r.matrixWorld),Us.setFromRotationMatrix(Ni),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uv),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gR),Od.child=e,this.dispatchEvent(Od),Od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uv),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,pR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,mR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new V(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new V,Li=new V,kd=new V,Di=new V,Os=new V,ks=new V,Fv=new V,Bd=new V,zd=new V,Hd=new V,Vd=new bt,Gd=new bt,Wd=new bt;class Vn{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Zn.subVectors(e,n),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Zn.subVectors(r,n),Li.subVectors(i,n),kd.subVectors(e,n);const o=Zn.dot(Zn),a=Zn.dot(Li),l=Zn.dot(kd),c=Li.dot(Li),u=Li.dot(kd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Vd.setScalar(0),Gd.setScalar(0),Wd.setScalar(0),Vd.fromBufferAttribute(e,n),Gd.fromBufferAttribute(e,i),Wd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Vd,s.x),o.addScaledVector(Gd,s.y),o.addScaledVector(Wd,s.z),o}static isFrontFacing(e,n,i,r){return Zn.subVectors(i,n),Li.subVectors(e,n),Zn.cross(Li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),Zn.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Os.subVectors(r,i),ks.subVectors(s,i),Bd.subVectors(e,i);const l=Os.dot(Bd),c=ks.dot(Bd);if(l<=0&&c<=0)return n.copy(i);zd.subVectors(e,r);const u=Os.dot(zd),f=ks.dot(zd);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Os,o);Hd.subVectors(e,s);const p=Os.dot(Hd),g=ks.dot(Hd);if(g>=0&&p<=g)return n.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(ks,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Fv.subVectors(s,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(Fv,a);const d=1/(m+v+h);return o=v*d,a=h*d,n.copy(i).addScaledVector(Os,o).addScaledVector(ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Gl={h:0,s:0,l:0};function jd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=JC(e,1),n=Ve(n,0,1),i=Ve(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=jd(o,s,e+1/3),this.g=jd(o,s,e),this.b=jd(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const i=zS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return Ze.fromWorkingColorSpace($t.copy(this),e),Math.round(Ve($t.r*255,0,255))*65536+Math.round(Ve($t.g*255,0,255))*256+Math.round(Ve($t.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace($t.copy(this),n);const i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Bn){Ze.fromWorkingColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,r=$t.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+n,ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ar),e.getHSL(Gl);const i=Cd(ar.h,Gl.h,n),r=Cd(ar.s,Gl.s,n),s=Cd(ar.l,Gl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new it;it.NAMES=zS;let vR=0;class jo extends Wo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vR++}),this.uuid=al(),this.name="",this.type="Material",this.blending=uo,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=uh,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ev,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(i.blending=this.blending),this.side!==kr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ch&&(i.blendSrc=this.blendSrc),this.blendDst!==uh&&(i.blendDst=this.blendDst),this.blendEquation!==ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ev&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ka extends jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=wS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new V,Wl=new at;let xR=0;class li{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xR++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Mv,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Wl.fromBufferAttribute(this,n),Wl.applyMatrix3(e),this.setXY(n,Wl.x,Wl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ra(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ra(n,this.array)),n}setX(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ra(n,this.array)),n}setY(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ra(n,this.array)),n}setZ(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ra(n,this.array)),n}setW(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mv&&(e.usage=this.usage),e}}class HS extends li{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class VS extends li{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Kt extends li{constructor(e,n,i){super(new Float32Array(e),n,i)}}let _R=0;const On=new _t,Xd=new sn,Bs=new V,En=new cl,la=new cl,Ut=new V;class xn extends Wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_R++}),this.uuid=al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(OS(e)?VS:HS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,n,i){return On.makeTranslation(e,n,i),this.applyMatrix4(On),this}scale(e,n,i){return On.makeScale(e,n,i),this.applyMatrix4(On),this}lookAt(e){return Xd.lookAt(e),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ul);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];la.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(En.min,la.min),En.expandByPoint(Ut),Ut.addVectors(En.max,la.max),En.expandByPoint(Ut)):(En.expandByPoint(la.min),En.expandByPoint(la.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ut.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(e,c),Ut.add(Bs)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new V,l[R]=new V;const c=new V,u=new V,f=new V,h=new at,p=new at,g=new at,v=new V,m=new V;function d(R,w,S){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,S),u.sub(c),f.sub(c),p.sub(h),g.sub(h);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),a[R].add(v),a[w].add(v),a[S].add(v),l[R].add(m),l[w].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,w=x.length;R<w;++R){const S=x[R],D=S.start,z=S.count;for(let H=D,B=D+z;H<B;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const _=new V,y=new V,C=new V,A=new V;function b(R){C.fromBufferAttribute(r,R),A.copy(C);const w=a[R];_.copy(w),_.sub(C.multiplyScalar(C.dot(w))).normalize(),y.crossVectors(A,w);const D=y.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,D)}for(let R=0,w=x.length;R<w;++R){const S=x[R],D=S.start,z=S.count;for(let H=D,B=D+z;H<B;H+=3)b(e.getX(H+0)),b(e.getX(H+1)),b(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,u=new V,f=new V;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new li(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ov=new _t,qr=new ym,jl=new ul,kv=new V,Xl=new V,$l=new V,ql=new V,$d=new V,Yl=new V,Bv=new V,Kl=new V;class Cn extends sn{constructor(e=new xn,n=new Ka){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Yl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&($d.fromBufferAttribute(f,e),o?Yl.addScaledVector($d,u):Yl.addScaledVector($d.sub(n),u))}n.add(Yl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jl.copy(i.boundingSphere),jl.applyMatrix4(s),qr.copy(e.ray).recast(e.near),!(jl.containsPoint(qr.origin)===!1&&(qr.intersectSphere(jl,kv)===null||qr.origin.distanceToSquared(kv)>(e.far-e.near)**2))&&(Ov.copy(s).invert(),qr.copy(e.ray).applyMatrix4(Ov),!(i.boundingBox!==null&&qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,qr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,C=_;y<C;y+=3){const A=a.getX(y),b=a.getX(y+1),R=a.getX(y+2);r=Ql(this,d,e,i,c,u,f,A,b,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const x=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=Ql(this,o,e,i,c,u,f,x,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,C=_;y<C;y+=3){const A=y,b=y+1,R=y+2;r=Ql(this,d,e,i,c,u,f,A,b,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const x=m,_=m+1,y=m+2;r=Ql(this,o,e,i,c,u,f,x,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function yR(t,e,n,i,r,s,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===kr,a),l===null)return null;Kl.copy(a),Kl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Kl);return c<n.near||c>n.far?null:{distance:c,point:Kl.clone(),object:t}}function Ql(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Xl),t.getVertexPosition(l,$l),t.getVertexPosition(c,ql);const u=yR(t,e,n,i,Xl,$l,ql,Bv);if(u){const f=new V;Vn.getBarycoord(Bv,Xl,$l,ql,f),r&&(u.uv=Vn.getInterpolatedAttribute(r,a,l,c,f,new at)),s&&(u.uv1=Vn.getInterpolatedAttribute(s,a,l,c,f,new at)),o&&(u.normal=Vn.getInterpolatedAttribute(o,a,l,c,f,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new V,materialIndex:0};Vn.getNormal(Xl,$l,ql,h.normal),u.face=h,u.barycoord=f}return u}class Br extends xn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(f,2));function g(v,m,d,x,_,y,C,A,b,R,w){const S=y/b,D=C/R,z=y/2,H=C/2,B=A/2,Y=b+1,W=R+1;let U=0,P=0;const G=new V;for(let X=0;X<W;X++){const ne=X*D-H;for(let ge=0;ge<Y;ge++){const Re=ge*S-z;G[v]=Re*x,G[m]=ne*_,G[d]=B,c.push(G.x,G.y,G.z),G[v]=0,G[m]=0,G[d]=A>0?1:-1,u.push(G.x,G.y,G.z),f.push(ge/b),f.push(1-X/R),U+=1}}for(let X=0;X<R;X++)for(let ne=0;ne<b;ne++){const ge=h+ne+Y*X,Re=h+ne+Y*(X+1),Q=h+(ne+1)+Y*(X+1),ae=h+(ne+1)+Y*X;l.push(ge,Re,ae),l.push(Re,Q,ae),P+=6}a.addGroup(p,P,w),p+=P,h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=Fo(t[n]);for(const r in i)e[r]=i[r]}return e}function SR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function GS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const ER={clone:Fo,merge:Jt};var MR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MR,this.fragmentShader=wR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=SR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class WS extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new V,zv=new at,Hv=new at;class bn extends WS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(Rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,n){return this.getViewBounds(e,zv,Hv),n.subVectors(Hv,zv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Rc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zs=-90,Hs=1;class TR extends sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(zs,Hs,e,n);r.layers=this.layers,this.add(r);const s=new bn(zs,Hs,e,n);s.layers=this.layers,this.add(s);const o=new bn(zs,Hs,e,n);o.layers=this.layers,this.add(o);const a=new bn(zs,Hs,e,n);a.layers=this.layers,this.add(a);const l=new bn(zs,Hs,e,n);l.layers=this.layers,this.add(l);const c=new bn(zs,Hs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class jS extends vn{constructor(e=[],n=Do,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bR extends ws{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new jS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Br(5,5,5),s=new zr({name:"CubemapFromEquirect",uniforms:Fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Nr});s.uniforms.tEquirect.value=n;const o=new Cn(r,s),a=n.minFilter;return n.minFilter===ls&&(n.minFilter=yi),new TR(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class cs extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AR={type:"move"};class qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(AR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new cs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class XS extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Yd=new V,CR=new V,RR=new Oe;class es{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Yd.subVectors(i,n).cross(CR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Yd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||RR.getNormalMatrix(e),r=this.coplanarPoint(Yd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new ul,Zl=new V;class $S{constructor(e=new es,n=new es,i=new es,r=new es,s=new es,o=new es){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],g=r[9],v=r[10],m=r[11],d=r[12],x=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-p,y-d).normalize(),i[1].setComponents(l+s,h+c,m+p,y+d).normalize(),i[2].setComponents(l+o,h+u,m+g,y+x).normalize(),i[3].setComponents(l-o,h-u,m-g,y-x).normalize(),i[4].setComponents(l-a,h-f,m-v,y-_).normalize(),n===Vi)i[5].setComponents(l+a,h+f,m+v,y+_).normalize();else if(n===lu)i[5].setComponents(a,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Zl.x=r.normal.x>0?e.max.x:e.min.x,Zl.y=r.normal.y>0?e.max.y:e.min.y,Zl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sm extends jo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uu=new V,du=new V,Vv=new _t,ca=new ym,Jl=new ul,Kd=new V,Gv=new V;class Yh extends sn{constructor(e=new xn,n=new Sm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)uu.fromBufferAttribute(n,r-1),du.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=uu.distanceTo(du);e.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(r),Jl.radius+=s,e.ray.intersectsSphere(Jl)===!1)return;Vv.copy(r).invert(),ca.copy(e.ray).applyMatrix4(Vv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const d=u.getX(v),x=u.getX(v+1),_=ec(this,e,ca,l,d,x,v);_&&n.push(_)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),d=ec(this,e,ca,l,v,m,g-1);d&&n.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const d=ec(this,e,ca,l,v,v+1,v);d&&n.push(d)}if(this.isLineLoop){const v=ec(this,e,ca,l,g-1,p,g-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ec(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(uu.fromBufferAttribute(a,r),du.fromBufferAttribute(a,s),n.distanceSqToSegment(uu,du,Kd,Gv)>i)return;Kd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Kd);if(!(c<e.near||c>e.far))return{distance:c,point:Gv.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const Wv=new V,jv=new V;class PR extends Yh{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Wv.fromBufferAttribute(n,r),jv.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Wv.distanceTo(jv);e.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qS extends jo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xv=new _t,Kh=new ym,tc=new ul,nc=new V;class NR extends sn{constructor(e=new xn,n=new qS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tc.copy(i.boundingSphere),tc.applyMatrix4(r),tc.radius+=s,e.ray.intersectsSphere(tc)===!1)return;Xv.copy(r).invert(),Kh.copy(e.ray).applyMatrix4(Xv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,v=p;g<v;g++){const m=c.getX(g);nc.fromBufferAttribute(f,m),$v(nc,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,v=p;g<v;g++)nc.fromBufferAttribute(f,g),$v(nc,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $v(t,e,n,i,r,s,o){const a=Kh.distanceSqToPoint(t);if(a<n){const l=new V;Kh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class YS extends vn{constructor(e,n,i=Ms,r,s,o,a=ai,l=ai,c,u=qa){if(u!==qa&&u!==Ya)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _m(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class LR{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new at:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new V,r=[],s=[],o=[],a=new V,l=new _t;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new V)}s[0]=new V,o[0]=new V;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ve(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Ve(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function DR(t,e){const n=1-t;return n*n*n*e}function IR(t,e){const n=1-t;return 3*n*n*t*e}function UR(t,e){return 3*(1-t)*t*t*e}function FR(t,e){return t*t*t*e}function Qd(t,e,n,i,r){return DR(t,e)+IR(t,n)+UR(t,i)+FR(t,r)}class OR extends LR{constructor(e=new V,n=new V,i=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new V){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Qd(e,r.x,s.x,o.x,a.x),Qd(e,r.y,s.y,o.y,a.y),Qd(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}const ic=new V,rc=new V,Zd=new V,sc=new Vn;class kR extends xn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Rc*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:d}=sc;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),sc.getNormal(Zd),f[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){const _=(x+1)%3,y=f[x],C=f[_],A=sc[u[x]],b=sc[u[_]],R=`${y}_${C}`,w=`${C}_${y}`;w in h&&h[w]?(Zd.dot(h[w].normal)<=s&&(p.push(A.x,A.y,A.z),p.push(b.x,b.y,b.z)),h[w]=null):R in h||(h[R]={index0:c[x],index1:c[_],normal:Zd.clone()})}}for(const g in h)if(h[g]){const{index0:v,index1:m}=h[g];ic.fromBufferAttribute(a,v),rc.fromBufferAttribute(a,m),p.push(ic.x,ic.y,ic.z),p.push(rc.x,rc.y,rc.z)}this.setAttribute("position",new Kt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Vu extends xn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const x=d*h-o;for(let _=0;_<c;_++){const y=_*f-s;g.push(y,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const _=x+c*d,y=x+c*(d+1),C=x+1+c*(d+1),A=x+1+c*d;p.push(_,y,A),p.push(y,C,A)}this.setIndex(p),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vu(e.width,e.height,e.widthSegments,e.heightSegments)}}class fu extends xn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new V,h=new V,p=[],g=[],v=[],m=[];for(let d=0;d<=i;d++){const x=[],_=d/i;let y=0;d===0&&o===0?y=.5/n:d===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const A=C/n;f.x=-e*Math.cos(r+A*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+_*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(A+y,1-_),x.push(c++)}u.push(x)}for(let d=0;d<i;d++)for(let x=0;x<n;x++){const _=u[d][x+1],y=u[d][x],C=u[d+1][x],A=u[d+1][x+1];(d!==0||o>0)&&p.push(_,y,A),(d!==i-1||l<Math.PI)&&p.push(y,C,A)}this.setIndex(p),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Em extends xn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new V,f=new V,h=new V;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const v=g/r*s,m=p/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(v),f.y=(e+n*Math.cos(m))*Math.sin(v),f.z=n*Math.sin(m),a.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const v=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,x=(r+1)*p+g;o.push(v,m,x),o.push(m,d,x)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Em(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class BR extends jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zR extends jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class HR extends WS{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class VR extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function qv(t,e,n,i){const r=GR(i);switch(n){case RS:return t*e;case NS:return t*e;case LS:return t*e*2;case DS:return t*e/r.components*r.byteLength;case gm:return t*e/r.components*r.byteLength;case IS:return t*e*2/r.components*r.byteLength;case vm:return t*e*2/r.components*r.byteLength;case PS:return t*e*3/r.components*r.byteLength;case ri:return t*e*4/r.components*r.byteLength;case xm:return t*e*4/r.components*r.byteLength;case wc:case Tc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bc:case Ac:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mh:case Th:return Math.max(t,16)*Math.max(e,8)/4;case Eh:case wh:return Math.max(t,8)*Math.max(e,8)/2;case bh:case Ah:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ch:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case kh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case zh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Cc:case Gh:case Wh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case US:case jh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Xh:case $h:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function GR(t){switch(t){case Qi:case bS:return{byteLength:1,components:1};case Xa:case AS:case ol:return{byteLength:2,components:1};case pm:case mm:return{byteLength:2,components:4};case Ms:case hm:case Hi:return{byteLength:4,components:1};case CS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function KS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function WR(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var jR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$R=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hP=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_P=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SP="gl_FragColor = linearToOutputTexel( gl_FragColor );",EP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,DP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,OP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$P=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qP=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YP=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,a2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,c2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,u2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,p2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,y2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,A2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,C2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,R2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,L2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,I2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,k2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,G2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Q2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Z2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,J2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_N=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,EN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:jR,alphahash_pars_fragment:XR,alphamap_fragment:$R,alphamap_pars_fragment:qR,alphatest_fragment:YR,alphatest_pars_fragment:KR,aomap_fragment:QR,aomap_pars_fragment:ZR,batching_pars_vertex:JR,batching_vertex:eP,begin_vertex:tP,beginnormal_vertex:nP,bsdfs:iP,iridescence_fragment:rP,bumpmap_pars_fragment:sP,clipping_planes_fragment:oP,clipping_planes_pars_fragment:aP,clipping_planes_pars_vertex:lP,clipping_planes_vertex:cP,color_fragment:uP,color_pars_fragment:dP,color_pars_vertex:fP,color_vertex:hP,common:pP,cube_uv_reflection_fragment:mP,defaultnormal_vertex:gP,displacementmap_pars_vertex:vP,displacementmap_vertex:xP,emissivemap_fragment:_P,emissivemap_pars_fragment:yP,colorspace_fragment:SP,colorspace_pars_fragment:EP,envmap_fragment:MP,envmap_common_pars_fragment:wP,envmap_pars_fragment:TP,envmap_pars_vertex:bP,envmap_physical_pars_fragment:OP,envmap_vertex:AP,fog_vertex:CP,fog_pars_vertex:RP,fog_fragment:PP,fog_pars_fragment:NP,gradientmap_pars_fragment:LP,lightmap_pars_fragment:DP,lights_lambert_fragment:IP,lights_lambert_pars_fragment:UP,lights_pars_begin:FP,lights_toon_fragment:kP,lights_toon_pars_fragment:BP,lights_phong_fragment:zP,lights_phong_pars_fragment:HP,lights_physical_fragment:VP,lights_physical_pars_fragment:GP,lights_fragment_begin:WP,lights_fragment_maps:jP,lights_fragment_end:XP,logdepthbuf_fragment:$P,logdepthbuf_pars_fragment:qP,logdepthbuf_pars_vertex:YP,logdepthbuf_vertex:KP,map_fragment:QP,map_pars_fragment:ZP,map_particle_fragment:JP,map_particle_pars_fragment:e2,metalnessmap_fragment:t2,metalnessmap_pars_fragment:n2,morphinstance_vertex:i2,morphcolor_vertex:r2,morphnormal_vertex:s2,morphtarget_pars_vertex:o2,morphtarget_vertex:a2,normal_fragment_begin:l2,normal_fragment_maps:c2,normal_pars_fragment:u2,normal_pars_vertex:d2,normal_vertex:f2,normalmap_pars_fragment:h2,clearcoat_normal_fragment_begin:p2,clearcoat_normal_fragment_maps:m2,clearcoat_pars_fragment:g2,iridescence_pars_fragment:v2,opaque_fragment:x2,packing:_2,premultiplied_alpha_fragment:y2,project_vertex:S2,dithering_fragment:E2,dithering_pars_fragment:M2,roughnessmap_fragment:w2,roughnessmap_pars_fragment:T2,shadowmap_pars_fragment:b2,shadowmap_pars_vertex:A2,shadowmap_vertex:C2,shadowmask_pars_fragment:R2,skinbase_vertex:P2,skinning_pars_vertex:N2,skinning_vertex:L2,skinnormal_vertex:D2,specularmap_fragment:I2,specularmap_pars_fragment:U2,tonemapping_fragment:F2,tonemapping_pars_fragment:O2,transmission_fragment:k2,transmission_pars_fragment:B2,uv_pars_fragment:z2,uv_pars_vertex:H2,uv_vertex:V2,worldpos_vertex:G2,background_vert:W2,background_frag:j2,backgroundCube_vert:X2,backgroundCube_frag:$2,cube_vert:q2,cube_frag:Y2,depth_vert:K2,depth_frag:Q2,distanceRGBA_vert:Z2,distanceRGBA_frag:J2,equirect_vert:eN,equirect_frag:tN,linedashed_vert:nN,linedashed_frag:iN,meshbasic_vert:rN,meshbasic_frag:sN,meshlambert_vert:oN,meshlambert_frag:aN,meshmatcap_vert:lN,meshmatcap_frag:cN,meshnormal_vert:uN,meshnormal_frag:dN,meshphong_vert:fN,meshphong_frag:hN,meshphysical_vert:pN,meshphysical_frag:mN,meshtoon_vert:gN,meshtoon_frag:vN,points_vert:xN,points_frag:_N,shadow_vert:yN,shadow_frag:SN,sprite_vert:EN,sprite_frag:MN},ce={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},xi={basic:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new it(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Jt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Jt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new it(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Jt([ce.points,ce.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Jt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Jt([ce.common,ce.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Jt([ce.sprite,ce.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Jt([ce.common,ce.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Jt([ce.lights,ce.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};xi.physical={uniforms:Jt([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const oc={r:0,b:0,g:0},Kr=new Zi,wN=new _t;function TN(t,e,n,i,r,s,o){const a=new it(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:e).get(y)),y}function v(_){let y=!1;const C=g(_);C===null?d(a,l):C&&C.isColor&&(d(C,1),y=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,y){const C=g(y);C&&(C.isCubeTexture||C.mapping===Hu)?(u===void 0&&(u=new Cn(new Br(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:Fo(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Kr.copy(y.backgroundRotation),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wN.makeRotationFromEuler(Kr)),u.material.toneMapped=Ze.getTransfer(C.colorSpace)!==ot,(f!==C||h!==C.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=C,h=C.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Cn(new Vu(2,2),new zr({name:"BackgroundMaterial",uniforms:Fo(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(C.colorSpace)!==ot,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=C,h=C.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,y){_.getRGB(oc,GS(t)),i.buffers.color.setClear(oc.r,oc.g,oc.b,y,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(a,l)},render:v,addToRenderList:m,dispose:x}}function bN(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,D,z,H,B){let Y=!1;const W=f(H,z,D);s!==W&&(s=W,c(s.object)),Y=p(S,H,z,B),Y&&g(S,H,z,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(S,D,z,H),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function f(S,D,z){const H=z.wireframe===!0;let B=i[S.id];B===void 0&&(B={},i[S.id]=B);let Y=B[D.id];Y===void 0&&(Y={},B[D.id]=Y);let W=Y[H];return W===void 0&&(W=h(l()),Y[H]=W),W}function h(S){const D=[],z=[],H=[];for(let B=0;B<n;B++)D[B]=0,z[B]=0,H[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:H,object:S,attributes:{},index:null}}function p(S,D,z,H){const B=s.attributes,Y=D.attributes;let W=0;const U=z.getAttributes();for(const P in U)if(U[P].location>=0){const X=B[P];let ne=Y[P];if(ne===void 0&&(P==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),P==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),X===void 0||X.attribute!==ne||ne&&X.data!==ne.data)return!0;W++}return s.attributesNum!==W||s.index!==H}function g(S,D,z,H){const B={},Y=D.attributes;let W=0;const U=z.getAttributes();for(const P in U)if(U[P].location>=0){let X=Y[P];X===void 0&&(P==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),P==="instanceColor"&&S.instanceColor&&(X=S.instanceColor));const ne={};ne.attribute=X,X&&X.data&&(ne.data=X.data),B[P]=ne,W++}s.attributes=B,s.attributesNum=W,s.index=H}function v(){const S=s.newAttributes;for(let D=0,z=S.length;D<z;D++)S[D]=0}function m(S){d(S,0)}function d(S,D){const z=s.newAttributes,H=s.enabledAttributes,B=s.attributeDivisors;z[S]=1,H[S]===0&&(t.enableVertexAttribArray(S),H[S]=1),B[S]!==D&&(t.vertexAttribDivisor(S,D),B[S]=D)}function x(){const S=s.newAttributes,D=s.enabledAttributes;for(let z=0,H=D.length;z<H;z++)D[z]!==S[z]&&(t.disableVertexAttribArray(z),D[z]=0)}function _(S,D,z,H,B,Y,W){W===!0?t.vertexAttribIPointer(S,D,z,B,Y):t.vertexAttribPointer(S,D,z,H,B,Y)}function y(S,D,z,H){v();const B=H.attributes,Y=z.getAttributes(),W=D.defaultAttributeValues;for(const U in Y){const P=Y[U];if(P.location>=0){let G=B[U];if(G===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(G=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(G=S.instanceColor)),G!==void 0){const X=G.normalized,ne=G.itemSize,ge=e.get(G);if(ge===void 0)continue;const Re=ge.buffer,Q=ge.type,ae=ge.bytesPerElement,pe=Q===t.INT||Q===t.UNSIGNED_INT||G.gpuType===hm;if(G.isInterleavedBufferAttribute){const le=G.data,Ae=le.stride,Xe=G.offset;if(le.isInstancedInterleavedBuffer){for(let Pe=0;Pe<P.locationSize;Pe++)d(P.location+Pe,le.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Pe=0;Pe<P.locationSize;Pe++)m(P.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,Re);for(let Pe=0;Pe<P.locationSize;Pe++)_(P.location+Pe,ne/P.locationSize,Q,X,Ae*ae,(Xe+ne/P.locationSize*Pe)*ae,pe)}else{if(G.isInstancedBufferAttribute){for(let le=0;le<P.locationSize;le++)d(P.location+le,G.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let le=0;le<P.locationSize;le++)m(P.location+le);t.bindBuffer(t.ARRAY_BUFFER,Re);for(let le=0;le<P.locationSize;le++)_(P.location+le,ne/P.locationSize,Q,X,ne*ae,ne/P.locationSize*le*ae,pe)}}else if(W!==void 0){const X=W[U];if(X!==void 0)switch(X.length){case 2:t.vertexAttrib2fv(P.location,X);break;case 3:t.vertexAttrib3fv(P.location,X);break;case 4:t.vertexAttrib4fv(P.location,X);break;default:t.vertexAttrib1fv(P.location,X)}}}}x()}function C(){R();for(const S in i){const D=i[S];for(const z in D){const H=D[z];for(const B in H)u(H[B].object),delete H[B];delete D[z]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const z in D){const H=D[z];for(const B in H)u(H[B].object),delete H[B];delete D[z]}delete i[S.id]}function b(S){for(const D in i){const z=i[D];if(z[S.id]===void 0)continue;const H=z[S.id];for(const B in H)u(H[B].object),delete H[B];delete z[S.id]}}function R(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function AN(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];n.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*h[v];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function CN(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==ri&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const R=b===ol&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Qi&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Hi&&!R)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:C,maxSamples:A}}function RN(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new es,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const x=s?0:i,_=x*4;let y=d.clippingState||null;l.value=y,y=u(g,h,_,p);for(let C=0;C!==_;++C)y[C]=n[C];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,y=p;_!==v;++_,y+=4)o.copy(f[_]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function PN(t){let e=new WeakMap;function n(o,a){return a===xh?o.mapping=Do:a===_h&&(o.mapping=Io),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===xh||a===_h)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bR(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const to=4,Yv=[.125,.215,.35,.446,.526,.582],is=20,Jd=new HR,Kv=new it;let ef=null,tf=0,nf=0,rf=!1;const ts=(1+Math.sqrt(5))/2,Vs=1/ts,Qv=[new V(-ts,Vs,0),new V(ts,Vs,0),new V(-Vs,0,ts),new V(Vs,0,ts),new V(0,ts,-Vs),new V(0,ts,Vs),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],NN=new V;class Zv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=NN}=s;ef=this._renderer.getRenderTarget(),tf=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel(),rf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ex(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ef,tf,nf),this._renderer.xr.enabled=rf,e.scissorTest=!1,ac(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Do||e.mapping===Io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ef=this._renderer.getRenderTarget(),tf=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel(),rf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:ol,format:ri,colorSpace:Uo,depthBuffer:!1},r=Jv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jv(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LN(s)),this._blurMaterial=DN(s,e,n)}return r}_compileMaterial(e){const n=new Cn(this._lodPlanes[0],e);this._renderer.compile(n,Jd)}_sceneToCubeUV(e,n,i,r,s){const l=new bn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Kv),f.toneMapping=Lr,f.autoClear=!1;const g=new Ka({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),v=new Cn(new Br,g);let m=!1;const d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,m=!0):(g.color.copy(Kv),m=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):_===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const y=this._cubeSize;ac(r,_*y,x>2?y:0,y,y),f.setRenderTarget(r),m&&f.render(v,l),f.render(e,l)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=d}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Do||e.mapping===Io;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ex());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Cn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ac(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Jd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Qv[(r-s-1)%Qv.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Cn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*is-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):is;m>is&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${is}`);const d=[];let x=0;for(let b=0;b<is;++b){const R=b/v,w=Math.exp(-R*R/2);d.push(w),b===0?x+=w:b<m&&(x+=2*w)}for(let b=0;b<d.length;b++)d[b]=d[b]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const y=this._sizeLods[r],C=3*y*(r>_-to?r-_+to:0),A=4*(this._cubeSize-y);ac(n,C,A,3*y,2*y),l.setRenderTarget(n),l.render(f,Jd)}}function LN(t){const e=[],n=[],i=[];let r=t;const s=t-to+1+Yv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-to?l=Yv[o-t+to-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,d=1,x=new Float32Array(v*g*p),_=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let A=0;A<p;A++){const b=A%3*2/3-1,R=A>2?0:-1,w=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];x.set(w,v*g*A),_.set(h,m*g*A);const S=[A,A,A,A,A,A];y.set(S,d*g*A)}const C=new xn;C.setAttribute("position",new li(x,v)),C.setAttribute("uv",new li(_,m)),C.setAttribute("faceIndex",new li(y,d)),e.push(C),r>to&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Jv(t,e,n){const i=new ws(t,e,n);return i.texture.mapping=Hu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ac(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function DN(t,e,n){const i=new Float32Array(is),r=new V(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function ex(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function tx(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Mm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function IN(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===xh||l===_h,u=l===Do||l===Io;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Zv(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Zv(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function UN(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Pc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function FN(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let _=0,y=x.length;_<y;_+=3){const C=x[_+0],A=x[_+1],b=x[_+2];h.push(C,A,A,b,b,C)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const C=_+0,A=_+1,b=_+2;h.push(C,A,A,b,b,C)}}else return;const m=new(OS(h)?VS:HS)(h,1);m.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ON(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,h*o,g),n.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];n.update(m,i,1)}function f(h,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,v,0,g);let d=0;for(let x=0;x<g;x++)d+=p[x]*v[x];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function kN(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function BN(t,e,n){const i=new WeakMap,r=new bt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*A*4*f),R=new kS(b,C,A,f);R.type=Hi,R.needsUpdate=!0;const w=y*4;for(let D=0;D<f;D++){const z=d[D],H=x[D],B=_[D],Y=C*A*4*D;for(let W=0;W<z.count;W++){const U=W*w;g===!0&&(r.fromBufferAttribute(z,W),b[Y+U+0]=r.x,b[Y+U+1]=r.y,b[Y+U+2]=r.z,b[Y+U+3]=0),v===!0&&(r.fromBufferAttribute(H,W),b[Y+U+4]=r.x,b[Y+U+5]=r.y,b[Y+U+6]=r.z,b[Y+U+7]=0),m===!0&&(r.fromBufferAttribute(B,W),b[Y+U+8]=r.x,b[Y+U+9]=r.y,b[Y+U+10]=r.z,b[Y+U+11]=B.itemSize===4?r.w:1)}}h={count:f,texture:R,size:new at(C,A)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function zN(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const QS=new vn,nx=new YS(1,1),ZS=new kS,JS=new cR,eE=new jS,ix=[],rx=[],sx=new Float32Array(16),ox=new Float32Array(9),ax=new Float32Array(4);function Xo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ix[r];if(s===void 0&&(s=new Float32Array(r),ix[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gu(t,e){let n=rx[e];n===void 0&&(n=new Int32Array(e),rx[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function HN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function VN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function GN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function WN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function jN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;ax.set(i),t.uniformMatrix2fv(this.addr,!1,ax),It(n,i)}}function XN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;ox.set(i),t.uniformMatrix3fv(this.addr,!1,ox),It(n,i)}}function $N(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;sx.set(i),t.uniformMatrix4fv(this.addr,!1,sx),It(n,i)}}function qN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function YN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function KN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function QN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function ZN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function JN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function eL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function tL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function nL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(nx.compareFunction=FS,s=nx):s=QS,n.setTexture2D(e||s,r)}function iL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||JS,r)}function rL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||eE,r)}function sL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ZS,r)}function oL(t){switch(t){case 5126:return HN;case 35664:return VN;case 35665:return GN;case 35666:return WN;case 35674:return jN;case 35675:return XN;case 35676:return $N;case 5124:case 35670:return qN;case 35667:case 35671:return YN;case 35668:case 35672:return KN;case 35669:case 35673:return QN;case 5125:return ZN;case 36294:return JN;case 36295:return eL;case 36296:return tL;case 35678:case 36198:case 36298:case 36306:case 35682:return nL;case 35679:case 36299:case 36307:return iL;case 35680:case 36300:case 36308:case 36293:return rL;case 36289:case 36303:case 36311:case 36292:return sL}}function aL(t,e){t.uniform1fv(this.addr,e)}function lL(t,e){const n=Xo(e,this.size,2);t.uniform2fv(this.addr,n)}function cL(t,e){const n=Xo(e,this.size,3);t.uniform3fv(this.addr,n)}function uL(t,e){const n=Xo(e,this.size,4);t.uniform4fv(this.addr,n)}function dL(t,e){const n=Xo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function fL(t,e){const n=Xo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function hL(t,e){const n=Xo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function pL(t,e){t.uniform1iv(this.addr,e)}function mL(t,e){t.uniform2iv(this.addr,e)}function gL(t,e){t.uniform3iv(this.addr,e)}function vL(t,e){t.uniform4iv(this.addr,e)}function xL(t,e){t.uniform1uiv(this.addr,e)}function _L(t,e){t.uniform2uiv(this.addr,e)}function yL(t,e){t.uniform3uiv(this.addr,e)}function SL(t,e){t.uniform4uiv(this.addr,e)}function EL(t,e,n){const i=this.cache,r=e.length,s=Gu(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||QS,s[o])}function ML(t,e,n){const i=this.cache,r=e.length,s=Gu(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||JS,s[o])}function wL(t,e,n){const i=this.cache,r=e.length,s=Gu(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||eE,s[o])}function TL(t,e,n){const i=this.cache,r=e.length,s=Gu(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||ZS,s[o])}function bL(t){switch(t){case 5126:return aL;case 35664:return lL;case 35665:return cL;case 35666:return uL;case 35674:return dL;case 35675:return fL;case 35676:return hL;case 5124:case 35670:return pL;case 35667:case 35671:return mL;case 35668:case 35672:return gL;case 35669:case 35673:return vL;case 5125:return xL;case 36294:return _L;case 36295:return yL;case 36296:return SL;case 35678:case 36198:case 36298:case 36306:case 35682:return EL;case 35679:case 36299:case 36307:return ML;case 35680:case 36300:case 36308:case 36293:return wL;case 36289:case 36303:case 36311:case 36292:return TL}}class AL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=oL(n.type)}}class CL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bL(n.type)}}class RL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const sf=/(\w+)(\])?(\[|\.)?/g;function lx(t,e){t.seq.push(e),t.map[e.id]=e}function PL(t,e,n){const i=t.name,r=i.length;for(sf.lastIndex=0;;){const s=sf.exec(i),o=sf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){lx(n,c===void 0?new AL(a,t,e):new CL(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new RL(a),lx(n,f)),n=f}}}class Nc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);PL(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function cx(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const NL=37297;let LL=0;function DL(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const ux=new Oe;function IL(t){Ze._getMatrix(ux,Ze.workingColorSpace,t);const e=`mat3( ${ux.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case au:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function dx(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+DL(t.getShaderSource(e),o)}else return r}function UL(t,e){const n=IL(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function FL(t,e){let n;switch(e){case IC:n="Linear";break;case UC:n="Reinhard";break;case FC:n="Cineon";break;case OC:n="ACESFilmic";break;case BC:n="AgX";break;case zC:n="Neutral";break;case kC:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const lc=new V;function OL(){Ze.getLuminanceCoefficients(lc);const t=lc.x.toFixed(4),e=lc.y.toFixed(4),n=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function BL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function zL(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function pa(t){return t!==""}function fx(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(t){return t.replace(HL,GL)}const VL=new Map;function GL(t,e){let n=He[e];if(n===void 0){const i=VL.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qh(n)}const WL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function px(t){return t.replace(WL,jL)}function jL(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mx(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function XL(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===MS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===hC?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function $L(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Do:case Io:e="ENVMAP_TYPE_CUBE";break;case Hu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qL(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Io:e="ENVMAP_MODE_REFRACTION";break}return e}function YL(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case wS:e="ENVMAP_BLENDING_MULTIPLY";break;case LC:e="ENVMAP_BLENDING_MIX";break;case DC:e="ENVMAP_BLENDING_ADD";break}return e}function KL(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function QL(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=XL(n),c=$L(n),u=qL(n),f=YL(n),h=KL(n),p=kL(n),g=BL(s),v=r.createProgram();let m,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(pa).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(pa).join(`
`),d.length>0&&(d+=`
`)):(m=[mx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),d=[mx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Lr?"#define TONE_MAPPING":"",n.toneMapping!==Lr?He.tonemapping_pars_fragment:"",n.toneMapping!==Lr?FL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,UL("linearToOutputTexel",n.outputColorSpace),OL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(pa).join(`
`)),o=Qh(o),o=fx(o,n),o=hx(o,n),a=Qh(a),a=fx(a,n),a=hx(a,n),o=px(o),a=px(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===wv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=x+m+o,y=x+d+a,C=cx(r,r.VERTEX_SHADER,_),A=cx(r,r.FRAGMENT_SHADER,y);r.attachShader(v,C),r.attachShader(v,A),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function b(D){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(v).trim(),H=r.getShaderInfoLog(C).trim(),B=r.getShaderInfoLog(A).trim();let Y=!0,W=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,C,A);else{const U=dx(r,C,"vertex"),P=dx(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+U+`
`+P)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||B==="")&&(W=!1);W&&(D.diagnostics={runnable:Y,programLog:z,vertexShader:{log:H,prefix:m},fragmentShader:{log:B,prefix:d}})}r.deleteShader(C),r.deleteShader(A),R=new Nc(r,v),w=zL(r,v)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,NL)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=LL++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=A,this}let ZL=0;class JL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new eD(e),n.set(e,i)),i}}class eD{constructor(e){this.id=ZL++,this.code=e,this.usedTimes=0}}function tD(t,e,n,i,r,s,o){const a=new BS,l=new JL,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,D,z,H){const B=z.fog,Y=H.geometry,W=w.isMeshStandardMaterial?z.environment:null,U=(w.isMeshStandardMaterial?n:e).get(w.envMap||W),P=U&&U.mapping===Hu?U.image.height:null,G=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const X=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ne=X!==void 0?X.length:0;let ge=0;Y.morphAttributes.position!==void 0&&(ge=1),Y.morphAttributes.normal!==void 0&&(ge=2),Y.morphAttributes.color!==void 0&&(ge=3);let Re,Q,ae,pe;if(G){const rt=xi[G];Re=rt.vertexShader,Q=rt.fragmentShader}else Re=w.vertexShader,Q=w.fragmentShader,l.update(w),ae=l.getVertexShaderID(w),pe=l.getFragmentShaderID(w);const le=t.getRenderTarget(),Ae=t.state.buffers.depth.getReversed(),Xe=H.isInstancedMesh===!0,Pe=H.isBatchedMesh===!0,pt=!!w.map,lt=!!w.matcap,ke=!!U,I=!!w.aoMap,ln=!!w.lightMap,je=!!w.bumpMap,We=!!w.normalMap,we=!!w.displacementMap,Je=!!w.emissiveMap,Te=!!w.metalnessMap,N=!!w.roughnessMap,M=w.anisotropy>0,j=w.clearcoat>0,ee=w.dispersion>0,ie=w.iridescence>0,Z=w.sheen>0,Me=w.transmission>0,de=M&&!!w.anisotropyMap,_e=j&&!!w.clearcoatMap,qe=j&&!!w.clearcoatNormalMap,oe=j&&!!w.clearcoatRoughnessMap,ye=ie&&!!w.iridescenceMap,Ne=ie&&!!w.iridescenceThicknessMap,De=Z&&!!w.sheenColorMap,Se=Z&&!!w.sheenRoughnessMap,$e=!!w.specularMap,Be=!!w.specularColorMap,ct=!!w.specularIntensityMap,F=Me&&!!w.transmissionMap,fe=Me&&!!w.thicknessMap,K=!!w.gradientMap,te=!!w.alphaMap,me=w.alphaTest>0,he=!!w.alphaHash,Ue=!!w.extensions;let St=Lr;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(St=t.toneMapping);const Vt={shaderID:G,shaderType:w.type,shaderName:w.name,vertexShader:Re,fragmentShader:Q,defines:w.defines,customVertexShaderID:ae,customFragmentShaderID:pe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Pe,batchingColor:Pe&&H._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&H.instanceColor!==null,instancingMorph:Xe&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Uo,alphaToCoverage:!!w.alphaToCoverage,map:pt,matcap:lt,envMap:ke,envMapMode:ke&&U.mapping,envMapCubeUVHeight:P,aoMap:I,lightMap:ln,bumpMap:je,normalMap:We,displacementMap:h&&we,emissiveMap:Je,normalMapObjectSpace:We&&w.normalMapType===jC,normalMapTangentSpace:We&&w.normalMapType===WC,metalnessMap:Te,roughnessMap:N,anisotropy:M,anisotropyMap:de,clearcoat:j,clearcoatMap:_e,clearcoatNormalMap:qe,clearcoatRoughnessMap:oe,dispersion:ee,iridescence:ie,iridescenceMap:ye,iridescenceThicknessMap:Ne,sheen:Z,sheenColorMap:De,sheenRoughnessMap:Se,specularMap:$e,specularColorMap:Be,specularIntensityMap:ct,transmission:Me,transmissionMap:F,thicknessMap:fe,gradientMap:K,opaque:w.transparent===!1&&w.blending===uo&&w.alphaToCoverage===!1,alphaMap:te,alphaTest:me,alphaHash:he,combine:w.combine,mapUv:pt&&v(w.map.channel),aoMapUv:I&&v(w.aoMap.channel),lightMapUv:ln&&v(w.lightMap.channel),bumpMapUv:je&&v(w.bumpMap.channel),normalMapUv:We&&v(w.normalMap.channel),displacementMapUv:we&&v(w.displacementMap.channel),emissiveMapUv:Je&&v(w.emissiveMap.channel),metalnessMapUv:Te&&v(w.metalnessMap.channel),roughnessMapUv:N&&v(w.roughnessMap.channel),anisotropyMapUv:de&&v(w.anisotropyMap.channel),clearcoatMapUv:_e&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:qe&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(w.sheenRoughnessMap.channel),specularMapUv:$e&&v(w.specularMap.channel),specularColorMapUv:Be&&v(w.specularColorMap.channel),specularIntensityMapUv:ct&&v(w.specularIntensityMap.channel),transmissionMapUv:F&&v(w.transmissionMap.channel),thicknessMapUv:fe&&v(w.thicknessMap.channel),alphaMapUv:te&&v(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(We||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Y.attributes.uv&&(pt||te),fog:!!B,useFog:w.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ae,skinning:H.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ge,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:St,decodeVideoTexture:pt&&w.map.isVideoTexture===!0&&Ze.getTransfer(w.map.colorSpace)===ot,decodeVideoTextureEmissive:Je&&w.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(w.emissiveMap.colorSpace)===ot,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ki,flipSided:w.side===gn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ue&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&w.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function d(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)S.push(D),S.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(x(S,w),_(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function x(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function _(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){const S=g[w.type];let D;if(S){const z=xi[S];D=ER.clone(z.uniforms)}else D=w.uniforms;return D}function C(w,S){let D;for(let z=0,H=u.length;z<H;z++){const B=u[z];if(B.cacheKey===S){D=B,++D.usedTimes;break}}return D===void 0&&(D=new QL(t,S,w,s),u.push(D)),D}function A(w){if(--w.usedTimes===0){const S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function b(w){l.remove(w)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:R}}function nD(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function iD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function gx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function vx(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,g,v,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=v,d.group=m),e++,d}function a(f,h,p,g,v,m){const d=o(f,h,p,g,v,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,g,v,m){const d=o(f,h,p,g,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||iD),i.length>1&&i.sort(h||gx),r.length>1&&r.sort(h||gx)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function rD(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new vx,t.set(i,[o])):r>=s.length?(o=new vx,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function sD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new it};break;case"SpotLight":n={position:new V,direction:new V,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function oD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let aD=0;function lD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function cD(t){const e=new sD,n=oD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new _t,o=new _t;function a(c){let u=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,x=0,_=0,y=0,C=0,A=0,b=0;c.sort(lD);for(let w=0,S=c.length;w<S;w++){const D=c[w],z=D.color,H=D.intensity,B=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=z.r*H,f+=z.g*H,h+=z.b*H;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],H);b++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const U=D.shadow,P=n.get(D);P.shadowIntensity=U.intensity,P.shadowBias=U.bias,P.shadowNormalBias=U.normalBias,P.shadowRadius=U.radius,P.shadowMapSize=U.mapSize,i.directionalShadow[p]=P,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=D.shadow.matrix,x++}i.directional[p]=W,p++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(z).multiplyScalar(H),W.distance=B,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[v]=W;const U=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,U.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[v]=U.matrix,D.castShadow){const P=n.get(D);P.shadowIntensity=U.intensity,P.shadowBias=U.bias,P.shadowNormalBias=U.normalBias,P.shadowRadius=U.radius,P.shadowMapSize=U.mapSize,i.spotShadow[v]=P,i.spotShadowMap[v]=Y,y++}v++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(z).multiplyScalar(H),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=W,m++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const U=D.shadow,P=n.get(D);P.shadowIntensity=U.intensity,P.shadowBias=U.bias,P.shadowNormalBias=U.normalBias,P.shadowRadius=U.radius,P.shadowMapSize=U.mapSize,P.shadowCameraNear=U.camera.near,P.shadowCameraFar=U.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=D.shadow.matrix,_++}i.point[g]=W,g++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(H),W.groundColor.copy(D.groundColor).multiplyScalar(H),i.hemi[d]=W,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==x||R.numPointShadows!==_||R.numSpotShadows!==y||R.numSpotMaps!==C||R.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=x,R.numPointShadows=_,R.numSpotShadows=y,R.numSpotMaps=C,R.numLightProbes=b,i.version=aD++)}function l(c,u){let f=0,h=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){const _=c[d];if(_.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(_.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function xx(t){const e=new cD(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function uD(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new xx(t),e.set(r,[a])):s>=o.length?(a=new xx(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const dD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hD(t,e,n){let i=new $S;const r=new at,s=new at,o=new bt,a=new BR({depthPacking:GC}),l=new zR,c={},u=n.maxTextureSize,f={[kr]:gn,[gn]:kr,[ki]:ki},h=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:dD,fragmentShader:fD}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new xn;g.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Cn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=MS;let d=this.type;this.render=function(A,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Nr),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=d!==Ui&&this.type===Ui,B=d===Ui&&this.type!==Ui;for(let Y=0,W=A.length;Y<W;Y++){const U=A[Y],P=U.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const G=P.getFrameExtents();if(r.multiply(G),s.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/G.x),r.x=s.x*G.x,P.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/G.y),r.y=s.y*G.y,P.mapSize.y=s.y)),P.map===null||H===!0||B===!0){const ne=this.type!==Ui?{minFilter:ai,magFilter:ai}:{};P.map!==null&&P.map.dispose(),P.map=new ws(r.x,r.y,ne),P.map.texture.name=U.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const X=P.getViewportCount();for(let ne=0;ne<X;ne++){const ge=P.getViewport(ne);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),z.viewport(o),P.updateMatrices(U,ne),i=P.getFrustum(),y(b,R,P.camera,U,this.type)}P.isPointLightShadow!==!0&&this.type===Ui&&x(P,R),P.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(w,S,D)};function x(A,b){const R=e.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ws(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(b,null,R,h,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(b,null,R,p,v,null)}function _(A,b,R,w){let S=null;const D=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)S=D;else if(S=R.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=S.uuid,H=b.uuid;let B=c[z];B===void 0&&(B={},c[z]=B);let Y=B[H];Y===void 0&&(Y=S.clone(),B[H]=Y,b.addEventListener("dispose",C)),S=Y}if(S.visible=b.visible,S.wireframe=b.wireframe,w===Ui?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:f[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=t.properties.get(S);z.light=R}return S}function y(A,b,R,w,S){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Ui)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const H=e.update(A),B=A.material;if(Array.isArray(B)){const Y=H.groups;for(let W=0,U=Y.length;W<U;W++){const P=Y[W],G=B[P.materialIndex];if(G&&G.visible){const X=_(A,G,w,S);A.onBeforeShadow(t,A,b,R,H,X,P),t.renderBufferDirect(R,null,H,X,A,P),A.onAfterShadow(t,A,b,R,H,X,P)}}}else if(B.visible){const Y=_(A,B,w,S);A.onBeforeShadow(t,A,b,R,H,Y,null),t.renderBufferDirect(R,null,H,Y,A,null),A.onAfterShadow(t,A,b,R,H,Y,null)}}const z=A.children;for(let H=0,B=z.length;H<B;H++)y(z[H],b,R,w,S)}function C(A){A.target.removeEventListener("dispose",C);for(const R in c){const w=c[R],S=A.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const pD={[dh]:fh,[hh]:gh,[ph]:vh,[Lo]:mh,[fh]:dh,[gh]:hh,[vh]:ph,[mh]:Lo};function mD(t,e){function n(){let F=!1;const fe=new bt;let K=null;const te=new bt(0,0,0,0);return{setMask:function(me){K!==me&&!F&&(t.colorMask(me,me,me,me),K=me)},setLocked:function(me){F=me},setClear:function(me,he,Ue,St,Vt){Vt===!0&&(me*=St,he*=St,Ue*=St),fe.set(me,he,Ue,St),te.equals(fe)===!1&&(t.clearColor(me,he,Ue,St),te.copy(fe))},reset:function(){F=!1,K=null,te.set(-1,0,0,0)}}}function i(){let F=!1,fe=!1,K=null,te=null,me=null;return{setReversed:function(he){if(fe!==he){const Ue=e.get("EXT_clip_control");he?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),fe=he;const St=me;me=null,this.setClear(St)}},getReversed:function(){return fe},setTest:function(he){he?le(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(he){K!==he&&!F&&(t.depthMask(he),K=he)},setFunc:function(he){if(fe&&(he=pD[he]),te!==he){switch(he){case dh:t.depthFunc(t.NEVER);break;case fh:t.depthFunc(t.ALWAYS);break;case hh:t.depthFunc(t.LESS);break;case Lo:t.depthFunc(t.LEQUAL);break;case ph:t.depthFunc(t.EQUAL);break;case mh:t.depthFunc(t.GEQUAL);break;case gh:t.depthFunc(t.GREATER);break;case vh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=he}},setLocked:function(he){F=he},setClear:function(he){me!==he&&(fe&&(he=1-he),t.clearDepth(he),me=he)},reset:function(){F=!1,K=null,te=null,me=null,fe=!1}}}function r(){let F=!1,fe=null,K=null,te=null,me=null,he=null,Ue=null,St=null,Vt=null;return{setTest:function(rt){F||(rt?le(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(rt){fe!==rt&&!F&&(t.stencilMask(rt),fe=rt)},setFunc:function(rt,$n,Ai){(K!==rt||te!==$n||me!==Ai)&&(t.stencilFunc(rt,$n,Ai),K=rt,te=$n,me=Ai)},setOp:function(rt,$n,Ai){(he!==rt||Ue!==$n||St!==Ai)&&(t.stencilOp(rt,$n,Ai),he=rt,Ue=$n,St=Ai)},setLocked:function(rt){F=rt},setClear:function(rt){Vt!==rt&&(t.clearStencil(rt),Vt=rt)},reset:function(){F=!1,fe=null,K=null,te=null,me=null,he=null,Ue=null,St=null,Vt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],g=null,v=!1,m=null,d=null,x=null,_=null,y=null,C=null,A=null,b=new it(0,0,0),R=0,w=!1,S=null,D=null,z=null,H=null,B=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,U=0;const P=t.getParameter(t.VERSION);P.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(P)[1]),W=U>=1):P.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),W=U>=2);let G=null,X={};const ne=t.getParameter(t.SCISSOR_BOX),ge=t.getParameter(t.VIEWPORT),Re=new bt().fromArray(ne),Q=new bt().fromArray(ge);function ae(F,fe,K,te){const me=new Uint8Array(4),he=t.createTexture();t.bindTexture(F,he),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<K;Ue++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(fe+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return he}const pe={};pe[t.TEXTURE_2D]=ae(t.TEXTURE_2D,t.TEXTURE_2D,1),pe[t.TEXTURE_CUBE_MAP]=ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[t.TEXTURE_2D_ARRAY]=ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),pe[t.TEXTURE_3D]=ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(Lo),je(!1),We(xv),le(t.CULL_FACE),I(Nr);function le(F){u[F]!==!0&&(t.enable(F),u[F]=!0)}function Ae(F){u[F]!==!1&&(t.disable(F),u[F]=!1)}function Xe(F,fe){return f[F]!==fe?(t.bindFramebuffer(F,fe),f[F]=fe,F===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=fe),F===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Pe(F,fe){let K=p,te=!1;if(F){K=h.get(fe),K===void 0&&(K=[],h.set(fe,K));const me=F.textures;if(K.length!==me.length||K[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Ue=me.length;he<Ue;he++)K[he]=t.COLOR_ATTACHMENT0+he;K.length=me.length,te=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,te=!0);te&&t.drawBuffers(K)}function pt(F){return g!==F?(t.useProgram(F),g=F,!0):!1}const lt={[ns]:t.FUNC_ADD,[mC]:t.FUNC_SUBTRACT,[gC]:t.FUNC_REVERSE_SUBTRACT};lt[vC]=t.MIN,lt[xC]=t.MAX;const ke={[_C]:t.ZERO,[yC]:t.ONE,[SC]:t.SRC_COLOR,[ch]:t.SRC_ALPHA,[AC]:t.SRC_ALPHA_SATURATE,[TC]:t.DST_COLOR,[MC]:t.DST_ALPHA,[EC]:t.ONE_MINUS_SRC_COLOR,[uh]:t.ONE_MINUS_SRC_ALPHA,[bC]:t.ONE_MINUS_DST_COLOR,[wC]:t.ONE_MINUS_DST_ALPHA,[CC]:t.CONSTANT_COLOR,[RC]:t.ONE_MINUS_CONSTANT_COLOR,[PC]:t.CONSTANT_ALPHA,[NC]:t.ONE_MINUS_CONSTANT_ALPHA};function I(F,fe,K,te,me,he,Ue,St,Vt,rt){if(F===Nr){v===!0&&(Ae(t.BLEND),v=!1);return}if(v===!1&&(le(t.BLEND),v=!0),F!==pC){if(F!==m||rt!==w){if((d!==ns||y!==ns)&&(t.blendEquation(t.FUNC_ADD),d=ns,y=ns),rt)switch(F){case uo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _v:t.blendFunc(t.ONE,t.ONE);break;case yv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case uo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _v:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case yv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,_=null,C=null,A=null,b.set(0,0,0),R=0,m=F,w=rt}return}me=me||fe,he=he||K,Ue=Ue||te,(fe!==d||me!==y)&&(t.blendEquationSeparate(lt[fe],lt[me]),d=fe,y=me),(K!==x||te!==_||he!==C||Ue!==A)&&(t.blendFuncSeparate(ke[K],ke[te],ke[he],ke[Ue]),x=K,_=te,C=he,A=Ue),(St.equals(b)===!1||Vt!==R)&&(t.blendColor(St.r,St.g,St.b,Vt),b.copy(St),R=Vt),m=F,w=!1}function ln(F,fe){F.side===ki?Ae(t.CULL_FACE):le(t.CULL_FACE);let K=F.side===gn;fe&&(K=!K),je(K),F.blending===uo&&F.transparent===!1?I(Nr):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const te=F.stencilWrite;a.setTest(te),te&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Je(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(F){S!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),S=F)}function We(F){F!==dC?(le(t.CULL_FACE),F!==D&&(F===xv?t.cullFace(t.BACK):F===fC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),D=F}function we(F){F!==z&&(W&&t.lineWidth(F),z=F)}function Je(F,fe,K){F?(le(t.POLYGON_OFFSET_FILL),(H!==fe||B!==K)&&(t.polygonOffset(fe,K),H=fe,B=K)):Ae(t.POLYGON_OFFSET_FILL)}function Te(F){F?le(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function N(F){F===void 0&&(F=t.TEXTURE0+Y-1),G!==F&&(t.activeTexture(F),G=F)}function M(F,fe,K){K===void 0&&(G===null?K=t.TEXTURE0+Y-1:K=G);let te=X[K];te===void 0&&(te={type:void 0,texture:void 0},X[K]=te),(te.type!==F||te.texture!==fe)&&(G!==K&&(t.activeTexture(K),G=K),t.bindTexture(F,fe||pe[F]),te.type=F,te.texture=fe)}function j(){const F=X[G];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ee(){try{t.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{t.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{t.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{t.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{t.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{t.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qe(){try{t.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{t.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{t.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{t.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(F){Re.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Re.copy(F))}function Se(F){Q.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Q.copy(F))}function $e(F,fe){let K=c.get(fe);K===void 0&&(K=new WeakMap,c.set(fe,K));let te=K.get(F);te===void 0&&(te=t.getUniformBlockIndex(fe,F.name),K.set(F,te))}function Be(F,fe){const te=c.get(fe).get(F);l.get(fe)!==te&&(t.uniformBlockBinding(fe,te,F.__bindingPointIndex),l.set(fe,te))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},G=null,X={},f={},h=new WeakMap,p=[],g=null,v=!1,m=null,d=null,x=null,_=null,y=null,C=null,A=null,b=new it(0,0,0),R=0,w=!1,S=null,D=null,z=null,H=null,B=null,Re.set(0,0,t.canvas.width,t.canvas.height),Q.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Ae,bindFramebuffer:Xe,drawBuffers:Pe,useProgram:pt,setBlending:I,setMaterial:ln,setFlipSided:je,setCullFace:We,setLineWidth:we,setPolygonOffset:Je,setScissorTest:Te,activeTexture:N,bindTexture:M,unbindTexture:j,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:ye,texImage3D:Ne,updateUBOMapping:$e,uniformBlockBinding:Be,texStorage2D:qe,texStorage3D:oe,texSubImage2D:Z,texSubImage3D:Me,compressedTexSubImage2D:de,compressedTexSubImage3D:_e,scissor:De,viewport:Se,reset:ct}}function gD(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,M){return p?new OffscreenCanvas(N,M):cu("canvas")}function v(N,M,j){let ee=1;const ie=Te(N);if((ie.width>j||ie.height>j)&&(ee=j/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Z=Math.floor(ee*ie.width),Me=Math.floor(ee*ie.height);f===void 0&&(f=g(Z,Me));const de=M?g(Z,Me):f;return de.width=Z,de.height=Me,de.getContext("2d").drawImage(N,0,0,Z,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Z+"x"+Me+")."),de}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),N;return N}function m(N){return N.generateMipmaps}function d(N){t.generateMipmap(N)}function x(N){return N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?t.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(N,M,j,ee,ie=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Z=M;if(M===t.RED&&(j===t.FLOAT&&(Z=t.R32F),j===t.HALF_FLOAT&&(Z=t.R16F),j===t.UNSIGNED_BYTE&&(Z=t.R8)),M===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(Z=t.R8UI),j===t.UNSIGNED_SHORT&&(Z=t.R16UI),j===t.UNSIGNED_INT&&(Z=t.R32UI),j===t.BYTE&&(Z=t.R8I),j===t.SHORT&&(Z=t.R16I),j===t.INT&&(Z=t.R32I)),M===t.RG&&(j===t.FLOAT&&(Z=t.RG32F),j===t.HALF_FLOAT&&(Z=t.RG16F),j===t.UNSIGNED_BYTE&&(Z=t.RG8)),M===t.RG_INTEGER&&(j===t.UNSIGNED_BYTE&&(Z=t.RG8UI),j===t.UNSIGNED_SHORT&&(Z=t.RG16UI),j===t.UNSIGNED_INT&&(Z=t.RG32UI),j===t.BYTE&&(Z=t.RG8I),j===t.SHORT&&(Z=t.RG16I),j===t.INT&&(Z=t.RG32I)),M===t.RGB_INTEGER&&(j===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),j===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),j===t.UNSIGNED_INT&&(Z=t.RGB32UI),j===t.BYTE&&(Z=t.RGB8I),j===t.SHORT&&(Z=t.RGB16I),j===t.INT&&(Z=t.RGB32I)),M===t.RGBA_INTEGER&&(j===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),j===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),j===t.UNSIGNED_INT&&(Z=t.RGBA32UI),j===t.BYTE&&(Z=t.RGBA8I),j===t.SHORT&&(Z=t.RGBA16I),j===t.INT&&(Z=t.RGBA32I)),M===t.RGB&&j===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),M===t.RGBA){const Me=ie?au:Ze.getTransfer(ee);j===t.FLOAT&&(Z=t.RGBA32F),j===t.HALF_FLOAT&&(Z=t.RGBA16F),j===t.UNSIGNED_BYTE&&(Z=Me===ot?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(N,M){let j;return N?M===null||M===Ms||M===$a?j=t.DEPTH24_STENCIL8:M===Hi?j=t.DEPTH32F_STENCIL8:M===Xa&&(j=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ms||M===$a?j=t.DEPTH_COMPONENT24:M===Hi?j=t.DEPTH_COMPONENT32F:M===Xa&&(j=t.DEPTH_COMPONENT16),j}function C(N,M){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==ai&&N.minFilter!==yi?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function A(N){const M=N.target;M.removeEventListener("dispose",A),R(M),M.isVideoTexture&&u.delete(M)}function b(N){const M=N.target;M.removeEventListener("dispose",b),S(M)}function R(N){const M=i.get(N);if(M.__webglInit===void 0)return;const j=N.source,ee=h.get(j);if(ee){const ie=ee[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(N),Object.keys(ee).length===0&&h.delete(j)}i.remove(N)}function w(N){const M=i.get(N);t.deleteTexture(M.__webglTexture);const j=N.source,ee=h.get(j);delete ee[M.__cacheKey],o.memory.textures--}function S(N){const M=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let ie=0;ie<M.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(M.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[ee]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const j=N.textures;for(let ee=0,ie=j.length;ee<ie;ee++){const Z=i.get(j[ee]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(j[ee])}i.remove(N)}let D=0;function z(){D=0}function H(){const N=D;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),D+=1,N}function B(N){const M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.colorSpace),M.join()}function Y(N,M){const j=i.get(N);if(N.isVideoTexture&&we(N),N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){const ee=N.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(j,N,M);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+M)}function W(N,M){const j=i.get(N);if(N.version>0&&j.__version!==N.version){Q(j,N,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+M)}function U(N,M){const j=i.get(N);if(N.version>0&&j.__version!==N.version){Q(j,N,M);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+M)}function P(N,M){const j=i.get(N);if(N.version>0&&j.__version!==N.version){ae(j,N,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+M)}const G={[yh]:t.REPEAT,[as]:t.CLAMP_TO_EDGE,[Sh]:t.MIRRORED_REPEAT},X={[ai]:t.NEAREST,[HC]:t.NEAREST_MIPMAP_NEAREST,[Ul]:t.NEAREST_MIPMAP_LINEAR,[yi]:t.LINEAR,[Ad]:t.LINEAR_MIPMAP_NEAREST,[ls]:t.LINEAR_MIPMAP_LINEAR},ne={[XC]:t.NEVER,[ZC]:t.ALWAYS,[$C]:t.LESS,[FS]:t.LEQUAL,[qC]:t.EQUAL,[QC]:t.GEQUAL,[YC]:t.GREATER,[KC]:t.NOTEQUAL};function ge(N,M){if(M.type===Hi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===yi||M.magFilter===Ad||M.magFilter===Ul||M.magFilter===ls||M.minFilter===yi||M.minFilter===Ad||M.minFilter===Ul||M.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,G[M.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,G[M.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,G[M.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,X[M.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,X[M.minFilter]),M.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ai||M.minFilter!==Ul&&M.minFilter!==ls||M.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Re(N,M){let j=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",A));const ee=M.source;let ie=h.get(ee);ie===void 0&&(ie={},h.set(ee,ie));const Z=B(M);if(Z!==N.__cacheKey){ie[Z]===void 0&&(ie[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ie[Z].usedTimes++;const Me=ie[N.__cacheKey];Me!==void 0&&(ie[N.__cacheKey].usedTimes--,Me.usedTimes===0&&w(M)),N.__cacheKey=Z,N.__webglTexture=ie[Z].texture}return j}function Q(N,M,j){let ee=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=t.TEXTURE_3D);const ie=Re(N,M),Z=M.source;n.bindTexture(ee,N.__webglTexture,t.TEXTURE0+j);const Me=i.get(Z);if(Z.version!==Me.__version||ie===!0){n.activeTexture(t.TEXTURE0+j);const de=Ze.getPrimaries(Ze.workingColorSpace),_e=M.colorSpace===mr?null:Ze.getPrimaries(M.colorSpace),qe=M.colorSpace===mr||de===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let oe=v(M.image,!1,r.maxTextureSize);oe=Je(M,oe);const ye=s.convert(M.format,M.colorSpace),Ne=s.convert(M.type);let De=_(M.internalFormat,ye,Ne,M.colorSpace,M.isVideoTexture);ge(ee,M);let Se;const $e=M.mipmaps,Be=M.isVideoTexture!==!0,ct=Me.__version===void 0||ie===!0,F=Z.dataReady,fe=C(M,oe);if(M.isDepthTexture)De=y(M.format===Ya,M.type),ct&&(Be?n.texStorage2D(t.TEXTURE_2D,1,De,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,De,oe.width,oe.height,0,ye,Ne,null));else if(M.isDataTexture)if($e.length>0){Be&&ct&&n.texStorage2D(t.TEXTURE_2D,fe,De,$e[0].width,$e[0].height);for(let K=0,te=$e.length;K<te;K++)Se=$e[K],Be?F&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Se.width,Se.height,ye,Ne,Se.data):n.texImage2D(t.TEXTURE_2D,K,De,Se.width,Se.height,0,ye,Ne,Se.data);M.generateMipmaps=!1}else Be?(ct&&n.texStorage2D(t.TEXTURE_2D,fe,De,oe.width,oe.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,ye,Ne,oe.data)):n.texImage2D(t.TEXTURE_2D,0,De,oe.width,oe.height,0,ye,Ne,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Be&&ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,De,$e[0].width,$e[0].height,oe.depth);for(let K=0,te=$e.length;K<te;K++)if(Se=$e[K],M.format!==ri)if(ye!==null)if(Be){if(F)if(M.layerUpdates.size>0){const me=qv(Se.width,Se.height,M.format,M.type);for(const he of M.layerUpdates){const Ue=Se.data.subarray(he*me/Se.data.BYTES_PER_ELEMENT,(he+1)*me/Se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,he,Se.width,Se.height,1,ye,Ue)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Se.width,Se.height,oe.depth,ye,Se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,De,Se.width,Se.height,oe.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Se.width,Se.height,oe.depth,ye,Ne,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,De,Se.width,Se.height,oe.depth,0,ye,Ne,Se.data)}else{Be&&ct&&n.texStorage2D(t.TEXTURE_2D,fe,De,$e[0].width,$e[0].height);for(let K=0,te=$e.length;K<te;K++)Se=$e[K],M.format!==ri?ye!==null?Be?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,Se.width,Se.height,ye,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,K,De,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?F&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Se.width,Se.height,ye,Ne,Se.data):n.texImage2D(t.TEXTURE_2D,K,De,Se.width,Se.height,0,ye,Ne,Se.data)}else if(M.isDataArrayTexture)if(Be){if(ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,De,oe.width,oe.height,oe.depth),F)if(M.layerUpdates.size>0){const K=qv(oe.width,oe.height,M.format,M.type);for(const te of M.layerUpdates){const me=oe.data.subarray(te*K/oe.data.BYTES_PER_ELEMENT,(te+1)*K/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,oe.width,oe.height,1,ye,Ne,me)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ye,Ne,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,oe.width,oe.height,oe.depth,0,ye,Ne,oe.data);else if(M.isData3DTexture)Be?(ct&&n.texStorage3D(t.TEXTURE_3D,fe,De,oe.width,oe.height,oe.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ye,Ne,oe.data)):n.texImage3D(t.TEXTURE_3D,0,De,oe.width,oe.height,oe.depth,0,ye,Ne,oe.data);else if(M.isFramebufferTexture){if(ct)if(Be)n.texStorage2D(t.TEXTURE_2D,fe,De,oe.width,oe.height);else{let K=oe.width,te=oe.height;for(let me=0;me<fe;me++)n.texImage2D(t.TEXTURE_2D,me,De,K,te,0,ye,Ne,null),K>>=1,te>>=1}}else if($e.length>0){if(Be&&ct){const K=Te($e[0]);n.texStorage2D(t.TEXTURE_2D,fe,De,K.width,K.height)}for(let K=0,te=$e.length;K<te;K++)Se=$e[K],Be?F&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ye,Ne,Se):n.texImage2D(t.TEXTURE_2D,K,De,ye,Ne,Se);M.generateMipmaps=!1}else if(Be){if(ct){const K=Te(oe);n.texStorage2D(t.TEXTURE_2D,fe,De,K.width,K.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,Ne,oe)}else n.texImage2D(t.TEXTURE_2D,0,De,ye,Ne,oe);m(M)&&d(ee),Me.__version=Z.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function ae(N,M,j){if(M.image.length!==6)return;const ee=Re(N,M),ie=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+j);const Z=i.get(ie);if(ie.version!==Z.__version||ee===!0){n.activeTexture(t.TEXTURE0+j);const Me=Ze.getPrimaries(Ze.workingColorSpace),de=M.colorSpace===mr?null:Ze.getPrimaries(M.colorSpace),_e=M.colorSpace===mr||Me===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const qe=M.isCompressedTexture||M.image[0].isCompressedTexture,oe=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let te=0;te<6;te++)!qe&&!oe?ye[te]=v(M.image[te],!0,r.maxCubemapSize):ye[te]=oe?M.image[te].image:M.image[te],ye[te]=Je(M,ye[te]);const Ne=ye[0],De=s.convert(M.format,M.colorSpace),Se=s.convert(M.type),$e=_(M.internalFormat,De,Se,M.colorSpace),Be=M.isVideoTexture!==!0,ct=Z.__version===void 0||ee===!0,F=ie.dataReady;let fe=C(M,Ne);ge(t.TEXTURE_CUBE_MAP,M);let K;if(qe){Be&&ct&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,$e,Ne.width,Ne.height);for(let te=0;te<6;te++){K=ye[te].mipmaps;for(let me=0;me<K.length;me++){const he=K[me];M.format!==ri?De!==null?Be?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,0,0,he.width,he.height,De,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,$e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,0,0,he.width,he.height,De,Se,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,$e,he.width,he.height,0,De,Se,he.data)}}}else{if(K=M.mipmaps,Be&&ct){K.length>0&&fe++;const te=Te(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,$e,te.width,te.height)}for(let te=0;te<6;te++)if(oe){Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ye[te].width,ye[te].height,De,Se,ye[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,$e,ye[te].width,ye[te].height,0,De,Se,ye[te].data);for(let me=0;me<K.length;me++){const Ue=K[me].image[te].image;Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,0,0,Ue.width,Ue.height,De,Se,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,$e,Ue.width,Ue.height,0,De,Se,Ue.data)}}else{Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,De,Se,ye[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,$e,De,Se,ye[te]);for(let me=0;me<K.length;me++){const he=K[me];Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,0,0,De,Se,he.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,$e,De,Se,he.image[te])}}}m(M)&&d(t.TEXTURE_CUBE_MAP),Z.__version=ie.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function pe(N,M,j,ee,ie,Z){const Me=s.convert(j.format,j.colorSpace),de=s.convert(j.type),_e=_(j.internalFormat,Me,de,j.colorSpace),qe=i.get(M),oe=i.get(j);if(oe.__renderTarget=M,!qe.__hasExternalTextures){const ye=Math.max(1,M.width>>Z),Ne=Math.max(1,M.height>>Z);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,Z,_e,ye,Ne,M.depth,0,Me,de,null):n.texImage2D(ie,Z,_e,ye,Ne,0,Me,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),We(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ie,oe.__webglTexture,0,je(M)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ie,oe.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(N,M,j){if(t.bindRenderbuffer(t.RENDERBUFFER,N),M.depthBuffer){const ee=M.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,Z=y(M.stencilBuffer,ie),Me=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=je(M);We(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,Z,M.width,M.height):j?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,Z,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Z,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,N)}else{const ee=M.textures;for(let ie=0;ie<ee.length;ie++){const Z=ee[ie],Me=s.convert(Z.format,Z.colorSpace),de=s.convert(Z.type),_e=_(Z.internalFormat,Me,de,Z.colorSpace),qe=je(M);j&&We(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,_e,M.width,M.height):We(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,qe,_e,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,_e,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ae(N,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(M.depthTexture);ee.__renderTarget=M,(!ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const ie=ee.__webglTexture,Z=je(M);if(M.depthTexture.format===qa)We(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(M.depthTexture.format===Ya)We(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Xe(N){const M=i.get(N),j=N.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==N.depthTexture){const ee=N.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const ie=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),M.__depthDisposeCallback=ie}M.__boundDepthTexture=ee}if(N.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Ae(M.__webglFramebuffer,N)}else if(j){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=t.createRenderbuffer(),le(M.__webglDepthbuffer[ee],N,!1);else{const ie=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Z)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),le(M.__webglDepthbuffer,N,!1);else{const ee=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(N,M,j){const ee=i.get(N);M!==void 0&&pe(ee.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&Xe(N)}function pt(N){const M=N.texture,j=i.get(N),ee=i.get(M);N.addEventListener("dispose",b);const ie=N.textures,Z=N.isWebGLCubeRenderTarget===!0,Me=ie.length>1;if(Me||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=M.version,o.memory.textures++),Z){j.__webglFramebuffer=[];for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer[de]=[];for(let _e=0;_e<M.mipmaps.length;_e++)j.__webglFramebuffer[de][_e]=t.createFramebuffer()}else j.__webglFramebuffer[de]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)j.__webglFramebuffer[de]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(Me)for(let de=0,_e=ie.length;de<_e;de++){const qe=i.get(ie[de]);qe.__webglTexture===void 0&&(qe.__webglTexture=t.createTexture(),o.memory.textures++)}if(N.samples>0&&We(N)===!1){j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let de=0;de<ie.length;de++){const _e=ie[de];j.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[de]);const qe=s.convert(_e.format,_e.colorSpace),oe=s.convert(_e.type),ye=_(_e.internalFormat,qe,oe,_e.colorSpace,N.isXRRenderTarget===!0),Ne=je(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,ye,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,j.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),le(j.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),ge(t.TEXTURE_CUBE_MAP,M);for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)pe(j.__webglFramebuffer[de][_e],N,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,_e);else pe(j.__webglFramebuffer[de],N,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(M)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let de=0,_e=ie.length;de<_e;de++){const qe=ie[de],oe=i.get(qe);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),ge(t.TEXTURE_2D,qe),pe(j.__webglFramebuffer,N,qe,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),m(qe)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(de=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,ee.__webglTexture),ge(de,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)pe(j.__webglFramebuffer[_e],N,M,t.COLOR_ATTACHMENT0,de,_e);else pe(j.__webglFramebuffer,N,M,t.COLOR_ATTACHMENT0,de,0);m(M)&&d(de),n.unbindTexture()}N.depthBuffer&&Xe(N)}function lt(N){const M=N.textures;for(let j=0,ee=M.length;j<ee;j++){const ie=M[j];if(m(ie)){const Z=x(N),Me=i.get(ie).__webglTexture;n.bindTexture(Z,Me),d(Z),n.unbindTexture()}}}const ke=[],I=[];function ln(N){if(N.samples>0){if(We(N)===!1){const M=N.textures,j=N.width,ee=N.height;let ie=t.COLOR_BUFFER_BIT;const Z=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(N),de=M.length>1;if(de)for(let _e=0;_e<M.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);const qe=i.get(M[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,qe,0)}t.blitFramebuffer(0,0,j,ee,0,0,j,ee,ie,t.NEAREST),l===!0&&(ke.length=0,I.length=0,ke.push(t.COLOR_ATTACHMENT0+_e),N.depthBuffer&&N.resolveDepthBuffer===!1&&(ke.push(Z),I.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,I)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let _e=0;_e<M.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);const qe=i.get(M[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,qe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const M=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function je(N){return Math.min(r.maxSamples,N.samples)}function We(N){const M=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function we(N){const M=o.render.frame;u.get(N)!==M&&(u.set(N,M),N.update())}function Je(N,M){const j=N.colorSpace,ee=N.format,ie=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||j!==Uo&&j!==mr&&(Ze.getTransfer(j)===ot?(ee!==ri||ie!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),M}function Te(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=U,this.setTextureCube=P,this.rebindTextures=Pe,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=We}function vD(t,e){function n(i,r=mr){let s;const o=Ze.getTransfer(r);if(i===Qi)return t.UNSIGNED_BYTE;if(i===pm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===mm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===CS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===bS)return t.BYTE;if(i===AS)return t.SHORT;if(i===Xa)return t.UNSIGNED_SHORT;if(i===hm)return t.INT;if(i===Ms)return t.UNSIGNED_INT;if(i===Hi)return t.FLOAT;if(i===ol)return t.HALF_FLOAT;if(i===RS)return t.ALPHA;if(i===PS)return t.RGB;if(i===ri)return t.RGBA;if(i===NS)return t.LUMINANCE;if(i===LS)return t.LUMINANCE_ALPHA;if(i===qa)return t.DEPTH_COMPONENT;if(i===Ya)return t.DEPTH_STENCIL;if(i===DS)return t.RED;if(i===gm)return t.RED_INTEGER;if(i===IS)return t.RG;if(i===vm)return t.RG_INTEGER;if(i===xm)return t.RGBA_INTEGER;if(i===wc||i===Tc||i===bc||i===Ac)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===wc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===wc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ac)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Eh||i===Mh||i===wh||i===Th)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Eh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Th)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bh||i===Ah||i===Ch)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===bh||i===Ah)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ch)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rh||i===Ph||i===Nh||i===Lh||i===Dh||i===Ih||i===Uh||i===Fh||i===Oh||i===kh||i===Bh||i===zh||i===Hh||i===Vh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Rh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ph)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ih)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Oh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cc||i===Gh||i===Wh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Cc)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===US||i===jh||i===Xh||i===$h)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Cc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===jh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$h)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$a?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const xD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_D=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new vn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new zr({vertexShader:xD,fragmentShader:_D,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Cn(new Vu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SD extends Wo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const v=new yD,m=n.getContextAttributes();let d=null,x=null;const _=[],y=[],C=new at;let A=null;const b=new bn;b.viewport=new bt;const R=new bn;R.viewport=new bt;const w=[b,R],S=new VR;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=_[Q];return ae===void 0&&(ae=new qd,_[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=_[Q];return ae===void 0&&(ae=new qd,_[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=_[Q];return ae===void 0&&(ae=new qd,_[Q]=ae),ae.getHandSpace()};function H(Q){const ae=y.indexOf(Q.inputSource);if(ae===-1)return;const pe=_[ae];pe!==void 0&&(pe.update(Q.inputSource,Q.frame,c||o),pe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function B(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",Y);for(let Q=0;Q<_.length;Q++){const ae=y[Q];ae!==null&&(y[Q]=null,_[Q].disconnect(ae))}D=null,z=null,v.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,x=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",B),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,le=null,Ae=null;m.depth&&(Ae=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pe=m.stencil?Ya:qa,le=m.stencil?$a:Ms);const Xe={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Xe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new ws(h.textureWidth,h.textureHeight,{format:ri,type:Qi,depthTexture:new YS(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const pe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,pe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ws(p.framebufferWidth,p.framebufferHeight,{format:ri,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Re.setContext(r),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(Q){for(let ae=0;ae<Q.removed.length;ae++){const pe=Q.removed[ae],le=y.indexOf(pe);le>=0&&(y[le]=null,_[le].disconnect(pe))}for(let ae=0;ae<Q.added.length;ae++){const pe=Q.added[ae];let le=y.indexOf(pe);if(le===-1){for(let Xe=0;Xe<_.length;Xe++)if(Xe>=y.length){y.push(pe),le=Xe;break}else if(y[Xe]===null){y[Xe]=pe,le=Xe;break}if(le===-1)break}const Ae=_[le];Ae&&Ae.connect(pe)}}const W=new V,U=new V;function P(Q,ae,pe){W.setFromMatrixPosition(ae.matrixWorld),U.setFromMatrixPosition(pe.matrixWorld);const le=W.distanceTo(U),Ae=ae.projectionMatrix.elements,Xe=pe.projectionMatrix.elements,Pe=Ae[14]/(Ae[10]-1),pt=Ae[14]/(Ae[10]+1),lt=(Ae[9]+1)/Ae[5],ke=(Ae[9]-1)/Ae[5],I=(Ae[8]-1)/Ae[0],ln=(Xe[8]+1)/Xe[0],je=Pe*I,We=Pe*ln,we=le/(-I+ln),Je=we*-I;if(ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Je),Q.translateZ(we),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Te=Pe+we,N=pt+we,M=je-Je,j=We+(le-Je),ee=lt*pt/N*Te,ie=ke*pt/N*Te;Q.projectionMatrix.makePerspective(M,j,ee,ie,Te,N),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function G(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ae=Q.near,pe=Q.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(pe=v.depthFar)),S.near=R.near=b.near=ae,S.far=R.far=b.far=pe,(D!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,z=S.far),b.layers.mask=Q.layers.mask|2,R.layers.mask=Q.layers.mask|4,S.layers.mask=b.layers.mask|R.layers.mask;const le=Q.parent,Ae=S.cameras;G(S,le);for(let Xe=0;Xe<Ae.length;Xe++)G(Ae[Xe],le);Ae.length===2?P(S,b,R):S.projectionMatrix.copy(b.projectionMatrix),X(Q,S,le)};function X(Q,ae,pe){pe===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(pe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=qh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let ne=null;function ge(Q,ae){if(u=ae.getViewerPose(c||o),g=ae,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let le=!1;pe.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let Pe=0;Pe<pe.length;Pe++){const pt=pe[Pe];let lt=null;if(p!==null)lt=p.getViewport(pt);else{const I=f.getViewSubImage(h,pt);lt=I.viewport,Pe===0&&(e.setRenderTargetTextures(x,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(x))}let ke=w[Pe];ke===void 0&&(ke=new bn,ke.layers.enable(Pe),ke.viewport=new bt,w[Pe]=ke),ke.matrix.fromArray(pt.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(pt.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(lt.x,lt.y,lt.width,lt.height),Pe===0&&(S.matrix.copy(ke.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(ke)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const Pe=f.getDepthInformation(pe[0]);Pe&&Pe.isValid&&Pe.texture&&v.init(e,Pe,r.renderState)}}for(let pe=0;pe<_.length;pe++){const le=y[pe],Ae=_[pe];le!==null&&Ae!==void 0&&Ae.update(le,ae,c||o)}ne&&ne(Q,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const Re=new KS;Re.setAnimationLoop(ge),this.setAnimationLoop=function(Q){ne=Q},this.dispose=function(){}}}const Qr=new Zi,ED=new _t;function MD(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,GS(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,x,_,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,x,_):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===gn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===gn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d),_=x.envMap,y=x.envMapRotation;_&&(m.envMap.value=_,Qr.copy(y),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),m.envMapRotation.value.setFromMatrix4(ED.makeRotationFromEuler(Qr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=_*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===gn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wD(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const y=_.program;i.uniformBlockBinding(x,y)}function c(x,_){let y=r[x.id];y===void 0&&(g(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(x,C);const A=e.render.frame;s[x.id]!==A&&(h(x),s[x.id]=A)}function u(x){const _=f();x.__bindingPointIndex=_;const y=t.createBuffer(),C=x.__size,A=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const _=r[x.id],y=x.uniforms,C=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,b=y.length;A<b;A++){const R=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,S=R.length;w<S;w++){const D=R[w];if(p(D,A,w,C)===!0){const z=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let B=0;for(let Y=0;Y<H.length;Y++){const W=H[Y],U=v(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,z+B,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,B),B+=U.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,_,y,C){const A=x.value,b=_+"_"+y;if(C[b]===void 0)return typeof A=="number"||typeof A=="boolean"?C[b]=A:C[b]=A.clone(),!0;{const R=C[b];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return C[b]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(x){const _=x.uniforms;let y=0;const C=16;for(let b=0,R=_.length;b<R;b++){const w=Array.isArray(_[b])?_[b]:[_[b]];for(let S=0,D=w.length;S<D;S++){const z=w[S],H=Array.isArray(z.value)?z.value:[z.value];for(let B=0,Y=H.length;B<Y;B++){const W=H[B],U=v(W),P=y%C,G=P%U.boundary,X=P+G;y+=G,X!==0&&C-X<U.storage&&(y+=C-X),z.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=U.storage}}}const A=y%C;return A>0&&(y+=C-A),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class tE{constructor(e={}){const{canvas:n=eR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const x=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Lr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let C=!1;this._outputColorSpace=Bn;let A=0,b=0,R=null,w=-1,S=null;const D=new bt,z=new bt;let H=null;const B=new it(0);let Y=0,W=n.width,U=n.height,P=1,G=null,X=null;const ne=new bt(0,0,W,U),ge=new bt(0,0,W,U);let Re=!1;const Q=new $S;let ae=!1,pe=!1;const le=new _t,Ae=new _t,Xe=new V,Pe=new bt,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function ke(){return R===null?P:1}let I=i;function ln(T,O){return n.getContext(T,O)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${fm}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",he,!1),I===null){const O="webgl2";if(I=ln(O,T),I===null)throw ln(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let je,We,we,Je,Te,N,M,j,ee,ie,Z,Me,de,_e,qe,oe,ye,Ne,De,Se,$e,Be,ct,F;function fe(){je=new UN(I),je.init(),Be=new vD(I,je),We=new CN(I,je,e,Be),we=new mD(I,je),We.reverseDepthBuffer&&h&&we.buffers.depth.setReversed(!0),Je=new kN(I),Te=new nD,N=new gD(I,je,we,Te,We,Be,Je),M=new PN(y),j=new IN(y),ee=new WR(I),ct=new bN(I,ee),ie=new FN(I,ee,Je,ct),Z=new zN(I,ie,ee,Je),De=new BN(I,We,N),oe=new RN(Te),Me=new tD(y,M,j,je,We,ct,oe),de=new MD(y,Te),_e=new rD,qe=new uD(je),Ne=new TN(y,M,j,we,Z,p,l),ye=new hD(y,Z,We),F=new wD(I,Je,We,we),Se=new AN(I,je,Je),$e=new ON(I,je,Je),Je.programs=Me.programs,y.capabilities=We,y.extensions=je,y.properties=Te,y.renderLists=_e,y.shadowMap=ye,y.state=we,y.info=Je}fe();const K=new SD(y,I);this.xr=K,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=je.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=je.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(T){T!==void 0&&(P=T,this.setSize(W,U,!1))},this.getSize=function(T){return T.set(W,U)},this.setSize=function(T,O,$=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,U=O,n.width=Math.floor(T*P),n.height=Math.floor(O*P),$===!0&&(n.style.width=T+"px",n.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(W*P,U*P).floor()},this.setDrawingBufferSize=function(T,O,$){W=T,U=O,P=$,n.width=Math.floor(T*$),n.height=Math.floor(O*$),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(ne)},this.setViewport=function(T,O,$,q){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,O,$,q),we.viewport(D.copy(ne).multiplyScalar(P).round())},this.getScissor=function(T){return T.copy(ge)},this.setScissor=function(T,O,$,q){T.isVector4?ge.set(T.x,T.y,T.z,T.w):ge.set(T,O,$,q),we.scissor(z.copy(ge).multiplyScalar(P).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(T){we.setScissorTest(Re=T)},this.setOpaqueSort=function(T){G=T},this.setTransparentSort=function(T){X=T},this.getClearColor=function(T){return T.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,$=!0){let q=0;if(T){let k=!1;if(R!==null){const se=R.texture.format;k=se===xm||se===vm||se===gm}if(k){const se=R.texture.type,ue=se===Qi||se===Ms||se===Xa||se===$a||se===pm||se===mm,xe=Ne.getClearColor(),Ee=Ne.getClearAlpha(),Ie=xe.r,Le=xe.g,be=xe.b;ue?(g[0]=Ie,g[1]=Le,g[2]=be,g[3]=Ee,I.clearBufferuiv(I.COLOR,0,g)):(v[0]=Ie,v[1]=Le,v[2]=be,v[3]=Ee,I.clearBufferiv(I.COLOR,0,v))}else q|=I.COLOR_BUFFER_BIT}O&&(q|=I.DEPTH_BUFFER_BIT),$&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",he,!1),Ne.dispose(),_e.dispose(),qe.dispose(),Te.dispose(),M.dispose(),j.dispose(),Z.dispose(),ct.dispose(),F.dispose(),Me.dispose(),K.dispose(),K.removeEventListener("sessionstart",wm),K.removeEventListener("sessionend",Tm),Wr.stop()};function te(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=Je.autoReset,O=ye.enabled,$=ye.autoUpdate,q=ye.needsUpdate,k=ye.type;fe(),Je.autoReset=T,ye.enabled=O,ye.autoUpdate=$,ye.needsUpdate=q,ye.type=k}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ue(T){const O=T.target;O.removeEventListener("dispose",Ue),St(O)}function St(T){Vt(T),Te.remove(T)}function Vt(T){const O=Te.get(T).programs;O!==void 0&&(O.forEach(function($){Me.releaseProgram($)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,$,q,k,se){O===null&&(O=pt);const ue=k.isMesh&&k.matrixWorld.determinant()<0,xe=nE(T,O,$,q,k);we.setMaterial(q,ue);let Ee=$.index,Ie=1;if(q.wireframe===!0){if(Ee=ie.getWireframeAttribute($),Ee===void 0)return;Ie=2}const Le=$.drawRange,be=$.attributes.position;let Ye=Le.start*Ie,et=(Le.start+Le.count)*Ie;se!==null&&(Ye=Math.max(Ye,se.start*Ie),et=Math.min(et,(se.start+se.count)*Ie)),Ee!==null?(Ye=Math.max(Ye,0),et=Math.min(et,Ee.count)):be!=null&&(Ye=Math.max(Ye,0),et=Math.min(et,be.count));const At=et-Ye;if(At<0||At===1/0)return;ct.setup(k,q,xe,$,Ee);let Et,Qe=Se;if(Ee!==null&&(Et=ee.get(Ee),Qe=$e,Qe.setIndex(Et)),k.isMesh)q.wireframe===!0?(we.setLineWidth(q.wireframeLinewidth*ke()),Qe.setMode(I.LINES)):Qe.setMode(I.TRIANGLES);else if(k.isLine){let Ce=q.linewidth;Ce===void 0&&(Ce=1),we.setLineWidth(Ce*ke()),k.isLineSegments?Qe.setMode(I.LINES):k.isLineLoop?Qe.setMode(I.LINE_LOOP):Qe.setMode(I.LINE_STRIP)}else k.isPoints?Qe.setMode(I.POINTS):k.isSprite&&Qe.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Pc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))Qe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ce=k._multiDrawStarts,kt=k._multiDrawCounts,tt=k._multiDrawCount,qn=Ee?ee.get(Ee).bytesPerElement:1,As=Te.get(q).currentProgram.getUniforms();for(let yn=0;yn<tt;yn++)As.setValue(I,"_gl_DrawID",yn),Qe.render(Ce[yn]/qn,kt[yn])}else if(k.isInstancedMesh)Qe.renderInstances(Ye,At,k.count);else if($.isInstancedBufferGeometry){const Ce=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,kt=Math.min($.instanceCount,Ce);Qe.renderInstances(Ye,At,kt)}else Qe.render(Ye,At)};function rt(T,O,$){T.transparent===!0&&T.side===ki&&T.forceSinglePass===!1?(T.side=gn,T.needsUpdate=!0,fl(T,O,$),T.side=kr,T.needsUpdate=!0,fl(T,O,$),T.side=ki):fl(T,O,$)}this.compile=function(T,O,$=null){$===null&&($=T),d=qe.get($),d.init(O),_.push(d),$.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),T!==$&&T.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights();const q=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const se=k.material;if(se)if(Array.isArray(se))for(let ue=0;ue<se.length;ue++){const xe=se[ue];rt(xe,$,k),q.add(xe)}else rt(se,$,k),q.add(se)}),d=_.pop(),q},this.compileAsync=function(T,O,$=null){const q=this.compile(T,O,$);return new Promise(k=>{function se(){if(q.forEach(function(ue){Te.get(ue).currentProgram.isReady()&&q.delete(ue)}),q.size===0){k(T);return}setTimeout(se,10)}je.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let $n=null;function Ai(T){$n&&$n(T)}function wm(){Wr.stop()}function Tm(){Wr.start()}const Wr=new KS;Wr.setAnimationLoop(Ai),typeof self<"u"&&Wr.setContext(self),this.setAnimationLoop=function(T){$n=T,K.setAnimationLoop(T),T===null?Wr.stop():Wr.start()},K.addEventListener("sessionstart",wm),K.addEventListener("sessionend",Tm),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(O),O=K.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,O,R),d=qe.get(T,_.length),d.init(O),_.push(d),Ae.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(Ae),pe=this.localClippingEnabled,ae=oe.init(this.clippingPlanes,pe),m=_e.get(T,x.length),m.init(),x.push(m),K.enabled===!0&&K.isPresenting===!0){const se=y.xr.getDepthSensingMesh();se!==null&&Wu(se,O,-1/0,y.sortObjects)}Wu(T,O,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(G,X),lt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,lt&&Ne.addToRenderList(m,T),this.info.render.frame++,ae===!0&&oe.beginShadows();const $=d.state.shadowsArray;ye.render($,T,O),ae===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,k=m.transmissive;if(d.setupLights(),O.isArrayCamera){const se=O.cameras;if(k.length>0)for(let ue=0,xe=se.length;ue<xe;ue++){const Ee=se[ue];Am(q,k,T,Ee)}lt&&Ne.render(T);for(let ue=0,xe=se.length;ue<xe;ue++){const Ee=se[ue];bm(m,T,Ee,Ee.viewport)}}else k.length>0&&Am(q,k,T,O),lt&&Ne.render(T),bm(m,T,O);R!==null&&b===0&&(N.updateMultisampleRenderTarget(R),N.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(y,T,O),ct.resetDefaultState(),w=-1,S=null,_.pop(),_.length>0?(d=_[_.length-1],ae===!0&&oe.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Wu(T,O,$,q){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){q&&Pe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ae);const ue=Z.update(T),xe=T.material;xe.visible&&m.push(T,ue,xe,$,Pe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Q.intersectsObject(T))){const ue=Z.update(T),xe=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Pe.copy(T.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Pe.copy(ue.boundingSphere.center)),Pe.applyMatrix4(T.matrixWorld).applyMatrix4(Ae)),Array.isArray(xe)){const Ee=ue.groups;for(let Ie=0,Le=Ee.length;Ie<Le;Ie++){const be=Ee[Ie],Ye=xe[be.materialIndex];Ye&&Ye.visible&&m.push(T,ue,Ye,$,Pe.z,be)}}else xe.visible&&m.push(T,ue,xe,$,Pe.z,null)}}const se=T.children;for(let ue=0,xe=se.length;ue<xe;ue++)Wu(se[ue],O,$,q)}function bm(T,O,$,q){const k=T.opaque,se=T.transmissive,ue=T.transparent;d.setupLightsView($),ae===!0&&oe.setGlobalState(y.clippingPlanes,$),q&&we.viewport(D.copy(q)),k.length>0&&dl(k,O,$),se.length>0&&dl(se,O,$),ue.length>0&&dl(ue,O,$),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Am(T,O,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[q.id]===void 0&&(d.state.transmissionRenderTarget[q.id]=new ws(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?ol:Qi,minFilter:ls,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const se=d.state.transmissionRenderTarget[q.id],ue=q.viewport||D;se.setSize(ue.z*y.transmissionResolutionScale,ue.w*y.transmissionResolutionScale);const xe=y.getRenderTarget();y.setRenderTarget(se),y.getClearColor(B),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),lt&&Ne.render($);const Ee=y.toneMapping;y.toneMapping=Lr;const Ie=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),d.setupLightsView(q),ae===!0&&oe.setGlobalState(y.clippingPlanes,q),dl(T,$,q),N.updateMultisampleRenderTarget(se),N.updateRenderTargetMipmap(se),je.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let be=0,Ye=O.length;be<Ye;be++){const et=O[be],At=et.object,Et=et.geometry,Qe=et.material,Ce=et.group;if(Qe.side===ki&&At.layers.test(q.layers)){const kt=Qe.side;Qe.side=gn,Qe.needsUpdate=!0,Cm(At,$,q,Et,Qe,Ce),Qe.side=kt,Qe.needsUpdate=!0,Le=!0}}Le===!0&&(N.updateMultisampleRenderTarget(se),N.updateRenderTargetMipmap(se))}y.setRenderTarget(xe),y.setClearColor(B,Y),Ie!==void 0&&(q.viewport=Ie),y.toneMapping=Ee}function dl(T,O,$){const q=O.isScene===!0?O.overrideMaterial:null;for(let k=0,se=T.length;k<se;k++){const ue=T[k],xe=ue.object,Ee=ue.geometry,Ie=ue.group;let Le=ue.material;Le.allowOverride===!0&&q!==null&&(Le=q),xe.layers.test($.layers)&&Cm(xe,O,$,Ee,Le,Ie)}}function Cm(T,O,$,q,k,se){T.onBeforeRender(y,O,$,q,k,se),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(y,O,$,q,T,se),k.transparent===!0&&k.side===ki&&k.forceSinglePass===!1?(k.side=gn,k.needsUpdate=!0,y.renderBufferDirect($,O,q,k,T,se),k.side=kr,k.needsUpdate=!0,y.renderBufferDirect($,O,q,k,T,se),k.side=ki):y.renderBufferDirect($,O,q,k,T,se),T.onAfterRender(y,O,$,q,k,se)}function fl(T,O,$){O.isScene!==!0&&(O=pt);const q=Te.get(T),k=d.state.lights,se=d.state.shadowsArray,ue=k.state.version,xe=Me.getParameters(T,k.state,se,O,$),Ee=Me.getProgramCacheKey(xe);let Ie=q.programs;q.environment=T.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(T.isMeshStandardMaterial?j:M).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Ie===void 0&&(T.addEventListener("dispose",Ue),Ie=new Map,q.programs=Ie);let Le=Ie.get(Ee);if(Le!==void 0){if(q.currentProgram===Le&&q.lightsStateVersion===ue)return Pm(T,xe),Le}else xe.uniforms=Me.getUniforms(T),T.onBeforeCompile(xe,y),Le=Me.acquireProgram(xe,Ee),Ie.set(Ee,Le),q.uniforms=xe.uniforms;const be=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=oe.uniform),Pm(T,xe),q.needsLights=rE(T),q.lightsStateVersion=ue,q.needsLights&&(be.ambientLightColor.value=k.state.ambient,be.lightProbe.value=k.state.probe,be.directionalLights.value=k.state.directional,be.directionalLightShadows.value=k.state.directionalShadow,be.spotLights.value=k.state.spot,be.spotLightShadows.value=k.state.spotShadow,be.rectAreaLights.value=k.state.rectArea,be.ltc_1.value=k.state.rectAreaLTC1,be.ltc_2.value=k.state.rectAreaLTC2,be.pointLights.value=k.state.point,be.pointLightShadows.value=k.state.pointShadow,be.hemisphereLights.value=k.state.hemi,be.directionalShadowMap.value=k.state.directionalShadowMap,be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,be.spotShadowMap.value=k.state.spotShadowMap,be.spotLightMatrix.value=k.state.spotLightMatrix,be.spotLightMap.value=k.state.spotLightMap,be.pointShadowMap.value=k.state.pointShadowMap,be.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Le,q.uniformsList=null,Le}function Rm(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Nc.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Pm(T,O){const $=Te.get(T);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function nE(T,O,$,q,k){O.isScene!==!0&&(O=pt),N.resetTextureUnits();const se=O.fog,ue=q.isMeshStandardMaterial?O.environment:null,xe=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Uo,Ee=(q.isMeshStandardMaterial?j:M).get(q.envMap||ue),Ie=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Le=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),be=!!$.morphAttributes.position,Ye=!!$.morphAttributes.normal,et=!!$.morphAttributes.color;let At=Lr;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(At=y.toneMapping);const Et=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Qe=Et!==void 0?Et.length:0,Ce=Te.get(q),kt=d.state.lights;if(ae===!0&&(pe===!0||T!==S)){const Zt=T===S&&q.id===w;oe.setState(q,T,Zt)}let tt=!1;q.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==kt.state.version||Ce.outputColorSpace!==xe||k.isBatchedMesh&&Ce.batching===!1||!k.isBatchedMesh&&Ce.batching===!0||k.isBatchedMesh&&Ce.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ce.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ce.instancing===!1||!k.isInstancedMesh&&Ce.instancing===!0||k.isSkinnedMesh&&Ce.skinning===!1||!k.isSkinnedMesh&&Ce.skinning===!0||k.isInstancedMesh&&Ce.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ce.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ce.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ce.instancingMorph===!1&&k.morphTexture!==null||Ce.envMap!==Ee||q.fog===!0&&Ce.fog!==se||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==oe.numPlanes||Ce.numIntersection!==oe.numIntersection)||Ce.vertexAlphas!==Ie||Ce.vertexTangents!==Le||Ce.morphTargets!==be||Ce.morphNormals!==Ye||Ce.morphColors!==et||Ce.toneMapping!==At||Ce.morphTargetsCount!==Qe)&&(tt=!0):(tt=!0,Ce.__version=q.version);let qn=Ce.currentProgram;tt===!0&&(qn=fl(q,O,k));let As=!1,yn=!1,$o=!1;const mt=qn.getUniforms(),Un=Ce.uniforms;if(we.useProgram(qn.program)&&(As=!0,yn=!0,$o=!0),q.id!==w&&(w=q.id,yn=!0),As||S!==T){we.buffers.depth.getReversed()?(le.copy(T.projectionMatrix),nR(le),iR(le),mt.setValue(I,"projectionMatrix",le)):mt.setValue(I,"projectionMatrix",T.projectionMatrix),mt.setValue(I,"viewMatrix",T.matrixWorldInverse);const cn=mt.map.cameraPosition;cn!==void 0&&cn.setValue(I,Xe.setFromMatrixPosition(T.matrixWorld)),We.logarithmicDepthBuffer&&mt.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&mt.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,yn=!0,$o=!0)}if(k.isSkinnedMesh){mt.setOptional(I,k,"bindMatrix"),mt.setOptional(I,k,"bindMatrixInverse");const Zt=k.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),mt.setValue(I,"boneTexture",Zt.boneTexture,N))}k.isBatchedMesh&&(mt.setOptional(I,k,"batchingTexture"),mt.setValue(I,"batchingTexture",k._matricesTexture,N),mt.setOptional(I,k,"batchingIdTexture"),mt.setValue(I,"batchingIdTexture",k._indirectTexture,N),mt.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&mt.setValue(I,"batchingColorTexture",k._colorsTexture,N));const Fn=$.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&De.update(k,$,qn),(yn||Ce.receiveShadow!==k.receiveShadow)&&(Ce.receiveShadow=k.receiveShadow,mt.setValue(I,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Un.envMap.value=Ee,Un.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(Un.envMapIntensity.value=O.environmentIntensity),yn&&(mt.setValue(I,"toneMappingExposure",y.toneMappingExposure),Ce.needsLights&&iE(Un,$o),se&&q.fog===!0&&de.refreshFogUniforms(Un,se),de.refreshMaterialUniforms(Un,q,P,U,d.state.transmissionRenderTarget[T.id]),Nc.upload(I,Rm(Ce),Un,N)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Nc.upload(I,Rm(Ce),Un,N),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&mt.setValue(I,"center",k.center),mt.setValue(I,"modelViewMatrix",k.modelViewMatrix),mt.setValue(I,"normalMatrix",k.normalMatrix),mt.setValue(I,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Zt=q.uniformsGroups;for(let cn=0,ju=Zt.length;cn<ju;cn++){const jr=Zt[cn];F.update(jr,qn),F.bind(jr,qn)}}return qn}function iE(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function rE(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,O,$){const q=Te.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Te.get(T.texture).__webglTexture=O,Te.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const $=Te.get(T);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0};const sE=I.createFramebuffer();this.setRenderTarget=function(T,O=0,$=0){R=T,A=O,b=$;let q=!0,k=null,se=!1,ue=!1;if(T){const Ee=Te.get(T);if(Ee.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(I.FRAMEBUFFER,null),q=!1;else if(Ee.__webglFramebuffer===void 0)N.setupRenderTarget(T);else if(Ee.__hasExternalTextures)N.rebindTextures(T,Te.get(T.texture).__webglTexture,Te.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const be=T.depthTexture;if(Ee.__boundDepthTexture!==be){if(be!==null&&Te.has(be)&&(T.width!==be.image.width||T.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(T)}}const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ue=!0);const Le=Te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[O])?k=Le[O][$]:k=Le[O],se=!0):T.samples>0&&N.useMultisampledRTT(T)===!1?k=Te.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?k=Le[$]:k=Le,D.copy(T.viewport),z.copy(T.scissor),H=T.scissorTest}else D.copy(ne).multiplyScalar(P).floor(),z.copy(ge).multiplyScalar(P).floor(),H=Re;if($!==0&&(k=sE),we.bindFramebuffer(I.FRAMEBUFFER,k)&&q&&we.drawBuffers(T,k),we.viewport(D),we.scissor(z),we.setScissorTest(H),se){const Ee=Te.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ee.__webglTexture,$)}else if(ue){const Ee=Te.get(T.texture),Ie=O;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ee.__webglTexture,$,Ie)}else if(T!==null&&$!==0){const Ee=Te.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ee.__webglTexture,$)}w=-1},this.readRenderTargetPixels=function(T,O,$,q,k,se,ue){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){we.bindFramebuffer(I.FRAMEBUFFER,xe);try{const Ee=T.texture,Ie=Ee.format,Le=Ee.type;if(!We.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-q&&$>=0&&$<=T.height-k&&I.readPixels(O,$,q,k,Be.convert(Ie),Be.convert(Le),se)}finally{const Ee=R!==null?Te.get(R).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(T,O,$,q,k,se,ue){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe)if(O>=0&&O<=T.width-q&&$>=0&&$<=T.height-k){we.bindFramebuffer(I.FRAMEBUFFER,xe);const Ee=T.texture,Ie=Ee.format,Le=Ee.type;if(!We.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,be),I.bufferData(I.PIXEL_PACK_BUFFER,se.byteLength,I.STREAM_READ),I.readPixels(O,$,q,k,Be.convert(Ie),Be.convert(Le),0);const Ye=R!==null?Te.get(R).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,Ye);const et=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await tR(I,et,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,be),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,se),I.deleteBuffer(be),I.deleteSync(et),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,$=0){const q=Math.pow(2,-$),k=Math.floor(T.image.width*q),se=Math.floor(T.image.height*q),ue=O!==null?O.x:0,xe=O!==null?O.y:0;N.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,ue,xe,k,se),we.unbindTexture()};const oE=I.createFramebuffer(),aE=I.createFramebuffer();this.copyTextureToTexture=function(T,O,$=null,q=null,k=0,se=null){se===null&&(k!==0?(Pc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=k,k=0):se=0);let ue,xe,Ee,Ie,Le,be,Ye,et,At;const Et=T.isCompressedTexture?T.mipmaps[se]:T.image;if($!==null)ue=$.max.x-$.min.x,xe=$.max.y-$.min.y,Ee=$.isBox3?$.max.z-$.min.z:1,Ie=$.min.x,Le=$.min.y,be=$.isBox3?$.min.z:0;else{const Fn=Math.pow(2,-k);ue=Math.floor(Et.width*Fn),xe=Math.floor(Et.height*Fn),T.isDataArrayTexture?Ee=Et.depth:T.isData3DTexture?Ee=Math.floor(Et.depth*Fn):Ee=1,Ie=0,Le=0,be=0}q!==null?(Ye=q.x,et=q.y,At=q.z):(Ye=0,et=0,At=0);const Qe=Be.convert(O.format),Ce=Be.convert(O.type);let kt;O.isData3DTexture?(N.setTexture3D(O,0),kt=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(N.setTexture2DArray(O,0),kt=I.TEXTURE_2D_ARRAY):(N.setTexture2D(O,0),kt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const tt=I.getParameter(I.UNPACK_ROW_LENGTH),qn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),As=I.getParameter(I.UNPACK_SKIP_PIXELS),yn=I.getParameter(I.UNPACK_SKIP_ROWS),$o=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Et.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Et.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ie),I.pixelStorei(I.UNPACK_SKIP_ROWS,Le),I.pixelStorei(I.UNPACK_SKIP_IMAGES,be);const mt=T.isDataArrayTexture||T.isData3DTexture,Un=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const Fn=Te.get(T),Zt=Te.get(O),cn=Te.get(Fn.__renderTarget),ju=Te.get(Zt.__renderTarget);we.bindFramebuffer(I.READ_FRAMEBUFFER,cn.__webglFramebuffer),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,ju.__webglFramebuffer);for(let jr=0;jr<Ee;jr++)mt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.get(T).__webglTexture,k,be+jr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.get(O).__webglTexture,se,At+jr)),I.blitFramebuffer(Ie,Le,ue,xe,Ye,et,ue,xe,I.DEPTH_BUFFER_BIT,I.NEAREST);we.bindFramebuffer(I.READ_FRAMEBUFFER,null),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||Te.has(T)){const Fn=Te.get(T),Zt=Te.get(O);we.bindFramebuffer(I.READ_FRAMEBUFFER,oE),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,aE);for(let cn=0;cn<Ee;cn++)mt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fn.__webglTexture,k,be+cn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Fn.__webglTexture,k),Un?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Zt.__webglTexture,se,At+cn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Zt.__webglTexture,se),k!==0?I.blitFramebuffer(Ie,Le,ue,xe,Ye,et,ue,xe,I.COLOR_BUFFER_BIT,I.NEAREST):Un?I.copyTexSubImage3D(kt,se,Ye,et,At+cn,Ie,Le,ue,xe):I.copyTexSubImage2D(kt,se,Ye,et,Ie,Le,ue,xe);we.bindFramebuffer(I.READ_FRAMEBUFFER,null),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Un?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(kt,se,Ye,et,At,ue,xe,Ee,Qe,Ce,Et.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(kt,se,Ye,et,At,ue,xe,Ee,Qe,Et.data):I.texSubImage3D(kt,se,Ye,et,At,ue,xe,Ee,Qe,Ce,Et):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,se,Ye,et,ue,xe,Qe,Ce,Et.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,se,Ye,et,Et.width,Et.height,Qe,Et.data):I.texSubImage2D(I.TEXTURE_2D,se,Ye,et,ue,xe,Qe,Ce,Et);I.pixelStorei(I.UNPACK_ROW_LENGTH,tt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,qn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,As),I.pixelStorei(I.UNPACK_SKIP_ROWS,yn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$o),se===0&&O.generateMipmaps&&I.generateMipmap(kt),we.unbindTexture()},this.copyTextureToTexture3D=function(T,O,$=null,q=null,k=0){return Pc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,O,$,q,k)},this.initRenderTarget=function(T){Te.get(T).__webglFramebuffer===void 0&&N.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?N.setTextureCube(T,0):T.isData3DTexture?N.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?N.setTexture2DArray(T,0):N.setTexture2D(T,0),we.unbindTexture()},this.resetState=function(){A=0,b=0,R=null,we.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}function TD(){const[t,e]=L.useState(0),[n,i]=L.useState(0),[r,s]=L.useState(0),[o,a]=L.useState(0);return L.useEffect(()=>{const l=()=>{i(window.innerHeight),s(document.documentElement.scrollHeight)},c=()=>{e(window.scrollY);const u=document.documentElement.scrollHeight-window.innerHeight,f=Math.min(Math.max(window.scrollY/u,0),1);a(f)};return l(),c(),window.addEventListener("scroll",c),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",c),window.removeEventListener("resize",l)}},[]),{scrollY:t,viewportHeight:n,documentHeight:r,scrollProgress:o}}const bD=()=>{const t=L.useRef(null),{isDarkMode:e}=Go(),n=L.useRef(null),i=L.useRef(null),r=L.useRef(null),s=L.useRef(null),o=L.useRef(null),a=L.useRef(null),{scrollY:l,scrollProgress:c}=TD();return L.useEffect(()=>{if(!t.current)return;const u=window.innerWidth,f=window.innerHeight,h=new XS;n.current=h;const p=new bn(75,u/f,.1,1e3),g=new tE({alpha:!0,antialias:!0});g.setSize(u,f),g.setClearColor(0,0),t.current.appendChild(g.domElement);const v=new xn,m=700,d=new Float32Array(m*3);for(let U=0;U<m*3;U++)d[U]=(Math.random()-.5)*5;v.setAttribute("position",new li(d,3));const x=new qS({size:.005,color:e?6619098:30646,transparent:!0,opacity:.8});r.current=x;const _=new NR(v,x);i.current=_,h.add(_);const y=new cs;s.current=y,h.add(y);const C=15,A=[],b=()=>{const U=Math.floor(Math.random()*3);let P=new Br(.1,.1,.1);switch(U){case 0:P=new Br(.1,.1,.1);break;case 1:P=new fu(.05,8,8);break;case 2:P=new Em(.05,.02,8,16);break}const G=new Ka({color:e?6619098:30646,transparent:!0,opacity:.3,wireframe:!0}),X=new Cn(P,G);return X.position.x=(Math.random()-.5)*5,X.position.y=(Math.random()-.5)*5,X.position.z=(Math.random()-.5)*2,X.userData={rotationSpeed:{x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01,z:(Math.random()-.5)*.01},floatSpeed:(Math.random()-.5)*.005,floatDistance:Math.random()*.2+.1,initialY:X.position.y,floatOffset:Math.random()*Math.PI*2},y.add(X),A.push(X),X};for(let U=0;U<C;U++)A.push(b());const R=new cs;a.current=R,h.add(R);const w=8;for(let U=0;U<w;U++){const P=new fu(Math.random()*.05+.02,16,16),G=new Ka({color:e?6619098:30646,transparent:!0,opacity:Math.random()*.3+.2}),X=new Cn(P,G);X.position.x=(Math.random()-.5)*4,X.position.y=(Math.random()-.5)*4,X.position.z=Math.random()*2-1,X.userData={floatSpeed:Math.random()*.01+.005,pulseSpeed:Math.random()*.02+.01,initialScale:Math.random()*.5+.8,orbitRadius:Math.random()*.5+.2,orbitOffset:Math.random()*Math.PI*2},R.add(X)}const S=new cs;o.current=S,h.add(S);const D=15;for(let U=0;U<D;U++){const P=Math.random()*.8+.4,X=new OR(new V(0,0,0),new V(P*.3,P*.1,0),new V(P*.7,-P*.2,0),new V(P,0,0)).getPoints(20),ne=new xn().setFromPoints(X),ge=new Sm({color:e?6619098:30646,transparent:!0,opacity:.3}),Re=new Yh(ne,ge);Re.position.x=(Math.random()-.5)*8,Re.position.y=(Math.random()-.5)*8,Re.position.z=Math.random()*2-1,Re.rotation.x=Math.random()*Math.PI,Re.rotation.y=Math.random()*Math.PI,Re.rotation.z=Math.random()*Math.PI,Re.scale.set(0,0,0),Re.userData={showAtScrollProgress:U/D,scaleSpeed:Math.random()*.1+.05,rotationSpeed:{x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01,z:(Math.random()-.5)*.01}},S.add(Re)}p.position.z=2;let z,H=0;const B=()=>{if(H+=.01,z=requestAnimationFrame(B),_){_.rotation.x+=3e-4,_.rotation.y+=2e-4;for(let U=0;U<v.attributes.position.count;U++){const P=v.attributes.position.getX(U),G=v.attributes.position.getY(U),X=v.attributes.position.getZ(U);v.attributes.position.setZ(U,X+Math.sin(H*.5+P*2+G*2)*.02)}v.attributes.position.needsUpdate=!0}A.forEach(U=>{U.rotation.x+=U.userData.rotationSpeed.x,U.rotation.y+=U.userData.rotationSpeed.y,U.rotation.z+=U.userData.rotationSpeed.z,U.position.y=U.userData.initialY+Math.sin(H+U.userData.floatOffset)*U.userData.floatDistance;const P=5e-4;U.position.y-=l*P}),a.current&&a.current.children.forEach(U=>{const P=U.userData.initialScale+Math.sin(H*U.userData.pulseSpeed)*.2;U.scale.set(P,P,P);const G=H*U.userData.floatSpeed+U.userData.orbitOffset,X=U.position.x+Math.sin(G)*U.userData.orbitRadius*.05,ne=U.position.y+Math.cos(G)*U.userData.orbitRadius*.05;U.position.set(X,ne,U.position.z);const ge=U.material;ge.opacity=Math.min(.5,ge.opacity+c*.2)}),o.current&&o.current.children.forEach(U=>{if(c>=U.userData.showAtScrollProgress){const G=U.scale.x,X=G+(1-G)*U.userData.scaleSpeed;U.scale.set(X,X,X),U.rotation.x+=U.userData.rotationSpeed.x,U.rotation.y+=U.userData.rotationSpeed.y,U.rotation.z+=U.userData.rotationSpeed.z;const ne=U.material;ne.opacity=.2+c*.3}}),g.render(h,p)};B();const Y=()=>{const U=window.innerWidth,P=window.innerHeight;p.aspect=U/P,p.updateProjectionMatrix(),g.setSize(U,P)},W=U=>{if(_){const P=U.clientX/window.innerWidth*2-1,G=-(U.clientY/window.innerHeight)*2+1;_.rotation.x+=G*3e-4,_.rotation.y+=P*3e-4,y&&(y.rotation.x+=G*1e-4,y.rotation.y+=P*1e-4)}};return window.addEventListener("resize",Y),window.addEventListener("mousemove",W),()=>{window.removeEventListener("resize",Y),window.removeEventListener("mousemove",W),cancelAnimationFrame(z),t.current&&t.current.contains(g.domElement)&&t.current.removeChild(g.domElement),v.dispose(),x.dispose(),A.forEach(U=>{U.geometry.dispose(),U.material.dispose()}),a.current&&a.current.children.forEach(U=>{U instanceof Cn&&(U.geometry.dispose(),U.material.dispose())}),o.current&&o.current.children.forEach(U=>{U instanceof Yh&&(U.geometry.dispose(),U.material.dispose())}),g.dispose()}},[]),L.useEffect(()=>{const u=e?6619098:30646;r.current&&r.current.color.set(u),s.current&&s.current.children.forEach(f=>{f.material.color.set(u)}),a.current&&a.current.children.forEach(f=>{f.material.color.set(u)}),o.current&&o.current.children.forEach(f=>{f.material.color.set(u)})},[e]),E.jsx("div",{ref:t,className:"fixed w-full h-full top-0 left-0 z-[-1]",style:{pointerEvents:"none"}})},AD=()=>E.jsxs("div",{className:"min-h-screen font-sans selection:bg-neonBlue selection:text-midnight",children:[E.jsx(bD,{}),E.jsx(eC,{}),E.jsxs("main",{children:[E.jsx(tC,{}),E.jsx(iC,{}),E.jsx(rC,{}),E.jsx(sC,{}),E.jsx(lC,{}),E.jsx(cC,{})]}),E.jsx(uC,{})]}),CD=()=>{const{isDarkMode:t,toggleTheme:e}=Go();return E.jsx("button",{className:"theme-toggle",onClick:e,"aria-label":t?"Switch to light mode":"Switch to dark mode",children:t?E.jsx("i",{className:"fas fa-sun"}):E.jsx("i",{className:"fas fa-moon"})})},RD=({onLoadComplete:t})=>{const{isDarkMode:e}=Go(),n=L.useRef(null),i=L.useRef(null),[r,s]=L.useState(0),[o,a]=L.useState(!1);return L.useEffect(()=>{let l=0;const c=setInterval(()=>{l+=Math.floor(Math.random()*5)+1,l>=100&&(l=100,clearInterval(c),setTimeout(()=>{a(!0),setTimeout(()=>{t()},800)},500)),s(l)},120);return()=>clearInterval(c)},[t]),L.useEffect(()=>{if(!i.current)return;const l=new XS,c=new bn(75,1,.1,1e3);c.position.z=5;const u=new tE({antialias:!0,alpha:!0});u.setSize(200,200),u.setClearColor(0,0),i.current.appendChild(u.domElement);const f=2,h=new Br(f,f,f),p=new kR(h),g=new Sm({color:e?6619098:30646,transparent:!0,opacity:.8}),v=new PR(p,g);l.add(v);const m=new Ka({color:e?6619098:30646,transparent:!0,opacity:.1}),d=new Cn(h,m);l.add(d);let x;const _=()=>{x=requestAnimationFrame(_),v.rotation.x+=.005,v.rotation.y+=.007,d.rotation.x+=.005,d.rotation.y+=.007,u.render(l,c)};return _(),()=>{cancelAnimationFrame(x),i.current&&i.current.contains(u.domElement)&&i.current.removeChild(u.domElement),h.dispose(),g.dispose(),m.dispose(),p.dispose(),u.dispose()}},[e]),E.jsx("div",{ref:n,className:`fixed inset-0 z-50 flex flex-col items-center justify-center bg-midnight transition-opacity duration-800 ${o?"opacity-0":"opacity-100"}`,style:{background:"linear-gradient(to bottom, #0a192f, #020c1b)"},children:E.jsxs("div",{className:"relative",children:[E.jsx("div",{ref:i,className:"w-[200px] h-[200px] flex items-center justify-center"}),E.jsxs("div",{className:"absolute bottom-[-50px] left-0 right-0 text-center",children:[E.jsxs("p",{className:"text-textPrimary font-medium tracking-wider loading-text",children:[E.jsx("span",{className:"mr-2",children:"Loading..."}),E.jsxs("span",{children:[r,"%"]})]}),E.jsx("div",{className:"w-full h-1 mt-2 bg-darkBlue rounded-full overflow-hidden",children:E.jsx("div",{className:"h-full bg-neonBlue rounded-full transition-all duration-300 glow-bar",style:{width:`${r}%`}})})]})]})})};function PD(){return E.jsxs(dT,{children:[E.jsx(Xg,{path:"/",component:AD}),E.jsx(Xg,{component:JA})]})}function ND(){const[t,e]=L.useState(!0),[n,i]=L.useState(!1);L.useEffect(()=>{document.fonts.ready.then(()=>{i(!0)});const s=setTimeout(()=>{i(!0)},2e3);return()=>clearTimeout(s)},[]);const r=()=>{e(!1)};return E.jsx(UT,{client:kT,children:E.jsx(nC,{children:E.jsxs($A,{children:[E.jsx(Sb,{}),n&&t&&E.jsx(RD,{onLoadComplete:r}),E.jsx(CD,{}),E.jsx("div",{className:t?"invisible":"visible",children:E.jsx(PD,{})})]})})})}z_(document.getElementById("root")).render(E.jsx(ND,{}));
