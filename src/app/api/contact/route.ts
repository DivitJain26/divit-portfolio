import { NextResponse } from 'next/server';
import { contactSchema } from '@/src/lib/validators/contact.schema';
import { processContact } from '@/src/services/contact.service';

export async function POST(req: Request) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'anonymous';

  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    await processContact(data);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error(err.response?.status, err.response?.data);
    return NextResponse.json(
      {
        error: err?.errors ?? err.message ?? 'Invalid request',
      },
      { status: 400 }
    );
  }
}
