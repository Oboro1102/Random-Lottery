(function(e){function t(t){for(var n,i,l=t[0],s=t[1],c=t[2],u=0,b=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,l=1;l<o.length;l++){var s=o[l];0!==r[s]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={index:0},a=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=s;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("cd49")},"0bfe":function(e,t,o){var n=o("1321");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=o("499e").default;r("0b93e8a9",n,!0,{sourceMap:!1,shadowMode:!1})},1321:function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,".loading{position:absolute;top:0;left:0;z-index:5;display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:#687885;background-color:#fff;transition:all .3s ease-in-out}.loading i{transform:scale(var(--ggs,2))}",""]),e.exports=t},3085:function(e,t,o){var n=o("34d2");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=o("499e").default;r("078726ca",n,!0,{sourceMap:!1,shadowMode:!1})},"34d2":function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,".pool{position:relative;width:calc(50% - .625rem);height:100%;padding:1.25rem;margin-left:1.25rem;background-color:#fff;border-radius:1rem}.pool:first-child{margin-left:0}.pool__title{margin:0 0 1.25rem}.pool__list{list-style:none;margin:0;padding:0;max-height:calc(100% - 24px - 1.25rem);overflow-y:auto}.pool__list__item{display:flex;align-items:center;flex-wrap:wrap;margin-top:1.25rem}.pool__list__item:first-child{margin-top:0}.pool__list__item__cover{border-radius:99em;overflow:hidden;margin-right:1.25rem}.pool__list__item__info p{margin:0}",""]),e.exports=t},"38df":function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,'/*!\n * Bootstrap Reboot v4.4.1 (https://getbootstrap.com/)\n * Copyright 2011-2019 The Bootstrap Authors\n * Copyright 2011-2019 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n */*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex="-1"]:focus:not(:focus-visible){outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{font-style:normal;line-height:inherit}address,dl,ol,ul{margin-bottom:1rem}dl,ol,ul{margin-top:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]),a:not([href]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto}figure{margin:0 0 1rem}img{border-style:none}img,svg{vertical-align:middle}svg{overflow:hidden}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}',""]),e.exports=t},"4c04":function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,"#app{height:100%;padding:1.25rem}#app,main{width:100%}main{display:flex;align-items:flex-start;height:calc(100% - 7.5rem)}@media(max-width:576px){main{height:calc(100% - 15rem)}}.control{display:flex;align-items:center;flex-wrap:wrap;width:100%;height:2.5rem;margin-bottom:1.25rem}@media(max-width:576px){.control{height:7.5rem}}.control__item{margin-right:1.25rem}.control__item:last-of-type{margin-right:auto}.control__item label{margin-right:.625rem;margin-bottom:0;font-size:.85rem}.control__item label input{margin-left:.5em}",""]),e.exports=t},"502c":function(e,t,o){"use strict";o("b56e")},"837e":function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,".footer{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;width:100%;height:2.5rem;margin-top:1.25rem}@media(max-width:576px){.footer{height:5rem}}.footer__about{position:relative}.footer__about__popover{position:absolute;left:0;bottom:120%;min-width:200px;padding:.75em;font-size:.85rem;background-color:#fff;border-radius:1rem;border:1px solid #dbdbdb}.footer__copyright{margin-left:auto;padding:0 1.25rem;line-height:2.5rem;color:#000;font-size:.65rem;background-color:#fff;border-radius:99em}@media(max-width:576px){.footer__copyright{border-radius:1rem}}@media(max-width:320px){.footer__copyright{margin:auto auto 0;line-height:2.75}}.footer a{margin:0 .25em}",""]),e.exports=t},a24a:function(e,t,o){var n=o("b461");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=o("499e").default;r("10a9b7d8",n,!0,{sourceMap:!1,shadowMode:!1})},b461:function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,":focus{outline:none!important}body,html{width:100%;height:100%;margin:0;padding:0;font-size:16px;background-color:#ececec;line-height:1.75;-webkit-text-size-adjust:100%;overflow-x:hidden}body,h1,h2,h3,h4,h5,h6,html{font-family:Noto Sans TC,Helvetica Neue,PingFang TC,Heiti TC,Adobe 繁黑體 Std,AdobeFanHeitiStd-Bold,微軟正黑體,sans-serif}h1,h2,h3,h4,h5,h6{font-weight:700;line-height:1.5;margin-top:1em;margin-bottom:.6em}h1{font-size:2.5rem}h2{font-size:2rem}h3{font-size:1.7rem}h4{font-size:1.5rem}h5{font-size:1.2rem}h6{font-size:1rem}p{margin-top:1em;margin-bottom:1em}img{max-width:100%;height:auto}input[type=number]{max-width:3rem;height:2rem;border:none;border-radius:99em;text-align:center;-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.button{display:inline-flex;align-items:center;justify-content:center;padding:.25em .75em;background-color:#0063ff;border:1px solid #0063ff;border-radius:99em;cursor:pointer}.button,.button:hover{text-decoration:none;color:#fff}.button:hover{border:1px solid #d0104c;background-color:#d0104c}.button:disabled{color:#b3b3b3;background-color:transparent;border:1px solid #b3b3b3;cursor:not-allowed}.button--about{min-width:75px;height:2.5rem;font-size:.85rem;color:#000;background-color:#fff;border:1px solid #fff}.button--about:hover{color:#fff;border:1px solid #d0104c;background-color:#d0104c}.fade-enter-active,.fade-leave-active,.slideDown-enter-active,.slideDown-leave-active{transition:all .3s ease-in-out}.slideDown-enter-from,.slideDown-leave-to{transform:translateY(-10%)}.fade-enter-from,.fade-leave-to{opacity:0;transform:translateX(-10%)}",""]),e.exports=t},b56e:function(e,t,o){var n=o("837e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=o("499e").default;r("bb459f10",n,!0,{sourceMap:!1,shadowMode:!1})},bb43:function(e,t,o){"use strict";o("3085")},cd49:function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r=(o("d434"),o("a24a"),{class:"control"}),a={class:"control__item"},i=Object(n["h"])(" 抽籤總數 "),l={class:"control__item"},s=Object(n["h"])(" 抽獎次數 ");function c(e,t,o,c,d,u){var b=Object(n["o"])("Loading"),p=Object(n["o"])("Pool"),f=Object(n["o"])("Footer");return Object(n["k"])(),Object(n["f"])(n["a"],null,[Object(n["i"])("div",r,[Object(n["i"])("div",a,[Object(n["i"])("label",null,[i,Object(n["s"])(Object(n["i"])("input",{type:"number",name:"drawFrequency","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.drawAmount=t}),min:"2",max:"25",disabled:e.drawData.length>1},null,8,["disabled"]),[[n["q"],e.drawAmount]])]),Object(n["i"])("button",{type:"button",class:"button",disabled:e.drawData.length>0,onClick:t[2]||(t[2]=function(t){return e.setDrawData(e.drawAmount)})}," 載入資料 ",8,["disabled"])]),Object(n["i"])("div",l,[Object(n["i"])("label",null,[s,Object(n["s"])(Object(n["i"])("input",{type:"number",name:"drawFrequency","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.drawFrequency=t}),min:"1",max:e.drawData.length,disabled:e.drawResult.length>=1||e.drawData.length<1},null,8,["max","disabled"]),[[n["q"],e.drawFrequency]])]),Object(n["i"])("button",{type:"button",class:"button",disabled:e.drawResult.length==e.drawFrequency||e.drawData.length<1,onClick:t[4]||(t[4]=function(t){return e.drawOnce(e.drawData,e.drawFrequency)})}," 抽出得獎者 ",8,["disabled"])]),Object(n["i"])("button",{type:"button",class:"button",disabled:e.drawResult.length<1&&e.drawData.length<1,onClick:t[5]||(t[5]=function(){return e.restData&&e.restData.apply(e,arguments)})}," 重置 ",8,["disabled"])]),Object(n["i"])("main",null,[Object(n["i"])(p,{data:e.drawData,sectionName:"抽籤池"},{default:Object(n["r"])((function(){return[Object(n["i"])(b,{loading:e.drawDataLoading},null,8,["loading"])]})),_:1},8,["data"]),Object(n["i"])(p,{data:e.drawResult,sectionName:"得獎者"},{default:Object(n["r"])((function(){return[Object(n["i"])(b,{loading:e.drawResultLoading},null,8,["loading"])]})),_:1},8,["data"])]),Object(n["i"])(f)],64)}var d=o("bc3a"),u=o.n(d),b=u.a.create({baseURL:"https://randomuser.me/api/",headers:{"Content-Type":"application/json"}}),p=function(e){return b.get("?results="+"".concat(e))},f=(o("b0c0"),{class:"pool"}),m={class:"pool__title"},h={key:0},g={class:"pool__list__item__cover"},w={class:"pool__list__item__info"};function v(e,t,o,r,a,i){return Object(n["k"])(),Object(n["f"])("div",f,[Object(n["n"])(e.$slots,"default"),Object(n["i"])("h6",m,Object(n["p"])(e.sectionName),1),e.data.length<1?(Object(n["k"])(),Object(n["f"])("div",h,"無結果")):(Object(n["k"])(),Object(n["f"])(n["c"],{key:1,class:"pool__list",tag:"ul",name:"fade",mode:"out-in",appear:""},{default:Object(n["r"])((function(){return[(Object(n["k"])(!0),Object(n["f"])(n["a"],null,Object(n["m"])(e.data,(function(e){return Object(n["k"])(),Object(n["f"])("li",{class:"pool__list__item",key:e.login.uuid},[Object(n["i"])("div",g,[Object(n["i"])("img",{src:e.picture.medium,alt:e.name.first+" "+e.name.last,width:"72",height:"72"},null,8,["src","alt"])]),Object(n["i"])("div",w,[Object(n["i"])("p",null,Object(n["p"])(e.name.first)+" "+Object(n["p"])(e.name.last),1),Object(n["i"])("p",null,Object(n["p"])(e.phone),1)])])})),128))]})),_:1}))])}var y=Object(n["j"])({name:"Pool",props:{data:{type:Array,required:!0},sectionName:{type:String,required:!0}}});o("bb43");y.render=v;var j=y,O={key:0,class:"loading"},_=Object(n["i"])("i",{class:"gg-loadbar-alt"},null,-1);function x(e,t,o,r,a,i){return e.loading?(Object(n["k"])(),Object(n["f"])("div",O,[_])):Object(n["g"])("",!0)}var k=Object(n["j"])({name:"Loading",props:{loading:{type:Boolean}}});o("d52d");k.render=x;var z=k,M={class:"footer"},D={class:"footer__about"},S={key:0,class:"footer__about__popover"},F=Object(n["h"])(" 本系統採用"),N=Object(n["i"])("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue3",-1),C=Object(n["h"])("進行前端開發，隨機抽籤人員資料使用"),P=Object(n["i"])("a",{href:"https://randomuser.me/",target:"_blank"},"Random user generator",-1),q=Object(n["h"])("。 "),A={class:"footer__copyright"},L=Object(n["h"])(" © 2021"),R={key:0},T=Object(n["h"])(" Design & Coding by ツキノリュウ. ");function I(e,t,o,r,a,i){return Object(n["k"])(),Object(n["f"])("footer",M,[Object(n["i"])("div",D,[Object(n["i"])("button",{type:"button",class:"button button--about",onFocus:t[1]||(t[1]=function(t){return e.showPopover=!0}),onBlur:t[2]||(t[2]=function(t){return e.showPopover=!1})}," ABOUT ",32),Object(n["i"])(n["b"],{name:"slideDown",mode:"out-in",appear:""},{default:Object(n["r"])((function(){return[e.showPopover?(Object(n["k"])(),Object(n["f"])("div",S,[F,N,C,P,q])):Object(n["g"])("",!0)]})),_:1})]),Object(n["i"])("div",A,[L,2021!=e.thisYear?(Object(n["k"])(),Object(n["f"])("span",R," - "+Object(n["p"])(e.thisYear),1)):Object(n["g"])("",!0),T])])}var B=Object(n["j"])({name:"Footer",setup:function(){var e=Object(n["l"])(!1),t=Object(n["d"])((function(){return(new Date).getFullYear()}));return{showPopover:e,thisYear:t}}});o("502c");B.render=I;var E=B,U=Object(n["j"])({name:"App",components:{Pool:j,Loading:z,Footer:E},setup:function(){var e=Object(n["l"])([]),t=Object(n["l"])(!1),o=Object(n["l"])(2),r=Object(n["l"])([1]),a=Object(n["l"])([]),i=Object(n["l"])(!1);function l(o){var n=sessionStorage.getItem("drawData");return t.value=!0,null==n||JSON.parse(sessionStorage.drawData).length!=o?p(o).then((function(e){sessionStorage.setItem("drawData",JSON.stringify(e.data.results))})).then((function(){e.value=JSON.parse(sessionStorage.drawData)})).then((function(){t.value=!1})).catch((function(e){console.warn(e)})):(e.value=JSON.parse(n),t.value=!1),e.value}function s(e,t){var o=[];i.value=!0;for(var n=0;n<t;n++){var r=Math.floor(Math.random()*e.length);-1===o.indexOf(r)?(o.push(r),a.value.push(e[r])):n-=1}return i.value=!1,a.value}function c(){return e.value.length=0,a.value.length=0,e.value,a.value}return{drawData:e,drawDataLoading:t,drawAmount:o,drawResult:a,drawResultLoading:i,drawFrequency:r,setDrawData:l,drawOnce:s,restData:c}}});o("fcba");U.render=c;var J=U;Object(n["e"])(J).mount("#app")},d434:function(e,t,o){var n=o("38df");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=o("499e").default;r("7fd6d71a",n,!0,{sourceMap:!1,shadowMode:!1})},d52d:function(e,t,o){"use strict";o("0bfe")},e984:function(e,t,o){var n=o("4c04");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=o("499e").default;r("0349c8a1",n,!0,{sourceMap:!1,shadowMode:!1})},fcba:function(e,t,o){"use strict";o("e984")}});