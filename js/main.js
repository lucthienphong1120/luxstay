// Show Nav Mobile
const btnShowMobileNav = document.querySelector('.nav__mobile--show-btn');
const btnHideMobileNav = document.querySelector('.nav__mobile-close');
const mobileNav = document.querySelector('.nav__mobile');
const overlay = document.querySelector('.nav_overlay')

function showMobileNav() {
    mobileNav.classList.add('show-nav__mobile');
    overlay.classList.add('show-overlay');
}
function hideMobileNav() {
    mobileNav.classList.remove('show-nav__mobile');
    overlay.classList.remove('show-overlay');
}
btnShowMobileNav.addEventListener('click', showMobileNav);
btnHideMobileNav.addEventListener('click', hideMobileNav);
overlay.addEventListener('click', hideMobileNav);

// Show Search Suggest
$('.header__search-input').focus( function() {
    $('.header__search-suggest').fadeIn();
});
$('.header__search-input').blur( function() {
    $('.header__search-suggest').fadeOut();
});
// Show Change Languages
const btnChangeLanguages = document.querySelector('.header__nav-language');
const changeLanguagesOptions = document.querySelector('.change__languages');

function showChangLanguages() {
    changeLanguagesOptions.classList.toggle('show');
}
btnChangeLanguages.addEventListener('click', showChangLanguages);

// Show Change Languages
const btnMobileLanguages = document.querySelector('.nav__mobile-language');
const MobileLanguagesOptions = document.querySelector('.mobile__language');

function showMobileLanguages() {
    MobileLanguagesOptions.classList.toggle('show-language');
}
btnMobileLanguages.addEventListener('click', showMobileLanguages);   
// Loader Page
$(window).on('load', function(e) {
    $('.loader').delay(1000).fadeOut('lows');
});