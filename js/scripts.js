/*!
* Start Bootstrap - New Age v6.0.4 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
function change1(){
    document.getElementById('image').src="assets/img/Gameplay/g1.png"
}
function change2(){
    document.getElementById('image').src="assets/img/Gameplay/g2.png"
}
function change3(){
    document.getElementById('image').src="assets/img/Gameplay/g3.png"
}
function change4(){
    document.getElementById('image').src="assets/img/Gameplay/g4.png"
}
function change5(){
    document.getElementById('image').src="assets/img/Gameplay/g5.png"
}
