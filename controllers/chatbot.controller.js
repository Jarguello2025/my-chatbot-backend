const limpiarTexto = require('../utils/limpiarTexto');
const chatbotService = require('../services/chatbotService');

exports.responder = async (req, res) => {
  const { mensaje } = req.body;

  if (!mensaje) {
    return res.status(400).json({ error: 'Debes saber que el campo "mensaje" es requerido.' });
  }

  let mensajeLimpio;
  try {
    mensajeLimpio = limpiarTexto(mensaje);
  } catch (err) {
    return res.status(400).json({ error: 'Disculpa pero este mensaje no tiene contenido válido.' });
  }

  const respuesta = await chatbotService.obtenerRespuesta(mensajeLimpio);
  
  res.json({ respuesta });
};
