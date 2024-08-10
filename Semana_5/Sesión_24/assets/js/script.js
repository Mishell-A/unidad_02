/*
Bucle for
Es un bucle infinito, porque se le indica la cantidad de veces que se debe repetir.

Sintaxis

for (inicio; fin; pasos) {
    // Bloque de código a repetir
}

for: Palabra reservada
inicio: Valor en el cual inicia el bucle
fin: Valor en el cual termina el bucles
pasos: Intervalo entre valor y valor

ESTAS TRES EXPRESIONES INDICAN QUE A I SE LE AUMENTA I
i++
i += 1
i = i + 1

Iterador: Una variable que va recorriendo un objeto iterable

*/

// Ejercicio 1
// Imprimir la palabra "Hola" 10 veces

for (let i = 0; i<10; i++) {
    console.log("Hola");
}

console.log("");

// Ejercicio 2
// Imprimir la palabra "JavaScript" 25 veces
for (let i = 0; i < 25; i++) {
    console.log("JavaScript");
}

console.log("");

//Ejercicio 3
// Mostrar los numeros del 0 al 9

for (let i = 0; i <10; i++) {
    console.log(i);
    // En la última linea se actualiza el valor de i
}

console.log("");

// Ejercicio 4
// Mostrar los números del 1 al 10
for (let i = 1; i <11; i++) {
    console.log(i);
}

console.log("");


// Ejercicio 5
// Mostrar los número desde el 4 hasta el 23 (tomando el 23), de 3 en 3
for (let i = 4; i <24; i+= 3) {
    console.log(i);

}
console.log("");

// Ejercicio 6
// Mostrar los números del 10 al 100, de 10 en 10

for (let i = 10; i <101; i+= 10) {
    console.log(i);
}

console.log("");

// Ejercicio 7
// Mostrar los números del 9 al 0

for (let i = 9; i >= 0; i--) {
    console.log(i);
}

console.log("");

