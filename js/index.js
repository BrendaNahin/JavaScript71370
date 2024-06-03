


function ingresarNombre () {
    let nombreIngresado = prompt("Por favor ingrese su nombre");
    let apellidoIngresado = prompt ("por favor ingrese su apellido")
    console.log("el nombre ingresado es " + nombreIngresado + apellidoIngresado);
}

let numero = 0;

while (numero < 2) {
    ingresarNombre ()
    numero ++
}

ingresarNombre()