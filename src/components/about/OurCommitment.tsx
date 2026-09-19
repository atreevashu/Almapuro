import Image from "next/image";
import { ourCommitment } from "@/data/about";

export default function OurCommitment() {
  return (
    <section className="bg-[#f5f0e8]">
      <div className="container-page py-16 lg:py-20">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-2">
            <span className="font-lato text-xs font-bold uppercase tracking-wide text-[#1a3a28]">
              {ourCommitment.label}
            </span>
            <span className="h-px w-10 bg-[#1a3a28]/35" />
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-[#112519] lg:text-[36px] lg:leading-[40px]">
            {ourCommitment.heading}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ourCommitment.cards.map((card) => (
            <div key={card.title} className="overflow-hidden rounded-xl bg-white">
              <div className="relative aspect-square w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="font-display text-sm font-bold leading-tight text-[#112519]">{card.title}</p>
                <p className="mt-1 font-lato text-xs leading-tight text-[#112519]/60">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
