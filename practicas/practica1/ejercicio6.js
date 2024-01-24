const A=Math.floor(Math.random()*5);
const B=Math.floor(Math.random()*5);
const C=Math.floor(Math.random()*5);

function ejercicio6() {
    console.log((A+B)**C);
    if (A>B && A>C) {
        console.log('A es el numero mas grande');
    } else if (B>A && B>C) {
        console.log('B es el numero mas grande');        
    } else if (C>A && C>A) {
        console.log('C es el numero mas grande');
    }
}

ejercicio6();