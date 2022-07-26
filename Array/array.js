// Array é uma lista de coisas que podemos adicionar em um array
// Todo array começa com indice 0
// Para puxar um lista de coisas usa coxetes []
// Todo array é um Objeto
const arrayCidade = ["São Paulo", "Rio de Janeiro", "Belo Horizonte"];
console.log(arrayCidade);

// Adicionar mais um lemento no array
arrayCidade[3] = "Palmas";

// Metodo mais recomendado para adicionar um elemento array
arrayCidade.push("Manaus");
console.log(arrayCidade);

// Adicionar elemento do array se utilizando .lenght
arrayCidade[arrayCidade.length] = "Rio Branco ";
console.log(arrayCidade);

//Adicionar um array no primeiro indice utiliza .unshift
arrayCidade.unshift("Porto de Galinhas");
console.log(arrayCidade);

//Para remover um elemento do array  utiliza .pop
//Pode salvar o que foi removido em uma variavel
let remove = arrayCidade.pop();
console.log(`O elemento que foi removido foi ${remove}`);

//Selecionar varios elementos no Array ultilizar .slice
console.log(arrayCidade.slice(0, 2));

//testar se é um array
console.log(arrayCidade instanceof Array);

//Logicas em questão de Array
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = a;
console.log(b);
// nesse caso b esta sendo referenciado ao Array de A
// no entanto
let c = [...b, 2];
let d = c;
console.log(d);
// nesse caso d esta sendo referenciado ao Array de C
