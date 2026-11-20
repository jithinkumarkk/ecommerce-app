import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 py-20">
      <h1 className="text-2xl font-bold">
        Product Not Found
      </h1>

      <p className="text-gray-500">
        The requested product is unavailable.
      </p>

      <Link href="/" className="bg-black px-6 py-3 text-white!">
        Continue Shopping
      </Link>
    </div>
  );
}