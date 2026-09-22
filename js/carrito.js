function renderizarCarrito() {
    contenedorCarrito.innerHTML = "";

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML =
            "<p>Tu carrito está vacío.</p>";

        totalCarrito.textContent = "$0";

        return;
    }

    carrito.forEach(item => {
        const elemento = document.createElement("div");

        elemento.classList.add("item-carrito");

        elemento.innerHTML = `
            <h3>${item.nombre}</h3>

            <p>
                Cantidad: ${item.cantidad}
            </p>

            <p>
                $${item.precio * item.cantidad}
            </p>
        `;

        contenedorCarrito.appendChild(elemento);
    });

    totalCarrito.textContent =
        `$${calcularTotal()}`;
}