(()=>{var v={height:18,width:18,viewBox:"0 -960 960 960",fill:"#9c9c9c"};function l(n){let{svg:r,path:o,title:i}=$tags("http://www.w3.org/2000/svg");n.innerText="";var s=n.options(),t=$data.find(e=>e.name==s.name),a={...v};[...Object.keys(v),"name"].map(e=>{if(typeof s[e]<"u")return a[e]=s[e];if(t&&typeof t[e]<"u")return a[e]=t[e]}),n.$el=t?r(a,o({d:t?.svg})):null,console.log("create",n),$add(n,n.$el)}$el("t-svg",[],n=>{l(n)},()=>{name=="t-options"&&valOld&&l(el)});$el("t-search",[],n=>{var r=n.options(),o=r.icon||{};n.innerText="";var i="";o.name&&(i=`<t-svg t-options="name:'${o.name}',fill:'${o.fill}'"></t-svg>`),console.log(1122,n),console.log(1122,typeof n.innerHTML,i),n.innerHTML=i},(n,r,o,i)=>{if(r=="t-options"&&i){var s=n.options(),t=s.icon||{};n.innerText="";var a="";t.name&&(a=`<t-svg t-options="name:'${t.name}',fill:'${t.fill}'"></t-svg>`),n.innerHTML=a}});})();
