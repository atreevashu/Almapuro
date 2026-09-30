import { farmersSection } from "@/data/quality";

export default function FarmersSection() {
  return (
    <section className="bg-white">
      <div className="container-page grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <img
          src="/images/quality-farmer-leaf.png"
          alt="Farmer harvesting tea leaves by hand"
          className="h-auto w-full max-w-md"
        />

        <div>
          <h2 className="whitespace-pre-line font-display text-3xl font-black leading-[1.25] text-[#1a3a1e] lg:text-[30px] lg:leading-[37.5px]">
            {farmersSection.heading}
          </h2>
          <div className="mt-3 flex items-center gap-2">
            <span className="h-px w-10 bg-[#ffb900]" />
            <span className="text-base leading-none">🌿</span>
          </div>
          <p className="mt-4 font-sans text-sm leading-[26px] text-[#4a5565]">
            {farmersSection.paragraph}
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            {farmersSection.points.map((point) => (
              <div
                key={point.label}
                className="inline-flex items-center gap-2 rounded-xl border border-[#d4e8d0] bg-[#f0f5ee] px-3 py-2"
              >
                <span className="text-lg leading-none">{point.icon}</span>
                <span className="font-lato text-sm font-semibold text-[#364153]">{point.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
