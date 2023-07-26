$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggle("active");
    });
});

var typed = new Typed(".typing", {
    strings: ["Developer", "Coder"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});
var typed = new Typed(".typing-2", {
    strings: ["Developer", "Coder"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});