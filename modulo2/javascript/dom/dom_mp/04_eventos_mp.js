let parrafo = null;

document.getElementById('crear').addEventListener('click', () => {
  parrafo = document.createElement('p');
  parrafo.textContent = " Reserva generada: Suite Deluxe — 2 noches — Hotel CASA BLANCA.";
  document.getElementById('contenedor').appendChild(parrafo);
});

document.getElementById('eliminar').addEventListener('click', () => {
  if (parrafo) parrafo.remove();
});
