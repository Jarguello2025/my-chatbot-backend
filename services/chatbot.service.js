const chatbotModel = require('../models/chatbot.model');

exports.obtenerRespuesta = async (mensaje) => {
  const respuesta = await chatbotModel.buscarRespuesta(mensaje);
  return respuesta || 'Lo siento, no tengo una respuesta para eso.';
};
