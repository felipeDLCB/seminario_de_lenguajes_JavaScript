function isInteger(num){
    if (typeof num==="number"){
        if (num.toString().includes(".")) {
            return false;
        }
        return true;
    }
    return false;
}

console.log(isInteger(2)) // retorna true
console.log(isInteger(2.0)); // retorna true
console.log(isInteger(2.1)); // retorna false
console.log(isInteger(-10)); // retorna true
console.log(isInteger([1])); // retorna false
console.log(isInteger("2")); // retorna false
console.log(isInteger(true)); // retorna false
console.log(isInteger(null)); // retorna false
var num;
console.log(isInteger(num)); // retorna false
