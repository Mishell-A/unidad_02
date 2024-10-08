// Determinar potencia de 2
const powerofTwo = (number) => {
    if (number<=0){
        return 1;
    }
    let respuesta = 2;

    for (let i=1; i< number; i++){
        respuesta *= 2;
    }

    return respuesta;
}



// INVERTIR UN ARRAY

let reverse = (array) => {
    let arrayInvertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
}


// Contar vocales

    const countVowels = (str) => {
        let vocales = "aeiouAEIOU";
        let counter = 0;
    
        for (let i = 0; i < str.length; i++) {
        if (vocales.includes(str[i])) {
            counter++;
        }
        }
    
        return counter;
    };

// Función par/impar

    const evenOrOdd = (n) => {
        if (n % 2 === 0) {
            return 0
        } else {
            return 1
        }
        
    };


// Número mayor que otro

const max = (A, B, C) => {
    // Usamos Math.max para encontrar el número mayor entre A, B y C
    return Math.max(A, B, C);
};

//Numero primo

const isPrime = (n) => {
    if (n <= 1) {
        return false;
    } else if (n === 2) {
        return true; // 2 es el único número par primo
    } else {
        for (let i = 2; i < Math.sqrt(n); i ++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
};

// Puedes conducir y votar?

const canDriveAndVote = (edad) => {
    if (edad>=18) {
        return true
    } else {
        return false
        }
};

// Determinar si dos números son pares

const areOdd = (n, m) => {
    if  (n%2 == 0 && m%2 == 0){
        return true
    }

    return false
}

