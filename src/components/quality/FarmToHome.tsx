import { farmToHome } from "@/data/quality";

export default function FarmToHome() {
  return (
    <section className="bg-white">
      <div className="container-page py-16 lg:py-20">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="section-title">{farmToHome.heading}</h2>
          <p className="max-w-xl font-lato text-base leading-[26px] text-[#112519]/70">
            {farmToHome.paragraph}
          </p>
        </div>

        {/* Mobile: stacked icon + label + subtitle, connected by down-arrows */}
        <div className="mt-12 flex flex-col items-center gap-6 lg:hidden">
          {farmToHome.steps.map((step, index) => (
            <div key={step.label} className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[3px] border-[#f0f5ee] bg-[#2e7d32] text-3xl leading-none">
                <span>{step.icon}</span>
              </div>
              <div className="flex w-40 flex-col items-center gap-1 text-center">
                <p className="font-display text-sm font-bold text-[#2e7d32]">{step.label}</p>
                <p className="font-lato text-xs leading-snug text-[#6a7282]">{step.subtitle}</p>
              </div>
              {index < farmToHome.steps.length - 1 && (
                <span aria-hidden className="font-lato text-xl text-[#d1d5dc]">
                  &#8595;
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Desktop: icon row with a connecting line + arrows, labels aligned in a row below */}
        <div className="mt-12 hidden lg:block">
          <div className="relative flex items-center justify-between">
            <div className="absolute left-8 right-8 top-1/2 h-0.5 -translate-y-1/2 bg-[#d4e8d0]" />
            {farmToHome.steps.map((step, index) => (
              <div key={step.label} className="relative flex items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[3px] border-[#f0f5ee] bg-[#2e7d32] text-3xl leading-none">
                  <span>{step.icon}</span>
                </div>
                {index < farmToHome.steps.length - 1 && (
                  <span aria-hidden className="mx-1 font-lato text-xl text-[#d1d5dc]">
                    &#8594;
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-between">
            {farmToHome.steps.map((step) => (
              <div key={step.label} className="flex w-[150px] flex-col items-center gap-1 text-center">
                <p className="font-display text-sm font-bold text-[#2e7d32]">{step.label}</p>
                <p className="font-lato text-xs leading-snug text-[#6a7282]">{step.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
