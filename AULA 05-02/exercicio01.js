const prompt = require('prompt-sync')();
let pontuacao = Number(prompt("Digite uma nota: "));

function nota(pontuacao) {
    let notafinal = (pontuacao/2)**2
    console.log("A pontuação final é: ", notafinal);
};
nota(pontuacao);