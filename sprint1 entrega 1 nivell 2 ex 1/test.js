const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('What is your full name? Please enter your first name and your last name:', (answer) => {
  console.log(`Your full name is ${answer}`);

  rl.close();
});