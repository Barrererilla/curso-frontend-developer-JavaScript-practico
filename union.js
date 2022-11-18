const navbarDropdown = document.querySelector('.navbar-email');
const menuTop = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const dropdownLeft = document.querySelector('.mobile-menu');

//Añadir los escuchadores de eventos
navbarDropdown.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleBurgerMenu);



//Añadir la funciones creadas con los escuchadores de eventos.
function toggleDesktopMenu(){
	menuTop.classList.toggle('hide');
}

function toggleBurgerMenu(){
	dropdownLeft.classList.toggle('hide');
}
