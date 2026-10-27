// Función principal que conecta la Sección 1 con la Sección 2
function calcularTodo() {
  // 1. Obtener valores de entrada
  const usd = parseFloat(document.getElementById('usdAmount').value) || 0;
  const rate = parseFloat(document.getElementById('exchangeRate').value) || 0;

  // 2. Lógica de la Sección 1 (Conversor de divisas)
  const totalPesos = convertirADivisa(usd, rate);
  document.getElementById('pesoResult').textContent = totalPesos.toLocaleString('es-AR');

  // 3. Lógica de la Sección 2 (Calculo de pegatinas a partir del resultado anterior)
  const totalPegatinas = calcularPegatinas(totalPesos);
  document.getElementById('stickerResult').textContent = totalPegatinas;

  // 4. Renderizar las pegatinas en pantalla
  renderizarPegatinas(totalPegatinas);
}

// Subfunción Sección 1
function convertirADivisa(usd, rate) {
  return usd * rate;
}

// Subfunción Sección 2
function calcularPegatinas(pesos) {
  const pegRate = 1000; // 1 pegatina cada $1.000 ARS
  return Math.floor(pesos / pegRate);
}

// Mostrar los emojis de pegatinas visualmente
function renderizarPegatinas(cantidad) {
  const container = document.getElementById('stickerContainer');
  container.innerHTML = '';

  // Limitamos la representación visual a máximo 150 emojis para rendimiento
  const limiteVisual = Math.min(cantidad, 150);

  for (let i = 0; i < limiteVisual; i++) {
    const span = document.createElement('span');
    span.className = 'sticker';
    span.textContent = '🐱';
    container.appendChild(span);
  }
}

// Ejecutar al cargar la página inicialmente
window.onload = calcularTodo;
