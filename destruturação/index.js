const teste = {
  nome: "Diogo",
  age: 20,
  address: {
    city: "São Paulo",
    state: "SP",
  },
};

// para ter uma destruturação de uma variavel e usar {}

const { nome } = teste;
// para mudar toda alteração do objeto
// para alterar não pode existir a variavel

const { nome: teste1 = "Guilherme" } = teste;
console.log(teste1);
