import type { Metadata } from "next";
import CartHero from "@/components/cart/CartHero";
import CartPageClient from "@/components/cart/CartPageClient";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review the items in your cart before checkout.",
  alternates: {
    canonical: "/cart",
  },
};

export default function CartPage() {
  return (
    <>
      <CartHero />
      <CartPageClient />
    </>
  );
}
