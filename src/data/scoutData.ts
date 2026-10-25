export const REAL_PHOTOS = {
  courtClock: '/assets/aistudio/court_clock_centered.jpg',
  courtClockOriginal: '/assets/aistudio/WhatsApp_Image_2026-10-19_at_21.47.24_df4fc8cd.jpeg',
  courtArches: '/assets/aistudio/WhatsApp_Image_2026-10-19_at_21.47.26_65e0ed42.jpeg',
  massCeremony: '/assets/aistudio/WhatsApp_Image_2026-10-19_at_21.47.24__1__3054060b.jpeg',
  grandRassemblement: '/assets/aistudio/WhatsApp_Image_2026-10-19_at_21.47.25_4b96459f.jpeg',
};

export const OFFICIAL_INSCRIPTION_FORM_URL = 'https://forms.gle/5NjXBdcUqLJBh7k9A';

export const GROUP_CONTACT = {
  email: 'scout.sacrecoeur.7@gmail.com',
  cgName: 'Mira Harik',
  cgRole: 'Cheftaine du Groupe (CG)',
  cgPhone: '+961 76 016 380',
  cgPhoneClean: '+96176016380',
  reunionsSchedule: 'Chaque samedi de 14h00 à 16h30',
  location: 'Collège du Sacré-Cœur, Rue Pasteur / Gemmayzé, Beyrouth, Liban',
};

export interface ScoutBranch {
  id: string;
  badgeNumber: string;
  name: string;
  tagline: string;
  ageRange: string;
  color: {
    primary: string;
    badge: string;
    bg: string;
    border: string;
    accent: string;
    button: string;
  };
  motto: string;
  video: {
    title: string;
    description: string;
    src?: string;
    youtubeId: string;
    youtubeUrl: string;
    poster: string;
    duration: string;
    isPending?: boolean;
  };
  introduction: {
    lead: string;
    paragraphs: string[];
    pillars: {
      title: string;
      description: string;
    }[];
  };
  quote: {
    text: string;
    author: string;
  };
}

