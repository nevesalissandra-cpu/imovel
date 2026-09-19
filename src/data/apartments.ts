import { Typology, Amenity, LocationHighlight, FAQItem, GalleryPhoto } from '../types';

export const FORM_INTEREST_URL = "https://forms.gle/Lr9b1WYXNyFsFuzM8";

export const PROJECT_INFO = {
  name: "Residencial Lumière",
  slogan: "A sofisticação do alto padrão com o privilégio da melhor localização",
  city: "São Paulo, SP",
  neighborhood: "Jardins / Pinheiros",
  status: "Lançamento Exclusivo",
  deliveryForecast: "Dezembro de 2027",
  unitsTotal: 84,
  towers: 1,
  totalArea: "Plantas de 68m² a 185m²",
  bedrooms: "2 a 4 Quartos (Suítes)",
  startingPrice: "R$ 449.000",
  whatsappNumber: "+55 11 98765-4321",
};

export const TYPOLOGIES: Typology[] = [
  {
    id: "planta-2q",
    name: "Apartamento Essence - 68m²",
    badge: "Mais Procurado",
    tagline: "Ideal para jovens casais, solteiros ou investimento com alto retorno",
    bedrooms: 2,
    suites: 1,
    bathrooms: 2,
    areaM2: 68,
    parkingSpots: 1,
    priceFrom: "R$ 449.000",
    monthlyEstimate: "R$ 2.390",
    description: "Living integrado com varanda gourmet, suíte confortável e cozinha americana com acabamentos nobres.",
    features: [
      "Varanda gourmet com churrasqueira a carvão",
      "Suíte master com closet integrado",
      "Infraestrutura pronta para ar-condicionado multi-split",
      "Fechadura eletrônica na porta de entrada",
      "Piso porcelanato retificado 90x90cm já entregue",
      "Persianas de enrolar integradas nos quartos"
    ],
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    floorPlanUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "planta-3q",
    name: "Apartamento Elegance - 98m²",
    badge: "Espaço & Conforto",
    tagline: "Planejado para famílias que valorizam amplitude, iluminação e sofisticação",
    bedrooms: 3,
    suites: 2,
    bathrooms: 3,
    areaM2: 98,
    parkingSpots: 2,
    priceFrom: "R$ 685.000",
    monthlyEstimate: "R$ 3.650",
    description: "Amplo living com 2 ambientes integrados ao terraço gourmet panorâmico, lavabo social e depósito privativo no subsolo.",
    features: [
      "Amplo terraço gourmet com vista livre panorâmica",
      "2 suítes privativas com ventilação natural",
      "Depósito privativo privativo no subsolo",
      "Lavabo social independente",
      "Tomadas USB nos quartos e sala",
      "2 vagas determinadas e cobertas"
    ],
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    floorPlanUrl: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "planta-penthouse",
    name: "Penthouse Rooftop - 185m²",
    badge: "Edição Limitada",
    tagline: "A máxima expressão do luxo com spa privativo e vista 360°",
    bedrooms: 4,
    suites: 3,
    bathrooms: 5,
    areaM2: 185,
    parkingSpots: 3,
    priceFrom: "R$ 1.280.000",
    monthlyEstimate: "R$ 6.800",
    description: "Cobertura duplex com deck de madeira, jacuzzi privativa aquecida, pé-direito duplo e elevador privativo com código.",
    features: [
      "Rooftop privativo com jacuzzi aquecida e solarium",
      "Pé-direito duplo no living de 5,40m",
      "Suíte master com banheira de imersão e closet duplo",
      "3 vagas de garagem com ponto para recarga elétrica",
      "Hall privativo com biometria no elevador",
      "Adega climatizada e copa íntima no pavimento superior"
    ],
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    floorPlanUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: "piscina-rooftop",
    title: "Piscina com Borda Infinita",
    category: "Lazer",
    description: "Piscina aquecida no rooftop com raia de 25m, deck molhado e vista espetacular para o horizonte da cidade.",
    icon: "Waves",
    imageUrl: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fitness-center",
    title: "Academia Completa Life Fitness",
    category: "Bem-Estar",
    description: "Espaço fitness climatizado com aparelhos profissionais, área de musculação, esteiras de alta performance e espaço para yoga.",
    icon: "Dumbbell",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "espaco-gourmet",
    title: "Espaço Gourmet & Wine Bar",
    category: "Lazer",
    description: "Ambiente sofisticado com churrasqueira gourmet, fornos de pizza, adega climatizada e capacidade para celebrar com conforto.",
    icon: "UtensilsCrossed",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "coworking-lounge",
    title: "Coworking & Sala de Reunião",
    category: "Praticidade",
    description: "Estações de trabalho silenciosas com internet de altíssima velocidade, cabines para calls e sala de reuniões privativa.",
    icon: "Briefcase",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "spa-sauna",
    title: "Spa & Sala de Massagem",
    category: "Bem-Estar",
    description: "Área de relaxamento completa com sauna seca e a vapor, sala de massagem privativa e hidroterapia.",
    icon: "Sparkles",
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "seguranca-24h",
    title: "Portaria Blindada & Biometria",
    category: "Segurança",
    description: "Controle de acesso por reconhecimento facial, clausura para pedestres e veículos, e monitoramento 24 horas por inteligência artificial.",
    icon: "ShieldCheck",
    imageUrl: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80"
  }
];

