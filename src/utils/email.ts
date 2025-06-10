import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Debug log
console.log('Email service initialized:', {
  environment: process.env.NODE_ENV,
  hasApiKey: !!process.env.RESEND_API_KEY
});

// Default sender email
const DEFAULT_FROM_EMAIL = 'Being Mindful <noreply@being-mindful.com>';

interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
  cc?: string | string[];
  bcc?: string | string[];
}

/**
 * Sends an email using Resend
 * @param options EmailOptions object containing email details
 * @returns Promise with the send result
 */
export async function sendEmail({
  to,
  subject,
  html,
  from = DEFAULT_FROM_EMAIL,
  replyTo,
  cc,
  bcc
}: EmailOptions) {
  try {
    // Debug log
    console.log('Attempting to send email to:', Array.isArray(to) ? to : [to]);

    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    const result = await resend.emails.send({
      from,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      ...(replyTo && { reply_to: replyTo }),
      ...(cc && { cc: Array.isArray(cc) ? cc : [cc] }),
      ...(bcc && { bcc: Array.isArray(bcc) ? bcc : [bcc] })
    });

    // Debug log
    console.log('Email sent successfully:', result);

    return { success: true, data: result };
  } catch (error) {
    // Detailed error logging
    console.error('Failed to send email. Details:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      to,
      subject,
      from
    });

    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send email' 
    };
  }
}

// Example email templates
export const emailTemplates = {
  welcome: (name: string) => ({
    subject: 'Bem-vindo à jornada Being Mindful! 🌟',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Bem-vindo ao Being Mindful</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #0B1221; font-family: Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background: linear-gradient(to bottom, #0D1627, #0B1221);">
            <!-- Header with Logo -->
            <div style="text-align: center; padding: 40px 20px; background: linear-gradient(135deg, rgba(45,212,191,0.1), rgba(99,102,241,0.1));">
              <img 
                src="https://being-mindful.com/logo.png" 
                alt="Being Mindful Logo" 
                style="width: 120px; height: auto;"
              >
            </div>

            <!-- Main Content -->
            <div style="padding: 40px 30px; color: #F3F4F6;">
              <!-- Welcome Message -->
              <div style="margin-bottom: 30px; text-align: center;">
                <h1 style="margin: 0 0 20px 0; font-size: 28px; background: linear-gradient(to right, #2DD4BF, #6366F1); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                  Olá ${name}!
                </h1>
                <p style="font-size: 18px; line-height: 1.6; color: #94A3B8; margin: 0;">
                  Seja muito bem-vindo(a) à comunidade Being Mindful
                </p>
              </div>

              <!-- Divider -->
              <div style="width: 80px; height: 2px; margin: 30px auto; background: linear-gradient(to right, #2DD4BF, #6366F1);"></div>

              <!-- Content Sections -->
              <div style="margin-bottom: 40px;">
                <p style="color: #E2E8F0; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                  Estamos muito felizes em ter você conosco nessa jornada de desenvolvimento pessoal e mindfulness. 
                  Aqui, você encontrará conteúdo exclusivo e ferramentas práticas para:
                </p>

                <!-- Features List -->
                <div style="margin: 30px 0;">
                  <!-- Feature 1 -->
                  <div style="display: flex; align-items: center; margin-bottom: 20px; background: rgba(45,212,191,0.1); padding: 15px; border-radius: 10px;">
                    <div style="width: 8px; height: 8px; border-radius: 50%; background: #2DD4BF; margin-right: 15px;"></div>
                    <div style="color: #E2E8F0;">Desenvolver uma mentalidade mais forte e resiliente</div>
                  </div>

                  <!-- Feature 2 -->
                  <div style="display: flex; align-items: center; margin-bottom: 20px; background: rgba(99,102,241,0.1); padding: 15px; border-radius: 10px;">
                    <div style="width: 8px; height: 8px; border-radius: 50%; background: #6366F1; margin-right: 15px;"></div>
                    <div style="color: #E2E8F0;">Criar hábitos alinhados com seus objetivos</div>
                  </div>

                  <!-- Feature 3 -->
                  <div style="display: flex; align-items: center; margin-bottom: 20px; background: rgba(45,212,191,0.1); padding: 15px; border-radius: 10px;">
                    <div style="width: 8px; height: 8px; border-radius: 50%; background: #2DD4BF; margin-right: 15px;"></div>
                    <div style="color: #E2E8F0;">Construir uma vida com mais propósito e equilíbrio</div>
                  </div>
                </div>

                <p style="color: #E2E8F0; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                  A partir de agora, você receberá nossos melhores conteúdos diretamente no seu email. 
                  Fique atento(a) às nossas newsletters com dicas práticas, reflexões e recursos exclusivos.
                </p>
              </div>

              <!-- CTA Section -->
              <div style="text-align: center; margin: 40px 0;">
                <a 
                  href="https://being-mindful.com/blog" 
                  style="
                    display: inline-block;
                    padding: 15px 30px;
                    background: linear-gradient(to right, #2DD4BF, #6366F1);
                    color: white;
                    text-decoration: none;
                    border-radius: 8px;
                    font-weight: bold;
                    transition: opacity 0.3s;
                  "
                >
                  Explorar Conteúdos
                </a>
              </div>

              <!-- Social Proof -->
              <div style="text-align: center; margin-top: 40px; padding: 20px; background: rgba(45,212,191,0.05); border-radius: 10px;">
                <p style="color: #94A3B8; font-style: italic; margin: 0;">
                  "A jornada de mil milhas começa com um único passo."
                </p>
                <p style="color: #64748B; margin: 10px 0 0 0; font-size: 14px;">
                  - Lao Tzu
                </p>
              </div>
            </div>

            <!-- Footer -->
            <div style="padding: 30px; text-align: center; background: rgba(15,23,42,0.5);">
              <p style="color: #94A3B8; font-size: 14px; margin: 0 0 15px 0;">
                Siga-nos nas redes sociais para mais conteúdo
              </p>
              <div style="margin-bottom: 20px;">
                <!-- Social Links -->
                <a href="https://instagram.com/beingmindful" style="color: #2DD4BF; text-decoration: none; margin: 0 10px;">Instagram</a>
                <a href="https://youtube.com/beingmindful" style="color: #2DD4BF; text-decoration: none; margin: 0 10px;">YouTube</a>
                <a href="https://linkedin.com/company/beingmindful" style="color: #2DD4BF; text-decoration: none; margin: 0 10px;">LinkedIn</a>
              </div>
              <p style="color: #64748B; font-size: 12px; margin: 20px 0 0 0;">
                © ${new Date().getFullYear()} Being Mindful. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </body>
      </html>
    `
  }),

  contactForm: (name: string, email: string, message: string) => ({
    subject: 'Nova mensagem do formulário de contato',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Nova mensagem recebida</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `
  }),

  newsletter: (content: string) => ({
    subject: 'Novidades do Being Mindful',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1>Novidades do Being Mindful</h1>
        ${content}
        <p style="margin-top: 20px; font-size: 12px; color: #666;">
          Para deixar de receber estes emails, clique <a href="[unsubscribe_url]">aqui</a>.
        </p>
      </div>
    `
  })
}; 