/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)==55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)==56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},kl=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Rl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),s.push(n[l],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),u!==64){const p=a<<4&240|u>>2;if(s.push(p),h!==64){const m=u<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Cl=function(t){try{return Rl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oo(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(H())}function ao(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function co(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dl(){return H().indexOf("Electron/")>=0}function uo(){const t=H();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ol(){return H().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="FirebaseError";class qe extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=Pl,Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mt.prototype.create)}}class Mt{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Ll(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new qe(r,a,s)}}function Ll(t,e){return t.replace(Ml,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Ml=/\{\$([^}]+)}/g;function Ul(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function On(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(lo(i)&&lo(o)){if(!On(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function lo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function xt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Ft(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xl(t,e){const n=new Fl(t,e);return n.subscribe.bind(n)}class Fl{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Vl(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ys),r.error===void 0&&(r.error=Ys),r.complete===void 0&&(r.complete=Ys);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vl(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ys(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){return t&&t._delegate?t._delegate:t}class je{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Nl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ql(e))try{this.getOrInitializeService({instanceIdentifier:He})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=He){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=He){return this.instances.has(e)}getOptions(e=He){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$l(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=He){return this.component?this.component.multipleInstances?e:He:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $l(t){return t===He?void 0:t}function ql(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Bl(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(R||(R={}));const Hl={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},zl=R.INFO,Wl={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},Kl=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Wl[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qs{constructor(e){this.name=e,this._logLevel=zl,this._logHandler=Kl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xl(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Xl(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zs="@firebase/app",ho="0.7.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new Qs("@firebase/app"),Jl="@firebase/app-compat",Yl="@firebase/analytics-compat",Ql="@firebase/analytics",Zl="@firebase/app-check-compat",eh="@firebase/app-check",th="@firebase/auth",nh="@firebase/auth-compat",sh="@firebase/database",rh="@firebase/database-compat",ih="@firebase/functions",oh="@firebase/functions-compat",ah="@firebase/installations",ch="@firebase/installations-compat",uh="@firebase/messaging",lh="@firebase/messaging-compat",hh="@firebase/performance",dh="@firebase/performance-compat",fh="@firebase/remote-config",ph="@firebase/remote-config-compat",gh="@firebase/storage",mh="@firebase/storage-compat",yh="@firebase/firestore",vh="@firebase/firestore-compat",wh="firebase",_h="9.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo="[DEFAULT]",Eh={[Zs]:"fire-core",[Jl]:"fire-core-compat",[Ql]:"fire-analytics",[Yl]:"fire-analytics-compat",[eh]:"fire-app-check",[Zl]:"fire-app-check-compat",[th]:"fire-auth",[nh]:"fire-auth-compat",[sh]:"fire-rtdb",[rh]:"fire-rtdb-compat",[ih]:"fire-fn",[oh]:"fire-fn-compat",[ah]:"fire-iid",[ch]:"fire-iid-compat",[uh]:"fire-fcm",[lh]:"fire-fcm-compat",[hh]:"fire-perf",[dh]:"fire-perf-compat",[fh]:"fire-rc",[ph]:"fire-rc-compat",[gh]:"fire-gcs",[mh]:"fire-gcs-compat",[yh]:"fire-fst",[vh]:"fire-fst-compat","fire-js":"fire-js",[wh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new Map,tr=new Map;function Th(t,e){try{t.container.addComponent(e)}catch(n){er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(tr.has(e))return er.debug(`There were multiple attempts to register component ${e}.`),!1;tr.set(e,t);for(const n of Pn.values())Th(n,t);return!0}function Ln(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Mn=new Mt("app","Firebase",Ih);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=_h;function _v(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:fo,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Mn.create("bad-app-name",{appName:String(s)});const r=Pn.get(s);if(r){if(On(t,r.options)&&On(n,r.config))return r;throw Mn.create("duplicate-app",{appName:s})}const i=new jl(s);for(const a of tr.values())i.addComponent(a);const o=new Sh(t,n,i);return Pn.set(s,o),o}function nr(t=fo){const e=Pn.get(t);if(!e)throw Mn.create("no-app",{appName:t});return e}function Ee(t,e,n){var s;let r=(s=Eh[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),er.warn(a.join(" "));return}lt(new je(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(t){lt(new je("platform-logger",e=>new Gl(e),"PRIVATE")),Ee(Zs,ho,t),Ee(Zs,ho,"esm2017"),Ee("fire-js","")}Ah("");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function sr(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function po(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bh=po,go=new Mt("auth","Firebase",po());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new Qs("@firebase/auth");function Un(t,...e){mo.logLevel<=R.ERROR&&mo.error(`Auth (${ht}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t,...e){throw rr(t,...e)}function me(t,...e){return rr(t,...e)}function kh(t,e,n){const s=Object.assign(Object.assign({},bh()),{[e]:n});return new Mt("auth","Firebase",s).create(e,{appName:t.name})}function rr(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return go.create(t,...e)}function _(t,e,...n){if(!t)throw rr(e,...n)}function Te(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Un(e),new Error(e)}function Ie(t,e){t||Te(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new Map;function Se(t){Ie(t instanceof Function,"Expected a class definition");let e=yo.get(t);return e?(Ie(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,yo.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(t,e){const n=Ln(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(On(i,e!=null?e:{}))return r;pe(r,"already-initialized")}return n.initialize({options:e})}function Ch(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Se);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Nh(){return vo()==="http:"||vo()==="https:"}function vo(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nh()||ao()||"connection"in navigator)?navigator.onLine:!0}function Oh(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ie(n>e,"Short delay should be less than long delay!"),this.isMobile=oo()||co()}get(){return Dh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,e){Ie(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Te("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Te("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Te("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=new Vt(3e4,6e4);function xn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bt(t,e,n,s,r={}){return _o(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Ut(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),wo.fetch()(Eo(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function _o(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ph),e);try{const r=new Mh(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ar(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ar(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ar(t,"email-already-in-use",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw kh(t,l,u);pe(t,l)}}catch(r){if(r instanceof qe)throw r;pe(t,"network-request-failed")}}async function Fn(t,e,n,s,r={}){const i=await Bt(t,e,n,s,r);return"mfaPendingCredential"in i&&pe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Eo(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?or(t.config,r):`${t.config.apiScheme}://${r}`}class Mh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(me(this.auth,"timeout")),Lh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ar(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=me(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uh(t,e){return Bt(t,"POST","/v1/accounts:delete",e)}async function xh(t,e){return Bt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fh(t,e=!1){const n=j(t),s=await n.getIdToken(e),r=ur(s);_(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:$t(cr(r.auth_time)),issuedAtTime:$t(cr(r.iat)),expirationTime:$t(cr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function cr(t){return Number(t)*1e3}function ur(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Un("JWT malformed, contained fewer than 3 sections"),null;try{const r=Cl(n);return r?JSON.parse(r):(Un("Failed to decode base64 JWT payload"),null)}catch(r){return Un("Caught error parsing JWT payload as JSON",r),null}}function Vh(t){const e=ur(t);return _(e,"internal-error"),_(typeof e.exp!="undefined","internal-error"),_(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof qe&&Bh(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Bh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$t(this.lastLoginAt),this.creationTime=$t(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(t){var e;const n=t.auth,s=await t.getIdToken(),r=await qt(t,xh(n,{idToken:s}));_(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=((e=i.providerUserInfo)===null||e===void 0?void 0:e.length)?Hh(i.providerUserInfo):[],a=jh(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a==null?void 0:a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new To(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function qh(t){const e=j(t);await Vn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jh(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Hh(t){return t.map(e=>{var{providerId:n}=e,s=sr(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zh(t,e){const n=await _o(t,{},async()=>{const s=Ut({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Eo(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wo.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(typeof e.idToken!="undefined","internal-error"),_(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Vh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await zh(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new jt;return s&&(_(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(_(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(_(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jt,this.toJSON())}_performRefresh(){return Te("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(t,e){_(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class ze{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=sr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new $h(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new To(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await qt(this,this.stsTokenManager.getToken(this.auth,e));return _(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Fh(this,e)}reload(){return qh(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ze(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Vn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qt(this,Uh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,q=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:F,emailVerified:L,isAnonymous:ge,providerData:_e,stsTokenManager:$e}=n;_(F&&$e,e,"internal-error");const Lt=jt.fromJSON(this.name,$e);_(typeof F=="string",e,"internal-error"),Ce(h,e.name),Ce(d,e.name),_(typeof L=="boolean",e,"internal-error"),_(typeof ge=="boolean",e,"internal-error"),Ce(p,e.name),Ce(m,e.name),Ce(b,e.name),Ce(A,e.name),Ce(q,e.name),Ce(x,e.name);const Js=new ze({uid:F,auth:e,email:d,emailVerified:L,displayName:h,isAnonymous:ge,photoURL:m,phoneNumber:p,tenantId:b,stsTokenManager:Lt,createdAt:q,lastLoginAt:x});return _e&&Array.isArray(_e)&&(Js.providerData=_e.map(Al=>Object.assign({},Al))),A&&(Js._redirectEventId=A),Js}static async _fromIdTokenResponse(e,n,s=!1){const r=new jt;r.updateFromServerResponse(n);const i=new ze({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Vn(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Io.type="NONE";const So=Io;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,e,n){return`firebase:${t}:${e}:${n}`}class dt{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Bn(this.userKey,r.apiKey,i),this.fullPersistenceKey=Bn("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ze._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new dt(Se(So),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Se(So);const o=Bn(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=ze._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new dt(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new dt(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ro(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bo(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(No(e))return"Blackberry";if(Do(e))return"Webos";if(lr(e))return"Safari";if((e.includes("chrome/")||ko(e))&&!e.includes("edge/"))return"Chrome";if(Co(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function bo(t=H()){return/firefox\//i.test(t)}function lr(t=H()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ko(t=H()){return/crios\//i.test(t)}function Ro(t=H()){return/iemobile/i.test(t)}function Co(t=H()){return/android/i.test(t)}function No(t=H()){return/blackberry/i.test(t)}function Do(t=H()){return/webos/i.test(t)}function $n(t=H()){return/iphone|ipad|ipod/i.test(t)}function Wh(t=H()){var e;return $n(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function Kh(){return uo()&&document.documentMode===10}function Oo(t=H()){return $n(t)||Co(t)||Do(t)||No(t)||/windows phone/i.test(t)||Ro(t)}function Gh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t,e=[]){let n;switch(t){case"Browser":n=Ao(H());break;case"Worker":n=`${Ao(H())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ht}/${s}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lo(this),this.idTokenSubscription=new Lo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=go,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Se(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await dt.create(this,e),!this._deleted)){if((s=this._popupRedirectResolver)===null||s===void 0?void 0:s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let s=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===i)&&(o==null?void 0:o.user)&&(s=o.user)}return s?s._redirectEventId?(_(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)):this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vn(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Oh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?j(e):null;return n&&_(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Se(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mt("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Se(e)||this._popupRedirectResolver;_(n,this,"argument-error"),this.redirectPersistenceManager=await dt.create(this,[Se(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return _(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Po(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function hr(t){return j(t)}class Lo{constructor(e){this.auth=e,this.observer=null,this.addObserver=xl(n=>this.observer=n)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Te("not implemented")}_getIdTokenResponse(e){return Te("not implemented")}_linkToIdToken(e,n){return Te("not implemented")}_getReauthenticationResolver(e){return Te("not implemented")}}async function Jh(t,e){return Bt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yh(t,e){return Fn(t,"POST","/v1/accounts:signInWithPassword",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qh(t,e){return Fn(t,"POST","/v1/accounts:signInWithEmailLink",xn(t,e))}async function Zh(t,e){return Fn(t,"POST","/v1/accounts:signInWithEmailLink",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends dr{constructor(e,n,s,r=null){super("password",s);this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Ht(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ht(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Yh(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qh(e,{email:this._email,oobCode:this._password});default:pe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Jh(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Zh(e,{idToken:n,email:this._email,oobCode:this._password});default:pe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(t,e){return Fn(t,"POST","/v1/accounts:signInWithIdp",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="http://localhost";class We extends dr{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new We(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=sr(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new We(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ft(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ft(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ft(e,n)}buildRequest(){const e={requestUri:ed,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ut(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nd(t){const e=xt(Ft(t)).link,n=e?xt(Ft(e)).deep_link_id:null,s=xt(Ft(t)).deep_link_id;return(s?xt(Ft(s)).link:null)||s||n||e||t}class fr{constructor(e){var n,s,r,i,o,a;const c=xt(Ft(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=td((r=c.mode)!==null&&r!==void 0?r:null);_(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=nd(e);try{return new fr(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(){this.providerId=pt.PROVIDER_ID}static credential(e,n){return Ht._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=fr.parseLink(n);return _(s,"argument-error"),Ht._fromEmailAndCode(e,s.code,s.tenantId)}}pt.PROVIDER_ID="password";pt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Mo{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends zt{constructor(){super("facebook.com")}static credential(e){return We._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ne.credential(e.oauthAccessToken)}catch{return null}}}Ne.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ne.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends zt{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return We._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return De.credential(n,s)}catch{return null}}}De.GOOGLE_SIGN_IN_METHOD="google.com";De.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends zt{constructor(){super("github.com")}static credential(e){return We._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Oe.credential(e.oauthAccessToken)}catch{return null}}}Oe.GITHUB_SIGN_IN_METHOD="github.com";Oe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends zt{constructor(){super("twitter.com")}static credential(e,n){return We._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Pe.credential(n,s)}catch{return null}}}Pe.TWITTER_SIGN_IN_METHOD="twitter.com";Pe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await ze._fromIdTokenResponse(e,s,r),o=Uo(s);return new gt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Uo(s);return new gt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Uo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends qe{constructor(e,n,s,r){var i;super(n.code,n.message);this.operationType=s,this.user=r,Object.setPrototypeOf(this,qn.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new qn(e,n,s,r)}}function xo(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qn._fromErrorAndOperation(t,i,e,s):i})}async function sd(t,e,n=!1){const s=await qt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gt._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rd(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await qt(t,xo(s,r,e,t),n);_(i.idToken,s,"internal-error");const o=ur(i.idToken);_(o,s,"internal-error");const{sub:a}=o;return _(t.uid===a,s,"user-mismatch"),gt._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&pe(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(t,e,n=!1){const s="signIn",r=await xo(t,s,e),i=await gt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function id(t,e){return Fo(hr(t),e)}function Ev(t,e,n){return id(j(t),pt.credential(e,n))}function Tv(t,e,n,s){return j(t).onAuthStateChanged(e,n,s)}function Iv(t){return j(t).signOut()}const jn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jn,"1"),this.storage.removeItem(jn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(){const t=H();return lr(t)||$n(t)}const ad=1e3,cd=10;class Bo extends Vo{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=od()&&Gh(),this.fallbackToPolling=Oo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Kh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,cd):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ad)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bo.type="LOCAL";const ud=Bo;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends Vo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$o.type="SESSION";const qo=$o;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Hn(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await ld(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=pr("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(){return window}function dd(t){ye().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(){return typeof ye().WorkerGlobalScope!="undefined"&&typeof ye().importScripts=="function"}async function fd(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pd(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gd(){return jo()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho="firebaseLocalStorageDb",md=1,zn="firebaseLocalStorage",zo="fbase_key";class Wt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wn(t,e){return t.transaction([zn],e?"readwrite":"readonly").objectStore(zn)}function yd(){const t=indexedDB.deleteDatabase(Ho);return new Wt(t).toPromise()}function gr(){const t=indexedDB.open(Ho,md);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(zn,{keyPath:zo})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(zn)?e(s):(s.close(),await yd(),e(await gr()))})})}async function Wo(t,e,n){const s=Wn(t,!0).put({[zo]:e,value:n});return new Wt(s).toPromise()}async function vd(t,e){const n=Wn(t,!1).get(e),s=await new Wt(n).toPromise();return s===void 0?null:s.value}function Ko(t,e){const n=Wn(t,!0).delete(e);return new Wt(n).toPromise()}const wd=800,_d=3;class Go{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>_d)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hn._getInstance(gd()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fd(),!this.activeServiceWorker)return;this.sender=new hd(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pd()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gr();return await Wo(e,jn,"1"),await Ko(e,jn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Wo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>vd(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ko(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Wn(r,!1).getAll();return new Wt(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Go.type="LOCAL";const Ed=Go;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Id(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=me("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Td().appendChild(s)})}function Sd(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Vt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t,e){return e?Se(e):(_(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends dr{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return ft(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ft(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bd(t){return Fo(t.auth,new mr(t),t.bypassAuthState)}function kd(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),rd(n,new mr(t),t.bypassAuthState)}async function Rd(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),sd(n,new mr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bd;case"linkViaPopup":case"linkViaRedirect":return Rd;case"reauthViaPopup":case"reauthViaRedirect":return kd;default:pe(this.auth,"internal-error")}}resolve(e){Ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=new Vt(2e3,1e4);class mt extends Xo{constructor(e,n,s,r,i){super(e,n,r,i);this.provider=s,this.authWindow=null,this.pollId=null,mt.currentPopupAction&&mt.currentPopupAction.cancel(),mt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){Ie(this.filter.length===1,"Popup operations only handle one event");const e=pr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0?void 0:s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(me(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Cd.get())};e()}}mt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="pendingRedirect",yr=new Map;class Dd extends Xo{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s);this.eventId=null}async execute(){let e=yr.get(this.auth._key());if(!e){try{const s=await Od(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}yr.set(this.auth._key(),e)}return this.bypassAuthState||yr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Od(t,e){const n=Ld(e),s=Pd(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Pd(t){return Se(t._redirectPersistence)}function Ld(t){return Bn(Nd,t.config.apiKey,t.name)}async function Md(t,e,n=!1){const s=hr(t),r=Ad(s,e),o=await new Dd(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud=10*60*1e3;class xd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Fd(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Yo(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(me(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ud&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jo(e))}saveEventToCache(e){this.cachedEventUids.add(Jo(e)),this.lastProcessedEventTime=Date.now()}}function Jo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yo({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Fd(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yo(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vd(t,e={}){return Bt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$d=/^https?/;async function qd(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Vd(t);for(const n of e)try{if(jd(n))return}catch{}pe(t,"unauthorized-domain")}function jd(t){const e=ir(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!$d.test(n))return!1;if(Bd.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=new Vt(3e4,6e4);function Qo(){const t=ye().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zd(t){return new Promise((e,n)=>{var s,r,i;function o(){Qo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qo(),n(me(t,"network-request-failed"))},timeout:Hd.get()})}if((r=(s=ye().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0?void 0:r.Iframe)e(gapi.iframes.getContext());else if((i=ye().gapi)===null||i===void 0?void 0:i.load)o();else{const a=Sd("iframefcb");return ye()[a]=()=>{gapi.load?o():n(me(t,"network-request-failed"))},Id(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Kn=null,e})}let Kn=null;function Wd(t){return Kn=Kn||zd(t),Kn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=new Vt(5e3,15e3),Gd="__/auth/iframe",Xd="emulator/auth/iframe",Jd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qd(t){const e=t.config;_(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?or(e,Xd):`https://${t.config.authDomain}/${Gd}`,s={apiKey:e.apiKey,appName:t.name,v:ht},r=Yd.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Ut(s).slice(1)}`}async function Zd(t){const e=await Wd(t),n=ye().gapi;return _(n,t,"internal-error"),e.open({where:document.body,url:Qd(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jd,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=me(t,"network-request-failed"),a=ye().setTimeout(()=>{i(o)},Kd.get());function c(){ye().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tf=500,nf=600,sf="_blank",rf="http://localhost";class Zo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function of(t,e,n,s=tf,r=nf){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ef),{width:s.toString(),height:r.toString(),top:i,left:o}),u=H().toLowerCase();n&&(a=ko(u)?sf:n),bo(u)&&(e=e||rf,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(Wh(u)&&a!=="_self")return af(e||"",a),new Zo(null);const h=window.open(e||"",a,l);_(h,t,"popup-blocked");try{h.focus()}catch{}return new Zo(h)}function af(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="__/auth/handler",uf="emulator/auth/handler";function ea(t,e,n,s,r,i){_(t.config.authDomain,t,"auth-domain-config-required"),_(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ht,eventId:r};if(e instanceof Mo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ul(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof zt){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${lf(t)}?${Ut(a).slice(1)}`}function lf({config:t}){return t.emulator?or(t,uf):`https://${t.authDomain}/${cf}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="webStorageSupport";class hf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qo,this._completeRedirectFn=Md}async _openPopup(e,n,s,r){var i;Ie((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ea(e,n,s,ir(),r);return of(e,o,pr())}async _openRedirect(e,n,s,r){return await this._originValidation(e),dd(ea(e,n,s,ir(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Ie(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Zd(e),s=new xd(e);return n.register("authEvent",r=>(_(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vr,{type:vr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[vr];o!==void 0&&n(!!o),pe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qd(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Oo()||lr()||$n()}}const df=hf;var ta="@firebase/auth",na="0.19.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gf(t){lt(new je("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=s.options;return(o=>{_(r&&!r.includes(":"),"invalid-api-key",{appName:o.name}),_(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:r,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Po(t)},c=new Xh(o,a);return Ch(c,n),c})(s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),lt(new je("auth-internal",e=>{const n=hr(e.getProvider("auth").getImmediate());return(s=>new ff(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ee(ta,na,pf(t)),Ee(ta,na,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(t=nr()){const e=Ln(t,"auth");return e.isInitialized()?e.getImmediate():Rh(t,{popupRedirectResolver:df,persistence:[Ed,ud,qo]})}gf("Browser");var mf=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},y,wr=wr||{},E=mf||self;function Gn(){}function _r(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Kt(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function yf(t){return Object.prototype.hasOwnProperty.call(t,Er)&&t[Er]||(t[Er]=++vf)}var Er="closure_uid_"+(1e9*Math.random()>>>0),vf=0;function wf(t,e,n){return t.call.apply(t.bind,arguments)}function _f(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function K(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?K=wf:K=_f,K.apply(null,arguments)}function Xn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function G(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Le(){this.s=this.s,this.o=this.o}var Ef=0,Tf={};Le.prototype.s=!1;Le.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Ef!=0)){var t=yf(this);delete Tf[t]}};Le.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const sa=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},ra=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function If(t){e:{var e=pp;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function ia(t){return Array.prototype.concat.apply([],arguments)}function Tr(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Jn(t){return/^[\s\xa0]*$/.test(t)}var oa=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ne(t,e){return t.indexOf(e)!=-1}function Ir(t,e){return t<e?-1:t>e?1:0}var se;e:{var aa=E.navigator;if(aa){var ca=aa.userAgent;if(ca){se=ca;break e}}se=""}function Sr(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ua(t){const e={};for(const n in t)e[n]=t[n];return e}var la="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ha(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<la.length;i++)n=la[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ar(t){return Ar[" "](t),t}Ar[" "]=Gn;function Sf(t){var e=kf;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Af=ne(se,"Opera"),yt=ne(se,"Trident")||ne(se,"MSIE"),da=ne(se,"Edge"),br=da||yt,fa=ne(se,"Gecko")&&!(ne(se.toLowerCase(),"webkit")&&!ne(se,"Edge"))&&!(ne(se,"Trident")||ne(se,"MSIE"))&&!ne(se,"Edge"),bf=ne(se.toLowerCase(),"webkit")&&!ne(se,"Edge");function pa(){var t=E.document;return t?t.documentMode:void 0}var Yn;e:{var kr="",Rr=function(){var t=se;if(fa)return/rv:([^\);]+)(\)|;)/.exec(t);if(da)return/Edge\/([\d\.]+)/.exec(t);if(yt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(bf)return/WebKit\/(\S+)/.exec(t);if(Af)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Rr&&(kr=Rr?Rr[1]:""),yt){var Cr=pa();if(Cr!=null&&Cr>parseFloat(kr)){Yn=String(Cr);break e}}Yn=kr}var kf={};function Rf(){return Sf(function(){let t=0;const e=oa(String(Yn)).split("."),n=oa("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ir(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ir(r[2].length==0,i[2].length==0)||Ir(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Nr;if(E.document&&yt){var ga=pa();Nr=ga||parseInt(Yn,10)||void 0}else Nr=void 0;var Cf=Nr,Nf=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{E.addEventListener("test",Gn,e),E.removeEventListener("test",Gn,e)}catch{}return t}();function Q(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Q.prototype.h=function(){this.defaultPrevented=!0};function Gt(t,e){if(Q.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(fa){e:{try{Ar(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Df[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Gt.Z.h.call(this)}}G(Gt,Q);var Df={2:"touch",3:"pen",4:"mouse"};Gt.prototype.h=function(){Gt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Xt="closure_listenable_"+(1e6*Math.random()|0),Of=0;function Pf(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++Of,this.ca=this.fa=!1}function Qn(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Zn(t){this.src=t,this.g={},this.h=0}Zn.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Or(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Pf(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function Dr(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=sa(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Qn(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Or(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var Pr="closure_lm_"+(1e6*Math.random()|0),Lr={};function ma(t,e,n,s,r){if(s&&s.once)return va(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ma(t,e[i],n,s,r);return null}return n=Fr(n),t&&t[Xt]?t.N(e,n,Kt(s)?!!s.capture:!!s,r):ya(t,e,n,!1,s,r)}function ya(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Kt(r)?!!r.capture:!!r,a=Ur(t);if(a||(t[Pr]=a=new Zn(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Lf(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Nf||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(_a(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Lf(){function t(n){return e.call(t.src,t.listener,n)}var e=Mf;return t}function va(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)va(t,e[i],n,s,r);return null}return n=Fr(n),t&&t[Xt]?t.O(e,n,Kt(s)?!!s.capture:!!s,r):ya(t,e,n,!0,s,r)}function wa(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)wa(t,e[i],n,s,r);else s=Kt(s)?!!s.capture:!!s,n=Fr(n),t&&t[Xt]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Or(i,n,s,r),-1<n&&(Qn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ur(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Or(e,n,s,r)),(n=-1<t?e[t]:null)&&Mr(n))}function Mr(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Xt])Dr(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(_a(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ur(e))?(Dr(n,t),n.h==0&&(n.src=null,e[Pr]=null)):Qn(t)}}}function _a(t){return t in Lr?Lr[t]:Lr[t]="on"+t}function Mf(t,e){if(t.ca)t=!0;else{e=new Gt(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Mr(t),t=n.call(s,e)}return t}function Ur(t){return t=t[Pr],t instanceof Zn?t:null}var xr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fr(t){return typeof t=="function"?t:(t[xr]||(t[xr]=function(e){return t.handleEvent(e)}),t[xr])}function z(){Le.call(this),this.i=new Zn(this),this.P=this,this.I=null}G(z,Le);z.prototype[Xt]=!0;z.prototype.removeEventListener=function(t,e,n,s){wa(this,t,e,n,s)};function X(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Q(e,t);else if(e instanceof Q)e.target=e.target||t;else{var r=e;e=new Q(s,t),ha(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=es(o,s,!0,e)&&r}if(o=e.g=t,r=es(o,s,!0,e)&&r,r=es(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=es(o,s,!1,e)&&r}z.prototype.M=function(){if(z.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Qn(n[s]);delete t.g[e],t.h--}}this.I=null};z.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};z.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function es(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Dr(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Vr=E.JSON.stringify;function Uf(){var t=Ta;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xf{constructor(){this.h=this.g=null}add(e,n){const s=Ea.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ea=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Ff,t=>t.reset());class Ff{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Vf(t){E.setTimeout(()=>{throw t},0)}function Br(t,e){$r||Bf(),qr||($r(),qr=!0),Ta.add(t,e)}var $r;function Bf(){var t=E.Promise.resolve(void 0);$r=function(){t.then($f)}}var qr=!1,Ta=new xf;function $f(){for(var t;t=Uf();){try{t.h.call(t.g)}catch(n){Vf(n)}var e=Ea;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}qr=!1}function ts(t,e){z.call(this),this.h=t||1,this.g=e||E,this.j=K(this.kb,this),this.l=Date.now()}G(ts,z);y=ts.prototype;y.da=!1;y.S=null;y.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),X(this,"tick"),this.da&&(jr(this),this.start()))}};y.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function jr(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}y.M=function(){ts.Z.M.call(this),jr(this),delete this.g};function Hr(t,e,n){if(typeof t=="function")n&&(t=K(t,n));else if(t&&typeof t.handleEvent=="function")t=K(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:E.setTimeout(t,e||0)}function Ia(t){t.g=Hr(()=>{t.g=null,t.i&&(t.i=!1,Ia(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class qf extends Le{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ia(this)}M(){super.M(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jt(t){Le.call(this),this.h=t,this.g={}}G(Jt,Le);var Sa=[];function Aa(t,e,n,s){Array.isArray(n)||(n&&(Sa[0]=n.toString()),n=Sa);for(var r=0;r<n.length;r++){var i=ma(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function ba(t){Sr(t.g,function(e,n){this.g.hasOwnProperty(n)&&Mr(e)},t),t.g={}}Jt.prototype.M=function(){Jt.Z.M.call(this),ba(this)};Jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ns(){this.g=!0}ns.prototype.Aa=function(){this.g=!1};function jf(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Hf(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function vt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Wf(t,n)+(s?" "+s:"")})}function zf(t,e){t.info(function(){return"TIMEOUT: "+e})}ns.prototype.info=function(){};function Wf(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Vr(n)}catch{return e}}var Ke={},ka=null;function ss(){return ka=ka||new z}Ke.Ma="serverreachability";function Ra(t){Q.call(this,Ke.Ma,t)}G(Ra,Q);function Yt(t){const e=ss();X(e,new Ra(e,t))}Ke.STAT_EVENT="statevent";function Ca(t,e){Q.call(this,Ke.STAT_EVENT,t),this.stat=e}G(Ca,Q);function re(t){const e=ss();X(e,new Ca(e,t))}Ke.Na="timingevent";function Na(t,e){Q.call(this,Ke.Na,t),this.size=e}G(Na,Q);function Qt(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){t()},e)}var rs={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Da={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function zr(){}zr.prototype.h=null;function Oa(t){return t.h||(t.h=t.i())}function Pa(){}var Zt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Wr(){Q.call(this,"d")}G(Wr,Q);function Kr(){Q.call(this,"c")}G(Kr,Q);var Gr;function is(){}G(is,zr);is.prototype.g=function(){return new XMLHttpRequest};is.prototype.i=function(){return{}};Gr=new is;function en(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Jt(this),this.P=Kf,t=br?125:void 0,this.W=new ts(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new La}function La(){this.i=null,this.g="",this.h=!1}var Kf=45e3,Xr={},os={};y=en.prototype;y.setTimeout=function(t){this.P=t};function Jr(t,e,n){t.K=1,t.v=hs(Ae(e)),t.s=n,t.U=!0,Ma(t,null)}function Ma(t,e){t.F=Date.now(),tn(t),t.A=Ae(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Ha(n.h,"t",s),t.C=0,n=t.l.H,t.h=new La,t.g=fc(t.l,n?e:null,!t.s),0<t.O&&(t.L=new qf(K(t.Ia,t,t.g),t.O)),Aa(t.V,t.g,"readystatechange",t.gb),e=t.H?ua(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Yt(1),jf(t.j,t.u,t.A,t.m,t.X,t.s)}y.gb=function(t){t=t.target;const e=this.L;e&&be(t)==3?e.l():this.Ia(t)};y.Ia=function(t){try{if(t==this.g)e:{const l=be(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||br||this.g&&(this.h.h||this.g.ga()||nc(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Yt(3):Yt(2)),as(this);var n=this.g.ba();this.N=n;t:if(Ua(this)){var s=nc(this.g);t="";var r=s.length,i=be(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Ge(this),nn(this);var o="";break t}this.h.i=new E.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Hf(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Jn(a)){var u=a;break t}}u=null}if(n=u)vt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Yr(this,n);else{this.i=!1,this.o=3,re(12),Ge(this),nn(this);break e}}this.U?(xa(this,l,o),br&&this.i&&l==3&&(Aa(this.V,this.W,"tick",this.fb),this.W.start())):(vt(this.j,this.m,o,null),Yr(this,o)),l==4&&Ge(this),this.i&&!this.I&&(l==4?uc(this.l,this):(this.i=!1,tn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,re(12)):(this.o=0,re(13)),Ge(this),nn(this)}}}catch{}finally{}};function Ua(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function xa(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=Gf(t,n),r==os){e==4&&(t.o=4,re(14),s=!1),vt(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Xr){t.o=4,re(15),vt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else vt(t.j,t.m,r,null),Yr(t,r);Ua(t)&&r!=os&&r!=Xr&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,re(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ci(e),e.L=!0,re(11))):(vt(t.j,t.m,n,"[Invalid Chunked Response]"),Ge(t),nn(t))}y.fb=function(){if(this.g){var t=be(this.g),e=this.g.ga();this.C<e.length&&(as(this),xa(this,t,e),this.i&&t!=4&&tn(this))}};function Gf(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?os:(n=Number(e.substring(n,s)),isNaN(n)?Xr:(s+=1,s+n>e.length?os:(e=e.substr(s,n),t.C=s+n,e)))}y.cancel=function(){this.I=!0,Ge(this)};function tn(t){t.Y=Date.now()+t.P,Fa(t,t.P)}function Fa(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Qt(K(t.eb,t),e)}function as(t){t.B&&(E.clearTimeout(t.B),t.B=null)}y.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(zf(this.j,this.A),this.K!=2&&(Yt(3),re(17)),Ge(this),this.o=2,nn(this)):Fa(this,this.Y-t)};function nn(t){t.l.G==0||t.I||uc(t.l,t)}function Ge(t){as(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,jr(t.W),ba(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Yr(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ei(n.i,t))){if(n.I=t.N,!t.J&&ei(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ys(n),gs(n);else break e;ai(n),re(18)}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Qt(K(n.ab,n),6e3));if(1>=Ka(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Ye(n,11)}else if((t.J||n.g==t)&&ys(n),!Jn(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.i;!i.g&&(ne(m,"spdy")||ne(m,"quic")||ne(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(ti(i,i.h),i.h=null))}if(s.D){const b=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.sa=b,P(s.F,s.D,b))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=dc(s,s.H?s.la:null,s.W),o.J){Ga(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(as(a),tn(a)),s.g=o}else ac(s);0<n.l.length&&ms(n)}else u[0]!="stop"&&u[0]!="close"||Ye(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ye(n,7):ii(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Yt(4)}catch{}}function Xf(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(_r(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Qr(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(_r(t)||typeof t=="string")ra(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(_r(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=Xf(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function wt(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof wt)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}y=wt.prototype;y.R=function(){Zr(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};y.T=function(){return Zr(this),this.g.concat()};function Zr(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Xe(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],Xe(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}y.get=function(t,e){return Xe(this.h,t)?this.h[t]:e};y.set=function(t,e){Xe(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};y.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function Xe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Va=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Jf(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Je(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Je){this.g=e!==void 0?e:t.g,cs(this,t.j),this.s=t.s,us(this,t.i),ls(this,t.m),this.l=t.l,e=t.h;var n=new on;n.i=e.i,e.g&&(n.g=new wt(e.g),n.h=e.h),Ba(this,n),this.o=t.o}else t&&(n=String(t).match(Va))?(this.g=!!e,cs(this,n[1]||"",!0),this.s=sn(n[2]||""),us(this,n[3]||"",!0),ls(this,n[4]),this.l=sn(n[5]||"",!0),Ba(this,n[6]||"",!0),this.o=sn(n[7]||"")):(this.g=!!e,this.h=new on(null,this.g))}Je.prototype.toString=function(){var t=[],e=this.j;e&&t.push(rn(e,$a,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(rn(e,$a,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(rn(n,n.charAt(0)=="/"?tp:ep,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",rn(n,sp)),t.join("")};function Ae(t){return new Je(t)}function cs(t,e,n){t.j=n?sn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function us(t,e,n){t.i=n?sn(e,!0):e}function ls(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ba(t,e,n){e instanceof on?(t.h=e,rp(t.h,t.g)):(n||(e=rn(e,np)),t.h=new on(e,t.g))}function P(t,e,n){t.h.set(e,n)}function hs(t){return P(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Yf(t){return t instanceof Je?Ae(t):new Je(t,void 0)}function Qf(t,e,n,s){var r=new Je(null,void 0);return t&&cs(r,t),e&&us(r,e),n&&ls(r,n),s&&(r.l=s),r}function sn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function rn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Zf),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Zf(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var $a=/[#\/\?@]/g,ep=/[#\?:]/g,tp=/[#\?]/g,np=/[#\?@]/g,sp=/#/g;function on(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Me(t){t.g||(t.g=new wt,t.h=0,t.i&&Jf(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}y=on.prototype;y.add=function(t,e){Me(this),this.i=null,t=_t(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function qa(t,e){Me(t),e=_t(t,e),Xe(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Xe(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Zr(t)))}function ja(t,e){return Me(t),e=_t(t,e),Xe(t.g.h,e)}y.forEach=function(t,e){Me(this),this.g.forEach(function(n,s){ra(n,function(r){t.call(e,r,s,this)},this)},this)};y.T=function(){Me(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};y.R=function(t){Me(this);var e=[];if(typeof t=="string")ja(this,t)&&(e=ia(e,this.g.get(_t(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=ia(e,t[n])}return e};y.set=function(t,e){return Me(this),this.i=null,t=_t(this,t),ja(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};y.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Ha(t,e,n){qa(t,e),0<n.length&&(t.i=null,t.g.set(_t(t,e),Tr(n)),t.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function _t(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function rp(t,e){e&&!t.j&&(Me(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(qa(this,s),Ha(this,r,n))},t)),t.j=e}var ip=class{constructor(t,e){this.h=t,this.g=e}};function za(t){this.l=t||op,E.PerformanceNavigationTiming?(t=E.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(E.g&&E.g.Ea&&E.g.Ea()&&E.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var op=10;function Wa(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ka(t){return t.h?1:t.g?t.g.size:0}function ei(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ti(t,e){t.g?t.g.add(e):t.h=e}function Ga(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}za.prototype.cancel=function(){if(this.i=Xa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Xa(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Tr(t.i)}function ni(){}ni.prototype.stringify=function(t){return E.JSON.stringify(t,void 0)};ni.prototype.parse=function(t){return E.JSON.parse(t,void 0)};function ap(){this.g=new ni}function cp(t,e,n){const s=n||"";try{Qr(t,function(r,i){let o=r;Kt(r)&&(o=Vr(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function up(t,e){const n=new ns;if(E.Image){const s=new Image;s.onload=Xn(ds,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Xn(ds,n,s,"TestLoadImage: error",!1,e),s.onabort=Xn(ds,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Xn(ds,n,s,"TestLoadImage: timeout",!1,e),E.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ds(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function an(t){this.l=t.$b||null,this.j=t.ib||!1}G(an,zr);an.prototype.g=function(){return new fs(this.l,this.j)};an.prototype.i=function(t){return function(){return t}}({});function fs(t,e){z.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=si,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}G(fs,z);var si=0;y=fs.prototype;y.open=function(t,e){if(this.readyState!=si)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,un(this)};y.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||E).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,cn(this)),this.readyState=si};y.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,un(this)),this.g&&(this.readyState=3,un(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof E.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ja(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Ja(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}y.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?cn(this):un(this),this.readyState==3&&Ja(this)}};y.Ua=function(t){this.g&&(this.response=this.responseText=t,cn(this))};y.Ta=function(t){this.g&&(this.response=t,cn(this))};y.ha=function(){this.g&&cn(this)};function cn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,un(t)}y.setRequestHeader=function(t,e){this.v.append(t,e)};y.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function un(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(fs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var lp=E.JSON.parse;function V(t){z.call(this),this.headers=new wt,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ya,this.K=this.L=!1}G(V,z);var Ya="",hp=/^https?$/i,dp=["POST","PUT"];y=V.prototype;y.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Gr.g(),this.C=this.u?Oa(this.u):Oa(Gr),this.g.onreadystatechange=K(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Qa(this,i);return}t=n||"";const r=new wt(this.headers);s&&Qr(s,function(i,o){r.set(o,i)}),s=If(r.T()),n=E.FormData&&t instanceof E.FormData,!(0<=sa(dp,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{tc(this),0<this.B&&((this.K=fp(this.g))?(this.g.timeout=this.B,this.g.ontimeout=K(this.pa,this)):this.A=Hr(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Qa(this,i)}};function fp(t){return yt&&Rf()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function pp(t){return t.toLowerCase()=="content-type"}y.pa=function(){typeof wr!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,X(this,"timeout"),this.abort(8))};function Qa(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Za(t),ps(t)}function Za(t){t.D||(t.D=!0,X(t,"complete"),X(t,"error"))}y.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,X(this,"complete"),X(this,"abort"),ps(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ps(this,!0)),V.Z.M.call(this)};y.Fa=function(){this.s||(this.F||this.v||this.l?ec(this):this.cb())};y.cb=function(){ec(this)};function ec(t){if(t.h&&typeof wr!="undefined"&&(!t.C[1]||be(t)!=4||t.ba()!=2)){if(t.v&&be(t)==4)Hr(t.Fa,0,t);else if(X(t,"readystatechange"),be(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Va)[1]||null;if(!r&&E.self&&E.self.location){var i=E.self.location.protocol;r=i.substr(0,i.length-1)}s=!hp.test(r?r.toLowerCase():"")}n=s}if(n)X(t,"complete"),X(t,"success");else{t.m=6;try{var o=2<be(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Za(t)}}finally{ps(t)}}}}function ps(t,e){if(t.g){tc(t);const n=t.g,s=t.C[0]?Gn:null;t.g=null,t.C=null,e||X(t,"ready");try{n.onreadystatechange=s}catch{}}}function tc(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(E.clearTimeout(t.A),t.A=null)}function be(t){return t.g?t.g.readyState:0}y.ba=function(){try{return 2<be(this)?this.g.status:-1}catch{return-1}};y.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),lp(e)}};function nc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ya:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}y.Da=function(){return this.m};y.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function gp(t){let e="";return Sr(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ri(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=gp(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):P(t,e,n))}function ln(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function sc(t){this.za=0,this.l=[],this.h=new ns,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ln("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ln("baseRetryDelayMs",5e3,t),this.$a=ln("retryDelaySeedMs",1e4,t),this.Ya=ln("forwardChannelMaxRetries",2,t),this.ra=ln("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new za(t&&t.concurrentRequestLimit),this.Ca=new ap,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}y=sc.prototype;y.ma=8;y.G=1;function ii(t){if(rc(t),t.G==3){var e=t.V++,n=Ae(t.F);P(n,"SID",t.J),P(n,"RID",e),P(n,"TYPE","terminate"),hn(t,n),e=new en(t,t.h,e,void 0),e.K=2,e.v=hs(Ae(n)),n=!1,E.navigator&&E.navigator.sendBeacon&&(n=E.navigator.sendBeacon(e.v.toString(),"")),!n&&E.Image&&(new Image().src=e.v,n=!0),n||(e.g=fc(e.l,null),e.g.ea(e.v)),e.F=Date.now(),tn(e)}hc(t)}y.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function gs(t){t.g&&(ci(t),t.g.cancel(),t.g=null)}function rc(t){gs(t),t.u&&(E.clearTimeout(t.u),t.u=null),ys(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&E.clearTimeout(t.m),t.m=null)}function oi(t,e){t.l.push(new ip(t.Za++,e)),t.G==3&&ms(t)}function ms(t){Wa(t.i)||t.m||(t.m=!0,Br(t.Ha,t),t.C=0)}function mp(t,e){return Ka(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Qt(K(t.Ha,t,e),lc(t,t.C)),t.C++,!0)}y.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new en(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=ua(i),ha(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=oc(this,r,e),n=Ae(this.F),P(n,"RID",t),P(n,"CVER",22),this.D&&P(n,"X-HTTP-Session-Id",this.D),hn(this,n),this.o&&i&&ri(n,this.o,i),ti(this.i,r),this.Ra&&P(n,"TYPE","init"),this.ja?(P(n,"$req",e),P(n,"SID","null"),r.$=!0,Jr(r,n,null)):Jr(r,n,e),this.G=2}}else this.G==3&&(t?ic(this,t):this.l.length==0||Wa(this.i)||ic(this))};function ic(t,e){var n;e?n=e.m:n=t.V++;const s=Ae(t.F);P(s,"SID",t.J),P(s,"RID",n),P(s,"AID",t.U),hn(t,s),t.o&&t.s&&ri(s,t.o,t.s),n=new en(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=oc(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ti(t.i,n),Jr(n,s,e)}function hn(t,e){t.j&&Qr({},function(n,s){P(e,s,n)})}function oc(t,e,n){n=Math.min(t.l.length,n);var s=t.j?K(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{cp(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function ac(t){t.g||t.u||(t.Y=1,Br(t.Ga,t),t.A=0)}function ai(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Qt(K(t.Ga,t),lc(t,t.A)),t.A++,!0)}y.Ga=function(){if(this.u=null,cc(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Qt(K(this.bb,this),t)}};y.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,re(10),gs(this),cc(this))};function ci(t){t.B!=null&&(E.clearTimeout(t.B),t.B=null)}function cc(t){t.g=new en(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Ae(t.oa);P(e,"RID","rpc"),P(e,"SID",t.J),P(e,"CI",t.N?"0":"1"),P(e,"AID",t.U),hn(t,e),P(e,"TYPE","xmlhttp"),t.o&&t.s&&ri(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=hs(Ae(e)),n.s=null,n.U=!0,Ma(n,t)}y.ab=function(){this.v!=null&&(this.v=null,gs(this),ai(this),re(19))};function ys(t){t.v!=null&&(E.clearTimeout(t.v),t.v=null)}function uc(t,e){var n=null;if(t.g==e){ys(t),ci(t),t.g=null;var s=2}else if(ei(t.i,e))n=e.D,Ga(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ss(),X(s,new Na(s,n,e,r)),ms(t)}else ac(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&mp(t,e)||s==2&&ai(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Ye(t,5);break;case 4:Ye(t,10);break;case 3:Ye(t,6);break;default:Ye(t,2)}}}function lc(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Ye(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=K(t.jb,t);n||(n=new Je("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||cs(n,"https"),hs(n)),up(n.toString(),s)}else re(2);t.G=0,t.j&&t.j.va(e),hc(t),rc(t)}y.jb=function(t){t?(this.h.info("Successfully pinged google.com"),re(2)):(this.h.info("Failed to ping google.com"),re(1))};function hc(t){t.G=0,t.I=-1,t.j&&((Xa(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Tr(t.l),t.l.length=0),t.j.ua())}function dc(t,e,n){let s=Yf(n);if(s.i!="")e&&us(s,e+"."+s.i),ls(s,s.m);else{const r=E.location;s=Qf(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&Sr(t.aa,function(r,i){P(s,i,r)}),e=t.D,n=t.sa,e&&n&&P(s,e,n),P(s,"VER",t.ma),hn(t,s),s}function fc(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new V(new an({ib:!0})):new V(t.qa),e.L=t.H,e}function pc(){}y=pc.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Oa=function(){};function vs(){if(yt&&!(10<=Number(Cf)))throw Error("Environmental error: no available transport.")}vs.prototype.g=function(t,e){return new ue(t,e)};function ue(t,e){z.call(this),this.g=new sc(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Jn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Jn(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Et(this)}G(ue,z);ue.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Br(K(t.hb,t,e))),re(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=dc(t,null,t.W),ms(t)};ue.prototype.close=function(){ii(this.g)};ue.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,oi(this.g,e)}else this.v?(e={},e.__data__=Vr(t),oi(this.g,e)):oi(this.g,t)};ue.prototype.M=function(){this.g.j=null,delete this.j,ii(this.g),delete this.g,ue.Z.M.call(this)};function gc(t){Wr.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}G(gc,Wr);function mc(){Kr.call(this),this.status=1}G(mc,Kr);function Et(t){this.g=t}G(Et,pc);Et.prototype.xa=function(){X(this.g,"a")};Et.prototype.wa=function(t){X(this.g,new gc(t))};Et.prototype.va=function(t){X(this.g,new mc(t))};Et.prototype.ua=function(){X(this.g,"b")};vs.prototype.createWebChannel=vs.prototype.g;ue.prototype.send=ue.prototype.u;ue.prototype.open=ue.prototype.m;ue.prototype.close=ue.prototype.close;rs.NO_ERROR=0;rs.TIMEOUT=8;rs.HTTP_ERROR=6;Da.COMPLETE="complete";Pa.EventType=Zt;Zt.OPEN="a";Zt.CLOSE="b";Zt.ERROR="c";Zt.MESSAGE="d";z.prototype.listen=z.prototype.N;V.prototype.listenOnce=V.prototype.O;V.prototype.getLastError=V.prototype.La;V.prototype.getLastErrorCode=V.prototype.Da;V.prototype.getStatus=V.prototype.ba;V.prototype.getResponseJson=V.prototype.Qa;V.prototype.getResponseText=V.prototype.ga;V.prototype.send=V.prototype.ea;var yp=function(){return new vs},vp=function(){return ss()},ui=rs,wp=Da,_p=Ke,yc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Ep=an,ws=Pa,Tp=V;const vc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}oe.UNAUTHENTICATED=new oe(null),oe.GOOGLE_CREDENTIALS=new oe("google-credentials-uid"),oe.FIRST_PARTY=new oe("first-party-uid"),oe.MOCK_USER=new oe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tt="9.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe=new Qs("@firebase/firestore");function wc(){return Qe.logLevel}function v(t,...e){if(Qe.logLevel<=R.DEBUG){const n=e.map(li);Qe.debug(`Firestore (${Tt}): ${t}`,...n)}}function Ue(t,...e){if(Qe.logLevel<=R.ERROR){const n=e.map(li);Qe.error(`Firestore (${Tt}): ${t}`,...n)}}function _c(t,...e){if(Qe.logLevel<=R.WARN){const n=e.map(li);Qe.warn(`Firestore (${Tt}): ${t}`,...n)}}function li(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(t="Unexpected state"){const e=`FIRESTORE (${Tt}) INTERNAL ASSERTION FAILED: `+t;throw Ue(e),new Error(e)}function D(t,e){t||I()}function S(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(oe.UNAUTHENTICATED))}shutdown(){}}class Ap{constructor(e){this.t=e,this.currentUser=oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new ke;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ke,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ke)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(D(typeof s.accessToken=="string"),new Ip(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return D(e===null||typeof e=="string"),new oe(e)}}class bp{constructor(e,n,s){this.type="FirstParty",this.user=oe.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class kp{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new bp(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cp{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,n){this.o=r=>{e.enqueueRetryable(()=>(i=>(i.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`),n(i.token)))(r))};const s=r=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?s(r):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(D(typeof n.token=="string"),new Rp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.p(s),this.T=s=>n.writeSequenceNumber(s))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi.I=-1;class Ec{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Np(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function N(t,e){return t<e?-1:t>e?1:0}function It(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return le.fromMillis(Date.now())}static fromDate(e){return le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new le(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?N(this.nanoseconds,e.nanoseconds):N(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.timestamp=e}static fromTimestamp(e){return new C(e)}static min(){return new C(new le(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ze(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ic(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,n,s){n===void 0?n=0:n>e.length&&I(),s===void 0?s=e.length-n:s>e.length-n&&I(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return dn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof dn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class M extends dn{construct(e,n,s){return new M(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new w(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new M(n)}static emptyPath(){return new M([])}}const Dp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ae extends dn{construct(e,n,s){return new ae(e,n,s)}static isValidIdentifier(e){return Dp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ae(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new w(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new w(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new w(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ae(n)}static emptyPath(){return new ae([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.fields=e,e.sort(ae.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return It(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Z(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Z(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return N(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Z.EMPTY_BYTE_STRING=new Z("");const Op=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xe(t){if(D(!!t),typeof t=="string"){let e=0;const n=Op.exec(t);if(D(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:B(t.seconds),nanos:B(t.nanos)}}function B(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function St(t){return typeof t=="string"?Z.fromBase64String(t):Z.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ac(t){const e=t.mapValue.fields.__previous_value__;return Sc(e)?Ac(e):e}function pn(t){const e=xe(t.mapValue.fields.__local_write_time__.timestampValue);return new le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t){return t==null}function _s(t){return t===0&&1/t==-1/0}function Pp(t){return typeof t=="number"&&Number.isInteger(t)&&!_s(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.path=e}static fromPath(e){return new T(M.fromString(e))}static fromName(e){return new T(M.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&M.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return M.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new T(new M(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sc(t)?4:10:I()}function ve(t,e){const n=et(t);if(n!==et(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pn(t).isEqual(pn(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=xe(s.timestampValue),o=xe(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return St(s.bytesValue).isEqual(St(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return B(s.geoPointValue.latitude)===B(r.geoPointValue.latitude)&&B(s.geoPointValue.longitude)===B(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return B(s.integerValue)===B(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=B(s.doubleValue),o=B(r.doubleValue);return i===o?_s(i)===_s(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return It(t.arrayValue.values||[],e.arrayValue.values||[],ve);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Tc(i)!==Tc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ve(i[a],o[a])))return!1;return!0}(t,e);default:return I()}}function gn(t,e){return(t.values||[]).find(n=>ve(n,e))!==void 0}function bt(t,e){const n=et(t),s=et(e);if(n!==s)return N(n,s);switch(n){case 0:return 0;case 1:return N(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=B(r.integerValue||r.doubleValue),a=B(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return bc(t.timestampValue,e.timestampValue);case 4:return bc(pn(t),pn(e));case 5:return N(t.stringValue,e.stringValue);case 6:return function(r,i){const o=St(r),a=St(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=N(o[c],a[c]);if(u!==0)return u}return N(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=N(B(r.latitude),B(i.latitude));return o!==0?o:N(B(r.longitude),B(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=bt(o[c],a[c]);if(u)return u}return N(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=N(a[l],u[l]);if(h!==0)return h;const d=bt(o[a[l]],c[u[l]]);if(d!==0)return d}return N(a.length,u.length)}(t.mapValue,e.mapValue);default:throw I()}}function bc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return N(t,e);const n=xe(t),s=xe(e),r=N(n.seconds,s.seconds);return r!==0?r:N(n.nanos,s.nanos)}function di(t){return fi(t)}function fi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=xe(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?St(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,T.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=fi(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${fi(s.fields[a])}`;return i+"}"}(t.mapValue):I();var e,n}function pi(t){return!!t&&"integerValue"in t}function gi(t){return!!t&&"arrayValue"in t}function kc(t){return!!t&&"nullValue"in t}function Rc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Es(t){return!!t&&"mapValue"in t}function mn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ze(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=mn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mn(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.value=e}static empty(){return new he({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Es(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mn(n)}setAll(e){let n=ae.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=mn(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Es(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ve(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Es(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Ze(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new he(mn(this.value))}}function Cc(t){const e=[];return Ze(t.fields,(n,s)=>{const r=new ae([n]);if(Es(s)){const i=Cc(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,n,s,r,i){this.key=e,this.documentType=n,this.version=s,this.data=r,this.documentState=i}static newInvalidDocument(e){return new ee(e,0,C.min(),he.empty(),0)}static newFoundDocument(e,n,s){return new ee(e,1,n,s,0)}static newNoDocument(e,n){return new ee(e,2,n,he.empty(),0)}static newUnknownDocument(e,n){return new ee(e,3,n,he.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=he.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=he.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new ee(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.R=null}}function Nc(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Lp(t,e,n,s,r,i,o)}function mi(t){const e=S(t);if(e.R===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Up(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),At(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=Ts(e.startAt)),e.endAt&&(n+="|ub:",n+=Ts(e.endAt)),e.R=n}return e.R}function Mp(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${di(s.value)}`;var s}).join(", ")}]`),At(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Ts(t.startAt)),t.endAt&&(e+=", endAt: "+Ts(t.endAt)),`Target(${e})`}function yi(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Hp(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!ve(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Pc(t.startAt,e.startAt)&&Pc(t.endAt,e.endAt)}function vi(t){return T.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ce extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.P(e,n,s):new xp(e,n,s):n==="array-contains"?new Bp(e,s):n==="in"?new $p(e,s):n==="not-in"?new qp(e,s):n==="array-contains-any"?new jp(e,s):new ce(e,n,s)}static P(e,n,s){return n==="in"?new Fp(e,s):new Vp(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(bt(n,this.value)):n!==null&&et(this.value)===et(n)&&this.v(bt(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return I()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Up(t){return t.field.canonicalString()+t.op.toString()+di(t.value)}class xp extends ce{constructor(e,n,s){super(e,n,s),this.key=T.fromName(s.referenceValue)}matches(e){const n=T.comparator(e.key,this.key);return this.v(n)}}class Fp extends ce{constructor(e,n){super(e,"in",n),this.keys=Dc("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Vp extends ce{constructor(e,n){super(e,"not-in",n),this.keys=Dc("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Dc(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>T.fromName(s.referenceValue))}class Bp extends ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return gi(n)&&gn(n.arrayValue,this.value)}}class $p extends ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gn(this.value.arrayValue,n)}}class qp extends ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(gn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!gn(this.value.arrayValue,n)}}class jp extends ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!gi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>gn(this.value.arrayValue,s))}}class wi{constructor(e,n){this.position=e,this.before=n}}function Ts(t){return`${t.before?"b":"a"}:${t.position.map(e=>di(e)).join(",")}`}class yn{constructor(e,n="asc"){this.field=e,this.dir=n}}function Hp(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Oc(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=T.comparator(T.fromName(o.referenceValue),n.key):s=bt(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return t.before?s<=0:s<0}function Pc(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ve(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.S=null,this.D=null,this.startAt,this.endAt}}function zp(t,e,n,s,r,i,o,a){return new Is(t,e,n,s,r,i,o,a)}function _i(t){return new Is(t)}function Ss(t){return!At(t.limit)&&t.limitType==="F"}function As(t){return!At(t.limit)&&t.limitType==="L"}function Wp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Kp(t){for(const e of t.filters)if(e.V())return e.field;return null}function Gp(t){return t.collectionGroup!==null}function vn(t){const e=S(t);if(e.S===null){e.S=[];const n=Kp(e),s=Wp(e);if(n!==null&&s===null)n.isKeyField()||e.S.push(new yn(n)),e.S.push(new yn(ae.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.S.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new yn(ae.keyField(),i))}}}return e.S}function tt(t){const e=S(t);if(!e.D)if(e.limitType==="F")e.D=Nc(e.path,e.collectionGroup,vn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of vn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new yn(i.field,o))}const s=e.endAt?new wi(e.endAt.position,!e.endAt.before):null,r=e.startAt?new wi(e.startAt.position,!e.startAt.before):null;e.D=Nc(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.D}function Xp(t,e,n){return new Is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bs(t,e){return yi(tt(t),tt(e))&&t.limitType===e.limitType}function Lc(t){return`${mi(tt(t))}|lt:${t.limitType}`}function Ei(t){return`Query(target=${Mp(tt(t))}; limitType=${t.limitType})`}function ks(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):T.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!Oc(n.startAt,vn(n),s)||n.endAt&&Oc(n.endAt,vn(n),s))}(t,e)}function Mc(t){return(e,n)=>{let s=!1;for(const r of vn(t)){const i=Jp(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Jp(t,e,n){const s=t.field.isKeyField()?T.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?bt(a,c):I()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_s(e)?"-0":e}}function xc(t){return{integerValue:""+t}}function Yp(t,e){return Pp(e)?xc(e):Uc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this._=void 0}}function Qp(t,e,n){return t instanceof Cs?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof wn?Vc(t,e):t instanceof _n?Bc(t,e):function(s,r){const i=Fc(s,r),o=$c(i)+$c(s.N);return pi(i)&&pi(s.N)?xc(o):Uc(s.k,o)}(t,e)}function Zp(t,e,n){return t instanceof wn?Vc(t,e):t instanceof _n?Bc(t,e):n}function Fc(t,e){return t instanceof Ns?pi(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Cs extends Rs{}class wn extends Rs{constructor(e){super(),this.elements=e}}function Vc(t,e){const n=qc(e);for(const s of t.elements)n.some(r=>ve(r,s))||n.push(s);return{arrayValue:{values:n}}}class _n extends Rs{constructor(e){super(),this.elements=e}}function Bc(t,e){let n=qc(e);for(const s of t.elements)n=n.filter(r=>!ve(r,s));return{arrayValue:{values:n}}}class Ns extends Rs{constructor(e,n){super(),this.k=e,this.N=n}}function $c(t){return B(t.integerValue||t.doubleValue)}function qc(t){return gi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function eg(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof wn&&s instanceof wn||n instanceof _n&&s instanceof _n?It(n.elements,s.elements,ve):n instanceof Ns&&s instanceof Ns?ve(n.N,s.N):n instanceof Cs&&s instanceof Cs}(t.transform,e.transform)}class tg{constructor(e,n){this.version=e,this.transformResults=n}}class nt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nt}static exists(e){return new nt(void 0,e)}static updateTime(e){return new nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ds(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Os{}function ng(t,e,n){t instanceof Ps?function(s,r,i){const o=s.value.clone(),a=Wc(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof st?function(s,r,i){if(!Ds(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Wc(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(zc(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ti(t,e,n){t instanceof Ps?function(s,r,i){if(!Ds(s.precondition,r))return;const o=s.value.clone(),a=Kc(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(Hc(r),o).setHasLocalMutations()}(t,e,n):t instanceof st?function(s,r,i){if(!Ds(s.precondition,r))return;const o=Kc(s.fieldTransforms,i,r),a=r.data;a.setAll(zc(s)),a.setAll(o),r.convertToFoundDocument(Hc(r),a).setHasLocalMutations()}(t,e,n):function(s,r){Ds(s.precondition,r)&&r.convertToNoDocument(C.min())}(t,e)}function sg(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Fc(s.transform,r||null);i!=null&&(n==null&&(n=he.empty()),n.set(s.field,i))}return n||null}function jc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&It(n,s,(r,i)=>eg(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Hc(t){return t.isFoundDocument()?t.version:C.min()}class Ps extends Os{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class st extends Os{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function zc(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Wc(t,e,n){const s=new Map;D(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Zp(o,a,n[r]))}return s}function Kc(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Qp(i,o,e))}return s}class rg extends Os{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class ig extends Os{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $,k;function ag(t){switch(t){default:return I();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Gc(t){if(t===void 0)return Ue("GRPC error has no .code"),f.UNKNOWN;switch(t){case $.OK:return f.OK;case $.CANCELLED:return f.CANCELLED;case $.UNKNOWN:return f.UNKNOWN;case $.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case $.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case $.INTERNAL:return f.INTERNAL;case $.UNAVAILABLE:return f.UNAVAILABLE;case $.UNAUTHENTICATED:return f.UNAUTHENTICATED;case $.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case $.NOT_FOUND:return f.NOT_FOUND;case $.ALREADY_EXISTS:return f.ALREADY_EXISTS;case $.PERMISSION_DENIED:return f.PERMISSION_DENIED;case $.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case $.ABORTED:return f.ABORTED;case $.OUT_OF_RANGE:return f.OUT_OF_RANGE;case $.UNIMPLEMENTED:return f.UNIMPLEMENTED;case $.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(k=$||($={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,n){this.comparator=e,this.root=n||J.EMPTY}insert(e,n){return new te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,J.BLACK,null,null))}remove(e){return new te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,J.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ls(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ls(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ls(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ls(this.root,e,this.comparator,!0)}}class Ls{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class J{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:J.RED,this.left=r!=null?r:J.EMPTY,this.right=i!=null?i:J.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new J(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return J.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return J.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const e=this.left.check();if(e!==this.right.check())throw I();return e+(this.isRed()?0:1)}}J.EMPTY=null,J.RED=!0,J.BLACK=!1;J.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(t,e,n,s,r){return this}insert(t,e,n){return new J(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.comparator=e,this.data=new te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xc(this.data.getIterator())}getIteratorFrom(e){return new Xc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Y)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Y(this.comparator);return n.data=e,n}}class Xc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=new te(T.comparator);function rt(){return cg}const ug=new te(T.comparator);function Ii(){return ug}const lg=new te(T.comparator);function hg(){return lg}const dg=new Y(T.comparator);function O(...t){let e=dg;for(const n of t)e=e.add(n);return e}const fg=new Y(N);function Jc(){return fg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,En.createSynthesizedTargetChangeForCurrentChange(e,n)),new Ms(C.min(),s,Jc(),rt(),O())}}class En{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new En(Z.EMPTY_BYTE_STRING,n,O(),O(),O())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n,s,r){this.$=e,this.removedTargetIds=n,this.key=s,this.F=r}}class Yc{constructor(e,n){this.targetId=e,this.O=n}}class Qc{constructor(e,n,s=Z.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Zc{constructor(){this.M=0,this.L=tu(),this.B=Z.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.M!==0}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=O(),n=O(),s=O();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:I()}}),new En(this.B,this.U,e,n,s)}H(){this.q=!1,this.L=tu()}J(e,n){this.q=!0,this.L=this.L.insert(e,n)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class pg{constructor(e){this.et=e,this.nt=new Map,this.st=rt(),this.it=eu(),this.rt=new Y(N)}ot(e){for(const n of e.$)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ut(e){this.forEachTarget(e,n=>{const s=this.ht(n);switch(e.state){case 0:this.lt(n)&&s.W(e.resumeToken);break;case 1:s.Z(),s.K||s.H(),s.W(e.resumeToken);break;case 2:s.Z(),s.K||this.removeTarget(n);break;case 3:this.lt(n)&&(s.tt(),s.W(e.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),s.W(e.resumeToken));break;default:I()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.nt.forEach((s,r)=>{this.lt(r)&&n(r)})}dt(e){const n=e.targetId,s=e.O.count,r=this.wt(n);if(r){const i=r.target;if(vi(i))if(s===0){const o=new T(i.path);this.ct(n,o,ee.newNoDocument(o,C.min()))}else D(s===1);else this._t(n)!==s&&(this.ft(n),this.rt=this.rt.add(n))}}gt(e){const n=new Map;this.nt.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&vi(a.target)){const c=new T(a.target.path);this.st.get(c)!==null||this.yt(o,c)||this.ct(o,c,ee.newNoDocument(c,e))}i.j&&(n.set(o,i.G()),i.H())}});let s=O();this.it.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))});const r=new Ms(e,n,this.rt,this.st,s);return this.st=rt(),this.it=eu(),this.rt=new Y(N),r}at(e,n){if(!this.lt(e))return;const s=this.yt(e,n.key)?2:0;this.ht(e).J(n.key,s),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,s){if(!this.lt(e))return;const r=this.ht(e);this.yt(e,n)?r.J(n,1):r.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(e)),s&&(this.st=this.st.insert(n,s))}removeTarget(e){this.nt.delete(e)}_t(e){const n=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let n=this.nt.get(e);return n||(n=new Zc,this.nt.set(e,n)),n}Tt(e){let n=this.it.get(e);return n||(n=new Y(N),this.it=this.it.insert(e,n)),n}lt(e){const n=this.wt(e)!==null;return n||v("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.nt.get(e);return n&&n.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new Zc),this.et.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}yt(e,n){return this.et.getRemoteKeysForTarget(e).has(n)}}function eu(){return new te(T.comparator)}function tu(){return new te(T.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),mg=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class yg{constructor(e,n){this.databaseId=e,this.C=n}}function xs(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function nu(t,e){return t.C?e.toBase64():e.toUint8Array()}function vg(t,e){return xs(t,e.toTimestamp())}function Re(t){return D(!!t),C.fromTimestamp(function(e){const n=xe(e);return new le(n.seconds,n.nanos)}(t))}function Si(t,e){return function(n){return new M(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function su(t){const e=M.fromString(t);return D(uu(e)),e}function Ai(t,e){return Si(t.databaseId,e.path)}function bi(t,e){const n=su(e);if(n.get(1)!==t.databaseId.projectId)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new T(ru(n))}function ki(t,e){return Si(t.databaseId,e)}function wg(t){const e=su(t);return e.length===4?M.emptyPath():ru(e)}function Ri(t){return new M(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ru(t){return D(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function iu(t,e,n){return{name:Ai(t,e),fields:n.value.mapValue.fields}}function _g(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:I()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.C?(D(u===void 0||typeof u=="string"),Z.fromBase64String(u||"")):(D(u===void 0||u instanceof Uint8Array),Z.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:Gc(c.code);return new w(u,c.message||"")}(o);n=new Qc(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=bi(t,s.document.name),i=Re(s.document.updateTime),o=new he({mapValue:{fields:s.document.fields}}),a=ee.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Us(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=bi(t,s.document),i=s.readTime?Re(s.readTime):C.min(),o=ee.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Us([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=bi(t,s.document),i=s.removedTargetIds||[];n=new Us([],i,r,null)}else{if(!("filter"in e))return I();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new og(r),o=s.targetId;n=new Yc(o,i)}}return n}function Eg(t,e){let n;if(e instanceof Ps)n={update:iu(t,e.key,e.value)};else if(e instanceof rg)n={delete:Ai(t,e.key)};else if(e instanceof st)n={update:iu(t,e.key,e.data),updateMask:Dg(e.fieldMask)};else{if(!(e instanceof ig))return I();n={verify:Ai(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Cs)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof wn)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof _n)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ns)return{fieldPath:i.field.canonicalString(),increment:o.N};throw I()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:vg(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:I()}(t,e.precondition)),n}function Tg(t,e){return t&&t.length>0?(D(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Re(s.updateTime):Re(r);return i.isEqual(C.min())&&(i=Re(r)),new tg(i,s.transformResults||[])}(n,e))):[]}function Ig(t,e){return{documents:[ki(t,e.path)]}}function Sg(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=ki(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ki(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(a){if(a.length===0)return;const c=a.map(u=>function(l){if(l.op==="=="){if(Rc(l.value))return{unaryFilter:{field:kt(l.field),op:"IS_NAN"}};if(kc(l.value))return{unaryFilter:{field:kt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Rc(l.value))return{unaryFilter:{field:kt(l.field),op:"IS_NOT_NAN"}};if(kc(l.value))return{unaryFilter:{field:kt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kt(l.field),op:Rg(l.op),value:l.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(a){if(a.length!==0)return a.map(c=>function(u){return{field:kt(u.field),direction:kg(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(a,c){return a.C||At(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=au(e.startAt)),e.endAt&&(n.structuredQuery.endAt=au(e.endAt)),n}function Ag(t){let e=wg(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){D(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=ou(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new yn(Rt(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,At(h)?null:h}(n.limit));let c=null;n.startAt&&(c=cu(n.startAt));let u=null;return n.endAt&&(u=cu(n.endAt)),zp(e,r,o,i,a,"F",c,u)}function bg(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ou(t){return t?t.unaryFilter!==void 0?[Ng(t)]:t.fieldFilter!==void 0?[Cg(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>ou(e)).reduce((e,n)=>e.concat(n)):I():[]}function au(t){return{before:t.before,values:t.position}}function cu(t){const e=!!t.before,n=t.values||[];return new wi(n,e)}function kg(t){return gg[t]}function Rg(t){return mg[t]}function kt(t){return{fieldPath:t.canonicalString()}}function Rt(t){return ae.fromServerFormat(t.fieldPath)}function Cg(t){return ce.create(Rt(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(t.fieldFilter.op),t.fieldFilter.value)}function Ng(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Rt(t.unaryFilter.field);return ce.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Rt(t.unaryFilter.field);return ce.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Rt(t.unaryFilter.field);return ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Rt(t.unaryFilter.field);return ce.create(r,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function Dg(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uu(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const Og="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new g((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):g.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):g.reject(n)}static resolve(e){return new g((n,s)=>{n(e)})}static reject(e){return new g((n,s)=>{s(e)})}static waitFor(e){return new g((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=g.resolve(!1);for(const s of e)n=n.next(r=>r?g.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function Tn(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&ng(i,e,s[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Ti(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Ti(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(C.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),O())}isEqual(e){return this.batchId===e.batchId&&It(this.mutations,e.mutations,(n,s)=>jc(n,s))&&It(this.baseMutations,e.baseMutations,(n,s)=>jc(n,s))}}class Ci{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){D(e.mutations.length===s.length);let r=hg();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ci(e,n,s,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,s,r,i=C.min(),o=C.min(),a=Z.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new it(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new it(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new it(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this.Gt=e}}function Ug(t){const e=Ag({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(){this.zt=new Fg}addToCollectionParentIndex(e,n){return this.zt.add(n),g.resolve()}getCollectionParents(e,n){return g.resolve(this.zt.getEntries(n))}}class Fg{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Y(M.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Y(M.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new Ct(0)}static re(){return new Ct(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(t){if(t.code!==f.FAILED_PRECONDITION||t.message!==Og)throw t;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r!==void 0){for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n])}else this.inner[s]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),!0;return!1}forEach(e){Ze(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Ic(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(){this.changes=new Sn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:C.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:ee.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?g.resolve(s.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n,s){this.Je=e,this.An=n,this.Jt=s}Rn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.Pn(e,n,s))}Pn(e,n,s){return this.Je.getEntry(e,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}bn(e,n){e.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}vn(e,n){return this.Je.getEntries(e,n).next(s=>this.Vn(e,s).next(()=>s))}Vn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.bn(n,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return T.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.Sn(e,n.path):Gp(n)?this.Dn(e,n,s):this.Cn(e,n,s)}Sn(e,n){return this.Rn(e,new T(n)).next(s=>{let r=Ii();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Dn(e,n,s){const r=n.collectionGroup;let i=Ii();return this.Jt.getCollectionParents(e,r).next(o=>g.forEach(o,a=>{const c=function(u,l){return new Is(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.Cn(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}Cn(e,n,s){let r,i;return this.Je.getDocumentsMatchingQuery(e,n,s).next(o=>(r=o,this.An.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(i=o,this.Nn(e,i,r).next(a=>{r=a;for(const c of i)for(const u of c.mutations){const l=u.key;let h=r.get(l);h==null&&(h=ee.newInvalidDocument(l),r=r.insert(l,h)),Ti(u,h,c.localWriteTime),h.isFoundDocument()||(r=r.remove(l))}}))).next(()=>(r.forEach((o,a)=>{ks(n,a)||(r=r.remove(o))}),r))}Nn(e,n,s){let r=O();for(const o of n)for(const a of o.mutations)a instanceof st&&s.get(a.key)===null&&(r=r.add(a.key));let i=s;return this.Je.getEntries(e,r).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(i=i.insert(a,c))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.kn=s,this.xn=r}static $n(e,n){let s=O(),r=O();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ni(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{Fn(e){this.On=e}getDocumentsMatchingQuery(e,n,s,r){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(C.min())?this.Mn(e,n):this.On.vn(e,r).next(i=>{const o=this.Ln(n,i);return(Ss(n)||As(n))&&this.Bn(n.limitType,o,r,s)?this.Mn(e,n):(wc()<=R.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ei(n)),this.On.getDocumentsMatchingQuery(e,n,s).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Ln(e,n){let s=new Y(Mc(e));return n.forEach((r,i)=>{ks(e,i)&&(s=s.add(i))}),s}Bn(e,n,s,r){if(s.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mn(e,n){return wc()<=R.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",Ei(n)),this.On.getDocumentsMatchingQuery(e,n,C.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n,s,r){this.persistence=e,this.Un=n,this.k=r,this.qn=new te(N),this.Kn=new Sn(i=>mi(i),yi),this.jn=C.min(),this.An=e.getMutationQueue(s),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new lu(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qn))}}function qg(t,e,n,s){return new $g(t,e,n,s)}async function hu(t,e){const n=S(t);let s=n.An,r=n.Wn;const i=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.An.getAllMutationBatches(o).next(c=>(a=c,s=n.persistence.getMutationQueue(e),r=new lu(n.Qn,s,n.persistence.getIndexManager()),s.getAllMutationBatches(o))).next(c=>{const u=[],l=[];let h=O();for(const d of a){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of c){l.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return r.vn(o,h).next(d=>({Gn:d,removedBatchIds:u,addedBatchIds:l}))})});return n.An=s,n.Wn=r,n.Un.Fn(n.Wn),i}function jg(t,e){const n=S(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=g.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(m=>{const b=c.docVersions.get(p);D(b!==null),m.version.compareTo(b)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&u.addEntry(m,c.commitVersion))})}),d.next(()=>o.An.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.An.performConsistencyCheck(s)).next(()=>n.Wn.vn(s,r))})}function du(t){const e=S(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.He.getLastRemoteSnapshotVersion(n))}function Hg(t,e){const n=S(t),s=e.snapshotVersion;let r=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Qn.newChangeBuffer({trackRemovals:!0});r=n.qn;const a=[];e.targetChanges.forEach((u,l)=>{const h=r.get(l);if(!h)return;a.push(n.He.removeMatchingKeys(i,u.removedDocuments,l).next(()=>n.He.addMatchingKeys(i,u.addedDocuments,l)));const d=u.resumeToken;if(d.approximateByteSize()>0){const p=h.withResumeToken(d,s).withSequenceNumber(i.currentSequenceNumber);r=r.insert(l,p),function(m,b,A){return D(b.resumeToken.approximateByteSize()>0),m.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(h,p,u)&&a.push(n.He.updateTargetData(i,p))}});let c=rt();if(e.documentUpdates.forEach((u,l)=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(zg(i,o,e.documentUpdates,s,void 0).next(u=>{c=u})),!s.isEqual(C.min())){const u=n.He.getLastRemoteSnapshotVersion(i).next(l=>n.He.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>n.Wn.Vn(i,c)).next(()=>c)}).then(i=>(n.qn=r,i))}function zg(t,e,n,s,r){let i=O();return n.forEach(o=>i=i.add(o)),e.getEntries(t,i).next(o=>{let a=rt();return n.forEach((c,u)=>{const l=o.get(c),h=(r==null?void 0:r.get(c))||s;u.isNoDocument()&&u.version.isEqual(C.min())?(e.removeEntry(c,h),a=a.insert(c,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u,h),a=a.insert(c,u)):v("LocalStore","Ignoring outdated watch update for ",c,". Current version:",l.version," Watch version:",u.version)}),a})}function Wg(t,e){const n=S(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.An.getNextMutationBatchAfterBatchId(s,e)))}function Kg(t,e){const n=S(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.He.getTargetData(s,e).next(i=>i?(r=i,g.resolve(r)):n.He.allocateTargetId(s).next(o=>(r=new it(e,o,0,s.currentSequenceNumber),n.He.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qn.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(s.targetId,s),n.Kn.set(e,s.targetId)),s})}async function Di(t,e,n){const s=S(t),r=s.qn.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Tn(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qn=s.qn.remove(e),s.Kn.delete(r.target)}function fu(t,e,n){const s=S(t);let r=C.min(),i=O();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=S(a),h=l.Kn.get(u);return h!==void 0?g.resolve(l.qn.get(h)):l.He.getTargetData(c,u)}(s,o,tt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.He.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Un.getDocumentsMatchingQuery(o,e,n?r:C.min(),n?i:O())).next(a=>({documents:a,zn:i})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,n){return g.resolve(this.Xn.get(n))}saveBundleMetadata(e,n){var s;return this.Xn.set(n.id,{id:(s=n).id,version:s.version,createTime:Re(s.createTime)}),g.resolve()}getNamedQuery(e,n){return g.resolve(this.Zn.get(n))}saveNamedQuery(e,n){return this.Zn.set(n.name,function(s){return{name:s.name,query:Ug(s.bundledQuery),readTime:Re(s.readTime)}}(n)),g.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this.ts=new Y(W.es),this.ns=new Y(W.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,n){const s=new W(e,n);this.ts=this.ts.add(s),this.ns=this.ns.add(s)}rs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.os(new W(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}us(e){const n=new T(new M([])),s=new W(n,e),r=new W(n,e+1),i=[];return this.ns.forEachInRange([s,r],o=>{this.os(o),i.push(o.key)}),i}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const n=new T(new M([])),s=new W(n,e),r=new W(n,e+1);let i=O();return this.ns.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new W(e,0),s=this.ts.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class W{constructor(e,n){this.key=e,this.fs=n}static es(e,n){return T.comparator(e.key,n.key)||N(e.fs,n.fs)}static ss(e,n){return N(e.fs,n.fs)||T.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n){this.Jt=e,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new Y(W.es)}checkEmpty(e){return g.resolve(this.An.length===0)}addMutationBatch(e,n,s,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new Lg(i,n,s,r);this.An.push(o);for(const a of r)this.ws=this.ws.add(new W(a.key,i)),this.Jt.addToCollectionParentIndex(e,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(e,n){return g.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.gs(s),i=r<0?0:r;return g.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(e){return g.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new W(n,0),r=new W(n,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([s,r],o=>{const a=this._s(o.fs);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Y(N);return n.forEach(r=>{const i=new W(r,0),o=new W(r,Number.POSITIVE_INFINITY);this.ws.forEachInRange([i,o],a=>{s=s.add(a.fs)})}),g.resolve(this.ys(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;T.isDocumentKey(i)||(i=i.child(""));const o=new W(new T(i),0);let a=new Y(N);return this.ws.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.fs)),!0)},o),g.resolve(this.ys(a))}ys(e){const n=[];return e.forEach(s=>{const r=this._s(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){D(this.ps(n.batchId,"removed")===0),this.An.shift();let s=this.ws;return g.forEach(n.mutations,r=>{const i=new W(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ws=s})}ee(e){}containsKey(e,n){const s=new W(n,0),r=this.ws.firstAfterOrEqual(s);return g.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.An.length,g.resolve()}ps(e,n){return this.gs(e)}gs(e){return this.An.length===0?0:e-this.An[0].batchId}_s(e){const n=this.gs(e);return n<0||n>=this.An.length?null:this.An[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,n){this.Jt=e,this.Ts=n,this.docs=new te(T.comparator),this.size=0}addEntry(e,n,s){const r=n.key,i=this.docs.get(r),o=i?i.size:0,a=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.clone(),size:a,readTime:s}),this.size+=a-o,this.Jt.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return g.resolve(s?s.document.clone():ee.newInvalidDocument(n))}getEntries(e,n){let s=rt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.clone():ee.newInvalidDocument(r))}),g.resolve(s)}getDocumentsMatchingQuery(e,n,s){let r=rt();const i=new T(n.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c,readTime:u}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;u.compareTo(s)<=0||ks(n,c)&&(r=r.insert(c.key,c.clone()))}return g.resolve(r)}Es(e,n){return g.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Yg(this)}getSize(e){return g.resolve(this.size)}}class Yg extends Vg{constructor(e){super(),this.De=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.document.isValidDocument()?n.push(this.De.addEntry(e,r.document,this.getReadTime(s))):this.De.removeEntry(s)}),g.waitFor(n)}getFromCache(e,n){return this.De.getEntry(e,n)}getAllFromCache(e,n){return this.De.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.persistence=e,this.Is=new Sn(n=>mi(n),yi),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.As=0,this.Rs=new Oi,this.targetCount=0,this.Ps=Ct.ie()}forEachTarget(e,n){return this.Is.forEach((s,r)=>n(r)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.As&&(this.As=n),g.resolve()}ce(e){this.Is.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ps=new Ct(n),this.highestTargetId=n),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,g.resolve()}updateTargetData(e,n){return this.ce(n),g.resolve()}removeTargetData(e,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Is.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),g.waitFor(i).next(()=>r)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,n){const s=this.Is.get(n)||null;return g.resolve(s)}addMatchingKeys(e,n,s){return this.Rs.rs(n,s),g.resolve()}removeMatchingKeys(e,n,s){this.Rs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Rs.us(n),g.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Rs.ls(n);return g.resolve(s)}containsKey(e,n){return g.resolve(this.Rs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n){this.bs={},this.Be=new hi(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new Qg(this),this.Jt=new xg,this.Je=function(s,r){return new Jg(s,r)}(this.Jt,s=>this.referenceDelegate.vs(s)),this.k=new Mg(n),this.Ye=new Gg(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new Xg(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,n,s){v("MemoryPersistence","Starting transaction:",e);const r=new em(this.Be.next());return this.referenceDelegate.Vs(),s(r).next(i=>this.referenceDelegate.Ss(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ds(e,n){return g.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,n)))}}class em extends Pg{constructor(e){super(),this.currentSequenceNumber=e}}class Pi{constructor(e){this.persistence=e,this.Cs=new Oi,this.Ns=null}static ks(e){return new Pi(e)}get xs(){if(this.Ns)return this.Ns;throw I()}addReference(e,n,s){return this.Cs.addReference(s,n),this.xs.delete(s.toString()),g.resolve()}removeReference(e,n,s){return this.Cs.removeReference(s,n),this.xs.add(s.toString()),g.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),g.resolve()}removeTarget(e,n){this.Cs.us(n.targetId).forEach(r=>this.xs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.xs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Vs(){this.Ns=new Set}Ss(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.xs,s=>{const r=T.fromPath(s);return this.$s(e,r).next(i=>{i||n.removeEntry(r)})}).next(()=>(this.Ns=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(s=>{s?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(e){return 0}$s(e,n){return g.or([()=>g.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ds(e,n)])}}class pu{constructor(){this.activeTargetIds=Jc()}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tm{constructor(){this.pi=new pu,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,n,s){this.Ti[e]=n}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new pu,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{Ei(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Pi(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Fi(e){this.ki(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Mi=n+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,n,s,r,i){const o=this.Ui(e,n);v("RestConnection","Sending: ",o,s);const a={};return this.qi(a,r,i),this.Ki(e,o,a,s).then(c=>(v("RestConnection","Received: ",c),c),c=>{throw _c("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ji(e,n,s,r,i){return this.Bi(e,n,s,r,i)}qi(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Tt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Ui(e,n){const s=sm[e];return`${this.Mi}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,n,s,r){return new Promise((i,o)=>{const a=new Tp;a.listenOnce(wp.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ui.NO_ERROR:const u=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(u)),i(u);break;case ui.TIMEOUT:v("Connection",'RPC "'+e+'" timed out'),o(new w(f.DEADLINE_EXCEEDED,"Request time out"));break;case ui.HTTP_ERROR:const l=a.getStatus();if(v("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(m)>=0?m:f.UNKNOWN}(h.status);o(new w(d,h.message))}else o(new w(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{v("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}Qi(e,n,s){const r=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=yp(),o=vp(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Ep({})),this.qi(a.initMessageHeaders,n,s),oo()||co()||Dl()||uo()||Ol()||ao()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");v("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new rm({Vi:m=>{h?v("Connection","Not sending because WebChannel is closed:",m):(l||(v("Connection","Opening WebChannel transport."),u.open(),l=!0),v("Connection","WebChannel sending:",m),u.send(m))},Si:()=>u.close()}),p=(m,b,A)=>{m.listen(b,q=>{try{A(q)}catch(x){setTimeout(()=>{throw x},0)}})};return p(u,ws.EventType.OPEN,()=>{h||v("Connection","WebChannel transport opened.")}),p(u,ws.EventType.CLOSE,()=>{h||(h=!0,v("Connection","WebChannel transport closed"),d.Fi())}),p(u,ws.EventType.ERROR,m=>{h||(h=!0,_c("Connection","WebChannel transport errored:",m),d.Fi(new w(f.UNAVAILABLE,"The operation could not be completed")))}),p(u,ws.EventType.MESSAGE,m=>{var b;if(!h){const A=m.data[0];D(!!A);const q=A,x=q.error||((b=q[0])===null||b===void 0?void 0:b.error);if(x){v("Connection","WebChannel received error:",x);const F=x.status;let L=function(_e){const $e=$[_e];if($e!==void 0)return Gc($e)}(F),ge=x.message;L===void 0&&(L=f.INTERNAL,ge="Unknown error status: "+F+" with message "+x.message),h=!0,d.Fi(new w(L,ge)),u.close()}else v("Connection","WebChannel received:",A),d.Oi(A)}}),p(o,_p.STAT_EVENT,m=>{m.stat===yc.PROXY?v("Connection","Detected buffering proxy"):m.stat===yc.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.$i()},0),d}}function Li(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){return new yg(t,!0)}class mu{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Oe=e,this.timerId=n,this.Wi=s,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const n=Math.floor(this.Hi+this.tr()),s=Math.max(0,Date.now()-this.Yi),r=Math.max(0,n-s);r>0&&v("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n,s,r,i,o,a,c){this.Oe=e,this.nr=s,this.sr=r,this.ir=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new mu(e,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.ar===null&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,e!==4?this.ur.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(Ue(n.toString()),Ue("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.rr===n&&this.Ir(s,r)},s=>{e(()=>{const r=new w(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Ar(r)})})}Ir(e,n){const s=this.Er(this.rr);this.stream=this.Rr(e,n),this.stream.Di(()=>{s(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(r=>{s(()=>this.Ar(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return n=>{this.Oe.enqueueAndForget(()=>this.rr===e?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class om extends yu{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.k=i}Rr(e,n){return this.ir.Qi("Listen",e,n)}onMessage(e){this.ur.reset();const n=_g(this.k,e),s=function(r){if(!("targetChange"in r))return C.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?C.min():i.readTime?Re(i.readTime):C.min()}(e);return this.listener.Pr(n,s)}br(e){const n={};n.database=Ri(this.k),n.addTarget=function(r,i){let o;const a=i.target;return o=vi(a)?{documents:Ig(r,a)}:{query:Sg(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=nu(r,i.resumeToken):i.snapshotVersion.compareTo(C.min())>0&&(o.readTime=xs(r,i.snapshotVersion.toTimestamp())),o}(this.k,e);const s=bg(this.k,e);s&&(n.labels=s),this.gr(n)}vr(e){const n={};n.database=Ri(this.k),n.removeTarget=e,this.gr(n)}}class am extends yu{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,n){return this.ir.Qi("Write",e,n)}onMessage(e){if(D(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const n=Tg(e.writeResults,e.commitTime),s=Re(e.commitTime);return this.listener.Cr(s,n)}return D(!e.writeResults||e.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=Ri(this.k),this.gr(e)}Dr(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Eg(this.k,s))};this.gr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.ir=s,this.k=r,this.$r=!1}Fr(){if(this.$r)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,n,s){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.Bi(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(f.UNKNOWN,r.toString())})}ji(e,n,s){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.ji(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(f.UNKNOWN,r.toString())})}terminate(){this.$r=!0}}class um{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){this.Or===0&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){this.state==="Online"?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,e==="Online"&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(Ue(n),this.Lr=!1):v("OnlineStateTracker",n)}jr(){this.Mr!==null&&(this.Mr.cancel(),this.Mr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei(o=>{s.enqueueAndForget(async()=>{ot(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=S(a);c.Gr.add(4),await An(c),c.Jr.set("Unknown"),c.Gr.delete(4),await Vs(c)}(this))})}),this.Jr=new um(s,r)}}async function Vs(t){if(ot(t))for(const e of t.zr)await e(!0)}async function An(t){for(const e of t.zr)await e(!1)}function vu(t,e){const n=S(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),xi(n)?Ui(n):Nt(n).lr()&&Mi(n,e))}function wu(t,e){const n=S(t),s=Nt(n);n.Wr.delete(e),s.lr()&&_u(n,e),n.Wr.size===0&&(s.lr()?s._r():ot(n)&&n.Jr.set("Unknown"))}function Mi(t,e){t.Yr.X(e.targetId),Nt(t).br(e)}function _u(t,e){t.Yr.X(e),Nt(t).vr(e)}function Ui(t){t.Yr=new pg({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),Nt(t).start(),t.Jr.Br()}function xi(t){return ot(t)&&!Nt(t).hr()&&t.Wr.size>0}function ot(t){return S(t).Gr.size===0}function Eu(t){t.Yr=void 0}async function hm(t){t.Wr.forEach((e,n)=>{Mi(t,e)})}async function dm(t,e){Eu(t),xi(t)?(t.Jr.Kr(e),Ui(t)):t.Jr.set("Unknown")}async function fm(t,e,n){if(t.Jr.set("Online"),e instanceof Qc&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Wr.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Wr.delete(o),s.Yr.removeTarget(o))}(t,e)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Bs(t,s)}else if(e instanceof Us?t.Yr.ot(e):e instanceof Yc?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(C.min()))try{const s=await du(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Yr.gt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.Wr.get(c);u&&r.Wr.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.Wr.get(a);if(!c)return;r.Wr.set(a,c.withResumeToken(Z.EMPTY_BYTE_STRING,c.snapshotVersion)),_u(r,a);const u=new it(c.target,a,1,c.sequenceNumber);Mi(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await Bs(t,s)}}async function Bs(t,e,n){if(!Tn(e))throw e;t.Gr.add(1),await An(t),t.Jr.set("Offline"),n||(n=()=>du(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Vs(t)})}function Tu(t,e){return e().catch(n=>Bs(t,n,e))}async function $s(t){const e=S(t),n=Fe(e);let s=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;pm(e);)try{const r=await Wg(e.localStore,s);if(r===null){e.Qr.length===0&&n._r();break}s=r.batchId,gm(e,r)}catch(r){await Bs(e,r)}Iu(e)&&Su(e)}function pm(t){return ot(t)&&t.Qr.length<10}function gm(t,e){t.Qr.push(e);const n=Fe(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function Iu(t){return ot(t)&&!Fe(t).hr()&&t.Qr.length>0}function Su(t){Fe(t).start()}async function mm(t){Fe(t).kr()}async function ym(t){const e=Fe(t);for(const n of t.Qr)e.Dr(n.mutations)}async function vm(t,e,n){const s=t.Qr.shift(),r=Ci.from(s,e,n);await Tu(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await $s(t)}async function wm(t,e){e&&Fe(t).Sr&&await async function(n,s){if(r=s.code,ag(r)&&r!==f.ABORTED){const i=n.Qr.shift();Fe(n).wr(),await Tu(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await $s(n)}var r}(t,e),Iu(t)&&Su(t)}async function _m(t,e){const n=S(t);e?(n.Gr.delete(2),await Vs(n)):e||(n.Gr.add(2),await An(n),n.Jr.set("Unknown"))}function Nt(t){return t.Xr||(t.Xr=function(e,n,s){const r=S(e);return r.Fr(),new om(n,r.ir,r.authCredentials,r.appCheckCredentials,r.k,s)}(t.datastore,t.asyncQueue,{Di:hm.bind(null,t),Ni:dm.bind(null,t),Pr:fm.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),xi(t)?Ui(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Eu(t))})),t.Xr}function Fe(t){return t.Zr||(t.Zr=function(e,n,s){const r=S(e);return r.Fr(),new am(n,r.ir,r.authCredentials,r.appCheckCredentials,r.k,s)}(t.datastore,t.asyncQueue,{Di:mm.bind(null,t),Ni:wm.bind(null,t),Nr:ym.bind(null,t),Cr:vm.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await $s(t)):(await t.Zr.stop(),t.Qr.length>0&&(v("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ke,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Fi(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vi(t,e){if(Ue("AsyncQueue",`${e}: ${t}`),Tn(t))return new w(f.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.comparator=e?(n,s)=>e(n,s)||T.comparator(n.key,s.key):(n,s)=>T.comparator(n.key,s.key),this.keyedMap=Ii(),this.sortedSet=new te(this.comparator)}static emptySet(e){return new Dt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Dt)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Dt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this.eo=new te(T.comparator)}track(e){const n=e.doc.key,s=this.eo.get(n);s?e.type!==0&&s.type===3?this.eo=this.eo.insert(n,e):e.type===3&&s.type!==1?this.eo=this.eo.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.eo=this.eo.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.eo=this.eo.remove(n):e.type===1&&s.type===2?this.eo=this.eo.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):I():this.eo=this.eo.insert(n,e)}no(){const e=[];return this.eo.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ot{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Ot(e,n,Dt.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(){this.so=void 0,this.listeners=[]}}class Tm{constructor(){this.queries=new Sn(e=>Lc(e),bs),this.onlineState="Unknown",this.io=new Set}}async function bu(t,e){const n=S(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Em),r)try{i.so=await n.onListen(s)}catch(o){const a=Vi(o,`Initialization of query '${Ei(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.ro(n.onlineState),i.so&&e.oo(i.so)&&Bi(n)}async function ku(t,e){const n=S(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Im(t,e){const n=S(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.oo(r)&&(s=!0);o.so=r}}s&&Bi(n)}function Sm(t,e,n){const s=S(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Bi(t){t.io.forEach(e=>{e.next()})}class Ru{constructor(e,n,s){this.query=e,this.ao=n,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=s||{}}oo(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ot(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.ho(e)&&(this.ao.next(e),n=!0):this.lo(e,this.onlineState)&&(this.fo(e),n=!0),this.uo=e,n}onError(e){this.ao.error(e)}ro(e){this.onlineState=e;let n=!1;return this.uo&&!this.co&&this.lo(this.uo,e)&&(this.fo(this.uo),n=!0),n}lo(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.wo||!s)&&(!e.docs.isEmpty()||n==="Offline")}ho(e){if(e.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(e){e=Ot.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.ao.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this.key=e}}class Nu{constructor(e){this.key=e}}class Am{constructor(e,n){this.query=e,this.To=n,this.Eo=null,this.current=!1,this.Io=O(),this.mutatedKeys=O(),this.Ao=Mc(e),this.Ro=new Dt(this.Ao)}get Po(){return this.To}bo(e,n){const s=n?n.vo:new Au,r=n?n.Ro:this.Ro;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=Ss(this.query)&&r.size===this.query.limit?r.last():null,u=As(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),p=ks(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),b=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let A=!1;d&&p?d.data.isEqual(p.data)?m!==b&&(s.track({type:3,doc:p}),A=!0):this.Vo(d,p)||(s.track({type:2,doc:p}),A=!0,(c&&this.Ao(p,c)>0||u&&this.Ao(p,u)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),A=!0):d&&!p&&(s.track({type:1,doc:d}),A=!0,(c||u)&&(a=!0)),A&&(p?(o=o.add(p),i=b?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),Ss(this.query)||As(this.query))for(;o.size>this.query.limit;){const l=Ss(this.query)?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Ro:o,vo:s,Bn:a,mutatedKeys:i}}Vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const i=e.vo.no();i.sort((u,l)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return p(h)-p(d)}(u.type,l.type)||this.Ao(u.doc,l.doc)),this.So(s);const o=n?this.Do():[],a=this.Io.size===0&&this.current?1:0,c=a!==this.Eo;return this.Eo=a,i.length!==0||c?{snapshot:new Ot(this.query,e.Ro,r,i,e.mutatedKeys,a===0,c,!1),Co:o}:{Co:o}}ro(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Au,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(n=>this.To=this.To.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=O(),this.Ro.forEach(s=>{this.No(s.key)&&(this.Io=this.Io.add(s.key))});const n=[];return e.forEach(s=>{this.Io.has(s)||n.push(new Nu(s))}),this.Io.forEach(s=>{e.has(s)||n.push(new Cu(s))}),n}ko(e){this.To=e.zn,this.Io=O();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return Ot.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class bm{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class km{constructor(e){this.key=e,this.$o=!1}}class Rm{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Fo={},this.Oo=new Sn(a=>Lc(a),bs),this.Mo=new Map,this.Lo=new Set,this.Bo=new te(T.comparator),this.Uo=new Map,this.qo=new Oi,this.Ko={},this.jo=new Map,this.Qo=Ct.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function Cm(t,e){const n=Vm(t);let s,r;const i=n.Oo.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.xo();else{const o=await Kg(n.localStore,tt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Nm(n,e,s,a==="current"),n.isPrimaryClient&&vu(n.remoteStore,o)}return r}async function Nm(t,e,n,s){t.Go=(l,h,d)=>async function(p,m,b,A){let q=m.view.bo(b);q.Bn&&(q=await fu(p.localStore,m.query,!1).then(({documents:L})=>m.view.bo(L,q)));const x=A&&A.targetChanges.get(m.targetId),F=m.view.applyChanges(q,p.isPrimaryClient,x);return Uu(p,m.targetId,F.Co),F.snapshot}(t,l,h,d);const r=await fu(t.localStore,e,!0),i=new Am(e,r.zn),o=i.bo(r.documents),a=En.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Uu(t,n,c.Co);const u=new bm(e,n,i);return t.Oo.set(e,u),t.Mo.has(n)?t.Mo.get(n).push(e):t.Mo.set(n,[e]),c.snapshot}async function Dm(t,e){const n=S(t),s=n.Oo.get(e),r=n.Mo.get(s.targetId);if(r.length>1)return n.Mo.set(s.targetId,r.filter(i=>!bs(i,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Di(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),wu(n.remoteStore,s.targetId),$i(n,s.targetId)}).catch(In)):($i(n,s.targetId),await Di(n.localStore,s.targetId,!0))}async function Om(t,e,n){const s=Bm(t);try{const r=await function(i,o){const a=S(i),c=le.now(),u=o.reduce((h,d)=>h.add(d.key),O());let l;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Wn.vn(h,u).next(d=>{l=d;const p=[];for(const m of o){const b=sg(m,l.get(m.key));b!=null&&p.push(new st(m.key,b,Cc(b.value.mapValue),nt.exists(!0)))}return a.An.addMutationBatch(h,c,p,o)})).then(h=>(h.applyToLocalDocumentSet(l),{batchId:h.batchId,changes:l}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Ko[i.currentUser.toKey()];c||(c=new te(N)),c=c.insert(o,a),i.Ko[i.currentUser.toKey()]=c}(s,r.batchId,n),await bn(s,r.changes),await $s(s.remoteStore)}catch(r){const i=Vi(r,"Failed to persist write");n.reject(i)}}async function Du(t,e){const n=S(t);try{const s=await Hg(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Uo.get(i);o&&(D(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.$o=!0:r.modifiedDocuments.size>0?D(o.$o):r.removedDocuments.size>0&&(D(o.$o),o.$o=!1))}),await bn(n,s,e)}catch(s){await In(s)}}function Ou(t,e,n){const s=S(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Oo.forEach((i,o)=>{const a=o.view.ro(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=S(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.ro(o)&&(c=!0)}),c&&Bi(a)}(s.eventManager,e),r.length&&s.Fo.Pr(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Pm(t,e,n){const s=S(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Uo.get(e),i=r&&r.key;if(i){let o=new te(T.comparator);o=o.insert(i,ee.newNoDocument(i,C.min()));const a=O().add(i),c=new Ms(C.min(),new Map,new Y(N),o,a);await Du(s,c),s.Bo=s.Bo.remove(i),s.Uo.delete(e),qi(s)}else await Di(s.localStore,e,!1).then(()=>$i(s,e,n)).catch(In)}async function Lm(t,e){const n=S(t),s=e.batch.batchId;try{const r=await jg(n.localStore,e);Lu(n,s,null),Pu(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await bn(n,r)}catch(r){await In(r)}}async function Mm(t,e,n){const s=S(t);try{const r=await function(i,o){const a=S(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.An.lookupMutationBatch(c,o).next(l=>(D(l!==null),u=l.keys(),a.An.removeMutationBatch(c,l))).next(()=>a.An.performConsistencyCheck(c)).next(()=>a.Wn.vn(c,u))})}(s.localStore,e);Lu(s,e,n),Pu(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await bn(s,r)}catch(r){await In(r)}}function Pu(t,e){(t.jo.get(e)||[]).forEach(n=>{n.resolve()}),t.jo.delete(e)}function Lu(t,e,n){const s=S(t);let r=s.Ko[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Ko[s.currentUser.toKey()]=r}}function $i(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Mo.get(e))t.Oo.delete(s),n&&t.Fo.zo(s,n);t.Mo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(s=>{t.qo.containsKey(s)||Mu(t,s)})}function Mu(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);n!==null&&(wu(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),qi(t))}function Uu(t,e,n){for(const s of n)s instanceof Cu?(t.qo.addReference(s.key,e),Um(t,s)):s instanceof Nu?(v("SyncEngine","Document no longer in limbo: "+s.key),t.qo.removeReference(s.key,e),t.qo.containsKey(s.key)||Mu(t,s.key)):I()}function Um(t,e){const n=e.key,s=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(s)||(v("SyncEngine","New document in limbo: "+n),t.Lo.add(s),qi(t))}function qi(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new T(M.fromString(e)),s=t.Qo.next();t.Uo.set(s,new km(n)),t.Bo=t.Bo.insert(n,s),vu(t.remoteStore,new it(tt(_i(n.path)),s,2,hi.I))}}async function bn(t,e,n){const s=S(t),r=[],i=[],o=[];s.Oo.isEmpty()||(s.Oo.forEach((a,c)=>{o.push(s.Go(c,e,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),r.push(u);const l=Ni.$n(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.Fo.Pr(r),await async function(a,c){const u=S(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>g.forEach(c,h=>g.forEach(h.kn,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>g.forEach(h.xn,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Tn(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qn.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);u.qn=u.qn.insert(h,m)}}}(s.localStore,i))}async function xm(t,e){const n=S(t);if(!n.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const s=await hu(n.localStore,e);n.currentUser=e,function(r,i){r.jo.forEach(o=>{o.forEach(a=>{a.reject(new w(f.CANCELLED,i))})}),r.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await bn(n,s.Gn)}}function Fm(t,e){const n=S(t),s=n.Uo.get(e);if(s&&s.$o)return O().add(s.key);{let r=O();const i=n.Mo.get(e);if(!i)return r;for(const o of i){const a=n.Oo.get(o);r=r.unionWith(a.view.Po)}return r}}function Vm(t){const e=S(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Du.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fm.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Pm.bind(null,e),e.Fo.Pr=Im.bind(null,e.eventManager),e.Fo.zo=Sm.bind(null,e.eventManager),e}function Bm(t){const e=S(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Lm.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Mm.bind(null,e),e}class $m{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=Fs(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return qg(this.persistence,new Bg,e.initialUser,this.k)}Yo(e){return new Zg(Pi.ks,this.k)}Jo(e){return new tm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ou(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=xm.bind(null,this.syncEngine),await _m(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Tm}createDatastore(e){const n=Fs(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new im(r));var r;return function(i,o,a,c){return new cm(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Ou(this.syncEngine,a,0),o=gu.bt()?new gu:new nm,new lm(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new Rm(s,r,i,o,a,c);return u&&(l.Wo=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=S(e);v("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await An(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ea(this.observer.next,e)}error(e){this.observer.error?this.ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}na(){this.muted=!0}ea(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=oe.UNAUTHENTICATED,this.clientId=Ec.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{v("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ke;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Vi(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Hm(t,e){t.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await hu(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function zm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Wm(t);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>async function(i,o){const a=S(i);a.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const c=ot(a);a.Gr.add(3),await An(a),c&&a.Jr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Gr.delete(3),await Vs(a)}(e.remoteStore,r)),t.onlineComponents=e}async function Wm(t){return t.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await Hm(t,new $m)),t.offlineComponents}async function Fu(t){return t.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await zm(t,new qm)),t.onlineComponents}function Km(t){return Fu(t).then(e=>e.syncEngine)}async function Vu(t){const e=await Fu(t),n=e.eventManager;return n.onListen=Cm.bind(null,e.syncEngine),n.onUnlisten=Dm.bind(null,e.syncEngine),n}function Gm(t,e,n={}){const s=new ke;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new xu({next:h=>{i.enqueueAndForget(()=>ku(r,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new w(f.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new w(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Ru(_i(o.path),u,{includeMetadataChanges:!0,wo:!0});return bu(r,l)}(await Vu(t),t.asyncQueue,e,n,s)),s.promise}function Xm(t,e,n={}){const s=new ke;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new xu({next:h=>{i.enqueueAndForget(()=>ku(r,l)),h.fromCache&&a.source==="server"?c.reject(new w(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Ru(o,u,{includeMetadataChanges:!0,wo:!0});return bu(r,l)}(await Vu(t),t.asyncQueue,e,n,s)),s.promise}class Jm{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class kn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof kn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t,e,n){if(!n)throw new w(f.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ym(t,e,n,s){if(e===!0&&s===!0)throw new w(f.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qu(t){if(!T.isDocumentKey(t))throw new w(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ju(t){if(T.isDocumentKey(t))throw new w(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ji(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":I()}function at(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new w(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ji(t);throw new w(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new w(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new w(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Ym("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hu({}),this._settingsFrozen=!1,e instanceof kn?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new w(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kn(r.options.projectId)}(e))}get app(){if(!this._app)throw new w(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new w(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Sp;switch(n.type){case"gapi":const s=n.client;return D(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new kp(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new w(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Bu.get(e);n&&(v("ComponentProvider","Removing Datastore"),Bu.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ve(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new de(this.firestore,e,this._key)}}class qs{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new qs(this.firestore,e,this._query)}}class Ve extends qs{constructor(e,n,s){super(e,n,_i(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new de(this.firestore,null,new T(e))}withConverter(e){return new Ve(this.firestore,e,this._path)}}function Av(t,e,...n){if(t=j(t),$u("collection","path",e),t instanceof Hi){const s=M.fromString(e,...n);return ju(s),new Ve(t,null,s)}{if(!(t instanceof de||t instanceof Ve))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(M.fromString(e,...n));return ju(s),new Ve(t.firestore,null,s)}}function Qm(t,e,...n){if(t=j(t),arguments.length===1&&(e=Ec.A()),$u("doc","path",e),t instanceof Hi){const s=M.fromString(e,...n);return qu(s),new de(t,null,new T(s))}{if(!(t instanceof de||t instanceof Ve))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(M.fromString(e,...n));return qu(s),new de(t.firestore,t instanceof Ve?t.converter:null,new T(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new mu(this,"async_queue_retry"),this.Ra=()=>{const n=Li();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const e=Li();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const n=Li();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise(()=>{});const n=new ke;return this.ba(()=>this.ya&&this.Ia?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ga.push(e),this.va()))}async va(){if(this.ga.length!==0){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!Tn(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi(()=>this.va())}}ba(e){const n=this.ma.then(()=>(this.Ea=!0,e().catch(s=>{this.Ta=s,this.Ea=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Ue("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Ea=!1,s))));return this.ma=n,n}enqueueAfterDelay(e,n,s){this.Pa(),this.Aa.indexOf(e)>-1&&(n=0);const r=Fi.createAndSchedule(this,e,n,s,i=>this.Va(i));return this.pa.push(r),r}Pa(){this.Ta&&I()}verifyOperationInProgress(){}async Sa(){let e;do e=this.ma,await e;while(e!==this.ma)}Da(e){for(const n of this.pa)if(n.timerId===e)return!0;return!1}Ca(e){return this.Sa().then(()=>{this.pa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.pa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sa()})}Na(e){this.Aa.push(e)}Va(e){const n=this.pa.indexOf(e);this.pa.splice(n,1)}}class Rn extends Hi{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new Zm,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||zu(this),this._firestoreClient.terminate()}}function bv(t=nr()){return Ln(t,"firestore").getImmediate()}function zi(t){return t._firestoreClient||zu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function zu(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Jm(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new jm(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new w(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pt(Z.fromBase64String(e))}catch(n){throw new w(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pt(Z.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new w(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new w(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return N(this._lat,e._lat)||N(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=/^__.*__$/;class ty{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new st(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ps(e,this.data,n,this.fieldTransforms)}}class Wu{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new st(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ku(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class Gi{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.k=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ka(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new Gi(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.$a({path:s,Oa:!1});return r.Ma(e),r}La(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.$a({path:s,Oa:!1});return r.ka(),r}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return Ws(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(e.length===0)throw this.Ua("Document fields must not be empty");if(Ku(this.xa)&&ey.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class ny{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.k=s||Fs(e)}ja(e,n,s,r=!1){return new Gi({xa:e,methodName:n,Ka:s,path:ae.emptyPath(),Oa:!1,qa:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Gu(t){const e=t._freezeSettings(),n=Fs(t._databaseId);return new ny(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sy(t,e,n,s,r,i={}){const o=t.ja(i.merge||i.mergeFields?2:0,e,n,r);Xi("Data must be an object, but it was:",o,s);const a=Xu(s,o);let c,u;if(i.merge)c=new fn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=Ji(e,h,n);if(!o.contains(d))throw new w(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Yu(l,d)||l.push(d)}c=new fn(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new ty(new he(a),c,u)}class Hs extends Wi{_toFieldTransform(e){if(e.xa!==2)throw e.xa===1?e.Ua(`${this._methodName}() can only appear at the top level of your update data`):e.Ua(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hs}}function ry(t,e,n,s){const r=t.ja(1,e,n);Xi("Data must be an object, but it was:",r,s);const i=[],o=he.empty();Ze(s,(c,u)=>{const l=Yi(e,c,n);u=j(u);const h=r.La(l);if(u instanceof Hs)i.push(l);else{const d=zs(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new fn(i);return new Wu(o,a,r.fieldTransforms)}function iy(t,e,n,s,r,i){const o=t.ja(1,e,n),a=[Ji(e,s,n)],c=[r];if(i.length%2!=0)throw new w(f.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Ji(e,i[d])),c.push(i[d+1]);const u=[],l=he.empty();for(let d=a.length-1;d>=0;--d)if(!Yu(u,a[d])){const p=a[d];let m=c[d];m=j(m);const b=o.La(p);if(m instanceof Hs)u.push(p);else{const A=zs(m,b);A!=null&&(u.push(p),l.set(p,A))}}const h=new fn(u);return new Wu(l,h,o.fieldTransforms)}function zs(t,e){if(Ju(t=j(t)))return Xi("Unsupported field value:",e,t),Xu(t,e);if(t instanceof Wi)return function(n,s){if(!Ku(s.xa))throw s.Ua(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Ua(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Oa&&e.xa!==4)throw e.Ua("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=zs(o,s.Ba(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=j(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Yp(s.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=le.fromDate(n);return{timestampValue:xs(s.k,r)}}if(n instanceof le){const r=new le(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:xs(s.k,r)}}if(n instanceof Ki)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Pt)return{bytesValue:nu(s.k,n._byteString)};if(n instanceof de){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.Ua(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Si(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.Ua(`Unsupported field value: ${ji(n)}`)}(t,e)}function Xu(t,e){const n={};return Ic(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ze(t,(s,r)=>{const i=zs(r,e.Fa(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Ju(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof le||t instanceof Ki||t instanceof Pt||t instanceof de||t instanceof Wi)}function Xi(t,e,n){if(!Ju(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ji(n);throw s==="an object"?e.Ua(t+" a custom object"):e.Ua(t+" "+s)}}function Ji(t,e,n){if((e=j(e))instanceof js)return e._internalPath;if(typeof e=="string")return Yi(t,e);throw Ws("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const oy=new RegExp("[~\\*/\\[\\]]");function Yi(t,e,n){if(e.search(oy)>=0)throw Ws(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new js(...e.split("."))._internalPath}catch{throw Ws(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ws(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new w(f.INVALID_ARGUMENT,a+t+c)}function Yu(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new de(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ay(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Zu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ay extends Qu{data(){return super.data()}}function Zu(t,e){return typeof e=="string"?Yi(t,e):e instanceof js?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class el extends Qu{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ks(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Zu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ks extends el{data(e={}){return super.data(e)}}class cy{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Cn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ks(this._firestore,this._userDataWriter,s.key,s,new Cn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Ks(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Cn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ks(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Cn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:uy(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function uy(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t){if(As(t)&&t.explicitOrderBy.length===0)throw new w(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function kv(t,...e){for(const n of e)t=n._apply(t);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{convertValue(e,n="none"){switch(et(e)){case 0:return null;case 1:return e.booleanValue;case 2:return B(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(St(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw I()}}convertObject(e,n){const s={};return Ze(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Ki(B(e.latitude),B(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ac(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(pn(e));default:return null}}convertTimestamp(e){const n=xe(e);return new le(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=M.fromString(e);D(uu(s));const r=new kn(s.get(1),s.get(3)),i=new T(s.popFirst(5));return r.isEqual(n)||Ue(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(t){t=at(t,de);const e=at(t.firestore,Rn);return Gm(zi(e),t._key).then(n=>fy(e,t,n))}class tl extends hy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new de(this.firestore,null,n)}}function Cv(t){t=at(t,qs);const e=at(t.firestore,Rn),n=zi(e),s=new tl(e);return ly(t._query),Xm(n,t._query).then(r=>new cy(e,s,t,r))}function Nv(t,e,n,...s){t=at(t,de);const r=at(t.firestore,Rn),i=Gu(r);let o;return o=typeof(e=j(e))=="string"||e instanceof js?iy(i,"updateDoc",t._key,e,n,s):ry(i,"updateDoc",t._key,e),nl(r,[o.toMutation(t._key,nt.exists(!0))])}function Dv(t,e){const n=at(t.firestore,Rn),s=Qm(t),r=dy(t.converter,e);return nl(n,[sy(Gu(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,nt.exists(!1))]).then(()=>s)}function nl(t,e){return function(n,s){const r=new ke;return n.asyncQueue.enqueueAndForget(async()=>Om(await Km(n),s,r)),r.promise}(zi(t),e)}function fy(t,e,n){const s=n.docs.get(e._key),r=new tl(t);return new el(t,r,e._key,s,new Cn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Tt=n})(ht),lt(new je("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new Rn(r,new Ap(n.getProvider("auth-internal")),new Cp(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),Ee(vc,"3.4.1",t),Ee(vc,"3.4.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl="firebasestorage.googleapis.com",rl="storageBucket",py=2*60*1e3,gy=10*60*1e3;class U extends qe{constructor(e,n){super(Qi(e),`Firebase Storage: ${n} (${Qi(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,U.prototype)}_codeEquals(e){return Qi(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Qi(t){return"storage/"+t}function Zi(){const t="An unknown error occurred, please check the error payload for server response.";return new U("unknown",t)}function my(t){return new U("object-not-found","Object '"+t+"' does not exist.")}function yy(t){return new U("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function vy(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new U("unauthenticated",t)}function wy(){return new U("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function _y(t){return new U("unauthorized","User does not have permission to access '"+t+"'.")}function Ey(){return new U("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Ty(){return new U("canceled","User canceled the upload/download.")}function Iy(t){return new U("invalid-url","Invalid URL '"+t+"'.")}function Sy(t){return new U("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Ay(){return new U("no-default-bucket","No default bucket found. Did you set the '"+rl+"' property when initializing the app?")}function by(){return new U("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function ky(){return new U("no-download-url","The given file does not have any download URLs.")}function eo(t){return new U("invalid-argument",t)}function il(){return new U("app-deleted","The Firebase app was deleted.")}function Ry(t){return new U("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Nn(t,e){return new U("invalid-format","String does not match format '"+t+"': "+e)}function Dn(t){throw new U("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=fe.makeFromUrl(e,n)}catch{return new fe(e,"")}if(s.path==="")return s;throw Sy(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),m={bucket:1,path:3},b=n===sl?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",q=new RegExp(`^https?://${b}/${r}/${A}`,"i"),F=[{regex:a,indices:c,postModify:i},{regex:p,indices:m,postModify:u},{regex:q,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<F.length;L++){const ge=F[L],_e=ge.regex.exec(e);if(_e){const $e=_e[ge.indices.bucket];let Lt=_e[ge.indices.path];Lt||(Lt=""),s=new fe($e,Lt),ge.postModify(s);break}}if(s==null)throw Iy(e);return s}}class Cy{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...A){u||(u=!0,e.apply(null,A))}function h(A){r=setTimeout(()=>{r=null,t(p,c())},A)}function d(){i&&clearTimeout(i)}function p(A,...q){if(u){d();return}if(A){d(),l.call(null,A,...q);return}if(c()||o){d(),l.call(null,A,...q);return}s<64&&(s*=2);let F;a===1?(a=2,F=0):F=(s+Math.random())*1e3,h(F)}let m=!1;function b(A){m||(m=!0,d(),!u&&(r!==null?(A||(a=2),clearTimeout(r),h(0)):A||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function Dy(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t){return t!==void 0}function Py(t){return typeof t=="object"&&!Array.isArray(t)}function to(t){return typeof t=="string"||t instanceof String}function ol(t){return no()&&t instanceof Blob}function no(){return typeof Blob!="undefined"}function al(t,e,n,s){if(s<e)throw eo(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw eo(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function cl(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ct||(ct={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,n,s,r,i,o,a,c,u,l,h){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Gs(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ct.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const l=i.getErrorCode()===ct.ABORT;s(!1,new Gs(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new Gs(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Oy(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Zi();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?il():Ty();o(c)}else{const c=Ey();o(c)}};this.canceled_?n(!1,new Gs(!1,null,!0)):this.backoffId_=Ny(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Dy(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||r||i}}class Gs{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function My(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Uy(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function xy(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Fy(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Vy(t,e,n,s,r,i){const o=cl(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return xy(c,e),My(c,n),Uy(c,i),Fy(c,s),new Ly(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function $y(...t){const e=By();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(no())return new Blob(t);throw new U("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function qy(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ro{constructor(e,n){this.data=e,this.contentType=n||null}}function Hy(t,e){switch(t){case we.RAW:return new ro(ul(e));case we.BASE64:case we.BASE64URL:return new ro(ll(t,e));case we.DATA_URL:return new ro(Wy(e),Ky(e))}throw Zi()}function ul(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)==55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)==56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)==56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function zy(t){let e;try{e=decodeURIComponent(t)}catch{throw Nn(we.DATA_URL,"Malformed data URL.")}return ul(e)}function ll(t,e){switch(t){case we.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Nn(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case we.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Nn(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=jy(e)}catch{throw Nn(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class hl{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Nn(we.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Gy(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-";base64".length):s),this.rest=e.substring(e.indexOf(",")+1)}}function Wy(t){const e=new hl(t);return e.base64?ll(we.BASE64,e.rest):zy(e.rest)}function Ky(t){return new hl(t).contentType}function Gy(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){let s=0,r="";ol(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(ol(this.data_)){const s=this.data_,r=qy(s,e,n);return r===null?null:new Be(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Be(s,!0)}}static getBlob(...e){if(no()){const n=e.map(s=>s instanceof Be?s.data_:s);return new Be($y.apply(null,n))}else{const n=e.map(o=>to(o)?Hy(we.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new Be(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(t){let e;try{e=JSON.parse(t)}catch{return null}return Py(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Jy(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function fl(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t,e){return e}class ie{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||Yy}}let Xs=null;function Qy(t){return!to(t)||t.length<2?t:fl(t)}function pl(){if(Xs)return Xs;const t=[];t.push(new ie("bucket")),t.push(new ie("generation")),t.push(new ie("metageneration")),t.push(new ie("name","fullPath",!0));function e(i,o){return Qy(o)}const n=new ie("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new ie("size");return r.xform=s,t.push(r),t.push(new ie("timeCreated")),t.push(new ie("updated")),t.push(new ie("md5Hash",null,!0)),t.push(new ie("cacheControl",null,!0)),t.push(new ie("contentDisposition",null,!0)),t.push(new ie("contentEncoding",null,!0)),t.push(new ie("contentLanguage",null,!0)),t.push(new ie("contentType",null,!0)),t.push(new ie("metadata","customMetadata",!0)),Xs=t,Xs}function Zy(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new fe(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function ev(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return Zy(s,t),s}function gl(t,e,n){const s=dl(e);return s===null?null:ev(t,s,n)}function tv(t,e,n,s){const r=dl(e);if(r===null||!to(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),p=so(d,n,s),m=cl({alt:"media",token:u});return p+m})[0]}function nv(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class ml{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(t){if(!t)throw Zi()}function sv(t,e){function n(s,r){const i=gl(t,r,e);return yl(i!==null),i}return n}function rv(t,e){function n(s,r){const i=gl(t,r,e);return yl(i!==null),tv(i,r,t.host,t._protocol)}return n}function vl(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=wy():r=vy():n.getStatus()===402?r=yy(t.bucket):n.getStatus()===403?r=_y(t.path):r=s,r.serverResponse=s.serverResponse,r}return e}function iv(t){const e=vl(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=my(t.path)),i.serverResponse=r.serverResponse,i}return n}function ov(t,e,n){const s=e.fullServerUrl(),r=so(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new ml(r,i,rv(t,n),o);return a.errorHandler=iv(e),a}function av(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function cv(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=av(null,e)),s}function uv(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let F="";for(let L=0;L<2;L++)F=F+Math.random().toString().slice(2);return F}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=cv(e,s,r),l=nv(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=Be.getBlob(h,s,d);if(p===null)throw by();const m={name:u.fullPath},b=so(i,t.host,t._protocol),A="POST",q=t.maxUploadRetryTime,x=new ml(b,A,sv(t,n),q);return x.urlParams=m,x.headers=o,x.body=p.uploadData(),x.errorHandler=vl(e),x}class lv{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ct.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ct.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ct.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Dn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Dn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Dn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Dn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Dn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class hv extends lv{initXhr(){this.xhr_.responseType="text"}}function wl(){return new hv}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n){this._service=e,n instanceof fe?this._location=n:this._location=fe.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ut(e,n)}get root(){const e=new fe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fl(this._location.path)}get storage(){return this._service}get parent(){const e=Xy(this._location.path);if(e===null)return null;const n=new fe(this._location.bucket,e);return new ut(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Ry(e)}}function dv(t,e,n){t._throwIfRoot("uploadBytes");const s=uv(t.storage,t._location,pl(),new Be(e,!0),n);return t.storage.makeRequestWithTokens(s,wl).then(r=>({metadata:r,ref:t}))}function fv(t){t._throwIfRoot("getDownloadURL");const e=ov(t.storage,t._location,pl());return t.storage.makeRequestWithTokens(e,wl).then(n=>{if(n===null)throw ky();return n})}function pv(t,e){const n=Jy(t._location.path,e),s=new fe(t._location.bucket,n);return new ut(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t){return/^[A-Za-z]+:\/\//.test(t)}function mv(t,e){return new ut(t,e)}function _l(t,e){if(t instanceof io){const n=t;if(n._bucket==null)throw Ay();const s=new ut(n,n._bucket);return e!=null?_l(s,e):s}else return e!==void 0?pv(t,e):t}function yv(t,e){if(e&&gv(e)){if(t instanceof io)return mv(t,e);throw eo("To use ref(service, url), the first argument must be a Storage instance.")}else return _l(t,e)}function El(t,e){const n=e==null?void 0:e[rl];return n==null?null:fe.makeFromBucketSpec(n,t)}class io{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=sl,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=py,this._maxUploadRetryTime=gy,this._requests=new Set,r!=null?this._bucket=fe.makeFromBucketSpec(r,this._host):this._bucket=El(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=fe.makeFromBucketSpec(this._url,e):this._bucket=El(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){al("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){al("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ut(this,e)}_makeRequest(e,n,s,r){if(this._deleted)return new Cy(il());{const i=Vy(e,this._appId,s,r,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Tl="@firebase/storage",Il="0.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="storage";function Ov(t,e,n){return t=j(t),dv(t,e,n)}function Pv(t){return t=j(t),fv(t)}function Lv(t,e){return t=j(t),yv(t,e)}function Mv(t=nr(),e){return t=j(t),Ln(t,Sl).getImmediate({identifier:e})}function vv(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new io(n,s,r,e,ht)}function wv(){lt(new je(Sl,vv,"PUBLIC").setMultipleInstances(!0)),Ee(Tl,Il,""),Ee(Tl,Il,"esm2017")}wv();export{Qm as D,bv as L,Dv as T,kv as U,Av as V,Mv as a,Lv as b,Pv as c,Ev as d,Sv as g,Rv as h,_v as i,Tv as o,Ee as r,Iv as s,Ov as u,Cv as w,Nv as y};
