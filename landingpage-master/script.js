const nav = document.querySelector('nav ul');
const menu = document.querySelector('.kotak');
menu.addEventListener('click', () => {
    nav.classList.toggle('slide');
})