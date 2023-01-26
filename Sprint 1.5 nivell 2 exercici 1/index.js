//Sprint 1.5 nivell 2 exercici 1: Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.

function recursivePrint(message, count) {
    console.log(message);
    if (count > 0) {
        setTimeout(() => {
            recursivePrint(message, count - 1);
        }, 1000);
    }
}

recursivePrint("hola profe", 5);

// Sprint 1.5 nivell 2 exercici 2: Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador utilizant Node Child Processes.

