// alerts() sirve para mostrar un mensaje en el navegador

//EJEMPLO 1
function mostrarMensaje() {
    //alert("Hola, desde el navegador")

    //Mostrammos los numeros del 1 al 10

    for (let i = 1; i <= 10; i++) {
        alert(i); //mostramos cada número en una alerta individual
    }
}

//EJEMPLO 2
let texto= "";

for (let i = 1; i <= 10; i++) {
    texto += `${i}<br />`; // concatenamos los números en una cadena separados por salto de línea
}

// Asignamos el elemento
document.getElementById("demo").innerHTML = texto;

// Ejemplo 3
// el texto = "": Borra los textos anteriores
texto = "";
const autos = ["BMW", "Volvo", "Saeb", "Ford", "Fiat", "Audi"];

/*console.log(autos);
console.log(autos.length);
console.log(autos.length - 1);
*/
// Acceder a los elementos de la lista mediante un bucle
// Recorrer una lista por indice
for (let i = 0; i < autos.length; i++){
    texto += `${autos[i]}<br />`;  
}


document.getElementById("autos").innerHTML = texto;
// Ejemplo 3
// Limpiamos la variable de texto
texto = "";

// Recorrer una lista por elemento
for (let auto of autos){
    texto += `${auto}<br />`;  
}


document.getElementById("autos2").innerHTML = texto;

