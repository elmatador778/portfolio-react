import { useLang } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>
        {t('Built with', 'Fait avec')} <span className="accent">&lt;/&gt;</span> &amp; Tsiky Andrianarisata © {year}
      </p>
      <p className="footer-contact">
        <a href="mailto:andrianarisatatsiky@gmail.com">andrianarisatatsiky@gmail.com</a>
        &nbsp;·&nbsp; 06 41 15 96 12
      </p>
    </footer>
  );
}
