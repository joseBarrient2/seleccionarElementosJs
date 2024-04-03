// SELECCIONAR ELEMENTOS

// getElementById ( Solo para Id - Devuelve un solo elemento)
const principalMessage = document.getElementById('principalMessage');

// querySelector (Uso de selectores - Devuelve un solo elemento)
const principalMessage2 = document.querySelector('h1');

const element = document.querySelector('.padre > div:nth-child(3)');

// querySelectorAll (Uso de selectores - devuelve varios elementos)
const elements = document.querySelectorAll('.hijo');

// console.log(principalMessage);
// console.log(principalMessage2)

console.log(principalMessage2);

const listaHijos = document.getElementsByClassName('hijo');
console.log(listaHijos);


