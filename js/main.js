// Variables para almacenar los datos
let montoTotal = 0;
let numeroCuotas = 0;
let interes = 0;
let mostrarResumen = false;

// Array para almacenar los detalles de las cuotas
let cuotas = [];

// Función para simular las cuotas
function simularCuotas() {
    montoTotal = parseFloat(prompt("Ingrese el monto total:"));
    numeroCuotas = parseInt(prompt("Ingrese el número de cuotas:"));
    interes = parseFloat(prompt("Ingrese el interés (%):"));
    mostrarResumen = confirm("¿Mostrar resumen de cuotas?");

    // Verificación
    if (isNaN(montoTotal) || isNaN(numeroCuotas) || isNaN(interes) ||
        montoTotal <= 0 || numeroCuotas <= 0 || interes < 0) {
        console.log("Por favor, ingrese valores válidos.");
        return;
    }

    // Calcular el monto de cada cuota con intereses
    const montoCuota = (montoTotal * (1 + (interes / 100))) / numeroCuotas;

    // Limpiar el array de cuotas antes de agregar nuevas
    cuotas = [];

    // Generar detalles de cuotas
    for (let i = 1; i <= numeroCuotas; i++) {
        cuotas.push({
            numero: i,
            monto: montoCuota
        });
    }

    // Muestra de resumen
    if (mostrarResumen) {
        let totalPago = 0;
        console.log("Resumen de Cuotas:");
        for (const cuota of cuotas) {
            console.log(`Cuota ${cuota.numero}: $${cuota.monto.toFixed(2)}`);
            totalPago += cuota.monto;
        }
        console.log(`Total a pagar: $${totalPago.toFixed(2)}`);
    } else {
        console.log("Detalles de las Cuotas:");
        for (const cuota of cuotas) {
            console.log(`Cuota ${cuota.numero}: $${cuota.monto.toFixed(2)}`);
        }
    }
}

// Llamada de la función
simularCuotas();
