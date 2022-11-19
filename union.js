const navbarDropdown = document.querySelector('.navbar-email');
const menuTop = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const dropdownLeft = document.querySelector('.mobile-menu');
//Aquí hacia abajo traigo las etiquetas del carrito de compras y su funcionalidad
const iconShopping = document.querySelector('.navbar-shopping-cart');
const productsShopping = document.querySelector('.product-detail');



//Añadir los escuchadores de eventos
navbarDropdown.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleBurgerMenu);
iconShopping.addEventListener('click', toggleProductsSee);




//Añadir la funciones creadas con los escuchadores de eventos.

//esta funcion lo que hace es al dar click en el correo de la parte derecha, aparezca el cuadro del desktop-menu.
function toggleDesktopMenu(){
	menuTop.classList.toggle('hide');

	const openMenu = menuTop.classList.contains('hide');

	if(openMenu == false){
		productsShopping.classList.add('hide');
	}
}
//Esta funcion lo que hace es con un click abrir y cerrar el menu de la hamburguesa izquierdo.
function toggleBurgerMenu(){
	dropdownLeft.classList.toggle('hide');

	const openBurger = dropdownLeft.classList.contains('hide');

	if(openBurger == false){
		productsShopping.classList.add('hide');
	}
}
//Esta funcion lo que hace es con un click abrir y cerrar el icono del carrito de compras derecho.
function toggleProductsSee(){
	productsShopping.classList.toggle('hide');

	const openCart = productsShopping.classList.contains('hide');

	if(openCart == false){
		dropdownLeft.classList.add('hide');
		menuTop.classList.add('hide');
	}
}


