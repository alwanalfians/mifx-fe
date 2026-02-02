import { useState } from "react";
import { ProductList } from "~/features/products/components/ProductList";
import { useProducts } from "~/features/products/hooks/useProducts";

export function ProductsList() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, error } = useProducts(searchQuery);

  return (
    <div className="items-center justify-center space-y-4">
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search products..."
        className="p-3 border border-gray-300 bg-white w-full rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <ProductList data={data || []} isLoading={isLoading} isError={error} />
    </div>
  );
}
