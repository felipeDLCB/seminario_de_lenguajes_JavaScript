function max(values) {
    return Math.max(...values);
}
function min(values) {
    return Math.min(...values);
}
function avg(values) {
    return sum(values) / values.length;  
}
function sum(values) {
    return values.reduce((a,b)=> Number(a)+Number(b),0);
}

var prices = [1.2, 2, 22, -33, 12, 0.0, "13", Math.PI];
var names = ["John", "Paul", "George", "Ringo"];

console.log(max(prices));
console.log(min(prices));
console.log(avg(prices));
console.log(sum(prices));


if (isNaN(max(names)) && isNaN(min(names)) && isNaN(avg(names)) && isNaN(sum(names))) {
    console.log('El array no tiene numeros');
}

console.log(max([]));
console.log(min([]));
console.log(avg([]));
console.log(sum([]));
