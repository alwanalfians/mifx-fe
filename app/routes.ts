import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/landing.tsx"),
  layout("./features/products/productLayout.tsx", [
    route("products", "routes/productList.tsx"),
    route("products/:id", "routes/productDetail.tsx"),
  ]),
] satisfies RouteConfig;
