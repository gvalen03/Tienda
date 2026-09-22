const contenedorProductos =
    document.getElementById("contenedor-productos");

const contenedorCarrito =
    document.getElementById("contenedor-carrito");

const totalCarrito =
    document.getElementById("total-carrito");


function renderizarProductos(lista) {
    contenedorProductos.innerHTML = "";

    lista.forEach(producto => {
        const tarjeta = document.createElement("article");

        tarjeta.classList.add("producto");

        tarjeta.innerHTML = `
    <img
        src="${producto.imagen}"
        alt="${producto.nombre}"
    >

    <h3>${producto.nombre}</h3>

    <p class="precio">
        $${producto.precio.toLocaleString("es-CO")}
    </p>

    <p class="stock">
        Stock disponible: ${producto.stock}
    </p>

    <button
        class="btn-agregar"
        data-id="${producto.id}"
        ${producto.stock === 0 ? "disabled" : ""}
    >
        ${producto.stock === 0
                ? "Sin stock"
                : "Agregar al carrito"}
    </button>
`;

        contenedorProductos.appendChild(tarjeta);
    });
}