// import { useAddOrIncreaseToCartMutation } from "../../../entities/cartItem/api/cartItemApi";

// export default function CartIncreaseButton({ userId, productId, product }) {
//   const [increase] = useAddOrIncreaseToCartMutation();
//   const handlerClick = () => {
//     if (!userId || !productId || !product) return;
//     increase({ userId, productId, product: { ...product } });
//   };
//   return (
//     <button
//       className="px-2 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium"
//       onClick={handlerClick}
//     >
//       +
//     </button>
//   );
// }
import { useAddOrIncreaseToCartMutation } from "../../../entities/cartItem/api/cartItemApi";

export default function CartIncreaseButton({ userId, productId, product }) {
  const [increase] = useAddOrIncreaseToCartMutation();
  return (
    <button
      className="px-2 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium"
      onClick={() => increase({ userId, productId, product })}
    >
      +
    </button>
  );
}