export const LOCATION_HIGHLIGHTS: LocationHighlight[] = [
  {
    id: "loc-1",
    place: "Parque & Área Verde Preservada",
    category: "Lazer",
    time: "3 min",
    mode: "A pé",
    icon: "Trees"
  },
  {
    id: "loc-2",
    place: "Estação de Metrô Linha Nobre",
    category: "Mobilidade",
    time: "4 min",
    mode: "A pé",
    icon: "TrainTrack"
  },
  {
    id: "loc-3",
    place: "Colégios Internacionais & Bilíngues",
    category: "Educação",
    time: "5 min",
    mode: "De carro",
    icon: "GraduationCap"
  },
  {
    id: "loc-4",
    place: "Polo Gastronômico & Cafés de Especialidade",
    category: "Gastronomia",
    time: "2 min",
    mode: "A pé",
    icon: "Coffee"
  },
  {
    id: "loc-5",
    place: "Shopping Center de Luxo",
    category: "Lazer",
    time: "6 min",
    mode: "De carro",
    icon: "ShoppingBag"
  },
  {
    id: "loc-6",
    place: "Hospital de Referência Nacional",
    category: "Saúde",
    time: "7 min",
    mode: "De carro",
    icon: "HeartPulse"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como funciona a entrada parcelada durante o período de obras?",
    answer: "A entrada é facilitada diretamente com a incorporadora em até 36 meses durante o período da construção, sem juros bancários (apenas correção monetária pelo INCC). Ao final da obra, o saldo restante pode ser quitado à vista ou financiado pelo banco de sua preferência."
  },
  {
    id: "faq-2",
    question: "Posso utilizar meu FGTS na aquisição do apartamento?",
    answer: "Sim! O saldo do seu FGTS pode ser utilizado como parte da entrada ou na amortização do saldo devedor no momento do financiamento habitacional bancário, respeitando as regras vigentes do Sistema Financeiro de Habitação (SFH)."
  },
  {
    id: "faq-3",
    question: "O que está incluso na personalização da planta?",
    answer: "Durante a fase estrutural, a construtora oferece kits oficiais de personalização com garantia de fábrica, permitindo integração de ambientes (ex.: ampliar sala eliminando 1 dormitório), escolha de acabamentos e pontos extras de climatização."
  },
  {
    id: "faq-4",
    question: "Qual é o valor estimado de condomínio e IPTU?",
    answer: "Graças ao projeto de eficiência energética (painéis solares para áreas comuns, iluminação 100% LED e reaproveitamento de água de chuva), a previsão de taxa condominial é otimizada, estimada entre R$ 7 a R$ 9 por m² privativo."
  },
  {
    id: "faq-5",
    question: "Como garanto as condições exclusivas de pré-lançamento?",
    answer: "Basta clicar no botão 'Tenho Interesse' e preencher o breve formulário de cadastro. Você receberá atendimento prioritário de um consultor credenciado, acesso em primeira mão à tabela zero de valores e preferência na escolha das unidades e andares."
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g-1",
    title: "Fachada Contemporânea",
    category: "Perspectivas",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    caption: "Arquitetura arrojada assinada por renomado escritório com brises metálicos e jardins verticais."
  },
  {
    id: "g-2",
    title: "Living com Varanda Integrada",
    category: "Interiores",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    caption: "Conceito aberto com integração total entre living, cozinha e varanda gourmet."
  },
  {
    id: "g-3",
    title: "Suíte Master com Vista Livre",
    category: "Interiores",
    imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    caption: "Conforto acústico com esquadrias especiais e espaço planejado para closet generoso."
  },
  {
    id: "g-4",
    title: "Rooftop & Lounge Panorâmico",
    category: "Áreas Comuns",
    imageUrl: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1200&q=80",
    caption: "Pôr do sol cinematográfico com piscina aquecida no ponto mais alto do edifício."
  },
  {
    id: "g-5",
    title: "Cozinha Gourmet & Acabamentos",
    category: "Interiores",
    imageUrl: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    caption: "Bancadas em quartzo nobre, metais com design italiano e ventilação natural."
  },
  {
    id: "g-6",
    title: "Lobby Monumental com Pé-Direito Triplo",
    category: "Áreas Comuns",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    caption: "Recepção imponente com curadoria de arte, mobiliário de designers brasileiros e controle biométrico."
  }
];
