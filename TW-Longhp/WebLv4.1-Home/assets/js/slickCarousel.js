$(document).ready(function(){
    $(".customer-slider").slick({
        autoplay:true,
        autoplaySpeed:4000,
        dots:true,
        infinite:true,
        speed:300,
        slidesToShow:3,
        slidesToScroll:1,
        arrows:true,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    slidesToShow:1
                }
            }
        ]
    });
    $(".slick-prev").html('<i class="fa fa-angle-left"></i>');
    $(".slick-next").html('<i class="fa fa-angle-right"></i>');
    $(window).resize(function(){
        $(".slick-prev").html('<i class="fa fa-angle-left"></i>');
    $(".slick-next").html('<i class="fa fa-angle-right"></i>');
    });
});