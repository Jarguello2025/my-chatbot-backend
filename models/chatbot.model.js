const db = require('../config/db.config');

exports.buscarRespuesta = async (mensaje) => {
  let connection;

  try {
    connection = await db.getConnection();

    const result = await connection.execute(
      `
      SELECT r.texto
      FROM frases f
      JOIN respuestas r ON f.respuesta_id = r.id
      WHERE LOWER(:mensaje) LIKE '%' || LOWER(f.frase) || '%'
      FETCH FIRST 1 ROWS ONLY
      `,
      [mensaje]
    );

    return result.rows.length > 0 ? result.rows[0].TEXTO : null;
  } catch (err) {
    console.error('Error en buscarRespuesta:', err);
    return null;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};