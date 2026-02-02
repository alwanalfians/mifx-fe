import { Outlet } from "react-router";
import { Header } from "./components/Header";

const ProductLayout = () => {
  return (
    <main className="grid justify-center bg-gray-100 space-y-4">
      <Header />
      <Outlet />
    </main>
  );
};

export default ProductLayout;
