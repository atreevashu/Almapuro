"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/site";

export default function CategoryCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -280 : 280,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-16">
      <div className="container-page">
        <h2 className="section-title">Shop by Category</h2>

        <div className="mt-10 flex items-center justify-center gap-2">
          <button
            type="button"
            aria-label="Scroll categories left"
            onClick={() => scroll("left")}
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 text-lg text-black transition-colors hover:bg-gray-50"
          >
            ‹
          </button>

          <div
            ref={scrollRef}
            className="flex min-w-0 gap-4 overflow-x-auto scroll-smooth px-1 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="flex w-28 flex-shrink-0 flex-col items-center text-center sm:w-36 lg:w-[181px]"
              >
                <div className="relative aspect-square w-20 overflow-hidden rounded-full border-2 border-gold-light sm:w-28 lg:w-[118px]">
                  <Image src={category.image} alt={category.name} fill sizes="118px" className="object-cover" />
                </div>
                <p className="mt-2 text-xs font-semibold leading-snug text-[#1e2939] sm:text-sm">
                  {category.name}
                </p>
                <span className="mt-2 text-xs font-medium text-leaf">{category.cta}</span>
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label="Scroll categories right"
            onClick={() => scroll("right")}
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 text-lg text-black transition-colors hover:bg-gray-50"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
