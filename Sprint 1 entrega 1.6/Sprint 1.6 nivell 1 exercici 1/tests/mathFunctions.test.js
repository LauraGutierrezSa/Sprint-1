const {sum, substract, multiply, divide  }= require('../app/mathFunctions.js');

console.log(sum(""));
console.log(sum("3", "4"));

test('sum 3 and 4 returns 7', function () {

    const expectedResult = 7

    const resultSum = sum(3, 4)

    expect( resultSum ).toBe( expectedResult )
})


test('add 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Substract 3 - 2 and return 1', () => {
    expect(substract(3, 2)).toBe(1);
});

test('multiply 2 * 3 and return 6', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('Divide 6 / 2 and return 3', () => {
    expect(divide('6', '2')).toBe(3);
});

test('In divide function, user enters a 0 as divisor', () => {
    expect(divide('2', 0)).toBe('Please enter a valid divisor.');
});
