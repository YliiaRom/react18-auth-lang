import bgImg from "@/assets/img/title.png";
import { useTranslation } from "react-i18next";
export default function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="heroWrapper">
        <div
          style={{ backgroundImage: `url(${bgImg})` }}
          className="imgTitleHomePage"
        ></div>
        <div className="titleBox">
          <p>{t("home.title")}</p>
          <p>{t("home.description")}</p>
        </div>
      </div>
    </>
  );
}
