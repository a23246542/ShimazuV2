(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59f180dc"],{"56a6":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"message-alert"},t._l(t.messages,(function(s,e){return a("div",{key:e,staticClass:"alert alert-dismissible",class:"alert-"+s.status},[t._v(" "+t._s(s.message)+" "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(s){return t.removeMessage(e)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},i=[],n={computed:{messages:function(){return this.$store.state.messages}},methods:{updateMessage:function(t,s){this.$store.dispatch("updateMessage",{message:t,status:s})},removeMessage:function(t){this.$store.dispatch("removeMessage",t)},removeMessageWithTiming:function(t){this.$store.dispatch("removeMessageWithTiming",t)}}},c=n,r=(a("cccd"),a("2877")),l=Object(r["a"])(c,e,i,!1,null,"4348f45e",null);s["a"]=l.exports},7277:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("DashNavbar"),a("Alert"),a("div",{staticClass:"container-fluid mt-8"},[a("div",{staticClass:"row"},[a("DashSidebar"),a("main",{staticClass:"col-md-9 px-3 ml-0 ml-md-5",attrs:{role:"main"}},[a("router-view")],1)],1)])],1)},i=[],n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark flex-nowrap p-2 shadow"},[a("a",{staticClass:"navbar-brand col-sm-3 col-md-2 mr-0",attrs:{href:"#"}},[t._v("後台管理系統")]),a("ul",{staticClass:"navbar-nav px-3"},[a("li",{staticClass:"nav-item text-nowrap"},[a("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.signout(s)}}},[t._v("登出")])])])])])},c=[],r={name:"Navbar",methods:{signout:function(){var t="".concat("https://vue-course-api.hexschool.io","/logout"),s=this;this.$http.post(t).then((function(t){t.data.success&&s.$router.push("/")}))}}},l=r,o=a("2877"),u=Object(o["a"])(l,n,c,!1,null,null,null),d=u.exports,v=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-2 mt-4 mt-md-0"},[a("nav",{staticClass:"bg-light sidebar"},[a("div",{staticClass:"sidebar-sticky"},[t._m(0),a("ul",{staticClass:"nav flex-column mb-2"},[a("li",{staticClass:"nav-item",class:{active:"dashProducts"==t.activeStatus},on:{click:function(s){t.activeStatus="dashProducts"}}},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin/products"}},[a("i",{staticClass:"fas fa-box-open"}),t._v("產品列表 ")])],1),a("li",{staticClass:"nav-item",class:{active:"dashOrders"==t.activeStatus},on:{click:function(s){t.activeStatus="dashOrders"}}},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin/orders"}},[a("i",{staticClass:"far fa-list-alt"}),t._v(" 訂單列表 ")])],1),a("li",{staticClass:"nav-item",class:{active:"coupons"==t.activeStatus},on:{click:function(s){t.activeStatus="coupons"}}},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin/coupons"}},[a("i",{staticClass:"fas fa-ticket-alt"}),t._v(" 優惠券列表 ")])],1)])])])])},m=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h5",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[a("span",{staticClass:"mt-3"},[t._v("管理員")]),a("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#","aria-label":"Add a new report"}},[a("span",{attrs:{"data-feather":"plus-circle"}})])])}],f={data:function(){return{activeStatus:"dashProducts"}}},h=f,p=Object(o["a"])(h,v,m,!1,null,null,null),b=p.exports,C=a("56a6"),g={components:{DashNavbar:d,DashSidebar:b,Alert:C["a"]}},_=g,k=Object(o["a"])(_,e,i,!1,null,null,null);s["default"]=k.exports},c272:function(t,s,a){},cccd:function(t,s,a){"use strict";var e=a("c272"),i=a.n(e);i.a}}]);
//# sourceMappingURL=chunk-59f180dc.09104420.js.map