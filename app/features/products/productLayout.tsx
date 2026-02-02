import { Outlet } from "react-router";
import { Header } from "./components/Header";

const ProductLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ProductLayout;
