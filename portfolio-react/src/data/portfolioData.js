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
    paras: ['Modélisations numériques exigeant rigueur et minutie, dans le respect des délais.'],
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
  {
    tag: 'Électronique analogique',
    cat: 'Électronique',
    titre: "Amplis audio & pédale d'effet Overdrive-Distorsion",
    desc: "Pédale de type Tube Screamer TS808 : simulation du circuit, rétro-ingénierie du schéma, montage sur plaque LABDEC puis réalisation de la carte électronique et du prototype final. Conception et test d'amplificateurs audio.",
    imgSrc: `${BASE}assets/pedale-p3b.png`,
  },
  {
    tag: 'Robotique embarquée',
    cat: 'Embarqué',
    titre: 'Robot autonome à évitement d\'obstacles',
    desc: "Châssis 4 roues motrices sur Arduino Uno : capteur ultrasonique HC-SR04, pilotage des moteurs via pont en H L298N, logique d'évitement programmée en C++ (mesure d'écho, arrêt, recul, pivot).",
    imgSrc: 'https://images.unsplash.com/photo-1558137623-ce933996c730?q=80&w=800&auto=format&fit=crop',
    imgCredit: 'Photo by Marília Castelli on Unsplash',
    imgCreditHref: 'https://unsplash.com/@liacastelli',
  },
  {
    tag: 'Capteurs & temps réel',
    cat: 'Embarqué',
    titre: 'Radar à ultrasons',
    desc: 'Capteur HC-SR04 et servomoteur, acquisition et visualisation de données en temps réel sous Processing.',
    imgSrc: 'https://images.unsplash.com/photo-1631378297854-185cff6b0986?q=80&w=800&auto=format&fit=crop',
    imgCredit: 'Photo by Vishnu Mohanan on Unsplash',
    imgCreditHref: 'https://unsplash.com/@vishnumaiea',
  },
];

export const pedaleGallery = [
  { src: `${BASE}assets/pedale-p3b.png`, cap: "1. Schéma électronique de l'effet (simulation)" },
  { src: `${BASE}assets/pedale-p5c.png`, cap: "2. Mesure de l'écrêtage à l'oscilloscope" },
];

export const robotGallery = [
  { src: 'https://images.unsplash.com/photo-1577962144759-8dec6b55c952?q=80&w=800&auto=format&fit=crop', cap: '1. Inventaire des composants', credit: 'Photo Robin Glauser, Unsplash', creditHref: 'https://unsplash.com/@nahakiole' },
  { src: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=800&auto=format&fit=crop', cap: '2. Arduino Uno, cerveau du robot', credit: 'Photo Harrison Broadbent, Unsplash', creditHref: 'https://unsplash.com/@harrisonbroadbent' },
  { src: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800&auto=format&fit=crop', cap: '3. Câblage capteur et moteurs', credit: 'Photo Robin Glauser, Unsplash', creditHref: 'https://unsplash.com/@nahakiole' },
  { src: 'https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?q=80&w=800&auto=format&fit=crop', cap: '4. Robot assemblé, prêt à rouler', credit: 'Photo Marília Castelli, Unsplash', creditHref: 'https://unsplash.com/@liacastelli' },
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

export const semesters = [
  {
    label: 'Semestre 1',
    photo: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop',
    credit: 'Photo by Dan Cristian Pădureț on Unsplash',
    creditHref: 'https://unsplash.com/@dancristianpaduret',
    topics: [
      'Mathématiques et logique : complexes, analyse, algèbre de Boole',
      'Électricité : courant continu et alternatif',
      'Ondes, étude fréquentielle et filtrage',
      'Mécanique et incertitudes',
      'Algorithmique : C/Arduino, Python',
    ],
  },
  {
    label: 'Semestre 2',
    photo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    credit: 'Photo by Danist Soh on Unsplash',
    creditHref: 'https://unsplash.com/@danist07',
    topics: [
      'Probabilités, statistiques et algèbre',
      'Thermique et résistance des matériaux (RDM)',
      'Bases de données et langage SQL',
      'CAO et gestion de production',
      'Argumentaire technico-commercial',
    ],
  },
  {
    label: 'Semestre 3 · Spécialité SEEE',
    photo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    credit: 'Photo by Alexandre Debiève on Unsplash',
    creditHref: 'https://unsplash.com/@alexkixa',
    topics: [
      'Électromagnétisme et radioélectricité',
      'Électronique analogique : semi-conducteurs, AOP',
      'Réseaux : adressage IP, Ethernet, CCNA',
      'Capteurs, actionneurs, régulation et asservissement',
      'Analyse en 3 dimensions',
    ],
  },
  {
    label: 'Semestre 4',
    photo: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop',
    credit: 'Photo by Christopher Gower on Unsplash',
    creditHref: 'https://unsplash.com/@cgower',
    topics: [
      'Programmation orientée objet',
      'Programmation embarquée',
      'Architectures informatiques et assembleur',
      'Théorie du langage, structures de données, complexité',
      'Stage en entreprise (8 semaines et plus)',
    ],
  },
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
