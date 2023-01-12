alert('Hello world');

document.getElementById('lista').innerHTML = 'Hello world ';

const paragrafo = document.createElement('p');
const textoUm = document.createTextNode('Hello world');
const textoDois = document.createTextNode('Hello world');

paragrafo.appendChild(textoUm);

const body = document.body;

body.appendChild(paragrafo);

const lista = document.createElement('li');
const itens = document.getElementById('ordenada');

lista.appendChild(textoDois);

itens.appendChild(lista);

const titulo = document.createElement('h1');
const textoTitulo = document.createTextNode('Hello world');
const container = document.getElementById('container');

titulo.appendChild(textoTitulo);

container.appendChild(titulo);


const tituloColorido = document.createElement('h2');
const textoColorido = document.createTextNode('Hello world');

tituloColorido.style.backgroundColor = '#000';
tituloColorido.style.color = '#fff';

tituloColorido.appendChild(textoColorido);
container.appendChild(tituloColorido);

const tituloBorda =  document.createElement('h2');
const textoBorda = document.createTextNode('Hello world');

tituloBorda.style.border = '1px solid #000';

tituloBorda.appendChild(textoBorda);
container.appendChild(tituloBorda);

const tituloIta = document.createElement('h2');
const tituloItalic = document.createElement('i');
const textoIta = document.createTextNode('Hello world');

tituloItalic.appendChild(tituloIta);
tituloIta.appendChild(textoIta);
container.appendChild(tituloItalic);

const tituloMaiusculo = document.createElement('h4');
const textoMaiusculo = document.createTextNode('Hello world');

tituloMaiusculo.appendChild(textoMaiusculo);

tituloMaiusculo.style.textTransform = 'uppercase';

container.appendChild(tituloMaiusculo);

const tituloColor = document.createElement('h6');
const textoColor = document.createTextNode('Hello world');

tituloColor.appendChild(textoColor);

tituloColor.style.color = 'red';

container.append(tituloColor);
