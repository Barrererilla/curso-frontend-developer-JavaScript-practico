const navbarDropdown = document.querySelector('.navbar-email');
const menuTop = document.querySelector('.desktop-menu');
//Etiquetas traidas para hacer funcionar el menu-burger izquierdo, para aplicarle sus respectivos eventos.
const menuBurger = document.querySelector('.menu');
const dropdownLeft = document.querySelector('.mobile-menu');
//Aquí hacia abajo traigo las etiquetas del carrito de compras y su funcionalidad
const seeShoppingCart = document.querySelector('.navbar-shopping-cart');
const toggleProductDetail = document.querySelector('.product-detail-menu');
//Es el subcontenedor de la lista de productos.
const containCards = document.querySelector('.cards-container');
//Esta es la variable que traerá mi etiqueta padre del detalle de cada producto.
const seeProductsDetails = document.querySelector('.product-detail-detalles');
//Esta variable trae el boton de "x" de mi cuadro de información de producto.
const closeProduct = document.querySelector('.product-detail-close');



//Añadir los escuchadores de eventos
navbarDropdown.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleBurgerMenu);
//evento creado para hacer click en el carrito de compras.
seeShoppingCart.addEventListener('click', toggleShoppingCart);
//Evento que al darle click a la "x" me cierre el detalle del producto.
closeProduct.addEventListener('click', closeProductDetail);




//Añadir la funciones creadas con los escuchadores de eventos.

//esta funcion lo que hace es al dar click en el correo de la parte derecha, aparezca el cuadro del desktop-menu.
function toggleDesktopMenu(){
	menuTop.classList.toggle('hide');

	const hideView = menuTop.classList.contains('hide');

	if(hideView == false){
		toggleProductDetail.classList.add('hide');
		seeProductsDetails.classList.add('hide');
	}
}
//Esta funcion lo que hace es con un click abrir y cerrar el menu de la hamburguesa izquierdo.
function toggleBurgerMenu(){
	dropdownLeft.classList.toggle('hide');

	const hideView = dropdownLeft.classList.contains('hide');

	if(hideView == false){
		toggleProductDetail.classList.add('hide');
		seeProductsDetails.classList.add('hide');
	}
}
//Esta funcion lo que hace es con un click abrir y cerrar el icono del carrito de compras derecho.
function toggleShoppingCart(){
	toggleProductDetail.classList.toggle('hide');

	const hideView = toggleProductDetail.classList.contains('hide');

	if(hideView == false){
		dropdownLeft.classList.add('hide');
		menuTop.classList.add('hide');
		seeProductsDetails.classList.add('hide');
	}
}
//Esta es la función que hará que aparezca y desaparezca con un click la infoprmación de mi producto.
function seeImage(){
	seeProductsDetails.classList.remove('hide');

	const hideView = seeProductsDetails.classList.contains('hide');

	if(hideView == false){
		toggleProductDetail.classList.add('hide');
		menuTop.classList.add('hide');
	}
}
//En esta función vamos a hacer que al darle click al boton de la "x" de mi imagen, la imagen se cierre.
function closeProductDetail(){
	seeProductsDetails.classList.add('hide');
}


const productArray = [];

productArray.push({
	name: 'PC gammer',
	price: 1200,
	image: 'https://http2.mlstatic.com/D_NQ_NP_625648-MCO45642364298_042021-O.jpg',
});
productArray.push({
	name: 'Teclado gammer',
	price: 400,
	image: 'https://dobleclicknet.com/wp-content/uploads/2021/06/quasar-blanco-2.png',
});
productArray.push({
	name: 'Portatil gammer',
	price: 1000,
	image: 'https://corporativo.tecnoplaza.com.co/wp-content/uploads/2019/07/Portatil-Asus-ROG-Gamer-G7311--600x600.jpg',
});
productArray.push({
	name: 'TV pantalla plana',
	price: 3000,
	image: 'https://colombia.com.co/wp-content/uploads/2021/09/Televisor-Samsung-LED-43-Crystal-Processor-4K-Smart-TV-Pantalla-Plana-1.jpg',
});
productArray.push({
	name: 'Sofa cama',
	price: 550,
	image: 'https://cdn-cakgm.nitrocdn.com/puxFnIBkkLcpyPRyaLnwbtejpBwTawZN/assets/static/optimized/rev-13bea33/wp-content/uploads/2020/12/1-Sofa-Cama-Piccolo-1.jpg',
});
productArray.push({
	name: 'Cama plegable',
	price: 1500,
	image: 'https://i.pinimg.com/originals/24/a8/2d/24a82d0de971e2ac4a615aca15a0d452.jpg',
});


function seeProducts(arrSee){
	for(product of arrSee){
		//Aquí vamos a crear el div padre de toda la información del producto.
		const productCard = document.createElement('div');
		productCard.classList.add('product-card');
	
		//vamos a crear la etiqueta de la imagen principal que representará el producto.
		const productImage = document.createElement('img');
		productImage.setAttribute('src', product.image);

		productImage.addEventListener('click', seeImage);
	
		//Vamos a crear el contenedor div de la información del producto y del icono verde derecho inferior.
		const productInfo = document.createElement('div');
		productInfo.classList.add('product-info');
	
		//Se va a crear el nodo del div que es padre de los dos parrafos de la información del producto.
		const divParentText = document.createElement('div');
	
		//Ahora se va a crear los dos parrafos de la infprmación del producto.
		const productPrice = document.createElement('p');
		productPrice.innerText = '$' + product.price;
	
		const productName = document.createElement('p');
		productName.innerText = product.name;
	
		//Ahora se crea el contenedor "figure" para colocar el contenido que es la imagen.
		const parentFigure = document.createElement('figure');
	
		const imageIcon = document.createElement('img');
		imageIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
	
		parentFigure.append(imageIcon);
	
		divParentText.append(productPrice, productName);
	
		productInfo.append(divParentText, parentFigure);
	
		productCard.append(productImage, productInfo);
	
		containCards.append(productCard);
	}
}

seeProducts(productArray);