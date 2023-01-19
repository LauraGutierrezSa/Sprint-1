(() => { 
  const readline = require('readline').createInterface({ 
    input: process.stdin, output: process.stdout });

  readline.question("Enter the first number: ", firstNum => { 
  readline.question("Enter the second number: ", secondNum => { 
  const result = Number(firstNum) + Number(secondNum); 
  
  console.log(`The sum of ${firstNum} and ${secondNum} is ${result}.`); 
  readline.close(); }); })
    })();