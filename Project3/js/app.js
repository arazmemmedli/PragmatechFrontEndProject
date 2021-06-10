let menuToogle = document.querySelector('.header__nav__toggle');
menuToogle.addEventListener('click', function(){
    document.querySelector('.menu-overlay').classList.toggle('before')
    document.querySelector('.two__menu__wrapper').classList.toggle('open')
})
