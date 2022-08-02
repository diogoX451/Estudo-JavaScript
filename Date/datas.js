// para definir datas chamas o construtor new Date()

const data = new Date(); // ano, mes, dia, hora, minuto, segundo, milisegundo
console.log(data.toJSON())

const formataData = (data) => {
    return console.log(data.toLocaleDateString());
}
let teste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
teste.at(1);
console.log(teste);
formataData(data);