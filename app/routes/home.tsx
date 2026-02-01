import type { Route } from "./+types/home";
import { Home } from "../pages/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Welcome" }];
}

export default function Main() {
  return <Home />;
}
