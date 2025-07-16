const limpiarTexto = require('../utils/limpiarTexto');

exports.responder = async (req, res) => {
  const { mensaje } = req.body;

  if (!mensaje) {
    return res.status(400).json({ error: 'El campo "mensaje" es requerido.' });
  }

  let mensajeLimpio;
  try {
    mensajeLimpio = limpiarTexto(mensaje);
  } catch (err) {
    return res.status(400).json({ error: 'Tu mensaje no tiene contenido válido.' });
  }

  const respuesta = await chatbotService.obtenerRespuesta(mensajeLimpio);
  await historialModel.registrarInteraccion(mensaje, mensajeLimpio, respuesta);

  res.json({ respuesta });
};
