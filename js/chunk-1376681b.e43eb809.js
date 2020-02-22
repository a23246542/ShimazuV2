(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1376681b"],{ede4:function(t,s,a){},fef1:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"container mb-10 py-4"},[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb bg-transparent pl-1 mb-0"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{staticClass:"text-primary-light",attrs:{to:"/"}},[t._v("首頁")])],1),a("li",{staticClass:"breadcrumb-item"},[a("router-link",{staticClass:"text-primary-light",attrs:{to:"/products"}},[t._v("肉品")])],1),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(" "+t._s(t.singleProduct.title)+" ")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-7 mb-5"},[a("h2",{staticClass:"h3 text-center bg-accent text-white p-2 d-md-none"},[t._v(" "+t._s(t.singleProduct.title)+" ")]),a("div",{staticClass:"bg-cover",style:[{backgroundImage:"url("+t.singleProduct.imageUrl+")"},{height:"380px"}]})]),a("div",{staticClass:"col-md-5 p-3 bg-white buy-area"},[a("h2",{staticClass:"d-none d-md-block"},[t._v(t._s(t.singleProduct.title))]),a("p",{staticClass:"d-none d-md-block"},[t._v(t._s(t.singleProduct.description))]),a("div",{staticClass:"mb-2 mb-md-0 d-flex align-items-end justify-content-center\n          justify-content-md-start"},[a("del",{staticClass:"text-muted mr-3"},[t._v("原價 "+t._s(t._f("currency")(t.singleProduct.origin_price)))]),a("div",{staticClass:"h4 mb-0"},[a("span",{staticClass:"text-danger"},[t._v("特價")]),a("span",{staticClass:"text-danger"},[t._v(" "+t._s(t._f("currency")(t.singleProduct.price)))])])]),a("hr",{staticClass:"d-none d-md-block"}),a("div",{staticClass:"input-group mb-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.singleProduct.num,expression:"singleProduct.num"}],staticClass:"form-control mr-1",on:{change:function(s){var a=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.$set(t.singleProduct,"num",s.target.multiple?a:a[0])}}},t._l(10,(function(s){return a("option",{key:s,domProps:{value:s}},[t._v(t._s(s)+" "+t._s(t.singleProduct.unit))])})),0),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",id:"button-addCart"},on:{click:function(s){return t.addtoCart(t.singleProduct.id,t.singleProduct.num)}}},[t._v(" 加入購物車 ")])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-7 text-white"},[a("h3",{staticClass:"h4 feature-title"},[t._v("產品特色")]),a("p",[t._v(t._s(t.singleProduct.content))]),a("h3",{staticClass:"h4 feature-title"},[t._v("天然放牧")]),a("div",{staticClass:"cattles-picbox my-2"}),a("p",[t._v(" 不同於人工室內餵養，讓牛隻有充足的空間活動與成長， 擁有全天然的生長環境。 ")]),a("h3",{staticClass:"h4 feature-title"},[t._v("和牛認證")]),a("div",{staticClass:"wagyu-admit-picbox my-2"}),t._m(0),a("p",[t._v("只有純正的日本產和牛，才能獲得日本食肉格付協會認證，使用和牛統一標誌。 本店所販售之和牛均擁有該標章，從出生證明、血統紀錄到屠宰販售的相關資料，都能追溯確認。 ")]),t._m(1)]),a("div",{staticClass:"col-md-5",staticStyle:{padding:"0 0"}},[a("div",{staticClass:"list-group"},[a("li",{staticClass:"list-group-item h4 text-center bg-primary text-white",staticStyle:{"margin-bottom":"0"}},[t._v(" 熱銷商品 ")]),t._l(t.recommendProducts,(function(s,i){return a("a",{key:i,staticClass:"list-group-item list-group-item-action d-flex justify-content-between",attrs:{href:"#"},on:{click:function(a){return t.openRecomProduct(s.id)}}},[a("span",{staticClass:"align-self-center"},[t._v(" "+t._s(s.title)+" "+t._s(t._f("currency")(s.price))+" ")]),a("div",{staticClass:"rec-item-pic bg-cover d-inline-block",style:{backgroundImage:"url("+s.imageUrl+")"}})])}))],2)])])]),t._m(2)])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"text-center"},[a("small",[t._v("(圖：日本食肉格付協會)")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"notice"},[a("h3",{staticClass:"h4 feature-title"},[t._v("購買須知")]),a("h4",{staticClass:"h5"},[a("i",{staticClass:"far fa-hand-point-down"}),t._v(" 商品成分")]),a("p",[t._v(" 牛肉"),a("br"),a("small",[t._v(" ＊商品皆以原物料直接切割，圖片僅供參考，每批商品油花可能會有所差異，如可接受再請下單訂購。 ")])]),a("h4",{staticClass:"h5"},[a("i",{staticClass:"far fa-hand-point-down"}),t._v(" 保存期限")]),a("p",[t._v("冷凍 -18℃ 可保存 300 天，詳情請見商品標示。")]),a("h4",{staticClass:"h5"},[a("i",{staticClass:"far fa-hand-point-down"}),t._v(" 保存方式")]),a("p",[t._v("請置於冷凍 -18℃ 保存。")]),a("h4",{staticClass:"h5"},[a("i",{staticClass:"far fa-hand-point-down"}),t._v(" 解凍方式")]),a("p",[t._v(" 請先將預備要料理之牛肉在未拆封前，置於冰箱冷藏室自然解凍。"),a("br"),t._v(" ＊如未食用完畢之解凍牛肉，請使用保鮮袋或保鮮盒放置於冷藏室，最長可保存不超過 24 小時。"),a("br"),t._v(" ＊勿將產品反覆回溫、冷凍以免影響品質，產品開封後請一次食用完畢，以免因儲存不當而影響品質。"),a("br")]),a("h4",{staticClass:"h5"},[a("i",{staticClass:"far fa-hand-point-down"}),t._v(" 注意事項")]),a("p",[t._v(" 1. 圖片僅供參考，商品內容物以實際收到商品為主。"),a("br"),t._v(" 2. 商品若於送達時即有損壞，請拍照存證並立即與我們聯繫。 ")]),a("h4",{staticClass:"h5"},[a("i",{staticClass:"far fa-hand-point-down"}),t._v(" 退換貨須知")]),a("p",[t._v(" 基於食品安全衛生考量，生鮮易腐敗商品依法已排除適用七天鑑賞期，恕無法退換貨。"),a("br"),t._v(" 當您收到商品後，請立即確認商品品項及數量是否正確，若收到商品與訂單內容不符，或商品本身有瑕疵 （舉凡：運送途中損壞、商品解凍），請您立即拍照存證，並請於收到商品後一天內， 備妥您的訂單編號或訂購人相關資料，與我們聯繫，我們會立即為您處理退換貨事宜。"),a("br"),a("small",[t._v(" ※退換貨處理期間，請留存發票並保持商品整體完整，需要冷凍保存之商品務必置於冷凍庫保存， 若商品已拆封，或是因消費者對商品的不當處理及保存方式錯誤而造成商品損壞變質， 則本公司將有保留退換貨的權利。 ")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"modal fade",attrs:{id:"addtoCartModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-sm",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[t._v(" 成功加入購物車！ "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])])])}],r=(a("99af"),a("4de4"),a("c975"),a("1157")),n=a.n(r),c={data:function(){return{id:"",singleProduct:{num:1}}},computed:{allProducts:function(){return this.$store.state.CustomerProducts.products},recommendProducts:function(){function t(t){return Math.floor(Math.random()*t)}for(var s=[],a=0,i=[],e=0;e<3;e+=1)a=t(this.allProducts.length),i.push(a);var r=i.filter((function(t,s,a){return a.indexOf(t)===s}));if(r.length<3){var n=r[1],c=n+1;r[0]!==c&&r[1]!==c&&r.push(c)}return s=[this.allProducts[r[0]],this.allProducts[r[1]],this.allProducts[r[2]]],s}},methods:{getSingleProduct:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("gretema","/product/").concat(t.id);t.$store.commit("LOADING",!0),t.$http.get(s).then((function(s){t.$store.commit("LOADING",!1),t.singleProduct=s.data.product,t.singleProduct.num=1}))},getCart:function(){this.$store.dispatch("getCart")},removeItem:function(t){this.$store.dispatch("removeCart",t)},addtoCart:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.dispatch("addtoCart",{id:t,qty:s}),this.addtoCartModal()},getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$store.dispatch("getCusProducts",t)},openRecomProduct:function(t){this.id=t,this.$router.push("/products/".concat(this.id)),this.getSingleProduct()},addtoCartModal:function(){window.setTimeout((function(){n()("#addtoCartModal").modal("show")}),2500),window.setTimeout((function(){n()("#addtoCartModal").modal("hide")}),4e3)}},created:function(){this.id=this.$route.params.productId,this.getSingleProduct(),this.getCart(),this.getProducts()}},o=c,l=(a("ff4f"),a("2877")),d=Object(l["a"])(o,i,e,!1,null,"5888ddfd",null);s["default"]=d.exports},ff4f:function(t,s,a){"use strict";var i=a("ede4"),e=a.n(i);e.a}}]);
//# sourceMappingURL=chunk-1376681b.e43eb809.js.map