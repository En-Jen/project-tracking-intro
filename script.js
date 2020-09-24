const hamburger = document.querySelector('.nav__hamburger');
const navList = document.querySelector('.nav__list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('nav-toggle');
    hamburger.classList.toggle('close');
});