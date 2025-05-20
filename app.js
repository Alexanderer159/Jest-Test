const fromEuroToDollar = function(valueInEuro) {
let valueInDollar = valueInEuro * 1.07;
return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
let valueInYen = valueInDollar * 144.45;
return valueInYen;
}

const fromYenToPound = function(valueInYen) {
let valueInPound = valueInYen * 0.0052;
return valueInPound;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }