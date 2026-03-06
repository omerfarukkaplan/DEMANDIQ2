import React, { createContext, useContext, useState, useCallback } from "react";
import { Language, translations, rtlLanguages } from "@/i18n/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.en) => string;
  isRTL: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    document.documentElement.dir = rtlLanguages.includes(lang) ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, []);

  const t = useCallback(
    (key: keyof typeof translations.en) => translations[language][key] || key,
    [language]
  );

  const isRTL = rtlLanguages.includes(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
