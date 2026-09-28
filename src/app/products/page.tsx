import type { Metadata } from "next";
import ProductsHero from "@/components/products/ProductsHero";
import ProductGrid from "@/components/products/ProductGrid";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Almapuro Agri's range of farm-fresh, sun-dried, chemical-free powders and blends — straight from our farms to your home.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductGrid />
    </>
  );
}
