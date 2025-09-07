import { useGetUserCartQuery } from "../../entities/cartItem/api/cartItemApi";
import { CartItemCardWithActions } from "../CartItemCardWithActions";

export default function CartList({ userId }) {
  const { data: cart = {}, isLoading } = useGetUserCartQuery(userId);

  const items = Object.entries(cart).filter(([_, item]) => item);

  const total = items.reduce(
    (sum, [_, item]) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  if (isLoading) return <div>Завантаження...</div>;

  return (
    <div>
      {items.length === 0 && <div>Кошик порожній</div>}
      {items.length > 0 && (
        <div className="cartListDescription">
          <p>
            Будьте пильні при додаванні товара - порядок відображення карток
            змінюється !!!
          </p>
          <p>Звертайте увагу на назву товару</p>
        </div>
      )}
      {/* //-Object.entries(cart)=...[
//   ["123", {id: "123", title: "Товар 1", price: 100, quantity: 2}],
//   ["456", {id: "456", title: "Товар 2", price: 200, quantity: 1}]
// ] */}
      <ul className="productsList">
        {items.map(([productId, itemObj]) => (
          <li key={productId}>
            <CartItemCardWithActions
              key={productId}
              userId={userId}
              productId={productId}
              item={itemObj}
            />
          </li>
        ))}
      </ul>
      {items.length > 0 && (
        <div style={{ marginTop: 16, fontWeight: "bold" }}>
          Загальна вартість: {total}
        </div>
      )}
    </div>
  );
}
