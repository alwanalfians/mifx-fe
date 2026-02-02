import type { IProduct } from "../types";
import { ProductCard } from "./ProductCard";

interface IProductList {
  data: IProduct[];
  isLoading?: boolean;
  isError?: Error | null;
}

export function ProductList({ data, isLoading, isError }: IProductList) {
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </div>
  );
}
