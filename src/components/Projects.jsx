import { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import ProjectCard from './ProjectCard';

const projects = [
  {
    tag: 'Firmware · 2025',
    tagHw: true,
    titleEn: 'Embedded Systems & Microcontrollers',
    titleFr: 'Systèmes Embarqués & Microcontrôleurs',
    descEn: 'Architecture of microcontrollers (ARM Cortex-M, AVR), bare-metal C/C++ firmware development, peripheral drivers (I²C, SPI, UART, GPIO, timers), interrupt handling, and DMA transfers. Applied object-oriented programming in C++ for hardware abstraction layers. Studied real-time operating system concepts (task scheduling, semaphores, queues) and embedded network protocols.',
    descFr: "Architecture des microcontrôleurs (ARM Cortex-M, AVR), développement firmware C/C++ bare-metal, pilotes de périphériques (I²C, SPI, UART, GPIO, timers), gestion des interruptions et transferts DMA. Programmation orientée objet en C++ pour les couches d'abstraction matérielle. Étude des concepts RTOS (ordonnancement, sémaphores, files) et protocoles réseau embarqués.",
    badges: ['C / C++', 'ARM Cortex-M', 'Arduino / AVR', 'FreeRTOS', 'I²C · SPI · UART', 'Interrupts / DMA'],
  },
  {
    tag: 'Hardware · 2025',
    tagHw: true,
    titleEn: 'Electronics & Signal Processing',
    titleFr: 'Électronique & Traitement du Signal',
    descEn: 'Analog circuit design: op-amp amplification, active filtering (Butterworth, Chebyshev), power regulation. Radio frequency: modulation schemes, antenna fundamentals, signal chain design. Automatic control: PID tuning, Bode/Nyquist analysis, stability of linear systems. All validated with LTSpice simulations and bench measurements (oscilloscope, signal generator, multimeter).',
    descFr: "Conception de circuits analogiques : amplification op-amp, filtrage actif (Butterworth, Chebyshev), régulation d'alimentation. Radiofréquence : schémas de modulation, bases des antennes, conception de la chaîne de signal. Automatique : réglage PID, analyse Bode/Nyquist, stabilité des systèmes linéaires. Tout validé par simulations LTSpice et mesures en banc (oscilloscope, générateur de signaux, multimètre).",
    badges: ['LTSpice', 'Op-Amp', 'PID Control', 'RF / Modulation', 'Oscilloscope', 'Signal Processing'],
  },
  {
    tag: 'Radioelectricity · 2025',
    tagHw: true,
    titleEn: 'Radar System for Autonomous Vehicles',
    titleFr: 'Système Radar pour Véhicule Autonome',
    descEn: 'Developed a short-range radar prototype aimed at future autonomous car applications. Designed the RF signal chain including antenna selection, transmitter/receiver circuitry, and signal modulation (FMCW). Implemented signal processing algorithms in Python to extract distance and relative speed from the radar returns. Validated the system with bench measurements and real-world obstacle detection tests.',
    descFr: "Développement d'un prototype radar courte portée destiné aux véhicules autonomes. Conception de la chaîne de signal RF incluant le choix d'antennes, les circuits émetteur/récepteur et la modulation du signal (FMCW). Implémentation d'algorithmes de traitement du signal en Python pour extraire la distance et la vitesse relative depuis les retours radar. Validation par mesures en banc et tests de détection d'obstacles réels.",
    badges: ['RF / FMCW Radar', 'Antenna Design', 'Python', 'Signal Processing', 'LTSpice', 'Oscilloscope'],
  },
  {
    tag: 'Electronics · 2025',
    tagHw: true,
    titleEn: 'Audio Amplifier & Speaker Build',
    titleFr: 'Amplificateur Audio & Enceinte',
    descEn: 'Designed and built a complete audio amplification chain from scratch, from preamplification to the final power stage driving a custom speaker enclosure. Selected and dimensioned op-amp stages, active crossover filters (Butterworth), and a Class AB power amplifier. Measured frequency response, THD, and gain using an oscilloscope and signal generator. The finished speaker was fully functional and characterised on the bench.',
    descFr: "Conception et réalisation complète d'une chaîne d'amplification audio, de la préamplification jusqu'à l'étage de puissance pilotant une enceinte acoustique maison. Dimensionnement des étages op-amp, filtres de voie actifs (Butterworth) et amplificateur de puissance Classe AB. Mesure de la réponse en fréquence, du THD et du gain à l'oscilloscope et au générateur de signal. L'enceinte terminée était pleinement fonctionnelle et caractérisée en banc.",
    badges: ['Op-Amp', 'Class AB Amplifier', 'Active Filtering', 'LTSpice', 'PCB Design', 'Bench Measurement'],
  },
  {
    tag: 'Embedded · 2024',
    tagHw: true,
    titleEn: 'Weather Station — Embedded Project',
    titleFr: 'Station Météo — Projet Embarqué',
    descEn: 'Built a fully autonomous weather station on an STM32 microcontroller. Integrated temperature, humidity (DHT22), pressure (BMP280), and UV index sensors over I²C and single-wire protocols. Developed bare-metal C firmware including sensor drivers, data averaging, and a low-power sleep mode between acquisitions. Data was displayed on a small OLED screen and transmitted wirelessly over a serial link for logging on a PC.',
    descFr: "Réalisation d'une station météo autonome sur microcontrôleur STM32. Intégration de capteurs de température, humidité (DHT22), pression (BMP280) et indice UV via protocoles I²C et single-wire. Développement d'un firmware C bare-metal comprenant les pilotes de capteurs, la moyenne des données et un mode veille basse consommation entre les acquisitions. Les données étaient affichées sur un écran OLED et transmises sans fil par liaison série pour journalisation sur PC.",
    badges: ['STM32', 'C (bare-metal)', 'I²C / UART', 'DHT22 / BMP280', 'OLED Display', 'Low Power'],
  },
  {
    tag: 'Internship · 2026',
    tagHw: false,
    titleEn: 'ONERA — Python/Java GUI Developer',
    titleFr: 'ONERA — Développeur Python/Java (GUI)',
    descEn: 'Toulouse, April – June 2026. Developed a complete graphical user interface for the aerospace simulation software CSIPI (Python/PyQt or Java). Created data visualisation modules and post-processing tools for simulation outputs. Collaborated closely with ONERA researchers and end users in an aerospace R&D environment.',
    descFr: "Toulouse, avril – juin 2026. Développement d'une interface graphique complète pour le logiciel de simulation aérospatiale CSIPI (Python/PyQt ou Java). Création de modules de visualisation de données et d'outils de post-traitement. Collaboration étroite avec les chercheurs ONERA et utilisateurs finaux dans un environnement R&D aérospatial.",
    badges: ['Python', 'PyQt', 'Java', 'GUI', 'Aerospace'],
  },
  {
    tag: 'CESI · 2024',
    tagHw: false,
    titleEn: 'Databases & Digital Modelling',
    titleFr: 'Bases de données & Modélisation numérique',
    descEn: 'Design, management, and exploitation of relational databases with MySQL. Engineering projects in the construction sector: structural design on Revit, strength of materials calculations, and technical project management with Fusion 360.',
    descFr: "Conception, gestion et exploitation de bases de données relationnelles avec MySQL. Projets appliqués au secteur du BTP : conception sur Revit, calculs de résistance des matériaux, gestion de projets techniques avec Fusion 360.",
    badges: ['MySQL', 'Revit', 'Fusion 360', 'SQL'],
  },
  {
    tag: 'Internship · 2021',
    tagHw: false,
    titleEn: '3D Designer — A3D Design',
    titleFr: 'Designer 3D — A3D Design',
    descEn: 'Limoges, July 2021. Observation internship focused on 3D modelling and animation. Required rigor, patience, and precision. Time management and deadline adherence. Experience in individual and collective projects.',
    descFr: "Limoges, juillet 2021. Stage d'observation en modélisation et animation 3D. Rigueur, patience et minutie requises. Gestion du temps et respect des délais. Expérience en projets individuels et collectifs.",
    badges: ['3D Modelling', 'Animation'],
  },
  {
    tag: 'Sport · since 2008',
    tagHw: false,
    titleEn: 'High-Level Swimmer — ASPTT Toulouse',
    titleFr: 'Nageur de Haut Niveau — ASPTT Toulouse',
    descEn: 'Intensive daily training (18h/week), national championship participation. Managing the dual project of academic success alongside high-level sport demands. Stress management, perseverance under pressure, continuous performance improvement.',
    descFr: "Entraînements intensifs quotidiens (18h/semaine), championnats nationaux. Gestion du double projet : réussite académique et exigences sportives. Gestion du stress, persévérance face à l'échec, amélioration constante des performances.",
    badges: ['🏊 National level', 'Discipline', 'Resilience'],
  },
];

export default function Projects() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState(null);

  function handleToggle(index) {
    setOpenIndex(prev => (prev === index ? null : index));
  }

  return (
    <section id="projects">
      <h2 className="section-title">
        <span className="prompt">#</span> {t('Projects & Experience', 'Projets & Expériences')}
      </h2>
      <p className="section-sub">
        {t('Click a card to expand details.', 'Cliquez sur une carte pour afficher les détails.')}
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.titleEn}
            {...project}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
}
