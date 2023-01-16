
const menu = document.getElementById('mobileMenu')
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        menu.style.top= '-30px'
        menu.style.scrollBehavior="smooth"
        menu.style.transitionDuration = "0.5s"
    }else {
        menu.style.top = "-200px"
    }
}

function topFunction(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    
}