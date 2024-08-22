


















































// Ahora reeemplazamos el número en la posición correspondiente
arrInverso[i] = digitoPar.toString();


// Paso 3: Sumar todos los dígitos obtenidos en el paso anterior
// Inicializamos la suma en 0 (operador neutro)
let suma = 0;

// Recorremos el array inverso y sumamos cada elemento
for (let i = 0; i < arrInverso.length; i++) {
    // Sumamos el elemento convertido a number
    suma += parseInt(arrInverso[i]);
}

// Paso 4: Validar si el número es múltiplo de 10
if (suma % 10 === 0) {
    // Damos el estilo y contenido de válido a la alerta
    alerta.innerText = "Tarjeta Válida";
    alerta.className = "alerta-valida";
    
    // Retornamos true porque sería válido
    return true;
} else {
    // Damos el estilo y contenido de inválido a la alerta
    alerta.innerText = "Tarjeta Inválida";
    alerta.className = "alerta-error";
    
    // Retornamos false porque no sería válido
    return false;
}


// Enmascarar dígitos
// Ocultaremos todos los dígitos de la tarjeta, excepto los últimos 4
function enmascarar() {
    let numero = document.getElementById("numero-tarjeta");
    // Obtenemos el valor del input de la tarjeta
    let digitosTC = numero.value;
    let cantidadDigitos = digitosTC.length;

    if (cantidadDigitos > 4) {
        let digitosEnmascarar = cantidadDigitos - 4;

        for (let i = 0; i < digitosEnmascarar; i++) {
            // Reemplazamos cada dígito por un asterisco
            digitosTC = digitosTC.replace(digitosTC[i], "*");
        }
    }

    document.getElementById("svgnumber").innerHTML = digitosTC;
}

// Vinculamos la función
document.getElementById("btn-validar").addEventListener("click", function () {
    // Validamos la tarjeta
    let valida = validarTarjeta();

    // Si es válida, enmascaramos los dígitos
    if (valida) {
        enmascarar();
        // Limpiamos el input
        document.getElementById("numero-tarjeta").value = "";
        // Ocultamos el botón
        this.hidden = true;
    }
});
