import { useState } from "react";
import imgProd from "@/assets/img/vino.png";
import { useTranslation } from "react-i18next";
export default function ProductLangForm({ product = {}, onSubmit }) {
  const { t } = useTranslation();
  const [nameEn, setNameEn] = useState(product?.name?.en || "");
  const [nameUa, setNameUa] = useState(product?.name?.ua || "");
  const [descriptionEn, setDescriptionEn] = useState(
    product?.description?.en || ""
  );
  const [descriptionUa, setDescriptionUa] = useState(
    product?.description?.ua || ""
  );

  const [price, setPrice] = useState(product?.price || 0);
  const [image, setImage] = useState(product?.image || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const productImage = image || imgProd;
    onSubmit({
      ...product,
      name: {
        en: nameEn,
        ua: nameUa,
      },
      description: {
        en: descriptionEn,
        ua: descriptionUa,
      },
      price: Number(price),
      image: image || productImage,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 max-w-md mx-auto"
    >
      <input
        className="border rounded px-2 py-1"
        placeholder={t(`productLangAddPage.productLangForm.nameEn`)}
        value={nameEn}
        onChange={(e) => setNameEn(e.target.value)}
        required
      />
      <input
        className="border rounded px-2 py-1"
        placeholder={t(`productLangAddPage.productLangForm.nameUa`)}
        value={nameUa}
        onChange={(e) => setNameUa(e.target.value)}
        required
      />
      <input
        className="border rounded px-2 py-1"
        placeholder={t(`productLangAddPage.productLangForm.descriptionEn`)}
        value={descriptionEn}
        onChange={(e) => setDescriptionEn(e.target.value)}
        required
      />
      <input
        className="border rounded px-2 py-1"
        placeholder={t(`productLangAddPage.productLangForm.descriptionUa`)}
        value={descriptionUa}
        onChange={(e) => setDescriptionUa(e.target.value)}
        required
      />
      <input
        className="border rounded px-2 py-1"
        placeholder={t(`productLangAddPage.productLangForm.price`)}
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder={t(`productLangAddPage.productLangForm.image`)}
        type="url"
        className="border rounded px-2 py-1"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2 mt-2"
      >
        {t(`productLangAddPage.productLangForm.submit`)}
      </button>
    </form>
  );
}
