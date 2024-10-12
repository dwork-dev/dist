(()=>{Object.defineProperty(window,"$http",{get:()=>{function T(t,i=10){let d=null;return(...r)=>{d===null&&(t(...r),d=setTimeout(()=>{d=null},i))}}function n(t,i=10){let d;return function(...r){clearTimeout(d),d=setTimeout(()=>{t(...r)},i)}}function c(t,i){return typeof t=="function"&&t(i)}function s(t,i){return new URL(t,i||document.baseURI).toString()}function u(t,i,d,r){if(!navigator.onLine)return c(r,{result:!1,code:400,message:"No internet connection"});fetch(t,{method:"POST",credentials:"include",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:i,payLoad:d||{}})}).then(e=>{if(!e||!e.ok)throw c(r,{result:!1,code:400,message:e.statusText}),new Error(e.statusText);return e.json()}).then(e=>{c(r,e)})}function v(t,i){if(!navigator.onLine)return c(i,{result:!1,code:400,message:"No internet connection"});fetch(t).then(d=>{if(!d.ok)throw new Error(d.statusText);return d.json()}).then(d=>{c(i,d)}).catch(d=>{c(i,{result:!1,code:400,message:d.message||""})})}function g(t){if(!t)return"";let i=t?.filterRules??[],d=t?.type??"and";if(d&&i.length>0){let o=i.map(a=>g(a)).filter(a=>a);return o.length>0?` ( ${o.join(` ${d} `)} ) `:""}let r=t?.field?.trim()??"",e=t?.op??"=",l=t?.value??"";return r?(l.startsWith("{{")&&l.endsWith("}}")?l=l.slice(2,-2):typeof l=="string"&&(l=l.trim(),l=`s'${l}'`),`${r} ${e} ${l}`):""}function p(t){if(!t)return"";let i=t?.id??"",d=t?.select??{},r=t?.where??{},e=t?.group??[],l=t?.order??{},o=t?.limit??100,a=t?.start??0,y=g(r),I="*";d&&(I=Object.keys(d).map(f=>`${d[f]} as ${f}`).join(","));let _=e.join(","),P=Object.keys(l).map(f=>`${f} ${l[f]}`).join(",");return{id:i,select:I,where:y,group:_,order:P,limit:o,start:a}}function h(t,i){if(typeof window.flutter_inappwebview>"u"||typeof window.flutter_inappwebview.callHandler>"u")return c(i,null);typeof window.flutter_inappwebview.callHandler=="function"?window.flutter_inappwebview.callHandler("TflInvoker",...t).then(d=>{c(i,d)}):c(i,null)}var w=(t=>{var i=!1,d="";let r=null;return window.addEventListener("deviceId",function(e){e.detail&&(r=e.detail)}),typeof TflInvoker<"u"&&TflInvoker.postMessage("deviceId"),{keepOnline:n(function(e){let l=s("/user/keep-online",t);u(l,"",{},e)},500),checkAuth:n(function(e){let l=s("/user/check-token-live",t);u(l,"",{},e)},500),login:n(function(e,l){let o=s("/user/login",t);u(o,"users/login",e,l)},500),generateQrcode:n(function(e){let l=s("/user/generate-qrcode",t);u(l,"users/qrcode/generate-qrcode",{},a=>{a.code=="200"&&(i=!0,d=a.data.zid),typeof e=="function"&&e(a)})},200),checkUser:n(function(e,l){let o=s("/user/check-user",t);u(o,"users/check-user",e,l)},500),checkQrcode:n(function(e,l){let o=s("/user/check-qrcode",t);u(o,"users/qrcode/check-qrcode",e,l)}),loginQrcode:n(function(e,l){let o=s("/user/login-qrcode",t);u(o,"users/qrcode/login-qrcode",e,l)}),checkScanQrCode:n(function(e,l){let o=s("/user/check-qrcode-token",t);u(o,"users/qrcode/check-qrcode-token",e,l)}),register:n(function(e,l){let o=s("/user/register",t);u(o,"users/register",e,l)},500),resendCode:n(function(e,l){let o=s("/user/resend-code",t);u(o,"users/resend-code",e,l)}),verifyCode:n(function(e,l){let o=s("/user/register-verify-code",t);u(o,"users/register-verify-code",e,l)}),forgotPasswordRequest:n(function(e,l){let o=s("/user/forgot-password",t);u(o,"users/forgot-password",e,l)}),forgotPasswordCheckCode:n(function(e,l){let o=s("/user/forgot-password-check-code",t);u(o,"users/forgot-password-check-code",e,l)}),forgotPasswordSetNewPassword:n(function(e,l){let o=s("/user/forgot-password-reset",t);u(o,"users/forgot-password-reset",e,l)}),profile:n(function(e){let l=s("/user/profile",t);u(l,"users/profile",{},e)}),getProfileUser:n(function(e,l){let o=s("/groups/profile",t);u(o,"groups/profile",e,l)}),updateProfile:n(function(e,l){let o=s("/user/update-profile",t);u(o,"users/update-profile",e,l)}),changePassword:n(function(e,l){let o=s("/user/change-password",t);u(o,"users/change-password",e,l)}),checkPassword:n(function(e,l){let o=s("/user/check-password-old",t);u(o,"users/check-password-old",e,l)}),logout:n(function(e){let l=s("/user/logout",t);u(l,"users/logout",{},e)})}})("https://api-ag.demo.pitoall.com"),k=(t=>({create:n(function(i,d,r,e){let l=s("/docs/create",t),o="docs/create";r={...r,gid:i,type:d},u(l,o,r,e)},100),update:n(function(i,d,r,e){let l=s("/docs/update",t);u(l,"docs/update",{gid:i,id:d,content:r},e)},100),delete:n(function(i,d,r){let e=s("/docs/delete",t);u(e,"docs/delete",{gid:i,id:d},r)},100),list:n(function(i,d,r){let e=s("/docs/list",t),l="docs/list",o=p(d);o.id=i,u(e,l,o,r)},500)}))("https://api-ag.demo.pitoall.com"),m=(t=>({create:n(function(i,d){let r=s("/groups/create",t);u(r,"groups/create",i,d)},100),update:n(function(i,d,r){let e=s("/groups/update",t);u(e,"groups/update",{id:i,content:d},r)},100),taxCode:n(function(i,d){let r=s("https://api.vietqr.io/v2/business/"+i);v(r,e=>{e&&e.code=="00"?c(d,{result:!0,code:200,data:e.data}):c(d,{result:!1,code:400,message:""})})}),banks:n(function(i){let d=s("https://api.vietqr.io/v2/banks");v(d,r=>{r&&r.code=="00"?c(i,{result:!0,code:200,data:{data:r.data,total:r.data.length}}):c(i,{result:!1,code:400,message:""})})}),list:n(function(i,d){let r=s("/groups/list",t),e="groups/list",l=p(i);u(r,e,l,d)},500),getProfileUser:n(function(i,d){let r=s("/groups/profile",t);u(r,"groups/profile",i,d)}),active:n(function(i,d){let r=s("/groups/active",t);u(r,"groups/active",i,d)}),docs:k}))("https://api-ag.demo.pitoall.com"),q=(t=>({address_update:function(i,d){let r=s("/address/update",t);u(r,"address/update",i,d)},address_list:n(function(i,d){let r=s("/address/list",t),e="address/list",l=p(i);u(r,e,l,d)},500),geo_address:n(function(i,d){let r=s("/address/geo_autocomplete",t);u(r,"address/geo_autocomplete",i,d)}),geo_detail:n(function(i,d){let r=s("/address/geo_detail",t);u(r,"address/geo_detail",i,d)})}))("https://api-ag.demo.pitoall.com");return{account:w,business:m,cates:q,invokerMobile:n(function(t,i){h(t,i)},1)}}});})();
/*
function checkAuthWeb(){if(!["account.demo.pitoall.com","dwork.demo.pitoall.com","dgroup.demo.pitoall.com","ddocs.demo.pitoall.com","dsign.demo.pitoall.com","dci.demo.pitoall.com"].includes(location.hostname))return;let t=setInterval(()=>{window.$http&&window.document?.readyState=="complete"&&(clearInterval(t),$http.account.checkAuth(t=>{var a="https://account.demo.pitoall.com/dang-nhap.html",e="account.demo.pitoall.com",o="https://dwork.demo.pitoall.com/",h=["/dang-nhap.html","/dang-ky.html","/xac-thuc-tai-khoan.html","/xac-nhan-tai-khoan.html","/doi-mat-khau.html","/dang-nhap-app.html","/quen-mat-khau.html","/dang-nhap-qrcode.html"];if(t.result){var m=new URLSearchParams(location.search).get("url")||o;let l=new URL(m);location.hostname==e&&h.includes(location.pathname)&&(e==l.hostname?location.href=o:location.href=l.hostname?m:o)}else location.hostname==e?h.includes(location.pathname)||(location.href=a+"?url="+encodeURIComponent(location.pathname)):location.href=a+"?url="+encodeURIComponent(location.href)}))},100)}checkAuthWeb();
*/
