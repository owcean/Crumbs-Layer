/* 
    Crumbs & Layer
    Name: Tienzo, Krisean G.
    Section: WD - 202
*/ 
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileNav = document.getElementById('mobile-nav');

hamburgerMenu.addEventListener('click', function() {
mobileNav.classList.toggle('show');
               // Optionally, toggle the active state for the hamburger icon
hamburgerMenu.classList.toggle('active');
           });