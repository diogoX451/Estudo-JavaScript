const calcImc = () => {
  const formClass = document.querySelector(".form");
  const formEvent = (event) => {
    event.preventDefault();
    const peso = document.querySelector("#peso").value;
    const altura = document.querySelector("#altura").value;
    const read = document.querySelector(".result");
    const result = [];
    const imc = () => {
      return {
        peso: peso,
        altura: altura,
        resultado: peso / (altura * altura),
        date() {
          result.push(this.resultado);
          if (this.resultado <= 18.5) {
            read.innerHTML = `Peso Normal`;
          }
          if (this.resultado >= 24.9) {
            read.innerHTML = `Peso Ideal`;
          }
          if (this.resultado >= 29.9) {
            read.innerHTML = `Acima do Peso`;
          }
          if (this.resultado >= 34.9) {
            read.innerHTML = `Obesidade I`;
          }
          if (this.resultado >= 39.9) {
            read.innerHTML = `Obesidade II (severa)`;
          }
          if (this.resultado >= 40) {
            read.innerHTML = `Obesidade III (mórbida)`;
          }
        },
      };
    };
    imc().date();
    console.log(result);
  };
  formClass.addEventListener("submit", formEvent);
};

calcImc();
