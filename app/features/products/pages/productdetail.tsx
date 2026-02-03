import { useParams } from "react-router";
import { ProductDetailSection } from "~/features/products/components/ProductDetailSection";
import { useProductDetail } from "~/features/products/hooks/useProducts";
import type { IProduct } from "../types";
import { usePageTitle } from "~/hooks/usePageTitle";

export function ProductDetail() {
  const { id } = useParams();
  const { data, isLoading, error } = useProductDetail(id ?? "");

  usePageTitle(data?.name ?? "Product Detail");

  return (
    <div className="items-center justify-center space-y-4">
      <ProductDetailSection
        data={data as IProduct}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}
