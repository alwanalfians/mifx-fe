import type { Route } from "./+types/main";
import { DetailProduct } from "../src/pages/detailProduct";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Products" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Main() {
  return <DetailProduct />;
}
