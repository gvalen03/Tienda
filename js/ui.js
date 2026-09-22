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
                $${producto.precio}
            </p>

            <p>
                Stock: ${producto.stock}
            </p>

            <button
                class="btn-agregar"
                data-id="${producto.id}"
                ${producto.stock === 0 ? "disabled" : ""}
            >
                Agregar al carrito
            </button>
        `;

        contenedorProductos.appendChild(tarjeta);
    });
}