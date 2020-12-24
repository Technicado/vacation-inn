//NAVBAR
const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function () {
    if (window.pageYOffset > 40) {
        navbar.classList.remove('top');
        if (!scrolled) {
            navbar.style.transform = 'translateY(-270px)';
        }
        setTimeout(function () {
            navbar.style.transform = 'translateY(0)';
            scrolled = true;
        }, 200);
    } else {
        navbar.classList.add('top');
        scrolled = false;
    }
};