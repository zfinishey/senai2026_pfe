const corpo = document.querySelector('body');
const titulo = document.querySelector('.titulo');
const container = document.querySelector('#container');
const imagem = document.querySelector('#imagem');
const botao = document.querySelector('.botao');

corpo.style.backgroundColor = '#f0f0f0';
corpo.style.color = '#444';
titulo.textContent = 'Adicionando elementos com JavaScript';
container.style.width = '94%';
container.style.margin = '0px auto';
container.style.backgroundColor = '#d7a532';

let anuncio = '<h2>Curso dev com ia - NOVIDADE!!!</h2>';
container.innerHTML += anuncio;

imagem.setAttribute('src', './js/imagens/coco.jpeg');
//imagem.removeAttribute('src')// remove o atributo src, ou seja, a imagem não será mais exibida.

//adicionando classes
imagem.classList.add('imagem');

//Eventos
//botao.addEventListener('click', () => {
   // console.log('Cliquei no botão ' + contador++);
//});

botao.addEventListener('click', () => {
    alert('Você clicou no botão!');
});