(()=>{"use strict";const e=class{execute(){return"method is not implemended"}},t=class extends e{constructor(e,t){super(),this.num1=e,this.num2=t}execute(){return this.num1+this.num2}},r=class extends e{constructor(e,t){super(),this.num1=e,this.num2=t}execute(){return this.num1-this.num2}},u=class extends e{constructor(e,t){super(),this.num1=e,this.num2=t}execute(){return this.num1*this.num2}},s=class extends e{constructor(e,t){super(),this.num1=e,this.num2=t}execute(){return 0===this.num2?"division by zero":this.num1/this.num2}},n=class extends e{constructor(e,t){super(),this.num=e,this.pow=t}execute(){return this.num**this.pow}},i=class extends e{constructor(e,t){super(),this.num=e,this.pow=t}execute(){return this.num**(1/this.pow)}},c=class extends e{constructor(e){super(),this.leftNumber=1,this.rightNumber=e}execute(){return 0===this.rightNumber?"division by zero":Number(this.leftNumber/this.rightNumber)}},a=class extends e{constructor(e){super(),this.leftNumber=100,this.rightNumber=e}execute(){return this.rightNumber?this.rightNumber/this.leftNumber:""}},l=class extends e{constructor(e){super(),this.actualNumber=e}execute(){return""===this.actualNumber||"ln by zero"===this.actualNumber?"":"0"===this.actualNumber?"ln by zero":Math.log(this.actualNumber)}},o=class extends e{constructor(e){super(),this.actualNumber=e}execute(){return""===this.actualNumber||"ln by zero"===this.actualNumber?"":"0"===this.actualNumber?"ln by zero":Math.log10(this.actualNumber)}},h=class extends e{constructor(e){super(),this.power=e}execute(){return this.power?(document.querySelector(".archiv").value="exp("+this.power+")",2.718281828459045**this.power):""}},m=class extends e{constructor(){super()}execute(){return 2.718281828459045}},d=function(e){switch(e){case"+":return t;case"-":return r;case"*":return u;case"/":return s;case"^":return n;case"√":return i;case"1/x":return c;case"%":return a;case"ln":return l;case"log":return o;case"exp":return h;case"e":return m;default:return"operation in not found"}},v=document.querySelector(".result"),b=document.querySelector(".archiv"),p=new class{constructor(e,t){this.input=e,this.archiv=t}render(e,t,r){void 0!==e&&(this.input.value=e),void 0!==t&&(this.archiv.value=t),void 0!==r&&(this.input.placeholder=r)}addNumber(e){this.input.value+=e}getSignAndValues(){const e=this.archiv.value.slice(-1);return[Number(this.archiv.value.slice(0,-1)),e,Number(this.input.value)]}getButton(e){return e.classList.contains("btn")?e:e.parentNode}getPowArchivValue(e,t,r){return"^"===e.value?t+e.value+r:r+e.value+t}getArchivValue(e,t){return"%"===e.value?t+e.value:"ln"===e.value?"ln("+t+")":"log"===e.value?"log("+t+")":"1/x"===e.value?"1/"+t:void 0}}(v,b),x=new class{constructor(e){this.memory=e}read(){return this.memory}clear(){this.memory=""}writeAdd(e){this.memory=Number(this.memory)+Number(e)}writeSub(e){this.memory-=e}}(""),g=document.querySelector(".buttons");g.addEventListener("click",(()=>{"division by zero"===v.value&&document.querySelectorAll(".btn").forEach((e=>{"clearButton"!==e.id&&e.setAttribute("disabled",!0)}))})),g.addEventListener("click",(({target:e})=>{const t=p.getButton(e);if(t.classList.contains("btn-numb")&&p.addNumber(t.value),t.classList.contains("simpleOperation"))if(b.value)if(String(b.value).match(/[\d\.\,]+/g).length>1)p.render("",v.value+t.value);else{const[e,r,u]=p.getSignAndValues();p.render("",new(d(r))(e,u).execute()+t.value)}else{const e=v.value;p.render("",e+t.value,"")}if(t.classList.contains("root-pow")){if(!v.value)return;p.render("",v.value+`${t.value}`,"")}if(t.classList.contains("hardOper"))if(t.hasAttribute("pow")){const e=t.getAttribute("pow"),r=p.getPowArchivValue(t,v.value,e);p.render(new(d(t.value))(v.value,e).execute(),r)}else{const e=p.getArchivValue(t,v.value);p.render(new(d(t.value))(v.value).execute(),e)}if(t.classList.contains("clear")&&(p.render("","","0"),document.querySelectorAll(".btn").forEach((e=>{e.removeAttribute("disabled")}))),t.classList.contains("backspace")&&(""===v.value.slice(0,-1)?p.render(0):p.render(v.value.slice(0,-1))),t.classList.contains("equal")){if(!b.value)return;if(1!==String(b.value).match(/[\d\.\,]+/g).length)return;{const[e,t,r]=p.getSignAndValues(),u=new(d(t))(e,r).execute();p.render(u,b.value+=r)}}t.classList.contains("memory")&&("memoryClearButton"===t.id&&x.clear(),"memoryAddButton"===t.id&&x.writeAdd(v.value),"memoryDivButton"===t.id&&x.writeSub(v.value),"memoryReadButton"===t.id&&p.render(x.read()))}))})();