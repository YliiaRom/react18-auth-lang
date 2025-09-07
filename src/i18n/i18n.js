import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ua from "./ua.json";

const saveLang = localStorage.getItem("i18nextLng") || "ua";

const resources = {
  en: {
    translation: en,
  },
  ua: {
    translation: ua,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: saveLang,
    fallbackLng: "ua",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    direction: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
