const carrito = [];


/* =========================
   AGREGAR PRODUCTO
========================= */

function agregarAlCarrito(id) {

    const producto = buscarProductoPorId(id);

    // Validar que exista
    if (!producto) {
        console.error("Producto no encontrado");
        return;
    }

    // Validar stock
    if (producto.stock <= 0) {
        console.log("Producto sin stock");
        return;
    }


    // Revisar si ya existe en el carrito
    const productoEnCarrito = carrito.find(
        item => item.id === id
    );


    if (productoEnCarrito) {

        // Si ya existe, aumentar cantidad
        productoEnCarrito.cantidad++;

    } else {

        // Si no existe, agregarlo
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        });

    }


    // Disminuir inventario
    producto.stock--;

}


/* =========================
   CALCULAR TOTAL
========================= */

function calcularTotal() {

    return carrito.reduce(
        (total, item) =>
            total + (item.precio * item.cantidad),
        0
    );

}


/* =========================
   VACIAR CARRITO
========================= */

function vaciarCarrito() {

    carrito.forEach(item => {

        const producto =
            buscarProductoPorId(item.id);

        if (producto) {

            // Devolver unidades al inventario
            producto.stock += item.cantidad;

        }

    });


    // Vaciar arreglo
    carrito.length = 0;

}