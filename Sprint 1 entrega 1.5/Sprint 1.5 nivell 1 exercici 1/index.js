// Exercici 1: Crea una funció que, en executar-la, escrigui una frase en un fitxer.

function writeInFile() {
const fs = require('fs'); 

fs.writeFile('archivo.txt', 'Hola mundo!!', (err) => { if (err) throw err; 
});}

writeInFile()

// Exercici 2: Crea una altra funció que mostri per consola el contingut del fitxer anterior.

function readFromFile() {
    const fs = require('fs'); 

    fs.readFile('archivo.txt', 'utf8', (err, data) => {
        if (err) throw err; 
        
        console.log(data);
    });
}

readFromFile();

// Exercici 3: Crea una funció que comprimeixi el fitxer del nivell 1.

const zlib = require('zlib');
function compressFile() {
    const fs = require('fs'); 
    fs.readFile('archivo.txt', (err, data) => {
        if (err) throw err; 
        zlib.gzip(data, (err, compressed) => {
            if (!err) {
                fs.writeFile('archivo.txt.gz', compressed, (err) => {
                    if (err) throw err;
                    console.log("File compressed successfully");
                });
            }
        });
    });
}

compressFile();