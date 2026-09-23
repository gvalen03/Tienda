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