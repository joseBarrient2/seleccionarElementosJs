const item = document.getElementById('item');

const box = document.querySelector('#box2');
box.style.width = '150px';
box.style.height = '150px';
box.style.background = 'red';

const nodo1 = document.querySelectorAll('.nodo');
console.log(nodo1);

const item3 = document.getElementsByClassName('casa');
console.log(item3);

const titulo = document.querySelector('.be');
titulo.textContent = 'Hola mundo';

const boxConten = document.querySelector('.home');
boxConten.innerHTML = "<img src='coffee.png' width='120px'>";

const contenHome = document.querySelector('.home2');
contenHome.style.width = "150px";
contenHome.style.height = "150px";
contenHome.style.background = "orange";


const creatBox = document.querySelector('.home3');
creatBox.classList.add('claseAgregada');

const boxHijo = document.querySelector('.itemHijo');
const padre = boxHijo.parentElement;
padre.style.width = '150px';
padre.style.height = '150px';
padre.style.background = 'crimson';

const general = document.querySelector('.box');
const next = general.nextElementSibling;
next.style.padding = '20px';
next.style.background = 'grey';



const lista = document.querySelector('.lista');
const li = document.createElement('li');
li.textContent = 'Papaya';
li.classList.add('seleccionado');
lista.appendChild(li);






