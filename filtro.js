let pessoas = require("./pessoas");

let maioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18);

let menoresDeIdade = pessoas.filter(pessoa => pessoa.idade < 18);

console.log("Pessoas maiores de idade:");
console.log(maioresDeIdade);

console.log("  {Pessoas menores de idade:     }");
console.log(menoresDeIdade);