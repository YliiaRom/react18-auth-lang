import { useGetAllProductsQuery } from "@/entities/product/api/productApi";
import { ProductCardWithActions } from "../ProductCardWithActions";

export default function ProductsList({ user, role }) {
  const { data: products = [], isLoading } = useGetAllProductsQuery();

  if (isLoading)
    return (
      <div className="text-center text-lg text-slate-500 py-8">
        Завантаження...
      </div>
    );

  return (
    <div className="productsList">
      {products.map((p) => (
        <ProductCardWithActions
          key={p.id}
          product={p}
          user={user}
          role={role}
        />
      ))}
    </div>
  );
}
