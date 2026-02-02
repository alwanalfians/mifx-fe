import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating, Star } from "@smastrom/react-rating";
import type { IProduct } from "~/types";

interface IDetailProduct {
  data: IProduct;
}

export function ProductDetail({ data }: IDetailProduct) {
  return (
    <div className="flex flex-col space-y-4 pt-6">
      <div className="border-b-2 border-gray-200  pb-4">
        <div className="text-red-500 text-[8px] font-bold mb-1">
          {data.badge}
        </div>
        <div className="space-y-2">
          <div className="font-bold text-md">{data.name}</div>
          <div className="flex text-[10px] font-bold text-gray-400 gap-1">
            <Rating
              style={{ maxWidth: "60px" }}
              value={data.rating}
              halfFillMode="svg"
              itemStyles={{
                itemShapes: Star,
                activeFillColor: "#ffb700",
                inactiveFillColor: "var(--color-gray-300)",
              }}
              readOnly
            />
            <p>({0} reviews)</p>
          </div>
          <div className="font-bold text-lg">${data.price}</div>
        </div>
      </div>
      <div className="flex gap-2 text-[8px] font-bold">
        <button className="bg-yellow-500 py-2 min-w-24 rounded-md shadow-md cursor-pointer hover:bg-yellow-300">
          <FontAwesomeIcon icon={faCartFlatbed} /> Add To Cart
        </button>
        <button className="bg-green-600 py-2 text-white min-w-24 rounded-md shadow-md cursor-pointer hover:bg-green-400">
          Buy Now
        </button>
      </div>
    </div>
  );
}
