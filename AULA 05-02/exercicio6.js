
const dataAtual = new Date();

const fimDoAno = new Date(dataAtual.getFullYear(), 11, 31);

const diferenca = fimDoAno - dataAtual;

const diasRestantes = Math.ceil(diferenca / (1000 * 60 * 60 * 24));


console.log("Dias restantes até o fim do ano: ", diasRestantes);