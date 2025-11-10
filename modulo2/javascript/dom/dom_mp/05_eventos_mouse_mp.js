const caja = document.getElementById('caja');

caja.addEventListener('mouseover', () => {
  caja.style.background = 'goldenrod';
  caja.textContent = "Disponible";
});
caja.addEventListener('mouseout', () => {
  caja.style.background = 'gray';
  caja.textContent = "HABITACIÓN";
});
caja.addEventListener('click', () => {
  alert('Habitación seleccionada para reserva.');
});

const areaTouch = document.getElementById('areaTouch');
areaTouch.addEventListener('touchstart', () => {
  areaTouch.style.background = 'blue';
  areaTouch.textContent = "Check-in en proceso…";
});
areaTouch.addEventListener('touchend', () => {
  areaTouch.style.background = 'green';
  areaTouch.textContent = "ÁREA CHECK-IN (TOUCH)";
});
areaTouch.addEventListener('click', () => {
  alert('Click/Touch en área de check-in.');
});
