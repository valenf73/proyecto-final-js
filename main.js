// Clase para representar cada producto
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    buscarPorNombre(productos, nombre) {
        return productos.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
    }
}

// Clase para gestionar el carrito de compras
class Carrito {
    constructor() {
        this.productos = [];
        this.total = 0;
    }

    agregarProducto(producto) {
        this.productos.push(producto);
        this.total += producto.precio;
    }

    mostrarResumen() {
        if (this.productos.length > 0) {
            const carritoTexto = this.productos.map(producto => `${producto.nombre} - $${producto.precio}`).join('\n');
            alert(`Resumen del carrito de compras:\n${carritoTexto}\nTotal a pagar: $${this.total}`);
        } else {
            alert("No se han agregado productos al carrito. ¡Gracias por visitarnos!");
        }
    }
}

// Crear instancias de productos
const productos = [
    new Producto("Remera New Generation", 7000),
    new Producto("Remera Lost on You", 7500),
    new Producto("Remera Resilience Oversize", 8000),
    new Producto("Remera Rolling Stones Básica", 6500)
];

// Variables
let continuarCompra = true;

// Método para mostrar la lista de productos
function mostrarProductos() {
    alert("Nuestros productos:\n" +
        productos.map((producto, indice) => `${indice + 1}: ${producto.nombre} - $${producto.precio}`).join('\n')
    );
}

// Función para obtener la selección del usuario
function obtenerSeleccion() {
    return prompt("Ingrese el número del producto que desea agregar al carrito (o '0' para finalizar):");
}

// Función para procesar la selección del usuario
function procesarSeleccion(seleccion, carrito, productos) {
    const indice = parseInt(seleccion) - 1;

    if (indice >= 0 && indice < productos.length) {
        const producto = productos[indice];

        // Agregar producto al carrito y actualizar el total
        carrito.agregarProducto(producto);

        alert(`${producto.nombre} ha sido agregado al carrito.`);
        return producto.nombre;
    } else {
        console.log("¡Producto no válido! Por favor, seleccione un producto válido.");
        return null;
    }
}

// Función principal
function realizarCompra() {
    alert("¡Bienvenido a nuestra tienda!"); // Alerta de bienvenida

    // Crear instancia del carrito
    const carrito = new Carrito();

    // Ciclo para mostrar productos y permitir al usuario agregar al carrito
    while (continuarCompra) {
        mostrarProductos();

        const seleccion = obtenerSeleccion();

        if (seleccion === "0") {
            continuarCompra = false; // Salir del bucle si se ingresa 0
        } else {
            const productoAgregado = procesarSeleccion(seleccion, carrito, productos);
            if (productoAgregado === null) {
                continue; // Ir al siguiente ciclo si la selección es inválida
            }
        }
    }

    // Mostrar resumen del carrito de compras
    carrito.mostrarResumen();
}

// Llamar a la función principal
realizarCompra();
