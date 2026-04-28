export default function handler(req, res) {
  const texto = req.query.text || 'vacio';
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(`Hola bro, recibí tu mensaje: ${texto}`);
}
