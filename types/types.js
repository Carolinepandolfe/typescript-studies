"use strict";
// string
let nome = "Carol";
console.log(nome);
// numbers
let idade = 25;
// boolean
let possuiHobbies = false;
// tipos explícitos
let minhaIdade;
minhaIdade = 25;
console.log(minhaIdade);
// array
let hobbies = ["Cozinhar", "Codar"];
console.log(typeof hobbies);
hobbies = [10, 20, 30];
console.log(hobbies);
// tuplas = array com quantidade e tipos pré definidos
let endereco = ["Av. Principal", 99, "teste"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Vermelho"] = 200] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Vermelho;
console.log(minhaCor);
// any
let carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);
// funções
function retornaMeuNome() {
    // return minhaIdade
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("Oi");
    // return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// console. log (multiplicar(2, 'Bia'))
console.log(multiplicar(4, 9));
// tipo função
let calculo;
calculo = multiplicar;
console.log(calculo(2, 6));
// objetos
let usuario = {
    nome: "Carol",
    idade: 26,
};
// DESAFIO
let funcionario = {
    supervisores: ["Ca", "Rol", "Ine"],
    ponto(horas) {
        if (horas <= 8) {
            return "Ponto normal";
        }
        else {
            return "Fora do horario";
        }
    },
};
console.log(funcionario.ponto(50));
