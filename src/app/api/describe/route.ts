import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

export async function POST(req: Request) {
    try {
        const { image, prompt } = await req.json();

        if (!image) {
            return NextResponse.json({ error: 'Image is required' }, { status: 400 });
        }

        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        // Clean base64 string if needed
        const base64Data = image.split(',')[1] || image;

        const result = await model.generateContent([
            prompt || "Describe this image in detail, specifically focusing on text content if it's a document or job offer.",
            {
                inlineData: {
                    data: base64Data,
                    mimeType: 'image/jpeg', // Assumption, can normally handle png/jpeg
                },
            },
        ]);

        const text = result.response.text();
        return NextResponse.json({ description: text });
    } catch (error) {
        console.error('Vision API Error:', error);
        return NextResponse.json({ error: 'Failed to analyze image' }, { status: 500 });
    }
}
