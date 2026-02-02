import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";
import type { IProduct, IProductListResponse } from "../types";

export const useProducts = (searchQuery: string) => {
  return useQuery<IProductListResponse, Error, IProduct[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
    select: (res) => {
      return searchQuery.length < 1
        ? res.data
        : res.data.filter((object) =>
            object.name.toLowerCase().includes(searchQuery.toLowerCase()),
          );
    },
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
