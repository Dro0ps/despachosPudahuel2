import{r as l}from"./react.d3c4e055.js";import{c as y,I as d}from"./history.b03a2731.js";import{R as x,u as b,a as k,b as v,c as R}from"./react-router.a5818549.js";/**
 * React Router DOM v6.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function p(){return p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},p.apply(this,arguments)}function j(e,n){if(e==null)return{};var r={},a=Object.keys(e),o,t;for(t=0;t<a.length;t++)o=a[t],!(n.indexOf(o)>=0)&&(r[o]=e[o]);return r}const C=["onClick","reloadDocument","replace","state","target","to"];function E(e){let{basename:n,children:r,window:a}=e,o=l.exports.useRef();o.current==null&&(o.current=y({window:a}));let t=o.current,[i,s]=l.exports.useState({action:t.action,location:t.location});return l.exports.useLayoutEffect(()=>t.listen(s),[t]),l.exports.createElement(x,{basename:n,children:r,location:i.location,navigationType:i.action,navigator:t})}function L(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const B=l.exports.forwardRef(function(n,r){let{onClick:a,reloadDocument:o,replace:t=!1,state:i,target:s,to:c}=n,u=j(n,C),h=b(c),m=w(c,{replace:t,state:i,target:s});function g(f){a&&a(f),!f.defaultPrevented&&!o&&m(f)}return l.exports.createElement("a",p({},u,{href:h,onClick:g,ref:r,target:s}))});function w(e,n){let{target:r,replace:a,state:o}=n===void 0?{}:n,t=k(),i=v(),s=R(e);return l.exports.useCallback(c=>{if(c.button===0&&(!r||r==="_self")&&!L(c)){c.preventDefault();let u=!!a||d(i)===d(s);t(e,{replace:u,state:o})}},[i,t,s,a,o,r,e])}export{E as B,B as L};
