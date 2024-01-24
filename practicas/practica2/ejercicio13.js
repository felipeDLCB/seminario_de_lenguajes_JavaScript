function calcularIMC(peso, altura) {
    return peso / Math.pow(altura / 100, 2);
}

function mayorA25(vector) {
    return vector.filter(x => calcularIMC(x.weight, x.height) > 25);
}

function calcularEdad(fechaNacimiento) {
    let hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    return edad;
}

function nombreYEdad(vector) {
    let array = [];
    for (let i = 0; i < vector.length; i++) {
        array[vector[i].name] = calcularEdad(vector[i].dob);
    }
    return array;
}

function mayor40(vector) {
    return vector.filter(elemento => calcularEdad(elemento.dob) > 40).map(elemento => Number(calcularIMC(elemento.weight, elemento.height).toFixed(2))); // transformamos el vector en el IMC de cada persona
}

function promedioIMC(vector) {
    let total = vector.map(x => calcularIMC(x.weight, x.height)).reduce((a, b) => a + b, 0);
    return Number((total / vector.length).toFixed(2));
}

function personaMasJoven(vector) {
    let min = Infinity;
    let joven;
    vector.forEach(element => {
        const edad = calcularEdad(element.dob);
        if (edad < min) {
            min = edad;
            joven = element;
        }
    });
    return joven;
}

function estatura(vector) {
    return vector.sort((a, b) => {
        return a.height - b.height;
    });
}

var alice = {
    name: "Alice",
    dob: new Date(2001, 3, 4),
    height: 165,
    weight: 68
};

var bob = {
    name: "Robert",
    dob: new Date(1997, 0, 31),
    height: 170,
    weight: 88
};

var charly = {
    name: "Charles",
    dob: new Date(1978, 9, 15),
    height: 188,
    weight: 102
};

var lucy = {
    name: "Lucía",
    dob: new Date(1955, 7, 7),
    height: 155,
    weight: 61
};

var peter = {
    name: "Peter",
    dob: new Date(1988, 2, 9),
    height: 165,
    weight: 99
};

var luke = {
    name: "Lucas",
    dob: new Date(1910, 11, 4),
    height: 172,
    weight: 75
};

let vector = [alice, bob, charly, lucy, peter, luke];
console.log(mayorA25(vector));
console.log(nombreYEdad(vector));
console.log(mayor40(vector));
console.log(promedioIMC(vector));
console.log(personaMasJoven(vector));
console.log(estatura(vector));