import { Suspense } from "react";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

// Read the dynamic product ID
async function ProductDetails({ params }: ProductPageProps) {
  const { id } = await params;
  return <div>Product ID: {id}</div>;
}

// Main page
export default function ProductPage({ params }: ProductPageProps) {
  return (
    <Suspense fallback={<div>Loading product...</div>}>
      <ProductDetails params={params} />
    </Suspense>
  );
}
