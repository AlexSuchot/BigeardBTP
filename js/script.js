var n = 1;

function onMove(n) {

    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        n = 1;
    }
    if (n < 1) {
        n = slides.length;
    }

    slides[n - 1].id = "selected";

    var prev = slides[n - 1].previousElementSibling;
    if (typeof (prev) != 'undefined' && prev != null) {
        prev.id = "prev";
        if (typeof (prev.previousElementSibling) != 'undefined' && prev.previousElementSibling != null) {
            prev.previousElementSibling.id = "hide-prev";
        }
    }

    var next = slides[n - 1].nextElementSibling;
    if (typeof (next) != 'undefined' && next != null) {
        next.id = "next";
        if (typeof (next.nextElementSibling) != 'undefined' && next.nextElementSibling != null) {
            next.nextElementSibling.id = "hide-next";
        }
    }
}