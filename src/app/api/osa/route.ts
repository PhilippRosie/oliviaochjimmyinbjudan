import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { namn1, namn2, kommer, specialkost, transport, epost } = formData;

    console.log('Försöker skicka OSA-mail till:', 'sandquist250906@gmail.com');
    console.log('Formulärdata:', formData);

    // Skicka OSA till arrangörerna
    const result = await resend.emails.send({
      from: 'OSA <osa@sandquistoochj.se>',
      to: ['sandquist250906@gmail.com'],
      subject: 'Nytt OSA till bröllopet!',
      html: `
        <h2>Nytt OSA från:</h2>
        <p><strong>Namn 1:</strong> ${namn1}</p>
        ${namn2 ? `<p><strong>Namn 2:</strong> ${namn2}</p>` : ''}
        <p><strong>Kommer:</strong> ${kommer}</p>
        ${specialkost ? `<p><strong>Specialkost:</strong> ${specialkost}</p>` : ''}
        <p><strong>Transport:</strong> ${transport}</p>
        <p><strong>E-post:</strong> ${epost}</p>
      `
    });

    console.log('Mailutskick resultat:', result);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Detaljerat fel vid mailutskick:', error);
    return NextResponse.json({ success: false, error: 'Ett fel uppstod' }, { status: 500 });
  }
}
