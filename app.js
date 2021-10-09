const menuNav = document.getElementById('menuNav');
const mobileNav = document.querySelector('.mobileNav');

menuNav.addEventListener('click', () => {
    mobileNav.classList.toggle('active')
})