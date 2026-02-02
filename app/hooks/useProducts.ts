import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";
import type { IProduct, IProductListResponse } from "../types";

export const useProducts = () => {
  return useQuery<IProductListResponse, Error, IProduct[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
    select: (res) => res.data,
    staleTime: 1000 * 60 * 5,
  });
};

export const useProductDetail = (id: string) => {
  return useQuery<IProductListResponse, Error, IProduct>({
    queryKey: ["productDetail", id],
    queryFn: fetchProducts,
    select: (res) =>
      res.data.find((object) => object.id === id) ?? ({} as IProduct),
  });
};
