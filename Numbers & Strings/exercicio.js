// nome
let nome;
nome = "Diogo";
let sobreNome;
sobreNome = "Almeida";

const nomeCompleto = nome + " " + sobreNome;
console.log(nomeCompleto);

//Idade
let idade = 18
let anoNascimento;
anoNascimento = 2022 - idade;
console.log(`Olá ${nomeCompleto}, você tem ${idade} anos`);

// altura
let altura = 1.80;
let peso = 50
const calcIMC = peso / (altura * 2)
console.log(`Olá ${nomeCompleto}, você tem ${idade} anos e nasceu ${anoNascimento}, você tem ${altura}metros e seu IMC é ${calcIMC}`);