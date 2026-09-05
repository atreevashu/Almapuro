import Image from "next/image";
import { bestSellers } from "@/data/site";

export default function BestSellers() {
  return (
    <section className="bg-white py-16">
      <div className="container-page">
        <h2 className="section-title">Our Best Sellers</h2>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6 lg:gap-4">
          {bestSellers.map((product) => (
            <div key={product.slug} className="flex h-full flex-col overflow-hidden rounded-lg border border-[#e5e7eb]">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 190px, (min-width: 640px) 30vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-3">
                <h3 className="text-center text-xs font-semibold leading-snug text-[#1e2939] sm:text-sm">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm font-bold text-ink">₹{product.price}</p>
                <p className="text-xs text-[#6a7282]">({product.unit})</p>
                <button
                  type="button"
                  className="mt-auto w-full rounded py-2 text-xs font-semibold uppercase tracking-wide text-white bg-forest transition-colors hover:bg-forest-light"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
