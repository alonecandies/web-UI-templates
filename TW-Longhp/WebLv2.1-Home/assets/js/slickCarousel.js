$(document).ready(function(){
    $(".slick-slider").slick({
        autoplay:true,
        autoplaySpeed:4000,
        dots:true,
        infinite:true,
        speed:300,
        slidesToShow:1,
        fade:true
    });
});

// function focusArrow(){
//     var prev=document.getElementsByClassName("slick-prev")[0];
//     var next=document.getElementsByClassName("slick-next")[0];
//     prev.classList.add("active-arrow");
// }