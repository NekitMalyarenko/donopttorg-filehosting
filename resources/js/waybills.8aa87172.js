(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["waybills"],{"0043":function(t,e,i){"use strict";i.d(e,"a",function(){return a});var n=i("365c"),a={getWaybills:function(t){return n["a"].protectedPost("/waybills/getWaybills",{itemsPerPage:t})},getMoreWaybills:function(t,e){return n["a"].protectedPost("/waybills/getMoreWaybills",{lastId:t,itemsPerPage:e})},getExtendedWaybill:function(t){return n["a"].protectedPost("/waybills/getExtendedWaybill",{waybillId:t})},updateWaybill:function(t,e,i){return n["a"].protectedPost("/waybills/updateWaybill",{waybillId:t,comment:e,products:i})},deleteWaybill:function(t){return n["a"].protectedPost("/waybills/deleteWaybill",{waybillId:t})}}},"06cf":function(t,e,i){},"0c38":function(t,e,i){},"13f9":function(t,e,i){"use strict";var n=i("06cf"),a=i.n(n);a.a},"1af6":function(t,e,i){var n=i("63b6");n(n.S,"Array",{isArray:i("9003")})},"20fd":function(t,e,i){"use strict";var n=i("d9f6"),a=i("aebd");t.exports=function(t,e,i){e in t?n.f(t,e,a(0,i)):t[e]=i}},4805:function(t,e,i){"use strict";var n=i("ea9e"),a=i.n(n);a.a},5176:function(t,e,i){t.exports=i("51b6")},"51b6":function(t,e,i){i("a3c3"),t.exports=i("584a").Object.assign},"549b":function(t,e,i){"use strict";var n=i("d864"),a=i("63b6"),s=i("241e"),r=i("b0dc"),o=i("3702"),l=i("b447"),c=i("20fd"),u=i("7cd6");a(a.S+a.F*!i("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var e,i,a,d,f=s(t),b="function"==typeof this?this:Array,v=arguments.length,y=v>1?arguments[1]:void 0,h=void 0!==y,p=0,m=u(f);if(h&&(y=n(y,v>2?arguments[2]:void 0,2)),void 0==m||b==Array&&o(m))for(e=l(f.length),i=new b(e);e>p;p++)c(i,p,h?y(f[p],p):f[p]);else for(d=m.call(f),i=new b;!(a=d.next()).done;p++)c(i,p,h?r(d,y,[a.value,p],!0):a.value);return i.length=p,i}})},"54a1":function(t,e,i){i("6c1c"),i("1654"),t.exports=i("95d5")},"5d63":function(t,e,i){"use strict";var n=i("0c38"),a=i.n(n);a.a},6769:function(t,e,i){},7032:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{on:{click:function(e){return t.$emit("click",e)}}},[t._v("\n    "+t._s(t.text)+"\n")])},a=[],s={name:"MDRaisedButton",props:{text:{type:String,required:!0}}},r=s,o=(i("b032"),i("2877")),l=Object(o["a"])(r,n,a,!1,null,"4d453916",null);e["a"]=l.exports},"75fc":function(t,e,i){"use strict";var n=i("a745"),a=i.n(n);function s(t){if(a()(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}var r=i("774e"),o=i.n(r),l=i("c8bb"),c=i.n(l);function u(t){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return o()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){return s(t)||u(t)||d()}i.d(e,"a",function(){return f})},"774e":function(t,e,i){t.exports=i("d2d5")},"7b58":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"md-input-container",class:{"not-valid":!t.isValid}},[i("section",{staticClass:"md-input",class:{"not-empty":!t.isEmpty}},[t.isTextArea?i("textarea",{attrs:{rows:"2",disabled:!t.isEditable},on:{input:t.onInput}}):i("input",{attrs:{type:"text",disabled:!t.isEditable},on:{input:t.onInput}}),i("span",{staticClass:"bar"}),i("label",[t._v(t._s(t.label))])])])},a=[],s={name:"MDInput",props:{label:{type:String,required:!0},isTextArea:{type:Boolean,default:!1}},data:function(){return{isEmpty:!0,isValid:!0,isEditable:!0,data:""}},methods:{onInput:function(t){var e=t.target.value.length;this.isEmpty=0===e,this.data=t.target.value,this.$emit("input")}}},r=s,o=(i("5d63"),i("2877")),l=Object(o["a"])(r,n,a,!1,null,"678effa7",null);e["a"]=l.exports},"85fe":function(t,e,i){"use strict";(function(t){var i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=(function(){function t(t){this.value=t}function e(e){var i,n;function a(t,e){return new Promise(function(a,r){var o={key:t,arg:e,resolve:a,reject:r,next:null};n?n=n.next=o:(i=n=o,s(t,e))})}function s(i,n){try{var a=e[i](n),o=a.value;o instanceof t?Promise.resolve(o.value).then(function(t){s("next",t)},function(t){s("throw",t)}):r(a.done?"return":"normal",a.value)}catch(l){r("throw",l)}}function r(t,e){switch(t){case"return":i.resolve({value:e,done:!0});break;case"throw":i.reject(e);break;default:i.resolve({value:e,done:!1});break}i=i.next,i?s(i.key,i.arg):n=null}this._invoke=a,"function"!==typeof e.return&&(this.return=void 0)}"function"===typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}(),function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}),a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)};function r(t){var e=void 0;return e="function"===typeof t?{callback:t}:t,e}function o(t,e){var i=void 0,n=void 0,a=void 0,r=function(r){for(var o=arguments.length,l=Array(o>1?o-1:0),c=1;c<o;c++)l[c-1]=arguments[c];a=l,i&&r===n||(n=r,clearTimeout(i),i=setTimeout(function(){t.apply(void 0,[r].concat(s(a))),i=0},e))};return r._clear=function(){clearTimeout(i)},r}function l(t,e){if(t===e)return!0;if("object"===("undefined"===typeof t?"undefined":i(t))){for(var n in t)if(!l(t[n],e[n]))return!1;return!0}return!1}var c=function(){function t(e,i,a){n(this,t),this.el=e,this.observer=null,this.frozen=!1,this.createObserver(i,a)}return a(t,[{key:"createObserver",value:function(t,e){var i=this;this.observer&&this.destroyObserver(),this.frozen||(this.options=r(t),this.callback=this.options.callback,this.callback&&this.options.throttle&&(this.callback=o(this.callback,this.options.throttle)),this.oldResult=void 0,this.observer=new IntersectionObserver(function(t){var e=t[0];if(i.callback){var n=e.isIntersecting&&e.intersectionRatio>=i.threshold;if(n===i.oldResult)return;i.oldResult=n,i.callback(n,e),n&&i.options.once&&(i.frozen=!0,i.destroyObserver())}},this.options.intersection),e.context.$nextTick(function(){i.observer.observe(i.el)}))}},{key:"destroyObserver",value:function(){this.observer&&(this.observer.disconnect(),this.observer=null),this.callback&&this.callback._clear&&(this.callback._clear(),this.callback=null)}},{key:"threshold",get:function(){return this.options.intersection&&this.options.intersection.threshold||0}}]),t}();function u(t,e,i){var n=e.value;if("undefined"===typeof IntersectionObserver)console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");else{var a=new c(t,n,i);t._vue_visibilityState=a}}function d(t,e,i){var n=e.value,a=e.oldValue;if(!l(n,a)){var s=t._vue_visibilityState;s?s.createObserver(n,i):u(t,{value:n},i)}}function f(t){var e=t._vue_visibilityState;e&&(e.destroyObserver(),delete t._vue_visibilityState)}var b={bind:u,update:d,unbind:f};function v(t){t.directive("observe-visibility",b)}var y={version:"0.4.3",install:v},h=null;"undefined"!==typeof window?h=window.Vue:"undefined"!==typeof t&&(h=t.Vue),h&&h.use(y),e["a"]=y}).call(this,i("c8ba"))},9306:function(t,e,i){"use strict";var n=i("c3a1"),a=i("9aa9"),s=i("355d"),r=i("241e"),o=i("335c"),l=Object.assign;t.exports=!l||i("294c")(function(){var t={},e={},i=Symbol(),n="abcdefghijklmnopqrst";return t[i]=7,n.split("").forEach(function(t){e[t]=t}),7!=l({},t)[i]||Object.keys(l({},e)).join("")!=n})?function(t,e){var i=r(t),l=arguments.length,c=1,u=a.f,d=s.f;while(l>c){var f,b=o(arguments[c++]),v=u?n(b).concat(u(b)):n(b),y=v.length,h=0;while(y>h)d.call(b,f=v[h++])&&(i[f]=b[f])}return i}:l},"95d5":function(t,e,i){var n=i("40c3"),a=i("5168")("iterator"),s=i("481b");t.exports=i("584a").isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||s.hasOwnProperty(n(e))}},a3c3:function(t,e,i){var n=i("63b6");n(n.S+n.F,"Object",{assign:i("9306")})},a745:function(t,e,i){t.exports=i("f410")},b032:function(t,e,i){"use strict";var n=i("6769"),a=i.n(n);a.a},bd5e:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"layout"},[t.hasWaybills?i("section",[i("div",{staticClass:"list"},t._l(t.activeWaybills,function(e){return i("div",{key:e.id,staticClass:"item",on:{click:function(i){return t.itemClickHandler(e)}}},[i("div",{staticClass:"head"},[i("p",{staticClass:"title"},[t._v("#"+t._s(e.numberInvoice))]),e.deliveryDate?i("p",{staticClass:"delivery-date"},[t._v(t._s(e.deliveryDate))]):i("p",{staticClass:"delivery-date"},[t._v("Резерв")])]),i("div",{staticClass:"content"},[e.isPaid?i("p",{staticClass:"is-paid is-paid-true"},[t._v("Оплачен")]):t._e(),e.isPaid?t._e():i("p",{staticClass:"is-paid is-paid-false"},[t._v("Не оплачен")]),i("p",{staticClass:"total-price"},[t._v(t._s(e.totalPrice)+" ₴")])])])}),0),0!==t.inactiveWaybills.length?i("section",[i("p",{staticClass:"inner-list-text"},[t._v("Доставленные")]),i("div",{staticClass:"list inactive"},t._l(t.inactiveWaybills,function(e){return i("div",{key:e.id,staticClass:"item",on:{click:function(i){return t.itemClickHandler(e)}}},[i("div",{staticClass:"head"},[i("p",{staticClass:"title"},[t._v("#"+t._s(e.numberInvoice))]),e.deliveryDate?i("p",{staticClass:"delivery-date"},[t._v(t._s(e.deliveryDate))]):i("p",{staticClass:"delivery-date"},[t._v("Резерв")])]),i("div",{staticClass:"content"},[e.isPaid?i("p",{staticClass:"is-paid is-paid-true"},[t._v("Оплачен")]):t._e(),e.isPaid?t._e():i("p",{staticClass:"is-paid is-paid-false"},[t._v("Не оплачен")]),i("p",{staticClass:"total-price"},[t._v(t._s(e.totalPrice)+" ₴")])]),i("div",{staticClass:"blur"})])}),0)]):t._e()]):t._e(),i("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.onBottomReached,expression:"onBottomReached"}],staticClass:"bottom"},[t.isLoading?i("LoadingSpinner"):t._e()],1)])},a=[],s=i("75fc"),r=(i("ac6a"),i("96cf"),i("3b8d")),o=i("e072"),l={getCurrentDate:function(){return new Date},toCoolDate:function(t){var e=t.getMonth()+1;e<10&&(e="0"+e);var i=t.getDate();return i<10&&(i="0"+i),"".concat(i,".").concat(e,".").concat(t.getFullYear())},unixTimeStampToDate:function(t){return new Date(1e3*t)},isAfter:function(t,e){return t.getTime()>e.getTime()}},c=i("0043"),u=i("2b0e"),d=i("85fe");u["a"].use(d["a"]);var f=10,b={name:"Waybills",components:{LoadingSpinner:o["a"]},data:function(){return{waybills:[],hasMoreToLoad:!1,isLoading:!1}},methods:{loadWaybills:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,c["a"].getWaybills(f);case 3:if(e=t.sent,!e.ok){t.next=11;break}return t.next=7,e.json();case 7:i=t.sent,i.data.forEach(function(t){t.deliveryDateUnix&&(t.deliveryDate=l.toCoolDate(l.unixTimeStampToDate(t.deliveryDateUnix)))}),this.waybills=i.data,this.hasMoreToLoad=i.hasMoreToLoad;case 11:this.isLoading=!1;case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),loadMoreWaybills:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,c["a"].getMoreWaybills(this.lastWaybillId,f);case 3:if(e=t.sent,!e.ok){t.next=11;break}return t.next=7,e.json();case 7:i=t.sent,i.data.forEach(function(t){t.deliveryDateUnix&&(t.deliveryDate=l.toCoolDate(l.unixTimeStampToDate(t.deliveryDateUnix)))}),this.waybills=[].concat(Object(s["a"])(this.waybills),Object(s["a"])(i.data)),this.hasMoreToLoad=i.hasMoreToLoad;case 11:this.isLoading=!1;case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),itemClickHandler:function(t){this.$router.push({name:"waybill",params:{id:t.id}})},onBottomReached:function(t){var e=this;!this.isLoading||this.hasWaybills?!this.isLoading&&t&&this.hasWaybills&&this.hasMoreToLoad&&(this.hasMoreToLoad=!1,this.loadMoreWaybills()):setTimeout(function(){return e.onBottomReached(!0)},300)}},computed:{activeWaybills:function(){return this.prettyWaybills.filter(function(t){return!t.deliveryDateUnix||l.isAfter(l.unixTimeStampToDate(t.deliveryDateUnix),l.getCurrentDate())})},inactiveWaybills:function(){return this.prettyWaybills.filter(function(t){return!!t.deliveryDateUnix&&!l.isAfter(l.unixTimeStampToDate(t.deliveryDateUnix),l.getCurrentDate())})},hasWaybills:function(){return 0!==this.waybills.length},lastWaybillId:function(){return 0!==this.waybills.length?this.waybills[this.waybills.length-1].id:-1},prettyWaybills:function(){return this.waybills.map(function(t){return t.isActive=!t.deliveryDateUnix||l.isAfter(l.unixTimeStampToDate(t.deliveryDateUnix),l.getCurrentDate()),t})}},mounted:function(){this.hasMoreToLoad=!1,this.waybills=[],this.loadWaybills()}},v=b,y=(i("13f9"),i("2877")),h=Object(y["a"])(v,n,a,!1,null,"78bf82d9",null);e["default"]=h.exports},c8bb:function(t,e,i){t.exports=i("54a1")},cb72:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[t.hasWaybill?i("section",{staticClass:"layout-waybill"},[i("div",{staticClass:"header"},[i("p",{staticClass:"title"},[t._v("\n                #"+t._s(t.waybill.numberInvoice)+"\n            ")]),t.waybill.isEditable?i("section",{staticClass:"edit-wrapper"},[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.editing.isEditing,expression:"!editing.isEditing"}],on:{click:t.editHandler}},[t._v("редактировать")]),i("span",{directives:[{name:"show",rawName:"v-show",value:!t.editing.isEditing,expression:"!editing.isEditing"}],staticClass:"remove",on:{click:t.deleteWaybill}},[t._v("удалить")]),i("img",{directives:[{name:"show",rawName:"v-show",value:t.editing.isEditing,expression:"editing.isEditing"}],staticClass:"icon",attrs:{src:"/svgs/check.svg",alt:"сохранить изменения"},on:{click:t.updateWaybill}}),i("img",{directives:[{name:"show",rawName:"v-show",value:t.editing.isEditing,expression:"editing.isEditing"}],staticClass:"icon",attrs:{src:"/svgs/times.svg",alt:"отменить изменения"},on:{click:t.editHandler}})]):t._e(),t.waybill.deliveryDate?i("p",{staticClass:"delivery-date"},[t._v(t._s(t.waybill.deliveryDate))]):i("p",{staticClass:"delivery-date"},[t._v("Резерв")])]),i("div",{staticClass:"content"},[i("ProductsTable",{attrs:{data:t.waybill.products,"has-numbering":!0,"is-editable":t.editing.isEditing},on:{quantityChange:t.onQuantityChange,remove:t.onRemove}}),t.editing.isEditing?i("MDRaisedButton",{attrs:{text:"Добавить Товар"},on:{click:t.onAddButtonClick}}):t._e(),t.editing.isEditing?i("MDInput",{ref:"comment",staticClass:"comment-min",attrs:{label:"Комментарий"}}):t._e(),!t.editing.isEditing&&t.waybill.comment?i("p",{staticClass:"comment"},[t._v("Примечание: "+t._s(t.waybill.comment))]):t._e(),t.editing.isEditing||t.waybill.comment?t._e():i("p",{staticClass:"comment"},[t._v("Нету примечания")]),i("div",{staticClass:"sub-items"},[t.waybill.isPaid?i("p",{staticClass:"is-paid is-paid-true"},[t._v("Оплачен")]):t._e(),t.waybill.isPaid?t._e():i("p",{staticClass:"is-paid is-paid-false"},[t._v("Не оплачен")]),i("p",{staticClass:"total-price"},[t._v("Всего:\n                    "),t.editing.isEditing?t._e():i("span",{staticClass:"bold"},[t._v(t._s(t.waybill.totalPrice)+"₴")]),t.editing.isEditing?i("span",{staticClass:"bold"},[t._v(t._s(t.calculatedTotalPrice)+"₴")]):t._e()])])],1)]):t._e(),i("section",{staticClass:"center"},[t.isLoading?i("LoadingSpinner"):t._e()],1),t.hasWaybill||t.isLoading?t._e():i("p",{staticClass:"error"},[t._v("Накладная с номером: "+t._s(t.id)+". Не найдена")]),t.editing.isEditing?i("WaybillEditingDialog",{ref:"dialogWrapper",attrs:{"products-data":t.waybill.products}}):t._e()],1)},a=[],s=i("cebc"),r=(i("ac6a"),i("f499")),o=i.n(r),l=i("5176"),c=i.n(l),u=(i("55dd"),i("96cf"),i("3b8d")),d=i("2f62"),f=i("e5e2"),b=i("d777"),v=i("7032"),y=i("7b58"),h=i("e072"),p=i("0043"),m={name:"Waybill",components:{MDRaisedButton:v["a"],MDInput:y["a"],LoadingSpinner:h["a"],ProductsTable:b["a"],WaybillEditingDialog:function(){return Promise.all([i.e("chunk-381346e5"),i.e("chunk-45b67a66")]).then(i.bind(null,"8800"))}},data:function(){return{waybill:null,waybillCopy:null,isLoading:!1,editing:{isEditing:!1}}},methods:{loadWaybill:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,p["a"].getExtendedWaybill(this.id);case 3:if(e=t.sent,!e.ok){t.next=10;break}return t.next=7,e.json();case 7:i=t.sent,i.products.sort(function(t,e){return t.orderNumber-e.orderNumber}),this.waybill=i;case 10:this.isLoading=!1;case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),cancelAllChanges:function(){this.waybill=c()({},this.waybillCopy),this.waybillCopy=null},editHandler:function(){var t=this;this.editing.isEditing=!this.editing.isEditing,!1===this.editing.isEditing?this.cancelAllChanges():(this.waybillCopy=JSON.parse(o()(this.waybill)),this.waybill.products.forEach(function(t){t.isValid=!0}),setTimeout(function(){t.$refs.comment.data=t.waybill.comment},100))},updateWaybill:function(){var t=this,e=this.$refs.comment.data,i=[];this.waybill.products.forEach(function(t){i.push({id:t.id,boughtQuantity:t.boughtQuantity})}),p["a"].updateWaybill(this.waybill.id,e,i).then(function(){t.waybillCopy=null,t.waybill.totalPrice=t.calculatedTotalPrice,t.waybill.comment=e,t.editing.isEditing=!1}).catch(function(t){alert("Произошла ошибка"),console.error({e:t})})},deleteWaybill:function(){var t=this;p["a"].deleteWaybill(this.id).then(function(){t.$router.push({name:"waybills"})}).catch(function(t){console.error({e:t}),alert("Произошла ошибка")})},onAddButtonClick:function(){var t=this;this.$refs.dialogWrapper.$refs.dialog.show(),setTimeout(function(){t.$refs.dialogWrapper.$refs.searchInput.focus()},500)},onRemove:function(t){this.waybill.products[t]&&this.waybill.products.splice(t,1)},onQuantityChange:function(t){var e=t.item,i=t.newQuantity;e.boughtQuantity=i}},computed:Object(s["a"])({},Object(d["c"])(f["a"].user,["pricesType"]),{calculatedTotalPrice:function(){var t=this,e=0;return this.waybill.products.forEach(function(i){var n;n=t.pricesType in i?i[t.pricesType]:i.price,e+=i.boughtQuantity*n}),Math.round(1e3*e)/1e3},id:function(){return this.$route&&this.$route.params?this.$route.params.id:null},hasId:function(){return null!==this.id},hasWaybill:function(){return null!==this.waybill}}),mounted:function(){this.hasId&&this.loadWaybill()}},g=m,w=(i("4805"),i("2877")),_=Object(w["a"])(g,n,a,!1,null,"4b7a3b6f",null);e["default"]=_.exports},d2d5:function(t,e,i){i("1654"),i("549b"),t.exports=i("584a").Array.from},ea9e:function(t,e,i){},f410:function(t,e,i){i("1af6"),t.exports=i("584a").Array.isArray}}]);
//# sourceMappingURL=waybills.8aa87172.js.map