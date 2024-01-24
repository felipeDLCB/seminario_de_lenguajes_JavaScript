function concat(left, right) {
    return left.concat(right);
}
let names = ["felipe", "Juan", "fabo", "enzo"];

console.log(names.reduce(concat));