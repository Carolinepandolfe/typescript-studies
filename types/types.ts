// string
let nome = "Carol";
console.log(nome);

// numbers
let idade = 25;

// boolean
let possuiHobbies = false;

// tipos explícitos
let minhaIdade: number;
minhaIdade = 25;
console.log(minhaIdade);

// array
let hobbies: any[] = ["Cozinhar", "Codar"];
console.log(typeof hobbies);

hobbies = [10, 20, 30];
console.log(hobbies);

// tuplas = array com quantidade e tipos pré definidos
let endereco: [string, number, string] = ["Av. Principal", 99, "teste"];
console.log(endereco);

// enums

enum Cor {
  Cinza,
  Verde,
  Azul,
  Laranja,
  Amarelo,
  Vermelho = 200,
}

let minhaCor: Cor = Cor.Vermelho;

console.log(minhaCor);

// any
let carro: any = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);

// funções
function retornaMeuNome(): string {
  // return minhaIdade
  return nome;
}
console.log(retornaMeuNome());

function digaOi(): void {
  console.log("Oi");
  // return minhaIdade
}

digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}

// console. log (multiplicar(2, 'Bia'))
console.log(multiplicar(4, 9));

// tipo função
let calculo: (numeroA: number, numeroB: number) => number;

calculo = multiplicar;

console.log(calculo(2, 6));

// objetos
let usuario: { nome: string; idade: number } = {
  nome: "Carol",
  idade: 26,
};

// DESAFIO

let funcionario: {
  supervisores: string[];
  ponto: (horas: number) => string;
} = {
  supervisores: ["Ca", "Rol", "Ine"],
  ponto(horas: number): string {
    if (horas <= 8) {
      return "Ponto normal";
    } else {
      return "Fora do horario";
    }
  },
};

console.log(funcionario.ponto(50));
