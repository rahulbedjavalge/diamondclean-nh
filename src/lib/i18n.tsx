import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang } from "./translations";

type Dict = (typeof translations)["en"];

interface I18nValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: Dict;
}

const I18nContext = createContext<I18nValue | null>(null);

const STORAGE_KEY = "dcnh-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "en" || stored === "de") {
      setLangState(stored);
      return;
    }
    if (navigator.language?.toLowerCase().startsWith("de")) {
      setLangState("de");
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  };

  const toggle = () => setLang(lang === "en" ? "de" : "en");

  return (
    <I18nContext.Provider value={{ lang, setLang, toggle, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
