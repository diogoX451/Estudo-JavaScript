// As condicionais são para mudar fluxo do sistema e executar uma ação.
// Existem 3 tipos de condicionais:
// 1. If
// 2. else
// 3. else if
// Necessario de if antes do else

const hora = Date.now();
const data = new Date(hora);
const dataFormatada = data.toLocaleDateString();

if (dataFormatada == "27/08/2022") {
  console.log(`Hoje é dia ${dataFormatada}, parabens!`);
} else {
  console.log(`Hoje é dia ${dataFormatada}, não é dia de aniversário!`);
}

if (dataFormatada == "27/08/2022" || dataFormatada == "27/07/2022") {
  console.log(`Hoje é dia ${dataFormatada}, parabens!`);
} else {
  console.log(`Hoje é dia ${dataFormatada}, não é dia de aniversário!`);
}
