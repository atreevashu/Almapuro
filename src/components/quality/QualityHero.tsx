import { qualityHero } from "@/data/quality";

export default function QualityHero() {
  return (
    <section className="bg-[linear-gradient(135deg,#f0f5ee_0%,#e8f0e5_50%,#d4e8d0_100%)]">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <h1 className="max-w-xl whitespace-pre-line font-display text-4xl font-bold leading-[1.2] text-[#112519] sm:text-5xl lg:max-w-2xl lg:text-[48px] lg:leading-[58px]">
          {qualityHero.heading}
        </h1>
        <p className="mt-5 max-w-xl font-lato text-lg font-bold leading-snug text-[#112519]/70 sm:text-xl lg:max-w-2xl lg:text-[21px] lg:leading-[29px]">
          {qualityHero.paragraph}
        </p>
        <p className="mt-5 font-display text-xl font-semibold text-[#c47c2a] sm:text-2xl lg:text-[26px]">
          {qualityHero.tagline}
        </p>
      </div>
    </section>
  );
}
