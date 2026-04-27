export default async function handler(req, res) {
  // ESTO ARREGLA EL "¿A QUÉ TE REFIERES?"
  const body = req.body || {};
  const userMessage = body.message || body.notification || body.text || body.content || body.body || "";
  
  console.log("MACRODROID MANDÓ:", JSON.stringify(body));

  if (!userMessage) {
    return res.status(200).json({ reply: "Bro, no me llegó texto. Revisa MacroDroid 😅" });
  }

  // TU RESPUESTA DE PRUEBA - DESPUÉS PONEMOS LA DE GIMINI
  const reply = `Sofy recibió: "${userMessage}". Ya funciona bro 🔥`;

  res.status(200).json({ reply });
}
