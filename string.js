
// String são indexadas por 0 até 
//              012345
let umaString = "Diogo dos Reis Almeida";

console.log(umaString[3]);
console.log(umaString.toUpperCase())
//pegar um elemento
console.log(umaString.charAt(3));
//adicionar um elemento
console.log(umaString.concat(" ", "Almeida"));
//saber qual posição do index
console.log(umaString.indexOf("Diogo"));
//slice(startString, endString)
console.log(umaString.slice(0, 3));
//dividir em array
console.log(umaString.split(" ", 2));

// Link sobre as Strings: https://www.w3schools.com/js/js_string_methods.asp