
// pre entrega 1

// function ingresarNombre () {
//     let nombreIngresado = prompt("Por favor ingrese su nombre");
//     let apellidoIngresado = prompt ("por favor ingrese su apellido")
//     console.log("el nombre ingresado es " + nombreIngresado + apellidoIngresado);
// }

// let numero = 0;

// while (numero < 2) {
//     ingresarNombre ()
//     numero ++
// }

// ingresarNombre()


// pre entrega 2 

function Productos(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
}

let obj = [
    { id: 1, nombre: "Jagermeister", precio: 30000 },
    { id: 2, nombre: "Fernet Branca", precio: 10000 },
    { id: 3, nombre: "Ron Santa Teresa", precio: 86000 },
    { id: 4, nombre: "Whisky Hibiki", precio: 333000 },
    { id: 5, nombre: "Tequila Corralejo", precio: 75280 },
    { id: 6, nombre: "Bourbon Wild Turkey", precio: 50300 },
    { id: 7, nombre: "Gin Baigur Saigon", precio: 167000 },
    { id: 8, nombre: "Limoncello Luxardo", precio: 58000 }
];

console.log(obj);

let nombreUsuario = prompt("Bienvenido a la Tienda de pociones, por favor ingrese su nombre").toLowerCase();
console.log("El nombre ingresado es, " + nombreUsuario); 
alert("Un placer " + nombreUsuario);

let edad = parseInt(prompt("Por favor ingresa tu edad"));

if (edad >= 18) {
    alert("Perfecto, puedes continuar");
} else {
    alert("Lo sentimos, aun no puedes comprar nuestras pociones");
    // Termina el script si la edad es menor de 18
    throw new Error("Edad no permitida para comprar");
}

// Array para almacenar los productos seleccionados
let productosSeleccionados = [];

// Bucle para permitir al usuario seguir comprando
let seguirComprando = true;
while (seguirComprando) {
    // Mostrar la lista de productos al usuario
    let listaProductos = "¿Qué elixir te gustaría comprar hoy?\n";
    obj.forEach(producto => {
        listaProductos += `${producto.id}. ${producto.nombre} - $${producto.precio}\n`;
    });

    // Solicitar al usuario que elija un producto por ID
    let productoSeleccionadoId = parseInt(prompt(listaProductos));

    // Encontrar el producto seleccionado
    let productoSeleccionado = obj.find(producto => producto.id === productoSeleccionadoId);

    if (productoSeleccionado) {
        console.log("El producto seleccionado es, " + productoSeleccionado.nombre);
        alert("Has seleccionado: " + productoSeleccionado.nombre + " - $" + productoSeleccionado.precio);
        // Agregar el producto seleccionado al array de productos seleccionados
        productosSeleccionados.push(productoSeleccionado);
    } else {
        console.log("Producto no encontrado");
        alert("Producto no encontrado");
    }

    // Preguntar al usuario si desea seguir comprando
    let respuesta = prompt("¿Deseas comprar algo más? (sí/no)").toLowerCase();
    if (respuesta !== 'sí' && respuesta !== 'si') {
        seguirComprando = false;
    }
}

// Calcular el total de los productos seleccionados
let total = productosSeleccionados.reduce((sum, producto) => sum + producto.precio, 0);

// Mostrar el total al usuario
alert("Gracias por visitar nuestra tienda, " + nombreUsuario + "! El total de tu compra es: $" + total);