import { Outlet } from "react-router";
import { Header } from "../../components/Header";
import { Footer } from "~/components/Footer";

const ProductLayout = () => {
  return (
    <main className="grid justify-center bg-gray-100 space-y-4">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default ProductLayout;
