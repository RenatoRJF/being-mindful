import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Hr,
  Link,
  Img,
  Preview
} from '@react-email/components';
import * as React from 'react';

interface WelcomeEmailProps {
  name: string;
}

export default function WelcomeEmail({ name = "amigo(a)" }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Bem-vindo à jornada Being Mindful! 🌟</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header with Logo */}
          <Section style={headerSection}>
            <Img
              src="https://being-mindful.com/logo.png"
              alt="Being Mindful Logo"
              width="80"
              height="80"
            />
          </Section>

          {/* Welcome Message */}
          <Section style={messageSection}>
            <Text style={heading}>Olá {name}!</Text>
            <Text style={subheading}>
              Seja muito bem-vindo(a) à comunidade Being Mindful
            </Text>
          </Section>

          <Hr style={divider} />

          {/* Content Sections */}
          <Section style={contentSection}>
            <Text style={paragraph}>
              Estamos muito felizes em ter você conosco nessa jornada de desenvolvimento pessoal e mindfulness. 
              Aqui, você encontrará conteúdo exclusivo e ferramentas práticas para:
            </Text>

            {/* Features List */}
            <Section style={featureList}>
              <Section style={feature}>
                <Text style={featureTitle}>
                  Desenvolver uma mentalidade mais forte e resiliente
                </Text>
                <Text style={featureDescription}>
                  Aprenda técnicas comprovadas para fortalecer sua mente e aumentar sua resiliência emocional
                </Text>
              </Section>

              <Section style={feature}>
                <Text style={featureTitle}>
                  Criar hábitos alinhados com seus objetivos
                </Text>
                <Text style={featureDescription}>
                  Descubra métodos práticos para desenvolver hábitos positivos que te aproximam dos seus sonhos
                </Text>
              </Section>

              <Section style={feature}>
                <Text style={featureTitle}>
                  Construir uma vida com mais propósito e equilíbrio
                </Text>
                <Text style={featureDescription}>
                  Encontre harmonia entre suas diferentes áreas da vida e viva com mais significado
                </Text>
              </Section>
            </Section>

            <Text style={paragraph}>
              A partir de agora, você receberá nossos melhores conteúdos diretamente no seu email. 
              Fique atento(a) às nossas newsletters com dicas práticas, reflexões e recursos exclusivos.
            </Text>
          </Section>

          {/* CTA Section */}
          <Section style={ctaSection}>
            <Button style={button} href="https://being-mindful.com/blog">
              Explorar Conteúdos
            </Button>
          </Section>

          {/* Quote Section */}
          <Section style={quoteSection}>
            <Text style={quote}>
              &ldquo;A jornada de mil milhas começa com um único passo.&rdquo;
            </Text>
            <Text style={quoteAuthor}>
              - Lao Tzu
            </Text>
          </Section>

          {/* Signature */}
          <Section style={signatureSection}>
            <Text style={signature}>
              Equipe Being Mindful
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Siga-nos nas redes sociais para mais conteúdo
            </Text>
            <Section style={socialLinks}>
              <Link style={socialLink} href="https://instagram.com/beingmindful">Instagram</Link>
              <Link style={socialLink} href="https://youtube.com/beingmindful">YouTube</Link>
            </Section>
            <Text style={unsubscribeText}>
              Você está recebendo este email porque se inscreveu em nossa newsletter.{' '}
              <Link style={unsubscribeLink} href="{{{RESEND_UNSUBSCRIBE_URL}}}">
                Cancelar inscrição
              </Link>
            </Text>
            <Text style={copyright}>
              © {new Date().getFullYear()} Being Mindful. Todos os direitos reservados.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#0B1221',
  fontFamily: 'Arial, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '600px',
  backgroundImage: 'linear-gradient(135deg, rgba(45,212,191,0.1), rgba(99,102,241,0.1))',
};

const headerSection = {
  padding: '40px 20px 20px',
  textAlign: 'center' as const,
};

const messageSection = {
  textAlign: 'center' as const,
  padding: '0 20px',
};

const heading = {
  margin: '0 0 20px',
  fontSize: '28px',
  lineHeight: '1.5',
  padding: '0 0 4px',
  color: '#FFFFFF',
  fontWeight: 'bold',
};

const subheading = {
  fontSize: '18px',
  lineHeight: '1.6',
  color: '#94A3B8',
  margin: '0',
};

const divider = {
  width: '80px',
  margin: '30px auto',
  border: 'none',
  borderTop: '2px solid',
  borderImage: 'linear-gradient(to right, #2DD4BF, #6366F1) 1',
};

const contentSection = {
  padding: '0 30px',
};

const paragraph = {
  color: '#E2E8F0',
  fontSize: '16px',
  lineHeight: '1.6',
};

const featureList = {
  margin: '40px 0',
};

const feature = {
  marginBottom: '30px',
  padding: '25px',
  borderRadius: '12px',
  backgroundColor: 'rgba(45,212,191,0.05)',
  border: '1px solid rgba(45,212,191,0.1)',
};

const featureTitle = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#E2E8F0',
  margin: '0 0 10px',
  textAlign: 'left' as const,
};

const featureDescription = {
  fontSize: '14px',
  color: '#94A3B8',
  margin: '0',
  lineHeight: '1.6',
  textAlign: 'left' as const,
};

const ctaSection = {
  textAlign: 'center' as const,
  margin: '40px 0',
};

const button = {
  padding: '15px 30px',
  backgroundImage: 'linear-gradient(to right, #2DD4BF, #6366F1)',
  color: 'white',
  borderRadius: '8px',
  fontWeight: 'bold',
  textDecoration: 'none',
};

const quoteSection = {
  textAlign: 'center' as const,
  margin: '40px 0',
  padding: '20px',
  backgroundColor: 'rgba(45,212,191,0.05)',
  borderRadius: '10px',
};

const quote = {
  color: '#94A3B8',
  fontStyle: 'italic',
  margin: '0',
};

const quoteAuthor = {
  color: '#64748B',
  margin: '10px 0 0',
  fontSize: '14px',
};

const footer = {
  padding: '30px',
  textAlign: 'center' as const,
  backgroundColor: 'rgba(15,23,42,0.5)',
};

const footerText = {
  color: '#94A3B8',
  fontSize: '14px',
  margin: '0 0 15px',
};

const socialLinks = {
  marginBottom: '20px',
};

const socialLink = {
  color: '#2DD4BF',
  textDecoration: 'none',
  margin: '0 10px',
};

const copyright = {
  color: '#64748B',
  fontSize: '12px',
  margin: '20px 0 0',
};

const signatureSection = {
  padding: '0 30px 30px',
  textAlign: 'left' as const,
};

const signature = {
  color: '#E2E8F0',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0',
};

const unsubscribeText = {
  color: '#64748B',
  fontSize: '12px',
  margin: '0 0 15px',
  textAlign: 'center' as const,
};

const unsubscribeLink = {
  color: '#2DD4BF',
  textDecoration: 'underline',
}; 