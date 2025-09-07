export default function CartItemCard({ item, children }) {
  const quantity = item.quantity || 1;
  const total = (item.price || 0) * quantity;
  return (
    <div className="productCardBody">
      <div>{item.name}</div>
      <div>Ціна: {item.price}</div>
      <div>Сума: {total}</div>
      {children}
    </div>
  );
}
