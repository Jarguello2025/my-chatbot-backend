const stopwords = [
  'eh', 'mmm', 'este', 'pues', 'bueno', 'ok', 'vale', 'aja',
  'o sea', 'entonces', 'ah', 'oh', 'ay', 'ya', 'uy'
];

function limpiarTexto(texto) {
  const limpio = texto
    .toLowerCase()
    .normalize('NFD')                          // Quita tildes
    .replace(/[\u0300-\u036f]/g, '')           // Más seguro para eliminar tildes
    .replace(/[^\w\s]/g, '')                   // Elimina puntuación
    .replace(/\s+/g, ' ')                      // Reemplaza múltiples espacios
    .trim();

  const palabras = limpio.split(' ').filter(palabra => !stopwords.includes(palabra));

  if (palabras.length === 0) {
    throw new Error('Mensaje inválido: no contiene contenido útil.');
  }

  return palabras.join(' ');
}

module.exports = limpiarTexto;
