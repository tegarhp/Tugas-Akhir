import{_ as S,o as T,c as j,a as y,b as w,w as x,r as k}from"./entry.CxwyMbBL.js";import{_ as D}from"./nuxt-link.j3Qj_Bsa.js";function O(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var $=function(a){var r={};function n(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}return n.m=a,n.c=r,n.d=function(t,e,u){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:u})},n.r=function(t){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e||4&e&&typeof t=="object"&&t&&t.__esModule)return t;var u=Object.create(null);if(n.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:t}),2&e&&typeof t!="string")for(var d in t)n.d(u,d,(function(g){return t[g]}).bind(null,d));return u},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(a,r,n){n.d(r,"b",function(){return e}),n.d(r,"d",function(){return u}),n.d(r,"c",function(){return d}),n.d(r,"a",function(){return g});var t=function(i){return i!=null},e=function(i,l){try{var c=i.getItem(l);if(t(c)){var o=JSON.parse(c);if(t(o)){var h=new Date().getTime(),p=o.created,f=6e4;o.unit&&o.unit==="s"?f=1e3:o.unit&&o.unit==="m"?f=6e4:o.unit&&o.unit==="h"?f=36e5:o.unit&&o.unit==="d"&&(f=864e5);var m=parseInt(o.expiry,10)*f;if(parseInt(p,10)+m>h)return o.value;console.warn("storage is expired")}}}catch{console.warn("failed parse JSON")}return null},u=function(i,l){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:5,h=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"m";try{var p=i,f={created:new Date().getTime(),value:c,expiry:o,unit:h};return p.setItem(l,JSON.stringify(f)),f}catch{}return null},d=function(i,l){try{i.removeItem(l)}catch{}},g=function(i){try{i.clear()}catch{}}},function(a,r,n){n.r(r),n.d(r,"getData",function(){return u}),n.d(r,"setData",function(){return d}),n.d(r,"removeItem",function(){return g}),n.d(r,"clear",function(){return i});var t=n(0);function e(){return"localStorage"in window&&window.localStorage?window.localStorage:null}var u=function(l){try{var c=e();return Object(t.b)(c,l)}catch{}return null},d=function(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5,h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"m";try{var p=e();return Object(t.d)(p,l,c,o,h)}catch{}return null},g=function(l){try{var c=e();Object(t.c)(c,l)}catch{}},i=function(){try{var l=e();Object(t.a)(l)}catch{}}},function(a,r,n){n.r(r),(function(t){n.d(r,"getData",function(){return d}),n.d(r,"setData",function(){return g}),n.d(r,"removeItem",function(){return i}),n.d(r,"clear",function(){return l});var e=n(0);function u(){return"sessionStorage"in window&&window.sessionStorage?window.sessionStorage:null}var d=function(c){if(t.client)try{var o=u();return Object(e.b)(o,c)}catch{}return null},g=function(c){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5,p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"m";if(t.client)try{var f=u();return Object(e.d)(f,c,o,h,p)}catch{}return null},i=function(c){try{var o=u();Object(e.c)(o,c)}catch{}},l=function(){try{var c=u();Object(e.a)(c)}catch{}}}).call(this,n(3))},function(a,r){var n,t,e=a.exports={};function u(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}function g(s){if(n===setTimeout)return setTimeout(s,0);if((n===u||!n)&&setTimeout)return n=setTimeout,setTimeout(s,0);try{return n(s,0)}catch{try{return n.call(null,s,0)}catch{return n.call(this,s,0)}}}(function(){try{n=typeof setTimeout=="function"?setTimeout:u}catch{n=u}try{t=typeof clearTimeout=="function"?clearTimeout:d}catch{t=d}})();var i,l=[],c=!1,o=-1;function h(){c&&i&&(c=!1,i.length?l=i.concat(l):o=-1,l.length&&p())}function p(){if(!c){var s=g(h);c=!0;for(var _=l.length;_;){for(i=l,l=[];++o<_;)i&&i[o].run();o=-1,_=l.length}i=null,c=!1,function(v){if(t===clearTimeout)return clearTimeout(v);if((t===d||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(v);try{t(v)}catch{try{return t.call(null,v)}catch{return t.call(this,v)}}}(s)}}function f(s,_){this.fun=s,this.array=_}function m(){}e.nextTick=function(s){var _=new Array(arguments.length-1);if(arguments.length>1)for(var v=1;v<arguments.length;v++)_[v-1]=arguments[v];l.push(new f(s,_)),l.length!==1||c||g(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=m,e.addListener=m,e.once=m,e.off=m,e.removeListener=m,e.removeAllListeners=m,e.emit=m,e.prependListener=m,e.prependOnceListener=m,e.listeners=function(s){return[]},e.binding=function(s){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(s){throw new Error("process.chdir is not supported")},e.umask=function(){return 0}},function(a,r,n){n.r(r);var t=n(1),e=n(2);r.default={localStorage:{getData:t.getData,setData:t.setData,removeItem:t.removeItem,clear:t.clear},sessionStorage:{getData:e.getData,setData:e.setData,removeItem:e.removeItem,clear:e.clear}}}]);const b=O($),M={methods:{changeModeToggle(){let a=document.querySelector("html");a.classList.contains("dark")?(a.classList.remove("dark"),b.localStorage.setData("darkmode",!1),console.log(b.localStorage.getData("darkmode"))):(a.classList.add("dark"),b.localStorage.setData("darkmode",!0),console.log(b.localStorage.getData("darkmode")))},changeMode(a){console.log("dc",a);let r=document.querySelector("html");b.localStorage.getData("darkmode")?(console.log("masok2"),r.classList.add("dark")):(console.log("masok"),r.classList.remove("dark"))}},mounted(){const a=b.localStorage.getData("darkmode");console.log("dm",a),a?this.changeMode(a):this.changeMode(!a)}},I={class:"flex justify-between w-screen p-4"},L=y("h1",{class:"text-primary text-3xl font-black"},"APS",-1),E=y("svg",{viewBox:"0 0 15 15",class:"ext-foreground",he:""},[y("path",{fill:"currentColor","fill-rule":"evenodd",d:"M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4A6.57 6.57 0 0 1 9.203 5.1a6.602 6.602 0 0 1-6.243 6.59c-.214.012-.333.264-.183.417a6.8 6.8 0 0 0 .21.206l.072.066l.26.226l.188.148l.121.09l.187.131l.176.115c.12.076.244.149.37.217l.264.135l.26.12l.303.122l.244.086a6.568 6.568 0 0 0 1.103.26l.317.04l.267.02a6.6 6.6 0 0 0 6.943-7.328l-.037-.277a6.557 6.557 0 0 0-.384-1.415l-.113-.268l-.077-.166l-.074-.148a6.602 6.602 0 0 0-.546-.883l-.153-.2l-.199-.24l-.163-.18l-.12-.124l-.16-.158l-.223-.2l-.32-.26l-.245-.177l-.292-.19l-.321-.186l-.328-.165l-.113-.052l-.24-.101l-.276-.104l-.252-.082l-.325-.09l-.265-.06zm1.86 4.318a7.578 7.578 0 0 0-.572-2.894a5.601 5.601 0 1 1-4.748 10.146a7.61 7.61 0 0 0 3.66-2.51a.749.749 0 0 0 1.355-.442a.75.75 0 0 0-.584-.732c.062-.116.122-.235.178-.355A1.25 1.25 0 1 0 10.35 6.2c.034-.295.052-.595.052-.9","clip-rule":"evenodd"})],-1),N=[E];function P(a,r,n,t,e,u){return T(),j("div",I,[L,y("button",{onClick:r[0]||(r[0]=(...d)=>u.changeModeToggle&&u.changeModeToggle(...d)),class:"whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 flex items-center justify-center","aria-label":"Toggle dark mode"},N)])}const A=S(M,[["render",P]]),z={},B={class:"flex justify-around fixed w-screen bottom-0 bg-card drop-shadow-md py-3"},C=y("i",{class:"fa-solid fa-user"},null,-1),J=y("i",{class:"fa-solid fa-house"},null,-1),q=y("i",{class:"fa-solid fa-truck-fast"},null,-1);function F(a,r){const n=D;return T(),j("div",B,[w(n,{class:"bg-card text-primary p-7 w-10 h-10 text-center align-middle flex items-center justify-center text-xl rounded-full",to:"/"},{default:x(()=>[C]),_:1}),w(n,{class:"bg-card text-primary p-7 w-10 h-10 text-center align-middle flex items-center justify-center text-xl rounded-full",to:"/"},{default:x(()=>[J]),_:1}),w(n,{class:"bg-card text-primary p-7 w-10 h-10 text-center align-middle flex items-center justify-center text-xl rounded-full",to:"/order"},{default:x(()=>[q]),_:1})])}const V=S(z,[["render",F]]),H={},G={class:"h-screen"},K={class:"p-4"};function Q(a,r,n,t,e,u){const d=A,g=V;return T(),j("div",G,[w(d),y("div",K,[k(a.$slots,"default")]),w(g)])}const Y=S(H,[["render",Q]]);export{Y as default};
