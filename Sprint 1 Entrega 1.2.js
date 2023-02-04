//Nivell 1 exercici 1: Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.
console.log((() => {
  return 5+2;
})());

//Nivell 2 exercici 1: Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

const createObject = (attribute) => ({attribute});
console.log(createObject('this is the value of the attribute'))

//Nivell 2 exercici 2: Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. 
//La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. 
//Invoca el mètode dirNom des de fora de la classe.

/* Dani: Només necessites el mètode showname que has fet (és l'equivalent del dirNom que demana l'enunciat). Només has d'instanciar Persona una vegada i despres cridar el metode dirnom / showname (ja ho fas).
Pots intentar penjar-li perque si que fas el que demana l'enunciat pero no exactament com diu i potser t'ho tira enrere*/


class Person {
    #personName;
    #lastName;
    #age;
    #hairColor;
  
    constructor(personName, lastName, age, hairColor) {
      this.#personName = personName;
      this.#lastName = lastName;
      this.#age = age;
      this.#hairColor = hairColor;
    }
    getpersonName() {
      return this.#personName;
    }
    getlastName() {
      return this.#lastName;
    }
    getage() {
      return this.#age;
    }
    gethairColor() {
      return this.#hairColor;
    }
  
    setpersonName(personName) {
      this.#personName = personName;
    }
    setlastName(lastName) {
      this.#lastName = lastName;
    }
  
    setage(age) {
      this.#age = age;
    }
    setHairColor(hairColor) {
      this.#hairColor = hairColor;
    }
  
    showName() {
      console.log(`The person's name is ${this.#personName}`)
    }
  }

function createPerson(){
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      const personName = rl.question('What is your name? ', (personName) => {
          const person = new Person(personName);
          person.showName();
          });
      const personLastName = rl.question('What is your last name? ', (lastName) => {
        const person = new Person(lastName);
      });
      const  personAge = rl.question('What is your age? ', (age) => {
        const person = new Person(age);
      });
      const personHairColor = rl.question('What color is your hair? ', (hairColor) => {
        const person = new Person(hairColor);
      });
       
}

createPerson()

//Nivell 3 exercici 2: Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.
//NOTA: ENCARA NO ESTÀ ACABAT NI FUNCIONA. No estic acabant d'entendre aquest exercici ni estic segura d'estar plantejant-lo correctament.


/* Dani: Aquest jo me'l vaig deixar, l'enunciat fa una mica de trampa perquè la definició d'una classe abstracta és que no es pot instanciar.
en Java si que hi ha una paraula reservada on tu crees una classe explicitament abstracta. En javascript la manera habitual és 
que dins el constructor de la classe que vols que sigui abstracta has de tenir un if que impedeixi instanciarla. Jo vaig intentar fer aixo + crear una segona classe que fos hereva 
i instanciar l'hereva pero em va dir que no. La gent que ho ha resolt no crea cap classe, fa una funció a l'antiga (abans de ecma6) y ho fa amb la paraula prototype i un if que impedeixi instanciar.
Ho pots intentar o saltar-t'ho, pero no passis dies en aixo pq no crec que aporti massa.
Molt bé perquè fins ara estas fent servir callbacks i maneig d'errors que no es veu fins al final de l'sprint pero t'estas complicant la vida més del compte.

*/


class BodyFeatures {
    constructor(type) {
      this.type = type;
    }
  }
  
  class EyeColor extends BodyFeatures {
    constructor(color) {
      super('EyeColor');
      this.color = color;
    }
  }
  
  class HairLenght extends BodyFeatures {
    constructor(lenght) {
      super('HairLenght');
      this.lenght = lenght;
    }
  }
  
  const EyeColour = createFeature('EyeColor', { color: 'brown' });
  console.log(EyeColor);
  
  const HairLenght1 = createFeature('HairLenght', { lenght: 'short' });
  console.log(HairLenght); 

  function createFeature(type, options) {
    switch(type) {
      case 'EyeColor':
        return new EyeColour(options.color);
      case 'HairLenght':
        return new HairLenght1(options.lenght);
      default:
        throw new Error(`This body feature doesn't exist: ${type}`);
    }
  }
