import {
  BeakerIcon as BrainIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  BoltIcon,
  ClockIcon,
  SparklesIcon,
  AcademicCapIcon,
  TagIcon as TargetIcon,
  ChatBubbleLeftRightIcon,
  ArrowPathIcon,
  HashtagIcon,
} from '@heroicons/react/24/solid';

export type IconName = 
  | 'brain'
  | 'lightbulb'
  | 'rocket'
  | 'warning'
  | 'chart'
  | 'bolt'
  | 'clock'
  | 'sparkles'
  | 'academic-cap'
  | 'target'
  | 'chat-bubble-left-right'
  | 'iterate'
  | 'tip'
  | 'reflect'
  | 'number-1'
  | 'number-2'
  | 'number-3'
  | 'number-4'
  | 'number-5';

export const iconMap: Record<IconName, typeof BrainIcon> = {
  'brain': BrainIcon,
  'lightbulb': LightBulbIcon,
  'rocket': RocketLaunchIcon,
  'warning': ExclamationTriangleIcon,
  'chart': ChartBarIcon,
  'bolt': BoltIcon,
  'clock': ClockIcon,
  'sparkles': SparklesIcon,
  'academic-cap': AcademicCapIcon,
  'target': TargetIcon,
  'chat-bubble-left-right': ChatBubbleLeftRightIcon,
  'iterate': ArrowPathIcon,
  'tip': SparklesIcon,
  'reflect': BrainIcon,
  'number-1': HashtagIcon,
  'number-2': HashtagIcon,
  'number-3': HashtagIcon,
  'number-4': HashtagIcon,
  'number-5': HashtagIcon,
};

export type BlogPostSection = {
  type: 'main-title' | 'subtitle' | 'introduction' | 'numerable-section' | 'tip' | 'reminder' | 'conclusion';
  title?: string;  // For sections that need a title (like introduction, numerable-section, etc)
  content?: string;  // Optional for numerable sections
  items?: Array<{  // For numerable sections
    number?: number;
    title: string;
    content: string;
  }>;
};

