import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/landing.tsx"),
  ...prefix("products", [
    index("routes/productList.tsx"),
    route(":id", "routes/productDetail.tsx"),
  ]),
] satisfies RouteConfig;
