import type { Route } from "./+types/detailProduct";
import { DetailProduct } from "../src/pages/detailProduct";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Detail Product" }];
}

export default function Main() {
  return <DetailProduct />;
}
