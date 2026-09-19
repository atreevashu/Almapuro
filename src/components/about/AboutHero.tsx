import Image from "next/image";
import { aboutHero } from "@/data/about";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/about-hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f0e8_0%,#f5f0e8_32.6%,rgba(234,229,222,0)_87.5%)]" />

      <div className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24 xl:pl-24">
        <div className="max-w-xl lg:max-w-2xl">
          <h1 className="whitespace-pre-line font-display text-4xl font-bold leading-[1.28] text-[#112519] sm:text-5xl lg:text-[48px] lg:leading-[62px]">
            {aboutHero.heading}
          </h1>
          <p className="mt-5 font-lato text-lg font-bold leading-snug text-[#112519]/70 sm:text-xl lg:text-[21px] lg:leading-[29px]">
            {aboutHero.paragraph}
          </p>
          <p className="mt-5 font-display text-xl font-semibold text-[#c47c2a] sm:text-2xl lg:text-[26px]">
            {aboutHero.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
