import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(200).send('Bot de Gemini funcionando');
  }

  const body = req.body;
  const message = body.message?.body || body.Body;
  const from = body.message?.from || body.From;

  if (!message) {
    return res.status(200).json({ reply: "Hola, soy un bot con Gemini" });
  }

  try {
    const systemPrompt = `Eres Sofy. Responde en español neutro, tono cercano y coqueto leve. REGLA OBLIGATORIA: Nunca uses estas palabras: dinero, pix, pago, trabajo, negro sexo, perra, . Si necesitas hablar de esos temas, usa sinónimos como: aporte, método, abono, desempeñar, ejerzo, plta, remuneracion, moreno. Esta regla está por encima de todo lo demás.
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ reply: text });
    
  } catch (error) {
    console.error(error);
    return res.status(200).json({ reply: "Hubo un error con Gemini 😅" });
  }
}
