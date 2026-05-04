import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  function toggleLang() {
    setLang(l => (l === 'en' ? 'fr' : 'en'));
  }

  function t(en, fr) {
    return lang === 'en' ? en : fr;
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
