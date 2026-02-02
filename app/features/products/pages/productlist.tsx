import { ProductList } from "~/features/products/components/ProductList";
import { useProducts } from "~/features/products/hooks/useProducts";

export function ProductsList() {
  const { data, isLoading, error } = useProducts();

  return (
    <div className="items-center justify-center space-y-4">
      <ProductList data={data || []} isLoading={isLoading} isError={error} />
    </div>
  );
}
