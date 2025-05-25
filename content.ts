export const siteContent = {
  title: "Softwares Médico-Hospitalares no Brasil",
  subtitle: "Análise comparativa das principais soluções disponíveis no mercado brasileiro",
  
  intro: {
    title: "Introdução",
    content: `Este estudo analisa os principais softwares de gestão médico-hospitalar disponíveis no mercado brasileiro, 
    com base em suas aplicações, desempenho e modelos de custo. É importante ressaltar que o acesso a informações 
    detalhadas e atualizadas, especialmente sobre preços, foi limitado durante a pesquisa. Portanto, muitos dados 
    de custo são baseados em fontes secundárias, valores históricos ou inferências, sendo fundamental a consulta 
    direta aos fornecedores para obter propostas precisas.`
  },
  
  segmentacao: {
    title: "Segmentação e Foco de Mercado",
    content: `Os softwares analisados atendem a diferentes segmentos dentro do setor de saúde brasileiro, 
    desde clínicas e consultórios até grandes complexos hospitalares.`,
    segments: [
      {
        title: "Clínicas e Consultórios",
        content: `Soluções como iClinic, HiDoctor, Real Clinic e Archivex Clinical são direcionadas a clínicas e consultórios, 
        focando na gestão do dia a dia, agendamento, prontuário eletrônico e, em alguns casos, marketing e finanças.`,
        highlights: [
          {
            name: "iClinic",
            description: "Destaca-se pela facilidade de uso e funcionalidades como teleconsulta e marketing médico integrado."
          },
          {
            name: "HiDoctor",
            description: "Enfatiza sua tecnologia multiplataforma com acesso online e offline, visando segurança e continuidade."
          },
          {
            name: "Real Clinic",
            description: "Posiciona-se como ferramenta para simplificar a gestão clínica."
          },
          {
            name: "Archivex Clinical",
            description: "Com forte presença em mercados de língua espanhola, também atua no Brasil como solução para gestão clínica."
          }
        ]
      },
      {
        title: "Hospitais e Grandes Instituições",
        content: `Sistemas como Philips Tasy EMR, SOUL MV Hospitalar, TOTVS Saúde e SisHOSP Core são voltados para o ambiente hospitalar, 
        oferecendo soluções ERP (Enterprise Resource Planning) mais robustas e abrangentes.`,
        highlights: [
          {
            name: "Philips Tasy EMR",
            description: "Líder de mercado no Brasil, com ampla base instalada e certificações importantes (HIMSS, SBIS, ANVISA SAMD Classe II)."
          },
          {
            name: "SOUL MV Hospitalar",
            description: "Frequentemente citado como líder no mercado brasileiro, com ampla base instalada e certificações importantes."
          },
          {
            name: "TOTVS Saúde",
            description: "Grande player de ERP no Brasil, oferece um portfólio extenso para saúde, cobrindo hospitais, clínicas e operadoras de planos."
          },
          {
            name: "SisHOSP Core",
            description: "Direcionado a hospitais, incluindo aqueles que atendem ao SUS."
          }
        ]
      },
      {
        title: "Soluções Especializadas",
        content: `Algumas soluções possuem foco em áreas específicas do setor de saúde.`,
        highlights: [
          {
            name: "Pixeon",
            description: "Portfólio diversificado, atendendo clínicas, hospitais e, com destaque particular, centros de diagnóstico por imagem com sua solução PACS premiada."
          },
          {
            name: "MEDICALSOFT",
            description: "Foco em diagnóstico por imagem (integração PACS/RIS) e na conexão médico-paciente via aplicativo."
          },
          {
            name: "Qwaiting",
            description: "Solução específica para gerenciamento de filas (físicas e virtuais) e agendamento, aplicável a diversos setores, incluindo saúde."
          }
        ]
      }
    ]
  },
  
  funcionalidades: {
    title: "Funcionalidades e Diferenciais",
    content: `Os softwares médico-hospitalares oferecem diversas funcionalidades, com diferentes níveis de especialização e abrangência.`,
    features: [
      {
        title: "Prontuário Eletrônico do Paciente (PEP)",
        content: `Funcionalidade central na maioria das soluções, variando em nível de personalização e recursos.`,
        examples: [
          "iClinic e HiDoctor oferecem PEPs acessíveis remotamente, com o HiDoctor permitindo acesso offline.",
          "SOUL MV e Tasy EMR possuem PEPs robustos, integrados a complexos fluxos hospitalares e com reconhecimento de mercado.",
          "Pixeon e SisHOSP também incluem PEP em suas ofertas."
        ]
      },
      {
        title: "Gestão de Agendamento",
        content: `Função comum em diversos softwares, com diferentes abordagens.`,
        examples: [
          "iClinic e Qwaiting oferecem agendamento online e ferramentas de comunicação com o paciente.",
          "Teleconsulta é um recurso presente no iClinic e no Tasy EMR."
        ]
      },
      {
        title: "Integração de Processos",
        content: `Crucial para hospitais e grandes instituições.`,
        examples: [
          "Tasy EMR, SOUL MV, TOTVS Saúde e SisHOSP Core são projetados como ERPs que unificam dados assistenciais, administrativos e financeiros.",
          "Tasy e SOUL MV destacam-se por certificações que atestam a maturidade de seus sistemas e processos (HIMSS, CMMI, SBIS)."
        ]
      },
      {
        title: "Recursos Avançados",
        content: `Diferenciais específicos de algumas soluções.`,
        examples: [
          "Recursos de IA começam a surgir, como o Tasy EMR AI Virtual Assistant da Philips, focado em automatizar a entrada e extração de dados.",
          "O gerenciamento de filas é o diferencial do Qwaiting, buscando otimizar o fluxo e a experiência do paciente na espera.",
          "O acesso offline é um diferencial importante do HiDoctor, garantindo acesso aos dados mesmo sem conexão à internet."
        ]
      }
    ]
  },
  
  desempenho: {
    title: "Desempenho e Reconhecimento",
    content: `Diversos softwares se destacam por seu reconhecimento no mercado brasileiro e internacional.`,
    highlights: [
      {
        name: "Philips Tasy EMR",
        recognition: "Forte reconhecimento no mercado brasileiro e latino-americano, evidenciado por prêmios (Best in KLAS) e certificações de alto nível (HIMSS níveis 6 e 7, SBIS)."
      },
      {
        name: "SOUL MV",
        recognition: "Forte reconhecimento no mercado brasileiro, com prêmios para seu PEP MV e certificações importantes."
      },
      {
        name: "Pixeon",
        recognition: "Reconhecimento internacional, especialmente por sua solução PACS (Best in KLAS)."
      },
      {
        name: "TOTVS",
        recognition: "Pela sua dimensão e tempo de mercado no Brasil, possui uma base instalada considerável."
      },
      {
        name: "iClinic e HiDoctor",
        recognition: "Frequentemente mencionados em listas de melhores softwares para clínicas, com foco em usabilidade e funcionalidades específicas para esse segmento."
      }
    ]
  },
  
  custos: {
    title: "Custos e Modelos de Serviço",
    content: `A obtenção de informações de preços foi o maior desafio desta pesquisa.`,
    models: [
      {
        title: "Softwares para Clínicas",
        content: `iClinic e HiDoctor parecem ter modelos de assinatura mensal, com preços variando por plano e número de usuários. 
        Valores históricos ou promocionais foram encontrados (ex: iClinic a partir de R$ 89/mês/usuário em 2021; HiDoctor com promoção a R$ 85/mês), 
        mas precisam de confirmação atual. Real Clinic e Archivex Clinical não tiveram informações de preço localizadas.`
      },
      {
        title: "Gerenciamento de Filas",
        content: `Qwaiting possui planos por localização, com valores em USD variando de ~$99 a ~$649+ por mês, 
        dependendo do plano (Basic, Premium, Enterprise, Custom). É necessária cotação em BRL.`
      },
      {
        title: "ERPs Hospitalares",
        content: `Para soluções como Tasy, SOUL MV, TOTVS, SisHOSP e Pixeon, a precificação é quase invariavelmente sob consulta. 
        O custo depende do porte da instituição, módulos contratados, modelo de implantação e serviços associados. 
        Não foram encontrados valores públicos padronizados. A recomendação unânime é o contato direto com os fornecedores 
        para obter propostas personalizadas.`
      }
    ]
  },
  
  conclusao: {
    title: "Conclusão e Recomendações",
    content: `A escolha do software ideal depende fundamentalmente do perfil da instituição (clínica, hospital, centro de diagnóstico), 
    do porte, das especialidades, das funcionalidades prioritárias e do orçamento disponível.`,
    recommendations: [
      {
        title: "Para Clínicas e Consultórios",
        content: `iClinic (foco em usabilidade e marketing) e HiDoctor (foco em acesso offline e multiplataforma) são opções populares 
        com informações de preço mais acessíveis (embora necessitem confirmação). Real Clinic e Archivex Clinical requerem contato direto para avaliação.`
      },
      {
        title: "Para Hospitais e Grandes Instituições",
        content: `Tasy EMR, SOUL MV e TOTVS Saúde são as soluções ERP mais robustas e estabelecidas, mas exigem um investimento significativamente maior 
        e um processo de seleção e implantação mais complexo, com custos definidos sob medida. SisHOSP Core e Pixeon (para gestão geral) 
        também se encaixam neste segmento, requerendo contato para cotação.`
      },
      {
        title: "Para Necessidades Específicas",
        content: `Pixeon é forte em diagnóstico por imagem (PACS). Qwaiting é especializado em gestão de filas. 
        MEDICALSOFT pode ter foco em imagem e comunicação com paciente.`
      }
    ],
    final_note: `A falta de transparência nos preços de muitos fornecedores, especialmente os de soluções hospitalares, 
    torna a comparação de custos difícil sem um processo formal de solicitação de propostas. Recomenda-se fortemente o contato direto 
    com os fornecedores para obter demonstrações, propostas detalhadas e verificar a adequação das soluções às necessidades específicas 
    antes de tomar uma decisão.`
  },
  
  limitacoes: {
    title: "Limitações da Pesquisa",
    content: `Instabilidades técnicas recorrentes impediram o acesso a diversas páginas web de fornecedores e portais de comparação durante a coleta de dados. 
    Isso limitou a profundidade da análise de algumas funcionalidades e, principalmente, a obtenção de dados de custos atualizados e precisos. 
    As informações apresentadas refletem o que foi possível coletar e analisar dentro dessas limitações, utilizando fontes secundárias e snippets de busca 
    quando as fontes primárias estavam inacessíveis. A validação direta com os fornecedores é crucial.`
  }
};

export const softwareList = [
  { name: "iClinic", type: "Clínicas e Consultórios", highlight: "Facilidade de uso e marketing médico" },
  { name: "HiDoctor", type: "Clínicas e Consultórios", highlight: "Acesso offline e multiplataforma" },
  { name: "Real Clinic", type: "Clínicas e Consultórios", highlight: "Gestão clínica simplificada" },
  { name: "Archivex Clinical", type: "Clínicas e Consultórios", highlight: "Presença em mercados hispânicos" },
  { name: "Philips Tasy EMR", type: "Hospitais", highlight: "Líder de mercado, certificações HIMSS" },
  { name: "SOUL MV Hospitalar", type: "Hospitais", highlight: "Ampla base instalada no Brasil" },
  { name: "TOTVS Saúde", type: "Hospitais", highlight: "Portfólio extenso para saúde" },
  { name: "SisHOSP Core", type: "Hospitais", highlight: "Suporte a hospitais SUS" },
  { name: "Pixeon", type: "Especializado", highlight: "Diagnóstico por imagem (PACS)" },
  { name: "MEDICALSOFT", type: "Especializado", highlight: "Imagem e conexão médico-paciente" },
  { name: "Qwaiting", type: "Especializado", highlight: "Gerenciamento de filas" }
];
