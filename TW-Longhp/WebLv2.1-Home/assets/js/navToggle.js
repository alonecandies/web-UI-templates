function navbarToggle() {
    var x=document.getElementsByClassName("navigation-bar__item");
    for (let i=0;i<x.length;i++){
      x[i].classList.toggle("responsive");
    }
}