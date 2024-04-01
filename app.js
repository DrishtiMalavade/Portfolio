document.addEventListener("DOMContentLoaded", function() {
    // Add scroll event listener to window
    window.addEventListener('scroll', function() {
        var navbar = document.getElementById("myNavbar");
        if (navbar && window.pageYOffset >= navbar.offsetTop) {
            navbar.classList.add("sticky");
        } else if (navbar) {
            navbar.classList.remove("sticky");
        }
    });
});