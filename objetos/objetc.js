//Criar objetos quando se relaciona um objeto com outro
const cidade = {
  nome: "São Paulo",
  estado: "SP",
};

// para acessar objeto
console.log(cidade.nome);

// outros metodos,
const cidade1 = (nome, estado) => {
  return {
    nome,
    estado,
    save() {
      console.log(`A cidade ${this.nome} foi salva no banco`);
    },
  };
};

cidade1("Palmas de Monte Alto", "TO").save();

const valores = (valor) => {
  return {
    valor,
    soma() {
      return console.log((this.valor += 50));
    },
    multiplication() {
      return console.log(this.valor * 2);
    },
  };
};

valores(50).multiplication();
