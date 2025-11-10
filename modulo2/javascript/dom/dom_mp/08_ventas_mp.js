const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorCasas');
let reservas = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const huesped = document.getElementById('direccion').value.trim();
  const tipoHab = document.getElementById('descripcion').value.trim();
  const tarifa  = parseFloat(document.getElementById('precio').value.trim());

  if (huesped && tipoHab && !isNaN(tarifa)) {
    const nueva = { id: Date.now(), huesped, tipoHab, tarifa };
    reservas.push(nueva);
    renderizarReserva(nueva);
    formulario.reset();
  }
});

function renderizarReserva({ id, huesped, tipoHab, tarifa }) {
  const div = document.createElement('div');
  div.className = 'casa';
  div.setAttribute('data-id', id);
  div.innerHTML = `
    <h3>Reserva de: ${huesped}</h3>
    <p>Tipo de habitación: ${tipoHab}</p>
    <p><strong>Tarifa por noche: $${tarifa.toFixed(2)}</strong></p>
    <div class="acciones"><button class="eliminar">Eliminar</button></div>
  `;
  contenedor.appendChild(div);
}

contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    const tarjeta = e.target.closest('.casa');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    reservas = reservas.filter(r => r.id !== id);
    tarjeta.remove();
  }
});
