// Function
// Description: Bloco de codigo que pode ser chamada repetidamente.
// Syntax: function name(parameter1, parameter2, parameter3) {
//   code to be executed;
// }
// Arrow Function
// metodo mais simples para criar uma funcao

function array(cidade) {
  const arrayCidade = [];
  arrayCidade.push(cidade);
  console.log(arrayCidade);
}
array("Palmas");

//Teste
function teste(mensage) {
  let script = mensage;
  console.log(`Bom dia Senhor ${script}`);
  return `Ok`; //Retorna se o script deu certo
}
const variable = teste("Diogo");
console.log(variable);

//Arrow Function
const cidadeA = (municipio) => {
  const arrayCidade = [];
  arrayCidade.push(municipio);
  console.log(arrayCidade);
};

cidadeA("São Paulo");
