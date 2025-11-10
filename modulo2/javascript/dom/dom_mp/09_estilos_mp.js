const cuadro = document.getElementById('cuadro');

function cambiarColor() {
  const colores = ['#58a6ff', '#ff7b72', '#22c55e', '#a855f7', '#f59e0b'];
  const randomColor = colores[Math.floor(Math.random() * colores.length)];
  cuadro.style.backgroundColor = randomColor;
}

function aumentarTamano() {
  const width  = parseInt(cuadro.style.width  || '100');
  const height = parseInt(cuadro.style.height || '100');
  cuadro.style.width  = (width + 20) + 'px';
  cuadro.style.height = (height + 20) + 'px';
}

function reiniciar() {
  cuadro.style.width = '100px';
  cuadro.style.height = '100px';
  cuadro.style.backgroundColor = '#58a6ff';
}
