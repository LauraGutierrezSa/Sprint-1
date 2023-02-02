//Nivell 1 exercici 1: Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre. Nota: Utilitza l'intèrpret de node en tots els casos.

function showNameThroughConsole(userName) {
  console.log(userName)
};

//Nivell 2 exercici 1: Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge. Nota: Utilitza l'intèrpret de node en tots els casos.

let userName = "Laura";
let lastName = "Gutiérrez";

console.log(`Your full name is ${userName} ${lastName}`);


//Nivell 2 exercici 2: Invoca una funció que retorni un valor des de dins d'una template literal. Nota: Utilitza l'intèrpret de node en tots els casos.

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

let functionArray = new Array(10);

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
