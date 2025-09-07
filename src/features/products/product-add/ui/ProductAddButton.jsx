import { frontRoutes } from "@/shared/config/routes/frontRoutes";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export default function ProductAddButton() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const onClick = () => {
    navigate(frontRoutes.pages.ProductEditPage.navigationPath());
  };
  return <button onClick={onClick}>{t("navigateBtn.toAddProduct")}</button>;
}
