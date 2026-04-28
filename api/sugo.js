export default async function handler(req, res) {
  const { text } = req.query;
  
  if (!text) {
    return res.status(400).json({ reply: "No recibí texto bro" });
  }

  // Respuesta básica para probar
  const respuesta = `Hola bro, recibí tu mensaje: ${text}`;
  
  res.status(200).json({ reply: respuesta });
}
