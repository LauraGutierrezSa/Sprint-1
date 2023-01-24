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
//ENCARA NO ESTÀ ACABAT, NO FUNCIONA COM VULL.

const myAsyncFunction = (employee) => {
    return new Promise((resolve, reject) => {
     const name = employees.find(name => name.id === employee.id);
     if (name) { resolve(name.name)}
     else { reject(`I can't find the employee that you're looking for.`)}
    })
    
};
getEmployee(2).then(employee => getSalary(employee)
.then(salary => console.log(salary)))
.catch(error => console.log(error))
   
//Nivell 1 exercici 2: Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('async function called and resolved.');
      }, 2000);
    });
  }
  
async function callAsyncFunction() {
    console.log('hold on');
    const result = await resolveAfter2Seconds();
    console.log(result);
  }
  
  callAsyncFunction();

//Nivell 2 exercici 1: Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons. Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

function multiplyByTwo(num) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(num * 2);
      }, 2000);
  });
}

multiplyByTwo(5).then((result) => {
  console.log(result);
});
