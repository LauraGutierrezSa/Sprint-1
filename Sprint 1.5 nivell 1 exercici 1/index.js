// Exercici 1: Crea una funció que, en executar-la, escrigui una frase en un fitxer.

function writeInFile() {
const fs = require('fs'); 

fs.writeFile('archivo.txt', 'Hola mundo!!', (err) => { if (err) throw err; 
    
//console.log('Archivo guardado!'); 
});}

writeInFile()

// Exercici 2: Crea una altra funció que mostri per consola el contingut del fitxer anterior.



// Exercici 3: Crea una funció que comprimeixi el fitxer del nivell 1.
