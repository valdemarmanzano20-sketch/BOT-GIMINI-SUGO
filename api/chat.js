export default async function handler(req, res) {
  if (req.method!== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { message, prompt } = req.body;

  if (!message ||!prompt) {
    return res.status(400).json({ error: 'Faltan message o prompt' });
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `${prompt}\n\nMensaje del usuario: ${message}\n\nResponde:`
          }]
        }]
      })
    });

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'jaja no entendí bb ❤️';
    
    res.status(200).json({ reply });
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
}