export const SCOUT_BRANCHES: ScoutBranch[] = [
  {
    id: 'meute',
    badgeNumber: '01',
    name: 'La Meute',
    tagline: 'Louveteaux & Louvettes',
    ageRange: '8 – 12 ans',
    color: {
      primary: 'text-yellow-800',
      badge: 'bg-yellow-200 text-yellow-950 border-yellow-500',
      bg: 'bg-[#FFFDF0]',
      border: 'border-yellow-400',
      accent: 'from-yellow-500 to-amber-600',
      button: 'bg-yellow-500 hover:bg-yellow-400 text-stone-950',
    },
    motto: 'De notre mieux !',
    video: {
      title: 'La Vie à la Meute : Jeux & Rassemblement au Sacré-Cœur',
      description: 'Immersion réelle dans les jeux de sizaine, chants et rassemblement des louveteaux et louvettes dans la cour du Collège du Sacré-Cœur.',
      src: '',
      youtubeId: 'Z4vOmQXxFjk',
      youtubeUrl: 'https://youtu.be/Z4vOmQXxFjk',
      poster: '/assets/aistudio/thumb_meute_yt.jpg',
      duration: '01:03',
      isPending: false,
    },
    introduction: {
      lead: 'Inspirée de l’univers chaleureux du Livre de la Jungle de Rudyard Kipling, la Meute est la première étape du parcours scout au Sacré-Cœur Gemmayzé.',
      paragraphs: [
        'Sous la bienveillance d’Akela, de Baloo et de Bagheera, les enfants âgés de 8 à 12 ans apprennent à vivre en communauté et à respecter la nature. Organisés en sizaines, ils découvrent la force de la solidarité et le respect des règles du jeu.',
        'Chaque samedi après-midi de 14h00 à 16h30 au Collège du Sacré-Cœur, et lors des week-ends sous tente dans les pinèdes libanaises, les louveteaux développent leur autonomie, expriment leur créativité manuelle et chantent autour du feu.'
      ],
      pillars: [
        {
          title: 'La Vie en Sizaine',
          description: 'Responsabilité précoce, écoute mutuelle et camaraderie sans écran.'
        },
        {
          title: 'L’Appel des Bois',
          description: 'Sorties en plein air, pistes d’orientation et respect du patrimoine naturel libanais.'
        },
        {
          title: 'La Promesse Scoute',
          description: 'Un premier engagement moral solennel pour faire toujours de son mieux.'
        }
      ]
    },
    quote: {
      text: 'Le loup écoute le vieux loup ; le louveteau ne s’écoute pas lui-même.',
      author: 'Loi de la Meute • Robert Baden-Powell'
    }
  },
  {
    id: 'troupe',
    badgeNumber: '02',
    name: 'La Troupe',
    tagline: 'Éclaireurs et Éclaireuses',
    ageRange: '13 – 17 ans',
    color: {
      primary: 'text-green-800',
      badge: 'bg-green-100 text-green-900 border-green-500',
      bg: 'bg-[#FFFDF0]',
      border: 'border-green-500',
      accent: 'from-green-700 to-green-900',
      button: 'bg-green-700 hover:bg-green-600 text-white',
    },
    motto: 'Toujours Prêt !',
    video: {
      title: 'La Troupe en Action : Froissartage, Raids & Fraternité',
      description: 'Découvrez la vidéo officielle de la Troupe : camp d’été, constructions monumentales en bois, esprit de patrouille et aventures en pleine nature.',
      src: '',
      youtubeId: 'VMf9NPFiTAw',
      youtubeUrl: 'https://youtu.be/VMf9NPFiTAw',
      poster: '/assets/aistudio/thumb_troupe.jpg',
      duration: 'Vidéo Troupe',
      isPending: false,
    },
    introduction: {
      lead: 'La Troupe (13 à 17 ans) incarne l’essence mythique du scoutisme : l’expédition en territoire sauvage, l’ingénierie du campisme et le sens aigu de l’honneur.',
      paragraphs: [
        'Répartis en patrouilles de 6 à 8 éclaireurs menées par un Chef de Patrouille (CP), les jeunes bâtissent eux-mêmes leurs tables, leurs ponts de singe et leurs tours de guet sans un seul clou, grâce au génie du froissartage et des nœuds marins.'
      ],
      pillars: [
        {
          title: 'Système des Patrouilles',
          description: 'Véritable école de leadership où chaque éclaireur a un poste clé : topographe, intendant, secouriste, cuisinier.'
        },
        {
          title: 'Froissartage & Bivouac',
          description: 'Maîtrise du bois, des cordages et autonomie totale loin du confort urbain.'
        },
        {
          title: 'La Veillée Scoute',
          description: 'Moments sacrés au coin du grand feu, fables, chants traditionnels et recueillement.'
        }
      ]
    },
    quote: {
      text: 'Le scout est fait pour servir et sauver son prochain. Il est l’ami de tous et le frère de tout autre scout.',
      author: 'Loi Éclaireur • Les Scouts Du Liban'
    }
  },
  {
    id: 'clan',
    badgeNumber: '03',
    name: 'Le Clan',
    tagline: 'Routiers & Pionnières - Servir le Groupe, l’Église et le Liban',
    ageRange: '17+ ans',
    color: {
      primary: 'text-red-700',
      badge: 'bg-red-100 text-red-900 border-red-400',
      bg: 'bg-[#FFFDF0]',
      border: 'border-red-400',
      accent: 'from-red-700 to-red-900',
      button: 'bg-red-700 hover:bg-red-600 text-white',
    },
    motto: 'Servir !',
    video: {
      title: 'L’Aventure du Clan : Raids, Treks & Grands Espaces',
      description: 'Moments authentiques de marche en montagne, sac au dos, bivouac et solidarité des routiers et pionnières du Sacré-Cœur.',
      src: '',
      youtubeId: 'xnxjtO7lMwo',
      youtubeUrl: 'https://youtu.be/xnxjtO7lMwo',
      poster: '/assets/aistudio/thumb_clan_yt.jpg',
      duration: '01:00',
      isPending: false,
    },
    introduction: {
      lead: 'Au Clan (dès 17 ans), le scoutisme devient un art de vivre et un engagement citoyen direct pour relever notre pays et former des hommes et femmes d’action.',
      paragraphs: [
        'Ancré historiquement à Gemmayzé, le Clan du Sacré-Cœur s’est illustré lors des moments cruciaux de l’histoire de Beyrouth par des actions humanitaires sur le terrain : nettoyage des décombres, distribution de colis alimentaires et soutien aux familles.',
        'La Route, c’est aussi la marche solitaire et fraternelle qui forge le caractère, la réflexion spirituelle et la préparation à devenir chefs d’unité pour transmettre la flamme aux générations futures.'
      ],
      pillars: [
        {
          title: 'Action Communautaire',
          description: 'Présence constante auprès des habitants de Gemmayzé et interventions d’urgence caritatives.'
        },
        {
          title: 'Le Départ Routier et Pionnière',
          description: 'L’aboutissement solennel du jeune adulte prêt à apporter sa pierre à l’édifice de la société.'
        },
        {
          title: 'Transmission & Maîtrise',
          description: 'Formation pédagogique rigoureuse pour encadrer avec sécurité et enthousiasme les plus jeunes.'
        }
      ]
    },
    quote: {
      text: 'Le vrai bonheur ne consiste pas à être servi, mais à servir.',
      author: 'Seigneur Baden-Powell • Fondateur du Scoutisme'
    }
  }
];
