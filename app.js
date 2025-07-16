 require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Para poder leer JSON en las peticiones
app.use(express.json());

// POST /chat
app.post('/chat', async (req, res) => {
  const { mensaje } = req.body;

  if (!mensaje) {
    return res.status(400).json({ error: 'Mensaje requerido' });
  }

  // Aquí va la lógica para buscar en la base de datos
  const respuesta = await buscarRespuesta(mensaje);

  return res.json({ respuesta });
});

// Placeholder para función de base de datos
async function buscarRespuesta(pregunta) {
  // Ejemplo simulado (luego lo conectamos con la base real)
  const bdSimulada = {
    'hola': 'Hola, ¿cómo estás?',
    '¿cómo te llamas?': 'Soy un chatbot sencillo 😄',
    'adiós': '¡Hasta luego!'
  };

  return bdSimulada[pregunta.toLowerCase()] || 'Lo siento, no entiendo tu pregunta.';
}

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
