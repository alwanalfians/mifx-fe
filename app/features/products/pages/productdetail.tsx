import { useParams } from "react-router";
import { DetailProductCard } from "~/features/products/components/Card";
import { useProductDetail } from "~/features/products/hooks/useProducts";
import type { IProduct } from "../types";

export function ProductDetail() {
  const { id } = useParams();

  const { data, isLoading, error } = useProductDetail(id ?? "");

  return (
    <div className="items-center justify-center space-y-4">
      <DetailProductCard
        data={data as IProduct}
        isLoading={isLoading}
        isError={error}
      />
    </div>
  );
}
