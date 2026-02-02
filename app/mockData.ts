import type { IImage, IProduct } from "./features/products/types";

export const mockListImage: IImage[] = [
  {
    id: "1w",
    url: "https://fe-technical-interview.dxtr.asia/assets/adidas.jpg",
  },
  {
    id: "2q",
    url: "https://fe-technical-interview.dxtr.asia/assets/asics.jpg",
  },
  {
    id: "3a",
    url: "https://fe-technical-interview.dxtr.asia/assets/nb.jpg",
  },
  {
    id: "4f",
    url: "https://fe-technical-interview.dxtr.asia/assets/nike.jpg",
  },
  {
    id: "5g",
    url: "https://fe-technical-interview.dxtr.asia/assets/puma.jpg",
  },
  {
    id: "6r",
    url: "https://fe-technical-interview.dxtr.asia/assets/converse.jpg",
  },
  {
    id: "7w",
    url: "https://fe-technical-interview.dxtr.asia/assets/adidas.jpg",
  },
  {
    id: "8q",
    url: "https://fe-technical-interview.dxtr.asia/assets/asics.jpg",
  },
  {
    id: "9a",
    url: "https://fe-technical-interview.dxtr.asia/assets/nb.jpg",
  },
];

export const mockDetailProduct: IProduct = {
  id: "var-001",
  name: "Adidas",
  price: 16.19,
  rating: 3.5,
  badge: "SALE",
  images: [
    {
      id: "img-001",
      url: "https://fe-technical-interview.dxtr.asia/assets/adidas.jpg",
    },
  ],
};
