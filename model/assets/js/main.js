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
          result.push(Math.floor(this.resultado));
        },
      };
    };
    imc().date();
    console.log(result);
    if (result <= 18.5) {
      read.innerHTML = `Peso Normal`;
    } else if (result >= 25) {
      read.innerHTML = `Peso Ideal`;
    } else if (result >= 30) {
      read.innerHTML = `Acima do Peso`;
    } else if (result >= 35) {
      read.innerHTML = `Obesidade I`;
    } else if (result >= 40) {
      read.innerHTML = `Obesidade II (severa)`;
    } else if (result >= 41) {
      read.innerHTML = `Obesidade III (mórbida)`;
    }
  };
  formClass.addEventListener("submit", formEvent);
};

calcImc();


