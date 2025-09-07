import ProductsList from "../widgets/ProductsList/ProductsList";
import { useSelector } from "react-redux";

import ProductAddButton from "../features/products/product-add/ui/ProductAddButton";
import ProductAddButtonLang from "@/features/productsLang/productAddButtonLang";
import ProductsLangList from "@/widgets/ProductsLangList/ProductsLangList";
import { useTranslation } from "react-i18next";

export default function ProductsPage() {
  const { t } = useTranslation();
  const user = useSelector((state) => state.auth.user);
  const role = user?.role;

  return (
    <div>
      <div className="productsPageWrapper">
        <h1>{t(`productsPage.title`)}</h1>
        {role === "admin" || role === "manager" ? (
          <div className="formsBox">
            <ProductAddButton />
            <ProductAddButtonLang />
          </div>
        ) : null}
        <ProductsLangList user={user} role={role} />
        <ProductsList user={user} role={role} />
      </div>
    </div>
  );
}
