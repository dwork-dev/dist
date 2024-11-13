((dk)=>{
  var _token;
  var _user;
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
  dk.token=()=>{
    return _token;
  }
  dk.post=async (url,params,callback,callbackerror,sync)=>{
    params=params||{};
    if(typeof params=="string"){
      eval(`params=${params};`);
    }
    if(typeof params=="object" && typeof params.deleted=="undefined"){
      params.deleted=self.cookie("deleted")||0;
    }
    typeof params!="string"&&(params=JSON.stringify(params));
    const req = new XMLHttpRequest();
    return new Promise(resolve=>{
      req.addEventListener("load", function(){
        var rs=JSON.parse(this.response)
        typeof callback=="function"&&callback(rs)
        resolve(rs);
      });
      req.open("POST", url,sync);
      req.setRequestHeader("Content-Type", "application/json");
      _token=dk.cookie("token");
      if(_token){
        req.setRequestHeader("token", _token);
      }
      if(params.app){
        req.setRequestHeader("id_app", params.app);
      }
      req.send(params);
    })
  }
  dk.login=(username,password,cb)=>{
    return new Promise(rsl=>{
      dk.post("https://dw.beta.fwkui.com/os/login",{data:{username,password}},rs=>{
        console.log("login",rs)
        if(rs.data && rs.status_code==200){
          _token=rs.data.token;
          _user=rs.data.user;
          dk.cookie("user",_user);
          dk.cookie("token",_token);
          typeof cb=="function"&&cb(rs);
        }
        rsl(rs);
      })
    })
  }
  dk.out=(cb)=>{
    return new Promise(rsl=>{
      dk.post("https://dw.beta.fwkui.com/os/os/out",{},rs=>{
        rsl(rs);
        typeof cb=="function"&&cb(rs);
      })
    })
  }
  function Unit(){
    var self=this;
    this.gets=(filter,callback)=>{
      return dk.post("/company/get",{filter},callback);
    }
    this.add=(data,callback)=>{
      return dk.post("/company/add",{data},callback);
    }
    this.edit=(data,callback)=>{
      return dk.post("/company/edit",{data},callback);
    }
  }
  function App(company){
    var self=this;
    //self.company=company;
    this.gets=(filter,callback)=>{
      return dk.post("/app/get",{company,filter},callback);
    }
    this.add=(data,callback)=>{
      return dk.post("/app/add",{company,data},callback);
    }
    this.edit=(data,callback)=>{
      return dk.post("/app/edit",{company,data},callback);
    }
    this.addDomain=(app,domain,callback)=>{
      return dk.post("/domain/add",{app,domain},callback);
    }
    this.edlDomain=(app,domain,callback)=>{
      return dk.post("/domain/add",{app,domain},callback);
    }
  }
  function Resource(app){
    var self=this;
    //self.company=company;
    this.gets=(filter,callback)=>{
      return dk.post("/app/get",{app,filter},callback);
    }
    this.add=(data,callback)=>{
      return dk.post("/app/add",{app,data},callback);
    }
    this.edit=(data,callback)=>{
      return dk.post("/app/edit",{app,data},callback);
    }
  }
  function Doc(resource){
    var self=this;
    //self.company=company;
    this.gets=(filter,callback)=>{
      return dk.post("/app/get",{resource,filter},callback);
    }
    this.add=(data,callback)=>{
      return dk.post("/app/add",{resource,data},callback);
    }
    this.edit=(data,callback)=>{
      return dk.post("/app/edit",{resource,data},callback);
    }
  }
})(window.dk=window.dk||{});
