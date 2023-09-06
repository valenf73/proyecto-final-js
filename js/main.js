// Función que calcula el monto de cada cuota
function calcularCuotas(monto, cuotas) {
    if (isNaN(monto) || isNaN(cuotas)) {
        return "Ingrese valores válidos.";
    }

    if (cuotas < 1) {
        return "El número de cuotas debe ser mayor a cero.";
    }
    
    let cuotaMensual = monto / cuotas;
    return "El monto de cada cuota mensual es: $" + cuotaMensual;
}

// Inicializamos el valor de la variable que vamos a utilizar en el ciclo
let realizarCalculo = true;

// Ciclo while que permite múltiples cálculos
while (realizarCalculo) {
    // Ingreso de datos
    let montoInput = parseFloat(prompt("Ingrese el monto total:"));
    let cuotasInput = parseInt(prompt("Ingrese el número de cuotas:"));

    // Llamada de la función cargada en la variable resultado
    let resultado = calcularCuotas(montoInput, cuotasInput);

    // Visualización del resultado en la consola
    alert(resultado);

    // Consulta al usuario
    let opcion = prompt("¿Desea realizar otro cálculo? (s/n)");

    // Verificación
    if (opcion.toLowerCase() !== "s") {
        realizarCalculo = false;
    }
}