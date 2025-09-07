import { useTranslation } from "react-i18next";
import wineImg from "@/assets/img/vino.png";
function ProductCardLang({ product, children }) {
  const { i18n } = useTranslation();
  let lang = i18n?.language;
  return (
    <div className="productCardBody">
      <img
        src={product?.image || wineImg}
        alt={product.name[lang]}
        className="productImg"
      />
      <h3>{product.name[lang]}</h3>
      <div className="priceProduct">{product.price}грн.</div>
      <div>{product.description[lang]}</div>

      {children}
    </div>
  );
}

export default ProductCardLang;
