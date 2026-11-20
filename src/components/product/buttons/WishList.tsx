"use client";

import AppIcon from "@/components/ui/AppIcon";
import { animateFlyToTarget } from "@/utils/flyAnimations";
import { useState } from "react";
import type { cartItem } from "@/data/cartItem";
import { showTooltip } from "@/components/ui/ToolTip";
import { getStorage, setStorage } from "@/utils/storage";
type productProps= {
    product : cartItem;
    sizeElementId?: string;
    quantityElementId?: string;
}
export function WishList({ product,sizeElementId,quantityElementId }: productProps){
  const [isWishlisted, setIsWishlisted] = useState(false);    
  const handleAddToWishlist = async () => {
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
    const wish = await getStorage<cartItem[]>("wish", []);
    wish.push(product); 
    await setStorage ("wish", wish);
    animateFlyToTarget("product-image", "cart-wish");
    setIsWishlisted(true);
  };

    return(
        <button type="button"
        className="flex flex-1 cursor-pointer items-center justify-center gap-2 border border-gray-300 py-3 animate-press animate-icon-scale"
        onClick={() =>  handleAddToWishlist()  }
        >
        <span className="animated-icon">  <AppIcon name={isWishlisted ? "mdi:heart" : "mdi:heart-outline"} className={`h-5 w-5 ${isWishlisted ? "text-red-500" : ""}`}/></span> {isWishlisted ? 'Wishlisted': 'WishList'}
        </button>
    )
}