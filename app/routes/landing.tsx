import type { Route } from "./+types/landing";
import { Landing } from "../features/landing/pages/landing";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Welcome" }];
}

export default function Main() {
  return <Landing />;
}
