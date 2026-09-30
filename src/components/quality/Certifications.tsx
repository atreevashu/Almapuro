import Image from "next/image";
import { certifications } from "@/data/quality";

export default function Certifications() {
  return (
    <section className="bg-[#f0f5ee]">
      <div className="container-page py-16 lg:py-20">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-display text-2xl font-bold text-[#1a3a1e]">{certifications.heading}</h2>
          <p className="max-w-xl font-sans text-sm leading-[26px] text-[#6a7282]">
            {certifications.paragraph}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {certifications.items.map((item) => (
            <div
              key={item.title + item.subtitle}
              className="flex flex-col items-center gap-4 rounded-2xl border border-[#e8f5e9] bg-white p-6 text-center shadow"
            >
              <div className="relative h-16 w-20">
                <Image src={item.logo} alt={item.title} fill sizes="80px" className="object-contain" />
              </div>
              <div>
                <p className="font-sans text-sm font-bold text-[#1e2939]">{item.title}</p>
                <p className="mt-1 whitespace-pre-line font-sans text-xs leading-snug text-[#6a7282]">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
