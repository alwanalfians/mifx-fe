import { Header } from "~/components/Header";
import { ProductList } from "~/components/ProductList";
import { useProducts } from "~/hooks/useProducts";

export function Products() {
  const { data, isLoading, error } = useProducts();

  return (
    <div className="items-center justify-center space-y-4">
      <Header />
      <ProductList data={data || []} isLoading={isLoading} isError={error} />
    </div>
  );
}
