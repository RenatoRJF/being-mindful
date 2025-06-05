export interface BlogPost {
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
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
    slug: 'nao-pense-demais-apenas-comece',
    title: 'Não Pense Demais, Apenas Comece',
    author: 'Being Mindful',
    quote: {
      text: 'O maior risco não é tentar e falhar, mas não tentar e se arrepender.',
      author: 'Being Mindful'
    },
    content: [
      'Pensamento e Ação',
      'Quantas ideias brilhantes já morreram na fase do "e se?" Quantos projetos incríveis nunca saíram do papel porque a perfeição parecia um requisito para o primeiro passo? Se você já se pegou preso em um ciclo interminável de planejamento, análise e procrastinação, este post é para você. A verdade é simples, mas poderosa: não pense demais, apenas comece.',
      
      'O excesso de pensamento é o inimigo da ação. Nós nos convencemos de que precisamos de mais informações, mais ferramentas, mais tempo, ou que o cenário precisa ser "perfeito" antes de darmos o pontapé inicial. Mas essa busca incessante pela perfeição inicial é uma armadilha. A vida real, e o sucesso em qualquer empreitada, raramente seguem um roteiro perfeito desde o início.',
      
      'O Valor Inestimável do Erro Precoce',
      'A grande ironia é que a forma mais eficaz de aprender e aprimorar algo é... fazendo. E, inevitavelmente, errando. Cada erro não é um fracasso, mas um feedback crucial. É uma oportunidade de entender o que não funciona, ajustar a rota e melhorar.',
      
      'Pense em uma criança aprendendo a andar. Ela não planeja cada movimento do músculo, ela simplesmente tenta. Cai. Levanta. Tenta de novo. E a cada tombo, seu cérebro e seu corpo aprendem a coordenar-se melhor. Se ela esperasse o plano perfeito de equilíbrio antes de dar o primeiro passo, nunca andaria.',
      
      'Em qualquer projeto – seja um novo negócio, um curso, um hobby, ou até mesmo uma mudança de hábito – o mesmo princípio se aplica:',
      
      '1. Errar cedo é errar barato: Identificar falhas no começo do processo é muito menos custoso (em tempo, dinheiro e energia) do que descobrir problemas quando você já investiu demais.',
      
      '2. Acelera o aprendizado: A teoria é importante, mas a prática é a verdadeira sala de aula. A cada tentativa, você ganha experiência prática, que é insubstituível.',
      
      '3. Constrói resiliência: Superar pequenos obstáculos no início prepara você para desafios maiores no futuro.',
      
      '4. Evita a paralisia por análise: Em vez de ficar estagnado pensando em todas as possibilidades, a ação te coloca em movimento e te dá dados reais para trabalhar.',
      
      'Aprimorando no Percurso',
      'O "começar" não significa que você precisa ter todas as respostas ou que seu produto/serviço precisa ser impecável desde o dia zero. Pelo contrário. Comece com o que você tem, com o que é "bom o suficiente" para ser lançado. O segredo está em adotar uma mentalidade de melhoria contínua.',
      
      '💡 Dica: Lance um MVP (Mínimo Produto Viável): Empreendedores e desenvolvedores de software usam muito esse conceito. Lance a versão mais simples e funcional da sua ideia.',
      
      '🧠 Reflita: Uma vez que você começa, você recebe feedback real. As pessoas interagem, reagem, e é aí que você realmente aprende o que funciona e o que precisa ser ajustado.',
      
      '📌 Iterar e Evoluir: Use o aprendizado dos erros e do feedback para fazer melhorias incrementais. Cada pequena alteração te aproxima da versão ideal.',
      
      'A jornada do sucesso não é uma linha reta, mas uma série de curvas, ajustes e, sim, alguns desvios. O importante é estar em movimento.',
      
      'A Hora é Agora',
      'Não espere pelo momento perfeito, pela habilidade perfeita, ou pela oportunidade perfeita. Eles raramente aparecem sem que você comece a criá-los. O maior risco não é tentar e falhar, mas não tentar e se arrepender.',
      
      'Conclusão',
      'Então, respire fundo, dê aquele primeiro passo imperfeito. Permita-se errar, aprender e crescer no processo. Porque a sua jornada de sucesso começa quando você decide parar de pensar demais e apenas começar.'
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
    content: [
      'Conhecimento e Liderança',
      'No dinâmico universo do empreendedorismo, onde a mudança é a única constante, a capacidade de liderar com visão e adaptabilidade é o que separa os negócios que prosperam daqueles que apenas sobrevivem. E a ferramenta mais poderosa para afiar essa capacidade pode estar ao seu alcance agora mesmo: a leitura.',
      
      'Não estamos falando apenas de ler relatórios financeiros ou artigos sobre sua indústria. Estamos falando de devorar livros – e-books, artigos, notícias, biografias, ficção, o que for. A leitura é a sua fonte inesgotável de sabedoria, o atalho para a experiência de milhares de mentes brilhantes e o catalisador para a sua própria evolução como líder.',
      
      'A Mente do Líder em Construção',
      'Um empreendedor de verdade sabe que o aprendizado nunca para. Cada livro é uma aula particular com um especialista, um mergulho em novas perspectivas e uma oportunidade de adquirir conhecimento que você talvez não encontraria de outra forma. Ao ler, você:',
      
      '1. Absorve Estratégias Comprovadas: De modelos de negócios inovadores a táticas de marketing disruptivas, a leitura te expõe a um vasto repertório de estratégias que outros aplicaram com sucesso (ou cometeram erros que você pode evitar).',
      
      '2. Aprimora a Tomada de Decisão: Quanto mais você lê, mais amplia seu repertório mental. Isso te ajuda a conectar pontos, identificar padrões e tomar decisões mais informadas e estratégicas, mesmo em cenários de incerteza.',
      
      '3. Desenvolve Liderança Autêntica: Livros sobre psicologia, comportamento humano e liderança inspiradora moldam sua capacidade de entender e motivar equipes, construir culturas fortes e guiar seu negócio através de desafios.',
      
      'Conhecimento é Vantagem Competitiva',
      'No mercado atual, o acesso à informação é quase ilimitado. Mas a capacidade de filtrar, processar e aplicar esse conhecimento é o que realmente gera vantagem. Empreendedores que leem constantemente estão sempre um passo à frente. Eles identificam tendências antes da concorrência, preveem mudanças no cenário e adaptam suas estratégias com agilidade.',
      
      '🧠 Reflita: Pense nos maiores líderes e empreendedores do mundo. Muitos deles, como Bill Gates e Elon Musk, são leitores vorazes. Eles entendem que o conhecimento é o combustível para a inovação e a liderança eficaz.',
      
      'Além dos Negócios: Cultivando a Visão',
      'A leitura não te prepara apenas para os aspectos técnicos do seu negócio; ela molda sua visão de mundo. Ao ler sobre história, filosofia ou até mesmo ficção, você expande sua empatia, sua compreensão de diferentes culturas e sua capacidade de pensar fora da caixa. Essa visão holística é crucial para:',
      
      '💡 Dica: Identificar Oportunidades Inesperadas: Uma mente aberta e bem informada percebe lacunas e necessidades que outros ignoram.',
      
      '📌 Navegar em Crises: A história ensina resiliência, e a compreensão de complexidades sociais e econômicas te prepara para enfrentar adversidades.',
      
      '🎯 Comunicar com Clareza e Impacto: Um vocabulário rico e a capacidade de articular ideias complexas (benefícios diretos da leitura) são inestimáveis para inspirar sua equipe, conquistar investidores e engajar clientes.',
      
      'Conclusão',
      'A jornada empreendedora é um eterno aprendizado. Se você quer não apenas participar, mas liderar essa jornada, então é hora de fazer da leitura uma parte inegociável da sua rotina. Cada página virada é um investimento no seu crescimento, na sua capacidade de inovar e, em última instância, no sucesso do seu empreendimento.',
      
      'Então, qual será o próximo livro que você vai devorar?'
    ],
    callToAction: {
      title: '📘 Quer começar sua jornada de leitura?',
      description: 'Baixe agora gratuitamente o eBook que vai te ajudar a desenvolver uma mentalidade empreendedora através da leitura:',
      link: '/ebooks/7-passos-para-uma-vida-bem-sucedida',
      linkText: '👉 "7 Passos para Ser Bem-Sucedido na Vida"'
    }
  },
  {
    slug: '5-crencas-que-impedem-voce-de-comecar',
    title: 'As 5 Crenças que Impedem Você de Começar o Seu Próprio Negócio Online',
    author: 'Being Mindful',
    quote: {
      text: 'As correntes da mente são invisíveis — mas mais fortes do que qualquer parede.',
      author: 'Being Mindful'
    },
    content: [
      'Sonhos e Crenças',
      'Você já pensou em começar algo seu na internet, viver de renda online, ter liberdade, fazer o que ama… mas travou antes mesmo de começar?\n\nSe sim, você não está sozinho.\nA maioria das pessoas que quer empreender não é impedida pela falta de dinheiro ou tempo — mas por algo mais profundo: as crenças limitantes.',
      
      'Neste artigo, vamos revelar as 5 crenças mais comuns que podem estar bloqueando você. E, claro, como começar a romper com cada uma delas.',
      
      'As 5 Crenças Limitantes',
      '❌ 1. "Eu não sou bom o suficiente."\nEssa é a mais comum e mais cruel.\n\nAcreditar que você precisa ser um "gênio" ou ter mil diplomas pra empreender só atrasa a ação.\nO mercado valoriza autenticidade e transformação real, não perfeição.',
      
      '🧠 Reflita: Você sabe algo que pode ajudar alguém? Então você já tem valor para o mercado.',
      
      '❌ 2. "Ainda não é o momento certo."\nA verdade? O momento perfeito não existe.\n\nSempre vai faltar tempo, dinheiro ou coragem.\nA diferença entre quem realiza e quem assiste… está em quem decide agir mesmo com medo.',
      
      '🎯 Frase-chave:\n"Não comece quando estiver pronto. Comece… e fique pronto no caminho."',
      
      '❌ 3. "Já tem muita gente fazendo isso."\nSim, já tem gente no mercado.\nMas ninguém tem a sua história, seu jeito, sua visão.\n\nVocê não precisa ser o único. Precisa ser verdadeiro.\nPessoas se conectam com pessoas — e seu diferencial é ser quem você é.',
      
      '💡 Dica:\nExistem milhares de pizzarias no mundo. Isso impediu alguém de abrir mais uma?',
      
      '❌ 4. "Eu não sei o suficiente sobre negócios."\nEmpreender é uma habilidade que se aprende na prática.\nVocê pode (e deve) estudar. Mas não precisa saber tudo pra começar.',
      
      'O erro é usar a falta de conhecimento como desculpa pra não agir.\nA melhor forma de aprender… é fazendo.',
      
      '📌 Comece pequeno. Erre rápido. Corrija com inteligência.',
      
      '❌ 5. "E se der errado?"\nMas… e se der certo?\nE se for melhor do que você imagina?\n\nO medo do fracasso é natural — mas ele só deve te proteger de riscos reais, não paralisar sua vida.',
      
      '🌱 Lembre-se:\nErrar faz parte. Quem nunca erra… nunca aprende.\nE quem nunca começa… já está parado.',
      
      'Conclusão',
      'Essas 5 crenças não são verdades — são vozes internas que você pode reprogramar.\nA cada passo que você dá, elas perdem força. E você ganha autonomia.',
      
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
    author: 'Being Mindful',
    quote: {
      text: 'Você não precisa ver a escada inteira. Apenas dê o primeiro passo.',
      author: 'Martin Luther King Jr.'
    },
    content: [
      'Transformação e Liberdade',
      'Muita gente sonha em mudar de vida. Ter liberdade, tempo, propósito e — claro — independência financeira. Mas poucos percebem que tudo isso começa com uma decisão invisível: adotar uma mentalidade empreendedora e tomar iniciativa.',
      
      'O Que é Visão Empreendedora?',
      '📌 Visão empreendedora não tem a ver apenas com abrir empresa ou ter um CNPJ. Tem a ver com modo de pensar.',
      
      'Enquanto muitos esperam pelas condições perfeitas, o empreendedor cria oportunidades.',
      
      'Enquanto alguns culpam o sistema, o empreendedor pergunta: "O que eu posso fazer com o que tenho agora?"',
      
      'Enquanto uns consomem sem pensar, o empreendedor vê valor onde os outros não veem.',
      
      'Visão empreendedora é ver além dos obstáculos. É enxergar o potencial de transformação — mesmo quando ninguém mais vê.',
      
      'A Importância da Iniciativa',
      '🚀 Iniciativa: a ponte entre desejo e resultado. Ideias não transformam vidas. Ações sim.',
      
      'Quantas pessoas você conhece que dizem: "Um dia eu ainda vou abrir algo meu…" "Eu tenho um projeto engavetado…" "Tô esperando a hora certa…"',
      
      'O problema é que a hora certa não existe.',
      
      '💡 Dica: Você não precisa estar 100% pronto para começar. Precisa estar 100% comprometido.',
      
      'A iniciativa é o que transforma intenção em progresso. É a coragem de dar o primeiro passo — mesmo sem ter todas as respostas.',
      
      'Como Começar',
      '✍️ Você pode começar hoje: Compartilhando algo que você sabe. Criando um conteúdo simples que ajude alguém. Fazendo um curso, um esboço de eBook, uma live. Ou até escrevendo o primeiro post — como este.',
      
      'Você não precisa começar grande. Precisa começar com visão e ação.',
      
      '💡 Lembre-se: "Empreendedorismo não é sobre abrir empresas. É sobre abrir caminhos." — Being Mindful',
      
      'Conclusão',
      'E abrir um caminho exige clareza, consistência e fé. Você não precisa enxergar o fim da estrada — só confiar no primeiro passo com intenção.'
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
    content: [
      'Medo e Possibilidade',
      'Muitos de nós carregam um medo profundo de falhar. Essa hesitação pode nos paralisar, impedindo que demos o primeiro passo em direção aos nossos sonhos, objetivos, ou até mesmo pequenas mudanças no dia a dia. Mas e se a verdadeira falha não fosse o tropeço no caminho, e sim a recusa em sequer tentar?',
      
      'Pense nisso: cada grande inovação, cada descoberta científica, cada obra de arte que nos inspira, nasceu de inúmeras tentativas – e sim, muitos erros. O inventor Thomas Edison, ao criar a lâmpada, disse: "Eu não falhei mil vezes. A lâmpada foi uma invenção com mil passos." Ele não via seus "fracassos" como o fim, mas como degraus essenciais na jornada rumo ao sucesso.',
      
      '📌 O Medo do Fracasso: Uma Ilusão Limitante\nA sociedade, muitas vezes, nos ensina a valorizar apenas o sucesso imediato e perfeito. Isso cria uma cultura onde o erro é visto como algo a ser evitado a todo custo. No entanto, o fracasso, quando abordado com a mentalidade certa, é um professor inestimável. Ele nos mostra o que não funciona, nos força a recalibrar a rota, a aprimorar nossas estratégias e a descobrir novas soluções. Sem o erro, o aprendizado seria superficial, e a inovação, rara.',
      
      '💭 A Verdadeira Falha: A Ausência de Ação\nA falha mais dolorosa não é aquela que acontece depois de você ter se dedicado de corpo e alma a algo. A verdadeira falha é a de não se permitir tentar. É a falha de viver com a dúvida do "e se?".',
      
      'E se eu tivesse aberto aquele negócio?\nE se eu tivesse me candidatado para aquela vaga?\nE se eu tivesse expressado meus sentimentos?\nE se eu tivesse começado a praticar aquele hobby?',
      
      'Esses "e se?" são os fantasmas do arrependimento, muito mais pesados do que a experiência de um erro cometido com coragem.',
      
      'O Poder do Risco',
      '🚀 Arriscar-se é Crescer\nQuando nos arriscamos, mesmo que o resultado não seja o esperado, nós ganhamos algo de valor incalculável: experiência. Ganhamos conhecimento sobre nós mesmos, sobre o processo, sobre o mundo ao nosso redor. Cada tentativa nos torna mais resilientes, mais adaptáveis e, paradoxalmente, mais preparados para o sucesso.',
      
      'No fim das contas, a vida é uma série de tentativas. É em cada passo incerto, em cada salto de fé, que a magia acontece. Não se prenda ao medo do que pode dar errado. Liberte-se para a possibilidade do que pode dar certo, e aprenda com o que não der.',
      
      'Conclusão',
      '💡 Lembre-se: só falha quem NÃO se arrisca a tentar. Então, arrisque-se. Tente. Sinta o processo. E descubra o quão longe você pode ir.'
    ],
    callToAction: {
      title: '📘 Quer ajuda para dar o primeiro passo?',
      description: 'Baixe agora gratuitamente o eBook que vai te ajudar a superar o medo e começar sua jornada:',
      link: '/ebooks/7-passos-para-uma-vida-bem-sucedida',
      linkText: '👉 "7 Passos para Ser Bem-Sucedido na Vida"'
    }
  }
]; 