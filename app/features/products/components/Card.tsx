import "@smastrom/react-rating/style.css";

import { Carousel } from "./Carousel";
import type { IProduct } from "../types";
import { ProductDetail } from "./ProductDetail";

interface IDetailProductCard {
  data: IProduct;
  isLoading?: boolean;
  isError?: Error | null;
}

export function DetailProductCard({
  data,
  isLoading,
  isError,
}: IDetailProductCard) {
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading detail product</p>;

  return (
    <div className="flex size-auto justify-center rounded-lg shadow-md p-8 px-12 border border-gray-200 bg-white gap-12">
      <Carousel listImage={data.images} />
      <ProductDetail data={data} />
    </div>
  );
}
