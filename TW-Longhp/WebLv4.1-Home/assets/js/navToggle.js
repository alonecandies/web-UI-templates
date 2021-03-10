let x=document.getElementsByClassName("responsive-menu")[0];
function navbarToggle() {
    x.classList.toggle("responsive-menu__responsive");
}

document.getElementById("height").addEventListener("mouseenter",()=>{
    x.classList.add("responsive-menu__responsives");
})

document.getElementById("height").addEventListener("mouseleave",()=>{
    x.classList.remove("responsive-menu__responsives");  
})

$(window).scroll(function(){
    $(".banner").each(function(){
        let bannerPosition = $(this).offset().top;
        let bannerHeight = $(this).height();
        let topOfWindow = $(window).scrollTop();
        if (topOfWindow>bannerPosition+bannerHeight){
            $(".header").addClass("headerFixed");
        } else {
            $(".header").removeClass("headerFixed");
        }
    })
})