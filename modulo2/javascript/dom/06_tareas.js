const boton = document.getElementById('agregar');

boton.addEventListener('click', () => {
    const texto = document.getElementById('06_tareas').value;
    
    if (texto.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = texto;
        document.getElementById('listaTareas').appendChild(li);
        document.getElementById('06_tareas').value = ''; 
    }
});