const arrowFunction = require('../app/promisesCallbacks.js');

describe("arrowFunction()", () => {
    test("parameter 'sum' should call the callback with 5 and 8 and log the sum", () => {
        console.log = jest.fn();
        arrowFunction('sum');
        expect(console.log).toHaveBeenCalledWith("Result of sum is 13");
    });

    test("parameter 'not sum' should call the callback with 'Not a sum' and 0", () => {
        console.log = jest.fn();
        arrowFunction('not sum');
        expect(console.log).toHaveBeenCalledWith("Not a sum");
    });

    test("when no parameter is passed it should call the callback with 'Not a sum' and 0", () => {
        console.log = jest.fn();
        arrowFunction();
        expect(console.log).toHaveBeenCalledWith("Not a sum");
    });
});