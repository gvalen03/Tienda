const productos = [
    {
        id: 1,
        nombre: "Cuaderno universitario",
        precio: 12000,
        stock: 10,
        imagen: "./assets/images/cuaderno.jpeg"
    },
    {
        id: 2,
        nombre: "Marcadores",
        precio: 8500,
        stock: 15,
        imagen: "./assets/images/marcadores.jpeg"
    },
    {
        id: 3,
        nombre: "Agenda",
        precio: 22000,
        stock: 6,
        imagen: "./assets/images/agenda.jpeg"
    }
];

function buscarProductoPorId(id) {
    return productos.find(producto => producto.id === id);
}

function filtrarProductos(texto) {
    const busqueda = texto.toLowerCase().trim();

    return productos.filter(producto =>
        producto.nombre.toLowerCase().includes(busqueda)
    );
}