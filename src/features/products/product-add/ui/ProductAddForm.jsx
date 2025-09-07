import ProductForm from "@/entities/product/ui/ProductForm";
import { useAddProductMutation } from "@/entities/product/api/productApi";
import imgProd from "@/assets/img/vino.png";

export function ProductAddForm({ onSuccess }) {
  const [addProduct] = useAddProductMutation();

  const handleSubmit = async ({ name, description, price, image }) => {
    const productImage = image || imgProd;
    await addProduct({ name, description, price, image: productImage });
    if (onSuccess) onSuccess();
  };

  return <ProductForm onSubmit={handleSubmit} />;
}
