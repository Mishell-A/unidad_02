// INVERTIR UN ARRAY

let reverse = (Array) => {
    let arrayInvertido = [];
    for (let i = Array.length - 1; i >= 0; i--) {
        arrayInvertido.push(Array[i]);
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
    if  (n%2 == 0, m%2 == 0){
        return true
    } else {
        return false
    }
}
