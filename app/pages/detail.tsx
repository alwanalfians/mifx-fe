import { useParams } from "react-router";
import { DetailProductCard } from "~/components/DetailProductCard";
import { Header } from "~/components/Header";
import { useProductDetail } from "~/hooks/useProducts";
import type { IProduct } from "~/types";

export function Detail() {
  const { id } = useParams();

  const { data, isLoading, error } = useProductDetail(id ?? "");

  return (
    <div className="items-center justify-center space-y-4">
      <Header />
      <DetailProductCard
        data={data as IProduct}
        isLoading={isLoading}
        isError={error}
      />
    </div>
  );
}
