import{S as e,i as t,s as r,t as n,b as s,f as o,h as i,n as a,d as l}from"./vendor-2bd7ec54.js";let d;const c={},u=function(e,t){if(!t)return e();if(void 0===d){const e=document.createElement("link").relList;d=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in c)return;c[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":d,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))};function m(e){let t,r=(!e[0]||e[1]<=e[0]?e[1].toString():`${e[0]}-${e[1]}`)+"";return{c(){t=n(r)},l(e){t=s(e,r)},m(e,r){o(e,t,r)},p(e,[n]){1&n&&r!==(r=(!e[0]||e[1]<=e[0]?e[1].toString():`${e[0]}-${e[1]}`)+"")&&i(t,r)},i:a,o:a,d(e){e&&l(t)}}}function f(e,t,r){let{from:n}=t;const s=(new Date).getUTCFullYear();return e.$$set=e=>{"from"in e&&r(0,n=e.from)},[n,s]}class p extends e{constructor(e){super(),t(this,e,f,m,r,{from:0})}}export{p as Y,u as _};
