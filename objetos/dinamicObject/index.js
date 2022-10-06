//forma para declarar um objeto

const pessoa = {
  nome: "Diogo",
  sobreNome: "Almeida ",
};

const acesskey = "sobreNome";
console.log(pessoa[acesskey]);

// chamar um Objeto utilizando New

const cidade = new Object();
cidade.city = "São Paulo";
console.log(cidade);

// padrões de projetos
/**
 * Factory fuctions
 * Constructor functions => Basea-se no "New"
 * Classes
 */

const createUser = (name, lastName) => {
  return {
    name,
    lastName,
    get fullNAme() {
      return `${this.name} ${this.lastName}`;
    },
  };
};

const user = createUser("Diogo", "Almeida");
console.log(user.fullNAme);
