import CartItemCard from "@/entities/cartItem/ui/CartItemCard";
import {
  CartDecreaseButton,
  CartIncreaseButton,
  CartRemoveButton,
} from "@/features/cart";

export function CartItemCardWithActions({ userId, productId, item }) {
  return (
    <CartItemCard item={item}>
      <div className="actionBtnBox">
        <CartDecreaseButton
          userId={userId}
          productId={productId}
          product={{ ...item }}
        />
        <span>{item.quantity || 1}</span>
        <CartIncreaseButton
          userId={userId}
          productId={productId}
          product={{ ...item }}
        />
        <CartRemoveButton userId={userId} productId={productId} />
      </div>
    </CartItemCard>
  );
}
