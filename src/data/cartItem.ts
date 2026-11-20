import type { productItem } from "./products";
export type cartItem = {
    product: productItem;
    size: string;
    quantity: number;
  };