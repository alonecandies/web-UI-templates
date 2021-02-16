var tabLinks = document.querySelectorAll(".tab-menu__tablink");
var tabContent = document.querySelectorAll(".tab-wrap__content");
tabLinks.forEach((e)=>{
    e.addEventListener("click",openTabs);
});

function openTabs(e){
    var btn = e.currentTarget;
    var data = btn.dataset.type;
    tabContent.forEach((e)=>{
        e.classList.remove("active");
    });
    tabLinks.forEach((e)=>{
        e.classList.remove("active");
    });
    document.querySelector("#"+data).classList.add("active");
    btn.classList.add("active");
}