(()=>{var e={672:e=>{function t(e){let t=i.value;d.value=t+e,i.value="",i.placeholder=""}function u(e){let t=Number(i.value);return d.value=t+"^"+e,Math.pow(t,e)}function r(e){if(!i.value)return"";let t=Number(i.value);return d.value=e<=2?"√"+t:e+"√"+t,Math.pow(t,1/e)}function n(e,t){return e+t}function l(e,t){return e-t}function c(e,t){return e*t}function o(e,t){return 0===secondNumber?"division by zero":e/t}function a(e){switch(e){case"memoryClearButton":v="";break;case"memoryReadButton":v&&(i.value=v);break;case"memoryDivButton":i.value&&(v-=i.value);break;case"memoryAddButton":i.value&&(v+=i.value);break;default:return}}let v="";const i=document.querySelector(".result"),d=document.querySelector(".archiv"),m=document.querySelectorAll(".btn-numb"),s=document.querySelector("#clearButton"),y=document.querySelector("#addButton"),f=document.querySelector("#subButton"),b=document.querySelector("#mulButton"),k=document.querySelector("#divButton"),q=document.querySelector("#equalButton"),S=document.querySelector("#backspaceButton"),B=document.querySelector("#squareButton"),E=document.querySelector("#cubeButton"),L=document.querySelector("#oneDivByNumberButton"),p=document.querySelector("#expButton"),h=document.querySelector("#percentButton"),g=document.querySelector("#squareRootButton"),x=document.querySelector("#cubeRootButton"),M=document.querySelector("#numRootButton"),N=document.querySelector("#expByPowerButton"),w=document.querySelector("#lnButton"),z=document.querySelector("#logButton"),R=document.querySelectorAll(".memory"),A=document.querySelector("#numByPowerButton");for(let e of m)e.addEventListener("click",(function(e){let t=e.target.value;i.value+=t}));for(let e of R)e.addEventListener("click",(e=>a(e.target.id)));w.addEventListener("click",(()=>{i.value=function(){if(!i.value||"ln by zero"===i.value)return"";let e=i.value;return document.querySelector(".archiv").value="ln("+e+")","0"===e?"ln by zero":Math.log(e)}()})),z.addEventListener("click",(()=>{i.value=function(){if(!i.value||"log by zero"===i.value)return"";let e=i.value;return document.querySelector(".archiv").value="log10("+e+")","0"===e?"log by zero":Math.log10(e)}()})),N.addEventListener("click",(()=>{i.value=function(){if(!i.value)return"";let e=i.value;return document.querySelector(".archiv").value="exp("+e+")",Math.exp(e)}()})),g.addEventListener("click",(()=>{i.value=r(2)})),x.addEventListener("click",(()=>{i.value=r(3)})),M.addEventListener("click",(function(){if(!i.value)return;let e=i.value;d.value=e+"√",i.placeholder="",i.value=""})),A.addEventListener("click",(function(){if(!i.value)return;let e=i.value;d.value=e+"^",i.value="",i.placeholder=""})),h.addEventListener("click",(()=>{i.value=function(){if(!i.value)return"";let e=Number(i.value);return d.value=e+"%",e/100}()})),B.addEventListener("click",(()=>{i.value=u(2)})),E.addEventListener("click",(()=>{i.value=u(3)})),L.addEventListener("click",(()=>{i.value=function(){if(!i.value)return"";let e=Number(i.value);return d.value="1/"+e,0===e?"division by zero":Number(1/e)}()})),p.addEventListener("click",(()=>{i.value=Math.exp(1)})),s.addEventListener("click",(function(){i.value="",d.value="",i.placeholder="0"})),S.addEventListener("click",(function(){let e=i.value.slice(0,-1);i.value=e})),y.addEventListener("click",(e=>{t(e.target.value)})),f.addEventListener("click",(e=>{t(e.target.value)})),b.addEventListener("click",(e=>{t(e.currentTarget.value)})),k.addEventListener("click",(e=>{t(e.currentTarget.value)})),q.addEventListener("click",(function(){let e;if(!d.value)return;let t=d.value.slice(-1),u=Number(d.value.slice(0,-1)),r=Number(i.value);switch(t){case"+":e=n(u,r);break;case"-":e=l(u,r);break;case"*":e=c(u,r);break;case"/":e=o(u,r);break;case"^":a=u,v=r,e=Math.pow(a,v);break;case"√":e=function(e,t){return Math.pow(e,1/t)}(u,r);break;default:return}var a,v;d.value+=r,i.value=e})),e.exports={getSum:n,getSub:l,getMul:c,getDiv:o}}},t={};!function u(r){var n=t[r];if(void 0!==n)return n.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,u),l.exports}(672)})();