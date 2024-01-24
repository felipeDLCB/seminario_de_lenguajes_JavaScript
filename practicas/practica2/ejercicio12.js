function reduce(array, binaryOperation, initialValue) {
    for(let i=0; i<array.length; i++){
        initialValue=binaryOperation(array[i],initialValue);
    }
    return initialValue;
}

var numbers = [1, 3, 4, 6, 23, 56, 56, 67, 3, 567, 98, 45, 480, 324, 546, 56];
var sum = (x, y) => x + y;
console.log(numbers.reduce(sum, 0)); //2335
console.log(reduce(numbers, sum, 0));