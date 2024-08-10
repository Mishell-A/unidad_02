/* 
Sintaxis

functions nombreDeLaFuncion(parametro1,parametro2) {
// Bloque de codigo de la función, indentado
return valorDeRetorno
}

- Palabra reservada para function
-Nombre de la función, siguiendo las mismas reglas de las variables
- Parentesis de apertura y cierre obligatorias
- Si muestra funcion recibe parametros, los coocamos detro de los parentesis, separados por comas si hay mas de uno
- Abrir llaves
- Bloque de codigo a ejecutar de la función
- El retorno de datos si nuestra funcion lo necesita
- Cerrar llaves


// Funcion que reciba dos números y returne la suma de los mismos
// Definición de la función
function sumar(num1,num2) {
    let resultado = num1 + num2;
// Devuelve el resultado
    return resultado;
}

// Llamada de la función
let respuesta = sumar(-43,11)
console.log(respuesta);
console.log(sumar(-43,11));

function resta(num1,num2) {
    let resultado = num1 - num2;
// Devuelve el resultado
    return resultado;
}

let respuestaResta = resta(78,156)

console.log(respuestaResta);

function mult(num1,num2) {
    let resultado = num1 * num2;
// Devuelve el resultado
    return resultado;
    //cuando una funcion se encuentra un return, termina la funcion
}

let respuestaMult = mult(15,15)
console.log(respuestaMult);

function div(num1,num2) {
    if (num2 != 0) {
        let resultado = num1 / num2
        // Devuelve el resultado
        return resultado;
    } else {
        return "No se puede dividir por 0"
    }
}

let respuestaDiv = div(100,50)
console.log(respuestaDiv);
*/

// Arrow function significa función de flecha
let sumar = (num1, num2) => num1 + num2

let respuesta = sumar(-43,11);

console.log(respuesta);
console.log("");

//Restar
// Esta es otra manera de hacerlo
let restar = (num1,num2) =>
    {
        let resultado = num1 - num2
        return resultado;
};

// Llamar a la funcion
let respuestaResta = restar(30,15);
console.log(respuestaResta);

console.log("");
    
let mult = (num1, num2) => num1 * num2

let respuestaMult = mult(200,10);

console.log(respuestaMult);
console.log("");

let div = (num1, num2) => {
    if (num2!= 0) {
        let respuestaDiv = num1/num2
        return respuestaDiv;
    } else {
        return "No se puede dividir por 0";
    }
}

let respuestaDiv = div(15,5);

console.log(respuestaDiv);
console.log("");