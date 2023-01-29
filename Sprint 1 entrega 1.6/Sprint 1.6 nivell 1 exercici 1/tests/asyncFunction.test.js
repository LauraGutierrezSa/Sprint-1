const callAsyncFunction = require('../app/asyncFunction.js');

describe("tests for the callAsyncFunction() function using fake timers", () => {
    test("callAsyncFunction() should call resolveAfter2Seconds() and return 'async function called and resolved.'", async () => {
        jest.useFakeTimers();
        console.log = jest.fn();
        callAsyncFunction();
        jest.runAllTimers();
        expect(console.log).toHaveBeenCalledWith('hold on');
        expect(console.log).toHaveBeenCalledWith('async function called and resolved.');
    });
});

describe("test for the resolveAfter2Seconds() function using fake timers", () => {
    test("resolveAfter2Seconds() should return a promise that resolves after 2 seconds", async () => {
        jest.useFakeTimers();
        const start = Date.now();
        const promise = resolveAfter2Seconds();
        jest.runAllTimers();
        const result = await promise;
        const end = Date.now();
        expect(result).toEqual('async function called and resolved.');
        expect(end - start).toBeGreaterThanOrEqual(2000);
    });
});