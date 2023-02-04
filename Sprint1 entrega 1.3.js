//Nivell 1 exercici 1: Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

const hasCovid = true;
const covid = (hasCovid) => new Promise((resolve, reject) => {
    if(!hasCovid) {
        const covidSymptoms = {
            fever: 'I have a fever',
            headache: true,
            cough: 'I cough a lot'
        }
        resolve(covidSymptoms);
    } else {
        reject(new Error('Covid test showed a negative result. Everything OK.'))
    }
});

covid()
    .then( res => {
        console.log('Covid test showed a positive result. Off to quarantine you go.');
        console.log(res);
    })
    .catch( err => {
        console.log(err.message);
    })

//Nivell 1 exercici 2: Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

const arrowFunction = (parameter, callback = (a, b) => {
    let sum = a + b;
    console.log("Sum is: " + sum);
   }) => {
    if (parameter === 'sum')
    return callback(5, 8);
    else (callback('Not a sum', 0))
   };

arrowFunction('sum');

////Nivell 2 - Exercici 1: Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];
  module.exports.salaries = salaries
  
  const getEmployee = (id) =>
    new Promise((resolve, reject) => {
      if (id === undefined) {
        reject(new Error('Please enter a valid id.'))
      }
      const employee = employees.find((employee) => employee.id === id)
      employee
        ? resolve(employee)
        : reject(new Error(`The id ${id} was not found, please enter a valid id.`))
    })
  module.exports.getEmployee = getEmployee
  
  getEmployee(1).then((res) => console.log('Employee with if nº 1 is:', res))
  getEmployee(2).then((res) => console.log('Employee with id nº 2  is:', res))
  getEmployee(4).catch((err) => console.log(err.message));

//Nivell 2 exercici 2: Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.

const getSalary = (employee) => { 
    return new Promise((resolve, reject) => { 
        const salary = salaries.find(salary => salary.id === employee.id); 
        if (salary) { resolve(salary.salary); } 
        else { reject(`The salary of the employee with id ${employee.id} was not found`); } }); }; 
        
        getEmployee(1).then(employee => getSalary(employee)
        .then(salary => console.log(salary)))
        .catch(error => console.log(error))
