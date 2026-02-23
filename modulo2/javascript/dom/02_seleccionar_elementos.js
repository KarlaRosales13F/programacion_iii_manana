const titulo = document.getElementById('titulo');
console.log(titulo.textContent);
const notas = document.getElementsByClassName('nota');
Array.from(notas).forEach(nota=>console.log(nota.textContent));
const items = document.getElementsByClassName('item');
Array.from(items).forEach(elemento=>console.log(elemento.textContent));
const usuarios = document.getElementsByName('usuario');
Array.from(usuarios).forEach(elemento=>console.log(elemento.textContent));