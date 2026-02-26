class Bicicleta {
    modelo = 'Caloi Elite';
    marca = 'Caloi';
    cor = 'Preta';
    #velocidadeMaxima = 0;

    set velocidadeMaxima(valor) {
        if (valor > 35) {
            console.log("Valor muito alto");
        } else {
            console.log("Valor topzudo de velocidade")
        }
    }
    get velocidadeMaxima() {
        return this.#velocidadeMaxima;
    }
}

const bike = new Bicicleta();
bike.velocidadeMaxima = 29;
