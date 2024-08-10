
//Ejemplo 1
// Numeros del 0 al 5
//let number = 0;

/* while (number <= 5) {
    console.log(number);

// Icrementar la variable number

    number ++;
} 

// Ejemplo 2


// while (number <= 100){
        if (i % 2 == 0) {
            console.log(i);
        }
    number++;
} 



// Ejemplo 3


while (number <= 12) {
    if (number % 2 != 0) {
        console.log(number);
    }
    
    number++;
}



// Recorrer arreglos en bucle while
const paises = ["Perú", "Uruguay" , "Chile", "Argentina"]
let i = 0;

while (i < paises.length) {
    console.log(paises[i]);
    //Sin el i++ se lagea el chrome
    i++;
}



// Bucle while
let number = 7
while(number<=5){
    console.log(number);
    number++;
}

//Do while
let number = 12;
//Primero se ejecuta
do {
    console.log(number);
    number++;
    //Luego se comprueba y para o continua si cumple con la condició
} while(number < 5);


//alert
//alert("Hola");

//prompt
let alerta = prompt("Ingresa tu nombre");

console.log(`Hola ${alerta}`)

let edad = prompt("Ingresa tu edad");

console.log(`Tu edad es ${edad}`);
*/

//REGEX

const patron = /hola/;
// const patron = /hola[0-9]mundo/;
// const patron = /hola[0-9]+mundo/;
// const patron = /^hola$/;
// const patron = /^[0-9]+$/;
let dato;
do {
  dato = prompt('Ingresa el valor: ');
} while(!patron.test(dato));

console.log('Coincidencia');
