// Función que cuenta desde 0 hasta el número ingresado
function cuenta(num) {
    let resultado = ""; // Cadena para almacenar los números generados
    for (let i = 0; i <= num; i++) {
        resultado += i + (i < num ? ", " : ""); // Agregar número y coma si no es el último
    }
    return resultado; // Retorna la cadena de números
}

// Función principal para iniciar el conteo
function iniciarCuenta() {
    // Obtener el valor del input
    let inputNumero = document.getElementById("numero").value;

    // Validar que el input no esté vacío
    if (inputNumero === null || inputNumero.trim() === "") {
        alert("Por favor, introduce un número.");
        return;
    }

    // Convertir a número entero
    let numero = parseInt(inputNumero);

    // Validar que sea un número entero positivo
    if (isNaN(numero) || numero < 0) {
        alert("Por favor, introduce un número entero positivo.");
        return;
    }

    // Generar el conteo y mostrarlo en una alerta
    let resultado = cuenta(numero);
    alert(`Números desde 0 hasta ${numero} = ${resultado}`);

    // Reiniciar el campo para permitir una nueva operación
    document.getElementById("numero").value = "";
}
