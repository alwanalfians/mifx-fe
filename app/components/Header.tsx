import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "~/features/cart/contexts/Cart";

export function Header() {
  const { cartCount } = useCart();

  return (
    <div className="flex justify-between lg:min-w-2xl rounded-lg shadow-md p-8 px-12 border border-gray-200 bg-white">
      <a href="/products">
        <p className="font-extrabold text-xl">iSneakers</p>
      </a>
      <div>
        <FontAwesomeIcon icon={faCartFlatbed} /> {cartCount} Items
      </div>
    </div>
  );
}
