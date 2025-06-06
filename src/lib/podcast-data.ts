export interface PodcastEpisode {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  category: string;
  image: string;
  audioUrl: string;
  publishDate: string;
  topics: string[];
  keyTakeaways: string[];
  keyPoints?: string[];
  relatedBlogPost?: {
    slug: string;
    title: string;
    description: string;
  };
}

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: '001',
    slug: 'nao-pense-demais-apenas-comece',
    title: 'Não Pense Demais, Apenas Comece - O Poder da Ação',
    description: 'Neste episódio, exploramos por que o excesso de pensamento pode ser o maior inimigo da ação. Discutimos estratégias práticas para superar a paralisia por análise e começar a agir em direção aos seus objetivos, mesmo quando você não se sente 100% preparado.',
    longDescription: `O excesso de pensamento é o inimigo da ação. Nós nos convencemos de que precisamos de mais informações, mais ferramentas, mais tempo, ou que o cenário precisa ser "perfeito" antes de darmos o pontapé inicial. Mas essa busca incessante pela perfeição inicial é uma armadilha.

A vida real, e o sucesso em qualquer empreitada, raramente seguem um roteiro perfeito desde o início. A forma mais eficaz de aprender e aprimorar algo é... fazendo. E, inevitavelmente, errando. Cada erro não é um fracasso, mas um feedback crucial.

Neste episódio, você vai descobrir:
• Por que a ação imperfeita é melhor que a perfeição paralisante
• Como identificar e superar os padrões de overthinking
• Estratégias práticas para começar, mesmo com medo
• O poder do feedback rápido através da ação
• Como transformar erros em aprendizados valiosos`,
    keyPoints: [
      "Por que a ação imperfeita é melhor que a perfeição paralisante",
      "Como identificar e superar os padrões de overthinking",
      "Estratégias práticas para começar, mesmo com medo",
      "O poder do feedback rápido através da ação",
      "Como transformar erros em aprendizados valiosos"
    ],
    duration: '15:30',
    category: 'Mentalidade Empreendedora',
    image: '/podcast/episode-1.jpg',
    audioUrl: '/audios/podcast__7_passos_para_uma_vida_bemsucedida.mp3',
    publishDate: '15 de Março, 2024',
    topics: [
      'Mentalidade Empreendedora',
      'Produtividade',
      'Desenvolvimento Pessoal',
      'Ação vs Perfeccionismo'
    ],
    keyTakeaways: [
      'A ação imperfeita é melhor que a perfeição paralisante',
      'Erros são feedbacks, não fracassos',
      'O momento perfeito é agora',
      'Comece pequeno, mas comece'
    ],
    relatedBlogPost: {
      slug: 'nao-pense-demais-apenas-comece',
      title: 'Não Pense Demais, Apenas Comece',
      description: 'Descubra como superar a paralisia por análise e transformar pensamentos em ações concretas através de estratégias práticas e comprovadas.'
    }
  },
  {
    id: '002',
    slug: 'liberdade-financeira-estrategias-praticas',
    title: 'Liberdade Financeira: Estratégias Práticas',
    description: 'Descubra como construir múltiplas fontes de renda e alcançar a liberdade financeira através de estratégias testadas e comprovadas.',
    longDescription: `A verdadeira liberdade financeira vai além de simplesmente ter dinheiro. É sobre criar um estilo de vida sustentável que te permita viver nos seus próprios termos.

Neste episódio, mergulhamos fundo nas estratégias práticas que você pode começar a implementar hoje mesmo para construir uma base financeira sólida e criar múltiplas fontes de renda.

Você vai aprender:
• Como avaliar sua situação financeira atual com honestidade
• Estratégias para criar fontes de renda passiva
• O poder do investimento consciente
• Como equilibrar segurança e crescimento
• Passos práticos para começar sua jornada hoje`,
    duration: '52:15',
    category: 'Finanças',
    image: '/podcast/episode-2.jpg',
    audioUrl: '/audios/podcast__7_passos_para_uma_vida_bemsucedida.mp3',
    publishDate: '8 de Março, 2024',
    topics: [
      'Finanças Pessoais',
      'Investimentos',
      'Renda Passiva',
      'Planejamento Financeiro'
    ],
    keyTakeaways: [
      'Comece com uma avaliação honesta da sua situação',
      'Diversifique suas fontes de renda',
      'Invista em conhecimento primeiro',
      'Mantenha o foco no longo prazo'
    ],
    relatedBlogPost: {
      slug: 'comecar-sem-dinheiro',
      title: 'Começar Sem Dinheiro: Por Que Planejamento e Atitude Valem Mais que Capital Inicial',
      description: 'Aprenda como transformar conhecimento e habilidades em valor, mesmo sem capital inicial significativo.'
    }
  },
  {
    id: '003',
    slug: 'mindfulness-no-trabalho',
    title: 'Mindfulness no Trabalho: Produtividade com Propósito',
    description: 'Aprenda técnicas de mindfulness para aumentar sua produtividade e encontrar mais significado no seu trabalho diário.',
    longDescription: `Em um mundo cada vez mais acelerado, a prática de mindfulness se torna não apenas um diferencial, mas uma necessidade para manter a sanidade e a produtividade.

Neste episódio, exploramos como integrar práticas de mindfulness ao seu dia de trabalho para aumentar o foco, reduzir o estresse e encontrar mais significado em suas atividades diárias.

Tópicos abordados:
• Como implementar pausas mindful durante o dia
• Técnicas de respiração para momentos de estresse
• Estratégias para manter o foco em um mundo de distrações
• Como alinhar suas atividades com seu propósito maior`,
    duration: '38:45',
    category: 'Produtividade',
    image: '/podcast/episode-3.jpg',
    audioUrl: '/audios/podcast__7_passos_para_uma_vida_bemsucedida.mp3',
    publishDate: '1 de Março, 2024',
    topics: [
      'Mindfulness',
      'Produtividade',
      'Gestão do Estresse',
      'Propósito no Trabalho'
    ],
    keyTakeaways: [
      'Pequenas pausas podem ter grande impacto',
      'Respiração é sua âncora para o presente',
      'Foco é uma habilidade que pode ser desenvolvida',
      'Propósito aumenta a produtividade'
    ],
    relatedBlogPost: {
      slug: 'mindfulness-produtividade-trabalho',
      title: 'Mindfulness e Produtividade: Um Guia para o Trabalho Consciente',
      description: 'Descubra como a prática de mindfulness pode transformar sua experiência no trabalho e aumentar sua produtividade.'
    }
  }
]; 