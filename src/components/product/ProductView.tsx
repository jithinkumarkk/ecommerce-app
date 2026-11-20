"use client";

import type { productItem } from "@/data/products";
import { navBarMenus } from "@/data/menu";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AppIcon from "@/components/ui/AppIcon";
import ProductGallery from "./ProductGallery"; 
import { WishList } from "./buttons/WishList";
import { AddTocart } from "./buttons/AddtoCart";
import { useState } from "react";
import { QuantityInput } from "./buttons/QuantityInput";
import type { cartItem } from "@/data/cartItem"; 
import { hideTooltip } from "../ui/ToolTip";
 
type ProductViewProps = {
  product: productItem;
};

export default function ProductView({
  product,
}: ProductViewProps) {

  
  
  // Find breadcrumb categories from existing MegaMenu
  const departmentPath = "/" + product.categoryPath.split("/")[1];
  const department     = navBarMenus.find((menu) => "/" + menu.menu_Name.toLowerCase() === departmentPath);
  const category       = department?.subMenu?.find((sub) => sub.items?.some((item) => item.item_Path === product.categoryPath));
  const categoryItem   = category?.items?.find((item) => item.item_Path === product.categoryPath);

  const [productSize,setProductSize]= useState<string>('');
  const [productQuantity,setProductQuantity]= useState<number>(1);

 
  const selectedProduct: cartItem = {
    product: product,
    size: productSize,
    quantity: productQuantity
  };
  
  

  return (
    <div className="mx-auto w-11/12 py-10"> 
      <div className="mt-5 flex flex-col items-start gap-8 lg:flex-row">

        {/* LEFT SECTION - Product Gallery */}
        <div className="w-full lg:sticky lg:top-41 lg:w-1/2">

           {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { name: "Home", path: "/" },
          ...(department
            ? [{ name: department.menu_Name, path: departmentPath }]
            : []),
          ...(category
            ? [{
                name: category.subMenu_Name,
                path: category.subMenu_Path,
              }]
            : []),
          ...(categoryItem
            ? [{
                name: categoryItem.item_Name,
                path: categoryItem.item_Path,
              }]
            : []),
          { name: product.name },
        ]} 
        className="pb-10"
      />

          <ProductGallery
            productId={product.id}
            images={product.images.length ? product.images : [product.image]}
            name={product.name}
          />
        </div>

        {/* RIGHT SECTION - Product Information */}
        <div className="flex w-full flex-col gap-5 lg:w-1/2 pt-14">

          {/* Product Name and Brand */}
          <div>
            <h1 className="text-xl font-semibold">
              {product.brand}
            </h1>

            <p className="mt-1 text-gray-500">
              {product.name}
            </p>

            {/* Rating */}
            <div className="mt-3 flex items-center gap-2 text-sm">
              <span>{product.rating}</span>

              <AppIcon
                name="mdi:star"
                className="h-5 w-5 text-green-600"
              />

              <span className="text-gray-500">
                | {product.ratingCount} Ratings
              </span>
            </div>
          </div>

          {/* Product Price */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-2xl font-bold">
                ₹{product.price}
              </span>

              <span className="text-gray-400 line-through">
                ₹{product.originalPrice}
              </span>

              <span className="font-semibold text-green-600">
                {product.discount}% OFF
              </span>
            </div>
          </div>

          {/* Size Selection */}
          <div className="border-t border-gray-200 pt-4">
            <h3 className="mb-3 font-semibold">
              Select Size
            </h3>

            <div className="flex flex-wrap gap-3 justify-between"  > {/* Event Delegation - attaching one event handler to the parent container instead of attaching a handler to every child element. */}
              <div className="flex flex-wrap gap-3 p-1" id="product-size"  onChange={(e) => { setProductSize((e.target as HTMLInputElement).value); hideTooltip("product-size");  }}>
                 
                {product.sizes.map((size) => (
                  <label key={size.name}>
                    <input
                      type="radio"
                      name="product-size"
                      value={size.name}
                      disabled={size.stock === 0}
                      className="peer sr-only"
                    />

                    <span className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-gray-300 peer-checked:border-black peer-checked:bg-black peer-checked:text-white peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100 peer-disabled:text-gray-400 peer-disabled:line-through">
                      {size.name}
                    </span>
                  </label>
                ))}  
                
              </div>
              
              <QuantityInput  id="product-quantity" quantity={productQuantity} setProductQuantity={setProductQuantity} />
            </div>
          </div>

          {/* Wishlist and Add to Bag */}
          <div className="flex gap-3">
             <WishList product={selectedProduct} sizeElementId="product-size"  quantityElementId="product-quantity"  />
             <AddTocart product={selectedProduct} sizeElementId="product-size"  quantityElementId="product-quantity" />  
          </div>

          {/* Delivery Information */}
          <div className="border-t border-gray-200 pt-5">
            <h3 className="mb-3 font-semibold">
              Select Delivery Location
            </h3>

            <div className="flex border border-gray-300">
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                placeholder="Enter Pincode"
                className="min-w-0 flex-1 p-3 outline-none"
              />

              <button
                type="button"
                className="px-4 font-semibold text-rose-700"
              >
                Check
              </button>
            </div>

            <ul className="mt-4 space-y-3 text-sm">
              {product.delivery.freeDelivery && (
                <li className="flex items-center gap-2">
                  <AppIcon name="lucide:truck" />
                  Free Delivery
                </li>
              )}

              {product.delivery.cashOnDelivery && (
                <li className="flex items-center gap-2">
                  <AppIcon name="lucide:banknote" />
                  Cash on Delivery Available
                </li>
              )}

              {product.delivery.returnDays > 0 && (
                <li className="flex items-center gap-2">
                  <AppIcon name="lucide:refresh-cw" />
                  {product.delivery.returnDays} Days Return
                </li>
              )}

              {product.delivery.exchangeAvailable && (
                <li className="flex items-center gap-2">
                  <AppIcon name="lucide:repeat" />
                  Exchange Available
                </li>
              )}
            </ul>
          </div>

          {/* Coupons */}
          {product.coupons.length > 0 && (
            <div className="border-t border-gray-200 pt-5">
              <h3 className="mb-3 font-semibold">
                Coupons
              </h3>

              <div className="flex flex-wrap gap-3">
                {product.coupons.map((coupon) => (
                  <div
                    key={coupon.id}
                    className="flex-1 border border-dashed border-gray-300 p-4"
                  >
                    <h4 className="font-bold text-rose-700">
                      {coupon.title}
                    </h4>

                    <p className="mt-2 text-sm text-gray-500">
                      {coupon.description}
                    </p>

                    <div className="mt-3 bg-gray-100 p-2 text-center text-sm font-semibold">
                      {coupon.code}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Product Information */}
          <div className="border-t border-gray-200 pt-5">
            <h3 className="mb-3 font-semibold">
              Product Information
            </h3>

            <details className="border-b border-gray-200 py-4">
              <summary className="cursor-pointer font-medium">
                Product Details
              </summary>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {product.description}
              </p>
            </details>

            {/* Specifications */}
            <details className="border-b border-gray-200 py-4">
              <summary className="cursor-pointer font-medium">
                Know Your Product
              </summary>

              <div className="mt-4 grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(
                  ([key, value]) => (
                    <div key={key}>
                      <p className="text-xs capitalize text-gray-500">
                        {key.replace(/([A-Z])/g, " $1")}
                      </p>

                      <p className="text-sm font-medium">
                        {value}
                      </p>
                    </div>
                  )
                )}
              </div>
            </details>

            {/* Return Policy */}
            <details className="border-b border-gray-200 py-4">
              <summary className="cursor-pointer font-medium">
                Return and Exchange Policy
              </summary>

              <p className="mt-3 text-sm text-gray-600">
                {product.delivery.returnDays > 0
                  ? `${product.delivery.returnDays} days return available.`
                  : "Return unavailable."}
              </p>

              <p className="mt-2 text-sm text-gray-600">
                {product.delivery.exchangeAvailable
                  ? "Exchange available."
                  : "Exchange unavailable."}
              </p>
            </details>
          </div>

          {/* Ratings and Reviews */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">
              Ratings & Reviews
            </h3>

            <div className="flex items-center justify-between bg-gray-50 p-4">
              <span className="flex text-2xl font-bold align-middle justify-center">
                {product.rating}  
                <AppIcon  name="mdi:star" className="w-5 h-5 m-2" />

              </span>

              <span className="text-sm">
                {product.ratingCount} Ratings
              </span>

              <span className="text-sm">
                {product.reviewCount} Reviews
              </span>
            </div>

            {product.reviews.map((review) => (
              <div
                key={review.id}
                className="space-y-2 border-b border-gray-200 py-4 last:border-none"
              >
                <div className="flex justify-between">
                  <span className="font-medium">
                    {review.customerName}
                  </span>

                  <span className="flex align-middle justify-center">{review.rating}  <AppIcon  name="mdi:star" className="w-3 h-3 m-1.5" /></span>
                </div>
                {(review.comment) &&(
                    <p className="text-sm text-gray-600">
                    {review.comment}
                    </p>
                )}
               
              </div>
            ))}
          </div>

          {/* Brand Information */}
          <div className="border-t border-gray-200 py-5">
            <h3 className="mb-3 font-semibold">
              About {product.brand}
            </h3>

            <p className="text-sm leading-6 text-gray-600">
              {product.brandInformation.description}
            </p>
          </div>

        </div>
        
      </div>
    </div>
  );
}
