import type { Metadata } from "next";
import CheckoutHero from "@/components/checkout/CheckoutHero";
import CheckoutPageClient from "@/components/checkout/CheckoutPageClient";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your order — shipping address, payment method and review.",
  alternates: {
    canonical: "/checkout",
  },
};

export default function CheckoutPage() {
  return (
    <>
      <CheckoutHero />
      <CheckoutPageClient />
    </>
  );
}
