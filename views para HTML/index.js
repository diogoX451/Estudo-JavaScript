//Só para navegador
alert("Oba familia");

//Para confirmar algumas coisa no navegador
if (window.confirm("Você quer continuar?") == true) {
    //Caixa de texto
    const campoNome = window.prompt("Digite aqui seu nome: ");
    console.log(campoNome);
} else {
    alert("Você cancelou");
    console.log('obrigado por acessar');
}

let numero = parseFloat(prompt("Digite um número: "));
numero = numero + 1;
console.log(numero);


