class Caneta {
    cor = 'Verde Neon'
    marca = 'Faber Castell'
    modelo = 'Esferográfica'
    ponta = 'Fina'
    tampa = false
    qtdTinta = 5

    escrever() {
        return 'Escrevendo...'
    }
    sublinhar(qtdTinta){
        this.qtdTinta -= qtdTinta
        return 'Quantidade restante de tinta em Ml: ' + this.qtdTinta

    }
}

const canetaFina = new Caneta()
canetaFina.escrever()
console.log(canetaFina.escrever());
console.log(canetaFina.sublinhar(2));