(() => { 
    const readline = require('readline').createInterface({ 
      input: process.stdin, output: process.stdout });
  
    readline.question("What's your name?", userName => { 
    readline.question("What's your last name?", userLastName => { 
    const result = `Your full name is ${userName} ${userLastName}`; 
    
    console.log(`${result}`); 
    readline.close(); }); })
      })();