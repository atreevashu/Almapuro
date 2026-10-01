import { qualityPromise } from "@/data/quality";

const iconMap: Record<string, string> = {
  natural: "/icons/icon-quality-natural.png",
  purity: "/icons/icon-quality-purity.png",
  nutrient: "/icons/icon-quality-nutrient.png",
  ethical: "/icons/icon-quality-ethical.png",
};

export default function QualityPromise() {
  return (
    <section className="bg-white">
      <div className="container-page py-16 lg:py-20">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-display text-2xl font-bold text-[#1a3a1e]">{qualityPromise.heading}</h2>
          <p className="max-w-xl font-sans text-sm leading-[26px] text-[#6a7282]">
            {qualityPromise.paragraph}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {qualityPromise.items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-3 rounded-2xl border border-[#e8f5e9] bg-[#fafffe] p-5 text-center"
            >
              <img src={iconMap[item.icon]} alt="" className="h-10 w-auto" />
              <p className="font-display text-lg font-bold text-[#1e2939]">{item.title}</p>
              <p className="font-sans text-xs leading-snug text-[#6a7282]">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
