"use client";

import { useEffect, useState } from "react";
import { getStorage } from "@/utils/storage";

type ShoppingCountProps = {
  type: "cart" | "wishlist";
};

export default function ShoppingCount({  type }: ShoppingCountProps) {

  const [count, setCount] = useState(0);

  useEffect(() => {

    const updateCount = async () => {
      const items = await getStorage< { quantity: number }[]  >(type, []);

      setCount(
        type === "cart"
          ? items.reduce((total, item) => total + item.quantity, 0)
          : items.length
      );
    };

    updateCount();

    window.addEventListener("storage-updated", updateCount);
    window.addEventListener("storage", updateCount);
    window.addEventListener("focus", updateCount);  
    return () => {
      window.removeEventListener("storage-updated", updateCount);
      window.removeEventListener("storage", updateCount);
      window.removeEventListener("focus", updateCount); 
    };

  }, [type]);

  if (count === 0) return null;

  return (
    <span className="absolute -right-2 -top-2 flex min-w-5 h-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs text-white">
      {count}
    </span>
  );
}