// Contenu extrait de tes pages HTML. Modifie les textes ici, les pages se mettent à jour.
export type Dest = { name: string; place: string; text: string; days: string };
export type Animal = { img: string; alt: string; name: string; text: string };
export type Feature = { title: string; text: string };
export type Step = { n: string; title: string; text: string };
export type Tile = { img: string; alt: string; title: string; text: string };
export type Img = { src: string; alt: string };
export type Cta = { title: string; text: string; label: string; href: string };

export const destinations: Dest[] = [
  {
    name: "Tanzanie",
    place: "Serengeti, Ngorongoro",
    text: "La grande migration et ses millions de gnous, traversées de rivières comprises.",
    days: "9 jours",
  },
  {
    name: "Kenya",
    place: "Masai Mara, Amboseli",
    text: "Lions, guépards et éléphants face au Kilimandjaro, au lever du soleil.",
    days: "8 jours",
  },
  {
    name: "Botswana",
    place: "Delta de l’Okavango",
    text: "Safari en pirogue, îles secrètes et camps sur pilotis, loin de tout.",
    days: "10 jours",
  },
  {
    name: "Zambie",
    place: "Chutes Victoria",
    text: "Le rugissement de la plus grande cascade du continent, à portée de main.",
    days: "7 jours",
  },
  {
    name: "Namibie",
    place: "Etosha, Sossusvlei",
    text: "Dunes rouges, déserts infinis et rhinocéros noirs autour des points d’eau.",
    days: "11 jours",
  },
];

export const animals: Animal[] = [
  {
    img: "https://images.unsplash.com/photo-1650361413027-d3670b76f843?auto=format&fit=crop&w=900&q=85",
    alt: "Éléphant africain dans la savane",
    name: "Éléphant",
    text: "Amboseli et Chobe. Les troupeaux se rassemblent aux points d’eau de juin à octobre.",
  },
  {
    img: "https://images.unsplash.com/photo-1790796699607-0cf896535be4?auto=format&fit=crop&w=900&q=85",
    alt: "Lion dans son habitat naturel",
    name: "Lion",
    text: "Masai Mara et Serengeti. Meilleures chances à l’aube, quand la fraîcheur le fait bouger.",
  },
  {
    img: "https://images.unsplash.com/photo-1612358405970-e1aeba9d76c2?auto=format&fit=crop&w=900&q=85",
    alt: "Girafe dans la savane africaine",
    name: "Girafe",
    text: "Savanes d’acacias d’Afrique de l’Est. Visibles toute l’année, plus actives le matin.",
  },
  {
    img: "https://images.unsplash.com/photo-1718675519659-e90c176daafd?auto=format&fit=crop&w=900&q=85",
    alt: "Zèbres dans la savane",
    name: "Zèbre",
    text: "Présents lors de la grande migration, de juillet à septembre dans le Mara.",
  },
  {
    img: "https://images.unsplash.com/photo-1726075016723-6ea81c84925c?auto=format&fit=crop&w=900&q=85",
    alt: "Rhinocéros dans la nature",
    name: "Rhinocéros",
    text: "Etosha et Ol Pejeta. Observation encadrée, dans le respect des réserves protégées.",
  },
];

export const stats = [
  { n: 15, suffix: "", label: "années d’expérience" },
  { n: 40, suffix: "", label: "camps sélectionnés" },
  { n: 6, suffix: "", label: "personnes max. par véhicule" },
  { n: 98, suffix: "%", label: "de voyageurs qui reviennent" },
];

