(()=>{$el("t-date",[],t=>{v(t)},(t,i,n,s)=>{});function v(t){var i=t.options();t.innerHTML=`<div class="t-datebox df aic"><div class="posR">
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
  </div></div>`,t.onchange=()=>{console.log("onchange",t.val())},t.querySelector(".btn_today").onclick=()=>{t.val(Date.now())},t.querySelector(".btn_clear").onclick=()=>{n.forEach(s=>{s.value=""}),t.querySelector(".t-select").classList.add("dn"),typeof t.onchange=="function"&&t.onchange(t)},t.querySelector(".cicon").onclick=()=>{var s=t.val(),e=new Date(s||new Date),a=e.getDate(),l=e.getMonth(),g=1;e=new Date(`${e.getFullYear()}-${e.getMonth()+1}-1`);var o=1;for(t.querySelector(".t-select .d-body").innerHTML="";e.getDay()>o;){var p=new Date(e.getTime()-(e.getDay()-o)*864e5);r(p,1),o++}for(;e.getMonth()==l;)r(e),e=new Date(e.getTime()+864e5);for(o=e.getDay();o<=7;)r(e,1),o++,e=new Date(e.getTime()+864e5);t.querySelector(".t-select").classList.remove("dn");function r(c,u){var d=document.createElement("span");d.innerHTML=`<div class="w23px h23px df aic cr jcC ${c.getDate()==a?"bd":""} ${c.getMonth()==l&&c.getDate()==a?"bg{green}":""} ${u?"bg#ccc c#9e9e9e":""}">${c.getDate()}</div>`,t.querySelector(".t-select .d-body").append(d),d.onclick=()=>{t.val(c)}}};var n=t.querySelectorAll("input");n.forEach((s,e)=>{s.addEventListener("keydown",a=>{a.keyCode==39?e<2&&s.selectionEnd==2&&setTimeout(()=>{n[e+1].focus()}):a.keyCode==37?e>0&&s.selectionEnd==2&&setTimeout(()=>{n[e-1].focus()}):a.keyCode==38||a.keyCode==40,console.log(a)}),s.addEventListener("keypress",a=>{if(a.key==13)return t.onchange(t);if("0,1,2,3,4,5,6,7,8,9".includes(a.key)){if(e<2&&a.target.value.length==2||e==2&&a.target.value.length==4)return event.preventDefault();if(e<2&&a.target.value.length==1){var l=e+1;l<3&&setTimeout(()=>{n[l].focus()})}else e==2&&a.target.value.length==3}else return event.preventDefault();s.previousElementSibling.innerText=s.value.padStart(e<2?2:4,0)})}),n[1].addEventListener("blur",s=>{var e=+n[1].value||new Date().getMonth()+1;e>12&&(e=12),n[1].value=(e+"").padStart(2,0)}),t.val=s=>{if(s){var e=new Date(s);n[0].value=e.getDate(),n[1].value=e.getMonth()+1,n[2].value=e.getFullYear()}var e=[n[2].value,n[1].value,n[0].value].join("-"),a=new Date(e);if(a+""!="Invalid Date")return t.querySelector(".t-select").classList.add("dn"),[a.getFullYear(),a.getMonth()+1,a.getDate()].join("-")}}})();
