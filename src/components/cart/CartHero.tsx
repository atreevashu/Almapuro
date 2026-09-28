import Image from "next/image";

export default function CartHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/products-hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,243,238,1)_0%,rgba(247,243,238,1)_19.1%,rgba(247,243,238,0.6)_45.55%,rgba(247,243,238,0)_72.16%)]" />

      <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-20 lg:py-14 xl:pl-24">
        <h1 className="font-display text-4xl font-bold text-[#1a3a1e] sm:text-5xl lg:text-[48px]">
          Your Cart
        </h1>
      </div>
    </section>
  );
}
