import Image from "next/image";
import Link from "next/link";
import { trustBadges } from "@/data/site";

const badgeIcons: Record<string, string> = {
  "100% Natural": "/icons/icon-100-natural.png",
  "FSSAI Certified": "/icons/icon-fssai-certified.svg",
  "Farm Fresh": "/icons/icon-farm-fresh.svg",
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#faf6ec] via-[#faf6ec]/75 to-transparent lg:hidden" />

      <div className="relative w-full px-4 py-14 sm:px-6 lg:py-20 lg:pl-20 lg:pr-8">
        <div className="max-w-[17rem] sm:max-w-sm md:max-w-md lg:max-w-xl">
          <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-[3.2rem]">
            Pure by Nature.
            <br />
            Powered by Technology.
          </h1>
          <p className="mt-5 font-display text-2xl font-semibold text-gold-dark">
            Sun-Dried. Naturally Processed.
            <br />
            Expertly Packed.
          </p>
          <p className="mt-4 max-w-md text-base font-medium leading-relaxed text-ink">
            Premium range of organic farm produce crafted for your healthy lifestyle.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/shop" className="btn-primary">
              <img src="/icons/icon-shop-cart.svg" alt="" className="h-4 w-4" />
              Shop Now
            </Link>
            <Link href="/wholesale" className="btn-outline">
              <img src="/icons/icon-question.svg" alt="" className="h-4 w-4" />
              Wholesale Enquiry
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-12">
            {trustBadges.map((badge) => (
              <div key={badge.title} className="flex flex-col items-start gap-1">
                <img src={badgeIcons[badge.title]} alt="" className="h-6 w-auto" />
                <p className="text-xs font-bold leading-tight text-ink">{badge.title}</p>
                <p className="text-[11px] leading-tight text-[#4a5565]">{badge.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-6 top-0 w-[130px] sm:right-16 sm:w-[158px]">
        <svg viewBox="0 0 158 251" className="block h-auto w-full drop-shadow-md" preserveAspectRatio="none">
          <polygon points="0,0 158,0 158,201 79,251 0,201" fill="#005131" />
          <polygon points="4,6 154,6 154,197 79,245 4,197" fill="#005131" stroke="#d7bc88" strokeWidth="2" strokeLinejoin="round" />
        </svg>
        <div className="absolute inset-x-0 top-0 flex h-[80%] flex-col items-center justify-center px-3 text-center">
          <span className="text-sm font-bold uppercase leading-tight tracking-wide text-gold sm:text-base">
            Almapuro
            <br />&amp;<br />
            Drielle
          </span>
          <span className="mt-3 font-display text-xs leading-tight text-white sm:text-sm">
            Premium Quality
            <br />
            Trusted Purity
          </span>
        </div>
      </div>
    </section>
  );
}
