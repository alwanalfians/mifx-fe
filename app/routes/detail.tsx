import type { Route } from "./+types/detail";
import { Detail } from "../pages/detail";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Detail Product" }];
}

export default function Main() {
  return <Detail />;
}
