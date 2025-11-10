const boton = document.getElementById('agregar');

boton.addEventListener('click', () => {
  const input = document.getElementById('06_tareas');
  const texto = input.value;

  if (texto.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = ` ${texto}`;
    document.getElementById('listaTareas').appendChild(li);
    input.value = '';
  }
});
