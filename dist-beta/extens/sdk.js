((dk)=>{
  var _url="https://dw.beta.fwkui.com";
  var _token="_token",_token_out=2*24*60*60*1000;
  var _user,_domain=location.host.split(".").slice(-2).join(".");
  dk.Unit=Unit;
  dk.App=App;
  dk.cookie = (key, value, expire)=>{
    var ckey = '__cookie_data__';
    var keys = key;
    if(typeof keys=="string"){
      keys=keys.split('.');
    }
    key = keys.shift();
    var data = localStorage.getItem(ckey) || {};
    if(typeof data == 'string'){
      if(data.substr(0,1) == '{' && data.substr(data.length-1)=='}'){
        data = JSON.parse(data);
      }else{
        data = {};
      }
    }
    if(typeof value == 'undefined'){
      var d=(data[key]||[]);
      if(!d.length){
        return;
      }
      if(d[1]&&d[2]){
        if(d[1]<Date.now()){
          return;
        }
      }
      if(!keys.length){
        return d[0];
      }
      var rs;
      try{
        eval(`rs=d[0].${keys.join(".")}`);
        return rs;
      }catch(e){
        return rs;
      }
    }else{
      data[key] = [value];
      if(typeof expire == 'number'){
        if(expire == 0){
          data[key][1] = Date.now();
        }else if(expire > 0){
          data[key][1] = Date.now()+expire;
          data[key][2] = expire;
        }
      }
      localStorage.setItem(ckey, JSON.stringify(data));
    }
  }
  dk.token=async(value,expire)=>{
    value=value||((await cookieStore.get(_token))||{}).value;
    if(value){
      await cookieStore.set({
        name: _token,
        value,
        expires: typeof expire=="undefined"?Date.now()+_token_out:expire,
        domain: _domain
      })
    }
    return value;
  }
  dk.post=async (url,params,callback,callbackerror,sync)=>{
    params=params||{};
    if(typeof params=="string"){
      eval(`params=${params};`);
    }
    if(typeof params=="object" && typeof params.deleted=="undefined"){
      params.deleted=dk.cookie("deleted")||0;
    }
    typeof params!="string"&&(params=JSON.stringify(params));
    const req = new XMLHttpRequest();
    return new Promise(async (resolve)=>{
      req.addEventListener("load", async(event)=>{
        var rs=JSON.parse(event.target.response);
        if(url.includes("os/login") && rs.data && rs.status_code==200){
          dk.token(rs.data[_token]);
        }else if(url.includes("os/out")&&!url.includes("os/out_all")){
          dk.token("",0);
        }
        typeof callback=="function"&&callback(rs);
        resolve(rs);
      });
      req.open("POST", url,sync);
      req.setRequestHeader("Content-Type", "application/json");
      var t=await dk.token();
      if(t){
        req.setRequestHeader("token", t);
      }
      if(params.app){
        req.setRequestHeader("id_app", params.app);
      }
      req.send(params);
    })
  }
  dk.login=(username,password,cb)=>{
    return new Promise(rsl=>{
      dk.post(_url+"/os/login",{data:{username,password},_token},rs=>{
        typeof cb=="function"&&cb(rs);
        rsl(rs);
      })
    })
  }
  dk.out=(cb)=>{
    return new Promise(rsl=>{
      dk.post(_url+"/os/os/out",{},rs=>{
        rsl(rs);
        typeof cb=="function"&&cb(rs);
      })
    })
  }
  function Unit(){
    var self=this;
    self.gets=(filter,callback)=>{
      return dk.post(_url+"/company/get",{filter},callback);
    }
    self.add=(data,callback)=>{
      return dk.post(_url+"/company/add",{data},callback);
    }
    self.edit=(data,callback)=>{
      return dk.post(_url+"/company/edit",{data},callback);
    }
    self.addDomain=(app,domain,callback)=>{
      return dk.post(_url+"/domain/add",{app,domain},callback);
    }
    self.delDomain=(domain,callback)=>{
      return dk.post(_url+"/domain/del",{domain},callback);
    }
    self.getDomain=(filter,callback)=>{
      return dk.post(_url+"/domain/get",{filter},callback);
    }
  }
  function App(company){
    var self=this;
    //self.company=company;
    self.gets=(filter,callback)=>{
      return dk.post(_url+"/app/get",{company,filter},callback);
    }
    self.add=(data,callback)=>{
      return dk.post(_url+"/app/add",{company,data},callback);
    }
    self.edit=(data,callback)=>{
      return dk.post(_url+"/app/edit",{company,data},callback);
    }
    self.addDomain=(app,domain,callback)=>{
      return dk.post(_url+"/domain/add",{app,domain},callback);
    }
    self.edlDomain=(app,domain,callback)=>{
      return dk.post(_url+"/domain/add",{app,domain},callback);
    }
  }
  function Resource(app){
    var self=this;
    //self.company=company;
    self.gets=(filter,callback)=>{
      return dk.post(_url+"/app/get",{app,filter},callback);
    }
    self.add=(data,callback)=>{
      return dk.post(_url+"/app/add",{app,data},callback);
    }
    self.edit=(data,callback)=>{
      return dk.post(_url+"/app/edit",{app,data},callback);
    }
  }
  function Doc(resource){
    var self=this;
    //self.company=company;
    self.gets=(filter,callback)=>{
      return dk.post(_url+"/app/get",{resource,filter},callback);
    }
    self.add=(data,callback)=>{
      return dk.post(_url+"/app/add",{resource,data},callback);
    }
    self.edit=(data,callback)=>{
      return dk.post(_url+"/app/edit",{resource,data},callback);
    }
    self.del=(zid,callback)=>{
      return dk.post(_url+"/app/edit",{resource,zid},callback);
    }
  }
})(window.dk=window.dk||{});
