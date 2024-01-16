// Variables
let total = 0;
let carrito = "";
let continuarCompra = true;

// Función para mostrar la lista de productos
function mostrarProductos() {
    alert("Nuestros productos: \nProducto 1: Remera New Generation - $7000 \nProducto 2: Remera Lost on You - $7500\
    \nProducto 3: Remera Resilience Oversize - $8000 \nProducto 4: Remera Rolling Stones Básica - $6500");
}

// Función para obtener la selección del usuario
function obtenerSeleccion() {
    return prompt("Ingrese el número del producto que desea agregar al carrito (o '0' para finalizar):");
}

// Función para procesar la selección del usuario
function procesarSeleccion(seleccion) {
    let productoNombre = "";
    let productoPrecio = 0;

    switch (parseInt(seleccion)) {
        case 1:
            productoNombre = "Producto 1: Remera New Generation";
            productoPrecio = 7000;
            break;
        case 2:
            productoNombre = "Producto 2: Remera Lost on You";
            productoPrecio = 7500;
            break;
        case 3:
            productoNombre = "Producto 3: Remera Resilience Oversize";
            productoPrecio = 8000;
            break;
        case 4:
            productoNombre = "Producto 4: Remera Rolling Stones Básica";
            productoPrecio = 6500;
            break;
        default:
            console.log("¡Producto no válido! Por favor, seleccione un producto válido.");
            return null; // Retornar null para indicar selección inválida
    }

// Agregar producto al carrito y actualizar el total
    carrito += `${productoNombre} - $${productoPrecio}\n`;
    total += productoPrecio;

    alert(`${productoNombre} ha sido agregado al carrito.`);
    return productoNombre;
}

// Función para mostrar el resumen del carrito de compras
function mostrarResumenCarrito() {
    if (carrito !== "") {
        alert(`Resumen del carrito de compras:\n${carrito}\nTotal a pagar: $${total}`);
    } else {
        alert("No se han agregado productos al carrito. Gracias por visitarnos!");
    }
}

// Función principal
function realizarCompra() {
    alert("¡Bienvenido a nuestra tienda!"); // Alerta de bienvenida

// Ciclo para mostrar productos y permitir al usuario agregar al carrito
    while (continuarCompra) {
        mostrarProductos();

        const seleccion = obtenerSeleccion();

        if (seleccion === "0") {
            continuarCompra = false; // Salir del bucle si se ingresa 0
        } else {
            const productoAgregado = procesarSeleccion(seleccion);
            if (productoAgregado === null) {
                continue; // Ir al siguiente ciclo si la selección es inválida
            }
        }
    }

// Mostrar resumen del carrito de compras
    mostrarResumenCarrito();
}

// Llamar a la función principal
realizarCompra();
