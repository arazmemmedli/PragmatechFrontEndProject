let menuToogle = document.querySelector('.header__nav__toggle');
menuToogle.addEventListener('click', function(){
    document.querySelector('.menu-overlay').classList.toggle('before');
    document.querySelector('.two__menu__wrapper').classList.toggle('open');
    document.querySelector('.responsive__header').classList.toggle('open');
})

let fScreen = document.querySelector('.left-side__bg__expand a')
fScreen.addEventListener('click', function(){
    document.querySelector('.left-side').classList.toggle('full');
    document.querySelector('.right__content__wrap').classList.toggle('close')
})

let preloader = document.querySelector('.preloader');
function myFunction(){
    preloader.style.display = "none";
}