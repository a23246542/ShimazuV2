(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24dbc076"],{"1fa7":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"container mb-md-6"},[e("div",{staticClass:"paysuccess-bg row justify-content-center align-items-center"},[e("div",{staticClass:"col-md-4 p-8 p-md-0"},[t._m(0),e("div",{staticClass:"my-5 paysuccess-box"},[e("h2",{staticClass:"text-center text-light py-4 paysuccess-title"},[t._v("付款成功")]),e("router-link",{staticClass:"btn btn-block btn-lg btn-primary text-white rounded-0 d-none d-md-block py-3",attrs:{to:"/products"}},[t._v("繼續逛逛")])],1)])]),e("div",{staticClass:"row d-md-none"},[e("div",{staticClass:"col",staticStyle:{padding:"0 0"}},[e("router-link",{staticClass:"btn btn-block btn-lg btn-primary text-white rounded-0 py-3",attrs:{to:"/products"}},[t._v("繼續逛逛")])],1)]),e("div",{staticClass:"row justify-content-center bg-light pb-3"},[e("div",{staticClass:"col-md-10 table-responsive"},[e("table",{staticClass:"table paysuccess-table"},[t._m(1),e("tbody",t._l(t.order.products,(function(s){return e("tr",{key:s.id},[e("td",{staticClass:"align-middle"},[t._v(t._s(s.product.title))]),e("td",{staticClass:"align-middle"},[t._v(" "+t._s(s.qty)+" "+t._s(s.product.unit)+" ")]),e("td",{staticClass:"align-middle text-right"},[t._v(" "+t._s(t._f("currency")(s.final_total))+" ")])])})),0),e("tfoot",[e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.order.total)))])])])]),e("table",{staticClass:"table paysuccess-table"},[e("tbody",[e("tr",[e("th",{attrs:{width:"100"}},[t._v("Email")]),e("td",[t._v(t._s(t.order.user.email))])]),e("tr",[e("th",[t._v("姓名")]),e("td",[t._v(t._s(t.order.user.name))])]),e("tr",[e("th",[t._v("電話")]),e("td",[t._v(t._s(t.order.user.tel))])]),e("tr",[e("th",[t._v("地址")]),e("td",[t._v(t._s(t.order.user.address))])]),e("tr",[e("th",{attrs:{width:"120"}},[t._v("付款狀態")]),e("td",[t.order.is_paid?e("span",{staticClass:"text-success"},[t._v("付款完成")]):e("span",[t._v("尚未付款")])])])])])])])])])},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"process-steps d-flex justify-content-between "},[e("div",{staticClass:"process-circle completed"},[e("i",{staticClass:"fas fa-check"})]),e("div",{staticClass:"process-circle completed"},[e("i",{staticClass:"fas fa-check"})]),e("div",{staticClass:"process-circle completed"},[e("i",{staticClass:"fas fa-check"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("th",[t._v("品名")]),e("th",{attrs:{width:"150"}},[t._v("數量")]),e("th",{staticClass:"text-right",attrs:{width:"150"}},[t._v("單價")])])}],c=(e("99af"),{data:function(){return{orderId:"",order:{user:{}}}},computed:{},methods:{getThisOrder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("gretema","/order/").concat(t.orderId);t.$store.commit("LOADING",!0),t.$http.get(s).then((function(s){t.$store.commit("LOADING",!1),t.order=s.data.order}))}},created:function(){this.orderId=this.$route.params.orderId,this.getThisOrder()}}),i=c,d=(e("6a17"),e("2877")),o=Object(d["a"])(i,a,r,!1,null,"04d2e7d5",null);s["default"]=o.exports},"6a17":function(t,s,e){"use strict";var a=e("7a43"),r=e.n(a);r.a},"7a43":function(t,s,e){}}]);
//# sourceMappingURL=chunk-24dbc076.ea821041.js.map