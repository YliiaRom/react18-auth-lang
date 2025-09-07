import { useAddProductLangMutation } from "@/entities/productLang/api/productLangApi";

import ProductLangForm from "@/entities/productLang/ui/ProductLangForm";

function ProductAddFormWithLang() {
  const [addProductLang] = useAddProductLangMutation();

  const handleSubmit = async (product) => {
    console.log(product);
    try {
      await addProductLang(product);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <ProductLangForm onSubmit={handleSubmit} />
    </>
  );
}

export default ProductAddFormWithLang;
