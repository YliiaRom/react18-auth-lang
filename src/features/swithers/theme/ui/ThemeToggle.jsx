import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function ThemeToggle() {
  const { t } = useTranslation();
  const [color, setColor] = useState(() => {
    return localStorage.getItem("wino-theme") || "white";
  });

  const handlerTheme = (colorTheme) => {
    setColor(colorTheme);
    const body = document.documentElement;
    body.classList.remove("white", "black");
    body.classList.add(colorTheme);
    window.localStorage.setItem("wino-theme", colorTheme);
  };

  useEffect(() => {
    const body = document.documentElement;
    body.classList.remove("white", "black");
    body.classList.add(color);
  }, [color]);
  return (
    <div className="themeToggleWrapper">
      <p>{t("commandBtn.colorTheme")}</p>
      <div>
        <button onClick={() => handlerTheme("white")}>white</button>
        <button onClick={() => handlerTheme("black")}>black</button>
      </div>
    </div>
  );
}

export default ThemeToggle;
