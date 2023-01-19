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

