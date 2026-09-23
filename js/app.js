const buscador =
    document.getElementById("buscador");

const btnVaciarCarrito =
    document.getElementById("btn-vaciar-carrito");


renderizarProductos(productos);
renderizarCarrito();


buscador.addEventListener("keyup", () => {
    const resultado =
        filtrarProductos(buscador.value);

    renderizarProductos(resultado);
});


contenedorProductos.addEventListener("click", event => {

    if (event.target.classList.contains("btn-agregar")) {

        const id = Number(
            event.target.dataset.id
        );

        agregarAlCarrito(id);

        const productosFiltrados =
            filtrarProductos(buscador.value);

        renderizarProductos(productosFiltrados);
        renderizarCarrito();
    }

});

btnVaciarCarrito.addEventListener(
    "click",
    () => {

        vaciarCarrito();


        const productosFiltrados =
            filtrarProductos(
                buscador.value
            );


        renderizarProductos(
            productosFiltrados
        );

        renderizarCarrito();

    }
);

/* =========================
    COMPRAR
========================= */

/* =========================
   COMPRAR
========================= */
const btnComprar =
    document.getElementById("btn-comprar");

const mensajeCompra =
    document.getElementById("mensaje-compra");    

btnComprar.addEventListener("click", () => {

    if (carrito.length === 0) {
        mostrarMensaje(
            "El carrito está vacío.",
            "error"
        );

        return;
    }

    carrito.length = 0;

    renderizarCarrito();

    mostrarMensaje(
        "Compra realizada exitosamente.",
        "exito"
    );

});

function mostrarMensaje(texto, tipo) {

    mensajeCompra.textContent = texto;

    mensajeCompra.className =
        `mensaje-compra ${tipo}`;

    setTimeout(() => {

        mensajeCompra.textContent = "";
        mensajeCompra.className =
            "mensaje-compra";

    }, 3000);

}