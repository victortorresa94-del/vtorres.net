
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Use require to avoid "export default" issues with pdf-parse in ESM/Next.js
        const pdf = require('pdf-parse');
        const data = await pdf(buffer);

        return NextResponse.json({ text: data.text });
    } catch (error: any) {
        console.error('PDF Parse SERVER Error:', error);
        return NextResponse.json({ error: 'Failed to parse PDF', details: error.message }, { status: 500 });
    }
}
