export type TBadge = "SALE" | "NEW" | "BESTSELLER" | "SELL";

export interface IImage {
  id: string;
  url: string;
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  rating: number;
  badge: TBadge;
  images: IImage[];
}
