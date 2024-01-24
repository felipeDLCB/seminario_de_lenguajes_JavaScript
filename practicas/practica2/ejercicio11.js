function identity(x) {
    return x;
}

var id = function (x) {
    return x;
}

var iden = x => x;
var identidad = identity;

console.log(typeof identity);
console.log(typeof id);
console.log(typeof iden);
console.log(typeof identidad);

console.log(identity('Hola'));
console.log(id('Hello'));
console.log(iden('Buen día'));
console.log(identidad('Buen día'));
