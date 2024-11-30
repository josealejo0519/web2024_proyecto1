// Función que verifica si el número es positivo, negativo o nulo
function verificarNumero() {
    // Obtener el valor del input
    let inputNumero = document.getElementById("verificar-numero").value;

    // Validar si el campo está vacío
    if (inputNumero === null || inputNumero.trim() === "") {
        alert("Por favor, introduce un número.");
        return;
    }

    // Convertir el valor a número entero
    let numero = parseInt(inputNumero);

    // Validar si el valor ingresado es un número válido
    if (isNaN(numero)) {
        alert("Por favor, introduce un número válido.");
        return;
    }

    // Realizar la verificación del número y mostrar el resultado en una alerta
    if (numero > 0) {
        alert("El número es positivo.");
    } else if (numero < 0) {
        alert("El número es negativo.");
    } else {
        alert("El número es nulo.");
    }

    // Reiniciar el campo para permitir una nueva operación
    document.getElementById("verificar-numero").value = "";
}
