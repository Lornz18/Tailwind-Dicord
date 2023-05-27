const headerNav = document.querySelector('.header__nav__mobile');
const toggleMenu = document.querySelector('.toggle__menu');
const dim = document.querySelector('.header__nav__dim');
toggleMenu.addEventListener('click', ()=>{
    headerNav.classList.toggle('open');
    toggleMenu.classList.toggle('open');
    dim.classList.toggle('open');
});