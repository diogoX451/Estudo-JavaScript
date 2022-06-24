let num = 10000;
let num2 = 3.5;

console.log(num.toString() + num2);

//fazer a representação binaria
console.log(num.toString(2));
//trabalhar com casas decimais
let number = 10.52014898412
console.log(number.toFixed(3));
//Saber se um numero é um inteiro
console.log(Number.isInteger(num));
//Trabalhar caso for Nan
let temp = num * 'Opa';
console.log(Number.isNaN(temp));

console.log(Math.random(num2));
//Arredonda um numero
console.log(Math.floor(num2));
//Sobe um numero
console.log(Math.ceil(num2));

const aleatorio = parseInt(Math.random() * (10 - 1) + 1);
console.log(aleatorio);
if (aleatorio == 5) {
    console.log('Acertou');
} else {
    console.log('Errou');
}