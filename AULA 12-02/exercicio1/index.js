const corpo = document.querySelector('body');
const titulo = document.querySelector('.titulo');
const container = document.querySelector('#container');

let titulotexto = ('Exercício 1 - JavaScript DOM');

titulo.innerContext = titulotexto;

corpo.style.backgroundColor = 'lightblue';
container.style.textAlign = 'center';
container.style.width = '94%';
container.style.margin = '0px auto';
container.style.fontSize = '50px';

let anuncio = '<h2>Programação Front-End - NOVIDADE!!!</h2>';
container.innerHTML += anuncio;
corpo.style.color = '#444';
container.innerText += ' - Curso de JavaScript DOM';

imagem.innerHTML += '<img src="https://i.ytimg.com/vi/xZyPSVUcelI/maxresdefault.jpg" alt="Imagem de JavaScript DOM">';
imagem.style.textAlign = 'center';

imagem.style.margin = '20px auto';

