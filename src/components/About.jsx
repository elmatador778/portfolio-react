import { useLang } from '../context/LanguageContext';

export default function About() {
  const { t } = useLang();

  return (
    <section id="about">
      <h2 className="section-title">
        <span className="prompt">#</span> {t('About Me', 'À propos de moi')}
      </h2>

      <div className="about-grid">
        <div className="about-text">
          <p>
            {t(
              'Embedded systems engineer in training, passionate about the intersection of hardware and software. I design and program microcontroller-based systems — from bare-metal C/C++ firmware to real-time operating systems — with a strong background in electronics, signal processing, and RF communications. Currently in my second year at CESI Toulouse, seeking an apprenticeship to deepen my expertise in firmware development, PCB design, and real-time embedded applications.',
              "Ingénieur systèmes embarqués en formation, passionné par l'intersection matériel/logiciel. Je conçois et programme des systèmes à base de microcontrôleurs — du firmware C/C++ bare-metal aux systèmes temps réel — avec de solides bases en électronique, traitement du signal et communications RF. Actuellement en deuxième année au CESI Toulouse, je recherche une alternance pour approfondir mon expertise en développement firmware, conception PCB et applications embarquées temps réel."
            )}
          </p>

          <div className="about-tags">
            <div className="tag-group">
              <span className="tag-label">{t('Languages', 'Langues')}</span>
              <span className="badge">🇬🇧 English B2</span>
              <span className="badge">🇪🇸 Spanish B2</span>
              <span className="badge">🇫🇷 French — Native</span>
            </div>
            <div className="tag-group">
              <span className="tag-label">{t('Interests', 'Intérêts')}</span>
              <span className="badge">✈️ Aviation</span>
              <span className="badge">🏎️ Motorsport</span>
              <span className="badge">🏊 Swimming (competitive)</span>
            </div>
            <div className="tag-group">
              <span className="tag-label">Contact</span>
              <span className="badge">📍 Toulouse</span>
              <a className="badge link" href="mailto:andrianarisatatsiky@gmail.com">andrianarisatatsiky@gmail.com</a>
              <span className="badge">📞 06 41 15 96 12</span>
            </div>
          </div>
        </div>

        <div className="soft-skills">
          <p className="tag-label">{t('Soft Skills', 'Qualités')}</p>
          <ul>
            <li>{t('🔹 Reliability — organisation, rigor, punctuality', '🔹 Fiabilité — organisation, rigueur, ponctualité')}</li>
            <li>{t('🔹 Team spirit — collaboration, active listening', "🔹 Esprit d'équipe — collaboration, écoute")}</li>
            <li>{t('🔹 Proactivity — autonomy, initiative, curiosity', '🔹 Proactivité — autonomie, initiative, curiosité')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
