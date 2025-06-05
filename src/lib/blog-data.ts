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

export function calculateReadingTime(content: string[]): number {
  // Average reading speed (words per minute)
  const wordsPerMinute = 200;
  
  // Join all content and count words
  const totalWords = content
    .join(' ')
    .split(/\s+/)
    .filter(word => word.length > 0)
    .length;
  
  // Calculate reading time in minutes
  const readingTime = Math.ceil(totalWords / wordsPerMinute);
  
  // Return at least 1 minute
  return Math.max(1, readingTime);
}

export const blogPosts: BlogPost[] = [
  {
    slug: '5-crencas-que-impedem-voce-de-comecar',
    title: 'As 5 Crenças que Impedem Você de Começar o Seu Próprio Negócio Online',
    quote: {
      text: 'As correntes da mente são invisíveis — mas mais fortes do que qualquer parede.',
      author: 'Being Mindful'
    },
    content: [
      'Você já pensou em começar algo seu na internet, viver de renda online, ter liberdade, fazer o que ama… mas travou antes mesmo de começar?\n\nSe sim, você não está sozinho.\nA maioria das pessoas que quer empreender não é impedida pela falta de dinheiro ou tempo — mas por algo mais profundo: as crenças limitantes.',
      
      'Neste artigo, vamos revelar as 5 crenças mais comuns que podem estar bloqueando você. E, claro, como começar a romper com cada uma delas.',
      
      '❌ 1. "Eu não sou bom o suficiente."\nEssa é a mais comum e mais cruel.\n\nAcreditar que você precisa ser um "gênio" ou ter mil diplomas pra empreender só atrasa a ação.\nO mercado valoriza autenticidade e transformação real, não perfeição.',
      
      '🧠 Reflita:\nVocê sabe algo que pode ajudar alguém?\nEntão você já tem valor para o mercado.',
      
      '❌ 2. "Ainda não é o momento certo."\nA verdade? O momento perfeito não existe.\n\nSempre vai faltar tempo, dinheiro ou coragem.\nA diferença entre quem realiza e quem assiste… está em quem decide agir mesmo com medo.',
      
      '🎯 Frase-chave:\n"Não comece quando estiver pronto. Comece… e fique pronto no caminho."',
      
      '❌ 3. "Já tem muita gente fazendo isso."\nSim, já tem gente no mercado.\nMas ninguém tem a sua história, seu jeito, sua visão.\n\nVocê não precisa ser o único. Precisa ser verdadeiro.\nPessoas se conectam com pessoas — e seu diferencial é ser quem você é.',
      
      '💡 Dica:\nExistem milhares de pizzarias no mundo. Isso impediu alguém de abrir mais uma?',
      
      '❌ 4. "Eu não sei o suficiente sobre negócios."\nEmpreender é uma habilidade que se aprende na prática.\nVocê pode (e deve) estudar. Mas não precisa saber tudo pra começar.',
      
      'O erro é usar a falta de conhecimento como desculpa pra não agir.\nA melhor forma de aprender… é fazendo.',
      
      '📌 Comece pequeno. Erre rápido. Corrija com inteligência.',
      
      '❌ 5. "E se der errado?"\nMas… e se der certo?\nE se for melhor do que você imagina?\n\nO medo do fracasso é natural — mas ele só deve te proteger de riscos reais, não paralisar sua vida.',
      
      '🌱 Lembre-se:\nErrar faz parte. Quem nunca erra… nunca aprende.\nE quem nunca começa… já está parado.',
      
      '✅ Conclusão: Comece com clareza e coragem\nEssas 5 crenças não são verdades — são vozes internas que você pode reprogramar.\nA cada passo que você dá, elas perdem força. E você ganha autonomia.',
      
      'Você não precisa mudar tudo de uma vez.\nPrecisa só começar.'
    ],
    callToAction: {
      title: '📘 Quer ajuda para dar o primeiro passo?',
      description: 'Baixe agora gratuitamente o eBook:',
      link: '/ebooks/7-passos-para-uma-vida-bem-sucedida',
      linkText: '👉 "7 Passos para Ser Bem-Sucedido na Vida"'
    }
  },
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