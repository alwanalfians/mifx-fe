import type { Route } from "./+types/productDetail";
import { ProductDetail } from "../features/products/pages/productdetail";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Detail Product" }];
}

export default function Main() {
  return <ProductDetail />;
}
