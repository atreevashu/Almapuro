import Image from "next/image";
import Link from "next/link";
import { moringaBenefitColumns } from "@/data/site";

export default function MoringaBenefits() {
  return (
    <section className="bg-[#f7f9f3] py-16">
      <div className="container-page">
        <p className="section-eyebrow">Moringa Oleifera Benefits</p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {moringaBenefitColumns.map((column, columnIndex) => (
              <ul
                key={columnIndex}
                className="space-y-3 rounded-xl border border-gold bg-[#fdf9f0] p-3"
              >
                {column.map((benefit) => (
                  <li key={benefit.label} className="flex items-center gap-2">
                    <span className="text-lg leading-none">{benefit.icon}</span>
                    <span className="text-sm font-medium text-[#364153]">{benefit.label}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex-1">
              <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                Nature&apos;s Powerhouse of Nutrition
              </h2>
              <p className="mt-4 text-lg leading-snug text-[#4a5565] sm:text-xl">
                Moringa is rich in essential nutrients, antioxidants and plant compounds that
                support overall health and well-being.
              </p>
              <Link href="/shop?category=leaf-herb-powders" className="btn-primary mt-6">
                Explore Moringa Products
              </Link>
            </div>
            <div className="relative aspect-[578/354] w-full flex-shrink-0 overflow-hidden sm:w-64">
              <Image src="/images/moringa-photo.jpg" alt="Moringa powder" fill sizes="(min-width: 640px) 256px, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
