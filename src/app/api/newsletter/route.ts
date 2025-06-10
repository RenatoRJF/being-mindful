import { NextResponse } from 'next/server';
import { render } from '@react-email/render';
import WelcomeEmail from '../../../../emails/welcome';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

// Debug logs
console.log('API Key exists:', !!process.env.RESEND_API_KEY);
console.log('Audience ID exists:', !!process.env.RESEND_AUDIENCE_ID);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Debug log
    console.log('Processing subscription for:', email);

    if (!email) {
      return NextResponse.json(
        { error: 'Email é obrigatório' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Add email to Resend audience
    try {
      await resend.contacts.create({
        email,
        unsubscribed: false,
        audienceId: AUDIENCE_ID!
      });
    } catch (error) {
      console.error('Error adding contact to audience:', error);
      // If the error is because the contact already exists, we can continue
      // Otherwise, we should stop and return an error
      if (!(error instanceof Error && error.message.includes('already exists'))) {
        throw error;
      }
    }

    // Send welcome email using the new React Email template
    const emailHtml = await render(WelcomeEmail({ name: email.split('@')[0] }));
    
    await resend.emails.send({
      from: 'Being Mindful <noreply@being-mindful.com>',
      to: email,
      subject: 'Bem-vindo à jornada Being Mindful! 🌟',
      html: emailHtml
    });

    // Here you would typically also save the email to your database
    // and potentially add it to your newsletter service provider

    return NextResponse.json(
      { message: 'Inscrição realizada com sucesso' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Erro ao processar sua inscrição. Tente novamente.' },
      { status: 500 }
    );
  }
} 