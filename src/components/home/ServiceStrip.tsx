import { serviceStrip } from "@/data/site";

export default function ServiceStrip() {
  return (
    <section className="border-t border-gray-100 bg-white py-6">
      <div className="container-page grid grid-cols-2 gap-6 md:grid-cols-4">
        {serviceStrip.map((service) => (
          <div key={service.title} className="flex items-center gap-3">
            <span className="text-3xl leading-none">{service.icon}</span>
            <div>
              <p className="text-sm font-semibold text-ink">{service.title}</p>
              <p className="text-xs text-[#6a7282]">{service.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
