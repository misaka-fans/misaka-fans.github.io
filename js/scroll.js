window.onload = function()
{
    var oDiv = document.getElementById("scroll");
    var oUl = document.getElementsByTagName("ul")[0];
    var oLi = document.getElementsByTagName("li");
    var oA = document.getElementsByTagName("a");
    var timer = null;
    var iSpeed = 5;
    oUl.innerHTML +=oUl.innerHTML;
    oUl.style.width = oLi.length*oLi[0].offsetWidth + "px";
    function fnMove()
    {
        if (oUl.offsetLeft<-oUl.offsetWidth/2)
        {
            oUl.style.left = 0;
        }
        else if (oUl.offsetLeft>=0)
        {
            oUl.style.left = -oUl.offsetWidth/2 + "px";
        }
        oUl.style.left = oUl.offsetLeft +iSpeed + "px";
    }
    timer=setInterval(fnMove,30)   
}
