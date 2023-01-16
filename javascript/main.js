function check(){
   var menu = document.getElementById("mobileMenu")
   menu.style.left = "10px"
   menu.style.transitionDuration="0.5s"
   menu.style.zIndex='999';
   menu.style.position="fixed"
   var backGround = document.getElementById("container")
   backGround.style.background="#FFF";
   backGround.style.width="100%"
   backGround.style.height="4300px"
   backGround.style.position="absolute"
   backGround.style.zIndex='3'
   backGround.style.transitionDuration="0.5s"
   backGround.style.opacity='0.85'
}
function outSide(){
    var backGround = document.getElementById("container")
    backGround.style.height="0px"
    backGround.style.transitionDuration="1s"
    var menu = document.getElementById("mobileMenu")
    menu.style.left = "-1000px"
    menu.style.transitionDuration="1s"
}

function reverse(){
    var slider = document.getElementById('slider')
    console.log("ok")
}