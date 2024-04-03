// DOM TRAVERSING

const nieto = document.querySelector('.nieto-1');

const father = nieto.parentElement.parentElement;

const elementSibling = nieto.nextElementSibling;

father.style.border = '1px solid red';
// console.log(father);

console.log(elementSibling);
