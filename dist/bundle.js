(()=>{"use strict";function e(e){let t=c.value;a.value=t+e,c.value="",c.placeholder=""}function t(e){let t=Number(c.value);return a.value=t+"^"+e,Math.pow(t,e)}function u(e){if(!c.value)return"";let t=Number(c.value);return a.value=e<=2?"√"+t:e+"√"+t,Math.pow(t,1/e)}function r(e,t){return 0===secondNumber?"division by zero":e/t}function n(e){switch(e){case"memoryClearButton":l="";break;case"memoryReadButton":l&&(c.value=l);break;case"memoryDivButton":c.value&&(l-=c.value);break;case"memoryAddButton":c.value&&(l+=c.value);break;default:return}}console.log("Hello maxon");let l="";const c=document.querySelector(".result"),a=document.querySelector(".archiv"),o=document.querySelectorAll(".btn-numb"),v=document.querySelector("#clearButton"),i=document.querySelector("#addButton"),d=document.querySelector("#subButton"),m=document.querySelector("#mulButton"),s=document.querySelector("#divButton"),y=document.querySelector("#equalButton"),f=document.querySelector("#backspaceButton"),k=document.querySelector("#squareButton"),b=document.querySelector("#cubeButton"),q=document.querySelector("#oneDivByNumberButton"),B=document.querySelector("#expButton"),S=document.querySelector("#percentButton"),E=document.querySelector("#squareRootButton"),L=document.querySelector("#cubeRootButton"),h=document.querySelector("#numRootButton"),p=document.querySelector("#expByPowerButton"),g=document.querySelector("#lnButton"),N=document.querySelector("#logButton"),w=document.querySelectorAll(".memory"),M=document.querySelector("#numByPowerButton");for(let e of o)e.addEventListener("click",(function(e){let t=e.target.value;c.value+=t}));for(let e of w)e.addEventListener("click",(e=>n(e.target.id)));g.addEventListener("click",(()=>{c.value=function(){if(!c.value||"ln by zero"===c.value)return"";let e=c.value;return document.querySelector(".archiv").value="ln("+e+")","0"===e?"ln by zero":Math.log(e)}()})),N.addEventListener("click",(()=>{c.value=function(){if(!c.value||"log by zero"===c.value)return"";let e=c.value;return document.querySelector(".archiv").value="log10("+e+")","0"===e?"log by zero":Math.log10(e)}()})),p.addEventListener("click",(()=>{c.value=function(){if(!c.value)return"";let e=c.value;return document.querySelector(".archiv").value="exp("+e+")",Math.exp(e)}()})),E.addEventListener("click",(()=>{c.value=u(2)})),L.addEventListener("click",(()=>{c.value=u(3)})),h.addEventListener("click",(function(){if(!c.value)return;let e=c.value;a.value=e+"√",c.placeholder="",c.value=""})),M.addEventListener("click",(function(){if(!c.value)return;let e=c.value;a.value=e+"^",c.value="",c.placeholder=""})),S.addEventListener("click",(()=>{c.value=function(){if(!c.value)return"";let e=Number(c.value);return a.value=e+"%",e/100}()})),k.addEventListener("click",(()=>{c.value=t(2)})),b.addEventListener("click",(()=>{c.value=t(3)})),q.addEventListener("click",(()=>{c.value=function(){if(!c.value)return"";let e=Number(c.value);return a.value="1/"+e,0===e?"division by zero":Number(1/e)}()})),B.addEventListener("click",(()=>{c.value=Math.exp(1)})),v.addEventListener("click",(function(){c.value="",a.value="",c.placeholder="0"})),f.addEventListener("click",(function(){let e=c.value.slice(0,-1);c.value=e})),i.addEventListener("click",(t=>{e(t.target.value)})),d.addEventListener("click",(t=>{e(t.target.value)})),m.addEventListener("click",(t=>{e(t.currentTarget.value)})),s.addEventListener("click",(t=>{e(t.currentTarget.value)})),y.addEventListener("click",(function(){let e;if(!a.value)return;let t=a.value.slice(-1),u=Number(a.value.slice(0,-1)),n=Number(c.value);switch(t){case"+":e=u+n;break;case"-":e=u-n;break;case"*":e=function(e,t){return e*t}(u,n);break;case"/":e=r(u,n);break;case"^":l=u,o=n,e=Math.pow(l,o);break;case"√":e=function(e,t){return Math.pow(e,1/t)}(u,n);break;default:return}var l,o;a.value+=n,c.value=e}))})();