import Image from "next/image";
import Link from "next/link";
import { qualityCta } from "@/data/quality";

export default function QualityCtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <Image src={qualityCta.bg} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(28,61,46,0.7)_0%,rgba(28,61,46,0.7)_17.24%,rgba(75,163,123,0)_64.5%)]" />

      <div className="container-page relative flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between sm:py-16">
        <div>
          <h2 className="whitespace-pre-line font-display text-3xl font-normal leading-[1.15] text-white sm:text-4xl lg:text-[36px]">
            {qualityCta.heading}
          </h2>
          <p className="mt-3 max-w-xs font-sans text-base font-normal text-white">
            {qualityCta.subheading}
          </p>
        </div>
        <Link
          href={qualityCta.cta.href}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#c8973a] px-6 py-3 font-sans text-base font-semibold tracking-wide text-white transition-colors hover:bg-[#b0862f]"
        >
          {qualityCta.cta.label}
          <img src="/icons/icon-cta-arrow.svg" alt="" className="h-[9.6px] w-[11.2px]" />
        </Link>
      </div>
    </section>
  );
}
