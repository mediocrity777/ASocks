const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu--active');
	menuBtn.classList.toggle('menu--opened');
});