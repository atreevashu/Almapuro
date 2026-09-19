import { qualityPromise } from "@/data/quality";

const iconMap: Record<string, string> = {
  natural: "/icons/icon-quality-natural.svg",
  purity: "/icons/icon-quality-purity.svg",
  nutrient: "/icons/icon-quality-nutrient.svg",
  ethical: "/icons/icon-quality-ethical.svg",
};

export default function QualityPromise() {
  return (
    <section className="bg-white">
      <div className="container-page py-16 lg:py-20">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="section-title">{qualityPromise.heading}</h2>
          <p className="max-w-xl font-lato text-base leading-[26px] text-[#6a7282]">
            {qualityPromise.paragraph}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {qualityPromise.items.map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-3 text-center">
              <img src={iconMap[item.icon]} alt="" className="h-16 w-16" />
              <p className="font-display text-lg font-bold text-[#1e2939]">{item.title}</p>
              <p className="font-lato text-sm leading-snug text-[#6a7282]">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
