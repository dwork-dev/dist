/*****
options: 	- element: zone;area
		- event: onStart(); onDrag(); onDrop();

*****/
function initDragDrop(element,options) {
  var zone=options.zone||element;
  var area=options.area||document.body;
  var mouseTop,mouseLeft,posTop,posLeft,newTop,newLeft,widthMove,heightMove;
  var position = element.style.position||"fixed";
  var timeout=2000;
  zone.onmousedown = onmousedown;
  element.style.width=element.offsetWidth+"px";
  function onmousedown(e) {
    e = e || window.event;
    e.preventDefault();

    mouseTop=e.y;
    mouseLeft=e.x;
    widthMove=0;
    heightMove=0;
    posTop = element.getBoundingClientRect().y;
    posLeft = element.getBoundingClientRect().x;
    newTop=posTop;
    newLeft=posLeft;
    //var zoneOffset = element.getBoundingClientRect();
    //console.log("e",e)
    
    element.style.top=(newTop)+"px";
    element.style.left=(newLeft)+"px";
    element.style.position = "fixed";
    document.onmouseup = onmouseup;
    document.onmousemove = onmousemove;
    document.scrollDown = scrollDown;
    document.scrollDown();
    typeof options.onStart == "function" && options.onStart();
  }
  function scrollDown(){
    var speed=Math.abs(element.down||0)||1;
    if(speed>7){
      area.scrollTop += element.down;
    }
    speed=speed/10;
    if(speed>20){
      speed==20;
    }
    setTimeout(()=>{
      if(typeof document.scrollDown=="function"){
        document.scrollDown();
      }
    }, 50)
  }
  function onmousemove(e) {
    e = e || window.event;
    e.preventDefault();
    
    widthMove=mouseTop-e.y;
    heightMove=mouseLeft-e.x;
    newTop=posTop-(widthMove);
    newLeft=posLeft-(heightMove);
    var mint=0+area.getBoundingClientRect().y;
    var minl=0+area.getBoundingClientRect().x;
    var maxt=mint+area.offsetHeight-element.offsetHeight;
    var maxl=minl+area.offsetWidth-element.offsetWidth;
    if(maxt>screen.height-element.offsetHeight){
      maxt=screen.height-element.offsetHeight;
    }
    if(maxl>screen.width-element.offsetWidth){
      maxl=screen.width-element.offsetWidth;
    }
    if(newLeft<minl){
      newLeft=minl;
    }
    if(newLeft>maxl){
      newLeft=maxl;
    }
    element.down=0;
    if(newTop<mint){
      element.down=newTop-mint;
      newTop=mint;
    }
    if(newTop>maxt){
      element.down=newTop-maxt;
      newTop=maxt;
    }
    element.style.top = newTop + "px";
    element.style.left = newLeft + "px";
    //console.log("down",element.down)
    typeof options.onDrag == "function" && options.onDrag();
  }

  function onmouseup(e) {
    element.style.position = position;
    element.style.top = (newTop-area.getBoundingClientRect().y+area.scrollTop) + "px";
    element.style.left = (newLeft-area.getBoundingClientRect().x+area.scrollLeft) + "px";
    document.onmouseup = null;
    document.onmousemove = null;
    document.scrollDown = null;
    typeof options.onDrop == "function" && options.onDrop();
  }
  function getData() {
    return {
      top: element.offsetTop,
      left: element.offsetLeft,
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }
}
