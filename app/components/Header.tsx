import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
  return (
    <div className="flex w-auto justify-between rounded-lg shadow-md p-8 px-12 border border-gray-200 bg-white">
      <a href="/">
        <p className="font-extrabold text-xl">iSneakers</p>
      </a>
      <div>
        <FontAwesomeIcon icon={faCartFlatbed} /> Items
      </div>
    </div>
  );
}
