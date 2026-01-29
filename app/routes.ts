import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix("products", [
    index("routes/products.tsx"),
    route(":id", "routes/detailProduct.tsx"),
  ]),
] satisfies RouteConfig;
