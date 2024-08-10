// INVERTIR UN ARRAY

let reverse = (Array) => {
    let arrayInvertido = [];
    for (let i = Array.length - 1; i >= 0; i--) {
        arrayInvertido.push(Array[i]);
    }
    return arrayInvertido;
}

// TESTAR LA FUNCION

let Array = [1, 2, 3, 4, 5];
console.log(Array);
console.log(reverse(Array));

