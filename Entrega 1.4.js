//Codi de l'entrega 1.3 que necessito per que funcioni el 1.4:

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
          reject(`I can't find the employee with id ${1}`)
      }
    });
  };
 
getEmployee(1).then(employee => console.log(employee));
getEmployee(5).catch(error => console.log(error));

const getSalary = (employee) => { 
    return new Promise((resolve, reject) => { 
        const salary = salaries.find(salary => salary.id === employee.id); 
        if (salary) { resolve(salary.salary); } 
        else { reject(`The salary of the employee with id ${employee.id} was not found`); } }); }; 
        
        getEmployee(1).then(employee => getSalary(employee)
        .then(salary => console.log(salary)))
        .catch(error => console.log(error))

//Nivell 1 exercici 1: Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.

