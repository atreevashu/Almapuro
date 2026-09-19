import Image from "next/image";
import Link from "next/link";
import { testingBanner } from "@/data/quality";

export default function TestingBanner() {
  return (
    <section className="bg-[#f9faf8]">
      <div className="container-page grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <h2 className="whitespace-pre-line font-display text-3xl font-bold leading-[1.15] text-[#1a3a1e] lg:text-[36px] lg:leading-[40px]">
            {testingBanner.heading}
          </h2>
          <div className="mt-3 flex items-center gap-2">
            <span className="h-px w-10 bg-[#ffb900]" />
            <span className="text-base leading-none">🌿</span>
          </div>
          <p className="mt-4 max-w-md font-lato text-base leading-[26px] text-[#4a5565]">
            {testingBanner.paragraph}
          </p>
          <Link
            href={testingBanner.cta.href}
            className="mt-8 inline-flex items-center rounded-full bg-[#1a3a1e] px-6 py-3 font-lato text-sm font-bold text-white transition-colors hover:bg-[#254d29]"
          >
            {testingBanner.cta.label} →
          </Link>
        </div>

        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl">
          <Image
            src={testingBanner.image}
            alt="Scientist testing product quality in a laboratory"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
