import { Loading } from "~/components/Loading";
import type { IProduct } from "../types";
import { ProductCard } from "./ProductCard";
import { Error } from "~/components/Error";

interface IProductList {
  data: IProduct[];
  isLoading?: boolean;
  error?: Error | null;
}

export function ProductList({ data, isLoading, error }: IProductList) {
  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </div>
  );
}
