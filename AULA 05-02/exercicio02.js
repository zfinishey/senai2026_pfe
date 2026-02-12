const prompt = require('prompt-sync')();
console.log ("Biblioteca")
let idade = Number(prompt("Digite sua idade: "));

function biblioteca() {
    if (idade >= 18) {
        console.log("Você pode pegar livros e é maior de idade.");
    } else if (idade >= 16) {
        console.log("Você pode pegar livros, mas é menor de idade.");
    } else {
        console.log("Você não pode pegar livros.");
    }
}
biblioteca();
