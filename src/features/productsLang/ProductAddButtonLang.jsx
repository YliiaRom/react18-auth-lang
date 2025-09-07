import { frontRoutes } from "@/shared/config/routes/frontRoutes";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

function ProductAddButtonLang() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handlerSubmit = () => {
    navigate(frontRoutes.pages.ProductLangAddPage.navigationPath);
  };
  return (
    <>
      <button onClick={() => handlerSubmit()}>
        {t("navigateBtn.addProductLang")}
      </button>
    </>
  );
}

export default ProductAddButtonLang;
