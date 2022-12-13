button=document.getElementById("onmusicsbutton");
if(getCookie("onmusic")=="null")
{
  button.innerText="volume_off"
}
else
{
  button.innerText="volume_up"
}
onmusic = function ()
{
  var muss=document.getElementById("musc");
  if(this.getCookie("onmusic")!="null")
  {
    this.SetCookie("onmusic","null");
    button.innerText="volume_off";
    var rp=document.getElementById("rps");
    rp.parentNode.removeChild(rp);
  }
  else
  {
    this.SetCookie("onmusic","true");
    button.innerText="volume_up"
    var RP=document.createElement("random-player")
    RP.id="rps";
    muss.appendChild(RP);
  }
}
function flashx()
{
  if(this.getCookie("onmusic")=="null")
  {
    var rp=document.getElementById("rps");
    rp.parentNode.removeChild(rp);
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
