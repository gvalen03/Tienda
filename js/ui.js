const contenedorProductos =
    document.getElementById("contenedor-productos");

const contenedorCarrito =
    document.getElementById("contenedor-carrito");

const totalCarrito =
    document.getElementById("total-carrito");


/* =========================
   RENDERIZAR PRODUCTOS
========================= */

function renderizarProductos(lista) {

    contenedorProductos.innerHTML = "";

    lista.forEach(producto => {

        const tarjeta =
            document.createElement("article");

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
                ${
                    producto.stock === 0
                        ? "Sin stock"
                        : "Agregar al carrito"
                }
            </button>
        `;

        contenedorProductos.appendChild(tarjeta);

    });

}


/* =========================
   RENDERIZAR CARRITO
========================= */

function renderizarCarrito() {
    contenedorCarrito.innerHTML = "";

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = `
            <p class="carrito__vacio">
                Tu carrito está vacío.
            </p>
        `;

        totalCarrito.textContent = "$0";
        return;
    }

    carrito.forEach(item => {
        const elemento = document.createElement("div");

        elemento.classList.add("item-carrito");

        const subtotal = item.precio * item.cantidad;

        elemento.innerHTML = `
            <h3>${item.nombre}</h3>
            <p>Cantidad: ${item.cantidad}</p>
            <p>Subtotal: $${subtotal.toLocaleString("es-CO")}</p>
        `;

        contenedorCarrito.appendChild(elemento);
    });

    totalCarrito.textContent =
        `$${calcularTotal().toLocaleString("es-CO")}`;
}