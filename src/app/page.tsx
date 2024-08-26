import { PRODUCTS } from "@/products";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      {Object.entries(PRODUCTS).map(([category, products]) => (
        <div key={category} className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">{category}</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.handle}
                href={`/products/${product.handle}`}
                className="flex flex-col gap-2 p-4 border rounded-md hover:shadow-md"
              >
                <Image
                  alt={product.images[0].alt}
                  src={product.images[0].src}
                  width={640}
                  height={800}
                />
                <h3 className="text-lg font-semibold">{product.displayName}</h3>
                <p className="text-sm">{`$${product.variants[0].price}`}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
