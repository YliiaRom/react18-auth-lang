import { useDeleteProductLangMutation } from "@/entities/productLang/api/productLangApi";
import { useTranslation } from "react-i18next";

function ProductLangDeleteButton({ productId }) {
  const [deleteProductLang] = useDeleteProductLangMutation();
  const { t } = useTranslation();
  const handlerDelete = async () => {
    await deleteProductLang(productId);
  };
  return <button onClick={handlerDelete}>{t("commandBtn.delete")}</button>;
}

export default ProductLangDeleteButton;
