(()=>{"use strict";let e=new class{constructor(e){this.memory=e}read(){return this.memory}clear(){this.memory=""}writeAdd(e){this.memory=Number(this.memory)+Number(e)}writeSub(e){this.memory-=e}}("");const t=document.querySelector(".result"),u=class{execute(){return"method is not implemended"}},r=class extends u{constructor(e,t){super(),this.num1=e,this.num2=t}execute(){return this.num1+this.num2}},c=class extends u{constructor(e,t){super(),this.num1=e,this.num2=t}execute(){return this.num1-this.num2}},l=class extends u{constructor(e,t){super(),this.num1=e,this.num2=t}execute(){return this.num1*this.num2}},n=class extends u{constructor(e,t){super(),this.num1=e,this.num2=t}execute(){return 0===this.num2?"division by zero":this.num1/this.num2}},s=class extends u{constructor(e,t){super(),this.num=e,this.pow=t}execute(){return 2!==this.pow&&3!==this.pow||(document.querySelector(".archiv").value=this.num+"^"+this.pow),this.num**this.pow}},a=class extends u{constructor(e,t){super(),this.num=e,this.pow=t}execute(){return 2!==this.pow&&3!==this.pow||(document.querySelector(".archiv").value=this.pow+"√"+this.num),this.num**(1/this.pow)}},o=class extends u{constructor(e,t){super(),this.leftNumber=Number(e),this.rightNumber=Number(t)}execute(){return document.querySelector(".archiv").value=this.leftNumber+this.rightNumber,0===this.rightNumber?"division by zero":Number(this.leftNumber/this.rightNumber)}},i=class extends u{constructor(e,t){super(),this.leftNumber=e,this.rightNumber=Number(t)}execute(){return document.querySelector(".archiv").value=this.rightNumber+"%",this.rightNumber?this.rightNumber/this.leftNumber:""}},m=class extends u{constructor(e){super(),this.actualNumber=Number(e)}execute(){return document.querySelector(".archiv").value="ln("+this.actualNumber+")",""===this.actualNumber||"ln by zero"===this.actualNumber?"":"0"===this.actualNumber?"ln by zero":Math.log(this.actualNumber)}},d=class extends u{constructor(e){super(),this.actualNumber=Number(e)}execute(){return document.querySelector(".archiv").value="log("+this.actualNumber+")",""===this.actualNumber||"ln by zero"===this.actualNumber?"":"0"===this.actualNumber?"ln by zero":Math.log10(this.actualNumber)}},h=class extends u{constructor(e){super(),this.power=Number(e)}execute(){return this.power?(document.querySelector(".archiv").value="exp("+this.power+")",2.718281828459045**this.power):""}},v=function(e,t,u){switch(e){case"+":return new r(t,u).execute();case"-":return new c(t,u).execute();case"*":return new l(t,u).execute();case"/":return new n(t,u).execute();case"^":return new s(t,u).execute();case"√":return new a(t,u).execute();case"1/x":return new o(t,u).execute();case"%":return new i(t,u).execute();case"ln":return new m(t).execute();case"log":return new d(t).execute();case"exp":return new h(t).execute();default:return}},b=document.querySelector(".result"),y=document.querySelector(".archiv");document.querySelectorAll(".btn-numb").forEach((e=>e.addEventListener("click",(e=>{let t=e.target.value;b.value+=t})))),document.querySelectorAll(".memory").forEach((u=>u.addEventListener("click",(()=>function(u){switch(u.id){case"memoryClearButton":e.clear();break;case"memoryAddButton":e.writeAdd(t.value);break;case"memoryDivButton":e.writeSub(t.value);break;case"memoryReadButton":t.value=e.read()}}(u))))),document.querySelectorAll(".simpleOperation").forEach((e=>e.addEventListener("click",(()=>{if(y.value){let t=String(y.value).match(/[\d\.\,]+/g);if(t.length>1)y.value=b.value+"+",b.value="";else{let u=Number(t[0]),r=Number(b.value),c=y.value.slice(-1);y.value=v(c,u,r)+e.value,b.value=""}}else{let t=b.value;y.value=t+e.value,b.value="",b.placeholder=""}})))),document.querySelector(".buttons").addEventListener("click",(()=>{if("division by zero"===b.value)for(let e of document.querySelectorAll(".btn"))"clearButton"!==e.id&&e.setAttribute("disabled",!0)})),document.querySelector("#numRootButton").addEventListener("click",(()=>{if(!b.value)return;let e=b.value;y.value=e+"√",b.placeholder="",b.value=""})),document.querySelector("#numByPowerButton").addEventListener("click",(()=>{if(!b.value)return;let e=b.value;y.value=e+"^",b.value="",b.placeholder=""})),document.querySelector("#clearButton").addEventListener("click",(()=>{b.value="",y.value="",b.placeholder="0";for(let e of document.querySelectorAll(".btn"))e.removeAttribute("disabled")})),document.querySelector("#backspaceButton").addEventListener("click",(()=>{let e=b.value.slice(0,-1);b.value=""===e?0:e})),document.querySelector("#equalButton").addEventListener("click",(()=>{if(y.value&&1===String(y.value).match(/[\d\.\,]+/g).length){let e=y.value.slice(-1),t=Number(y.value.slice(0,-1)),u=Number(b.value),r=v(e,t,u);("^"!==e||2!==u&&3!==u)&&(y.value+=u),b.value=r}})),document.querySelector("#expButton").addEventListener("click",(()=>{b.value=2.718281828459045})),document.querySelector("#oneDivByNumberButton").addEventListener("click",(()=>{b.value=v("1/x",1,b.value)})),document.querySelector("#squareRootButton").addEventListener("click",(()=>{b.value=v("√",b.value,2)})),document.querySelector("#cubeRootButton").addEventListener("click",(()=>{b.value=v("√",b.value,3)})),document.querySelector("#squareButton").addEventListener("click",(()=>{b.value=v("^",b.value,2)})),document.querySelector("#cubeButton").addEventListener("click",(()=>{b.value=v("^",b.value,3)})),document.querySelector("#percentButton").addEventListener("click",(()=>{b.value=v("%",100,b.value)})),document.querySelector("#lnButton").addEventListener("click",(()=>{b.value=v("ln",b.value)})),document.querySelector("#logButton").addEventListener("click",(()=>{b.value=v("log",b.value)})),document.querySelector("#expByPowerButton").addEventListener("click",(()=>{b.value=v("exp",b.value)}))})();