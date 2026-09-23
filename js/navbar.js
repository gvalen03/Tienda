const navbarToggle =
    document.getElementById("navbar-toggle");

const navbarLinks =
    document.getElementById("navbar-links");

navbarToggle.addEventListener("click", () => {

    navbarLinks.classList.toggle("activo");
    navbarToggle.classList.toggle("activo");

    const menuAbierto =
        navbarLinks.classList.contains("activo");

    navbarToggle.setAttribute(
        "aria-expanded",
        menuAbierto
    );

});

const enlacesNavbar =
    document.querySelectorAll(".navbar__links a");

enlacesNavbar.forEach(enlace => {

    enlace.addEventListener("click", () => {

        navbarLinks.classList.remove("activo");

        navbarToggle.classList.remove("activo");

        navbarToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});