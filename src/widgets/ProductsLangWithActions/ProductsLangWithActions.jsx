import ProductCardLang from "@/entities/productLang/ui/ProductCardLang";
import ProductLangDeleteButton from "@/features/productsLang/porductLang-delete/ui/ProductLangDeleteButton";
import { roles } from "@/shared/config/roles";

function ProductsLangWithActions({ product, user, role }) {
  const isOwner = user && product.ownerId === user.id;
  const canDelete = role === roles.admin || (role === roles.manager && isOwner);

  return (
    <>
      <ProductCardLang product={product}>
        {canDelete && <ProductLangDeleteButton productId={product.id} />}
      </ProductCardLang>
    </>
  );
}

export default ProductsLangWithActions;
