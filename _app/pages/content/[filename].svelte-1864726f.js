import{S as t,i as e,s as n,j as i,k as s,F as o,d as l,l as a,f as c,n as r,M as u}from"../../chunks/vendor-2bd7ec54.js";function h(t){let e,n,h,d;return document.title=e=t[0]+" - My SvelteKit test site",{c(){n=i(),d=s(),this.h()},l(t){o('[data-svelte="svelte-1lo8kw9"]',document.head).forEach(l),n=a(t),d=s(),this.h()},h(){h=new u(d)},m(e,i){c(e,n,i),h.m(t[1],e,i),c(e,d,i)},p(t,[n]){1&n&&e!==(e=t[0]+" - My SvelteKit test site")&&(document.title=e),2&n&&h.p(t[1])},i:r,o:r,d(t){t&&l(n),t&&l(d),t&&h.d()}}}var d=function(t,e,n,i){return new(n||(n=Promise))((function(s,o){function l(t){try{c(i.next(t))}catch(e){o(e)}}function a(t){try{c(i.throw(t))}catch(e){o(e)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(l,a)}c((i=i.apply(t,e||[])).next())}))};function f({page:t,fetch:e}){return d(this,void 0,void 0,(function*(){const n=t.params.filename,i=yield(yield e(`/api/content/${n}`)).json(),{properties:s,html:o}=i;return{props:{title:s.title||n,html:o}}}))}const m=!0,p=!1;function v(t,e,n){let{title:i}=e,{html:s}=e;return t.$$set=t=>{"title"in t&&n(0,i=t.title),"html"in t&&n(1,s=t.html)},[i,s]}export default class extends t{constructor(t){super(),e(this,t,v,h,n,{title:0,html:1})}}export{p as hydrate,f as load,m as prerender};