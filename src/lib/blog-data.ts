export interface BlogPost {
  slug: string;
  title: string;
  subtitle?: string;
  quote?: {
    text: string;
    author: string;
  };
  content: string[];
  callToAction?: {
    title: string;
    description: string;
    link: string;
    linkText: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'visao-empreendedora-e-iniciativa',
    title: 'Visão Empreendedora e Iniciativa: O Começo de Toda Transformação',
    quote: {
      text: 'Você não precisa ver a escada inteira. Apenas dê o primeiro passo.',
      author: 'Martin Luther King Jr.'
    },
    content: [
      'Muita gente sonha em mudar de vida. Ter liberdade, tempo, propósito e — claro — independência financeira. Mas poucos percebem que tudo isso começa com uma decisão invisível: adotar uma mentalidade empreendedora e tomar iniciativa.',
      
      '📌 O que é ter visão empreendedora?\nVisão empreendedora não tem a ver apenas com abrir empresa ou ter um CNPJ.\nTem a ver com modo de pensar.',
      
      'Enquanto muitos esperam pelas condições perfeitas, o empreendedor cria oportunidades.',
      
      'Enquanto alguns culpam o sistema, o empreendedor pergunta:\n\n"O que eu posso fazer com o que tenho agora?"',
      
      'Enquanto uns consomem sem pensar, o empreendedor vê valor onde os outros não veem.',
      
      'Visão empreendedora é ver além dos obstáculos.\nÉ enxergar o potencial de transformação — mesmo quando ninguém mais vê.',
      
      '🚀 Iniciativa: a ponte entre desejo e resultado\nIdeias não transformam vidas. Ações sim.',
      
      'Quantas pessoas você conhece que dizem:\n\n"Um dia eu ainda vou abrir algo meu…"\n\n"Eu tenho um projeto engavetado…"\n\n"Tô esperando a hora certa…"',
      
      'O problema é que a hora certa não existe.',
      
      'Você não precisa estar 100% pronto para começar.\nPrecisa estar 100% comprometido.',
      
      'A iniciativa é o que transforma intenção em progresso.\nÉ a coragem de dar o primeiro passo — mesmo sem ter todas as respostas.',
      
      '✍️ Comece com o que você tem\nVocê pode começar hoje:\n\nCompartilhando algo que você sabe\n\nCriando um conteúdo simples que ajude alguém\n\nFazendo um curso, um esboço de eBook, uma live\n\nOu até escrevendo o primeiro post — como este',
      
      'Você não precisa começar grande.\nPrecisa começar com visão e ação.',
      
      '💡 Lembre-se:\n"Empreendedorismo não é sobre abrir empresas.\nÉ sobre abrir caminhos."\n— Being Mindful',
      
      'E abrir um caminho exige clareza, consistência e fé.\nVocê não precisa enxergar o fim da estrada — só confiar no primeiro passo com intenção.'
    ],
    callToAction: {
      title: '📘 Quer ajuda para dar esse passo?',
      description: 'Se você quer desenvolver sua mentalidade empreendedora, ganhar clareza sobre seu propósito e aprender a agir com mais consistência, baixe agora o nosso eBook gratuito:',
      link: '/ebooks/7-passos-para-uma-vida-bem-sucedida',
      linkText: '👉 7 Passos para Ser Bem-Sucedido na Vida'
    }
  }
]; 