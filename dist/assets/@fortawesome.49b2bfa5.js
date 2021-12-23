import{P as u}from"./prop-types.d6ec705b.js";import{R as _n}from"./react.d3c4e055.js";/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function Nn(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function Q(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function Tn(n,t,r){return t&&Q(n.prototype,t),r&&Q(n,r),n}function Ln(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function c(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},e=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),e.forEach(function(a){Ln(n,a,r[a])})}return n}function Z(n,t){return jn(n)||Rn(n,t)||Dn()}function jn(n){if(Array.isArray(n))return n}function Rn(n,t){var r=[],e=!0,a=!1,i=void 0;try{for(var o=n[Symbol.iterator](),s;!(e=(s=o.next()).done)&&(r.push(s.value),!(t&&r.length===t));e=!0);}catch(l){a=!0,i=l}finally{try{!e&&o.return!=null&&o.return()}finally{if(a)throw i}}return r}function Dn(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var nn=function(){},W={},tn={},Wn=null,en={mark:nn,measure:nn};try{typeof window!="undefined"&&(W=window),typeof document!="undefined"&&(tn=document),typeof MutationObserver!="undefined"&&(Wn=MutationObserver),typeof performance!="undefined"&&(en=performance)}catch{}var $n=W.navigator||{},rn=$n.userAgent,an=rn===void 0?"":rn,N=W,p=tn,T=en;N.document;var $=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function";~an.indexOf("MSIE")||~an.indexOf("Trident/");var O="___FONT_AWESOME___",on="fa",sn="svg-inline--fa",Fn="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var F={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ln=N.FontAwesomeConfig||{};function Un(n){var t=p.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}function Hn(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(p&&typeof p.querySelector=="function"){var Xn=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Xn.forEach(function(n){var t=Z(n,2),r=t[0],e=t[1],a=Hn(Un(r));a!=null&&(ln[e]=a)})}var Yn={familyPrefix:on,replacementClass:sn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},U=c({},Yn,ln);U.autoReplaceSvg||(U.observeMutations=!1);var h=c({},U);N.FontAwesomeConfig=h;var I=N||{};I[O]||(I[O]={});I[O].styles||(I[O].styles={});I[O].hooks||(I[O].hooks={});I[O].shims||(I[O].shims=[]);var k=I[O],Bn=[],Gn=function n(){p.removeEventListener("DOMContentLoaded",n),H=1,Bn.map(function(t){return t()})},H=!1;$&&(H=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),H||p.addEventListener("DOMContentLoaded",Gn));typeof global!="undefined"&&typeof global.process!="undefined"&&global.process.emit;var P={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Vn(n){if(!(!n||!$)){var t=p.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var r=p.head.childNodes,e=null,a=r.length-1;a>-1;a--){var i=r[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return p.head.insertBefore(t,e),n}}var qn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function L(){for(var n=12,t="";n-- >0;)t+=qn[Math.random()*62|0];return t}function fn(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Kn(n){return Object.keys(n||{}).reduce(function(t,r){return t+"".concat(r,'="').concat(fn(n[r]),'" ')},"").trim()}function cn(n){return Object.keys(n||{}).reduce(function(t,r){return t+"".concat(r,": ").concat(n[r],";")},"")}function un(n){return n.size!==P.size||n.x!==P.x||n.y!==P.y||n.rotate!==P.rotate||n.flipX||n.flipY}function mn(n){var t=n.transform,r=n.containerWidth,e=n.iconWidth,a={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(e/2*-1," -256)")};return{outer:a,inner:l,path:f}}var X={x:0,y:0,width:"100%",height:"100%"};function dn(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function Jn(n){return n.tag==="g"?n.children:[n]}function Qn(n){var t=n.children,r=n.attributes,e=n.main,a=n.mask,i=n.maskId,o=n.transform,s=e.width,l=e.icon,f=a.width,m=a.icon,d=mn({transform:o,containerWidth:f,iconWidth:s}),b={tag:"rect",attributes:c({},X,{fill:"white"})},g=l.children?{children:l.children.map(dn)}:{},x={tag:"g",attributes:c({},d.inner),children:[dn(c({tag:l.tag,attributes:c({},l.attributes,d.path)},g))]},y={tag:"g",attributes:c({},d.outer),children:[x]},v="mask-".concat(i||L()),w="clip-".concat(i||L()),z={tag:"mask",attributes:c({},X,{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,y]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Jn(m)},z]};return t.push(E,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(v,")")},X)}),{children:t,attributes:r}}function Zn(n){var t=n.children,r=n.attributes,e=n.main,a=n.transform,i=n.styles,o=cn(i);if(o.length>0&&(r.style=o),un(a)){var s=mn({transform:a,containerWidth:e.width,iconWidth:e.width});t.push({tag:"g",attributes:c({},s.outer),children:[{tag:"g",attributes:c({},s.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:c({},e.icon.attributes,s.path)}]}]})}else t.push(e.icon);return{children:t,attributes:r}}function nt(n){var t=n.children,r=n.main,e=n.mask,a=n.attributes,i=n.styles,o=n.transform;if(un(o)&&r.found&&!e.found){var s=r.width,l=r.height,f={x:s/l/2,y:.5};a.style=cn(c({},i,{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function tt(n){var t=n.prefix,r=n.iconName,e=n.children,a=n.attributes,i=n.symbol,o=i===!0?"".concat(t,"-").concat(h.familyPrefix,"-").concat(r):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c({},a,{id:o}),children:e}]}]}function et(n){var t=n.icons,r=t.main,e=t.mask,a=n.prefix,i=n.iconName,o=n.transform,s=n.symbol,l=n.title,f=n.maskId,m=n.titleId,d=n.extra,b=n.watchable,g=b===void 0?!1:b,x=e.found?e:r,y=x.width,v=x.height,w=a==="fak",z=w?"":"fa-w-".concat(Math.ceil(y/v*16)),E=[h.replacementClass,i?"".concat(h.familyPrefix,"-").concat(i):"",z].filter(function(_){return d.classes.indexOf(_)===-1}).filter(function(_){return _!==""||!!_}).concat(d.classes).join(" "),C={children:[],attributes:c({},d.attributes,{"data-prefix":a,"data-icon":i,class:E,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(v)})},D=w&&!~d.classes.indexOf("fa-fw")?{width:"".concat(y/v*16*.0625,"em")}:{};g&&(C.attributes[Fn]=""),l&&C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(m||L())},children:[l]});var A=c({},C,{prefix:a,iconName:i,main:r,mask:e,maskId:f,transform:o,symbol:s,styles:c({},D,d.styles)}),J=e.found&&r.found?Qn(A):Zn(A),En=J.children,Sn=J.attributes;return A.children=En,A.attributes=Sn,s?tt(A):nt(A)}var pn=function(){};h.measurePerformance&&T&&T.mark&&T.measure;var rt=function(t,r){return function(e,a,i,o){return t.call(r,e,a,i,o)}},Y=function(t,r,e,a){var i=Object.keys(t),o=i.length,s=a!==void 0?rt(r,a):r,l,f,m;for(e===void 0?(l=1,m=t[i[0]]):(l=0,m=e);l<o;l++)f=i[l],m=s(m,t[f],f,t);return m};function gn(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=r.skipHooks,a=e===void 0?!1:e,i=Object.keys(t).reduce(function(o,s){var l=t[s],f=!!l.icon;return f?o[l.iconName]=l.icon:o[s]=l,o},{});typeof k.hooks.addPack=="function"&&!a?k.hooks.addPack(n,i):k.styles[n]=c({},k.styles[n]||{},i),n==="fas"&&gn("fa",t)}var vn=k.styles,at=k.shims,hn=function(){var t=function(a){return Y(vn,function(i,o,s){return i[s]=Y(o,a,{}),i},{})};t(function(e,a,i){return a[3]&&(e[a[3]]=i),e}),t(function(e,a,i){var o=a[2];return e[i]=i,o.forEach(function(s){e[s]=i}),e});var r="far"in vn;Y(at,function(e,a){var i=a[0],o=a[1],s=a[2];return o==="far"&&!r&&(o="fas"),e[i]={prefix:o,iconName:s},e},{})};hn();k.styles;function bn(n,t,r){if(n&&n[t]&&n[t][r])return{prefix:t,iconName:r,icon:n[t][r]}}function yn(n){var t=n.tag,r=n.attributes,e=r===void 0?{}:r,a=n.children,i=a===void 0?[]:a;return typeof n=="string"?fn(n):"<".concat(t," ").concat(Kn(e),">").concat(i.map(yn).join(""),"</").concat(t,">")}var it=function(t){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(e,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},r):r};function B(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=new Error().stack}B.prototype=Object.create(Error.prototype);B.prototype.constructor=B;var j={fill:"currentColor"},wn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};c({},j,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var G=c({},wn,{attributeName:"opacity"});c({},j,{cx:"256",cy:"364",r:"28"}),c({},wn,{attributeName:"r",values:"28;14;28;28;14;28;"}),c({},G,{values:"1;0;1;1;0;1;"});c({},j,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),c({},G,{values:"1;0;0;0;0;1;"});c({},j,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),c({},G,{values:"0;0;1;1;0;0;"});k.styles;function kn(n){var t=n[0],r=n[1],e=n.slice(4),a=Z(e,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(h.familyPrefix,"-").concat(F.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.familyPrefix,"-").concat(F.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(h.familyPrefix,"-").concat(F.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:r,icon:o}}k.styles;var ot=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function st(){var n=on,t=sn,r=h.familyPrefix,e=h.replacementClass,a=ot;if(r!==n||e!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(r,"-")).replace(o,"--".concat(r,"-")).replace(s,".".concat(e))}return a}var lt=function(){function n(){Nn(this,n),this.definitions={}}return Tn(n,[{key:"add",value:function(){for(var r=this,e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){r.definitions[s]=c({},r.definitions[s]||{},o[s]),gn(s,o[s]),hn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,e){var a=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon;r[s]||(r[s]={}),r[s][l]=f}),r}}]),n}();function ft(){h.autoAddCss&&!On&&(Vn(st()),On=!0)}function ct(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(e){return yn(e)})}}),Object.defineProperty(n,"node",{get:function(){if(!!$){var e=p.createElement("div");return e.innerHTML=n.html,e.children}}}),n}function xn(n){var t=n.prefix,r=t===void 0?"fa":t,e=n.iconName;if(!!e)return bn(mt.definitions,r,e)||bn(k.styles,r,e)}function ut(n){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(t||{}).icon?t:xn(t||{}),a=r.mask;return a&&(a=(a||{}).icon?a:xn(a||{})),n(e,c({},r,{mask:a}))}}var mt=new lt,On=!1,dt={transform:function(t){return it(t)}},pt=ut(function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.transform,e=r===void 0?P:r,a=t.symbol,i=a===void 0?!1:a,o=t.mask,s=o===void 0?null:o,l=t.maskId,f=l===void 0?null:l,m=t.title,d=m===void 0?null:m,b=t.titleId,g=b===void 0?null:b,x=t.classes,y=x===void 0?[]:x,v=t.attributes,w=v===void 0?{}:v,z=t.styles,E=z===void 0?{}:z;if(!!n){var C=n.prefix,D=n.iconName,A=n.icon;return ct(c({type:"icon"},n),function(){return ft(),h.autoA11y&&(d?w["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(g||L()):(w["aria-hidden"]="true",w.focusable="false")),et({icons:{main:kn(A),mask:s?kn(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:D,transform:c({},P,e),symbol:i,title:d,maskId:f,titleId:g,extra:{attributes:w,styles:E,classes:y}})})}});function S(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(t){return typeof t}:S=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(n)}function M(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function In(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),r.push.apply(r,e)}return r}function V(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?In(Object(r),!0).forEach(function(e){M(n,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):In(Object(r)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))})}return n}function gt(n,t){if(n==null)return{};var r={},e=Object.keys(n),a,i;for(i=0;i<e.length;i++)a=e[i],!(t.indexOf(a)>=0)&&(r[a]=n[a]);return r}function An(n,t){if(n==null)return{};var r=gt(n,t),e,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)e=i[a],!(t.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,e)||(r[e]=n[e]))}return r}function q(n){return vt(n)||ht(n)||bt()}function vt(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}function ht(n){if(Symbol.iterator in Object(n)||Object.prototype.toString.call(n)==="[object Arguments]")return Array.from(n)}function bt(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function yt(n){var t,r=n.spin,e=n.pulse,a=n.fixedWidth,i=n.inverse,o=n.border,s=n.listItem,l=n.flip,f=n.size,m=n.rotation,d=n.pull,b=(t={"fa-spin":r,"fa-pulse":e,"fa-fw":a,"fa-inverse":i,"fa-border":o,"fa-li":s,"fa-flip-horizontal":l==="horizontal"||l==="both","fa-flip-vertical":l==="vertical"||l==="both"},M(t,"fa-".concat(f),typeof f!="undefined"&&f!==null),M(t,"fa-rotate-".concat(m),typeof m!="undefined"&&m!==null&&m!==0),M(t,"fa-pull-".concat(d),typeof d!="undefined"&&d!==null),M(t,"fa-swap-opacity",n.swapOpacity),t);return Object.keys(b).map(function(g){return b[g]?g:null}).filter(function(g){return g})}function wt(n){return n=n-0,n===n}function zn(n){return wt(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(t,r){return r?r.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}function kt(n){return n.charAt(0).toUpperCase()+n.slice(1)}function xt(n){return n.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,r){var e=r.indexOf(":"),a=zn(r.slice(0,e)),i=r.slice(e+1).trim();return a.startsWith("webkit")?t[kt(a)]=i:t[a]=i,t},{})}function Cn(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var e=(t.children||[]).map(function(l){return Cn(n,l)}),a=Object.keys(t.attributes||{}).reduce(function(l,f){var m=t.attributes[f];switch(f){case"class":l.attrs.className=m,delete t.attributes.class;break;case"style":l.attrs.style=xt(m);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=m:l.attrs[zn(f)]=m}return l},{attrs:{}}),i=r.style,o=i===void 0?{}:i,s=An(r,["style"]);return a.attrs.style=V({},a.attrs.style,{},o),n.apply(void 0,[t.tag,V({},a.attrs,{},s)].concat(q(e)))}var Pn=!1;try{Pn=!0}catch{}function Ot(){if(!Pn&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function Mn(n){if(n&&S(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(n===null)return null;if(n&&S(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function K(n,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?M({},n,t):{}}function R(n){var t=n.forwardedRef,r=An(n,["forwardedRef"]),e=r.icon,a=r.mask,i=r.symbol,o=r.className,s=r.title,l=r.titleId,f=Mn(e),m=K("classes",[].concat(q(yt(r)),q(o.split(" ")))),d=K("transform",typeof r.transform=="string"?dt.transform(r.transform):r.transform),b=K("mask",Mn(a)),g=pt(f,V({},m,{},d,{},b,{symbol:i,title:s,titleId:l}));if(!g)return Ot("Could not find icon",f),null;var x=g.abstract,y={ref:t};return Object.keys(r).forEach(function(v){R.defaultProps.hasOwnProperty(v)||(y[v]=r[v])}),It(x[0],y)}R.displayName="FontAwesomeIcon";R.propTypes={border:u.bool,className:u.string,mask:u.oneOfType([u.object,u.array,u.string]),fixedWidth:u.bool,inverse:u.bool,flip:u.oneOf(["horizontal","vertical","both"]),icon:u.oneOfType([u.object,u.array,u.string]),listItem:u.bool,pull:u.oneOf(["right","left"]),pulse:u.bool,rotation:u.oneOf([0,90,180,270]),size:u.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:u.bool,symbol:u.oneOfType([u.bool,u.string]),title:u.string,transform:u.oneOfType([u.string,u.object]),swapOpacity:u.bool};R.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var It=Cn.bind(null,_n.createElement);/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var Ct={prefix:"fas",iconName:"file-download",icon:[384,512,[],"f56d","M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"]};export{R as F,Ct as f};
