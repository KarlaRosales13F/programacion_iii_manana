const titulo = document.getElementById('titulo');
console.log(titulo.textContent);

const notas = document.getElementsByClassName('nota');
Array.from(notas).forEach(nota => console.log("NOTA:", nota.textContent));

const items = document.getElementsByClassName('item');
Array.from(items).forEach(el => console.log("HAB:", el.textContent));

const usuarios = document.getElementsByName('usuario');
Array.from(usuarios).forEach(el => console.log("USUARIO:", el.textContent));
