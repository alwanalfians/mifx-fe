import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating, Star } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Carousel } from "./Carousel";
import { mockDetailProduct, mockListImage } from "~/mockData";
import { DetailProduct } from "./DetailProduct";

export function DetailProductCard() {
  return (
    <main className="flex w-auto rounded-lg shadow-md p-8 px-12 border border-gray-200 bg-white gap-12">
      <Carousel listImage={mockListImage} />
      <DetailProduct data={mockDetailProduct} />
    </main>
  );
}
