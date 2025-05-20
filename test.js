test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(1);
    const expecteddollar = 1 * 1.07; 
    expect(dollars).toBe(expecteddollar);
    })
test("1.07 dollars should be 154.5615 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(1.07);
    const expectedyen = 1.07 * 144.45; 
    expect(yens).toBe(expectedyen);
    })
test("154.5615 yen should be 0.8037198 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(154.5615);
    const expectedpound = 154.5615 * 0.0052; 
    expect(pounds).toBe(expectedpound);
    })