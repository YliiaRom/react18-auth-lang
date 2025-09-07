export default function ProductCard({ product, children }) {
  return (
    <div className="productCardBody">
      {product.image && (
        <img src={product.image} alt={product.name} className="productImg" />
      )}

      <h3> {product.name}</h3>

      <div>
        <span className="font-bold">{product.price}</span> грн
      </div>
      <div>{product.description}</div>
      {product.ownerName && (
        <div>Власник: {product.ownerName || product.ownerId}</div>
      )}
      {/* Місце для додаткових елементів */}
      {children}
    </div>
  );
}
