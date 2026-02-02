import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/landing.tsx"),
  ...prefix("products", [
    index("routes/list.tsx"),
    route(":id", "routes/detail.tsx"),
  ]),
] satisfies RouteConfig;
