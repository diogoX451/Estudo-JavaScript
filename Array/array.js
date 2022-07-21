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
