window.onscroll = function () {
    if (pageYOffset >= 200) {
        document.getElementById('back-to-top').style.visibility = "visible";
    } else {
 document.getElementById('back-to-top').style.visibility = "hidden";
    }
};
