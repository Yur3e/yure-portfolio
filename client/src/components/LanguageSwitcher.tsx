import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import type { LanguageSwitcherContent, SupportedLanguage } from "../types/portfolio";

const languages: Array<{ value: SupportedLanguage; short: string; labelKey: keyof LanguageSwitcherContent }> = [
  { value: "pt", short: "PT", labelKey: "pt" },
  { value: "en", short: "EN", labelKey: "en" }
];

export default function LanguageSwitcher() {
  const { language, setLanguage, content } = useLanguage();
  const { isDarkTheme, toggleTheme } = useTheme();
  const nextThemeTitle = isDarkTheme ? "Ativar tema claro" : "Ativar tema escuro";

  return (
    <div className="language-switcher" aria-label="Language switcher">
      {languages.map((item) => (
        <button
          key={item.value}
          type="button"
          className={`language-button${language === item.value ? " active" : ""}`}
          onClick={() => setLanguage(item.value)}
          aria-pressed={language === item.value}
          aria-label={content.languageSwitcher[item.labelKey]}
          title={content.languageSwitcher[item.labelKey]}
        >
          <span aria-hidden="true">{item.short}</span>
        </button>
      ))}

      <button
        type="button"
        className="language-button theme-toggle"
        onClick={toggleTheme}
        aria-label={nextThemeTitle}
        title={nextThemeTitle}
      >
        {isDarkTheme ? (
          <svg
            className="theme-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg
            className="theme-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>
    </div>
  );
}
