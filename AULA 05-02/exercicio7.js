const prompt = require('prompt-sync')()
let numero = Number(prompt("Digite um número decimal: "));

console.log("Arredondado:", Math.round(numero));