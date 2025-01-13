// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToEuro = function(valueInDollar){
    let valueInEuro = valueInDollar * 0.935;
    return valueInEuro;
}
const fromDollarToYen = function(valorInEuro){
    let valueInYen = valorInEuro * 0.00684;
    return valueInYen;
}
const fromYenToPound = function(valorInYen){
    let valueInPound = valorInYen * 0.0055 ;
    return valueInPound;
}
//Exporta la funciona para usarla en otros archivos
//(similar a la palabra clave "export" cuando se usa webpack)
module.exports = { fromEuroToDollar,fromDollarToEuro,fromDollarToYen, fromYenToPound };






