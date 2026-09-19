import Image from "next/image";
import { ourStory } from "@/data/about";

const iconMap: Record<string, string> = {
  "leaf-badge": "/icons/icon-about-natural-produce.svg",
  "hands-crop": "/icons/icon-about-hands-crop.svg",
  heart: "/icons/icon-about-heart.svg",
  globe: "/icons/icon-about-globe.svg",
};

export default function OurStory() {
  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        <div className="relative aspect-[666/487] w-full lg:aspect-auto lg:w-[47%]">
          <Image
            src={ourStory.image}
            alt="Organic spices and farm produce in wooden bowls"
            fill
            sizes="(min-width: 1024px) 47vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:w-[33%] lg:px-8 lg:py-8">
          <div className="flex items-center gap-2">
            <span className="font-lato text-xs font-bold uppercase tracking-wide text-[#005131]">
              {ourStory.label}
            </span>
            <span className="h-px w-10 bg-[#1a3a28]/35" />
          </div>
          <h2 className="mt-4 whitespace-pre-line font-display text-3xl font-bold leading-[1.1] text-[#112519] lg:text-[36px] lg:leading-[40px]">
            {ourStory.heading}
          </h2>
          <div className="mt-5 flex flex-col gap-5">
            {ourStory.paragraphs.map((paragraph) => (
              <p key={paragraph} className="font-lato text-base leading-[26px] text-[#112519]/70 lg:text-[18px]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-[45px] px-6 py-10 sm:px-10 lg:w-[20%] lg:px-8 lg:py-6">
          {ourStory.stats.map((stat) => (
            <div key={stat.title} className="flex items-center gap-3">
              <img src={iconMap[stat.icon]} alt="" className="h-10 w-auto shrink-0" />
              <div className="flex flex-col gap-2">
                <p className="font-lato text-[22px] font-bold leading-5 text-[#112519]">{stat.title}</p>
                <p className="font-lato text-base leading-4 text-[#112519]/60">{stat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
