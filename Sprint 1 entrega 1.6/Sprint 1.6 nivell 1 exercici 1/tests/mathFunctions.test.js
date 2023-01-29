const {sum, substract, multiply, divide  }= require('../app/mathFunctions.js');

console.log(sum(""));
console.log(sum("3", "4"));

describe("sum() function tests", () => {
    test("sum of 2 and 3 should equal 5", () => {
        expect(sum(2, 3)).toBe(5);
    });
    test("sum of -2 and 3 should equal 1", () => {
        expect(sum(-2, 3)).toBe(1);
    });
    test("sum of 0 and 0 should equal 0", () => {
        expect(sum(0, 0)).toBe(0);
    });
});

describe("substract() function tests", () => {
    test("subtraction of 2 and 3 should equal -1", () => {
        expect(substract(2, 3)).toBe(-1);
    });
    test("subtraction of -2 and 3 should equal -5", () => {
        expect(substract(-2, 3)).toBe(-5);
    });
    test("subtraction of 0 and 0 should equal 0", () => {
        expect(substract(0, 0)).toBe(0);
    });
});

describe("multiply() function tests", () => {
    test("multiplication of 2 and 3 should equal 6", () => {
        expect(multiply(2, 3)).toBe(6);
    });
    test("multiplication of -2 and 3 should equal -6", () => {
        expect(multiply(-2, 3)).toBe(-6);
    });
    test("multiplication of 0 and 5 should equal 0", () => {
        expect(multiply(0, 5)).toBe(0);
    });
});

describe("divide() function tests", () => {
    test("division of 6 and 3 should equal 2", () => {
        expect(divide(6, 3)).toBe(2);
    });
    test("division of -6 and 3 should equal -2", () => {
        expect(divide(-6, 3)).toBe(-2);
    });
    test("division of 0 and 5 should equal 0", () => {
        expect(divide(0, 5)).toBe(0);
    });
    test("division of 5 and 0 should throw an error", () => {
        expect(() => { divide(5, 0) }).toThrow();
    });
})
