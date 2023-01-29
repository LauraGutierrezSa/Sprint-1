//Nivell 2 - Exercici 1: Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.

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

//Nivell 2 exercici 2: Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.

const getSalary = (employee) => { 
    return new Promise((resolve, reject) => { 
        const salary = salaries.find(salary => salary.id === employee.id); 
        if (salary) { resolve(salary.salary); } 
        else { reject(`The salary of the employee with id ${employee.id} was not found`); } }); }; 
        
        getEmployee(1).then(employee => getSalary(employee)
        .then(salary => console.log(salary)))
        .catch(error => console.log(error))

module.exports = {
    getEmployee,
    getSalary
}