import { Rating, Star } from "@smastrom/react-rating";
import { useNavigate } from "react-router";
import type { IProduct } from "~/types";

interface IProductCard {
  data: IProduct;
}

export function ProductCard({ data }: IProductCard) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products/" + data.id);
  };

  return (
    <div
      onClick={handleNavigate}
      className="flex flex-col w-auto rounded-lg shadow-xs border border-gray-200 bg-white cursor-pointer hover:shadow-md"
    >
      <img
        className="border border-gray-200 w-auto h-48 object-cover shadow-xs"
        src={data.images[0].url}
        alt="Product Image"
      />
      <div className="px-4 py-2 pb-4">
        <div className="text-md">{data.name}</div>
        <div className="font-bold text-md">${data.price}</div>
        <div className="flex text-xs font-bold text-gray-400 gap-1">
          <Rating
            style={{ maxWidth: "16px" }}
            value={1}
            items={1}
            halfFillMode="svg"
            itemStyles={{
              itemShapes: Star,
              activeFillColor: "#ffb700",
              inactiveFillColor: "var(--color-gray-300)",
            }}
            readOnly
          />
          <p>
            {data.rating} • {0} reviews
          </p>
        </div>
      </div>
    </div>
  );
}
