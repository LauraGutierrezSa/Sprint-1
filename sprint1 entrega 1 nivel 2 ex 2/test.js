const username = "Laura";
const futureProfession = "programmer";

function invokeFunction(strings, username, futureProfession) {
  const str0 = strings[0];
  const str1 = strings[1]; 
  const str2 = strings[2]; 

  return `${str0}${username}${str1}${futureProfession}${str2}`;
}

const output = invokeFunction`Her name is ${username} and she will be a ${futureProfession}.`;

console.log(output);
