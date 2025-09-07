import { useState } from "react";
import { useTranslation } from "react-i18next";

function SwitcherLang() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const handlerLang = (lang) => {
    changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
  };
  return (
    <div className="switcherWrapper">
      <p>{t("commandBtn.langTheme")}</p>

      <div>
        <button type="button" onClick={() => handlerLang("ua")}>
          ua
        </button>
        <button type="button" onClick={() => handlerLang("en")}>
          en
        </button>
      </div>
    </div>
  );
}

export default SwitcherLang;
