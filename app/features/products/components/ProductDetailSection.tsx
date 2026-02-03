import "@smastrom/react-rating/style.css";

import { Carousel } from "./Carousel";
import type { IProduct } from "../types";
import { ProductDetail } from "./ProductDetail";
import { Loading } from "~/components/Loading";
import { Error } from "~/components/Error";

interface IDetailProductCard {
  data: IProduct;
  isLoading?: boolean;
  error?: Error | null;
}

export function ProductDetailSection({
  data,
  isLoading,
  error,
}: IDetailProductCard) {
  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="grid grid-cols-12 gap-12 max-w-2xl justify-center rounded-lg shadow-md p-8 px-12 border border-gray-200 bg-white">
      <div className="col-span-12 lg:col-span-7">
        <Carousel listImage={data.images} />
      </div>
      <div className="col-span-12 lg:col-span-5">
        <ProductDetail data={data} />
      </div>
    </div>
  );
}
