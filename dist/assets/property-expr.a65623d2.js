function c(e){this._maxSize=e,this.clear()}c.prototype.clear=function(){this._size=0,this._values=Object.create(null)};c.prototype.get=function(e){return this._values[e]};c.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var d=/[^.^\]^[]+|(?=\[\]|\.\.)/g,E=/^\d+$/,m=/^\d/,A=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,x=/^\s*(['"]?)(.*?)(\1)\s*$/,f=512,v=new c(f),g=new c(f),C=new c(f),I={Cache:c,split:h,normalizePath:l,setter:function(e){var t=l(e);return g.get(e)||g.set(e,function(s,n){for(var r=0,o=t.length,u=s;r<o-1;){var a=t[r];if(a==="__proto__"||a==="constructor"||a==="prototype")return s;u=u[t[r++]]}u[t[r]]=n})},getter:function(e,t){var i=l(e);return C.get(e)||C.set(e,function(n){for(var r=0,o=i.length;r<o;)if(n!=null||!t)n=n[i[r++]];else return;return n})},join:function(e){return e.reduce(function(t,i){return t+(_(i)||E.test(i)?"["+i+"]":(t?".":"")+i)},"")},forEach:function(e,t,i){y(Array.isArray(e)?e:h(e),t,i)}};function l(e){return v.get(e)||v.set(e,h(e).map(function(t){return t.replace(x,"$2")}))}function h(e){return e.match(d)}function y(e,t,i){var s=e.length,n,r,o,u;for(r=0;r<s;r++)n=e[r],n&&(S(n)&&(n='"'+n+'"'),u=_(n),o=!u&&/^\d+$/.test(n),t.call(i,n,u,o,r,e))}function _(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function z(e){return e.match(m)&&!e.match(E)}function G(e){return A.test(e)}function S(e){return!_(e)&&(z(e)||G(e))}export{I as p};