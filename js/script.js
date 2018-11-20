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

function validateForm() {
    var hasDigit = /\d/g;
    var hasSpace = /\s/;
    var hasSpecial = /[-\/\\&,@!:;~"#_`²$£€%µ%¨§*+=?.,<>()|[\]{}]/g;
    var fn = document.form.firstname;
    if (hasDigit.test(fn.value)) {
        alert("Nombre dans prénom");
        fn.focus();
        return false;
    }
    if (hasSpace.test(fn.value)) {
        alert("Espace dans prénom");
        fn.focus();
        return false;
    }
    if (hasSpecial.test(fn.value)) {
        alert("Caractères spécial dans prénom");
        fn.focus();
        return false;
    }
    var ln = document.form.lastname.value;
    if (hasDigit.test(ln.value)) {
        alert("Nombre dans nom");
        fn.focus();
        return false;
    }
    if (hasSpace.test(ln.value)) {
        alert("Espace dans nom");
        fn.focus();
        return false;
    }
    if (hasSpecial.test(ln.value)) {
        alert("Caractères spécial dans prénom");
        fn.focus();
        return false;
    }
    var em = document.form.email.value;
    if (hasDigit.test(em.value)) {
        alert("Nombre dans email");
        fn.focus();
        return false;
    }
    if (hasSpace.test(em.value)) {
        alert("Espace dans email");
        fn.focus();
        return false;
    }
    return true;
}