function ordenLongitud(vector) {
    return vector.sort(function (a, b) {
        if (a.length < b.length) return -1;
        if (a.length > b.length) return 1;
        return 0;
    });
}

var words = ['perro', 'gato', 'casa',
    'árbol', 'nube', 'día', 'noche',
    'zanahoria', 'babuino'];
    
console.log(ordenLongitud(words));