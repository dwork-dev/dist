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
      var c = data[key] || [];
      if(c.length > 1){
        if(c[1] > 0){
          if(c[1] < Date.now()){
            c = [];
            delete data[key];
            localStorage.setItem(ckey, JSON.stringify(data));
          }else if(typeof c[2]=="number" && c[2]>0){
            data[key] = [c[0],Date.now()+(c[2]*1000),c[2]]
            localStorage.setItem(ckey, JSON.stringify(data));
          }
        }	
      }
      var rs = c[0];
      if(typeof rs == 'object'){
        var rs = JSON.parse(JSON.stringify(c[0]));
      }
      for(var i=0; i<keys.length;++i){
        if(typeof rs == undefined) {break;}
        if(['NaN','undefined'].includes(rs+'')) return;
        rs = rs[keys[i]];
      }
      return rs;
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
    value=value||(await cookieStore.get(_token));
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
      params.deleted=dk.token("deleted")||0;
    }
    typeof params!="string"&&(params=JSON.stringify(params));
    const req = new XMLHttpRequest();
    return new Promise(resolve=>{
      req.addEventListener("load", async()=>{
        console.log("this.response",this.response);
        var rs=JSON.parse(this.response)
        if(url.includes("os/login") && rs.data && rs.status_code==200){
          dk.token(rs.data.token);
        }else if(url.includes("os/out")&&!url.includes("os/out_all")){
          dk.token("",0);
        }
        typeof callback=="function"&&callback(rs);
        resolve(rs);
      });
      req.open("POST", url,sync);
      req.setRequestHeader("Content-Type", "application/json");
      var t=dk.token();
      if(t){
        //req.setRequestHeader(_token", t);
      }
      if(params.app){
        req.setRequestHeader("id_app", params.app);
      }
      req.send(params);
    })
  }
  dk.login=(username,password,cb)=>{
    return new Promise(rsl=>{
      dk.post(_url+"/os/login",{data:{username,password}},rs=>{
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
    this.gets=(filter,callback)=>{
      return dk.post(_url+"/company/get",{filter},callback);
    }
    this.add=(data,callback)=>{
      return dk.post(_url+"/company/add",{data},callback);
    }
    this.edit=(data,callback)=>{
      return dk.post(_url+"/company/edit",{data},callback);
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
    this.gets=(filter,callback)=>{
      return dk.post(_url+"/app/get",{resource,filter},callback);
    }
    this.add=(data,callback)=>{
      return dk.post(_url+"/app/add",{resource,data},callback);
    }
    this.edit=(data,callback)=>{
      return dk.post(_url+"/app/edit",{resource,data},callback);
    }
    self.del=(zid,callback)=>{
      return dk.post(_url+"/app/edit",{resource,zid},callback);
    }
  }
})(window.dk=window.dk||{});
