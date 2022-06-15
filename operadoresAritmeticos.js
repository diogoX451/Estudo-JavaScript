/**
 * Operadores Aritmeticos
 * +, -, *, /, %
 * + = Adição
 * - = Subtração
 * * = Multiplicação
 *  / = Divisão
 * % = Módulo(Resto da divisão)
 * (**) = Potenciação
 * */

//Soma
const num1 = 5;
const num2 = 2;
let num3 = num1 + num2;
console.log(num3);

//Subtração
num3 = num1 - num2;
num3++; //Incrementa o valor de num3
console.log(num3);

//Multiplicação
num3 = num1 * num2;
num3--; //Decrementa o valor de num3
console.log(num3);

//Divisão
num3 = num1 / num2;
num3 = num3 + 2; //Incrementa o valor de num3
console.log(num3);

//Módulo
num3 = num1 % num2;
console.log(num3);

//Potenciação
num3 = num1 ** num2;
while (num3 <= 100) {
    num3++;
    console.log(num3);
}

//converter string para numero
const num4 = parseInt('5');
console.log(typeof num4);

//converter string para numero com ponto flutuante
const num5 = parseFloat('5.5'); // retorna 5.5 em numero
console.log(typeof num5);
