(()=>{function e(e){let t=document.querySelector(".result").value;document.querySelector(".archiv").value=t+e,document.querySelector(".result").value="",document.querySelector(".result").placeholder=""}function t(e){let t=Number(document.querySelector(".result").value);document.querySelector(".result").value=Math.pow(t,e),document.querySelector(".archiv").value=t+"^"+e}function u(e){if(!document.querySelector(".result").value)return;let t=Number(document.querySelector(".result").value);document.querySelector(".result").value=Math.pow(t,1/e),document.querySelector(".archiv").value=e<=2?"√"+t:e+"√"+t}function r(e){switch(e){case"memoryClearButton":c="";break;case"memoryReadButton":c?document.querySelector(".result").value=c:document.querySelector("#memoryReadButton").disabled=!0;break;case"memoryDivButton":document.querySelector(".result").value&&(c-=document.querySelector(".result").value);break;case"memoryAddButton":document.querySelector(".result").value&&(c+=document.querySelector(".result").value);break;default:return}}let c="";const l=document.querySelectorAll(".btn-numb"),o=document.querySelector("#clearButton"),n=document.querySelector("#addButton"),a=document.querySelector("#subButton"),d=document.querySelector("#mulButton"),m=document.querySelector("#divButton"),v=document.querySelector("#equalButton"),y=document.querySelector("#backspaceButton"),s=document.querySelector("#squareButton"),i=document.querySelector("#cubeButton"),q=document.querySelector("#oneDivByNumberButton"),S=document.querySelector("#expButton"),k=document.querySelector("#percentButton"),h=document.querySelector("#squareRootButton"),B=document.querySelector("#cubeRootButton"),b=document.querySelector("#numRootButton"),E=document.querySelector("#expByPowerButton"),L=document.querySelector("#lnButton"),f=document.querySelector("#logButton"),p=document.querySelectorAll(".memory");for(let e of l)e.addEventListener("click",(function(e){let t=e.target.value;document.querySelector(".result").value+=t}));for(let e of p)e.addEventListener("click",(e=>r(e.target.id)));L.addEventListener("click",(()=>{if(!document.querySelector(".result").value)return;let e=document.querySelector(".result").value;document.querySelector(".archiv").value="ln("+e+")",document.querySelector(".result").value=Math.log(e)})),f.addEventListener("click",(()=>{if(!document.querySelector(".result").value)return;let e=document.querySelector(".result").value;document.querySelector(".archiv").value="log10("+e+")",document.querySelector(".result").value=Math.log10(e)})),E.addEventListener("click",(()=>{if(!document.querySelector(".result").value)return;let e=document.querySelector(".result").value;document.querySelector(".archiv").value="exp("+e+")",document.querySelector(".result").value=Math.exp(e)})),h.addEventListener("click",(()=>u(2))),B.addEventListener("click",(()=>u(3))),b.addEventListener("click",(()=>{if(!document.querySelector(".result").value)return;let e=document.querySelector(".result").value;document.querySelector(".archiv").value=e+"√",document.querySelector(".result").value="",document.querySelector(".result").placeholder=""})),numByPowerButton.addEventListener("click",(()=>{if(!document.querySelector(".result").value)return;let e=document.querySelector(".result").value;document.querySelector(".archiv").value=e+"^",document.querySelector(".result").value="",document.querySelector(".result").placeholder=""})),k.addEventListener("click",(()=>{document.querySelector(".result").value&&(document.querySelector(".result").value/=100)})),s.addEventListener("click",(()=>t(2))),i.addEventListener("click",(()=>t(3))),q.addEventListener("click",(()=>function(){let e=Number(document.querySelector(".result").value);document.querySelector(".result").value=Number(1/e).toFixed(10),document.querySelector(".archiv").value="1/"+e}())),S.addEventListener("click",(()=>{document.querySelector(".result").value=Math.exp(1)})),o.addEventListener("click",(()=>{document.querySelector(".result").value="",document.querySelector(".archiv").value="",document.querySelector(".result").placeholder="0"})),y.addEventListener("click",(()=>{let e=document.querySelector(".result").value.slice(0,-1);document.querySelector(".result").value=e})),n.addEventListener("click",(t=>{e(t.target.value)})),a.addEventListener("click",(t=>{e(t.target.value)})),d.addEventListener("click",(t=>{e(t.currentTarget.value)})),m.addEventListener("click",(t=>{e(t.currentTarget.value)})),v.addEventListener("click",(()=>{let e;if(!document.querySelector(".archiv").value)return;let t=document.querySelector(".archiv").value.slice(-1),u=Number(document.querySelector(".archiv").value.slice(0,-1)),r=Number(document.querySelector(".result").value);switch(t){case"+":e=u+r;break;case"-":e=u-r;break;case"*":e=u*r;break;case"/":e=u/r;break;case"^":e=Math.pow(u,r);break;case"√":e=Math.pow(u,1/r);break;default:return}document.querySelector(".archiv").value+=r,document.querySelector(".result").value=e}))})();