import{S as t,i as e,s,j as i,k as a,H as n,d as l,l as o,f as r,n as c,I as h}from"../../chunks/index-0530b4ef.js";function m(t){let e,s,m,p;return document.title=e=t[0]+" - My SvelteKit test site",{c(){s=i(),p=a(),this.h()},l(t){n('[data-svelte="svelte-1lo8kw9"]',document.head).forEach(l),s=o(t),p=a(),this.h()},h(){m=new h(p)},m(e,i){r(e,s,i),m.m(t[1],e,i),r(e,p,i)},p(t,[s]){1&s&&e!==(e=t[0]+" - My SvelteKit test site")&&(document.title=e),2&s&&m.p(t[1])},i:c,o:c,d(t){t&&l(s),t&&l(p),t&&m.d()}}}async function p({page:t,fetch:e}){const s=t.params.filename,i=await(await e(`/api/content/${s}`)).json(),{properties:a,html:n}=i;return{props:{title:a.title||s,html:n}}}const u=!0;function d(t,e,s){let{title:i}=e,{html:a}=e;return t.$$set=t=>{"title"in t&&s(0,i=t.title),"html"in t&&s(1,a=t.html)},[i,a]}export default class extends t{constructor(t){super(),e(this,t,d,m,s,{title:0,html:1})}}export{p as load,u as prerender};
