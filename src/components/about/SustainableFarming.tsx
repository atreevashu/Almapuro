import Image from "next/image";
import Link from "next/link";
import { sustainableFarming } from "@/data/about";

const iconMap: Record<string, string> = {
  farmer: "/icons/icon-about-farmer.svg",
  "leaf-badge": "/icons/icon-about-natural-produce.svg",
  "hand-holding-leaves": "/icons/icon-about-hand-leaves.svg",
  world: "/icons/icon-about-world.svg",
};

export default function SustainableFarming() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={sustainableFarming.bg}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative flex flex-col gap-10 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-20 lg:py-20 xl:pl-24 xl:pr-16">
        <div className="max-w-xl">
          <div className="flex items-center gap-2">
            <span className="font-lato text-xs font-bold uppercase tracking-wide text-white">
              {sustainableFarming.label}
            </span>
            <span className="h-px w-10 bg-white/35" />
          </div>
          <h2 className="mt-4 whitespace-pre-line font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[48px] lg:leading-[60px]">
            {sustainableFarming.heading}
          </h2>
          <p className="mt-5 max-w-md font-lato text-base font-bold leading-[26px] text-white/75">
            {sustainableFarming.paragraph}
          </p>
          <Link
            href={sustainableFarming.cta.href}
            className="mt-8 inline-flex items-center gap-2 rounded bg-[#c8a84b] px-6 py-3 font-lato text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#b89638]"
          >
            {sustainableFarming.cta.label}
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
              <path d="M3 8H12" stroke="white" strokeWidth="1.67" strokeLinecap="round" />
              <path d="M8 3L13 8L8 13" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="grid w-full grid-cols-2 gap-4 sm:max-w-xl lg:w-[44%]">
          {sustainableFarming.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-[28px]"
            >
              <img src={iconMap[stat.icon]} alt="" className="h-8 w-auto shrink-0" />
              <div className="flex flex-col gap-2">
                <p className="font-display text-2xl font-bold leading-[28px] text-white lg:text-[28px]">
                  {stat.value}
                </p>
                <p className="font-lato text-xs font-bold leading-4 text-white/70">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
