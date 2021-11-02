(()=>{var e={845:e=>{const t=document.querySelector(".result"),r=document.querySelector(".archiv"),u=document.querySelectorAll(".btn");e.exports={setSimpleMathOptions:function(e){let u=t.value;r.value=u+e,t.value="",t.placeholder=""},getNumberInPower:function(e){let u=Number(t.value);return r.value=u+"^"+e,Math.pow(u,e)},getOneDevidedByNumber:function(){if(!t.value)return"";let e=Number(t.value);return r.value="1/"+e,0===e?"division by zero":Number(1/e)},getNumberInRoot:function(e){if(!t.value)return"";let u=Number(t.value);return r.value=e<=2?"√"+u:e+"√"+u,Math.pow(u,1/e)},performNumByPower:function(){if(!t.value)return;let e=t.value;r.value=e+"^",t.value="",t.placeholder=""},performPercentOperation:function(){if(!t.value)return"";let e=Number(t.value);return r.value=e+"%",e/100},performNaturalLog:function(){if(!t.value||"ln by zero"===t.value)return"";let e=t.value;return document.querySelector(".archiv").value="ln("+e+")","0"===e?"ln by zero":Math.log(e)},performDecimalLog:function(){if(!t.value||"log by zero"===t.value)return"";let e=t.value;return document.querySelector(".archiv").value="log10("+e+")","0"===e?"log by zero":Math.log10(e)},performExpByPower:function(){if(!t.value)return"";let e=t.value;return document.querySelector(".archiv").value="exp("+e+")",Math.exp(e)},performNumRoot:function(){if(!t.value)return;let e=t.value;r.value=e+"√",t.placeholder="",t.value=""},performClearOperation:function(){t.value="",r.value="",t.placeholder="0";for(let e of u)e.removeAttribute("disabled")},performBackspaceOperation:function(){let e=t.value.slice(0,-1);t.value=e},setButtonsDisable:function(){if("division by zero"===t.value)for(let e of u)"clearButton"!==e.id&&e.setAttribute("disabled",!0)}}}},t={};function r(u){var n=t[u];if(void 0!==n)return n.exports;var o=t[u]={exports:{}};return e[u](o,o.exports,r),o.exports}(()=>{"use strict";var e=r(845);const t=class{execute(){return"method is not implemended"}},u=class extends t{constructor(e,t){super(),this.num1=e,this.num2=t}execute(){return this.num1+this.num2}},n=class extends t{constructor(e,t){super(),this.num1=e,this.num2=t}execute(){return this.num1-this.num2}},o=class extends t{constructor(e,t){super(),this.num1=e,this.num2=t}execute(){return this.num1*this.num2}},c=class extends t{constructor(e,t){super(),this.num1=e,this.num2=t}execute(){return 0===this.num2?"division by zero":this.num1/this.num2}},l=class extends t{constructor(e,t){super(),this.num=e,this.pow=t}execute(){return Math.pow(this.num,this.pow)}},a=class extends t{constructor(e,t){super(),this.num=e,this.pow=t}execute(){return Math.pow(this.num,1/this.pow)}};function i(e){switch(e){case"memoryClearButton":s="";break;case"memoryReadButton":s&&(m.value=s);break;case"memoryDivButton":m.value&&(s-=m.value);break;case"memoryAddButton":m.value&&(s+=m.value);break;default:return}}let s="";const m=document.querySelector(".result"),d=document.querySelector(".archiv"),v=document.querySelectorAll(".btn-numb"),p=document.querySelector("#clearButton"),f=document.querySelector("#addButton"),y=document.querySelector("#subButton"),h=document.querySelector("#mulButton"),b=document.querySelector("#divButton"),B=document.querySelector("#equalButton"),k=document.querySelector("#backspaceButton"),S=document.querySelector("#squareButton"),q=document.querySelector("#cubeButton"),x=document.querySelector("#oneDivByNumberButton"),L=document.querySelector("#expButton"),w=document.querySelector("#percentButton"),g=document.querySelector("#squareRootButton"),E=document.querySelector("#cubeRootButton"),N=document.querySelector("#numRootButton"),M=document.querySelector("#expByPowerButton"),O=document.querySelector("#lnButton"),P=document.querySelector("#logButton"),R=document.querySelectorAll(".memory"),D=document.querySelector("#numByPowerButton");for(let e of v)e.addEventListener("click",(function(e){let t=e.target.value;m.value+=t}));for(let e of R)e.addEventListener("click",(e=>i(e.target.id)));document.querySelector(".buttons").addEventListener("click",(()=>(0,e.setButtonsDisable)())),O.addEventListener("click",(()=>{m.value=(0,e.performNaturalLog)()})),P.addEventListener("click",(()=>{m.value=(0,e.performDecimalLog)()})),M.addEventListener("click",(()=>{m.value=(0,e.performExpByPower)()})),g.addEventListener("click",(()=>{m.value=(0,e.getNumberInRoot)(2)})),E.addEventListener("click",(()=>{m.value=(0,e.getNumberInRoot)(3)})),N.addEventListener("click",e.performNumRoot),D.addEventListener("click",e.performNumByPower),w.addEventListener("click",(()=>{m.value=(0,e.performPercentOperation)()})),S.addEventListener("click",(()=>{m.value=(0,e.getNumberInPower)(2)})),q.addEventListener("click",(()=>{m.value=(0,e.getNumberInPower)(3)})),x.addEventListener("click",(()=>{m.value=(0,e.getOneDevidedByNumber)()})),L.addEventListener("click",(()=>{m.value=Math.exp(1)})),p.addEventListener("click",e.performClearOperation),k.addEventListener("click",e.performBackspaceOperation),f.addEventListener("click",(t=>{(0,e.setSimpleMathOptions)(t.target.value)})),y.addEventListener("click",(t=>{(0,e.setSimpleMathOptions)(t.target.value)})),h.addEventListener("click",(t=>{(0,e.setSimpleMathOptions)(t.currentTarget.value)})),b.addEventListener("click",(t=>{(0,e.setSimpleMathOptions)(t.currentTarget.value)})),B.addEventListener("click",(function(){let e;if(!d.value)return;let t=d.value.slice(-1),r=Number(d.value.slice(0,-1)),i=Number(m.value);switch(t){case"+":e=new u(r,i).execute();break;case"-":e=new n(r,i).execute();break;case"*":e=new o(r,i).execute();break;case"/":e=new c(r,i).execute();break;case"^":e=new l(r,i).execute();break;case"√":e=new a(r,i).execute();break;default:return}d.value+=i,m.value=e}))})()})();