function onMove(n) {

    var slides = document.getElementsByClassName("slide");
    slides[n].id = "selected";

    var prev = slides[n].previousElementSibling;
    if (prev != null) {
        prev.id = "prev";
        if (prev.previousElementSibling != null) {
            prev.previousElementSibling.id = "hide-prev";
        }
    }

    var next = slides[n].nextElementSibling;
    if (next != null) {
        next.id = "next";
        if (next.nextElementSibling != null) {
            next.nextElementSibling.id = "hide-next";
        }
    }
}



var x = document.getElementById("items-menu");
var i = document.getElementById("icon");

window.onresize = function () {
    detectSize();
};

window.onload = function () {
    detectSize();
};

function detectSize() {

    if (window.innerWidth <= 1038) {
        mobile = true;
        x.style.display = "none";
        i.style.display = "block";
        i.style.transform = "rotate(180deg)"
    } else {
        mobile = false;
        i.style.display = "none";
        x.style.display = "flex";
    }
}

function clickMenu() {
    if (x.style.display === "block") {
        x.style.display = "none";
        i.style.transform = "rotate(180deg)";
    } else {
        x.style.display = "block";
        x.style.opacity = "1";
        i.style.transform = "rotate(90deg)";
    }
}