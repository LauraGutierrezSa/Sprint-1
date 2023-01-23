//Nivell 1 exercici 1: Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre. Nota: Utilitza l'intèrpret de node en tots els casos.

/* Dani: no et fa falta el readline, el que et demana es una funcio que faci 
console log del parametre que se li passa. són 2 linies de codi. */

/*Laura: (Estava fent això quan ho ha revisat el Dani)
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
});*/

function showNameThroughConsole(userName) {
  console.log(userName)
};

//Nivell 2 exercici 1: Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge. Nota: Utilitza l'intèrpret de node en tots els casos.

/* Dani: semblant a l'anterior, el que et demana es tan xorra que costa d'entendre. has de declarar i inicialitzar 2 variables nom i cognom i fer un console log amb literals
podries borrar tot excepte el console log,una linia mes amunt fer let answer = "laura" i seria mes menys el que t'esta demanant.*/

/*Laura: De nou, això és el que li vaig passar al Dani per revisar:

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('What is your full name? Please enter your first name and your last name:', (answer) => {
  console.log(`Your full name is ${answer}`);

  rl.close();
});*/

let userName = "Laura";
let lastName = "Gutiérrez";

console.log(`Your full name is ${userName} ${lastName}`);


//Nivell 2 exercici 2: Invoca una funció que retorni un valor des de dins d'una template literal. Nota: Utilitza l'intèrpret de node en tots els casos.

/* Dani: desastre d'enunciat, te l'escric com crec que hauria d'estar en base als feedbacks que vaig rebre jo:
Desde dins un template literal, invoca una funcio que retorni un valor.
*/

/* Laura: No ho vaig entendre bé (el català i jo no ens portem massa bé). Això és el que li vaig lliurar:

const username = "Laura";
const futureProfession = "programmer";

function invokeFunction(strings, username, futureProfession) {
  const str0 = strings[0];
  const str1 = strings[1]; 
  const str2 = strings[2]; 

  return `${str0}${username}${str1}${futureProfession}${str2}`;
}

const output = invokeFunction`Her name is ${username} and she will be a ${futureProfession}.`;

console.log(output);*/

function random(){
  return 1234;
}
console.log(`${random()}`)

//Nivell 3 exercici 1: Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. 
//Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.

/* Dani: Funciona com demana l'enunciat */
const countToNine = () => {
    for (let i =0; i < 10; i++) {console.log(i)}
}

let functionArray = new Array(10)
//alimentando el array con las funciones que cuentan de 0 a 9.
for (let i = 0; i < functionArray.length; i++) { 
    functionArray[i] = countToNine}  

functionArray.forEach(element => element())

//Nivell 3 exercici 2: Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.

/* Dani: et dira que no es correcte pq la funcio autoinvocable no esta igualada a una variable 
(aixo ho soluciones afegint un let variable1 = <el codi que ja tens>)
la funcio no està rebent cap parametre, aixo et dira que no fa el que diu l'enunciat.
la funcio fa mes coses de les que et demana l'enunciat i potser et diu que no cal tot aixo.
*/

((greeting) => { 
  let = greeting = "Hello there,";
  const readline = require('readline').createInterface({ 
    input: process.stdin, output: process.stdout });

  readline.question("What's your name?", userName => { 
  readline.question("What's your last name?", userLastName => { 
  const result = `${greeting} your full name is ${userName} ${userLastName}`; 
  
  console.log(`${result}`); 
  readline.close(); }); })
    })();
