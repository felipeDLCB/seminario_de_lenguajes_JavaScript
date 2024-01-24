function arrayEquals(a, b) {
    if (Array.isArray(a) && Array.isArray(b)){
        if (a.length==b.length){
            for (let i=0; i<a.length;i++){
                if (a[i]!==b[i]){
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    return false;
}
var a = [1, 2, 3, 4];
var b = [1, 2, 3, 4];
var c = [1, 2, 3, 4, 5];
var d = "Hola";
var e = null;
console.log(arrayEquals(a, a));
console.log(arrayEquals(a, b));
console.log(arrayEquals(b, c));
console.log(arrayEquals(e, c));
console.log(arrayEquals(c, d));
console.log(arrayEquals(e, e));

