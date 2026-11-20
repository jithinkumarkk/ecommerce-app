"use client";

import AppIcon from "@/components/ui/AppIcon";
import { animateFlyToTarget } from "@/utils/flyAnimations"; 
import { getStorage, setStorage } from "@/utils/storage"; 
import type { cartItem } from "@/data/cartItem";
import { showTooltip } from "@/components/ui/ToolTip";
type productProps = {
  product: cartItem;
  sizeElementId?: string;
  quantityElementId?: string;
};
export function AddTocart({ product,sizeElementId,  quantityElementId }: productProps) {
  
   
  const handleAddToCart = async () => {
    if (!product.size) {
      if (sizeElementId) {
        showTooltip(sizeElementId, "Please select a size");
      }
      return;
    }
    if (!Number.isInteger(product.quantity) || product.quantity < 1) {
      if (quantityElementId) {
        showTooltip(quantityElementId, "Invalid quantity");
      }
      return;
    }
    const cart = await getStorage<cartItem[]>("cart", []);
    cart.push(product); 
    await setStorage("cart", cart);
    animateFlyToTarget("product-image", "cart-icon");
  };

  return (
    <button type="button"
        className="flex flex-1 cursor-pointer items-center justify-center gap-2 bg-slate-900 py-3 text-white animate-press animate-icon "
        onClick={async() => handleAddToCart()  }>
       <span className="animated-icon">  <AppIcon name="lucide:shopping-cart" className="h-5 w-5" />  </span> Add to Cart
    </button>
  );
}
