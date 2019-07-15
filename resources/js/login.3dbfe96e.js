(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"0c38":function(t,s,i){},3278:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"form"},[t._t("default")],2)},n=[],e={name:"Form"},r=e,o=(i("764b"),i("2877")),l=Object(o["a"])(r,a,n,!1,null,"271f0313",null);s["a"]=l.exports},"5d63":function(t,s,i){"use strict";var a=i("0c38"),n=i.n(a);n.a},"764b":function(t,s,i){"use strict";var a=i("7b92"),n=i.n(a);n.a},"7b58":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"md-input-container",class:{"not-valid":!t.isValid}},[i("section",{staticClass:"md-input",class:{"not-empty":!t.isEmpty}},[t.isTextArea?i("textarea",{attrs:{rows:"2",disabled:!t.isEditable},on:{input:t.onInput}}):i("input",{attrs:{type:"text",disabled:!t.isEditable},on:{input:t.onInput}}),i("span",{staticClass:"bar"}),i("label",[t._v(t._s(t.label))])])])},n=[],e={name:"MDInput",props:{label:{type:String,required:!0},isTextArea:{type:Boolean,default:!1}},data:function(){return{isEmpty:!0,isValid:!0,isEditable:!0,data:""}},methods:{onInput:function(t){var s=t.target.value.length;this.isEmpty=0===s,this.data=t.target.value,this.$emit("input")}}},r=e,o=(i("5d63"),i("2877")),l=Object(o["a"])(r,a,n,!1,null,"678effa7",null);s["a"]=l.exports},"7b92":function(t,s,i){},a55b:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"layout"},[t.isAuthorized?t._e():i("Form",[i("h1",{staticClass:"title"},[t._v("Вход")]),i("div",{staticClass:"item"},[i("MDInput",{ref:"login",attrs:{label:"Почта"},on:{input:t.onInput}})],1),i("div",{staticClass:"item"},[i("MDPasswordInput",{ref:"password",attrs:{label:"Пароль"},on:{input:t.onInput}})],1),t.isForbidden?i("div",{staticClass:"item"},[i("p",{staticClass:"error"},[t._v("Ваш аккаунт еще не авторизован. Свяжитесь с ДонОптТорг для выяснения деталей")])]):t._e(),0!==t.err.length?i("div",{staticClass:"item"},[i("p",{staticClass:"error"},[t._v(t._s(t.err))])]):t._e(),i("div",{staticClass:"item"},[i("router-link",{attrs:{to:{name:"register"}}},[t._v("регистрация")])],1),i("div",{staticClass:"item bottom-item"},[t.isAuthorizing?t._e():i("button",{on:{click:t.loginInit}},[t._v("Войти")]),t.isAuthorizing?i("LoadingSpinner"):t._e()],1)]),t.isAuthorized?i("Form",[i("h1",{staticClass:"title"},[t._v("Вы уже вошли в аккаунт")])]):t._e()],1)},n=[],e=(i("7514"),i("cebc")),r=i("2f62"),o=i("e5e2"),l=i("4ccc"),u=i("7b58"),c=i("d421"),d=i("6149"),p=i("e072"),h=i("3278"),f=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,m={name:"Login",components:{Form:h["a"],LoadingSpinner:p["a"],MDInput:u["a"],MDPasswordInput:c["a"]},data:function(){return{isAuthorized:!1,isAuthorizing:!1,isForbidden:!1,err:"",incorrectData:[]}},methods:Object(e["a"])({},Object(r["b"])(o["a"].user,[l["a"].user.LOGIN,l["a"].user.LOGOUT]),{onInput:function(){var t=this;if(this.$refs.login.isValid=!this.$refs.login.isEmpty,this.$refs.login.isValid&&(this.$refs.login.isValid=f.test(String(this.$refs.login.data).toLowerCase())),this.$refs.password.isValid=!this.$refs.password.isEmpty,this.err="",this.$refs.password.isValid){if(!this.$refs.login.isValid)return;var s=this.incorrectData.find(function(s){return s.login===t.$refs.login.data&&s.password===t.$refs.password.data});s?(this.err="Введен неверный логин или пароль.",this.$refs.login.isValid=!1,this.$refs.password.isValid=!1):this.$refs.password.data.length<7&&(this.err="Пароль должен состоят минимум из 7 знаков.",this.$refs.password.isValid=!1)}},loginInit:function(){var t=this;if(this.$refs.login.isValid&&this.$refs.password.isValid){var s=this.$refs.login.data,i=this.$refs.password.data;this.isAuthorizing=!0,this.login({login:s,password:i}).then(function(a){t.isAuthorizing=!1,200===a?t.$router.push({name:"categoryChoose"}):401===a?(t.incorrectData.push({login:s,password:i}),t.onInput()):403===a&&(t.isForbidden=!0)}).catch(function(s){t.isAuthorizing=!1,console.error({err:s}),t.err="Произошла ошибка на сервере. Попробуйте позже."})}}}),computed:{isFormValid:function(){return!(!this.$refs.login||!this.$refs.password)&&(this.$refs.login.isValid&&this.$refs.password.isValid)}},mounted:function(){this.isAuthorized=d["a"].has(),this.onInput()}},g=m,b=(i("e4c2"),i("2877")),v=Object(b["a"])(g,a,n,!1,null,"38581ad2",null);s["default"]=v.exports},b1c6:function(t,s,i){"use strict";var a=i("dade"),n=i.n(a);n.a},d421:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"md-input-container",class:{"not-valid":!t.isValid}},[i("section",{staticClass:"md-input",class:{"not-empty":!t.isEmpty}},[i("input",{attrs:{type:t.isShown?"text":"password",disabled:!t.isEditable},on:{input:t.onInput}}),t.isEmpty?t._e():i("img",{attrs:{src:t.isShown?"/svgs/eye-slash.svg":"/svgs/eye.svg"},on:{click:function(s){t.isShown=!t.isShown}}}),i("span",{staticClass:"bar"}),i("label",[t._v(t._s(t.label))])])])},n=[],e={name:"MDPasswordInput",props:{label:{type:String,required:!0},isShownProp:{type:Boolean,default:!1}},data:function(){return{isEmpty:!0,isValid:!0,isShown:!1,isEditable:!0,data:""}},methods:{onInput:function(t){var s=t.target.value.length;this.isEmpty=0===s,this.data=t.target.value,this.$emit("input")}},mounted:function(){this.isShown=this.isShownProp}},r=e,o=(i("b1c6"),i("2877")),l=Object(o["a"])(r,a,n,!1,null,"44ad3ae4",null);s["a"]=l.exports},dade:function(t,s,i){},e4c2:function(t,s,i){"use strict";var a=i("fc4e"),n=i.n(a);n.a},fc4e:function(t,s,i){}}]);
//# sourceMappingURL=login.3dbfe96e.js.map