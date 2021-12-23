import{r as o,R as x}from"./react.d3c4e055.js";import{C as H,s as u,F as Xt}from"./styled-components.59020a3c.js";var K;function re(e,t){return e[t]}function Ae(e,t){return t.split(".").reduce((n,a)=>{const r=a.match(/[^\]\\[.]+/g);if(r&&r.length>1)for(let i=0;i<r.length;i++)return n[r[i]][r[i+1]];return n[a]},e)}function Zt(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function qt(e=[],t,n="id"){const a=e.slice(),r=re(t,n);return r?a.splice(a.findIndex(i=>re(i,n)===r),1):a.splice(a.findIndex(i=>i===t),1),a}function rt(e){return e.map((t,n)=>{const a=Object.assign(Object.assign({},t),{sortable:t.sortable||!!t.sortFunction||void 0});return t.id||(a.id=n+1),a})}function be(e,t){return Math.ceil(e/t)}function Le(e,t){return Math.min(e,t)}(function(e){e.ASC="asc",e.DESC="desc"})(K||(K={}));const T=()=>null;function lt(e,t=[],n=[]){let a={},r=[...n];return t.length&&t.forEach(i=>{if(!i.when||typeof i.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');i.when(e)&&(a=i.style||{},i.classNames&&(r=[...r,...i.classNames]),typeof i.style=="function"&&(a=i.style(e)||{}))}),{style:a,classNames:r.join(" ")}}function ye(e,t=[],n="id"){const a=re(e,n);return a?t.some(r=>re(r,n)===a):t.some(r=>r===e)}function Re(e,t){return t?e.findIndex(n=>xe(n.id,t)):-1}function xe(e,t){return e==t}function en(e,t){const n=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:a,rows:r,rowCount:i,mergeSelections:s}=t,c=!e.allSelected,b=!e.toggleOnSelectedRowsChange;if(s){const y=c?[...e.selectedRows,...r.filter(p=>!ye(p,e.selectedRows,a))]:e.selectedRows.filter(p=>!ye(p,r,a));return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:y.length,selectedRows:y,toggleOnSelectedRowsChange:b})}return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:c?i:0,selectedRows:c?r:[],toggleOnSelectedRowsChange:b})}case"SELECT_SINGLE_ROW":{const{keyField:a,row:r,isSelected:i,rowCount:s,singleSelect:c}=t;return c?i?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[r],toggleOnSelectedRowsChange:n}):i?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:qt(e.selectedRows,r,a),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===s,selectedRows:Zt(e.selectedRows,r),toggleOnSelectedRowsChange:n})}case"SELECT_MULTIPLE_ROWS":{const{keyField:a,selectedRows:r,totalRows:i,mergeSelections:s}=t;if(s){const c=[...e.selectedRows,...r.filter(b=>!ye(b,e.selectedRows,a))];return Object.assign(Object.assign({},e),{selectedCount:c.length,allSelected:!1,selectedRows:c,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:r.length,allSelected:r.length===i,selectedRows:r,toggleOnSelectedRowsChange:n})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:a}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:a})}case"SORT_CHANGE":{const{sortDirection:a,selectedColumn:r,clearSelectedOnSort:i}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:r,sortDirection:a,currentPage:1}),i&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:a,paginationServer:r,visibleOnly:i,persistSelectedOnPageChange:s}=t,c=r&&s,b=r&&!s||i;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:a}),c&&{allSelected:!1}),b&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:a,page:r}=t;return Object.assign(Object.assign({},e),{currentPage:r,rowsPerPage:a})}}}const tn=H`
	pointer-events: none;
	opacity: 0.4;
`,nn=u.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&tn};
	${({theme:e})=>e.table.style};
`,on=H`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,an=u.div`
	display: flex;
	width: 100%;
	${({fixedHeader:e})=>e&&on};
	${({theme:e})=>e.head.style};
`,rn=u.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,it=(e,...t)=>H`
		@media screen and (max-width: ${599}px) {
			${H(e,...t)}
		}
	`,ln=(e,...t)=>H`
		@media screen and (max-width: ${959}px) {
			${H(e,...t)}
		}
	`,sn=(e,...t)=>H`
		@media screen and (max-width: ${1280}px) {
			${H(e,...t)}
		}
	`,dn=e=>(t,...n)=>H`
				@media screen and (max-width: ${e}px) {
					${H(t,...n)}
				}
			`,le=u.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,headCell:t})=>e[t?"headCells":"cells"].style};
	${({noPadding:e})=>e&&"padding: 0"};
`,st=u(le)`
	flex-grow: ${({button:e,grow:t})=>t===0||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&H`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&e==="sm"&&it`
    display: none;
  `};
	${({hide:e})=>e&&e==="md"&&ln`
    display: none;
  `};
	${({hide:e})=>e&&e==="lg"&&sn`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&dn(e)`
    display: none;
  `};
`,cn=H`
	div:first-child {
		white-space: ${({wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,gn=u(st).attrs(e=>({style:e.style}))`
	${({renderAsCell:e})=>!e&&cn};
	${({theme:e,isDragging:t})=>t&&e.cells.draggingStyle};
	${({cellStyle:e})=>e};
`;var pn=o.exports.memo(function({id:e,column:t,row:n,rowIndex:a,dataTag:r,isDragging:i,onDragStart:s,onDragOver:c,onDragEnd:b,onDragEnter:y,onDragLeave:p}){const{style:m,classNames:$}=lt(n,t.conditionalCellStyles,["rdt_TableCell"]);return o.exports.createElement(gn,{id:e,"data-column-id":t.id,role:"gridcell",className:$,"data-tag":r,cellStyle:t.style,renderAsCell:!!t.cell,allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,wrapCell:t.wrap,style:m,isDragging:i,onDragStart:s,onDragOver:c,onDragEnd:b,onDragEnter:y,onDragLeave:p},!t.cell&&o.exports.createElement("div",{"data-tag":r},function(R,w,k,f){if(!w)return null;if(typeof w!="string"&&typeof w!="function")throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return k&&typeof k=="function"?k(R,f):w&&typeof w=="function"?w(R,f):Ae(R,w)}(n,t.selector,t.format,a)),t.cell&&t.cell(n,a,t,e))}),dt=o.exports.memo(function({name:e,component:t="input",componentOptions:n={style:{}},indeterminate:a=!1,checked:r=!1,disabled:i=!1,onClick:s=T}){const c=t,b=c!=="input"?n.style:(p=>Object.assign(Object.assign({fontSize:"18px"},!p&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(i),y=o.exports.useMemo(()=>function(p,...m){let $;return Object.keys(p).map(R=>p[R]).forEach((R,w)=>{typeof R=="function"&&($=Object.assign(Object.assign({},p),{[Object.keys(p)[w]]:R(...m)}))}),$||p}(n,a),[n,a]);return o.exports.createElement(c,Object.assign({type:"checkbox",ref:p=>{p&&(p.indeterminate=a)},style:b,onClick:i?T:s,name:e,"aria-label":e,checked:r,disabled:i},y,{onChange:T}))});const un=u(le)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function bn({name:e,keyField:t,row:n,rowCount:a,selected:r,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowsSingle:c,selectableRowDisabled:b,onSelectedRow:y}){const p=!(!b||!b(n));return o.exports.createElement(un,{onClick:m=>m.stopPropagation(),className:"rdt_TableCell",noPadding:!0},o.exports.createElement(dt,{name:e,component:i,componentOptions:s,checked:r,"aria-checked":r,onClick:()=>{y({type:"SELECT_SINGLE_ROW",row:n,isSelected:r,keyField:t,rowCount:a,singleSelect:c})},disabled:p}))}const xn=u.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function mn({disabled:e=!1,expanded:t=!1,expandableIcon:n,id:a,row:r,onToggled:i}){const s=t?n.expanded:n.collapsed;return o.exports.createElement(xn,{"aria-disabled":e,onClick:()=>i&&i(r),"data-testid":`expander-button-${a}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const hn=u(le)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function wn({row:e,expanded:t=!1,expandableIcon:n,id:a,onToggled:r,disabled:i=!1}){return o.exports.createElement(hn,{onClick:s=>s.stopPropagation(),noPadding:!0},o.exports.createElement(mn,{id:a,row:e,expanded:t,expandableIcon:n,disabled:i,onToggled:r}))}const fn=u.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({extendedRowStyle:e})=>e};
`;var Cn=o.exports.memo(function({data:e,ExpanderComponent:t,expanderComponentProps:n,extendedRowStyle:a,extendedClassNames:r}){const i=["rdt_ExpanderRow",...r.split(" ").filter(s=>s!=="rdt_TableRow")].join(" ");return o.exports.createElement(fn,{className:i,extendedRowStyle:a},o.exports.createElement(t,Object.assign({data:e},n)))}),ve,_e,ct;(function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"})(ve||(ve={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(_e||(_e={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(ct||(ct={}));const yn=H`
	&:hover {
		${({highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,Rn=H`
	&:hover {
		cursor: pointer;
	}
`,vn=u.div.attrs(e=>({style:e.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({highlightOnHover:e})=>e&&yn};
	${({pointerOnHover:e})=>e&&Rn};
	${({selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
`;function Sn({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:n=!1,defaultExpanderDisabled:a=!1,dense:r=!1,expandableIcon:i,expandableRows:s=!1,expandableRowsComponent:c,expandableRowsComponentProps:b,expandableRowsHideExpander:y,expandOnRowClicked:p=!1,expandOnRowDoubleClicked:m=!1,highlightOnHover:$=!1,id:R,expandableInheritConditionalStyles:w,keyField:k,onRowClicked:f=T,onRowDoubleClicked:O=T,onRowExpandToggled:D=T,onSelectedRow:S=T,pointerOnHover:P=!1,row:C,rowCount:A,rowIndex:N,selectableRowDisabled:v=null,selectableRows:X=!1,selectableRowsComponent:L,selectableRowsComponentProps:W,selectableRowsHighlight:U=!1,selectableRowsSingle:E=!1,selected:Z,striped:se=!1,draggingColumnId:de,onDragStart:ne,onDragOver:Ee,onDragEnd:Oe,onDragEnter:Pe,onDragLeave:ke}){const[_,ce]=o.exports.useState(n);o.exports.useEffect(()=>{ce(n)},[n]);const V=o.exports.useCallback(()=>{ce(!_),D(!_,C)},[_,D,C]),De=P||s&&(p||m),He=o.exports.useCallback(F=>{F.target&&F.target.getAttribute("data-tag")==="allowRowEvents"&&(f(C,F),!a&&s&&p&&V())},[a,p,s,V,f,C]),$e=o.exports.useCallback(F=>{F.target&&F.target.getAttribute("data-tag")==="allowRowEvents"&&(O(C,F),!a&&s&&m&&V())},[a,m,s,V,O,C]),q=re(C,k),{style:ge,classNames:he}=lt(C,t,["rdt_TableRow"]),Y=U&&Z,Fe=w?ge:{},je=se&&N%2==0;return o.exports.createElement(o.exports.Fragment,null,o.exports.createElement(vn,{id:`row-${R}`,role:"row",striped:je,highlightOnHover:$,pointerOnHover:!a&&De,dense:r,onClick:He,onDoubleClick:$e,className:he,selected:Y,style:ge},X&&o.exports.createElement(bn,{name:`select-row-${q}`,keyField:k,row:C,rowCount:A,selected:Z,selectableRowsComponent:L,selectableRowsComponentProps:W,selectableRowDisabled:v,selectableRowsSingle:E,onSelectedRow:S}),s&&!y&&o.exports.createElement(wn,{id:q,expandableIcon:i,expanded:_,row:C,onToggled:V,disabled:a}),e.map(F=>F.omit?null:o.exports.createElement(pn,{id:`cell-${F.id}-${q}`,key:`cell-${F.id}-${q}`,dataTag:F.ignoreRowClick||F.button?null:"allowRowEvents",column:F,row:C,rowIndex:N,isDragging:xe(de,F.id),onDragStart:ne,onDragOver:Ee,onDragEnd:Oe,onDragEnter:Pe,onDragLeave:ke}))),s&&_&&o.exports.createElement(Cn,{key:`expander-${q}`,data:C,extendedRowStyle:Fe,extendedClassNames:he,ExpanderComponent:c,expanderComponentProps:b}))}const En=u.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({sortDirection:e})=>e==="desc"&&"transform: rotate(180deg)"};
`,On=({sortActive:e,sortDirection:t})=>x.createElement(En,{sortActive:e,sortDirection:t},"\u25B2"),Pn=u(st)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,isDragging:t})=>t&&e.headCells.draggingStyle};
`,kn=H`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({sortActive:e})=>!e&&H`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,Dn=u.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&kn};
`,Hn=u.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var $n=o.exports.memo(function({column:e,disabled:t,draggingColumnId:n,selectedColumn:a={},sortDirection:r,sortIcon:i,sortServer:s,pagination:c,paginationServer:b,persistSelectedOnSort:y,selectableRowsVisibleOnly:p,onSort:m,onDragStart:$,onDragOver:R,onDragEnd:w,onDragEnter:k,onDragLeave:f}){o.exports.useEffect(()=>{typeof e.selector=="string"&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[O,D]=o.exports.useState(!1),S=o.exports.useRef(null);if(o.exports.useEffect(()=>{S.current&&D(S.current.scrollWidth>S.current.clientWidth)},[O]),e.omit)return null;const P=()=>{if(!e.sortable&&!e.selector)return;let E=r;xe(a.id,e.id)&&(E=r===K.ASC?K.DESC:K.ASC),m({type:"SORT_CHANGE",sortDirection:E,selectedColumn:e,clearSelectedOnSort:c&&b&&!y||s||p})},C=E=>o.exports.createElement(On,{sortActive:E,sortDirection:r}),A=()=>o.exports.createElement("span",{className:[r,"__rdt_custom_sort_icon__"].join(" ")},i),N=!(!e.sortable||!xe(a.id,e.id)),v=!e.sortable||t,X=e.sortable&&!i&&!e.right,L=e.sortable&&!i&&e.right,W=e.sortable&&i&&!e.right,U=e.sortable&&i&&e.right;return o.exports.createElement(Pn,{"data-column-id":e.id,className:"rdt_TableCol",headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,isDragging:xe(e.id,n),onDragStart:$,onDragOver:R,onDragEnd:w,onDragEnter:k,onDragLeave:f},e.name&&o.exports.createElement(Dn,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:v?void 0:P,onKeyPress:v?void 0:E=>{E.key==="Enter"&&P()},sortActive:!v&&N,disabled:v},!v&&U&&A(),!v&&L&&C(N),typeof e.name=="string"?o.exports.createElement(Hn,{title:O?e.name:void 0,ref:S,"data-column-id":e.id},e.name):e.name,!v&&W&&A(),!v&&X&&C(N)))});const Fn=u(le)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function jn({headCell:e=!0,rowData:t,keyField:n,allSelected:a,mergeSelections:r,selectedRows:i,selectableRowsComponent:s,selectableRowsComponentProps:c,selectableRowDisabled:b,onSelectAllRows:y}){const p=i.length>0&&!a,m=b?t.filter(w=>!b(w)):t,$=m.length===0,R=Math.min(t.length,m.length);return o.exports.createElement(Fn,{className:"rdt_TableCol",headCell:e,noPadding:!0},o.exports.createElement(dt,{name:"select-all-rows",component:s,componentOptions:c,onClick:()=>{y({type:"SELECT_ALL_ROWS",rows:m,rowCount:R,mergeSelections:r,keyField:n})},checked:a,indeterminate:p,disabled:$}))}function gt(e=ve.AUTO){const t=typeof window=="object",[n,a]=o.exports.useState(!1);return o.exports.useEffect(()=>{if(t)if(e!=="auto")a(e==="rtl");else{const r=!(!window.document||!window.document.createElement),i=document.getElementsByTagName("BODY")[0],s=document.getElementsByTagName("HTML")[0],c=i.dir==="rtl"||s.dir==="rtl";a(r&&c)}},[e,t]),n}const In=u.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,Tn=u.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,pt=u.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({rtl:e})=>e&&"direction: rtl"};
	${({theme:e})=>e.contextMenu.style};
	${({theme:e,visible:t})=>t&&e.contextMenu.activeStyle};
`;function An({contextMessage:e,contextActions:t,contextComponent:n,selectedCount:a,direction:r}){const i=gt(r),s=a>0;return n?o.exports.createElement(pt,{visible:s},o.exports.cloneElement(n,{selectedCount:a})):o.exports.createElement(pt,{visible:s,rtl:i},o.exports.createElement(In,null,((c,b,y)=>{if(b===0)return null;const p=b===1?c.singular:c.plural;return y?`${b} ${c.message||""} ${p}`:`${b} ${p} ${c.message||""}`})(e,a,i)),o.exports.createElement(Tn,null,t))}const Ln=u.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:e})=>e.header.style}
`,_n=u.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,Mn=u.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,zn=({title:e,actions:t=null,contextMessage:n,contextActions:a,contextComponent:r,selectedCount:i,direction:s,showMenu:c=!0})=>o.exports.createElement(Ln,{className:"rdt_TableHeader",role:"heading","aria-level":1},o.exports.createElement(_n,null,e),t&&o.exports.createElement(Mn,null,t),c&&o.exports.createElement(An,{contextMessage:n,contextActions:a,contextComponent:r,direction:s,selectedCount:i}));function ut(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}const Nn={left:"flex-start",right:"flex-end",center:"center"},Wn=u.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>Nn[e]};
	flex-wrap: ${({wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,Bn=e=>{var{align:t="right",wrapContent:n=!0}=e,a=ut(e,["align","wrapContent"]);return o.exports.createElement(Wn,Object.assign({align:t,wrapContent:n},a))},Gn=u.div`
	display: flex;
	flex-direction: column;
`,Vn=u.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({responsive:e,fixedHeader:t})=>e&&H`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({fixedHeader:e=!1,fixedHeaderScrollHeight:t="100vh"})=>e&&H`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};
`,bt=u.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,Un=u.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,Yn=u(le)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,Qn=u.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,Jn=()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},x.createElement("path",{d:"M7 10l5 5 5-5z"}),x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),Kn=u.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,Xn=u.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,Zn=e=>{var{defaultValue:t,onChange:n}=e,a=ut(e,["defaultValue","onChange"]);return o.exports.createElement(Xn,null,o.exports.createElement(Kn,Object.assign({onChange:n,defaultValue:t},a)),o.exports.createElement(Jn,null))},l={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return x.createElement("div",null,"To add an expander pass in a component instance via ",x.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:x.createElement(()=>x.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},x.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),x.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:x.createElement(()=>x.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},x.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),x.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:x.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:x.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:_e.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:x.createElement(()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},x.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),x.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:x.createElement(()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},x.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),x.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:x.createElement(()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},x.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:x.createElement(()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},x.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:ve.AUTO,onChangePage:T,onChangeRowsPerPage:T,onRowClicked:T,onRowDoubleClicked:T,onRowExpandToggled:T,onSelectedRowsChange:T,onSort:T,onColumnOrderChange:T},qn={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},eo=u.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,Se=u.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,to=u.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${it`
    width: 100%;
    justify-content: space-around;
  `};
`,xt=u.span`
	flex-shrink: 1;
	user-select: none;
`,no=u(xt)`
	margin: 0 24px;
`,oo=u(xt)`
	margin: 0 4px;
`;var ao=o.exports.memo(function({rowsPerPage:e,rowCount:t,currentPage:n,direction:a=l.direction,paginationRowsPerPageOptions:r=l.paginationRowsPerPageOptions,paginationIconLastPage:i=l.paginationIconLastPage,paginationIconFirstPage:s=l.paginationIconFirstPage,paginationIconNext:c=l.paginationIconNext,paginationIconPrevious:b=l.paginationIconPrevious,paginationComponentOptions:y=l.paginationComponentOptions,onChangeRowsPerPage:p=l.onChangeRowsPerPage,onChangePage:m=l.onChangePage}){const $=(()=>{const E=typeof window=="object";function Z(){return{width:E?window.innerWidth:void 0,height:E?window.innerHeight:void 0}}const[se,de]=o.exports.useState(Z);return o.exports.useEffect(()=>{if(!E)return()=>null;function ne(){de(Z())}return window.addEventListener("resize",ne),()=>window.removeEventListener("resize",ne)},[]),se})(),R=gt(a),w=$.width&&$.width>599,k=be(t,e),f=n*e,O=f-e+1,D=n===1,S=n===k,P=Object.assign(Object.assign({},qn),y),C=n===k?`${O}-${t} ${P.rangeSeparatorText} ${t}`:`${O}-${f} ${P.rangeSeparatorText} ${t}`,A=o.exports.useCallback(()=>m(n-1),[n,m]),N=o.exports.useCallback(()=>m(n+1),[n,m]),v=o.exports.useCallback(()=>m(1),[m]),X=o.exports.useCallback(()=>m(be(t,e)),[m,t,e]),L=o.exports.useCallback(E=>p(Number(E.target.value),n),[n,p]),W=r.map(E=>o.exports.createElement("option",{key:E,value:E},E));P.selectAllRowsItem&&W.push(o.exports.createElement("option",{key:-1,value:t},P.selectAllRowsItemText));const U=o.exports.createElement(Zn,{onChange:L,defaultValue:e,"aria-label":P.rowsPerPageText},W);return o.exports.createElement(eo,{className:"rdt_Pagination"},!P.noRowsPerPage&&w&&o.exports.createElement(o.exports.Fragment,null,o.exports.createElement(oo,null,P.rowsPerPageText),U),w&&o.exports.createElement(no,null,C),o.exports.createElement(to,null,o.exports.createElement(Se,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":D,onClick:v,disabled:D,isRTL:R},s),o.exports.createElement(Se,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":D,onClick:A,disabled:D,isRTL:R},b),!w&&U,o.exports.createElement(Se,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":S,onClick:N,disabled:S,isRTL:R},c),o.exports.createElement(Se,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":S,onClick:X,disabled:S,isRTL:R},i)))});const te=(e,t)=>{const n=o.exports.useRef(!0);o.exports.useEffect(()=>{n.current?n.current=!1:e()},t)};var ro=function(e){return function(t){return!!t&&typeof t=="object"}(e)&&!function(t){var n=Object.prototype.toString.call(t);return n==="[object RegExp]"||n==="[object Date]"||function(a){return a.$$typeof===lo}(t)}(e)},lo=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function me(e,t){return t.clone!==!1&&t.isMergeableObject(e)?ie((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function io(e,t,n){return e.concat(t).map(function(a){return me(a,n)})}function mt(e){return Object.keys(e).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(n){return t.propertyIsEnumerable(n)}):[]}(e))}function ht(e,t){try{return t in e}catch{return!1}}function so(e,t,n){var a={};return n.isMergeableObject(e)&&mt(e).forEach(function(r){a[r]=me(e[r],n)}),mt(t).forEach(function(r){(function(i,s){return ht(i,s)&&!(Object.hasOwnProperty.call(i,s)&&Object.propertyIsEnumerable.call(i,s))})(e,r)||(ht(e,r)&&n.isMergeableObject(t[r])?a[r]=function(i,s){if(!s.customMerge)return ie;var c=s.customMerge(i);return typeof c=="function"?c:ie}(r,n)(e[r],t[r],n):a[r]=me(t[r],n))}),a}function ie(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||io,n.isMergeableObject=n.isMergeableObject||ro,n.cloneUnlessOtherwiseSpecified=me;var a=Array.isArray(t);return a===Array.isArray(e)?a?n.arrayMerge(e,t,n):so(e,t,n):me(t,n)}ie.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(n,a){return ie(n,a,t)},{})};var co=ie;const wt={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},ft={default:wt,light:wt,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function go(e,t,n,a){const[r,i]=o.exports.useState(()=>rt(e)),[s,c]=o.exports.useState(""),b=o.exports.useRef("");te(()=>{i(rt(e))},[e]);const y=o.exports.useCallback(f=>{var O,D,S;const{attributes:P}=f.target,C=(O=P.getNamedItem("data-column-id"))===null||O===void 0?void 0:O.value;C&&(b.current=((S=(D=r[Re(r,C)])===null||D===void 0?void 0:D.id)===null||S===void 0?void 0:S.toString())||"",c(b.current))},[r]),p=o.exports.useCallback(f=>{var O;const{attributes:D}=f.target,S=(O=D.getNamedItem("data-column-id"))===null||O===void 0?void 0:O.value;if(S&&b.current&&S!==b.current){const P=Re(r,b.current),C=Re(r,S),A=[...r];A[P]=r[C],A[C]=r[P],i(A),t(A)}},[t,r]),m=o.exports.useCallback(f=>{f.preventDefault()},[]),$=o.exports.useCallback(f=>{f.preventDefault()},[]),R=o.exports.useCallback(f=>{f.preventDefault(),b.current="",c("")},[]),w=function(f=!1){return f?K.ASC:K.DESC}(a),k=o.exports.useMemo(()=>r[Re(r,n==null?void 0:n.toString())]||{},[n,r]);return{tableColumns:r,draggingColumnId:s,handleDragStart:y,handleDragEnter:p,handleDragOver:m,handleDragLeave:$,handleDragEnd:R,defaultSortDirection:w,defaultSortColumn:k}}var bo=o.exports.memo(function(e){const{data:t=l.data,columns:n=l.columns,title:a=l.title,actions:r=l.actions,keyField:i=l.keyField,striped:s=l.striped,highlightOnHover:c=l.highlightOnHover,pointerOnHover:b=l.pointerOnHover,dense:y=l.dense,selectableRows:p=l.selectableRows,selectableRowsSingle:m=l.selectableRowsSingle,selectableRowsHighlight:$=l.selectableRowsHighlight,selectableRowsNoSelectAll:R=l.selectableRowsNoSelectAll,selectableRowsVisibleOnly:w=l.selectableRowsVisibleOnly,selectableRowSelected:k=l.selectableRowSelected,selectableRowDisabled:f=l.selectableRowDisabled,selectableRowsComponent:O=l.selectableRowsComponent,selectableRowsComponentProps:D=l.selectableRowsComponentProps,onRowExpandToggled:S=l.onRowExpandToggled,onSelectedRowsChange:P=l.onSelectedRowsChange,expandableIcon:C=l.expandableIcon,onChangeRowsPerPage:A=l.onChangeRowsPerPage,onChangePage:N=l.onChangePage,paginationServer:v=l.paginationServer,paginationServerOptions:X=l.paginationServerOptions,paginationTotalRows:L=l.paginationTotalRows,paginationDefaultPage:W=l.paginationDefaultPage,paginationResetDefaultPage:U=l.paginationResetDefaultPage,paginationPerPage:E=l.paginationPerPage,paginationRowsPerPageOptions:Z=l.paginationRowsPerPageOptions,paginationIconLastPage:se=l.paginationIconLastPage,paginationIconFirstPage:de=l.paginationIconFirstPage,paginationIconNext:ne=l.paginationIconNext,paginationIconPrevious:Ee=l.paginationIconPrevious,paginationComponent:Oe=l.paginationComponent,paginationComponentOptions:Pe=l.paginationComponentOptions,responsive:ke=l.responsive,progressPending:_=l.progressPending,progressComponent:ce=l.progressComponent,persistTableHead:V=l.persistTableHead,noDataComponent:De=l.noDataComponent,disabled:He=l.disabled,noTableHead:$e=l.noTableHead,noHeader:q=l.noHeader,fixedHeader:ge=l.fixedHeader,fixedHeaderScrollHeight:he=l.fixedHeaderScrollHeight,pagination:Y=l.pagination,subHeader:Fe=l.subHeader,subHeaderAlign:je=l.subHeaderAlign,subHeaderWrap:F=l.subHeaderWrap,subHeaderComponent:Ct=l.subHeaderComponent,noContextMenu:yt=l.noContextMenu,contextMessage:Rt=l.contextMessage,contextActions:vt=l.contextActions,contextComponent:St=l.contextComponent,expandableRows:we=l.expandableRows,onRowClicked:Me=l.onRowClicked,onRowDoubleClicked:ze=l.onRowDoubleClicked,sortIcon:Et=l.sortIcon,onSort:Ot=l.onSort,sortFunction:Ne=l.sortFunction,sortServer:Ie=l.sortServer,expandableRowsComponent:Pt=l.expandableRowsComponent,expandableRowsComponentProps:kt=l.expandableRowsComponentProps,expandableRowDisabled:We=l.expandableRowDisabled,expandableRowsHideExpander:Be=l.expandableRowsHideExpander,expandOnRowClicked:Dt=l.expandOnRowClicked,expandOnRowDoubleClicked:Ht=l.expandOnRowDoubleClicked,expandableRowExpanded:Ge=l.expandableRowExpanded,expandableInheritConditionalStyles:$t=l.expandableInheritConditionalStyles,defaultSortFieldId:Ft=l.defaultSortFieldId,defaultSortAsc:jt=l.defaultSortAsc,clearSelectedRows:Ve=l.clearSelectedRows,conditionalRowStyles:It=l.conditionalRowStyles,theme:Ue=l.theme,customStyles:Ye=l.customStyles,direction:pe=l.direction,onColumnOrderChange:Tt=l.onColumnOrderChange}=e,{tableColumns:Qe,draggingColumnId:Je,handleDragStart:Ke,handleDragEnter:Xe,handleDragOver:Ze,handleDragLeave:qe,handleDragEnd:et,defaultSortDirection:At,defaultSortColumn:Lt}=go(n,Tt,Ft,jt),[{rowsPerPage:Q,currentPage:M,selectedRows:Te,allSelected:tt,selectedCount:nt,selectedColumn:B,sortDirection:oe,toggleOnSelectedRowsChange:_t},ee]=o.exports.useReducer(en,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:Lt,toggleOnSelectedRowsChange:!1,sortDirection:At,currentPage:W,rowsPerPage:E,selectedRowsFlag:!1,contextMessage:l.contextMessage}),{persistSelectedOnSort:ot=!1,persistSelectedOnPageChange:fe=!1}=X,at=!(!v||!fe&&!ot),Mt=Y&&!_&&t.length>0,zt=Oe||ao,Nt=o.exports.useMemo(()=>((g={},h="default",I="default")=>{const z=ft[h]?h:I;return co({table:{style:{color:(d=ft[z]).text.primary,backgroundColor:d.background.default}},tableWrapper:{style:{display:"table"}},header:{style:{fontSize:"22px",color:d.text.primary,backgroundColor:d.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:d.background.default,minHeight:"52px"}},head:{style:{color:d.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:d.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:d.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:d.context.background,fontSize:"18px",fontWeight:400,color:d.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:d.text.primary,backgroundColor:d.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:d.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:d.selected.text,backgroundColor:d.selected.default,borderBottomColor:d.background.default}},highlightOnHoverStyle:{color:d.highlightOnHover.text,backgroundColor:d.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:d.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:d.background.default},stripedStyle:{color:d.striped.text,backgroundColor:d.striped.default}},expanderRow:{style:{color:d.text.primary,backgroundColor:d.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:d.button.default,fill:d.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:d.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:d.button.hover},"&:focus":{outline:"none",backgroundColor:d.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:d.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:d.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:d.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:d.button.default,fill:d.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:d.button.disabled,fill:d.button.disabled},"&:hover:not(:disabled)":{backgroundColor:d.button.hover},"&:focus":{outline:"none",backgroundColor:d.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:d.text.primary,backgroundColor:d.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:d.text.primary,backgroundColor:d.background.default}}},g);var d})(Ye,Ue),[Ye,Ue]),Wt=o.exports.useMemo(()=>Object.assign({},pe!=="auto"&&{dir:pe}),[pe]),j=o.exports.useMemo(()=>{if(Ie)return t;if((B==null?void 0:B.sortFunction)&&typeof B.sortFunction=="function"){const g=B.sortFunction,h=oe===K.ASC?g:(I,z)=>-1*g(I,z);return[...t].sort(h)}return function(g,h,I,z){return h?z&&typeof z=="function"?z(g.slice(0),h,I):g.slice(0).sort((d,Ce)=>{let J,G;if(typeof h=="string"?(J=Ae(d,h),G=Ae(Ce,h)):(J=h(d),G=h(Ce)),I==="asc"){if(J<G)return-1;if(J>G)return 1}if(I==="desc"){if(J>G)return-1;if(J<G)return 1}return 0}):g}(t,B==null?void 0:B.selector,oe,Ne)},[Ie,B,oe,t,Ne]),ue=o.exports.useMemo(()=>{if(Y&&!v){const g=M*Q,h=g-Q;return j.slice(h,g)}return j},[M,Y,v,Q,j]),Bt=o.exports.useCallback(g=>{ee(g)},[]),Gt=o.exports.useCallback(g=>{ee(g)},[]),Vt=o.exports.useCallback(g=>{ee(g)},[]),Ut=o.exports.useCallback((g,h)=>Me(g,h),[Me]),Yt=o.exports.useCallback((g,h)=>ze(g,h),[ze]),ae=o.exports.useCallback(g=>ee({type:"CHANGE_PAGE",page:g,paginationServer:v,visibleOnly:w,persistSelectedOnPageChange:fe}),[v,fe,w]),Qt=o.exports.useCallback(g=>{const h=be(L||ue.length,g),I=Le(M,h);v||ae(I),ee({type:"CHANGE_ROWS_PER_PAGE",page:I,rowsPerPage:g})},[M,ae,v,L,ue.length]);if(Y&&!v&&j.length>0&&ue.length===0){const g=be(j.length,Q),h=Le(M,g);ae(h)}te(()=>{P({allSelected:tt,selectedCount:nt,selectedRows:Te})},[_t]),te(()=>{Ot(B,oe)},[B,oe]),te(()=>{N(M,L||j.length)},[M]),te(()=>{A(Q,M)},[Q]),te(()=>{ae(W)},[W,U]),te(()=>{if(Y&&v&&L>0){const g=be(L,Q),h=Le(M,g);M!==h&&ae(h)}},[L]),o.exports.useEffect(()=>{ee({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:Ve})},[m,Ve]),o.exports.useEffect(()=>{if(!k)return;const g=j.filter(I=>k(I)),h=m?g.slice(0,1):g;ee({type:"SELECT_MULTIPLE_ROWS",keyField:i,selectedRows:h,totalRows:j.length,mergeSelections:at})},[t,k]);const Jt=w?ue:j,Kt=fe||m||R;return o.exports.createElement(Xt,{theme:Nt},!q&&(!!a||!!r)&&o.exports.createElement(zn,{title:a,actions:r,showMenu:!yt,selectedCount:nt,direction:pe,contextActions:vt,contextComponent:St,contextMessage:Rt}),Fe&&o.exports.createElement(Bn,{align:je,wrapContent:F},Ct),o.exports.createElement(Vn,Object.assign({responsive:ke,fixedHeader:ge,fixedHeaderScrollHeight:he},Wt),o.exports.createElement(Un,null,_&&!V&&o.exports.createElement(bt,null,ce),o.exports.createElement(nn,{disabled:He,className:"rdt_Table",role:"table"},!$e&&(!!V||j.length>0&&!_)&&o.exports.createElement(an,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:ge},o.exports.createElement(rn,{className:"rdt_TableHeadRow",role:"row",dense:y},p&&(Kt?o.exports.createElement(le,{style:{flex:"0 0 48px"}}):o.exports.createElement(jn,{allSelected:tt,selectedRows:Te,selectableRowsComponent:O,selectableRowsComponentProps:D,selectableRowDisabled:f,rowData:Jt,keyField:i,mergeSelections:at,onSelectAllRows:Gt})),we&&!Be&&o.exports.createElement(Yn,null),Qe.map(g=>o.exports.createElement($n,{key:g.id,column:g,selectedColumn:B,disabled:_||j.length===0,pagination:Y,paginationServer:v,persistSelectedOnSort:ot,selectableRowsVisibleOnly:w,sortDirection:oe,sortIcon:Et,sortServer:Ie,onSort:Bt,onDragStart:Ke,onDragOver:Ze,onDragEnd:et,onDragEnter:Xe,onDragLeave:qe,draggingColumnId:Je})))),!j.length&&!_&&o.exports.createElement(Qn,null,De),_&&V&&o.exports.createElement(bt,null,ce),!_&&j.length>0&&o.exports.createElement(Gn,{className:"rdt_TableBody",role:"rowgroup"},ue.map((g,h)=>{const I=re(g,i),z=function(G=""){return typeof G!="number"&&(!G||G.length===0)}(I)?h:I,d=ye(g,Te,i),Ce=!!(we&&Ge&&Ge(g)),J=!!(we&&We&&We(g));return o.exports.createElement(Sn,{id:z,key:z,keyField:i,"data-row-id":z,columns:Qe,row:g,rowCount:j.length,rowIndex:h,selectableRows:p,expandableRows:we,expandableIcon:C,highlightOnHover:c,pointerOnHover:b,dense:y,expandOnRowClicked:Dt,expandOnRowDoubleClicked:Ht,expandableRowsComponent:Pt,expandableRowsComponentProps:kt,expandableRowsHideExpander:Be,defaultExpanderDisabled:J,defaultExpanded:Ce,expandableInheritConditionalStyles:$t,conditionalRowStyles:It,selected:d,selectableRowsHighlight:$,selectableRowsComponent:O,selectableRowsComponentProps:D,selectableRowDisabled:f,selectableRowsSingle:m,striped:s,onRowExpandToggled:S,onRowClicked:Ut,onRowDoubleClicked:Yt,onSelectedRow:Vt,draggingColumnId:Je,onDragStart:Ke,onDragOver:Ze,onDragEnd:et,onDragEnter:Xe,onDragLeave:qe})}))))),Mt&&o.exports.createElement("div",null,o.exports.createElement(zt,{onChangePage:ae,onChangeRowsPerPage:Qt,rowCount:L||j.length,currentPage:M,rowsPerPage:Q,direction:pe,paginationRowsPerPageOptions:Z,paginationIconLastPage:se,paginationIconFirstPage:de,paginationIconNext:ne,paginationIconPrevious:Ee,paginationComponentOptions:Pe})))});export{bo as Q};
