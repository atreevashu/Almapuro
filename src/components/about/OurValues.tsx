import Image from "next/image";
import { ourValues } from "@/data/about";

const iconMap: Record<string, string> = {
  "leaf-simple": "/icons/icon-about-leaf-simple.svg",
  recycle: "/icons/icon-about-recycle.svg",
  "check-badge": "/icons/icon-about-check-badge.svg",
  handshake: "/icons/icon-about-handshake.svg",
};

export default function OurValues() {
  return (
    <section className="bg-white">
      <div className="container-page flex flex-col gap-10 py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-20">
        <div className="lg:w-[52%]">
          <div className="flex items-center gap-2">
            <span className="font-lato text-xs font-bold uppercase tracking-wide text-[#1a3a28]">
              {ourValues.label}
            </span>
            <span className="h-px w-10 bg-[#1a3a28]/35" />
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-[#112519] sm:text-3xl lg:text-[30px] lg:leading-[36px]">
            {ourValues.heading}
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 lg:gap-x-[50px]">
            {ourValues.items.map((item) => {
              const isOutlineOnly = item.icon === "check-badge";
              return (
                <div key={item.title} className="flex flex-col items-center gap-2 text-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border border-[#1a3a28] ${
                      isOutlineOnly ? "" : "bg-white"
                    }`}
                  >
                    <img src={iconMap[item.icon]} alt="" className="h-6 w-auto" />
                  </div>
                  <p className="font-display text-base font-bold text-[#112519]">{item.title}</p>
                  <p className="whitespace-pre-line font-lato text-xs leading-[16.5px] text-[#112519]/60">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative aspect-[616/320] w-full overflow-hidden lg:w-[43%]">
          <Image
            src={ourValues.image}
            alt="Natural green powder spice"
            fill
            sizes="(min-width: 1024px) 43vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
