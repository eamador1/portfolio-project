const hamburger = document.querySelector('.hamburger-image');
const menu = document.querySelector('.button-list');
const closemenu = document.querySelector('.x-close');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

closemenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.querySelectorAll('.navlink').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
}));

