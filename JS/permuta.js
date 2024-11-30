function permuta() {
    let inputNum1 = document.getElementById("num1").value;
    let inputNum2 = document.getElementById("num2").value;

    // Validar si alguno de los campos está vacío
    if (inputNum1 === "" || inputNum2 === "") {
        alert("Por favor, introduce ambos números.");
        return;
    }

    // Convertir los valores ingresados a números
    let num1 = Number(inputNum1);
    let num2 = Number(inputNum2);

    // Validar que los valores ingresados sean números enteros
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        alert("Por favor, introduce solo números enteros válidos.");
        return;
    }

    // Realizar la permutación
    let temp = num1;
    num1 = num2;
    num2 = temp;

    // Mostrar el resultado en una alerta
    alert(`Números ingresados = ${inputNum1} , ${inputNum2}\nDespués de permutar = ${num1} , ${num2}`);

    // Limpiar los campos de entrada para permitir una nueva operación
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
