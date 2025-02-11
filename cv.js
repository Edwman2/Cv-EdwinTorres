document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("icon-menu");
    const nav = document.querySelector(".nav");

    if (!menuIcon || !nav) {
        console.error("Menu icon or navigation not found!");
        return;
    }

    menuIcon.addEventListener("click", function () {
        nav.classList.toggle("active");
        console.log("Menu toggled!"); // Debugging log
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav a").forEach(link => {
        link.addEventListener("click", function () {
            nav.classList.remove("active");
        });
    });
});