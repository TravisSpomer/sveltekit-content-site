var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,n=(e,r,s)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,o=(t,o)=>{for(var a in o||(o={}))e.call(o,a)&&n(t,a,o[a]);if(r)for(var a of r(o))s.call(o,a)&&n(t,a,o[a]);return t};import{S as a,i,s as c,e as l,t as u,c as h,a as p,b as f,d,f as g,g as m,h as y,j as v,k as $,l as b,n as w,m as E,o as _,p as x,q as S,r as R,u as q,v as k,w as L,x as O,y as T,z as P,A as j,B as A,C as N,D as U,E as I,F as C}from"./chunks/index-0530b4ef.js";function D(t){let e,r,s=t[1].stack+"";return{c(){e=l("pre"),r=u(s)},l(t){e=h(t,"PRE",{});var n=p(e);r=f(n,s),n.forEach(d)},m(t,s){g(t,e,s),m(e,r)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&y(r,s)},d(t){t&&d(e)}}}function V(t){let e,r,s,n,o,a,i,c=t[1].message+"",E=t[1].stack&&D(t);return{c(){e=l("h1"),r=u(t[0]),s=v(),n=l("p"),o=u(c),a=v(),E&&E.c(),i=$()},l(l){e=h(l,"H1",{});var u=p(e);r=f(u,t[0]),u.forEach(d),s=b(l),n=h(l,"P",{});var g=p(n);o=f(g,c),g.forEach(d),a=b(l),E&&E.l(l),i=$()},m(t,c){g(t,e,c),m(e,r),g(t,s,c),g(t,n,c),m(n,o),g(t,a,c),E&&E.m(t,c),g(t,i,c)},p(t,[e]){1&e&&y(r,t[0]),2&e&&c!==(c=t[1].message+"")&&y(o,c),t[1].stack?E?E.p(t,e):(E=D(t),E.c(),E.m(i.parentNode,i)):E&&(E.d(1),E=null)},i:w,o:w,d(t){t&&d(e),t&&d(s),t&&d(n),t&&d(a),E&&E.d(t),t&&d(i)}}}function K(t,e,r){let{status:s}=e,{error:n}=e;return t.$$set=t=>{"status"in t&&r(0,s=t.status),"error"in t&&r(1,n=t.error)},[s,n]}class M extends a{constructor(t){super(),i(this,t,K,V,c,{status:0,error:1})}}function B(t){let e,r,s;const n=[t[4]||{}];var o=t[2][1];function a(t){let e={};for(let r=0;r<n.length;r+=1)e=E(e,n[r]);return{props:e}}return o&&(e=new o(a())),{c(){e&&x(e.$$.fragment),r=$()},l(t){e&&S(e.$$.fragment,t),r=$()},m(t,n){e&&R(e,t,n),g(t,r,n),s=!0},p(t,s){const i=16&s?q(n,[k(t[4]||{})]):{};if(o!==(o=t[2][1])){if(e){N();const t=e;O(t.$$.fragment,1,0,(()=>{T(t,1)})),U()}o?(e=new o(a()),x(e.$$.fragment),L(e.$$.fragment,1),R(e,r.parentNode,r)):e=null}else o&&e.$set(i)},i(t){s||(e&&L(e.$$.fragment,t),s=!0)},o(t){e&&O(e.$$.fragment,t),s=!1},d(t){t&&d(r),e&&T(e,t)}}}function z(t){let e,r;return e=new M({props:{status:t[0],error:t[1]}}),{c(){x(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){R(e,t,s),r=!0},p(t,r){const s={};1&r&&(s.status=t[0]),2&r&&(s.error=t[1]),e.$set(s)},i(t){r||(L(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function F(t){let e,r,s,n;const o=[z,B],a=[];function i(t,e){return t[1]?0:1}return e=i(t),r=a[e]=o[e](t),{c(){r.c(),s=$()},l(t){r.l(t),s=$()},m(t,r){a[e].m(t,r),g(t,s,r),n=!0},p(t,n){let c=e;e=i(t),e===c?a[e].p(t,n):(N(),O(a[c],1,1,(()=>{a[c]=null})),U(),r=a[e],r?r.p(t,n):(r=a[e]=o[e](t),r.c()),L(r,1),r.m(s.parentNode,s))},i(t){n||(L(r),n=!0)},o(t){O(r),n=!1},d(t){a[e].d(t),t&&d(s)}}}function W(t){let e,r=t[6]&&Y(t);return{c(){e=l("div"),r&&r.c(),this.h()},l(t){e=h(t,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var s=p(e);r&&r.l(s),s.forEach(d),this.h()},h(){_(e,"id","svelte-announcer"),_(e,"aria-live","assertive"),_(e,"aria-atomic","true"),_(e,"class","svelte-1j55zn5")},m(t,s){g(t,e,s),r&&r.m(e,null)},p(t,s){t[6]?r?r.p(t,s):(r=Y(t),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(t){t&&d(e),r&&r.d()}}}function Y(t){let e,r;return{c(){e=u("Navigated to "),r=u(t[7])},l(s){e=f(s,"Navigated to "),r=f(s,t[7])},m(t,s){g(t,e,s),g(t,r,s)},p(t,e){128&e&&y(r,t[7])},d(t){t&&d(e),t&&d(r)}}}function H(t){let e,r,s,n;const o=[t[3]||{}];let a={$$slots:{default:[F]},$$scope:{ctx:t}};for(let c=0;c<o.length;c+=1)a=E(a,o[c]);e=new t[8]({props:a});let i=t[5]&&W(t);return{c(){x(e.$$.fragment),r=v(),i&&i.c(),s=$()},l(t){S(e.$$.fragment,t),r=b(t),i&&i.l(t),s=$()},m(t,o){R(e,t,o),g(t,r,o),i&&i.m(t,o),g(t,s,o),n=!0},p(t,[r]){const n=8&r?q(o,[k(t[3]||{})]):{};2071&r&&(n.$$scope={dirty:r,ctx:t}),e.$set(n),t[5]?i?i.p(t,r):(i=W(t),i.c(),i.m(s.parentNode,s)):i&&(i.d(1),i=null)},i(t){n||(L(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){T(e,t),t&&d(r),i&&i.d(t),t&&d(s)}}}function G(t,e,r){let{status:s}=e,{error:n}=e,{stores:o}=e,{page:a}=e,{components:i}=e,{props_0:c=null}=e,{props_1:l=null}=e;const u=i[0];P("__svelte__",o),j(o.page.notify);let h=!1,p=!1,f=null;return A((()=>{const t=o.page.subscribe((()=>{h&&(r(6,p=!0),r(7,f=document.title))}));return r(5,h=!0),t})),t.$$set=t=>{"status"in t&&r(0,s=t.status),"error"in t&&r(1,n=t.error),"stores"in t&&r(9,o=t.stores),"page"in t&&r(10,a=t.page),"components"in t&&r(2,i=t.components),"props_0"in t&&r(3,c=t.props_0),"props_1"in t&&r(4,l=t.props_1)},t.$$.update=()=>{1536&t.$$.dirty&&o.page.set(a)},[s,n,i,c,l,h,p,f,u,o,a]}class J extends a{constructor(t){super(),i(this,t,G,H,c,{status:0,error:1,stores:9,page:10,components:2,props_0:3,props_1:4})}}let X;const Q={},Z=function(t,e){if(!e)return t();if(void 0===X){const t=document.createElement("link").relList;X=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((t=>{if(t in Q)return;Q[t]=!0;const e=t.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${r}`))return;const s=document.createElement("link");return s.rel=e?"stylesheet":X,e||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),e?new Promise(((t,e)=>{s.addEventListener("load",t),s.addEventListener("error",e)})):void 0}))).then((()=>t()))};function tt(t){let e,r=(!t[0]||t[1]<=t[0]?t[1].toString():`${t[0]}-${t[1]}`)+"";return{c(){e=u(r)},l(t){e=f(t,r)},m(t,r){g(t,e,r)},p(t,[s]){1&s&&r!==(r=(!t[0]||t[1]<=t[0]?t[1].toString():`${t[0]}-${t[1]}`)+"")&&y(e,r)},i:w,o:w,d(t){t&&d(e)}}}function et(t,e,r){let{from:s}=e;const n=(new Date).getUTCFullYear();return t.$$set=t=>{"from"in t&&r(0,s=t.from)},[s,n]}class rt extends a{constructor(t){super(),i(this,t,et,tt,c,{from:0})}}function st(t){let e,r,s,n,o,a,i,c,y,$,w,E,q,k,P,j,A;const N=t[1].default,U=I(N,t,t[0],null);return P=new rt({props:{from:2021}}),{c(){e=l("header"),r=l("div"),s=l("nav"),n=l("ul"),o=l("li"),a=l("a"),i=u("SvelteKit test site"),c=v(),y=l("main"),$=l("div"),U&&U.c(),w=v(),E=l("footer"),q=l("p"),k=u("Template © "),x(P.$$.fragment),j=u(" Travis Spomer."),this.h()},l(t){e=h(t,"HEADER",{});var l=p(e);r=h(l,"DIV",{});var u=p(r);s=h(u,"NAV",{});var g=p(s);n=h(g,"UL",{});var m=p(n);o=h(m,"LI",{});var v=p(o);a=h(v,"A",{href:!0});var _=p(a);i=f(_,"SvelteKit test site"),_.forEach(d),v.forEach(d),m.forEach(d),g.forEach(d),u.forEach(d),l.forEach(d),c=b(t),y=h(t,"MAIN",{});var x=p(y);$=h(x,"DIV",{class:!0});var R=p($);U&&U.l(R),R.forEach(d),x.forEach(d),w=b(t),E=h(t,"FOOTER",{});var L=p(E);q=h(L,"P",{});var O=p(q);k=f(O,"Template © "),S(P.$$.fragment,O),j=f(O," Travis Spomer."),O.forEach(d),L.forEach(d),this.h()},h(){_(a,"href","/"),_($,"class","content")},m(t,l){g(t,e,l),m(e,r),m(r,s),m(s,n),m(n,o),m(o,a),m(a,i),g(t,c,l),g(t,y,l),m(y,$),U&&U.m($,null),g(t,w,l),g(t,E,l),m(E,q),m(q,k),R(P,q,null),m(q,j),A=!0},p(t,[e]){U&&U.p&&1&e&&C(U,N,t,t[0],e,null,null)},i(t){A||(L(U,t),L(P.$$.fragment,t),A=!0)},o(t){O(U,t),O(P.$$.fragment,t),A=!1},d(t){t&&d(e),t&&d(c),t&&d(y),U&&U.d(t),t&&d(w),t&&d(E),T(P)}}}function nt(t,e,r){let{$$slots:s={},$$scope:n}=e;return t.$$set=t=>{"$$scope"in t&&r(0,n=t.$$scope)},[n,s]}var ot=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:class extends a{constructor(t){super(),i(this,t,nt,st,c,{})}}});const at=[()=>Z((()=>import("./pages/index.svelte-126b03af.js")),["/_app/pages/index.svelte-126b03af.js","/_app/assets/pages/index.svelte-d0bee2c1.css","/_app/chunks/index-0530b4ef.js"]),()=>Z((()=>import("./pages/page-two.svelte-14aefbe2.js")),["/_app/pages/page-two.svelte-14aefbe2.js","/_app/chunks/index-0530b4ef.js"]),()=>Z((()=>import("./pages/content/[filename].svelte-6e76b72b.js")),["/_app/pages/content/[filename].svelte-6e76b72b.js","/_app/chunks/index-0530b4ef.js"])],it=decodeURIComponent,ct=[[/^\/$/,[at[0]]],[/^\/page-two\/?$/,[at[1]]],[/^\/content\/([^/]+?)\/?$/,[at[2]],t=>({filename:it(t[1])})],[/^\/api\/content\/([^/]+?)\/?$/]];function lt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}const ut=[];function ht(t,e=w){let r;const s=[];function n(e){if(c(t,e)&&(t=e,r)){const e=!ut.length;for(let r=0;r<s.length;r+=1){const e=s[r];e[1](),ut.push(e,t)}if(e){for(let t=0;t<ut.length;t+=2)ut[t][0](ut[t+1]);ut.length=0}}}return{set:n,update:function(e){n(e(t))},subscribe:function(o,a=w){const i=[o,a];return s.push(i),1===s.length&&(r=e(n)||w),o(t),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}function pt(){return{x:pageXOffset,y:pageYOffset}}class ft{constructor({base:t,routes:e}){this.base=t,this.routes=e,this.history=window.history||{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"}}init(t){let e;this.renderer=t,t.router=this,"scrollRestoration"in this.history&&(this.history.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{this.history.scrollRestoration="auto"})),addEventListener("load",(()=>{this.history.scrollRestoration="manual"})),addEventListener("scroll",(()=>{clearTimeout(e),e=setTimeout((()=>{const t=o(o({},history.state||{}),{"sveltekit:scroll":pt()});history.replaceState(t,document.title,window.location.href)}),50)})),addEventListener("click",(t=>{if(t.button||1!==t.which)return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=lt(t.target);if(!e)return;if(!e.href)return;const r="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(r?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(r?e.target.baseVal:e.target)return;const n=new URL(s);if(n.pathname===location.pathname&&n.search===location.search)return;const o=this.parse(n);if(o){const r=e.hasAttribute("sveltekit:noscroll");this.history.pushState({},"",n.href),this._navigate(o,r?pt():null,[],n.hash),t.preventDefault()}})),addEventListener("popstate",(t=>{if(t.state){const e=new URL(location.href),r=this.parse(e);r?this._navigate(r,t.state["sveltekit:scroll"],[]):location.href=location.href}})),document.body.setAttribute("tabindex","-1"),this.history.replaceState({},"",location.href)}parse(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(this.base))return null;const e=t.pathname.slice(this.base.length)||"/",r=this.routes.filter((([t])=>t.test(e)));if(r.length>0){const s=new URLSearchParams(t.search);return{id:`${e}?${s}`,routes:r,path:e,query:s}}}async goto(t,{noscroll:e=!1,replaceState:r=!1}={},s){const n=new URL(t,function(t){let e=t.baseURI;if(!e){const r=t.getElementsByTagName("base");e=r.length?r[0].href:t.URL}return e}(document)),o=this.parse(n);return o?(this.history[r?"replaceState":"pushState"]({},"",t),this._navigate(o,e?pt():null,s,n.hash)):(location.href=t,new Promise((()=>{})))}async _navigate(t,e,r,s){this.renderer.notify({path:t.path,query:t.query}),location.pathname.endsWith("/")&&"/"!==location.pathname&&history.replaceState({},"",`${location.pathname.slice(0,-1)}${location.search}`),await this.renderer.update(t,r),document.body.focus();const n=s&&document.getElementById(s.slice(1));e?scrollTo(e.x,e.y):n?scrollTo(0,n.getBoundingClientRect().top+scrollY):scrollTo(0,0)}}function dt(t){if(t.error){const e="string"==typeof t.error?new Error(t.error):t.error,r=t.status;return e instanceof Error?!r||r<400||r>599?(console.warn('"error" returned from load() without a valid status code — defaulting to 500'),{status:500,error:e}):{status:r,error:e}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof e}"`)}}if(t.redirect){if(!t.status||3!==Math.floor(t.status/100))return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if("string"!=typeof t.redirect)return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}return t}function gt(t){const e=ht(t);let r=!0;return{notify:function(){r=!0,e.update((t=>t))},set:function(t){r=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||r&&e!==s)&&t(s=e)}))}}}class mt{constructor({Root:t,layout:e,target:r,session:s,host:n}){this.Root=t,this.layout=e,this.host=n,this.router=null,this.target=r,this.started=!1,this.current={page:null,query:null,session_changed:!1,nodes:[],contexts:[]},this.caches=new Map,this.prefetching={id:null,promise:null},this.stores={page:gt({}),navigating:ht(null),session:ht(s)},this.$session=null,this.root=null;const o=t=>{const e=lt(t.target);e&&e.hasAttribute("sveltekit:prefetch")&&this.prefetch(new URL(e.href))};let a;addEventListener("touchstart",o),addEventListener("mousemove",(t=>{clearTimeout(a),a=setTimeout((()=>{o(t)}),20)}));let i=!1;this.stores.session.subscribe((async t=>{if(this.$session=t,!i)return;this.current.session_changed=!0;const e=this.router.parse(new URL(location.href));this.update(e,[])})),i=!0}async start(t,e,r){const s={stores:this.stores,error:r,status:e,page:t.page};if(r)s.components=[this.layout.default];else{const e=await this._hydrate(t);if(e.redirect)return void(location.href=new URL(e.redirect,location.href).href);Object.assign(s,e.props),this.current=e.state}this.root=new this.Root({target:this.target,props:s,hydrate:!0}),this.started=!0}notify({path:t,query:e}){dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t,query:e}})}async update(t,e){const r=this.token={},s=await this._get_navigation_result(t);if(r===this.token){if(s.reload)location.reload();else if(s.redirect){if(!(e.length>10||e.includes(this.current.page.path)))return void this.router.goto(s.redirect,{replaceState:!0},[...e,this.current.page.path]);this.root.$set({status:500,error:new Error("Redirect loop")})}else this.current=s.state,this.root.$set(s.props),this.stores.navigating.set(null),await 0;dispatchEvent(new CustomEvent("sveltekit:navigation-end")),this.prefetching.promise=null,this.prefetching.id=null}}async prefetch(t){const e=this.router.parse(t);if(e)return this.prefetching.promise=this._get_navigation_result(e),this.prefetching.id=e.id,await this.prefetching.promise;throw new Error(`Could not prefetch ${t.href}`)}async _get_navigation_result(t){if(this.prefetching.id===t.id)return this.prefetching.promise;for(let e=0;e<t.routes.length;e+=1){const r=t.routes[e],[s,n,o]=r;if(1===r.length)return{reload:!0};let a=e+1;for(;a<t.routes.length;){const e=t.routes[a];if(e[0].toString()!==s.toString())break;1!==e.length&&e[1].forEach((t=>t())),a+=1}const i=n.map((t=>t())),c={host:this.host,path:t.path,params:o?o(r[0].exec(t.path)):{},query:t.query},l=await this._hydrate({nodes:i,page:c});if(l)return l}return{state:{page:null,query:null,session_changed:!1,contexts:[],nodes:[]},props:{status:404,error:new Error(`Not found: ${t.path}`)}}}async _hydrate({nodes:t,page:n}){const a={status:200,error:null,components:[]},i=(t,n)=>{if(!this.started){const n="string"==typeof t?t:t.url,o=document.querySelector(`script[type="svelte-data"][url="${n}"]`);if(o){const t=JSON.parse(o.textContent),{body:n}=t,a=((t,n)=>{var o={};for(var a in t)e.call(t,a)&&n.indexOf(a)<0&&(o[a]=t[a]);if(null!=t&&r)for(var a of r(t))n.indexOf(a)<0&&s.call(t,a)&&(o[a]=t[a]);return o})(t,["body"]);return Promise.resolve(new Response(n,a))}}return fetch(t,n)},c=n.query.toString(),l={page:n,query:c,session_changed:!1,nodes:[],contexts:[]},u=[this.layout,...t],h=[];let p,f;const d={params:Object.keys(n.params).filter((t=>!this.current.page||this.current.page.params[t]!==n.params[t])),query:c!==this.current.query,session:this.current.session_changed,context:!1};try{for(let t=0;t<u.length;t+=1){const e=this.current.nodes[t],r=this.current.contexts[t],{default:s,preload:g,load:m}=await u[t];if(a.components[t]=s,g)throw new Error("preload has been deprecated in favour of load. Please consult the documentation: https://kit.svelte.dev/docs#load");if(!e||s!==e.component||d.params.some((t=>e.uses.params.has(t)))||d.query&&e.uses.query||d.session&&e.uses.session||d.context&&e.uses.context){const e=n.path+c,r=this.caches.get(s),u=r&&r.get(e);let g,y;if(!u||d.context&&u.node.uses.context){g={component:s,uses:{params:new Set,query:!1,session:!1,context:!1}};const t={};for(const r in n.params)Object.defineProperty(t,r,{get:()=>(g.uses.params.add(r),n.params[r]),enumerable:!0});const e=this.$session;if(m&&(y=await m.call(null,{page:{host:n.host,path:n.path,params:t,get query(){return g.uses.query=!0,n.query}},get session(){return g.uses.session=!0,e},get context(){return g.uses.context=!0,o({},p)},fetch:i}),!y))return}else({node:g,loaded:y}=u);if(y){if(y=dt(y),y.error)return a.error=y.error,a.status=y.status||500,l.nodes=[],{redirect:f,props:a,state:l};if(y.redirect){f=y.redirect;break}if(y.context&&(d.context=!0,p=o(o({},p),y.context)),y.maxage){this.caches.has(s)||this.caches.set(s,new Map);const t=this.caches.get(s),r={node:g,loaded:y};t.set(e,r);let n=!1;const o=setTimeout((()=>{a()}),1e3*y.maxage),a=()=>{t.get(e)===r&&t.delete(e),i(),clearTimeout(o)},i=this.stores.session.subscribe((()=>{n&&a()}));n=!0}h[t]=y.props}l.nodes[t]=g,l.contexts[t]=p}else l.nodes[t]=e,l.contexts[t]=p=r}(await Promise.all(h)).forEach(((t,e)=>{t&&(a[`props_${e}`]=t)})),this.current.page&&n.path===this.current.page.path&&!d.query||(a.page=n)}catch(g){a.error=g,a.status=500,l.nodes=[]}return{redirect:f,props:a,state:l}}}async function yt({paths:t,target:e,session:r,error:s,status:n,nodes:o,page:a}){const i=new ft({base:t.base,routes:ct}),c=new mt({Root:J,layout:ot,target:e,session:r,host:a.host});await c.start({nodes:o,page:a},n,s),i.init(c),dispatchEvent(new CustomEvent("sveltekit:start"))}export{yt as start};
