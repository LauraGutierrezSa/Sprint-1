//Nivell 1 exercici 1: Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.

(() => { 
    const readline = require('readline').createInterface({ 
      input: process.stdin, output: process.stdout });
  
    readline.question("Enter the first number: ", firstNum => { 
    readline.question("Enter the second number: ", secondNum => { 
    const result = Number(firstNum) + Number(secondNum); 
    
    console.log(`The sum of ${firstNum} and ${secondNum} is ${result}.`); 
    readline.close(); }); })
      })();

//Nivell 2 exercici 1: Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

const objectAttribute = "red";

const objectMaker = () => {
    const createdObject = {
        objName: "Laura",
        objAge: 35,
        objHairColor: objectAttribute,
        objHasChildren: true
    }
    const result = createdObject;
    console.log(result)
};

objectMaker();

//Nivell 2 exercici 2: Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.

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
