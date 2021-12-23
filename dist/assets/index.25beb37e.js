var ie=Object.defineProperty,ce=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var j=(t,a,r)=>a in t?ie(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,O=(t,a)=>{for(var r in a||(a={}))me.call(a,r)&&j(t,r,a[r]);if(H)for(var r of H(a))ue.call(a,r)&&j(t,r,a[r]);return t},G=(t,a)=>ce(t,de(a));var I=(t,a,r)=>(j(t,typeof a!="symbol"?a+"":a,r),r);import{j as P,O as M,i as fe,g as z,u as he,L as V,s as ge,a as L,b as U,c as B,d as q,e as W,f as w,F as J,h as K,k as D,r as Q,l as Z,m as X,y as Y,D as $,n as h,o as ee,p as _,q as be,t as xe,v as te,U as pe,V as T,w as ye,C as Ne,Q as ve,x as we,z as De,T as ae,A as Fe,B as Ce,R as Se,E as y,N as ne,G as ke,H as Ee}from"./vendor.17e806e3.js";const Ae=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))m(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&m(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function m(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}};Ae();const e=P.exports.jsx,n=P.exports.jsxs,b=P.exports.Fragment,Le=()=>e(b,{children:e(M,{})}),Ie={apiKey:"AIzaSyBoNeaI0CtrF_RmZcsJoW0G9JVuBCrchNo",authDomain:"despachospudahuel2.firebaseapp.com",projectId:"despachospudahuel2",storageBucket:"despachospudahuel2.appspot.com",messagingSenderId:"610968505969",appId:"1:610968505969:web:717cac64fdcf2189cf15d0"},x=fe(Ie),qe=z(x),$e=()=>{const a=he().pathname,r=()=>{ge(qe)};return n("div",{className:"md:flex md:min-h-screen",children:[n("div",{className:"md:w-1/4 bg-orange-900 px-5 py-10 flex flex-col justify-between",children:[n("div",{children:[e("h2",{className:"text-4xl font-extrabold text-center text-white",children:"Despachos - Pudahuel"}),n("nav",{className:"mt-10",children:[e(V,{to:"/despachos",className:`${a==="/despachos"?"text-orange-300":"text-white"}
                    text-2xl block mt-2 font-extrabold hover:text-orange-300 transition-colors`,children:"Despachos"}),e(V,{to:"/despachos/nuevo",className:`${a==="/despachos/nuevo"?"text-orange-300":"text-white"}
                    text-2xl block mt-2 font-extrabold hover:text-orange-300 transition-colors`,children:"Nuevo Despacho"})]})]}),e("button",{className:"text-1xl font-extrabold text-center text-white hover:text-orange-300 transition-colors",onClick:r,children:"Cerrar Sesi\xF3n"})]}),e("div",{className:"md:w-3/4 p-10 md:h-screen overflow-scroll",children:e(M,{})})]})},F=({children:t})=>e("div",{children:e("div",{className:"text-red-600 text-center font-bold",children:t})});const R=()=>n("div",{className:"sk-chase",children:[e("div",{className:"sk-chase-dot"}),e("div",{className:"sk-chase-dot"}),e("div",{className:"sk-chase-dot"}),e("div",{className:"sk-chase-dot"}),e("div",{className:"sk-chase-dot"}),e("div",{className:"sk-chase-dot"})]}),re=L(x),Re=U(x),je=({despacho:t,cargando:a})=>{var u,f,N,v,S,k,E,A,d;const r=B(),{id:m}=q(),o=W().shape({nombre:w().required("El nombre del cliente es Obligatorio"),direccion:w().required("La Direcci\xF3n es Obligatoria"),documento:w().required("El Numero del documento es Obligatorio"),notas:w().required("Debe Agregar una nota o intrucciones del Despacho")});let l,i;const p=async s=>{i=s.target.files[0]};console.log(i);const c=async s=>{try{if(i){const g=Q(Re,`archivos/${i.name}`);await Z(g,i),l=await X(g),s.archivo=l,await Y($(re,`despachos/${m}`),s)}await Y($(re,`despachos/${m}`),s)}catch(g){console.log(g)}r("/despachos")};return console.log(a),a?e(R,{}):n("div",{className:"bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto",children:[e("h1",{className:"text-gray-600 font-bold text-xl uppercase \r text-center",children:(t==null?void 0:t.nombre)?"Editar Despacho":"Registrar nuevo"}),e(J,{initialValues:{creado:+new Date,recibido:(u=t==null?void 0:t.recibido)!=null?u:!1,despachado:(f=t==null?void 0:t.despachado)!=null?f:!1,confirmado:(N=t==null?void 0:t.confirmado)!=null?N:!1,fecha_despachado:(v=t==null?void 0:t.fecha_despachado)!=null?v:"",fecha_confirmado:(S=t==null?void 0:t.fecha_confirmado)!=null?S:"",nombre:(k=t==null?void 0:t.nombre)!=null?k:"",direccion:(E=t==null?void 0:t.direccion)!=null?E:"",documento:(A=t==null?void 0:t.documento)!=null?A:"",notas:(d=t==null?void 0:t.notas)!=null?d:"",archivo:l!=null?l:""},enableReinitialize:!0,onSubmit:async(s,{resetForm:g})=>{await c(s),g()},validationSchema:o,children:({errors:s,touched:g})=>n(K,{className:"mt-10",children:[n("div",{className:"mb-4",children:[e("label",{className:"text-gray-800",htmlFor:"nombre",children:"Cliente:"}),e(D,{type:"text",id:"nombre",name:"nombre",className:"mt-2 block w-full p-3 bg-gray-100",placeholder:" Nombre del Cliente "}),s.nombre&&g.nombre?e(F,{children:s.nombre}):null]}),n("div",{className:"mb-4",children:[e("label",{className:"text-gray-800",htmlFor:"direccion",children:"Direcci\xF3n:"}),e(D,{type:"text",id:"direccion",name:"direccion",className:"mt-2 block w-full p-3 bg-gray-100",placeholder:" Direcci\xF3n de Envio"}),s.direccion&&g.direccion?e(F,{children:s.direccion}):null]}),n("div",{className:"mb-4",children:[e("label",{className:"text-gray-800",htmlFor:"documento",children:"Numero de Documento:"}),e(D,{type:"number",id:"documento",name:"documento",className:"mt-2 block w-full p-3 bg-gray-100",placeholder:" Boleta / Factura / Guia"}),s.documento&&g.documento?e(F,{children:s.documento}):null]}),n("div",{className:"mb-4",children:[e("label",{className:"text-gray-800  ",htmlFor:"notas",children:"Notas:"}),e(D,{as:"textarea",type:"text",id:"notas",name:"notas",className:"mt-2 block w-full h-40 p-3 bg-gray-100",placeholder:" Mensaje "}),s.notas&&g.notas?e(F,{children:s.notas}):null]}),e("div",{className:"mb-4",children:e("input",{type:"file",onChange:p,className:"block w-full text-sm text-gray-500\r file:mr-4 file:py-2 file:px-4\r file:rounded-full file:border-0\r file:text-sm file:font-semibold\r file:bg-violet-50 file:text-orange-700\r hover:file:bg-violet-100"})}),e("input",{type:"submit",value:(t==null?void 0:t.nombre)?"Editar":"Agregar Despacho",className:"mt-5 w-full bg-orange-800 p-3 text-white uppercase font-bold text-lg\r cursor-pointer hover:text-orange-300 transition-colors"})]})})]})},Oe=L(x),Pe=()=>{const[t,a]=h.exports.useState({}),[r,m]=h.exports.useState(!0),{id:o}=q();return h.exports.useEffect(()=>{m(!r),(async()=>{try{const i=$(Oe,`despachos/${o}`),c=(await ee(i)).data();a(c)}catch(i){console.log(i)}m(!1)})()},[]),n(b,{children:[e("h1",{className:"font-extrabold text-4xl flex justify-center text-orange-900",children:"Edici\xF3n de Despacho"}),(t==null?void 0:t.nombre)?e(je,{despacho:t,cargando:r}):e("p",{children:"Despacho ID no v\xE1lido"})]})};_.locale("es");const ze=L(x),Be=()=>{const[t,a]=h.exports.useState(),[r,m]=h.exports.useState(!0),{id:o}=q();return h.exports.useEffect(()=>{m(!r),(async()=>{try{const i=$(ze,`despachos/${o}`),c=(await ee(i)).data();a(c)}catch(i){console.log(i)}m(!1)})()},[]),e("div",{children:r?e(R,{}):e(b,{children:t?n(b,{children:[e("h1",{className:"font-black text-4xl mt-8 text-orange-900",children:t.nombre}),e("p",{className:"mt-3",children:"Detalles de la Orden "}),t.creado&&n("p",{className:"text-2xl mt-4 text-gray-600",children:[e("span",{className:"text-gray-800 uppercase font-bold",children:"Creado el: "}),`${_(t.creado).format("LL")} ${_(t.creado).format("LTS")}`]}),t.direccion&&n("p",{className:"text-2xl mt-4 text-gray-600",children:[e("span",{className:"text-gray-800 uppercase font-bold",children:"Direcci\xF3n: "}),t.direccion]}),t.documento&&n("p",{className:"text-2xl mt-4 text-gray-600",children:[e("span",{className:"text-gray-800 uppercase font-bold",children:"n\xB0 documento: "}),t.documento]}),t.notas&&n("p",{className:"text-2xl mt-4 text-gray-600",children:[e("span",{className:"text-gray-800 uppercase font-bold",children:"Nota: "}),t.notas]}),t.archivo&&e("p",{className:"text-1xl mt-8 text-gray-600",children:n("a",{href:t.archivo,className:"text-2xl text-orange-800",target:"_blank",children:[e(be,{icon:xe}),"Descargar Adjunto"]})})]}):e(R,{})})})},C=te.p`
    color: #bd4f23;
    font-weight: bold;
    font-size: 15px;
`,oe=te.button`

    font-size: 15px;
    font-weight: 900;
    border-radius: 5px;
    border: none;
    transition: background-color .3s ease;
`,_e=L(x),Te=()=>{const t=B(),[a,r]=h.exports.useState([]),[m,o]=h.exports.useState(!0);h.exports.useEffect(()=>{(async()=>{try{const u=pe(T(_e,"despachos")),f=await ye(u),N=[];f.forEach(v=>{N.push(O({id:v.id},v.data()))}),r(N),a&&o(!1)}catch(u){console.log(u)}})()},[]);const l=[{name:e(C,{children:"Creado"}),selector:c=>c.creado,sortable:!0,omit:!0,wrap:!0},{name:e(C,{children:"N\xB0 Doc"}),selector:c=>c.documento,cell:c=>e(oe,{onClick:()=>t(`/despachos/${c.id}`),children:c.documento}),sortable:!1,grow:0,wrap:!0},{name:e(C,{children:"Nombre del Cliente"}),selector:c=>c.nombre,sortable:!1,grow:.6,wrap:!0},{name:e(C,{children:"Direcci\xF3n"}),selector:c=>c.direccion,sortable:!1,grow:1,wrap:!0},{name:e(C,{children:"Detalles"}),selector:c=>c.notas,sortable:!1,grow:2,wrap:!0},{name:e(C,{children:"Acciones"}),cell:c=>e(oe,{onClick:()=>{t(`/despachos/editar/${c.id}`)},children:"Editar"}),sortable:!1,grow:0,wrap:!0}],i={rowsPerPageText:"Filas por pagina",rangeSeparatorText:" de ",selectAllRowsItem:!0,selectAllRowsItemText:"Todos"};class p extends Ne{constructor(){super(...arguments);I(this,"state",{busqueda:"",despachos:[]});I(this,"onChange",async u=>{u.persist(),await this.setState({busqueda:u.target.value}),this.filtrarElementos()});I(this,"filtrarElementos",()=>{var u=a.filter(f=>{if(f.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda)||f.direccion.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda)||f.documento.toString().includes(this.state.busqueda)||f.notas.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda))return f});this.setState({despachos:u})})}componentDidMount(){this.setState({despachos:a})}render(){return n(b,{children:[e(C,{children:"Filtrar resultados"}),e("input",{type:"text",placeholder:"Buscar",className:" mb-3 mt-3  pl-7 pr-12  ",name:"busqueda",value:this.state.busqueda,onChange:this.onChange}),e(ve,{expandibleRows:!0,columns:l,data:this.state.despachos,pagination:!0,paginationComponentOptions:i,fixedHeader:!0,fixedHeaderScrollHeight:"1000px",progressPending:m,noDataComponent:e("p",{children:"No se encontro ning\xFAn elemento"})})]})}}return n(b,{children:[e("h1",{className:"font-extrabold text-4xl flex justify-center text-orange-900",children:"Listado de despachos"}),e(p,{})]})},He=z(x),Ge=()=>{const[t,a]=h.exports.useState({email:"",password:""}),{email:r,password:m}=t,o=i=>{a(G(O({},t),{[i.target.name]:i.target.value}))};async function l(i){i.preventDefault();const p=De(He,r,m);console.log(p)}return e(b,{children:e("div",{className:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:n("div",{className:"max-w-md w-full space-y-8",children:[n("div",{children:[e("img",{className:"mx-auto h-auto w-auto",src:"https://homar.cl/wp-content/uploads/2020/09/logo-homar.png",alt:"Workflow"}),e("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Inicia Sesi\xF3n"})]}),n("form",{className:"mt-8 space-y-6",onSubmit:l,children:[n("div",{className:"rounded-md shadow-sm -space-y-px",children:[e("div",{children:e("input",{id:"email",name:"email",value:r,type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm",placeholder:"Email address",onChange:o})}),n("div",{children:[e("label",{htmlFor:"password",className:"sr-only",children:"Password"}),e("input",{id:"password",name:"password",type:"password",value:m,required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm",placeholder:"Password",onChange:o})]})]}),e("div",{children:n("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500",children:[e("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:e(we,{className:"h-5 w-5 text-orange-500 group-hover:text-orange-400","aria-hidden":"true"})}),"Sign in"]})})]})]})})})},le=L(x),Me=U(x),se=({despacho:t,cargando:a})=>{var c,u,f,N,v,S,k,E,A;const r=B();q();const m=W().shape({nombre:w().required("El nombre del cliente es Obligatorio"),direccion:w().required("La Direcci\xF3n es Obligatoria"),documento:w().required("El Numero del documento es Obligatorio"),notas:w().required("Debe Agregar una nota o intrucciones del Despacho")});let o,l;const i=async d=>{l=d.target.files[0]},p=async d=>{try{if(console.log(l),l){const s=Q(Me,`archivos/${l.name}`);await Z(s,l),o=await X(s),d.archivo=o,await ae(T(le,"despachos"),d)}else await ae(T(le,"despachos"),d);r("/despachos")}catch(s){console.log(s)}};return console.log(a),a?e(R,{}):n("div",{className:"bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto",children:[e("h1",{className:"text-gray-600 font-bold text-xl uppercase \r text-center",children:(t==null?void 0:t.nombre)?"Editar Despacho":"Registrar nuevo"}),e(J,{initialValues:{creado:+new Date,recibido:(c=t==null?void 0:t.recibido)!=null?c:!1,despachado:(u=t==null?void 0:t.despachado)!=null?u:!1,confirmado:(f=t==null?void 0:t.confirmado)!=null?f:!1,fecha_despachado:(N=t==null?void 0:t.fecha_despachado)!=null?N:"",fecha_confirmado:(v=t==null?void 0:t.fecha_confirmado)!=null?v:"",nombre:(S=t==null?void 0:t.nombre)!=null?S:"",direccion:(k=t==null?void 0:t.direccion)!=null?k:"",documento:(E=t==null?void 0:t.documento)!=null?E:"",notas:(A=t==null?void 0:t.notas)!=null?A:"",archivo:o!=null?o:""},enableReinitialize:!0,onSubmit:async(d,{resetForm:s})=>{await p(d),s()},validationSchema:m,children:({errors:d,touched:s})=>n(K,{className:"mt-10",children:[n("div",{className:"mb-4",children:[e("label",{className:"text-gray-800",htmlFor:"nombre",children:"Cliente:"}),e(D,{type:"text",id:"nombre",name:"nombre",className:"mt-2 block w-full p-3 bg-gray-100",placeholder:" Nombre del Cliente "}),d.nombre&&s.nombre?e(F,{children:d.nombre}):null]}),n("div",{className:"mb-4",children:[e("label",{className:"text-gray-800",htmlFor:"direccion",children:"Direcci\xF3n:"}),e(D,{type:"text",id:"direccion",name:"direccion",className:"mt-2 block w-full p-3 bg-gray-100",placeholder:" Direcci\xF3n de Envio"}),d.direccion&&s.direccion?e(F,{children:d.direccion}):null]}),n("div",{className:"mb-4",children:[e("label",{className:"text-gray-800",htmlFor:"documento",children:"Numero de Documento:"}),e(D,{type:"number",id:"documento",name:"documento",className:"mt-2 block w-full p-3 bg-gray-100",placeholder:" Boleta / Factura / Guia"}),d.documento&&s.documento?e(F,{children:d.documento}):null]}),n("div",{className:"mb-4",children:[e("label",{className:"text-gray-800  ",htmlFor:"notas",children:"Notas:"}),e(D,{as:"textarea",type:"text",id:"notas",name:"notas",className:"mt-2 block w-full h-40 p-3 bg-gray-100",placeholder:" Mensaje "}),d.notas&&s.notas?e(F,{children:d.notas}):null]}),e("div",{className:"mb-4",children:e("input",{type:"file",onChange:i,className:"block w-full text-sm text-gray-500\r file:mr-4 file:py-2 file:px-4\r file:rounded-full file:border-0\r file:text-sm file:font-semibold\r file:bg-violet-50 file:text-orange-700\r hover:file:bg-violet-100"})}),e("input",{type:"submit",value:(t==null?void 0:t.nombre)?"Editar":"Agregar Despacho",className:"mt-5 w-full bg-orange-800 p-3 text-white uppercase font-bold text-lg\r cursor-pointer hover:text-orange-300 transition-colors"})]})})]})};se.defaultProps={despacho:{},cargando:!1};const Ve=()=>n(b,{children:[e("h1",{className:"font-extrabold text-4xl flex justify-center text-orange-900",children:"Nuevo Despacho"}),e(se,{})]}),Ue=z(x);function We(){const[t,a]=h.exports.useState(!0);return h.exports.useEffect(()=>{Fe(Ue,r=>{a(!r)})},[]),e(b,{children:e(Ce,{children:e(Se,{children:t?n(b,{children:[e(y,{path:"/",element:e(Le,{}),children:e(y,{index:!0,element:e(Ge,{})})}),e(y,{path:"/*",element:e(ne,{replace:!0,to:"/"})})]}):n(b,{children:[e(y,{path:"/",element:e(ne,{replace:!0,to:"/despachos"})}),n(y,{path:"/despachos",element:e($e,{}),children:[e(y,{index:!0,element:e(Te,{})}),e(y,{path:"nuevo",element:e(Ve,{})}),e(y,{path:"editar/:id",element:e(Pe,{})}),e(y,{path:":id",element:e(Be,{})})]})]})})})})}ke.render(e(Ee.StrictMode,{children:e(We,{})}),document.getElementById("root"));
