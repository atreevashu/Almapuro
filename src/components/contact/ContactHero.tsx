import Image from "next/image";
import { contactHero } from "@/data/contact";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/contact-hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,243,238,0.95)_0%,rgba(247,243,238,0.60)_44.2%,rgba(247,243,238,0)_66.7%)]" />

      <div className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24 xl:pl-24">
        <div className="max-w-xl lg:max-w-2xl">
          <h1 className="whitespace-pre-line font-display text-4xl font-bold leading-[1.28] text-[#112519] sm:text-5xl lg:text-[48px] lg:leading-[62px]">
            {contactHero.heading}
          </h1>
          <p className="mt-5 font-lato text-lg font-bold leading-snug text-[#112519] sm:text-xl lg:text-[21px] lg:leading-[29px]">
            {contactHero.paragraph}
          </p>
          <p className="mt-5 font-display text-xl font-semibold text-[#c47c2a] sm:text-2xl lg:text-[26px]">
            {contactHero.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
