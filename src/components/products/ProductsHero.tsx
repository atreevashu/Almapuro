import Image from "next/image";
import { productsHero } from "@/data/products";

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={productsHero.bg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,243,238,1)_0%,rgba(247,243,238,1)_19.1%,rgba(247,243,238,0.6)_45.55%,rgba(247,243,238,0)_72.16%)]" />

      <div className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24 xl:pl-24">
        <div className="max-w-xl lg:max-w-2xl">
          <h1 className="whitespace-pre-line font-display text-4xl font-bold leading-[1.28] text-[#1a3a1e] sm:text-5xl lg:text-[48px] lg:leading-[58px]">
            {productsHero.heading}
          </h1>
          <p className="mt-5 font-lato text-lg font-bold leading-snug text-[#4a5565] sm:text-xl lg:text-[21px] lg:leading-[29px]">
            {productsHero.paragraph}
          </p>
        </div>
      </div>
    </section>
  );
}
