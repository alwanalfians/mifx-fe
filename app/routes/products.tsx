import type { Route } from "./+types/products";
import { Products } from "../src/pages/products";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Products" }];
}

export default function Main() {
  return <Products />;
}
