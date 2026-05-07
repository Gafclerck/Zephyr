import React, { createContext, useContext, useState, useEffect } from "react";
import fr from "../i18n/fr.json";
import en from "../i18n/en.json";

// For now, we use French as the primary source of truth
const translations: Record<string, any> = {
  fr,
  en,
};

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("zephyr-language") as Language;
    if (stored && (stored === "fr" || stored === "en")) return stored;
    
    // Default to French as requested in previous conversations
    return "fr";
  });

  useEffect(() => {
    localStorage.setItem("zephyr-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (path: string): string => {
    const keys = path.split(".");
    let result = translations[language];

    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        // Fallback to French if current language is not French and key missing
        if (language !== "fr") {
          let fallback = translations["fr"];
          for (const k of keys) {
            if (fallback && fallback[k]) {
              fallback = fallback[k];
            } else {
              return path;
            }
          }
          return fallback;
        }
        return path;
      }
    }

    return result as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
