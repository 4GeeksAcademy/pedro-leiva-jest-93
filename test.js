// Importar la función sum del archivo app.js
const {fromEuroToDollar, fromDollarToEuro, fromDollarToYen, fromYenToPound} = require('./app.js');
//nuevo 1-------------------------------------------------//
test("Un dollar deberia ser 0.935euros", function(){
    const euro = fromDollarToEuro(6);
    const expected = 6 * 0.935;
    expect(fromDollarToEuro(6)).toBe(5.61);
});
//nuevo 2-------------------------------------------------//
test("1 dollar deberia ser 0.00684 DOLLARS", function(){
    const yen = fromDollarToYen(6);
    const expected = 6 * 0.00684;
    expect(fromDollarToYen(6)).toBe(0.04104);
});
//nuevo 3-------------------------------------------------//
test("1 yen deberia ser 179,88 Pounds", function(){
    const yen = fromYenToPound (6);
    const expected = 6 * 0.0055;
    expect(fromYenToPound(6)).toBe(0.033);
});
//Prueba---------------------------------------------------------------//
test("One euro should be 1.07 dollars", function() {
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});



