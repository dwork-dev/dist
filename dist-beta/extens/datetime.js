(()=>{$el("t-datetime",[],t=>{v(t)},(t,p,n,s)=>{});function v(t){var p=t.options();t.innerHTML=`<div class="t-datebox df aic"><div class="posR">
  <span class="bd bda5px p3px df aic">
  	<span class="t-input-date bd0px posr">
     	<span class="">dd</span>
          <input class="tac bd0px posa w100% h100% t0px l0px" placeholder="dd">
     </span>/
     <span class="t-input-month posr">
     	<span class="p3px">mm</span>
          <input class="tac bd0px posa w100% h100% t0px l0px" placeholder="mm">
     </span>/
     <span class="t-input-year posr">
     	<span class="">yyyy</span>
          <input class="tac bd0px posa w100% h100% t0px l0px" placeholder="yyyy">
     </span>
     <span class="t-input-time posr">
     	<span class="">hh:ii</span>
          <input class="tac bd0px posa w100% h100% t0px l0px" placeholder="hh:ii">
     </span>
     <t-svg class="cicon w23px h23px ml5px cr" t-options="name:'user',fill:'${$colors.icon||"gray"}'"></t-svg>
  </span>
     <span class="t-select dn">
     	<div class="posA w{auto} h{auto}">
            <div class="d-head"></div>
            <div class="d-body dG gtc{23px;23px;23px;23px;23px;23px;23px;}">

            </div>
            <div class="d-foot df aic jcC">
                 <t-button class="btn_clear" t-options="name:'',title:'Clear'"></t-button>
                 <t-button class="btn_today" t-options="name:'',title:'Today'"></t-button>
            </div>
       </div>
     </span>
  </div></div>`,t.onchange=()=>{console.log("onchange",t.val())},t.querySelector(".btn_today").onclick=()=>{t.val(Date.now())},t.querySelector(".btn_clear").onclick=()=>{n.forEach(s=>{s.value=""}),t.querySelector(".t-select").classList.add("dn"),typeof t.onchange=="function"&&t.onchange(t)},t.querySelector(".cicon").onclick=()=>{var s=t.val(),e=new Date(s||new Date),a=e.getDate(),o=e.getMonth(),g=1;e=new Date(`${e.getFullYear()}-${e.getMonth()+1}-1`);var l=1;for(t.querySelector(".t-select .d-body").innerHTML="";e.getDay()>l;){var d=new Date(e.getTime()-(e.getDay()-l)*864e5);r(d,1),l++}for(;e.getMonth()==o;)r(e),e=new Date(e.getTime()+864e5);for(l=e.getDay();l<=7;)r(e,1),l++,e=new Date(e.getTime()+864e5);t.querySelector(".t-select").classList.remove("dn");function r(c,u){var i=document.createElement("span");i.innerHTML=`<div class="w23px h23px df aic cr jcC ${c.getDate()==a?"bd":""} ${c.getMonth()==o&&c.getDate()==a?"bg{green}":""} ${u?"bg#ccc c#9e9e9e":""}">${c.getDate()}</div>`,t.querySelector(".t-select .d-body").append(i),i.onclick=()=>{t.val(c)}}};var n=t.querySelectorAll("input");n.forEach((s,e)=>{s.addEventListener("keydown",a=>{a.keyCode==39?e<2&&s.selectionEnd==2&&setTimeout(()=>{n[e+1].focus()}):a.keyCode==37?e>0&&s.selectionEnd==2&&setTimeout(()=>{n[e-1].focus()}):a.keyCode==38||a.keyCode==40,console.log(a)}),s.addEventListener("keypress",a=>{if(a.key==13)return t.onchange(t);if("0,1,2,3,4,5,6,7,8,9".includes(a.key)){if(e<2&&a.target.value.length==2||e==2&&a.target.value.length==4)return event.preventDefault();if(e<2&&a.target.value.length==1){var o=e+1;o<3&&setTimeout(()=>{n[o].focus()})}else e==2&&a.target.value.length==3}else return event.preventDefault();s.previousElementSibling.innerText=s.value.padStart(e<2?2:4,0)})}),n[1].addEventListener("blur",s=>{var e=+n[1].value||new Date().getMonth()+1;e>12&&(e=12),n[1].value=(e+"").padStart(2,0)}),t.val=s=>{if(s){var e=new Date(s);n[0].value=e.getDate(),n[1].value=e.getMonth()+1,n[2].value=e.getFullYear()}var e=[n[2].value,n[1].value,n[0].value].join("-"),a=new Date(e);if(a+""!="Invalid Date")return t.querySelector(".t-select").classList.add("dn"),[a.getFullYear(),a.getMonth()+1,a.getDate()].join("-")}}})();
