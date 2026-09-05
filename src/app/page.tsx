import Hero from "@/components/home/Hero";
import CategoryCarousel from "@/components/home/CategoryCarousel";
import MoringaBenefits from "@/components/home/MoringaBenefits";
import BestSellers from "@/components/home/BestSellers";
import CtaStrip from "@/components/home/CtaStrip";
import ServiceStrip from "@/components/home/ServiceStrip";
import { bestSellers, siteUrl } from "@/data/site";

const productListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: bestSellers.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: product.name,
      image: `${siteUrl}${product.image}`,
      url: `${siteUrl}/shop/${product.slug}`,
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: product.price,
        availability: "https://schema.org/InStock",
      },
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListJsonLd) }}
      />
      <Hero />
      <CategoryCarousel />
      <MoringaBenefits />
      <BestSellers />
      <CtaStrip />
      <ServiceStrip />
    </>
  );
}
