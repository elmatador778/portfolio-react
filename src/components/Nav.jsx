import { useLang } from '../context/LanguageContext';
import cesiLogo from '/cesi_étudiants.png';

export default function Nav() {
  const { lang, toggleLang, t } = useLang();

  return (
    <nav>
      <span className="logo">
        <img src={cesiLogo} alt="CESI" className="cesi-logo" />
        ~/tsiky
      </span>
      <div className="nav-links">
        <a href="#about">{t('About', 'À propos')}</a>
        <a href="#skills">{t('Skills', 'Compétences')}</a>
        <a href="#projects">{t('Projects', 'Projets')}</a>
        <a href="#resume">{t('Resume', 'CV')}</a>
        <button className="lang-toggle" onClick={toggleLang}>
          {lang === 'en' ? 'FR' : 'EN'}
        </button>
      </div>
    </nav>
  );
}
