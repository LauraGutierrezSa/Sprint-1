//Sprint 1.3 nivell 1 exercici 2:

const arrowFunction = (parameter, callback = (a, b) => {
    let sum = a + b;
    console.log("Sum is: " + sum);
   }) => {
    if (parameter === 'sum')
    return callback(5, 8);
    else (callback('Not a sum', 0))
   };

arrowFunction('sum');

module.exports = arrowFunction