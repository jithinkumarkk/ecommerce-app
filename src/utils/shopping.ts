import { getStorage } from "@/utils/storage";
import type { productItem } from "@/data/products";
import type { cartItem } from "@/data/cartItem";

export async function getSavedShoppingItems() {
  const cart = await getStorage<cartItem[]>("cart", []);
  const wishlist = await getStorage<productItem[]>( "wishlist", [] );
  return { cart,  wishlist };
}