/* <label for="wheelDelta" style="color:transparent;">滚动值:(IE/Opera)</label><input type="hidden" id="wheelDelta"/>
<label for="detail" style="color:transparent;">滚动值:(Firefox)</label><input type="hidden" id="detail"/> */
var scrollFunc=function(e){
    e=e || window.event;
    var t1=document.getElementById("wheelDelta");
    var t2=document.getElementById("detail");
    if(e.wheelDelta){//IE/Opera/Chrome
        lazyLoad();
    }else if(e.detail){//Firefox
        lazyLoad();
    }
}
/*注册事件*/
if(document.addEventListener){
    document.addEventListener("DOMMouseScroll",scrollFunc,false);
}//W3C
window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome
lazyLoad();
function lazyLoad(){
  var top = $(document).scrollTop();
  var clientHeight = document.body.clientHeight;
  $(".lazyload").each(function(){
     var thisTop = $(this).offset().top;
     var src = $(this).attr("src");
     var data = $(this).attr("data");
     if((src==undefined ||src==null) && data!=undefined){
        if( (top+clientHeight)>thisTop ){
             graduallyImg(0,$(this),data);
        }
     }
  });
}

function graduallyImg(opacity,obj,data){
   setTimeout(function(){
      opacity+=0.5;
      if(opacity<=1){
         $(obj).css("opacity",opacity);
         $(obj).attr("src",data);
         graduallyImg(opacity,obj,data);
      }else{
         $(obj).css("opacity",1);
      }
   },500);
}

