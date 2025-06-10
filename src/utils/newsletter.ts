import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

interface NewsletterOptions {
  subject: string;
  content: string;
  previewText?: string;
}

export async function sendNewsletter({ subject, content, previewText }: NewsletterOptions) {
  try {
    const { data: broadcast, error } = await resend.emails.send({
      from: 'Being Mindful <noreply@being-mindful.com>',
      to: `audience:${AUDIENCE_ID}`,
      subject,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            ${previewText ? `<meta name="description" content="${previewText}">` : ''}
            <title>${subject}</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #f9fafb;">
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: white;">
              <!-- Header -->
              <div style="background: linear-gradient(to right, #2DD4BF, #6366F1); padding: 20px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">Being Mindful</h1>
              </div>

              <!-- Content -->
              <div style="padding: 30px 20px;">
                ${content}
              </div>

              <!-- Footer -->
              <div style="background-color: #f3f4f6; padding: 20px; text-align: center; font-size: 14px; color: #6b7280;">
                <p style="margin: 0 0 10px 0;">
                  Você está recebendo este email porque se inscreveu em nossa newsletter.
                </p>
                <p style="margin: 0;">
                  <a 
                    href="{{{RESEND_UNSUBSCRIBE_URL}}}" 
                    style="color: #2DD4BF; text-decoration: none;"
                  >
                    Cancelar inscrição
                  </a>
                </p>
              </div>
            </div>
          </body>
        </html>
      `
    });

    if (error) {
      throw error;
    }

    return { success: true, data: broadcast };
  } catch (error) {
    console.error('Error sending newsletter:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send newsletter' 
    };
  }
}

// Example usage:
/*
await sendNewsletter({
  subject: "3 Práticas de Mindfulness para Começar o Dia",
  previewText: "Descubra como transformar suas manhãs com mindfulness",
  content: `
    <h2 style="color: #1f2937; margin-bottom: 20px;">
      3 Práticas de Mindfulness para Começar o Dia
    </h2>
    
    <p style="color: #4b5563; line-height: 1.6; margin-bottom: 15px;">
      Olá! Hoje vamos compartilhar três práticas simples que podem transformar sua manhã...
    </p>

    <h3 style="color: #2DD4BF; margin: 25px 0 15px;">1. Respiração Consciente</h3>
    <p style="color: #4b5563; line-height: 1.6; margin-bottom: 15px;">
      Dedique 5 minutos para observar sua respiração...
    </p>

    <h3 style="color: #2DD4BF; margin: 25px 0 15px;">2. Gratidão Matinal</h3>
    <p style="color: #4b5563; line-height: 1.6; margin-bottom: 15px;">
      Liste mentalmente 3 coisas pelas quais você é grato...
    </p>

    <h3 style="color: #2DD4BF; margin: 25px 0 15px;">3. Movimento Consciente</h3>
    <p style="color: #4b5563; line-height: 1.6; margin-bottom: 15px;">
      Faça alguns alongamentos suaves prestando atenção em cada sensação...
    </p>

    <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-top: 30px;">
      <p style="color: #4b5563; line-height: 1.6; margin: 0;">
        <strong>Dica extra:</strong> Tente incorporar uma dessas práticas por vez. 
        Comece com 5 minutos e aumente gradualmente conforme se sentir confortável.
      </p>
    </div>
  `
});
*/ 