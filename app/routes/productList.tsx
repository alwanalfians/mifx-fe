import type { Route } from "./+types/productList";
import { ProductsList } from "../features/products/pages/productlist";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Products" }];
}

export default function Main() {
  return <ProductsList />;
}
