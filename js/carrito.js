const productosEnCarrito = JSON.parse(localStorage.getItem ("productosEnCarrito"));

const contenedorCarritoVacio = document.querySelector("#carritoVacio");
const contenedorCarritoProductos = document.querySelector("#carritoProductos");
const contenedorCarritoComandos = document.querySelector("#carritoComandos");
const contenedorCarritoComprado = document.querySelector("#carritoComprado"); 


if (productosEnCarrito) {
    
    contenedorCarritoVacio.classList.add("disabled");
} else {

}