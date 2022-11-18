const navbarDropdown = document.querySelector('.navbar-email');
const menuTop = document.querySelector('.desktop-menu');

navbarDropdown.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
	menuTop.classList.toggle('hide');
}


