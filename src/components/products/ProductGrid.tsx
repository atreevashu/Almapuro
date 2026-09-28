import { products } from "@/data/products";
import ProductToolbar from "@/components/products/ProductToolbar";
import ProductCard from "@/components/products/ProductCard";

export default function ProductGrid() {
  return (
    <section className="bg-[#fafaf8]">
      <div className="container-page py-12 lg:py-16">
        <ProductToolbar />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
