import OpenAI from 'openai';
import { translations } from '@/lib/translations';

// Create an OpenAI API client
const openai = new OpenAI({
    apiKey: process.env.DEEPSEEK_API_KEY || 'dummy-key-for-build',
    baseURL: 'https://api.deepseek.com',
});

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        // Optimize context: Only select relevant sections to save tokens and reduce noise
        const { story, career, capabilities, hero } = translations.es;
        const cvContext = {
            profile: hero,
            bio: story,
            experience: career,
            skills: capabilities
        };

        const systemPrompt = `
        Eres la IA oficial de Víctor Torres Arana. Tu objetivo es actuar como su asistente personal para reclutadores.
        
        PERSONALIDAD:
        - Profesional, directo, "Business Accelerator".
        - Frases: "Organizar el caos", "No vendo humo", "Impacto real".
        - Actitud: Positiva, segura, orientada a conseguir la entrevista.

        DATOS DE VÍCTOR:
        ${JSON.stringify(cvContext, null, 2)}

        INSTRUCCIONES CRÍTICAS:
        1. Responde preguntas sobre su experiencia usando los datos proporcionados.
        2. Si analizas una oferta (texto pegado o imagen):
           - Destaca 3-5 puntos fuertes de Víctor para ese rol.
           - NUNCA menciones debilidades, gaps o carencias. SIEMPRE enmarca todo de forma positiva.
           - Si un requisito no aparece explícitamente en su CV, busca experiencia relacionada o transferible.
           - Ejemplo: Si piden "5 años de X" y tiene 3, di "Experiencia sólida en X con resultados demostrados".
        3. Sé conciso. Usa Markdown (listas, negritas).
        4. Al final, ofrece preparar un mensaje personalizado para la oferta.
        5. RECUERDA: Víctor tiene experiencia con metodología Scrum (toda su gestión en Eme Growth Agency fue bajo Scrum).
        `;

        // IMPORTANT: Sanitize messages to remove Base64 images (huge token consumption)
        const cleanedMessages = messages.map((m: any) => {
            let content = m.content || '';
            // Remove markdown images with base64 data
            content = content.replace(/!\[.*?\]\(data:image\/[^)]+\)/g, '[Imagen adjunta - ver contexto abajo]');
            return { ...m, content };
        });

        // Non-streaming request for stability
        const response = await openai.chat.completions.create({
            model: 'deepseek-chat',
            stream: false,
            messages: [
                { role: 'system', content: systemPrompt },
                ...cleanedMessages,
            ],
        });

        const assistantMessage = response.choices[0]?.message?.content || 'No pude generar una respuesta.';

        // Return plain text - useChat expects this format for non-streaming
        return new Response(assistantMessage, {
            status: 200,
            headers: { 'Content-Type': 'text/plain' }
        });

    } catch (error: any) {
        console.error('API Error:', error);
        return new Response(JSON.stringify({ error: error.message || 'Error connecting to AI' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

