class Livro {
    constructor(titulo, autor, isbn, paginas, editora, anoPublicacao, genero, idioma, preco, disponivel) {
        this.titulo = titulo;
        this.autor = autor;
        this.numeracao = numeracao;
        this.paginas = paginas;
        this.editora = editora;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
        this.idioma = idioma;
        this.preco = preco;
        this.disponivel = disponivel;
    }

    exibirInfo() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Numeração do Livro: ${this.numeracao}`);
        console.log(`Páginas: ${this.paginas}`);
        console.log(`Editora: ${this.editora}`);
        console.log(`Ano de Publicação: ${this.anoPublicacao}`);
        console.log(`Gênero: ${this.genero}`);
        console.log(`Idioma: ${this.idioma}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Disponível: ${this.disponivel ? 'Sim' : 'Não'}`);
    }
}

