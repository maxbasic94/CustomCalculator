(()=>{function e(e){let t=document.querySelector(".result").value;document.querySelector(".archiv").value=t+e,document.querySelector(".result").value="",document.querySelector(".result").placeholder=""}function t(e){let t=Number(document.querySelector(".result").value);document.querySelector(".result").value=Math.pow(t,e),document.querySelector(".archiv").value=t+"^"+e}function u(e){if(!document.querySelector(".result"))return;let t=Number(document.querySelector(".result").value);document.querySelector(".result").value=Math.pow(t,1/e),document.querySelector(".archiv").value=e<=2?"√"+t:e+"√"+t}const r=document.querySelectorAll(".btn-numb"),c=document.querySelector("#clearButton"),l=document.querySelector("#addButton"),o=document.querySelector("#subButton"),n=document.querySelector("#mulButton"),a=document.querySelector("#divButton"),d=document.querySelector("#equalButton"),v=document.querySelector("#backspaceButton"),m=document.querySelector("#squareButton"),i=document.querySelector("#cubeButton"),s=document.querySelector("#oneDivByNumberButton"),q=document.querySelector("#expButton"),y=document.querySelector("#percentButton"),S=document.querySelector("#squareRootButton"),k=document.querySelector("#cubeRootButton"),h=document.querySelector("#numRootButton");for(let e of r)e.addEventListener("click",(function(e){let t=e.target.value;document.querySelector(".result").value+=t}));S.addEventListener("click",(()=>u(2))),k.addEventListener("click",(()=>u(3))),h.addEventListener("click",(()=>{if(!document.querySelector(".result").value)return;let e=document.querySelector(".result").value;document.querySelector(".archiv").value=e+"√",document.querySelector(".result").value="",document.querySelector(".result").placeholder=""})),numByPowerButton.addEventListener("click",(()=>{if(!document.querySelector(".result"))return;let e=document.querySelector(".result").value;document.querySelector(".archiv").value=e+"^",document.querySelector(".result").value="",document.querySelector(".result").placeholder=""})),y.addEventListener("click",(()=>{document.querySelector(".result")&&(document.querySelector(".result").value/=100)})),m.addEventListener("click",(()=>t(2))),i.addEventListener("click",(()=>t(3))),s.addEventListener("click",(()=>function(){let e=Number(document.querySelector(".result").value);document.querySelector(".result").value=Number(1/e).toFixed(10),document.querySelector(".archiv").value="1/"+e}())),q.addEventListener("click",(()=>{document.querySelector(".result").value=Math.exp(1)})),c.addEventListener("click",(()=>{document.querySelector(".result").value="",document.querySelector(".archiv").value="",document.querySelector(".result").placeholder="0"})),v.addEventListener("click",(()=>{let e=document.querySelector(".result").value.slice(0,-1);document.querySelector(".result").value=e})),l.addEventListener("click",(t=>{e(t.target.value)})),o.addEventListener("click",(t=>{e(t.target.value)})),n.addEventListener("click",(t=>{e(t.currentTarget.value)})),a.addEventListener("click",(t=>{e(t.currentTarget.value)})),d.addEventListener("click",(()=>{if(!document.querySelector(".archiv").value)return;let e,t=document.querySelector(".archiv").value.slice(-1),u=Number(document.querySelector(".archiv").value.slice(0,-1)),r=Number(document.querySelector(".result").value);switch(t){case"+":e=u+r;break;case"-":e=u-r;break;case"*":e=u*r;break;case"/":e=u/r;break;case"^":e=Math.pow(u,r);break;case"√":e=Math.pow(u,1/r);break;default:return}document.querySelector(".archiv").value+=r,document.querySelector(".result").value=e}))})();