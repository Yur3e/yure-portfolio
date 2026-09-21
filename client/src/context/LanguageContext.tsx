import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { siteContent } from "../content/siteContent";
import type { SiteContent, SupportedLanguage } from "../types/portfolio";

interface LanguageContextValue {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  content: SiteContent;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<SupportedLanguage>("pt");

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-language");

    if (stored === "pt" || stored === "en") {
      setLanguage(stored);
    }
  }, []);

  function handleSetLanguage(nextLanguage: SupportedLanguage) {
    setLanguage(nextLanguage);
    window.localStorage.setItem("portfolio-language", nextLanguage);
  }

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: handleSetLanguage,
      content: siteContent[language]
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider.");
  }

  return context;
}

