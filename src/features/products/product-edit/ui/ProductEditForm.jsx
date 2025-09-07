import ProductForm from "@/entities/product/ui/ProductForm";
import { useUpdateProductMutation } from "@/entities/product/api/productApi";
import imgProd from "@/assets/img/vino.png";

export function ProductEditForm({ product, onSuccess }) {
  const [updateProduct] = useUpdateProductMutation();

  const handleSubmit = async ({ id, name, description, price, image }) => {
    const productImage = image || imgProd;
    await updateProduct({
      id,
      data: { name, description, price, image: productImage },
    });
    if (onSuccess) onSuccess();
  };
  return <ProductForm product={product} onSubmit={handleSubmit} />;
}
