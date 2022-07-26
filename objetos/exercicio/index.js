const form = () => {
  const formClass = document.querySelector(".form");
  const array = [];
  const formEvent = (event) => {
    //não da reload do site
    event.preventDefault();
    //pega valores de cada campo
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;
    const dateForm = {
      nome: nome,
      email: email,
      senha: senha,
      date() {
        array.push(this.nome, this.email, this.senha);
      },
    };
    console.log(dateForm);
  };
  formClass.addEventListener("submit", formEvent);
};

form();
