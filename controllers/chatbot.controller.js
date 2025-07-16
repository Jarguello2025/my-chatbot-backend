const chatbotService = require('../services/chatbot.service');

exports.responder = async (req, res) => {
  const { mensaje } = req.body;

  if (!mensaje) {
    return res.status(400).json({ error: 'El campo "mensaje" es requerido.' });
  }

  const respuesta = await chatbotService.obtenerRespuesta(mensaje);
  return res.json({ respuesta });
};