
window.oncontextmenu=function(e){
  e.preventDefault();
  menu=document.getElementById('menu');
  menu.style.left=e.clientX+'px';
  menu.style.top=e.clientY+'px';
  window.onclick=function(e){
    document.getElementById('menu').style.top= -500 + 'px';
  }
}
onmusic = function ()
{
  if(this.getCookie("onmusic")!="null")
  {
    this.SetCookie("onmusic","null");
    var dom=document.getElementById("musc");
    dom.parentNode.removeChild(dom);
  }
  else
  {
    this.SetCookie("onmusic","true");
  }
}
function SetCookie(name,value){
  document.cookie = name + "="+ value;
}
function getCookie(name){
  var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
  if(arr != null){
    return arr[2];
  }else{
    return "null";
  }
}
