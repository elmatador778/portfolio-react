const BASE = import.meta.env.BASE_URL;

export const pages = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'experience', label: 'Expérience' },
  { id: 'formation', label: 'Formation' },
  { id: 'projets', label: 'Projets' },
  { id: 'competences', label: 'Compétences' },
  { id: 'contact', label: 'Contact' },
];

export const experiences = [
  {
    label: 'ONERA',
    titre: 'Stagiaire Développeur Python : interface graphique et visualisation scientifique',
    meta: 'ONERA, Département Physique (DPHY), Toulouse · avril à juin 2026',
    paras: [
      "Conception et développement d'une interface graphique complète (Python, Eel, HTML, JavaScript, Plotly) pour CSiPI, code de simulation Monte Carlo d'érosion par pulvérisation ionique pour la propulsion électrique spatiale.",
      'Architecture multi-simulations concurrentes : isolation des jobs, suivi de progression en temps réel, gestion robuste des processus. Application portable Linux (RHEL) et Windows. Visualisation 3D, rapports PDF automatiques, YAML/JSON, Git.',
      'Tests et validation avec les chercheurs utilisateurs · rapport technique et soutenance devant jury.',
    ],
    images: [
      { src: `${BASE}assets/onera-configuration.png`, cap: 'Onglet Configuration : paramétrage de la simulation (particule incidente, cible)' },
      { src: `${BASE}assets/onera-simulations.png`, cap: 'Gestion des simulations concurrentes avec suivi de progression en temps réel' },
    ],
  },
  {
    label: 'A3D Design',
    titre: "Designer 3D : stage d'observation (modélisation et animation)",
    meta: 'A3D Design, Limoges · juillet 2021',
    paras: [
      'Modélisations numériques exigeant rigueur et minutie, dans le respect des délais.',
      "Participation à l'étude de conception d'un harnais de sécurité 5 points pour siège de manège à sensations : modélisation CAO de la boucle centrale et des points d'ancrage, puis analyse numérique de la répartition des contraintes sur les zones de verrouillage.",
    ],
    images: [
      { src: `${BASE}assets/a3d-harnais-cao.svg`, cap: 'Harnais 5 points — étude CAO, siège de manège à sensations' },
      { src: `${BASE}assets/a3d-harnais-analyse.svg`, cap: "Analyse numérique — répartition des contraintes sur la boucle d'ancrage" },
    ],
  },
  {
    label: 'Natation',
    titre: 'Nageur de compétition (niveau national)',
    meta: 'ASPTT Toulouse Natation · depuis septembre 2008',
    paras: [
      'Entraînements intensifs (18 heures par semaine), participation aux championnats nationaux.',
      'Gestion du double projet sport-études : organisation, discipline, résilience.',
    ],
  },
];

export const projetsData = [
  { tag: 'Électronique analogique', cat: 'Électronique', titre: "Amplis audio & pédales d'effet", desc: "Conception, assemblage et test d'amplificateurs audio et de pédales d'effet pour guitare." },
  { tag: 'Robotique embarquée', cat: 'Embarqué', titre: 'Robots autonomes Arduino', desc: 'Construction, câblage et programmation de robots autonomes en C++ sur Arduino.' },
  { tag: 'Capteurs & temps réel', cat: 'Embarqué', titre: 'Radar à ultrasons', desc: 'Capteur HC-SR04 et servomoteur, acquisition et visualisation de données en temps réel sous Processing.' },
];

export const projFilters = ['Tous', 'Électronique', 'Embarqué'];

export const skills = [
  { titre: 'Langages & développement', items: ['Python', 'C++ · C', 'SQL', 'HTML · JavaScript · Bash', 'POO · Git'] },
  { titre: 'Embarqué & électronique', items: ['Microcontrôleurs · Arduino', 'Électronique analogique & numérique', 'Capteurs · RF · traitement du signal', 'Automatique · PID', 'Soudure · prototypage'] },
  { titre: 'Environnements & outils', items: ['Linux (RHEL) · Windows', 'YAML · JSON', 'Plotly · visualisation de données', 'Interfaces graphiques (GUI)'] },
  { titre: "Méthodes d'ingénierie", items: ['Gestion de projet', 'Gantt · MoSCoW', 'Rédaction technique', 'Tests & validation'] },
];

export const formationCards = [
  { titre: 'Électronique et signal', desc: 'Amplification, filtrage, radiofréquence (RF), traitement du signal pour systèmes communicants.' },
  { titre: 'Automatique', desc: 'Lois de commande, régulation, asservissement de systèmes linéaires : PID, stabilité, précision.' },
  { titre: 'Embarqué et informatique', desc: 'Architecture des microcontrôleurs, POO (C++, Python), protocoles réseaux, SQL.' },
];

export const formationImages = [
  { src: `${BASE}assets/cesi-schema-ampli.svg`, cap: 'Amplificateur audio, montage non inverseur' },
  { src: `${BASE}assets/cesi-cablage-arduino.svg`, cap: 'Câblage capteur ultrasons et microcontrôleur' },
  { src: `${BASE}assets/cesi-oscilloscope.svg`, cap: "Mesure et validation à l'oscilloscope" },
  { src: `${BASE}assets/cesi-pcb-layout.svg`, cap: "Conception et routage d'une carte de commande" },
];

export const CV_PATH = `${BASE}CV-Tsiky-Andrianarisata.pdf`;
export const EMAIL = 'andrianarisatatsiky@gmail.com';
export const PHONE_DISPLAY = '06 41 15 96 12';
export const PHONE_HREF = '+33641159612';
