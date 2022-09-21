// Utilização dor for
// syntax for(variavel; condição; incremento){}

for (let i = 0; i <= 30; i++) {
  const array = [i];
  for (let j = 0; j < array.length; j++) {
    if (array[j] % 2 == 0) {
      console.log("PAR");
    } else if (array[j] % 2 != 0) {
      console.log("IMPAR");
    }
  }
}
