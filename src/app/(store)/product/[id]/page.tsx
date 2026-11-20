import { Suspense } from "react";
import { Products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductView from "@/components/product/ProductView";
type ProductPageProps = {
  params: Promise<{ id: string }>;
};

// Read the dynamic product ID
async function ProductDetails({ params }: ProductPageProps) {
  const { id } = await params;

  const product = Products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return <ProductView product={product} />;
}

// Main page
export default function ProductPage({ params }: ProductPageProps) {
  return (
    <Suspense fallback={<div>Loading product...</div>}>
      <ProductDetails params={params} />
    </Suspense>
  );
}
