//Nivell 1 exercici 1: Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

const hasCovid = true;
const covid = new Promise((resolve, reject) => {
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

covid
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

const getEmployee = () => {
    return new Promise((resolve, reject) => {
      if (employees[1]) {
          resolve(employees[1])
      } else {
          reject(`Employee with id ${1} not found`)
      }
    });
  };
 
getEmployee(1).then(employee => console.log(employee));
getEmployee(5).catch(error => console.log(error))

//Nivell 2 exercici 2:

const getSalary = (employee) => { 
    return new Promise((resolve, reject) => { 
        const salary = salaries.find(salary => salary.id === employee.id); 
        if (salary) { resolve(salary.salary); } 
        else { reject(`The salary of the employee with id ${employee.id} was not found`); } }); }; 
        
        getEmployee(1).then(employee => getSalary(employee)
        .then(salary => console.log(salary)))
        .catch(error => console.log(error))
