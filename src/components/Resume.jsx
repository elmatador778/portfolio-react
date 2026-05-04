import { useLang } from '../context/LanguageContext';

export default function Resume() {
  const { t } = useLang();

  return (
    <section id="resume">
      <h2 className="section-title">
        <span className="prompt">#</span> {t('Resume', 'CV')}
      </h2>
      <div className="resume-block">
        <p>{t('Download my full resume as a PDF:', 'Télécharger mon CV complet en PDF :')}</p>
        <a className="btn-download" href="/Tsiky_Andrianarisata.pdf" download>
          {t('⬇ Download Resume (PDF)', '⬇ Télécharger le CV (PDF)')}
        </a>
      </div>
    </section>
  );
}
