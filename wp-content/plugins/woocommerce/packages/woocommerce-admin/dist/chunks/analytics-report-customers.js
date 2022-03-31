(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[9],{484:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return E}));var a=r(0),o=r(1),c=r.n(o),n=r(2),l=r(30),i=r(28),s=r(11),m=r(507),d=r(22);const{countries:u}=Object(d.d)("dataEndpoints",{countries:{}}),b=Object(i.applyFilters)("woocommerce_admin_customers_report_filters",[{label:Object(n.__)("Show",'woocommerce'),staticParams:["paged","per_page"],param:"filter",showFilters:()=>!0,filters:[{label:Object(n.__)("All Customers",'woocommerce'),value:"all"},{label:Object(n.__)("Single Customer",'woocommerce'),value:"select_customer",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_customer",chartMode:"item-comparison",path:["select_customer"],settings:{type:"customers",param:"customers",getLabels:m.c,labels:{placeholder:Object(n.__)("Type to search for a customer",'woocommerce'),button:Object(n.__)("Single Customer",'woocommerce')}}}]},{label:Object(n.__)("Advanced filters",'woocommerce'),value:"advanced"}]}]),_=Object(i.applyFilters)("woocommerce_admin_customers_report_advanced_filters",{title:Object(n._x)("Customers match {{select /}} filters","A sentence describing filters for Customers. See screen shot for context: https://cloudup.com/cCsm3GeXJbE",'woocommerce'),filters:{name:{labels:{add:Object(n.__)("Name",'woocommerce'),placeholder:Object(n.__)("Search",'woocommerce'),remove:Object(n.__)("Remove customer name filter",'woocommerce'),rule:Object(n.__)("Select a customer name filter match",'woocommerce'),title:Object(n.__)("{{title}}Name{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(n.__)("Select customer name",'woocommerce')},rules:[{value:"includes",label:Object(n._x)("Includes","customer names",'woocommerce')},{value:"excludes",label:Object(n._x)("Excludes","customer names",'woocommerce')}],input:{component:"Search",type:"customers",getLabels:Object(m.e)(s.NAMESPACE+"/customers",e=>({id:e.id,label:e.name}))}},country:{labels:{add:Object(n.__)("Country / Region",'woocommerce'),placeholder:Object(n.__)("Search",'woocommerce'),remove:Object(n.__)("Remove country / region filter",'woocommerce'),rule:Object(n.__)("Select a country / region filter match",'woocommerce'),title:Object(n.__)("{{title}}Country / Region{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(n.__)("Select country / region",'woocommerce')},rules:[{value:"includes",label:Object(n._x)("Includes","countries",'woocommerce')},{value:"excludes",label:Object(n._x)("Excludes","countries",'woocommerce')}],input:{component:"Search",type:"countries",getLabels:async e=>{const t=u.map(e=>({key:e.code,label:Object(l.decodeEntities)(e.name)})),r=e.split(",");return await t.filter(e=>r.includes(e.key))}}},username:{labels:{add:Object(n.__)("Username",'woocommerce'),placeholder:Object(n.__)("Search customer username",'woocommerce'),remove:Object(n.__)("Remove customer username filter",'woocommerce'),rule:Object(n.__)("Select a customer username filter match",'woocommerce'),title:Object(n.__)("{{title}}Username{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(n.__)("Select customer username",'woocommerce')},rules:[{value:"includes",label:Object(n._x)("Includes","customer usernames",'woocommerce')},{value:"excludes",label:Object(n._x)("Excludes","customer usernames",'woocommerce')}],input:{component:"Search",type:"usernames",getLabels:m.c}},email:{labels:{add:Object(n.__)("Email",'woocommerce'),placeholder:Object(n.__)("Search customer email",'woocommerce'),remove:Object(n.__)("Remove customer email filter",'woocommerce'),rule:Object(n.__)("Select a customer email filter match",'woocommerce'),title:Object(n.__)("{{title}}Email{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(n.__)("Select customer email",'woocommerce')},rules:[{value:"includes",label:Object(n._x)("Includes","customer emails",'woocommerce')},{value:"excludes",label:Object(n._x)("Excludes","customer emails",'woocommerce')}],input:{component:"Search",type:"emails",getLabels:Object(m.e)(s.NAMESPACE+"/customers",e=>({id:e.id,label:e.email}))}},orders_count:{labels:{add:Object(n.__)("No. of Orders",'woocommerce'),remove:Object(n.__)("Remove order filter",'woocommerce'),rule:Object(n.__)("Select an order count filter match",'woocommerce'),title:Object(n.__)("{{title}}No. of Orders{{/title}} {{rule /}} {{filter /}}",'woocommerce')},rules:[{value:"max",label:Object(n._x)("Less Than","number of orders",'woocommerce')},{value:"min",label:Object(n._x)("More Than","number of orders",'woocommerce')},{value:"between",label:Object(n._x)("Between","number of orders",'woocommerce')}],input:{component:"Number"}},total_spend:{labels:{add:Object(n.__)("Total Spend",'woocommerce'),remove:Object(n.__)("Remove total spend filter",'woocommerce'),rule:Object(n.__)("Select a total spend filter match",'woocommerce'),title:Object(n.__)("{{title}}Total Spend{{/title}} {{rule /}} {{filter /}}",'woocommerce')},rules:[{value:"max",label:Object(n._x)("Less Than","total spend by customer",'woocommerce')},{value:"min",label:Object(n._x)("More Than","total spend by customer",'woocommerce')},{value:"between",label:Object(n._x)("Between","total spend by customer",'woocommerce')}],input:{component:"Currency"}},avg_order_value:{labels:{add:Object(n.__)("AOV",'woocommerce'),remove:Object(n.__)("Remove average order value filter",'woocommerce'),rule:Object(n.__)("Select an average order value filter match",'woocommerce'),title:Object(n.__)("{{title}}AOV{{/title}} {{rule /}} {{filter /}}",'woocommerce')},rules:[{value:"max",label:Object(n._x)("Less Than","average order value of customer",'woocommerce')},{value:"min",label:Object(n._x)("More Than","average order value of customer",'woocommerce')},{value:"between",label:Object(n._x)("Between","average order value of customer",'woocommerce')}],input:{component:"Currency"}},registered:{labels:{add:Object(n.__)("Registered",'woocommerce'),remove:Object(n.__)("Remove registered filter",'woocommerce'),rule:Object(n.__)("Select a registered filter match",'woocommerce'),title:Object(n.__)("{{title}}Registered{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(n.__)("Select registered date",'woocommerce')},rules:[{value:"before",label:Object(n._x)("Before","date",'woocommerce')},{value:"after",label:Object(n._x)("After","date",'woocommerce')},{value:"between",label:Object(n._x)("Between","date",'woocommerce')}],input:{component:"Date"}},last_active:{labels:{add:Object(n.__)("Last active",'woocommerce'),remove:Object(n.__)("Remove last active filter",'woocommerce'),rule:Object(n.__)("Select a last active filter match",'woocommerce'),title:Object(n.__)("{{title}}Last active{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(n.__)("Select registered date",'woocommerce')},rules:[{value:"before",label:Object(n._x)("Before","date",'woocommerce')},{value:"after",label:Object(n._x)("After","date",'woocommerce')},{value:"between",label:Object(n._x)("Between","date",'woocommerce')}],input:{component:"Date"}}}});var p=r(3),O=r(21),j=r(122),y=r(14),g=r(20),f=r(512),w=r(506);const{countries:h}=Object(d.d)("dataEndpoints",{countries:{}});class v extends a.Component{constructor(){super(),this.getHeadersContent=this.getHeadersContent.bind(this),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:Object(n.__)("Name",'woocommerce'),key:"name",required:!0,isLeftAligned:!0,isSortable:!0},{label:Object(n.__)("Username",'woocommerce'),key:"username",hiddenByDefault:!0},{label:Object(n.__)("Last active",'woocommerce'),key:"date_last_active",defaultSort:!0,isSortable:!0},{label:Object(n.__)("Date registered",'woocommerce'),key:"date_registered",isSortable:!0},{label:Object(n.__)("Email",'woocommerce'),key:"email"},{label:Object(n.__)("Orders",'woocommerce'),key:"orders_count",isSortable:!0,isNumeric:!0},{label:Object(n.__)("Total spend",'woocommerce'),key:"total_spend",isSortable:!0,isNumeric:!0},{label:Object(n.__)("AOV",'woocommerce'),screenReaderLabel:Object(n.__)("Average order value",'woocommerce'),key:"avg_order_value",isNumeric:!0},{label:Object(n.__)("Country / Region",'woocommerce'),key:"country",isSortable:!0},{label:Object(n.__)("City",'woocommerce'),key:"city",hiddenByDefault:!0,isSortable:!0},{label:Object(n.__)("Region",'woocommerce'),key:"state",hiddenByDefault:!0,isSortable:!0},{label:Object(n.__)("Postal code",'woocommerce'),key:"postcode",hiddenByDefault:!0,isSortable:!0}]}getCountryName(e){return void 0!==h[e]?h[e]:null}getRowsContent(e){const t=Object(d.d)("dateFormat",g.defaultTableDateFormat),{formatAmount:r,formatDecimal:o,getCurrencyConfig:c}=this.context;return null==e?void 0:e.map(e=>{const{avg_order_value:n,date_last_active:l,date_registered:i,email:s,name:m,user_id:d,orders_count:u,username:b,total_spend:_,postcode:g,city:f,state:w,country:h}=e,v=this.getCountryName(h),S=d?Object(a.createElement)(O.Link,{href:Object(y.getAdminLink)("user-edit.php?user_id="+d),type:"wp-admin"},m):m,C=l?Object(a.createElement)(O.Date,{date:l,visibleFormat:t}):"—",E=i?Object(a.createElement)(O.Date,{date:i,visibleFormat:t}):"—",x=Object(a.createElement)(a.Fragment,null,Object(a.createElement)(p.Tooltip,{text:v},Object(a.createElement)("span",{"aria-hidden":"true"},h)),Object(a.createElement)("span",{className:"screen-reader-text"},v));return[{display:S,value:m},{display:b,value:b},{display:C,value:l},{display:E,value:i},{display:Object(a.createElement)("a",{href:"mailto:"+s},s),value:s},{display:Object(j.formatValue)(c(),"number",u),value:u},{display:r(_),value:o(_)},{display:r(n),value:o(n)},{display:x,value:h},{display:f,value:f},{display:w,value:w},{display:g,value:g}]})}getSummary(e){const{customers_count:t=0,avg_orders_count:r=0,avg_total_spend:a=0,avg_avg_order_value:o=0}=e,{formatAmount:c,getCurrencyConfig:l}=this.context,i=l();return[{label:Object(n._n)("customer","customers",t,'woocommerce'),value:Object(j.formatValue)(i,"number",t)},{label:Object(n._n)("Average order","Average orders",r,'woocommerce'),value:Object(j.formatValue)(i,"number",r)},{label:Object(n.__)("Average lifetime spend",'woocommerce'),value:c(a)},{label:Object(n.__)("Average order value",'woocommerce'),value:c(o)}]}render(){const{isRequesting:e,query:t,filters:r,advancedFilters:o}=this.props;return Object(a.createElement)(f.a,{endpoint:"customers",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["customers_count","avg_orders_count","avg_total_spend","avg_avg_order_value"],isRequesting:e,itemIdField:"id",query:t,labels:{placeholder:Object(n.__)("Search by customer name",'woocommerce')},searchBy:"customers",title:Object(n.__)("Customers",'woocommerce'),columnPrefsKey:"customers_report_columns",filters:r,advancedFilters:o})}}v.contextType=w.a;var S=v,C=r(511);class E extends a.Component{render(){const{isRequesting:e,query:t,path:r}=this.props,o={orderby:"date_last_active",order:"desc",...t};return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(C.a,{query:t,path:r,filters:b,showDatePicker:!1,advancedFilters:_,report:"customers"}),Object(a.createElement)(S,{isRequesting:e,query:o,filters:b,advancedFilters:_}))}}E.propTypes={query:c.a.object.isRequired}},506:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return m}));var a=r(0),o=r(28),c=r(91),n=r.n(c),l=r(22);const i=n()(l.a),s=e=>{const t=i.getCurrencyConfig(),r=Object(o.applyFilters)("woocommerce_admin_report_currency",t,e);return n()(r)},m=Object(a.createContext)(i)},507:function(e,t,r){"use strict";r.d(t,"e",(function(){return d})),r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return _})),r.d(t,"d",(function(){return p})),r.d(t,"f",(function(){return O})),r.d(t,"h",(function(){return j})),r.d(t,"g",(function(){return y}));var a=r(15),o=r(18),c=r.n(o),n=r(4),l=r(12),i=r(11),s=r(508),m=r(22);function d(e,t=n.identity){return function(r="",o){const n="function"==typeof e?e(o):e,i=Object(l.getIdsFromQuery)(r);if(i.length<1)return Promise.resolve([]);const s={include:i.join(","),per_page:i.length};return c()({path:Object(a.addQueryArgs)(n,s)}).then(e=>e.map(t))}}d(i.NAMESPACE+"/products/attributes",e=>({key:e.id,label:e.name}));const u=d(i.NAMESPACE+"/products/categories",e=>({key:e.id,label:e.name})),b=d(i.NAMESPACE+"/coupons",e=>({key:e.id,label:e.code})),_=d(i.NAMESPACE+"/customers",e=>({key:e.id,label:e.name})),p=d(i.NAMESPACE+"/products",e=>({key:e.id,label:e.name})),O=d(i.NAMESPACE+"/taxes",e=>({key:e.id,label:Object(s.a)(e)}));function j({attributes:e,name:t}){const r=Object(m.d)("variationTitleAttributesSeparator"," - ");if(t&&t.indexOf(r)>-1)return t;const a=(e||[]).map(({option:e})=>e).join(", ");return a?t+r+a:t}const y=d(({products:e})=>e?i.NAMESPACE+`/products/${e}/variations`:i.NAMESPACE+"/variations",e=>({key:e.id,label:j(e)}))},508:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(2);function o(e){return[e.country,e.state,e.name||Object(a.__)("TAX",'woocommerce'),e.priority].map(e=>e.toString().toUpperCase().trim()).filter(Boolean).join("-")}},509:function(e,t,r){"use strict";var a=r(0),o=r(2),c=r(1),n=r.n(c),l=r(21);function i({className:e}){const t=Object(o.__)("There was an error getting your stats. Please try again.",'woocommerce'),r=Object(o.__)("Reload",'woocommerce');return Object(a.createElement)(l.EmptyContent,{className:e,title:t,actionLabel:r,actionCallback:()=>{window.location.reload()}})}i.propTypes={className:n.a.string},t.a=i},511:function(e,t,r){"use strict";var a=r(0),o=r(13),c=r(1),n=r.n(c),l=r(4),i=r(7),s=r(21),m=r(11),d=r(20),u=r(16),b=r(506),_=r(58),p=r(22);class O extends a.Component{constructor(){super(),this.onDateSelect=this.onDateSelect.bind(this),this.onFilterSelect=this.onFilterSelect.bind(this),this.onAdvancedFilterAction=this.onAdvancedFilterAction.bind(this)}onDateSelect(e){const{report:t,addCesSurveyForAnalytics:r}=this.props;r(),Object(u.recordEvent)("datepicker_update",{report:t,...Object(l.omitBy)(e,l.isUndefined)})}onFilterSelect(e){const{report:t,addCesSurveyForAnalytics:r}=this.props,a=e.filter||e["filter-variations"];["single_product","single_category","single_coupon","single_variation"].includes(a)&&r();const o={report:t,filter:e.filter||"all"};"single_product"===e.filter&&(o.filter_variation=e["filter-variations"]||"all"),Object(u.recordEvent)("analytics_filter",o)}onAdvancedFilterAction(e,t){const{report:r,addCesSurveyForAnalytics:a}=this.props;switch(e){case"add":Object(u.recordEvent)("analytics_filters_add",{report:r,filter:t.key});break;case"remove":Object(u.recordEvent)("analytics_filters_remove",{report:r,filter:t.key});break;case"filter":const e=Object.keys(t).reduce((e,r)=>(e[Object(l.snakeCase)(r)]=t[r],e),{});a(),Object(u.recordEvent)("analytics_filters_filter",{report:r,...e});break;case"clear_all":Object(u.recordEvent)("analytics_filters_clear_all",{report:r});break;case"match":Object(u.recordEvent)("analytics_filters_all_any",{report:r,value:t.match})}}render(){const{advancedFilters:e,filters:t,path:r,query:o,showDatePicker:c,defaultDateRange:n}=this.props,{period:l,compare:i,before:m,after:u}=Object(d.getDateParamsFromQuery)(o,n),{primary:b,secondary:_}=Object(d.getCurrentDates)(o,n),O={period:l,compare:i,before:m,after:u,primaryDate:b,secondaryDate:_},j=this.context;return Object(a.createElement)(s.ReportFilters,{query:o,siteLocale:p.b.siteLocale,currency:j.getCurrencyConfig(),path:r,filters:t,advancedFilters:e,showDatePicker:c,onDateSelect:this.onDateSelect,onFilterSelect:this.onFilterSelect,onAdvancedFilterAction:this.onAdvancedFilterAction,dateQuery:O,isoDateFormat:d.isoDateFormat})}}O.contextType=b.a,t.a=Object(o.compose)(Object(i.withSelect)(e=>{const{woocommerce_default_date_range:t}=e(m.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings");return{defaultDateRange:t}}),Object(i.withDispatch)(e=>{const{addCesSurveyForAnalytics:t}=e(_.c);return{addCesSurveyForAnalytics:t}}))(O),O.propTypes={advancedFilters:n.a.object,filters:n.a.array,path:n.a.string.isRequired,query:n.a.object,showDatePicker:n.a.bool,report:n.a.string.isRequired}},512:function(e,t,r){"use strict";var a=r(37),o=r.n(a),c=r(0),n=r(3),l=r(28),i=r(13),s=r(93),m=r(7),d=r(4),u=r(2),b=r(1),_=r.n(b),p=r(21),O=r(12),j=r(477),y=r(11),g=r(16),f=()=>Object(c.createElement)("svg",{role:"img","aria-hidden":"true",focusable:"false",version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24"},Object(c.createElement)("path",{d:"M18,9c-0.009,0-0.017,0.002-0.025,0.003C17.72,5.646,14.922,3,11.5,3C7.91,3,5,5.91,5,9.5c0,0.524,0.069,1.031,0.186,1.519 C5.123,11.016,5.064,11,5,11c-2.209,0-4,1.791-4,4c0,1.202,0.541,2.267,1.38,3h18.593C22.196,17.089,23,15.643,23,14 C23,11.239,20.761,9,18,9z M12,16l-4-5h3V8h2v3h3L12,16z"})),w=r(509);var h=r(58);r(521);const v=e=>{const{getHeadersContent:t,getRowsContent:r,getSummary:a,isRequesting:i,primaryData:m,tableData:b,endpoint:_,itemIdField:h,tableQuery:v,compareBy:S,compareParam:C,searchBy:E,labels:x={},...A}=e,{query:R,columnPrefsKey:F}=e,{items:k,query:D}=b,N=R[C]?Object(O.getIdsFromQuery)(R[S]):[],[q,T]=Object(c.useState)(N),P=Object(c.useRef)(null),{updateUserPreferences:B,...M}=Object(y.useUserPreferences)();if(b.isError||m.isError)return Object(c.createElement)(w.a,null);let L=[];F&&(L=M&&M[F]?M[F]:L);const Q=(e,o,c)=>{const n=a?a(o,c):null;return Object(l.applyFilters)("woocommerce_admin_report_table",{endpoint:_,headers:t(),rows:r(e),totals:o,summary:n,items:k})},I=t=>{const{ids:r}=e;T(t?r:[])},V=(t,r)=>{const{ids:a}=e;if(r)T(Object(d.uniq)([a[t],...q]));else{const e=q.indexOf(a[t]);T([...q.slice(0,e),...q.slice(e+1)])}},U=t=>{const{ids:r=[]}=e,a=-1!==q.indexOf(r[t]);return{display:Object(c.createElement)(n.CheckboxControl,{onChange:Object(d.partial)(V,t),checked:a}),value:!1}},H=()=>{const{ids:t=[]}=e,r=t.length>0,a=r&&t.length===q.length;return{cellClassName:"is-checkbox-column",key:"compare",label:Object(c.createElement)(n.CheckboxControl,{onChange:I,"aria-label":Object(u.__)("Select All"),checked:a,disabled:!r}),required:!0}},z=i||b.isRequesting||m.isRequesting,G=Object(d.get)(m,["data","totals"],{}),J=k.totalResults||0,K=J>0,X=Object(O.getSearchWords)(R).map(e=>({key:e,label:e})),{data:Y}=k,W=Q(Y,G,J);let{headers:$,rows:Z}=W;const{summary:ee}=W;S&&(Z=Z.map((e,t)=>[U(t),...e]),$=[H(),...$]);const te=((e,t)=>t?e.map(e=>({...e,visible:e.required||!t.includes(e.key)})):e.map(e=>({...e,visible:e.required||!e.hiddenByDefault})))($,L);return Object(c.createElement)(c.Fragment,null,Object(c.createElement)("div",{className:"woocommerce-report-table__scroll-point",ref:P,"aria-hidden":!0}),Object(c.createElement)(p.TableCard,o()({className:"woocommerce-report-table",hasSearch:!!E,actions:[S&&Object(c.createElement)(p.CompareButton,{key:"compare",className:"woocommerce-table__compare",count:q.length,helpText:x.helpText||Object(u.__)("Check at least two items below to compare",'woocommerce'),onClick:()=>{S&&Object(O.onQueryChange)("compare")(S,C,q.join(","))},disabled:!K},x.compareButton||Object(u.__)("Compare",'woocommerce')),E&&Object(c.createElement)(p.Search,{allowFreeTextSearch:!0,inlineTags:!0,key:"search",onChange:t=>{const{baseSearchQuery:r,addCesSurveyForCustomerSearch:a}=e,o=t.map(e=>e.label.replace(",","%2C"));o.length?(Object(O.updateQueryString)({filter:void 0,[C]:void 0,[E]:void 0,...r,search:Object(d.uniq)(o).join(",")}),a()):Object(O.updateQueryString)({search:void 0}),Object(g.recordEvent)("analytics_table_filter",{report:_})},placeholder:x.placeholder||Object(u.__)("Search by item name",'woocommerce'),selected:X,showClearButton:!0,type:E,disabled:!K}),K&&Object(c.createElement)(n.Button,{key:"download",className:"woocommerce-table__download-button",disabled:z,onClick:()=>{const{createNotice:t,startExport:r,title:a}=e,o=Object.assign({},R),{data:c,totalResults:n}=k;let l="browser";if(delete o.extended_info,o.search&&delete o[E],c&&c.length===n){const{headers:e,rows:t}=Q(c,n);Object(j.downloadCSVFile)(Object(j.generateCSVFileName)(a,o),Object(j.generateCSVDataFromTable)(e,t))}else l="email",r(_,D).then(()=>t("success",Object(u.sprintf)(Object(u.__)("Your %s Report will be emailed to you.",'woocommerce'),a))).catch(e=>t("error",e.message||Object(u.sprintf)(Object(u.__)("There was a problem exporting your %s Report. Please try again.",'woocommerce'),a)));Object(g.recordEvent)("analytics_table_download",{report:_,rows:n,download_type:l})}},Object(c.createElement)(f,null),Object(c.createElement)("span",{className:"woocommerce-table__download-button__label"},x.downloadButton||Object(u.__)("Download",'woocommerce')))],headers:te,isLoading:z,onQueryChange:O.onQueryChange,onColumnsChange:(e,t)=>{const r=$.map(e=>e.key).filter(t=>!e.includes(t));if(F){B({[F]:r})}if(t){const r={report:_,column:t,status:e.includes(t)?"on":"off"};Object(g.recordEvent)("analytics_table_header_toggle",r)}},onSort:(e,t)=>{Object(O.onQueryChange)("sort")(e,t);const r={report:_,column:e,direction:t};Object(g.recordEvent)("analytics_table_sort",r)},onPageChange:(e,t)=>{P.current.scrollIntoView();const r=P.current.nextSibling.querySelector(".woocommerce-table__table"),a=s.focus.focusable.find(r);a.length&&a[0].focus(),t&&("goto"===t?Object(g.recordEvent)("analytics_table_go_to_page",{report:_,page:e}):Object(g.recordEvent)("analytics_table_page_click",{report:_,direction:t}))},rows:Z,rowsPerPage:parseInt(D.per_page,10)||y.QUERY_DEFAULTS.pageSize,summary:ee,totalRows:J},A)))};v.propTypes={baseSearchQuery:_.a.object,compareBy:_.a.string,compareParam:_.a.string,columnPrefsKey:_.a.string,endpoint:_.a.string,extendItemsMethodNames:_.a.shape({getError:_.a.string,isRequesting:_.a.string,load:_.a.string}),extendedItemsStoreName:_.a.string,getHeadersContent:_.a.func.isRequired,getRowsContent:_.a.func.isRequired,getSummary:_.a.func,itemIdField:_.a.string,labels:_.a.shape({compareButton:_.a.string,downloadButton:_.a.string,helpText:_.a.string,placeholder:_.a.string}),primaryData:_.a.object,searchBy:_.a.string,summaryFields:_.a.arrayOf(_.a.string),tableData:_.a.object.isRequired,tableQuery:_.a.object,title:_.a.string.isRequired},v.defaultProps={primaryData:{},tableData:{items:{data:[],totalResults:0},query:{}},tableQuery:{},compareParam:"filter",downloadable:!1,onSearch:d.noop,baseSearchQuery:{}};const S=[],C={};t.a=Object(i.compose)(Object(m.withSelect)((e,t)=>{const{endpoint:r,getSummary:a,isRequesting:o,itemIdField:c,query:n,tableData:l,tableQuery:i,filters:s,advancedFilters:m,summaryFields:u,extendedItemsStoreName:b}=t,_=e(y.REPORTS_STORE_NAME),p=b?e(b):null,{woocommerce_default_date_range:O}=e(y.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings"),j=n.search&&!(n[r]&&n[r].length);if(o||j)return C;const g="categories"===r?"products":r,f=a?Object(y.getReportChartData)({endpoint:g,selector:_,dataType:"primary",query:n,filters:s,advancedFilters:m,defaultDateRange:O,fields:u}):C,w=l||Object(y.getReportTableData)({endpoint:r,query:n,selector:_,tableQuery:i,filters:s,advancedFilters:m,defaultDateRange:O}),h=p?function(e,t,r){const{extendItemsMethodNames:a,itemIdField:o}=t,c=r.items.data;if(!(Array.isArray(c)&&c.length&&a&&o))return r;const{[a.getError]:n,[a.isRequesting]:l,[a.load]:i}=e,s={include:c.map(e=>e[o]).join(","),per_page:c.length},m=i(s),u=!!l&&l(s),b=!!n&&n(s),_=c.map(e=>{const t=Object(d.first)(m.filter(t=>e.id===t.id));return{...e,...t}}),p=r.isRequesting||u,O=r.isError||b;return{...r,isRequesting:p,isError:O,items:{...r.items,data:_}}}(p,t,w):w;return{primaryData:f,ids:c&&h.items.data?h.items.data.map(e=>e[c]):S,tableData:h,query:n}}),Object(m.withDispatch)(e=>{const{startExport:t}=e(y.EXPORT_STORE_NAME),{createNotice:r}=e("core/notices"),{addCesSurveyForCustomerSearch:a}=e(h.c);return{createNotice:r,startExport:t,addCesSurveyForCustomerSearch:a}}))(v)},521:function(e,t,r){}}]);