(async()=>{
  $el("t-date",[],(el)=>{
  init(el);
},(el,name,newVal,oldVal)=>{
  
});
function init(el){
  var op=el.options();
  el.innerHTML=`<div class="t-datebox df aic"><div class="posR">
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
     <t-svg class="cicon w23px h23px ml5px cr" t-options="name:'user',fill:'${$$colors.bcolor||'gray'}'"></t-svg>
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
  </div></div>`;
  el.onchange=()=>{
    console.log("onchange",el.val())
  }
  el.querySelector(".btn_today").onclick=()=>{
    el.val(Date.now());
  }
  el.querySelector(".btn_clear").onclick=()=>{
    ips.forEach(ip=>{
      ip.value=``;
    });
    el.querySelector(".t-select").classList.add("dn");
    typeof el.onchange=="function"&&el.onchange(el);
  }
  el.querySelector(".cicon").onclick=()=>{
    var v=el.val();
    var day=new Date(v||new Date);
    var date=day.getDate();
    var month=day.getMonth();
    var di=1;
    day=new Date(`${day.getFullYear()}-${day.getMonth()+1}-1`);
    var i=1;
    el.querySelector(".t-select .d-body").innerHTML=``;
    while(day.getDay()>i){
      var t=new Date(day.getTime()-(day.getDay()-i)*86400000);
      //days.push(t);
      pushD(t,1)
      i++;
    }
    while(day.getMonth()==month){
      //days.push(day);
      pushD(day);
      day=new Date(day.getTime()+86400000);
    }
    i=day.getDay();
    while(i<=7){
      pushD(day,1);
      i++;
      day=new Date(day.getTime()+86400000);
    }
    el.querySelector(".t-select").classList.remove("dn");
    function pushD(day,outM){
      var s=document.createElement("span");
      s.innerHTML=`<div class="w23px h23px df aic cr jcC ${day.getDate()==date?'bd':''} ${day.getMonth()==month&&day.getDate()==date?'bg{green}':''} ${outM?'bg#ccc c#9e9e9e':''}">${day.getDate()}</div>`;
      el.querySelector(".t-select .d-body").append(s);
      s.onclick=()=>{
        el.val(day);
      }
    }
  }
  var ips=el.querySelectorAll("input");
  ips.forEach((ip,i)=>{
    ip.addEventListener("keydown",evt=>{
      //event.preventDefault();
      if(evt.keyCode==39){ /* arrow right*/
        if(i<2 && ip.selectionEnd==2){
          setTimeout(()=>{ips[i+1].focus()})
        }
      }else if(evt.keyCode==37){ /* arrow left*/
        if(i>0 && ip.selectionEnd==2){
          setTimeout(()=>{ips[i-1].focus()})
        }
      }else if(evt.keyCode==38){ /* arrow up */
        
      }else if(evt.keyCode==40){	/* arrow down */
        
      }
      console.log(evt);
    });
    ip.addEventListener("keypress",evt=>{
      //console.log("0,1,2,3,4,5,6,7,8,9".includes(evt.key))
      if(evt.key==13){
        return el.onchange(el);
      }
      if(!"0,1,2,3,4,5,6,7,8,9".includes(evt.key)){
         return event.preventDefault();
      }else if(i<2 && evt.target.value.length==2||i==2&&evt.target.value.length==4){
        //console.log("evt.target.value",evt.target.value)
         return event.preventDefault();
      }else if(i<2 && evt.target.value.length==1){
        var ni=i+1;
        if(ni<3){
          setTimeout(()=>{
            ips[ni].focus();
          })
        } 
      }else if(i==2&&evt.target.value.length==3){
        
      }
      ip.previousElementSibling.innerText=
        ip.value.padStart(i<2?2:4,0);
      //console.log(evt,evt.target.value)
    });
  });
  ips[1].addEventListener("blur",evt=>{
    var v=+ips[1].value||new Date().getMonth()+1;
    if(v>12){
      v=12;
    }
    ips[1].value=(v+"").padStart(2,0);
  })
  el.val=(v)=>{
    if(v){
      var d=new Date(v);
      ips[0].value=d.getDate();
      ips[1].value=d.getMonth()+1;
      ips[2].value=d.getFullYear();
    }
    var d=[ips[2].value,ips[1].value,ips[0].value].join("-");
    var t=new Date(d);
    if(t+""=='Invalid Date'){
      return
    }
    el.querySelector(".t-select").classList.add("dn");
    return [t.getFullYear(),t.getMonth()+1,t.getDate()].join('-');
  }
}
function render(el){
  
}
function setData(d){
  
}
})();
