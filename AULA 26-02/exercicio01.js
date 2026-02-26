class Jogador {
    #nome;
    #numero;

constructor(nome, numero) {
    this.#nome = nome;
    this.#numero = numero;
}

    treinar() {
        return '3 vezes na semana';
    };
    getNome(){
        return this.#nome;
    };
    getNumero(){
        return this.#numero;
    };
}

class JogadorFutebol extends Jogador{
    #peDominante;
    #totalGols;

    constructor(peDominante, totalGols, nome, numero) {
        super(nome,numero);
        this.#peDominante = peDominante;
        this.#totalGols = totalGols;
    };
    driblar(){
        return 'Tomou uma caneta';
    };
    fazerGol(qtdGols){
        return this.#totalGols += qtdGols
    };
    mostrar(){
        return 'O Jogador ' + super.getNome() + ' número ' + super.getNumero() + ' pé dominante ' + this.#peDominante + ' tem ' + this.#totalGols + ' gols.';

    }
}
const jogador = new JogadorFutebol ('Esquerdo',20,'Gustavo Nogueira',7);
jogador.fazerGol(2);
console.log(jogador.mostrar());

class JogadorFutebolAmericano extends Jogador{
    #listaJogadas;
    #jardasConquistadas;

    constructor(listaJogadas, jardasConquistadas, nome, numero) {
        super(nome,numero);
        this.#listaJogadas = listaJogadas;
        this.#jardasConquistadas = jardasConquistadas;
    };
    TouchDown(){
        return 'tomou um TouchDown';
    };
    correrJardas(qtdJardas){
        return this.#jardasConquistadas += qtdJardas
    };
    bloquear(){
        return 'bloqueou o adversário';
    };
    mostrar(){
        return 'O Jogador ' + super.getNome() + ', número ' + super.getNumero() + ', lista de jogadas ' + this.#listaJogadas + ', tem ' + this.#jardasConquistadas + ' jardas conquistadas ' + this.TouchDown() + ' e ' + this.bloquear() + '.';
    };
}
const jogadorFutebolAmericano = new JogadorFutebolAmericano (5,15,'Gustavo Nogueira',7);
jogadorFutebolAmericano.TouchDown();
jogadorFutebolAmericano.correrJardas(10);
jogadorFutebolAmericano.bloquear();
console.log(jogadorFutebolAmericano.mostrar());

class JogadorBasquete extends Jogador{
    #alturaSalto;
    #totalCestas;

    constructor(alturaSalto, totalCestas, nome, numero) {
        super(nome,numero);
        this.#alturaSalto = alturaSalto;
        this.#totalCestas = totalCestas;
    };
    saltar(){
        return 'Saltou ' + this.#alturaSalto + ' metros';
    };
    fazerCesta(qtdCestas){
        return this.#totalCestas += qtdCestas
    };
    bloquear(){
        return 'bloqueou o adversário';
    };
    mostrar(){
        return 'O Jogador ' + super.getNome() + ', número ' + super.getNumero() + ', altura do salto ' + this.#alturaSalto + ' metros, tem ' + this.#totalCestas + ' cestas.';
    };
}
const jogadorBasquete = new JogadorBasquete (2.10,20,'Gustavo Nogueira',7);
jogadorBasquete.saltar();
jogadorBasquete.fazerCesta(2);
jogadorBasquete.bloquear();
console.log(jogadorBasquete.mostrar());
