// MODIFICA ELEMENTO

const message = document.getElementById('message');

// TEXT CONTENT(Modifica el contenido de texto)
message.textContent = 'Esto es otro parrafo modificado por JS';

// INNERHTML(Permite agregar HTML)
message.textContent = '';
message.innerHTML = `<div><h2>HOLA</h2></div>`;

console.log(message);
