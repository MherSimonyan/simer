(this.webpackJsonpreactlearn=this.webpackJsonpreactlearn||[]).push([[0],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l),s=(a(65),a(66),a(49)),i=a(50),m=a(58),u=a(51),o=a(59),E=(a(67),a(12)),v=a(10),p=a(6),g=a(14),f=a(53),b=a(28);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N={name:"Mher",lastName:"Simonyan",message:null},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WRITE_MESSAGE":return h({},e,{message:t.message});default:return e}};function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j={name:"",lastName:"",email:"",htmlLevel:0,cssLevel:0,jsLevel:0},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_NAME":return y({},e,{name:t.name});case"CHANGE_LAST_NAME":return y({},e,{lastName:t.lastName});case"CHANGE_EMAIL":return y({},e,{email:t.email});case"CHANGE_HTML_LEVEL":return y({},e,{htmlLevel:t.htmlLevel});case"CHANGE_CSS_LEVEL":return y({},e,{cssLevel:t.cssLevel});case"CHANGE_JS_LEVEL":return y({},e,{jsLevel:t.jsLevel});default:return e}},S=a(149),w=Object(v.c)({mainPage:L,CVPage:C,form:S.a}),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.d,k=Object(v.e)(w,_(Object(v.a)(f.a)));window.store=k;var P=k,M=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,e.message),r.a.createElement("input",{type:"text",value:e.message||"",onChange:function(t){e.writeMessage(t.target.value)}}))},A=Object(g.b)((function(e){return{message:e.mainPage.message}}),(function(e){return{writeMessage:function(t){e(function(e){return{type:"WRITE_MESSAGE",message:e}}(t))}}}))((function(e){return r.a.createElement(M,{message:e.message,writeMessage:e.writeMessage})})),V=a(56),H=a.n(V),G=function(e){return Object(n.useEffect)((function(){var e=document.getElementById("bars"),t=document.querySelector(".dropmenu");e.addEventListener("click",(function(){t.classList.toggle("active"),e.classList.toggle("rotated")}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"title col-3"},r.a.createElement("h1",{id:"nameOfSite"},"Simer")),r.a.createElement("div",{className:"navigation col-9"},r.a.createElement("nav",null,r.a.createElement("ul",{className:"menu"},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/mainpage"},"Main")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/services"},"Services")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/makeCV"},"Make a CV")),r.a.createElement("li",{id:"bars"},r.a.createElement("img",{src:H.a,alt:"bars"}))))))),r.a.createElement("ul",{className:"dropmenu"},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/mainpage"},"Main")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/services"},"Services")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/makeCV"},"Make a CV"))))},I=function(e){var t=function(t,a){switch(a){case"name":t.target.value.length<=20&&e.setName(t.target.value);break;case"lastName":t.target.value.length<=20&&e.setLastName(t.target.value);break;case"email":t.target.value.length<=30&&e.setEmail(t.target.value);break;case"html":+t.target.value<=100&&e.setHTML(+t.target.value);break;case"css":+t.target.value<=100&&e.setCSS(+t.target.value);break;case"js":+t.target.value<=100&&e.setJS(+t.target.value);break;default:return}};return r.a.createElement("form",{onSubmit:function(t){!function(e,t){e.preventDefault(),alert(t)}(t,JSON.stringify({name:e.name,lastName:e.lastName,email:e.email,htmlLevel:e.htmlLevel,cssLevel:e.cssLevel,jsLevel:e.jsLevel},null,2))}},r.a.createElement("div",{className:"about"},r.a.createElement("input",{type:"text",placeholder:"Name",value:e.name,onChange:function(e){return t(e,"name")},className:"aboutInput"}),r.a.createElement("input",{type:"text",placeholder:"LastName",value:e.lastName,onChange:function(e){return t(e,"lastName")},className:"aboutInput"}),r.a.createElement("input",{type:"text",placeholder:"Email",value:e.email,onChange:function(e){return t(e,"email")},className:"aboutInput"})),r.a.createElement("div",{className:"skills"},r.a.createElement("div",{className:"skillRatings"},r.a.createElement("p",{className:"description"},"HTML Level"),r.a.createElement("div",null),r.a.createElement("div",{style:{width:80*e.htmlLevel/100+"%"}}),r.a.createElement("input",{type:"text",value:e.htmlLevel,onChange:function(e){return t(e,"html")},className:"skillInput"})," %"),r.a.createElement("div",{className:"skillRatings"},r.a.createElement("p",{className:"description"},"CSS Level"),r.a.createElement("div",null),r.a.createElement("div",{style:{width:80*e.cssLevel/100+"%"}}),r.a.createElement("input",{type:"text",value:e.cssLevel,onChange:function(e){return t(e,"css")},className:"skillInput"})," %"),r.a.createElement("div",{className:"skillRatings"},r.a.createElement("p",{className:"description"},"JS Level"),r.a.createElement("div",null),r.a.createElement("div",{style:{width:80*e.jsLevel/100+"%"}}),r.a.createElement("input",{type:"text",value:e.jsLevel,onChange:function(e){return t(e,"js")},className:"skillInput"})," %")),r.a.createElement("button",{className:"submit btn btn-outline-success"},"SEND"))},D=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Specify your skills")),r.a.createElement(I,e))},T=Object(g.b)((function(e){return{name:e.CVPage.name,lastName:e.CVPage.lastName,email:e.CVPage.email,htmlLevel:e.CVPage.htmlLevel,cssLevel:e.CVPage.cssLevel,jsLevel:e.CVPage.jsLevel}}),(function(e){return{setName:function(t){e(function(e){return{type:"CHANGE_NAME",name:e}}(t))},setLastName:function(t){e(function(e){return{type:"CHANGE_LAST_NAME",lastName:e}}(t))},setEmail:function(t){e(function(e){return{type:"CHANGE_EMAIL",email:e}}(t))},setHTML:function(t){e(function(e){return{type:"CHANGE_HTML_LEVEL",htmlLevel:e}}(t))},setCSS:function(t){e(function(e){return{type:"CHANGE_CSS_LEVEL",cssLevel:e}}(t))},setJS:function(t){e(function(e){return{type:"CHANGE_JS_LEVEL",jsLevel:e}}(t))}}}))((function(e){return r.a.createElement(D,e)})),x=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement(G,null)),r.a.createElement("div",{className:"content container"},r.a.createElement(E.a,{path:"/mainpage",render:function(){return r.a.createElement(A,null)}}),r.a.createElement(E.a,{path:"/makeCV",render:function(){return r.a.createElement(T,null)}})))}}]),t}(r.a.Component),J=Object(v.d)(E.e)(x),R=function(e){return r.a.createElement(p.a,null,r.a.createElement(g.a,{store:P},r.a.createElement(J,Object.assign({},e,{name:"Hrant"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},56:function(e,t,a){e.exports=a.p+"static/media/bars-solid.bdcaa185.svg"},60:function(e,t,a){e.exports=a(147)},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.3be467c3.chunk.js.map