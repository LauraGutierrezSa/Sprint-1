const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showUsername(name) {
  console.log(name);
}

rl.question('Please enter your username: ', (name) => {
  showUsername(name);
  rl.close();
});
  