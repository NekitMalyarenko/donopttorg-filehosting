(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["adminNews"],{"1ca6":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"layout"})},n=[],s=(a("ac6a"),"Ну ты это... Заходи, есл.."),r={name:"AdminNewsEditor",data:function(){return{title:"",textData:[{type:"text",data:"test"}],aside:{isVisible:!1,y:-1,lastTarget:null},tools:{isVisible:!1,x:-1,y:-1}}},methods:{init:function(){var t=document.querySelector("article");0!==this.textData.length&&this.textData.forEach(function(e){var a;"text"===e.type&&(a=document.createElement("p"),a.innerText=e.data),t.appendChild(a)}),window.onclick=this.onClick},onKeyDown:function(t){switch(t.key){case"Backspace":this.onBackspace(t);break;default:this.isTextDataEmpty&&(t.target.querySelector("p").removeAttribute("class"),t.target.querySelector("p").removeAttribute("data-placeholder"));break}},onBackspace:function(t){if(1===t.target.innerText.length){t.preventDefault(),t.target.innerHTML="";var e=document.createElement("p");e.innerText="",e.innerHTML="<br>",e.setAttribute("class","empty"),e.setAttribute("data-placeholder",s),t.target.appendChild(e)}},onKeyUp:function(t){switch(t.key){default:"\n"===window.getSelection().getRangeAt(0).startContainer.innerText?(this.reCalculateAsidePos(),this.aside.isVisible=!0):this.aside.isVisible=!1;break}this.updateTextData(t.target)},updateTextData:function(t){this.textData=[];for(var e=t.querySelectorAll("p"),a=0;a<e.length;a++){var i=e[a];this.textData.push({type:"text",data:0===i.innerText.length?"\n":i.innerText})}},onClick:function(t){"P"!==t.target.tagName&&"ARTICLE"!==t.target.tagName||"\n"!==t.target.innerText?"I"!==t.target.tagName&&(this.aside.isVisible=!1,this.tools.isVisible=!1):(this.reCalculateAsidePos(),this.aside.isVisible=!0)},onMouseUp:function(t){},reCalculateAsidePos:function(){var t;window.getSelection()&&window.getSelection().getRangeAt(0)&&(document.querySelectorAll("article > p").length>1?(t=window.getSelection().getRangeAt(0).startContainer,"P"!==t.tagName&&(t=t.parentNode)):t=document.querySelectorAll("article > p")[0],this.aside.lastTarget=t,this.aside.y=t.getBoundingClientRect().y-document.getElementsByClassName("layout")[0].getBoundingClientRect().y)},titleInput:function(t){this.title=t.target.innerText,0===this.title.length?t.target.classList.add("empty"):t.target.classList.remove("empty")},showImageSelection:function(){document.getElementById("fileInput").click()},onImagesSelect:function(t){var e=this;if(console.log({event:t,files:t.target.files}),t.target.files&&t.target.files[0]){var a=new FileReader;a.onload=function(t){var a=document.createElement("section");a.setAttribute("class","image-figure"),a.setAttribute("contentEditable","false");var i=document.createElement("img");i.setAttribute("src",t.target.result),console.log({target:e.aside.lastTarget}),a.appendChild(i),document.querySelector("article").insertBefore(a,e.aside.lastTarget)},a.readAsDataURL(t.target.files[0])}}},computed:{isTextDataEmpty:function(){return 1===this.textData.length&&"\n"===this.textData[0].data}},mounted:function(){}},l=r,o=(a("f875"),a("2877")),c=Object(o["a"])(l,i,n,!1,null,null,null);e["default"]=c.exports},"2cfe":function(t,e,a){},f875:function(t,e,a){"use strict";var i=a("2cfe"),n=a.n(i);n.a}}]);
//# sourceMappingURL=adminNews.c682ec21.js.map