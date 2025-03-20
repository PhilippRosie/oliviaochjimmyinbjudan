import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { titel, artist } = formData;

    console.log('Försöker skicka låtönskningsmail till:', 'sandquist250906@gmail.com');
    console.log('Formulärdata:', formData);

    const result = await resend.emails.send({
      from: 'Låtönskningar <osa@sandquistoochj.se>',
      to: ['sandquist250906@gmail.com'],
      subject: 'Ny låtönskning till bröllopet!',
      html: `
        <h2>Ny låtönskning:</h2>
        <p><strong>Titel:</strong> ${titel}</p>
        ${artist ? `<p><strong>Artist:</strong> ${artist}</p>` : ''}
      `
    });

    console.log('Mailutskick resultat:', result);

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Detaljerat fel vid mailutskick:', error);
    return NextResponse.json({ success: false, error: 'Ett fel uppstod' }, { status: 500 });
  }
}
