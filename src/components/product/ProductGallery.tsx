
"use client";

import { useState,ViewTransition } from "react";

type ProductGalleryProps = {
  productId: number;
  images: string[];
  name: string;
};

export default function ProductGallery({
  productId,
  images,
  name,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex items-start gap-4">

      {/* Thumbnail images */}
      <div className="flex w-20 shrink-0 flex-col gap-3">
        {images.map((image, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`cursor-pointer overflow-hidden border-2 ${
              selectedImage === index
                ? "border-black"
                : "border-gray-300"
            }`}
          >
            
              <img   src={image} alt={`${name} - View ${index + 1}`} className="aspect-3/4 w-full object-cover "  />
            
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="min-w-0 flex-1 border-2 border-gray-500">
        <ViewTransition name={`product-${productId}`}>
          <img src={images[selectedImage]}  alt={name}  className="aspect-3/4 w-full object-cover " />
        </ViewTransition>
      </div>

    </div>
  );
}