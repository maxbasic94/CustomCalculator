(()=>{"use strict";const e=class{execute(){return"method is not implemended"}},t=class extends e{constructor(e,t){super(),this.num1=e,this.num2=t}execute(){return this.num1+this.num2}},u=class extends e{constructor(e,t){super(),this.num1=e,this.num2=t}execute(){return this.num1-this.num2}},r=class extends e{constructor(e,t){super(),this.num1=e,this.num2=t}execute(){return this.num1*this.num2}},c=class extends e{constructor(e,t){super(),this.num1=e,this.num2=t}execute(){return 0===this.num2?"division by zero":this.num1/this.num2}},l=class extends e{constructor(e,t){super(),this.num=e,this.pow=t}execute(){return 2!==this.pow&&3!==this.pow||(document.querySelector(".archiv").value=this.num+"^"+this.pow),this.num**this.pow}},n=class extends e{constructor(e,t){super(),this.num=e,this.pow=t}execute(){return 2!==this.pow&&3!==this.pow||(document.querySelector(".archiv").value=this.pow+"√"+this.num),this.num**(1/this.pow)}},a=class extends e{constructor(e){super(),this.actualNumber=Number(e)}execute(){return document.querySelector(".archiv").value="1/"+this.actualNumber,0===this.actualNumber?"division by zero":Number(1/this.actualNumber)}},o=class extends e{constructor(e){super(),this.actualNumber=Number(e)}execute(){return document.querySelector(".archiv").value=this.actualNumber+"%",this.actualNumber?this.actualNumber/100:""}},s=class extends e{constructor(e){super(),this.actualNumber=Number(e)}execute(){return document.querySelector(".archiv").value="ln("+this.actualNumber+")",""===this.actualNumber||"ln by zero"===this.actualNumber?"":"0"===this.actualNumber?"ln by zero":Math.log(this.actualNumber)}},i=class extends e{constructor(e){super(),this.actualNumber=Number(e)}execute(){return document.querySelector(".archiv").value="log("+this.actualNumber+")",""===this.actualNumber||"ln by zero"===this.actualNumber?"":"0"===this.actualNumber?"ln by zero":Math.log10(this.actualNumber)}};let m=new class{constructor(e){this.memory=e}read(){return this.memory}clear(){this.memory=""}writeAdd(e){this.memory=Number(this.memory)+Number(e)}writeSub(e){this.memory-=e}}("");const d=document.querySelector(".result"),v=function(e){switch(e.id){case"memoryClearButton":m.clear();break;case"memoryAddButton":m.writeAdd(d.value);break;case"memoryDivButton":m.writeSub(d.value);break;case"memoryReadButton":d.value=m.read()}};function h(e,a,o){let s;switch(e){case"+":s=new t(a,o).execute();break;case"-":s=new u(a,o).execute();break;case"*":s=new r(a,o).execute();break;case"/":s=new c(a,o).execute();break;case"^":s=new l(a,o).execute();break;case"√":s=new n(a,o).execute();break;default:return}return s}const b=document.querySelector(".result"),y=document.querySelector(".archiv");for(let e of document.querySelectorAll(".btn-numb"))e.addEventListener("click",(e=>{let t=e.target.value;b.value+=t}));for(let e of document.querySelectorAll(".memory"))e.addEventListener("click",(()=>v(e)));for(let e of document.querySelectorAll(".simpleOperation"))e.addEventListener("click",(t=>{if(y.value){let t=String(y.value).match(/[\d\.\,]+/g);if(t.length>1)y.value=b.value+"+",b.value="";else{let u=Number(t[0]),r=Number(b.value),c=y.value.slice(-1);y.value=h(c,u,r)+e.value,b.value=""}}else{let t=b.value;y.value=t+e.value,b.value="",b.placeholder=""}}));document.querySelector(".buttons").addEventListener("click",(()=>{if("division by zero"===b.value)for(let e of document.querySelectorAll(".btn"))"clearButton"!==e.id&&e.setAttribute("disabled",!0)})),document.querySelector("#numRootButton").addEventListener("click",(()=>{if(!b.value)return;let e=b.value;y.value=e+"√",b.placeholder="",b.value=""})),document.querySelector("#numByPowerButton").addEventListener("click",(()=>{if(!b.value)return;let e=b.value;y.value=e+"^",b.value="",b.placeholder=""})),document.querySelector("#clearButton").addEventListener("click",(()=>{b.value="",y.value="",b.placeholder="0";for(let e of document.querySelectorAll(".btn"))e.removeAttribute("disabled")})),document.querySelector("#backspaceButton").addEventListener("click",(()=>{let e=b.value.slice(0,-1);b.value=e})),document.querySelector("#equalButton").addEventListener("click",(()=>{if(y.value&&1===String(y.value).match(/[\d\.\,]+/g).length){let e=y.value.slice(-1),t=Number(y.value.slice(0,-1)),u=Number(b.value),r=h(e,t,u);("^"!==e||2!==u&&3!==u)&&(y.value+=u),b.value=r}})),document.querySelector("#expButton").addEventListener("click",(()=>{b.value=2.718281828459045})),document.querySelector("#oneDivByNumberButton").addEventListener("click",(()=>{b.value=new a(b.value).execute()})),document.querySelector("#squareRootButton").addEventListener("click",(()=>{b.value=new n(b.value,2).execute()})),document.querySelector("#cubeRootButton").addEventListener("click",(()=>{b.value=new n(b.value,3).execute()})),document.querySelector("#squareButton").addEventListener("click",(()=>{b.value=new l(b.value,2).execute()})),document.querySelector("#cubeButton").addEventListener("click",(()=>{b.value=new l(b.value,3).execute()})),document.querySelector("#percentButton").addEventListener("click",(()=>{b.value=new o(b.value).execute()})),document.querySelector("#lnButton").addEventListener("click",(()=>{b.value=new s(b.value).execute()})),document.querySelector("#logButton").addEventListener("click",(()=>{b.value=new i(b.value).execute()})),document.querySelector("#expByPowerButton").addEventListener("click",(()=>{b.value=new ExpByPowerCommand(b.value).execute()}))})();