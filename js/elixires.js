const productos = [
    {
        id: "elixir-01",
        titulo: "Remy Martin",
        imagen: "../assets/images/producto1.jpg",
        categoria: {
            nombre: "Elixires",
            id: "elixires",
        },
        precio: 100000
    },
    {
        id: "elixir-02",
        titulo: "Oban",
        imagen: "../assets/images/producto2.jpg",
        categoria: {
            nombre: "Elixires",
            id: "elixir",
        },
        precio: 276000
    },
    {
        id: "elixir-03",
        titulo: "Jim Beam",
        imagen: "../assets/images/producto3.jpg",
        categoria: {
            nombre: "Elixires",
            id: "elixir",
        },
        precio: 25000
    },
    {
        id: "elixir-04",
        titulo: "Dimple",
        imagen: "../assets/images/producto4.jpg",
        categoria: {
            nombre: "Elixires",
            id: "elixir",
        },
        precio: 95000
    },
    {
        id: "elixir-05",
        titulo: "Istvan",
        imagen: "../assets/images/producto5.jpg",
        categoria: {
            nombre: "Elixires",
            id: "elixir",
        },
        precio: 95000
    },


]

const contenedorPpal = document.querySelector("#contenedorPpal");

function cargaProductos() {

    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="elixir-img" src="${producto.imagen}" alt = "${producto.titulo}" >
                <div class="info-elixir">
                    <h3 class="titulo-elixir">${producto.titulo}</h3>
                    <p class="precio-elixir">${producto.precio}</p>
                    <button class="agregar-elixir" id=${producto.id}>Agregar</button>

                </div>
                `;

                contenedorPpal.append(div);
    })
}


cargaProductos ();