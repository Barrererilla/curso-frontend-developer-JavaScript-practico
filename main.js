const navRight = document.querySelector('.navbar-email');
const desktopActive = document.querySelector('.desktop-menu');


navRight.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
	desktopActive.classList.toggle('inactive');
}

let mostrar = desktopActive.classList.add('Barrerilla');
console.log(mostrar);