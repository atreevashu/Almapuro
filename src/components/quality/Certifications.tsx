import { certifications } from "@/data/quality";

type CertItem = (typeof certifications.items)[number];

function CertBadge({ item }: { item: CertItem }) {
  if (item.variant === "wordmark") {
    return (
      <div className="flex h-20 w-20 items-center justify-center">
        <span
          className="font-display text-3xl font-extrabold lowercase"
          style={{ color: item.badgeColor }}
        >
          {item.badge}
        </span>
      </div>
    );
  }

  const lines = item.badgeLines ?? [];
  const lineCount = lines.length;
  const bgColor = "bgColor" in item ? item.bgColor : undefined;
  const lastLineColor = "lastLineColor" in item ? item.lastLineColor : undefined;

  return (
    <div
      className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4"
      style={{
        borderColor: item.ringColor,
        backgroundColor: bgColor ?? "transparent",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-0.5 leading-none">
        {item.variant === "icon" && (
          <img src="/icons/icon-quality-jaivik-leaf.svg" alt="" className="mb-0.5 h-4 w-4" />
        )}
        {lines.map((line, index) => {
          const isLast = index === lineCount - 1;
          const color = (isLast && lastLineColor) || item.textColor;
          return (
            <span
              key={line}
              className="font-lato text-[10px] font-extrabold uppercase tracking-tight"
              style={{ color }}
            >
              {line}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section className="bg-[#f0f5ee]">
      <div className="container-page py-16 lg:py-20">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="section-title">{certifications.heading}</h2>
          <p className="max-w-xl font-lato text-base leading-[26px] text-[#6a7282]">
            {certifications.paragraph}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {certifications.items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-4 rounded-2xl border border-[#e8f5e9] bg-white p-6 text-center shadow"
            >
              <CertBadge item={item} />
              <div>
                <p className="font-display text-base font-bold text-[#1e2939]">{item.title}</p>
                <p className="mt-1 font-lato text-xs leading-snug text-[#6a7282]">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
