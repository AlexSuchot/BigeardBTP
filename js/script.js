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

function validateForm() {
    var hasDigit = /\d/g;
    var hasSpace = /\s/;
    var hasSpecial = /[-\/\\&,@!:;~"#_`²$£€%µ%¨§*+=?.,<>()|[\]{}]/g;

    var fn = document.form.firstname;
    var ln = document.form.lastname;
    var em = document.form.email;

    var fnAlert = document.getElementById("fn-alert");
    var lnAlert = document.getElementById("ln-alert");
    var emailAlert = document.getElementById("email-alert");

    if (hasDigit.test(fn.value)) {
        fnAlert.style.visibility = "visible";
        fnAlert.firstChild.textContent = "Nombre dans prénom"
        fn.focus();
        return false;
    }

    if (hasSpace.test(fn.value)) {
        fnAlert.style.visibility = "visible";
        fnAlert.firstChild.textContent = "Espace dans prénom"
        fn.focus();
        return false;
    }

    if (hasSpecial.test(fn.value)) {
        fnAlert.style.visibility = "visible";
        fnAlert.firstChild.textContent = "Caractères spéciaux dans prénom"
        fn.focus();
        return false;
    }

    if (hasDigit.test(ln.value)) {
        lnAlert.style.visibility = "visible";
        lnAlert.firstChild.textContent = "Nombre dans nom"
        ln.focus();
        return false;
    }

    if (hasSpace.test(ln.value)) {
        lnAlert.style.visibility = "visible";
        lnAlert.firstChild.textContent = "Espace dans nom"
        ln.focus();
        return false;
    }

    if (hasSpecial.test(ln.value)) {
        lnAlert.style.visibility = "visible";
        lnAlert.firstChild.textContent = "Caractères spéciaux dans nom"
        ln.focus();
        return false;
    }

    if (hasDigit.test(em.value)) {
        emailAlert.style.visibility = "visible";
        emailAlert.firstChild.textContent = "Nombre dans email"
        em.focus();
        return false;
    }

    if (hasSpace.test(em.value)) {
        emailAlert.style.visibility = "visible";
        emailAlert.firstChild.textContent = "Espace dans email"
        em.focus();
        return false;
    }

    return true;
}

function alertClose(elem) {
    elem.parentNode.style.visibility = "hidden"
}