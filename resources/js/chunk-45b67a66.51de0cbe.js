(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45b67a66"],{"2cd1":function(t,e,a){"use strict";var o=a("56c4"),s=a.n(o);s.a},"32f8":function(t,e,a){},"492b":function(t,e,a){"use strict";var o=a("32f8"),s=a.n(o);s.a},"56c4":function(t,e,a){},8800:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Dialog",{ref:"dialog",attrs:{"can-return":0!==t.catalogData.category.length||0!==t.catalogData.searchRequest.length},on:{hide:t.onDialogHide,return:t.onDialogReturn}},[""===t.catalogData.category&&""===t.catalogData.searchRequest?a("section",[a("section",{staticClass:"search-wrapper"},[a("div",{staticClass:"search"},[a("input",{ref:"searchInput",attrs:{placeholder:"Поиск Товара",type:"text",autocorrect:"off",autocapitalize:"off"},on:{input:t.onSearchInput,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSearchResultChoose(e.target.value)}}}),0!==t.searchHelperResults.length&&""===t.catalogData.category?a("section",{staticClass:"search-helper"},t._l(t.searchHelperResults,function(e){return a("p",{on:{click:function(a){return t.onSearchResultChoose(e)}}},[t._v(t._s(e))])}),0):t._e()])]),a("CategoryChooseComponent",{ref:"categoryChoose",staticClass:"category-choose-component",attrs:{data:t.rawCategories,basket:t.products,"can-be-ordered":!1},on:{onCategoryChoose:t.onCategoryChoose}})],1):t._e(),""!==t.catalogData.category||""!==t.catalogData.searchRequest?a("CatalogComponent",{staticClass:"catalog-component",attrs:{"category-id":t.catalogData.category,"sub-category-id":t.catalogData.subCategory,"search-request":t.catalogData.searchRequest,"button-text":"Добавить","basket-data":t.products},on:{buy:t.onBuy,showFullSizeImage:t.onShowFillSizeImage}}):t._e(),a("Basket",{attrs:{data:t.products,canBeOrdered:!1,"can-be-cleared":!1}})],1)},s=[],n=(a("ac6a"),a("f499")),i=a.n(n),c=(a("7514"),a("cebc")),r=a("2f62"),u=a("be12"),l=a("4ccc"),h=a("e5e2"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isVisible?a("section",{staticClass:"dialog-wrapper"},[a("section",{staticClass:"dialog",style:{height:t.height+"px",opacity:t.opacity}},[a("header",[t.canReturn?a("img",{attrs:{src:"/svgs/arrow-left-white.svg"},on:{click:function(e){return t.$emit("return")}}}):t._e(),a("img",{staticClass:"right",attrs:{src:"/svgs/times-white.svg"},on:{click:t.hide}})]),a("section",{staticClass:"content-wrapper",style:{height:t.height-20+"px"}},[t.isInnerVisible?t._t("default"):t._e(),t.isInnerVisible?t._e():a("section",{staticClass:"center"},[a("LoadingSpinner")],1)],2)])]):t._e()},d=[],p=a("cdde"),f=a("e072"),C={name:"Dialog",components:{LoadingSpinner:f["a"]},props:{canReturn:{type:Boolean,default:!1}},data:function(){return{isVisible:!1,isInnerVisible:!1,isHidingBlocked:!1,opacity:0,height:0}},methods:{show:function(){var t=this;this.$eventBus.$emit(p["a"].showUnfocusedBackground,{zIndex:15}),this.$eventBus.$on(p["a"].onBackgroundClick,this.onBackgroundClick),this.isVisible=!0,setTimeout(function(){t.opacity=1,setTimeout(function(){t.isInnerVisible=!0},350)},50)},hide:function(){var t=this;this.$eventBus.$emit(p["a"].hideUnfocusedBackground,{zIndex:15}),this.$eventBus.$off(p["a"].onBackgroundClick),this.opacity=0,this.isInnerVisible=!1,setTimeout(function(){t.isVisible=!1,t.$emit("hide")},350)},onBackgroundClick:function(){var t=this;console.log("on background click"),this.isHidingBlocked?(this.isHidingBlocked=!1,this.$eventBus.$emit(p["a"].showUnfocusedBackground,{zIndex:15}),setTimeout(function(){t.$eventBus.$on(p["a"].onBackgroundClick,t.onBackgroundClick)},350)):this.hide()}},mounted:function(){this.height=Math.round(.75*window.innerHeight)}},b=C,y=(a("2cd1"),a("2877")),k=Object(y["a"])(b,g,d,!1,null,"f40e7b1a",null),m=k.exports,D=a("d175"),B=a("7b6f"),v=a("c2f7"),R=a("51bd"),w=a("bd71"),I={name:"WaybillEditingDialog",components:{Basket:w["a"],CatalogComponent:R["a"],CategoryChooseComponent:v["a"],Dialog:m},props:{productsData:{type:Array,required:!0}},data:function(){return{catalogData:{category:"",subCategory:"",searchRequest:"",buttonText:"Добавить"},searchHelperResults:[],products:[]}},methods:Object(c["a"])({},Object(r["b"])(h["a"].catalog,[l["a"].catalog.LOAD_CATEGORIES]),Object(r["d"])(h["a"].catalog,[u["a"].catalog.SET_IS_BASKET_MINIMIZED]),{onBuy:function(t){var e=this.products.find(function(e){return e.id===t.id});if(e)e.boughtQuantity++;else{var a=JSON.parse(i()(t));a.boughtQuantity=1,a.isValid=!0,this.products.push(a)}this.setIsBasketMinimized(!1)},onShowFillSizeImage:function(t){this.$refs.dialog.isHidingBlocked=!0,t.notHideBackgroundOnClick=!0,this.$eventBus.$emit(p["a"].showImagePreview,t)},onSearchInput:function(t){var e=this,a=t.target.value;0!==a.length?D["a"].getSearchHelper(a).then(function(t){null!==t?t.json().then(function(t){e.searchHelperResults=t}):e.searchHelperResults=[]}):0!==this.searchHelperResults.length&&(this.searchHelperResults=[])},onSearchResultChoose:function(t){this.catalogData.searchRequest=t,this.searchHelperResults=[]},onCategoryChoose:function(t){this.catalogData.category=t.id,this.catalogData.subCategory=t.subId,this.searchHelperResults=[]},onDialogReturn:function(){this.$store.dispatch(h["a"].catalog+"/"+B["d"]),this.catalogData.category="",this.catalogData.subCategory="",this.catalogData.searchRequest=""},onDialogHide:function(){this.catalogData.category="",this.catalogData.subCategory="",this.catalogData.searchRequest=""}}),computed:Object(c["a"])({},Object(r["c"])(h["a"].catalog,["categories"]),{rawCategories:function(){var t=JSON.parse(i()(this.categories));return t.forEach(function(t){t.isExpanded&&(t.isExpanded=!1)}),t}}),mounted:function(){this.products=this.$props.productsData?this.$props.productsData:[],0===this.categories.length&&this.loadCategories()}},$=I,_=(a("492b"),Object(y["a"])($,o,s,!1,null,"406a08e7",null));e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-45b67a66.51de0cbe.js.map