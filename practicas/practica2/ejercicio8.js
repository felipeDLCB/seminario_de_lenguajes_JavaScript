/*function total(prices, amounts) {
    return prices.MILK * amounts.MILK + prices.BREAD * amounts.BREAD + prices.BUTTER * amounts.BUTTER;
}

function total(prices,amounts){
    let array = Object.keys(amounts);
    let total=0;
    if (array.indexOf('MILK')>=0) {
        total+=prices.MILK*amounts.MILK;
    }
    if (array.indexOf('BREAD')>=0) {
        total+=prices.BREAD*amounts.BREAD;
    }
    if (array.indexOf('BUTTER')>=0) {
        total+=prices.BUTTER*amounts.BUTTER;
    }
    return total;
}
*/

function total(prices, amounts) {
    let vectorPrices = Object.keys(prices);
    let vectorAmounts = Object.keys(amounts);
    let total = 0;
    for (let i = 0; i < vectorAmounts.length; i++) {
        if (vectorPrices.indexOf(vectorAmounts[i]) > -1) {
            total += prices[vectorAmounts[i]] * amounts[vectorAmounts[i]];
        }
    }
    return total;
}

var prices = {
    MILK: 48.90,
    BREAD: 90.50,
    BUTTER: 130.12,
    APPLE: 30
};

var amounts = {
    MILK: 1,
    BREAD: 0.5,
    BUTTER: 0.2,
    APPLE: 2
};

console.log(typeof prices);
console.log(prices.BREAD);
console.log(amounts["MILK"]);


console.log(total(prices, amounts)); // imprime 120.174

var amounts2 = {
    BREAD: 1.5
};
console.log(total(prices, amounts2)); //debe retornar 135,75