export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  quote?: {
    text: string;
    author: string;
  };
  sections: BlogPostSection[];
  callToAction?: {
    title: string;
    description: string;
    link: string;
    linkText: string;
  };
  podcast?: {
    episodeId: string;
    title: string;
    duration: string;
    audioUrl: string;
  };
};

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
    slug: 'nao-pense-demais-apenas-comece',
    title: 'Não Pense Demais, Apenas Comece',
    author: 'Being Mindful',
    quote: {
      text: 'O maior risco não é tentar e falhar, mas não tentar e se arrepender.',
      author: 'Being Mindful'
    },
    podcast: {
      episodeId: '001',
      title: 'Não Pense Demais, Apenas Comece - O Poder da Ação',
      duration: '15:30',
      audioUrl: '/audios/podcast__7_passos_para_uma_vida_bemsucedida.mp3'
    },
    sections: [
      {
        type: 'introduction',
        title: 'Introdução',
        content: 'Se você já se pegou preso em um ciclo interminável de planejamento, análise e procrastinação, este post é para você. A verdade é simples, mas poderosa: não pense demais, apenas comece.\n\nO excesso de pensamento é o inimigo da ação. Nós nos convencemos de que precisamos de mais informações, mais ferramentas, mais tempo, ou que o cenário precisa ser "perfeito" antes de darmos o pontapé inicial. Mas essa busca incessante pela perfeição inicial é uma armadilha. A vida real, e o sucesso em qualquer empreitada, raramente seguem um roteiro perfeito desde o início.\n\nA grande ironia é que a forma mais eficaz de aprender e aprimorar algo é... fazendo. E, inevitavelmente, errando. Cada erro não é um fracasso, mas um feedback crucial. É uma oportunidade de entender o que não funciona, ajustar a rota e melhorar.\n\nPense em uma criança aprendendo a andar. Ela não planeja cada movimento do músculo, ela simplesmente tenta. Cai. Levanta. Tenta de novo. E a cada tombo, seu cérebro e seu corpo aprendem a coordenar-se melhor. Se ela esperasse o plano perfeito de equilíbrio antes de dar o primeiro passo, nunca andaria. Em qualquer projeto – seja um novo negócio, um curso, um hobby, ou até mesmo uma mudança de hábito – o mesmo princípio se aplica:'
      },
      {
        type: 'numerable-section',
        title: 'Benefícios de Começar Cedo',
        items: [
          {
            number: 1,
            title: 'Errar cedo é errar barato',
            content: 'Identificar falhas no começo do processo é muito menos custoso (em tempo, dinheiro e energia) do que descobrir problemas quando você já investiu demais.'
          },
          {
            number: 2,
            title: 'Acelera o aprendizado',
            content: 'A teoria é importante, mas a prática é a verdadeira sala de aula. A cada tentativa, você ganha experiência prática, que é insubstituível.'
          },
          {
            number: 3,
            title: 'Constrói resiliência',
            content: 'Superar pequenos obstáculos no início prepara você para desafios maiores no futuro.'
          },
          {
            number: 4,
            title: 'Evita a paralisia por análise',
            content: 'Em vez de ficar estagnado pensando em todas as possibilidades, a ação te coloca em movimento e te dá dados reais para trabalhar.'
          }
        ]
      },
      {
        type: 'tip',
        title: 'Aprimorando no Percurso',
        content: 'O "começar" não significa que você precisa ter todas as respostas ou que seu produto/serviço precisa ser impecável desde o dia zero. Pelo contrário. Comece com o que você tem, com o que é "bom o suficiente" para ser lançado. O segredo está em adotar uma mentalidade de melhoria contínua.'
      },
      {
        type: 'numerable-section',
        title: 'Estratégias de Melhoria Contínua',
        items: [
          {
            number: 1,
            title: 'Lance um MVP (Mínimo Produto Viável)',
            content: 'Empreendedores e desenvolvedores de software usam muito esse conceito. Lance a versão mais simples e funcional da sua ideia.'
          },
          {
            number: 2,
            title: 'Coleta de Feedback',
            content: 'Uma vez que você começa, você recebe feedback real. As pessoas interagem, reagem, e é aí que você realmente aprende o que funciona e o que precisa ser ajustado.'
          },
          {
            number: 3,
            title: 'Iterar e Evoluir',
            content: 'Use o aprendizado dos erros e do feedback para fazer melhorias incrementais. Cada pequena alteração te aproxima da versão ideal.'
          }
        ]
      },
      {
        type: 'tip',
        content: 'A jornada do sucesso não é uma linha reta, mas uma série de curvas, ajustes e, sim, alguns desvios. O importante é estar em movimento.'
      },
      {
        type: 'tip',
        title: 'A Hora é Agora',
        content: 'Não espere pelo momento perfeito, pela habilidade perfeita, ou pela oportunidade perfeita. Eles raramente aparecem sem que você comece a criá-los.'
      },
      {
        type: 'reminder',
        title: 'Lembre-se',
        content: 'O maior risco não é tentar e falhar, mas não tentar e se arrepender.'
      },
      {
        type: 'conclusion',
        title: 'Conclusão',
        content: 'Então, respire fundo, dê aquele primeiro passo imperfeito. Permita-se errar, aprender e crescer no processo. Porque a sua jornada de sucesso começa quando você decide parar de pensar demais e apenas começar.'
      }
    ],
    callToAction: {
      title: '📘 Quer ajuda para dar o primeiro passo?',
      description: 'Baixe agora gratuitamente o eBook que vai te ajudar a superar a procrastinação e começar sua jornada:',
      link: '/ebooks/7-passos-para-uma-vida-bem-sucedida',
      linkText: '👉 "7 Passos para Ser Bem-Sucedido na Vida"'
    }
  },
  {
    slug: 'comecar-sem-dinheiro',
    title: 'Começar Sem Dinheiro: Por Que Planejamento e Atitude Valem Mais que Capital Inicial',
    author: 'Being Mindful',
    quote: {
      text: 'O dinheiro é um meio, mas a ação é o destino.',
      author: 'Being Mindful'
    },
    podcast: {
      episodeId: '002',
      title: 'Começar Sem Dinheiro - Estratégias Práticas',
      duration: '18:45',
      audioUrl: '/audios/podcast__7_passos_para_uma_vida_bemsucedida.mp3'
    },
    sections: [
      {
        type: 'introduction',
        title: 'Introdução',
        content: 'Se você já se sentiu travado por essa crença, este post é para você.\n\nA verdade é que, embora o dinheiro seja um recurso valioso, ele não é – e nunca foi – o único ou o mais importante recurso para começar. O que realmente faz a diferença no início de qualquer jornada empreendedora não é o tamanho do seu bolso, mas a força da sua atitude, a clareza do seu planejamento e a sua capacidade de usar criativamente os recursos que você já tem.\n\nAntes de mergulharmos em estratégias práticas, vamos desmistificar um conceito crucial: o verdadeiro "capital inicial" de qualquer empreendedor não é (ou não deveria ser) apenas o dinheiro. É a soma de vários outros recursos, muitos dos quais você provavelmente já possui, mesmo que não tenha notado.'
      },
      {
        type: 'numerable-section',
        title: 'Conhecimento e Habilidades',
        items: [
          {
            number: 1,
            title: 'O que você sabe fazer?',
            content: 'Quais são suas habilidades, mesmo que pareçam simples ou "óbvias"? Muitas vezes, subestimamos o valor do nosso próprio conhecimento.'
          },
          {
            number: 2,
            title: 'Transforme seu conhecimento em valor',
            content: 'Uma habilidade que você domina pode ser exatamente o que outras pessoas estão dispostas a pagar para aprender ou ter acesso. Seu conhecimento único pode ser transformado em um produto ou serviço valioso.'
          }
        ]
      },
      {
        type: 'numerable-section',
        title: 'Rede de Contatos',
        items: [
          {
            number: 1,
            title: 'Suas conexões são um ativo poderoso',
            content: 'Suas conexões – amigos, familiares, colegas de trabalho, ex-colegas, pessoas que você conhece em grupos ou comunidades – são um ativo poderoso. Essas conexões podem abrir portas e criar oportunidades inesperadas.'
          },
          {
            number: 2,
            title: 'Valorize sua rede',
            content: 'Elas podem ser seus primeiros clientes, fornecedores, parceiros ou até mesmo fontes de feedback valioso. Sua rede é um recurso valioso para validar ideias e encontrar suporte inicial.'
          }
        ]
      },
      {
        type: 'numerable-section',
        title: 'Tempo e Energia',
        items: [
          {
            number: 1,
            title: 'Investimento em tempo e energia',
            content: 'Começar sem dinheiro geralmente significa investir mais tempo e energia. Este investimento pode ser mais valioso que dinheiro no início.'
          },
          {
            number: 2,
            title: 'Uma vantagem disfarçada',
            content: 'E isso pode ser uma vantagem! O investimento de tempo e energia te força a ser mais criativo e eficiente.'
          },
          {
            number: 3,
            title: 'Retorno significativo',
            content: 'O tempo que você dedica a aprender, a construir, a iterar e a se conectar com pessoas é um investimento que, se bem direcionado, gera retornos significativos. Este investimento em conhecimento e relacionamentos é fundamental para o sucesso a longo prazo.'
          }
        ]
      },
      {
        type: 'numerable-section',
        title: 'Criatividade e Resiliência',
        items: [
          {
            number: 1,
            title: 'A necessidade aguça o engenho',
            content: 'Limitações financeiras podem ser o catalisador para soluções inovadoras.'
          },
          {
            number: 2,
            title: 'Pensar fora da caixa',
            content: 'Quando você não tem dinheiro para "comprar" soluções, você é forçado a pensar fora da caixa, a encontrar caminhos alternativos, a ser mais criativo e resiliente. Esta mentalidade de resolução de problemas é uma habilidade valiosa para qualquer empreendedor.'
          },
          {
            number: 3,
            title: 'Habilidades inestimáveis',
            content: 'Essas habilidades são inestimáveis e te acompanham por toda a sua jornada empreendedora. A criatividade e resiliência desenvolvidas no início serão fundamentais para superar desafios futuros.'
          }
        ]
      },
      {
        type: 'tip',
        title: 'Estratégias Práticas para Começar',
        content: 'Ok, você já entendeu que o dinheiro não é o único recurso. Mas como, na prática, você pode começar a construir algo sem ele? Aqui estão algumas estratégias testadas e aprovadas por quem já trilhou esse caminho:'
      },
      {
        type: 'numerable-section',
        title: 'Comece com o que você tem',
        items: [
          {
            number: 1,
            title: 'Faça um inventário honesto',
            content: 'Faça um inventário honesto dos seus recursos. Identifique suas habilidades, conhecimentos e contatos disponíveis.'
          },
          {
            number: 2,
            title: 'Identifique suas habilidades',
            content: 'Quais habilidades você pode oferecer? Que problemas você pode resolver? Que conhecimentos você pode compartilhar?'
          },
          {
            number: 3,
            title: 'Use seus recursos disponíveis',
            content: 'O segredo é começar com o que você já tem. Mesmo que pareça pouco, use seus recursos disponíveis para dar o primeiro passo.'
          }
        ]
      },
      {
        type: 'tip',
        title: 'Valide sua ideia antes de investir',
        content: 'Use ferramentas gratuitas (ou de baixo custo) para testar sua ideia. Crie um MVP (Produto Mínimo Viável), converse com potenciais clientes, colete feedback. Isso te ajuda a entender se você está no caminho certo antes de colocar dinheiro (que você não tem) na jogada.'
      },
      {
        type: 'tip',
        title: 'Aproveite o poder da internet',
        content: 'A internet é uma ferramenta democratizadora. Você pode criar um site simples (existem plataformas gratuitas), usar redes sociais para se conectar com seu público, criar conteúdo que demonstre sua expertise. Tudo isso pode ser feito com investimento mínimo ou zero.'
      },
      {
        type: 'tip',
        title: 'Construa parcerias',
        content: 'Procure por parcerias onde todos ganham. Talvez você não tenha dinheiro, mas tem tempo, habilidades ou contatos que são valiosos para alguém. Uma parceria bem estruturada pode ser o pontapé inicial que você precisa.'
      },
      {
        type: 'tip',
        title: 'Aprenda continuamente',
        content: 'Invista seu tempo em aprender. Existem inúmeros recursos gratuitos (ou muito baratos) online – cursos, ebooks, podcasts, vídeos. Quanto mais você aprende, mais ferramentas você tem para criar valor, mesmo sem dinheiro.'
      },
      {
        type: 'tip',
        title: 'O Dinheiro Virá',
        content: 'Quando você começa a criar valor real, a resolver problemas, a atender necessidades, o dinheiro começa a fluir naturalmente. Ele se torna uma consequência do seu trabalho, não um pré-requisito.'
      },
      {
        type: 'conclusion',
        title: 'Conclusão',
        content: 'Começar sem dinheiro não é um obstáculo, é uma oportunidade. Uma oportunidade para desenvolver habilidades cruciais, para ser mais criativo, para construir algo verdadeiramente seu, passo a passo. O dinheiro é importante, claro, mas ele é um meio, não o fim. O verdadeiro capital inicial está dentro de você – na sua atitude, no seu planejamento, na sua capacidade de agir e se adaptar. Use-o.'
      }
    ],
    callToAction: {
      title: '📘 Quer ajuda para dar o primeiro passo?',
      description: 'Baixe agora gratuitamente o eBook que vai te ajudar a superar a procrastinação e começar sua jornada:',
      link: '/ebooks/7-passos-para-uma-vida-bem-sucedida',
      linkText: '👉 "7 Passos para Ser Bem-Sucedido na Vida"'
    }
  },
  {
    slug: 'ler-para-liderar',
    title: 'Ler Para Liderar: Por Que Todo Empreendedor Precisa Devorar Livros',
    author: 'Being Mindful',
    quote: {
      text: 'Cada página virada é um investimento no seu crescimento, na sua capacidade de inovar e, em última instância, no sucesso do seu empreendimento.',
      author: 'Being Mindful'
    },
    podcast: {
      episodeId: '003',
      title: 'Ler Para Liderar - O Hábito que Transforma Empreendedores',
      duration: '22:15',
      audioUrl: '/audios/podcast__7_passos_para_uma_vida_bemsucedida.mp3'
    },
    sections: [
      {
        type: 'introduction',
        title: 'Introdução',
        content: 'No dinâmico universo do empreendedorismo, onde a mudança é a única constante, a capacidade de liderar com visão e adaptabilidade é o que separa os negócios que prosperam daqueles que apenas sobrevivem. E a ferramenta mais poderosa para afiar essa capacidade pode estar ao seu alcance agora mesmo: a leitura.\n\nNão estamos falando apenas de ler relatórios financeiros ou artigos sobre sua indústria. Estamos falando de devorar livros – e-books, artigos, notícias, biografias, ficção, o que for. A leitura é a sua fonte inesgotável de sabedoria, o atalho para a experiência de milhares de mentes brilhantes e o catalisador para a sua própria evolução como líder.'
      },
      {
        type: 'numerable-section',
        title: 'A Mente do Líder em Construção',
        content: 'Um empreendedor de verdade sabe que o aprendizado nunca para. Cada livro é uma aula particular com um especialista, um mergulho em novas perspectivas e uma oportunidade de adquirir conhecimento que você talvez não encontraria de outra forma. Ao ler, você:',
        items: [
          {
            number: 1,
            title: 'Absorve Estratégias Comprovadas',
            content: 'De modelos de negócios inovadores a táticas de marketing disruptivas, a leitura te expõe a um vasto repertório de estratégias que outros aplicaram com sucesso (ou cometeram erros que você pode evitar).'
          },
          {
            number: 2,
            title: 'Aprimora a Tomada de Decisão',
            content: 'Quanto mais você lê, mais amplia seu repertório mental. Isso te ajuda a conectar pontos, identificar padrões e tomar decisões mais informadas e estratégicas, mesmo em cenários de incerteza.'
          },
          {
            number: 3,
            title: 'Desenvolve Liderança Autêntica',
            content: 'Livros sobre psicologia, comportamento humano e liderança inspiradora moldam sua capacidade de entender e motivar equipes, construir culturas fortes e guiar seu negócio através de desafios.'
          }
        ]
      },
      {
        type: 'tip',
        title: 'Conhecimento é Vantagem Competitiva',
        content: 'No mercado atual, o acesso à informação é quase ilimitado. Mas a capacidade de filtrar, processar e aplicar esse conhecimento é o que realmente gera vantagem. Empreendedores que leem constantemente estão sempre um passo à frente. Eles identificam tendências antes da concorrência, preveem mudanças no cenário e adaptam suas estratégias com agilidade.\n\nPense nos maiores líderes e empreendedores do mundo. Muitos deles, como Bill Gates e Elon Musk, são leitores vorazes. Eles entendem que o conhecimento é o combustível para a inovação e a liderança eficaz.'
      },
      {
        type: 'numerable-section',
        title: 'Além dos Negócios: Cultivando a Visão',
        content: 'A leitura não te prepara apenas para os aspectos técnicos do seu negócio; ela molda sua visão de mundo. Ao ler sobre história, filosofia ou até mesmo ficção, você expande sua empatia, sua compreensão de diferentes culturas e sua capacidade de pensar fora da caixa. Essa visão holística é crucial para:',
        items: [
          {
            number: 1,
            title: 'Identificar Oportunidades Inesperadas',
            content: 'Uma mente aberta e bem informada percebe lacunas e necessidades que outros ignoram.'
          },
          {
            number: 2,
            title: 'Navegar em Crises',
            content: 'A história ensina resiliência, e a compreensão de complexidades sociais e econômicas te prepara para enfrentar adversidades.'
          },
          {
            number: 3,
            title: 'Comunicar com Clareza e Impacto',
            content: 'Um vocabulário rico e a capacidade de articular ideias complexas (benefícios diretos da leitura) são inestimáveis para inspirar sua equipe, conquistar investidores e engajar clientes.'
          }
        ]
      },
      {
        type: 'conclusion',
        title: 'Conclusão',
        content: 'A jornada empreendedora é um eterno aprendizado. Se você quer não apenas participar, mas liderar essa jornada, então é hora de fazer da leitura uma parte inegociável da sua rotina. Cada página virada é um investimento no seu crescimento, na sua capacidade de inovar e, em última instância, no sucesso do seu empreendimento.\n\nEntão, qual será o próximo livro que você vai devorar?'
      }
    ],
    callToAction: {
      title: '📚 Quer começar sua jornada de leitura?',
      description: 'Baixe agora gratuitamente nossa lista curada de livros essenciais para empreendedores:',
      link: '/ebooks/7-passos-para-uma-vida-bem-sucedida',
      linkText: '👉 "7 Passos para Ser Bem-Sucedido na Vida"'
    }
  },
  {
    slug: '5-crencas',
    title: '5 Crenças que Estão Te Impedindo de Começar',
    author: 'Being Mindful',
    quote: {
      text: 'As crenças são como lentes. Se elas estiverem embaçadas, sua visão estará distorcida.',
      author: 'Being Mindful'
    },
    podcast: {
      episodeId: '004',
      title: '5 Crenças Limitantes - Como Identificar e Superar',
      duration: '20:00',
      audioUrl: '/audios/podcast__7_passos_para_uma_vida_bemsucedida.mp3'
    },
    sections: [
      {
        type: 'main-title',
        content: 'As 5 Crenças que Impedem Você de Começar o Seu Próprio Negócio Online'
      },
      {
        type: 'introduction',
        title: 'Introdução',
        content: 'Você já pensou em começar algo seu na internet, viver de renda online, ter liberdade, fazer o que ama… mas travou antes mesmo de começar?\n\nSe sim, você não está sozinho.\n\nA maioria das pessoas que quer empreender não é impedida pela falta de dinheiro ou tempo — mas por algo mais profundo: as crenças limitantes.'
      },
      {
        type: 'numerable-section',
        title: 'As 5 Crenças Limitantes',
        items: [
          {
            number: 1,
            title: '"Eu não sou bom o suficiente."',
            content: 'Essa é a mais comum e mais cruel. Acreditar que você precisa ser um "gênio" ou ter mil diplomas para empreender só atrasa a ação. O mercado valoriza autenticidade e transformação real, não perfeição.\n\nVocê sabe algo que pode ajudar alguém? Então você já tem valor para o mercado.'
          },
          {
            number: 2,
            title: '"Ainda não é o momento certo."',
            content: 'A verdade? O momento perfeito não existe. Sempre vai faltar tempo, dinheiro ou coragem. A diferença entre quem realiza e quem assiste está em quem decide agir mesmo com medo.'
          },
          {
            number: 3,
            title: '"Já tem muita gente fazendo isso."',
            content: 'Sim, já tem gente no mercado. Mas ninguém tem a sua história, seu jeito, sua visão. Você não precisa ser o único. Precisa ser verdadeiro. Pessoas se conectam com pessoas — e seu diferencial é ser quem você é.'
          },
          {
            number: 4,
            title: '"Eu não sei o suficiente sobre negócios."',
            content: 'Empreender é uma habilidade que se aprende na prática. Você pode (e deve) estudar. Mas não precisa saber tudo para começar.\n\nO erro é usar a falta de conhecimento como desculpa para não agir. A melhor forma de aprender é fazendo.\n\nComece pequeno. Erre rápido. Corrija com inteligência.'
          },
          {
            number: 5,
            title: '"E se der errado?"',
            content: 'Mas… e se der certo? E se for melhor do que você imagina?\n\nO medo do fracasso é natural — mas ele só deve te proteger de riscos reais, não paralisar sua vida.'
          }
        ]
      },
      {
        type: 'reminder',
        title: 'Lembre-se',
        content: 'Errar faz parte. Quem nunca erra… nunca aprende.\nE quem nunca começa… já está parado.'
      },
      {
        type: 'conclusion',
        title: 'Conclusão',
        content: 'Essas 5 crenças não são verdades — são vozes internas que você pode reprogramar. A cada passo que você dá, elas perdem força. E você ganha autonomia.\n\nVocê não precisa mudar tudo de uma vez.\nPrecisa só começar.'
      }
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
    author: 'Being Mindful',
    quote: {
      text: 'Você não precisa ver a escada inteira. Apenas dê o primeiro passo.',
      author: 'Martin Luther King Jr.'
    },
    podcast: {
      episodeId: '005',
      title: 'Visão Empreendedora - O Começo de Toda Transformação',
      duration: '17:45',
      audioUrl: '/audios/podcast__7_passos_para_uma_vida_bemsucedida.mp3'
    },
    sections: [
      {
        type: 'introduction',
        title: 'Introdução',
        content: 'Muita gente sonha em mudar de vida. Ter liberdade, tempo, propósito e — claro — independência financeira. Mas poucos percebem que tudo isso começa com uma decisão invisível: adotar uma mentalidade empreendedora e tomar iniciativa.'
      },
      {
        type: 'numerable-section',
        title: 'O Que é Visão Empreendedora?',
        content: 'Visão empreendedora não tem a ver apenas com abrir empresa ou ter um CNPJ. Tem a ver com modo de pensar.',
        items: [
          {
            number: 1,
            title: 'Criar Oportunidades',
            content: 'Enquanto muitos esperam pelas condições perfeitas, o empreendedor cria oportunidades.'
          },
          {
            number: 2,
            title: 'Agir com o que Tem',
            content: 'Enquanto alguns culpam o sistema, o empreendedor pergunta: "O que eu posso fazer com o que tenho agora?"'
          },
          {
            number: 3,
            title: 'Ver Valor Oculto',
            content: 'Enquanto uns consomem sem pensar, o empreendedor vê valor onde os outros não veem.'
          }
        ]
      },
      {
        type: 'tip',
        content: 'Visão empreendedora é ver além dos obstáculos. É enxergar o potencial de transformação — mesmo quando ninguém mais vê.'
      },
      {
        type: 'tip',
        title: 'A Importância da Iniciativa',
        content: 'Iniciativa: a ponte entre desejo e resultado. Ideias não transformam vidas. Ações sim.\n\nQuantas pessoas você conhece que dizem: "Um dia eu ainda vou abrir algo meu…" "Eu tenho um projeto engavetado…" "Tô esperando a hora certa…" O problema é que a hora certa não existe.'
      },
      {
        type: 'tip',
        title: 'Dica',
        content: 'Você não precisa estar 100% pronto para começar. Precisa estar 100% comprometido.\n\nA iniciativa é o que transforma intenção em progresso. É a coragem de dar o primeiro passo — mesmo sem ter todas as respostas.'
      },
      {
        type: 'numerable-section',
        title: 'Como Começar',
        content: 'Você pode começar hoje:',
        items: [
          {
            number: 1,
            title: 'Compartilhe Conhecimento',
            content: 'Compartilhando algo que você sabe. Criando um conteúdo simples que ajude alguém.'
          },
          {
            number: 2,
            title: 'Crie Conteúdo',
            content: 'Fazendo um curso, um esboço de eBook, uma live. Ou até escrevendo o primeiro post — como este.'
          },
          {
            number: 3,
            title: 'Comece Pequeno',
            content: 'Você não precisa começar grande. Precisa começar com visão e ação.'
          }
        ]
      },
      {
        type: 'reminder',
        title: 'Lembre-se',
        content: '"Empreendedorismo não é sobre abrir empresas. É sobre abrir caminhos." — Being Mindful'
      },
      {
        type: 'conclusion',
        title: 'Conclusão',
        content: 'E abrir um caminho exige clareza, consistência e fé. Você não precisa enxergar o fim da estrada — só confiar no primeiro passo com intenção.'
      }
    ],
    callToAction: {
      title: '📘 Quer ajuda para dar esse passo?',
      description: 'Se você quer desenvolver sua mentalidade empreendedora, ganhar clareza sobre seu propósito e aprender a agir com mais consistência, baixe agora o nosso eBook gratuito:',
      link: '/ebooks/7-passos-para-uma-vida-bem-sucedida',
      linkText: '👉 7 Passos para Ser Bem-Sucedido na Vida'
    }
  },
  {
    slug: 'so-falha-quem-nao-se-ariska',
    title: 'Só Falha Quem NÃO Se Arrisca a Tentar',
    author: 'Being Mindful',
    quote: {
      text: 'Eu não falhei mil vezes. A lâmpada foi uma invenção com mil passos.',
      author: 'Thomas Edison'
    },
    podcast: {
      episodeId: '006',
      title: 'Só Falha Quem NÃO Se Arrisca a Tentar - A Importância do Risco',
      duration: '19:30',
      audioUrl: '/audios/podcast__7_passos_para_uma_vida_bemsucedida.mp3'
    },
    sections: [
      {
        type: 'introduction',
        title: 'Introdução',
        content: 'Muitos de nós carregam um medo profundo de falhar. Essa hesitação pode nos paralisar, impedindo que demos o primeiro passo em direção aos nossos sonhos, objetivos, ou até mesmo pequenas mudanças no dia a dia. Mas e se a verdadeira falha não fosse o tropeço no caminho, e sim a recusa em sequer tentar?\n\nPense nisso: cada grande inovação, cada descoberta científica, cada obra de arte que nos inspira, nasceu de inúmeras tentativas – e sim, muitos erros. O inventor Thomas Edison, ao criar a lâmpada, disse: "Eu não falhei mil vezes. A lâmpada foi uma invenção com mil passos." Ele não via seus "fracassos" como o fim, mas como degraus essenciais na jornada rumo ao sucesso.'
      },
      {
        type: 'tip',
        title: 'O Medo do Fracasso: Uma Ilusão Limitante',
        content: 'A sociedade, muitas vezes, nos ensina a valorizar apenas o sucesso imediato e perfeito. Isso cria uma cultura onde o erro é visto como algo a ser evitado a todo custo. No entanto, o fracasso, quando abordado com a mentalidade certa, é um professor inestimável. Ele nos mostra o que não funciona, nos força a recalibrar a rota, a aprimorar nossas estratégias e a descobrir novas soluções. Sem o erro, o aprendizado seria superficial, e a inovação, rara.'
      },
      {
        type: 'tip',
        title: 'A Verdadeira Falha: A Ausência de Ação',
        content: 'A falha mais dolorosa não é aquela que acontece depois de você ter se dedicado de corpo e alma a algo. A verdadeira falha é a de não se permitir tentar. É a falha de viver com a dúvida do "e se?".'
      },
      {
        type: 'numerable-section',
        title: 'Os Fantasmas do Arrependimento',
        content: 'Esses "e se?" são os fantasmas do arrependimento, muito mais pesados do que a experiência de um erro cometido com coragem:',
        items: [
          {
            number: 1,
            title: 'O Negócio Não Iniciado',
            content: 'E se eu tivesse aberto aquele negócio?'
          },
          {
            number: 2,
            title: 'A Oportunidade Perdida',
            content: 'E se eu tivesse me candidatado para aquela vaga?'
          },
          {
            number: 3,
            title: 'Os Sentimentos Não Expressos',
            content: 'E se eu tivesse expressado meus sentimentos?'
          },
          {
            number: 4,
            title: 'O Hobby Adiado',
            content: 'E se eu tivesse começado a praticar aquele hobby?'
          }
        ]
      },
      {
        type: 'tip',
        title: 'O Poder do Risco',
        content: 'Quando nos arriscamos, mesmo que o resultado não seja o esperado, nós ganhamos algo de valor incalculável: experiência. Ganhamos conhecimento sobre nós mesmos, sobre o processo, sobre o mundo ao nosso redor. Cada tentativa nos torna mais resilientes, mais adaptáveis e, paradoxalmente, mais preparados para o sucesso.'
      },
      {
        type: 'tip',
        content: 'No fim das contas, a vida é uma série de tentativas. É em cada passo incerto, em cada salto de fé, que a magia acontece. Não se prenda ao medo do que pode dar errado. Liberte-se para a possibilidade do que pode dar certo, e aprenda com o que não der.'
      },
      {
        type: 'reminder',
        title: 'Lembre-se',
        content: 'Só falha quem NÃO se arrisca a tentar.'
      },
      {
        type: 'conclusion',
        title: 'Conclusão',
        content: 'Então, arrisque-se. Tente. Sinta o processo. E descubra o quão longe você pode ir.'
      }
    ],
    callToAction: {
      title: '📘 Quer ajuda para dar o primeiro passo?',
      description: 'Baixe agora gratuitamente o eBook que vai te ajudar a superar o medo e começar sua jornada:',
      link: '/ebooks/7-passos-para-uma-vida-bem-sucedida',
      linkText: '👉 "7 Passos para Ser Bem-Sucedido na Vida"'
    }
  },
  {
    slug: 'aprenda-pensar-como-empreendedor',
    title: 'Aprenda a Pensar Como um Empreendedor',
    author: 'Being Mindful',
    quote: {
      text: 'A leitura é uma das melhores formas de desenvolver essa mentalidade.',
      author: 'Being Mindful'
    },
    podcast: {
      episodeId: '007',
      title: 'Aprenda a Pensar Como um Empreendedor - A Importância da Leitura',
      duration: '16:45',
      audioUrl: '/audios/podcast__7_passos_para_uma_vida_bemsucedida.mp3'
    },
    sections: [
      {
        type: 'introduction',
        title: 'Introdução',
        content: 'Pensar como um empreendedor é uma habilidade que se aprende. Não é algo com que se nasce pronto, mas uma mentalidade que se cultiva e se aprimora com o tempo e a experiência. E a leitura é uma das melhores formas de desenvolver essa mentalidade, pois ela abre portas para conhecimentos e perspectivas que você não encontraria de outra forma.'
      },
      {
        type: 'numerable-section',
        title: 'A Leitura e a Mentalidade Empreendedora',
        items: [
          {
            number: 1,
            title: 'Desenvolvimento da Mentalidade',
            content: 'Pensar como um empreendedor não é um dom inato, mas uma habilidade que se aprende. E a leitura é, sem dúvida, uma das ferramentas mais eficazes para desenvolver e fortalecer essa mentalidade, que te impulsiona a ver problemas como oportunidades e a buscar soluções inovadoras.'
          },
          {
            number: 2,
            title: 'Conversas com Experientes',
            content: 'Cada livro que você lê é como ter uma conversa privilegiada com alguém que já trilhou o caminho, passou por desafios similares e superou obstáculos. Você absorve insights valiosos, estratégias testadas e, principalmente, uma forma diferente de enxergar o mundo e seus próprios limites.'
          },
          {
            number: 3,
            title: 'Expansão de Perspectivas',
            content: 'A leitura te expõe a uma vasta gama de ideias, culturas e modelos de pensamento. Isso te ajuda a questionar pressupostos antigos, a desafiar o status quo e a enxergar oportunidades em lugares onde outros veem apenas problemas ou situações sem saída. É um exercício constante de ampliar sua visão.'
          },
          {
            number: 4,
            title: 'Acelera o Aprendizado',
            content: 'Empreendedores de sucesso são aprendizes contínuos. A leitura permite que você assimile anos de experiência em questão de horas, acelerando seu próprio processo de aprendizado e te dando uma base sólida para tomar decisões mais inteligentes e estratégicas.'
          }
        ]
      },
      {
        type: 'conclusion',
        title: 'Conclusão',
        content: 'Se você busca cultivar uma mente inovadora, estratégica e preparada para os desafios do empreendedorismo, faça da leitura um hábito inegociável. Ela é um investimento de tempo que rende dividendos em conhecimento, sabedoria e, acima de tudo, na construção de uma mentalidade verdadeiramente empreendedora.'
      }
    ],
    callToAction: {
      title: '📚 Quer começar sua jornada de leitura?',
      description: 'Baixe agora gratuitamente nossa lista curada de livros essenciais para empreendedores:',
      link: '/ebooks/7-passos-para-uma-vida-bem-sucedida',
      linkText: '👉 "7 Passos para Ser Bem-Sucedido na Vida"'
    }
  }
]; 