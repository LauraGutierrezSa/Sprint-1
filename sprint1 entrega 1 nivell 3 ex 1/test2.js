const countToNine = () => {
    for (let i =0; i < 10; i++) {console.log(i)}
}

let functionArray = new Array(10)
//alimentando el array con las funciones que cuentan de 0 a 9.
for (let i = 0; i < functionArray.length; i++) { 
    functionArray[i] = countToNine}  

functionArray.forEach(element => element())