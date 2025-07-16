const axios = require('axios');
require('dotenv').config();

exports.buscarRespuesta = async (mensaje) => {
  try {
     const apiUrl = process.env.API_URL; // URL del servicio REST de Oracle.
    const response = await axios.get(apiUrl + encodeURIComponent(mensaje));

    const items = response.data.items;

    if (items && items.length > 0 && items[0].response_text) {
      return items[0].response_text;
    }

    return null;
  } catch (err) {
    console.error('Error en buscarRespuesta (API REST):', err.message || err);
    return null;
  }
};