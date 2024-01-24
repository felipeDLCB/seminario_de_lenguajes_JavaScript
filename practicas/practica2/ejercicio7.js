function isNumeric(cadena){
    if (typeof cadena==="string"){
        for(let i=0; i<cadena.length;i++){
            if (cadena.charCodeAt(i)<47 || cadena.charCodeAt(i)>57){
                return false;
            }
        }
        return true;
    }
    return false;
}

console.log(isNumeric("2"));// retorna true
console.log(isNumeric("2a")); // retorna false
console.log(isNumeric(2));// retorna false