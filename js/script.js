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
function burgerMenu() {
    var element = document.getElementById("topNav");
    element.classList.toggle("responsiveNavbar");
}