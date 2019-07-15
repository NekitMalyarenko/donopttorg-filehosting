(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["catalog"],{"247d":function(t,o,a){"use strict";a.r(o);var e=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("section",{staticClass:"layout"},[a("CatalogComponent",{ref:"catalog",attrs:{"category-id":t.categoryId,"sub-category-id":t.subCategoryId,"search-request":t.searchRequest,"basket-data":t.basket},on:{buy:t.onBuy}})],1)},s=[],n=(a("7f7f"),a("cebc")),c=a("2f62"),r=a("e5e2"),i=a("4ccc"),u=a("be12"),l=a("51bd"),g={name:"Catalog",components:{CatalogComponent:l["a"]},data:function(){return{error:""}},props:{isComponent:{type:Boolean,default:!1},componentData:{type:Object,default:null},basketData:{type:Array,default:null}},methods:Object(n["a"])({},Object(c["b"])(r["a"].catalog,[i["a"].catalog.ADD_TO_BASKET]),Object(c["d"])(r["a"].catalog,[u["a"].catalog.SET_IS_BASKET_MINIMIZED]),{onBuy:function(t){this.setIsBasketMinimized(!1),this.addToBasket(t)}}),computed:Object(n["a"])({},Object(c["c"])(r["a"].catalog,["basket"]),{categoryId:function(){return this.$route&&this.$route.params&&("catalog"===this.$route.name||"catalogWithSub"===this.$route.name)?this.$route.params.categoryId:null},subCategoryId:function(){return null!==this.$route&&null!==this.$route.params&&"catalogWithSub"===this.$route.name?this.$route.params.subCategoryId:null},searchRequest:function(){return null!==this.$route&&null!==this.$route.params&&"search"===this.$route.name?this.$route.params.request:null}}),watch:{$route:{handler:function(){var t=this,o=function o(){t.$refs&&t.$refs.catalog?t.$nextTick(function(){t.$refs.catalog.init()}):setTimeout(o,100)};o()},deep:!0}}},d=g,h=(a("b91f"),a("2877")),p=Object(h["a"])(d,e,s,!1,null,"545fa7ad",null);o["default"]=p.exports},7589:function(t,o,a){},"76a3":function(t,o,a){"use strict";var e=a("b0af"),s=a.n(e);s.a},ac0c:function(t,o,a){"use strict";a.r(o);var e=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("section",{staticClass:"layout"},[a("div",{staticClass:"sub-container"},[a("div",{staticClass:"sub",style:{top:t.y+"px"}},[a("img",{attrs:{src:"/logos/Homwest.png"}}),a("img",{attrs:{src:"/logos/kedr_logo.png"}}),a("img",{attrs:{src:"/logos/Logo_SteelArt.png"}}),a("img",{attrs:{src:"/logos/logo.png"}}),a("img",{attrs:{src:"/logos/logo_bastion.png"}})])]),a("CategoryChooseComponent",{staticClass:"category-choose-component",attrs:{data:t.categories},on:{onCategoryChoose:t.onCategoryChoose,onCategoryExpand:t.onCategoryExpand}}),a("div",{staticClass:"sub-container"},[a("div",{staticClass:"sub",style:{top:t.y+"px"}},[a("img",{attrs:{src:"/logos/MoDoors.png"}}),a("img",{attrs:{src:"/logos/Punto.png"}}),a("img",{attrs:{src:"/logos/somafix.png"}}),a("img",{attrs:{src:"/logos/mv_doors.png"}})])])],1)},s=[],n=(a("ac6a"),a("f499")),c=a.n(n),r=a("cebc"),i=a("2f62"),u=a("4ccc"),l=a("be12"),g=a("e5e2"),d=a("c2f7"),h={name:"CategoryChoose",components:{CategoryChooseComponent:d["a"]},data:function(){return{y:0}},methods:Object(r["a"])({},Object(i["b"])(g["a"].catalog,[u["a"].catalog.LOAD_CATEGORIES]),{onCategoryChoose:function(t){this.isComponent?this.$emit("choose",{category:t.id,subCategory:t.subId}):t.subId?this.$router.push({path:"/catalog/".concat(t.id,"/").concat(t.subId)}):this.$router.push({path:"/catalog/".concat(t.id)})},onCategoryExpand:function(t){this.isComponent||this.$store.commit(g["a"].catalog+"/"+l["a"].catalog.CHOOSE_CATEGORY,t)},handleScroll:function(){this.y=this.currentY()},currentY:function(){return(window.pageYOffset||document.documentElement.scrollTop)-(document.documentElement.clientTop||0)}}),computed:Object(r["a"])({},Object(i["c"])(g["a"].catalog,["categories"]),{rawCategories:function(){var t=JSON.parse(c()(this.categories));return t.forEach(function(t){t.isExpanded&&(t.isExpanded=!1)}),t}}),created:function(){0===this.categories.length&&this.loadCategories(),window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},p=h,m=(a("76a3"),a("2877")),f=Object(m["a"])(p,e,s,!1,null,"410f7b55",null);o["default"]=f.exports},b0af:function(t,o,a){},b91f:function(t,o,a){"use strict";var e=a("7589"),s=a.n(e);s.a}}]);
//# sourceMappingURL=catalog.8d7bc5ec.js.map