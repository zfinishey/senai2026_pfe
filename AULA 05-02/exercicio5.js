const prompt = require("prompt-sync")();

let ano = Number(prompt("Digite seu ano de nascimento: "));
let idade = new Date().getFullYear() - ano;
console.log("Sua idade é: ", idade);
