//Nivell 1 exercici 1: Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre. Nota: Utilitza l'intèrpret de node en tots els casos.

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

//Nivell 2 exercici 1: Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge. Nota: Utilitza l'intèrpret de node en tots els casos.

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('What is your full name? Please enter your first name and your last name:', (answer) => {
  console.log(`Your full name is ${answer}`);

  rl.close();
});

//Nivell 2 exercici 2: Invoca una funció que retorni un valor des de dins d'una template literal. Nota: Utilitza l'intèrpret de node en tots els casos.

const username = "Laura";
const futureProfession = "programmer";

function invokeFunction(strings, username, futureProfession) {
  const str0 = strings[0];
  const str1 = strings[1]; 
  const str2 = strings[2]; 

  return `${str0}${username}${str1}${futureProfession}${str2}`;
}

const output = invokeFunction`Her name is ${username} and she will be a ${futureProfession}.`;

console.log(output);

//Nivell 3 exercici 1: Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.

const countToNine = () => {
    for (let i =0; i < 10; i++) {console.log(i)}
}

let functionArray = new Array(10)
//alimentando el array con las funciones que cuentan de 0 a 9.
for (let i = 0; i < functionArray.length; i++) { 
    functionArray[i] = countToNine}  

functionArray.forEach(element => element())

//Nivell 3 exercici 2: Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.

(() => { 
    const readline = require('readline').createInterface({ 
      input: process.stdin, output: process.stdout });
  
    readline.question("What's your name?", userName => { 
    readline.question("What's your last name?", userLastName => { 
    const result = `Your full name is ${userName} ${userLastName}`; 
    
    console.log(`${result}`); 
    readline.close(); }); })
      })();

