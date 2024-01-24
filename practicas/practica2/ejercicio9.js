function ordenAsc(vector) {
    return vector.sort(function(a,b){
        return a.localeCompare(b);
    });
}

function ordenDesc(vector) {
    return vector.sort(function(a,b){
        return b.localeCompare(a);
    });
}

var words = ['perro', 'gato', 'casa',
    'árbol', 'nube', 'día', 'noche',
    'zanahoria', 'babuino'];

console.log(ordenAsc(words));
console.log(ordenDesc(words));

