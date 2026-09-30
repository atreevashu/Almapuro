import Image from "next/image";
import { qualityHero } from "@/data/quality";

export default function QualityHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/products-hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,243,238,1)_0%,rgba(247,243,238,1)_19.1%,rgba(247,243,238,0.6)_45.55%,rgba(247,243,238,0)_72.16%)]" />

      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <h1 className="max-w-xl whitespace-pre-line font-display text-4xl font-bold leading-[1.2] text-[#1a3a1e] sm:text-5xl lg:max-w-2xl lg:text-[48px] lg:leading-[58px]">
          {qualityHero.heading}
        </h1>
        <p className="mt-5 max-w-xl font-lato text-lg font-bold leading-snug text-[#4a5565] sm:text-xl lg:max-w-2xl lg:text-[21px] lg:leading-[29px]">
          {qualityHero.paragraph}
        </p>
        <p className="mt-5 font-display text-xl font-semibold text-[#c47c2a] sm:text-2xl lg:text-[26px]">
          {qualityHero.tagline}
        </p>
      </div>
    </section>
  );
}
