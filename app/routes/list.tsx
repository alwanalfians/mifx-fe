import type { Route } from "./+types/list";
import { Products } from "../pages/list";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Products" }];
}

export default function Main() {
  return <Products />;
}
