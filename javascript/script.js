document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("#navbar .nav-link");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active"); 
        } else {
            link.classList.remove("active");
        }
    });
});
