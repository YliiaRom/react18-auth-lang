import { useGetAllProductsLangQuery } from "@/entities/productLang/api/productLangApi";
import ProductCardLang from "@/entities/productLang/ui/ProductCardLang";
import ProductsLangWithActions from "../ProductsLangWithActions/ProductsLangWithActions";

function ProductsLangList({ user, role }) {
  const {
    data: productsData = [],
    isLoading,
    error,
  } = useGetAllProductsLangQuery();

  let content;
  if (isLoading) content = <p>Завантаження товару</p>;
  if (error) content = <p> Помилка при відображенні товару</p>;
  return (
    <div>
      {content}
      <ul className="productsList">
        {productsData.map((product, index) => (
          <li key={index}>
            {/* <ProductCardLang product={product} /> */}
            <ProductsLangWithActions
              product={product}
              user={user}
              role={role}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsLangList;
