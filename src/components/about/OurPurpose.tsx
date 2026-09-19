import { ourPurpose } from "@/data/about";

const iconMap: Record<string, string> = {
  "heart-pulse": "/icons/icon-about-heart-pulse.svg",
  "hand-holding-leaves": "/icons/icon-about-hand-leaves.svg",
  earth: "/icons/icon-about-earth.svg",
};

export default function OurPurpose() {
  return (
    <section className="bg-[#eaeee0]">
      <div className="container-page py-12 lg:py-[60px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-lato text-xs font-bold uppercase tracking-wide text-[#005131]">
                {ourPurpose.label}
              </span>
              <span className="h-px w-10 bg-[#1a3a28]/35" />
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[#005131] lg:text-[36px] lg:leading-[40px]">
              {ourPurpose.heading}
            </h2>
            <p className="mt-4 font-lato text-base leading-[26px] text-[#005131]/70">
              {ourPurpose.paragraph}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {ourPurpose.items.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#1a3a28] bg-white">
                  <img src={iconMap[item.icon]} alt="" className="h-11 w-auto" />
                </div>
                <p className="font-lato text-base font-semibold leading-tight text-[#112519] sm:text-lg">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
