import { helpTopics } from "@/data/contact";

const iconMap: Record<string, string> = {
  "order-delivery": "/icons/icon-contact-order-delivery.svg",
  "product-info": "/icons/icon-contact-product-info.svg",
  wholesale: "/icons/icon-contact-wholesale.svg",
  "general-support": "/icons/icon-contact-general-support.svg",
};

export default function HelpTopics() {
  return (
    <section className="bg-[#eef2e5]">
      <div className="container-page py-16 lg:py-20">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-display text-[30px] font-normal leading-tight text-[#1c3d2e]">
            {helpTopics.heading}
          </h2>
          <p className="max-w-xl font-sans text-sm leading-[26px] text-[#6b6b5a]">
            {helpTopics.paragraph}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {helpTopics.items.map((item) => (
            <div key={item.title} className="flex flex-col items-start gap-3 rounded-2xl bg-white p-6">
              <img src={iconMap[item.icon]} alt="" className="h-8 w-8" />
              <p className="font-sans text-base font-semibold leading-tight text-[#1c3d2e]">{item.title}</p>
              <p className="font-sans text-sm leading-snug text-[#6b6b5a]">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
