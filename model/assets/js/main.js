const imc = () => {
  const formClass = document.querySelector(".form");
  const formEvent = (event) => {
    event.preventDefault();
    const peso = Number(document.querySelector("#peso").value);
    const altura = Number(document.querySelector("#altura").value);
    const read = document.querySelector(".result");
    const result = [];
    const calcImc = () => {
      return {
        peso: peso,
        altura: altura,
        resultado: peso / (altura * altura),
        date() {
          result.push(this.resultado.toFixed(1));
        },
      };
    };
    calcImc().date();
    const erro = () => {
      if (isNaN(calcImc().resultado)) {
        read.innerHTML = "Por favor Escreva um valor válido";
        return;
      }
    }
    erro();
    if (result <= 18.5) {
      read.innerHTML = `Abaixo do Peso`;
    } else if (result >= 24.9) {
      read.innerHTML = `Peso Ideal`;
    }
    if (result >= 29.9) {
      read.innerHTML = `Acima do Peso`;
    } else if (result >= 34.9) {
      read.innerHTML = `Obesidade I`;
    }
    if (result >= 39.9) {
      read.innerHTML = `Obesidade II (severa)`;
    } else if (result >= 40) {
      read.innerHTML = `Obesidade III (mórbida)`;
    }
  };
  formClass.addEventListener("submit", formEvent);

};

imc();
