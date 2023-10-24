import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json";
import viTranslation from "./vi.json";
import jpTranslation from "./jp.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    vi: {
      translation: viTranslation,
    },
    jp: {
      translation: jpTranslation,
    },
  },
  lng: "vi", // Default language
  fallbackLng: "vi", // Fallback language
  debug: true, // Enable debug mode for development
  keySeparator: false, // Disable key separator
});

export default i18n;
