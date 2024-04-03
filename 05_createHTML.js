// CREATE HTML

// create element
const greeting = document.createElement('p');
const root = document.getElementById('root');

// agregar contenido
greeting.textContent = 'Hola soy un parrafo creado por JS';

// agregar atributos(opcional)
greeting.classList.add('mensaje');

// Rendizar el elemento
root.appendChild(greeting);

// console.log(greeting);