export const pages = {
  home: {
    title: "Là Où L’Afrique S’écrit En Or",
    hero: {
      l1: "Là Où l’Afrique",
      l2: "S’écrit En Or",
      p: "Safaris sur mesure, du Serengeti aux chutes Victoria. Des guides locaux, des camps intimes, et des rencontres que vous n’oublierez pas.",
    },
    dest: {
      h2: "Cinq terres, cinq émotions",
      lead: "Chaque itinéraire est construit à la main selon votre rythme, la saison et les migrations en cours.",
    },
    faune: {
      h2: "Les rencontres qui comptent",
      lead: "Touchez une carte pour découvrir où et quand les observer.",
    },
    split: {
      eyebrow: "L’art du safari sur mesure",
      h2: "Partir loin. Se sentir exactement à sa place.",
      lead: "Imaginez un réveil dans la lumière douce du bush, un café face à la savane, puis une journée guidée par les traces et les sons. Le soir, le feu crépite et le ciel s’ouvre. C’est cette qualité de présence que nous cherchons à faire naître dans chaque voyage.",
      imgs: [
        {
          src: "https://images.unsplash.com/photo-1706611217168-51be73c4d301?auto=format&fit=crop&w=1000&q=85",
          alt: "Faune africaine dans la savane",
        },
        {
          src: "https://images.unsplash.com/photo-1792824381586-a32f798f800f?auto=format&fit=crop&w=700&q=85",
          alt: "Lumière dans la nature",
        },
        {
          src: "https://images.unsplash.com/photo-1688988816492-f71727a11149?auto=format&fit=crop&w=700&q=85",
          alt: "Paysage de rivière sauvage",
        },
      ],
    },
    quote: {
      text: "« L’Afrique ne se visite pas seulement. Elle se ressent, au rythme de ses paysages. »",
      cite: "Savana D’Or · Safaris sur mesure",
    },
    exp: {
      eyebrow: "L’expérience Savana D’Or",
      h2: "Des voyages faits de contrastes et de belles respirations.",
      features: [
        {
          title: "La rencontre",
          text: "Observer la vie sauvage avec attention, accompagné par des guides qui connaissent leur territoire.",
        },
        {
          title: "Le lieu",
          text: "Choisir des camps intimistes, des panoramas forts et des étapes qui ont du sens.",
        },
        {
          title: "Le rythme",
          text: "Prendre le temps, éviter les journées trop chargées et laisser une place à l’inattendu.",
        },
      ],
      cta: {
        title: "Et si l’on dessinait le vôtre ?",
        text: "Une destination en tête ou simplement une envie d’Afrique ? Nous pouvons partir de là.",
        label: "Composer mon safari",
        href: "/mon-safari",
      },
    },
  },
  destinations: {
    title: "Cinq Terres, Cinq Émotions",
    hero: {
      l1: "Cinq Terres,",
      l2: "Cinq Émotions",
      p: "Chaque itinéraire est construit à la main selon votre rythme, la saison et les migrations en cours.",
    },
    dest: {
      h2: "Cinq terres, cinq émotions",
      lead: "Chaque itinéraire est construit à la main selon votre rythme, la saison et les migrations en cours.",
    },
    split: {
      eyebrow: "L’Afrique, à votre rythme",
      h2: "Un même continent. Mille façons de le vivre.",
      lead: "Du silence doré du désert aux plaines vibrantes de la savane, chaque région possède sa lumière, ses saisons et ses rencontres. Nous choisissons les étapes pour raconter une histoire cohérente, sans courir d’un lieu à l’autre.",
      features: [
        {
          title: "La bonne saison",
          text: "Le parcours suit les conditions naturelles et les mouvements de la faune.",
        },
        {
          title: "Le bon tempo",
          text: "Des étapes équilibrées, avec du temps pour observer et simplement être là.",
        },
      ],
      imgs: [
        {
          src: "https://images.unsplash.com/photo-1761073830864-9fa489b4a32f?auto=format&fit=crop&w=1100&q=85",
          alt: "Paysage de savane africaine au coucher du soleil",
        },
      ],
    },
    tiles: {
      eyebrow: "Choisir son horizon",
      h2: "Cinq paysages, cinq manières de ressentir l’Afrique.",
      lead: "Quelques images pour imaginer l’atmosphère de votre prochain départ.",
      tiles: [
        {
          img: "https://images.unsplash.com/photo-1704104502747-24e356eccb58?auto=format&fit=crop&w=900&q=85",
          alt: "Éléphants dans la savane",
          title: "La savane vivante",
          text: "Les grands troupeaux, les prédateurs et les horizons sans fin d’Afrique de l’Est.",
        },
        {
          img: "https://images.unsplash.com/photo-1639403169804-318fcb1d23ad?auto=format&fit=crop&w=900&q=85",
          alt: "Dunes de sable dans le désert",
          title: "Le désert minéral",
          text: "La lumière, les dunes et le sentiment rare d’être au bout du monde.",
        },
        {
          img: "https://images.unsplash.com/photo-1759215290881-cc6a8ccbb37e?auto=format&fit=crop&w=900&q=85",
          alt: "Rivière et végétation africaine",
          title: "L’eau sauvage",
          text: "Une navigation douce au fil des canaux et des îlots du delta.",
        },
      ],
    },
    steps: {
      eyebrow: "Votre itinéraire",
      h2: "Du premier lever de soleil au dernier feu de camp.",
      steps: [
        {
          n: "01",
          title: "Choisir une région",
          text: "Nous partons de vos envies : grands animaux, paysages, photographie ou voyage contemplatif.",
        },
        {
          n: "02",
          title: "Composer les étapes",
          text: "Nous ajustons les distances, les nuits et les hébergements pour garder un rythme agréable.",
        },
        {
          n: "03",
          title: "Partir accompagné",
          text: "Sur place, vos guides locaux donnent du sens aux paysages et aux rencontres.",
        },
      ],
      cta: {
        title: "Votre Afrique commence ici.",
        text: "Parlons de la saison, de vos envies et du temps dont vous disposez.",
        label: "Composer mon voyage",
        href: "/mon-safari",
      },
    },
  },
  animaux: {
    title: "Les Rencontres Qui Comptent",
    hero: {
      l1: "Les Rencontres",
      l2: "Qui Comptent",
      p: "Touchez une carte pour découvrir où et quand les observer.",
    },
    faune: {
      h2: "Les rencontres qui comptent",
      lead: "Touchez une carte pour découvrir où et quand les observer.",
    },
    split: {
      eyebrow: "Observer sans déranger",
      h2: "La beauté d’une rencontre tient aussi à la distance.",
      lead: "Un troupeau qui rejoint un point d’eau, un lion qui s’éveille dans l’herbe haute, une girafe qui traverse les acacias. Nous privilégions l’observation patiente, le respect des consignes des réserves et le temps nécessaire pour laisser la scène se dérouler.",
      features: [
        {
          title: "Patience",
          text: "Rester en retrait et laisser les animaux libres de leurs mouvements.",
        },
        {
          title: "Connaissance",
          text: "Comprendre les habitats, les comportements et les rythmes de la faune.",
        },
      ],
      imgs: [
        {
          src: "https://images.unsplash.com/photo-1561476287-3cea3b9d4e79?auto=format&fit=crop&w=1100&q=85",
          alt: "Girafe dans son environnement naturel",
        },
      ],
    },
    eco: {
      eyebrow: "Les grands écosystèmes",
      h2: "Chaque habitat abrite son propre monde.",
      lead: "Le lieu et la saison changent tout : voici quelques environnements qui donnent leur caractère aux safaris.",
      tiles: [
        {
          img: "https://images.unsplash.com/photo-1598975314523-9afadd6316c8?auto=format&fit=crop&w=900&q=85",
          alt: "Savane africaine",
          title: "Les plaines ouvertes",
          text: "De vastes espaces où les herbivores se déplacent et où les prédateurs suivent les troupeaux.",
        },
        {
          img: "https://images.unsplash.com/photo-1790885151822-74abac7008ce?auto=format&fit=crop&w=900&q=85",
          alt: "Paysage de marais et de rivière",
          title: "Les zones humides",
          text: "Des rivières, marais et lagunes qui attirent une grande diversité d’oiseaux et de mammifères.",
        },
        {
          img: "https://images.unsplash.com/photo-1705484576047-58929c0bb862?auto=format&fit=crop&w=900&q=85",
          alt: "Paysage désertique",
          title: "Les terres arides",
          text: "Une faune adaptée à la rareté de l’eau, dans des paysages de lumière et de silence.",
        },
      ],
    },
    quote: {
      text: "« Le plus beau spectacle est souvent celui que l’on n’avait pas prévu. »",
      cite: "Prendre le temps d’observer",
    },
    steps: {
      eyebrow: "Préparer la rencontre",
      h2: "Un safari se construit autour du vivant.",
      steps: [
        {
          n: "01",
          title: "La saison",
          text: "Les périodes d’observation varient selon les régions, les pluies et les déplacements des animaux.",
        },
        {
          n: "02",
          title: "Le terrain",
          text: "Nous sélectionnons les réserves et les secteurs adaptés aux espèces que vous rêvez de voir.",
        },
        {
          n: "03",
          title: "Le regard",
          text: "Un guide attentif vous aide à repérer les détails et à comprendre les comportements.",
        },
      ],
      cta: {
        title: "Quelle rencontre vous attire ?",
        text: "Indiquez-nous les espèces qui vous fascinent : nous construirons le voyage autour de vos priorités.",
        label: "Imaginer mon safari",
        href: "/mon-safari",
      },
    },
  },
  pourquoi: {
    title: "Pourquoi Savana D’Or",
    hero: {
      l1: "Pourquoi",
      l2: "Savana D’Or",
      p: "Des safaris conçus à votre rythme, avec des guides locaux, des camps intimes et une attention portée aux rencontres.",
    },
    approach: {
      h2: "Une approche pensée pour vous",
      items: [
        {
          title: "Des itinéraires sur mesure",
          text: "Chaque itinéraire est construit à la main selon votre rythme, la saison et les migrations en cours.",
        },
        {
          title: "Des rencontres responsables",
          text: "Observer les animaux dans leur habitat, en respectant les réserves protégées et leur environnement.",
        },
        {
          title: "Un échange direct",
          text: "Votre demande reçoit une réponse personnalisée sous 24 heures, sans engagement.",
        },
      ],
    },
    philo: {
      eyebrow: "Notre philosophie",
      h2: "Moins de cases à cocher. Plus de moments qui restent.",
      lead: "Un safari réussi ne se mesure pas au nombre de kilomètres parcourus. Il se reconnaît à son rythme, à la qualité des échanges et à la place laissée à l’imprévu. Savana D’Or imagine des voyages où chaque étape a une raison d’être.",
      imgs: [
        {
          src: "https://images.unsplash.com/photo-1577971132997-c10be9372519?auto=format&fit=crop&w=1100&q=85",
          alt: "Lumière dorée filtrant à travers les arbres",
        },
      ],
      paras: [
        "Nous privilégions les hébergements à taille humaine, les expériences ancrées dans leur territoire et les partenaires locaux qui connaissent intimement leur région.",
      ],
    },
    features: {
      eyebrow: "Ce qui guide nos choix",
      h2: "Une attention à chaque détail du voyage.",
      features: [
        {
          title: "01 · L’écoute",
          text: "Vos envies, votre budget et votre façon de voyager orientent les premières propositions.",
        },
        {
          title: "02 · Le terrain",
          text: "Des guides locaux et des hébergements choisis pour leur emplacement et leur atmosphère.",
        },
        {
          title: "03 · La mesure",
          text: "Des étapes pensées pour limiter les trajets inutiles et profiter pleinement de chaque lieu.",
        },
      ],
    },
    steps: {
      eyebrow: "De l’idée au départ",
      h2: "Un accompagnement clair, à chaque étape.",
      steps: [
        {
          n: "01",
          title: "Vous nous racontez",
          text: "Une première conversation pour comprendre vos envies, vos dates et votre manière de voyager.",
        },
        {
          n: "02",
          title: "Nous dessinons",
          text: "Un itinéraire personnalisé, avec des étapes cohérentes et des suggestions adaptées à la saison.",
        },
        {
          n: "03",
          title: "Vous vivez l’Afrique",
          text: "Les derniers détails sont préparés avec nos partenaires sur place pour un départ serein.",
        },
      ],
    },
    quote: {
      text: "« Le luxe, c’est le temps de regarder, d’écouter et de ressentir. »",
      cite: "L’esprit Savana D’Or",
    },
    cta: {
      cta: {
        title: "Un voyage à votre image.",
        text: "Faisons connaissance et donnons forme à votre prochaine aventure africaine.",
        label: "Parler de mon projet",
        href: "/mon-safari",
      },
    },
  },
  safari: {
    title: "Composer Mon Safari",
    hero: {
      l1: "Composer",
      l2: "Mon Safari",
      p: "Parlez-nous de votre voyage. Nous préparons une proposition personnalisée sous 24 heures, sans engagement.",
    },
    form: {
      h2: "Parlez-nous de votre safari",
      lead: "Réponse personnalisée sous 24 heures, sans engagement.",
      paras: [
        "Merci. Votre demande est bien partie, nous vous répondons très vite.",
      ],
    },
    tiles: {
      eyebrow: "Quelques inspirations",
      h2: "Quel safari vous ressemble ?",
      lead: "Il n’existe pas une seule façon de découvrir l’Afrique. Ces ambiances peuvent se combiner selon la saison et la durée de votre séjour.",
      tiles: [
        {
          img: "https://images.unsplash.com/photo-1740927725537-39d5245030ce?auto=format&fit=crop&w=900&q=85",
          alt: "Safari dans la savane",
          title: "Les grands classiques",
          text: "Plaines emblématiques, observation de la faune et lodges au cœur des paysages.",
        },
        {
          img: "https://images.unsplash.com/photo-1531208853003-c1ec1b8a81d7?auto=format&fit=crop&w=900&q=85",
          alt: "Cours d’eau bordé de végétation",
          title: "Au fil de l’eau",
          text: "Delta, canaux et safaris plus contemplatifs au plus près des milieux aquatiques.",
        },
        {
          img: "https://images.unsplash.com/photo-1696894134302-7e124a8bf2e8?auto=format&fit=crop&w=900&q=85",
          alt: "Dunes dans le désert",
          title: "Les horizons du désert",
          text: "Dunes, grands espaces et nuits sous un ciel immense.",
        },
      ],
    },
    steps: {
      eyebrow: "Comment ça se passe ?",
      h2: "Votre projet prend forme en trois temps.",
      steps: [
        {
          n: "01",
          title: "Votre demande",
          text: "Vous partagez les premières informations, même si votre idée n’est pas encore précise.",
        },
        {
          n: "02",
          title: "Notre proposition",
          text: "Nous revenons vers vous avec une première piste adaptée à vos envies et à la saison.",
        },
        {
          n: "03",
          title: "Les ajustements",
          text: "Nous affinons ensemble le rythme, les étapes et les hébergements avant de finaliser le voyage.",
        },
      ],
      note: "Une demande ne vous engage pas à réserver.",
    },
  },
};
