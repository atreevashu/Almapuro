"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { ProductItem } from "@/data/products";
import { useCart } from "@/context/CartContext";

const badgeColors: Record<"Best Seller" | "New", string> = {
  "Best Seller": "bg-[#1a3a1e]",
  New: "bg-[#2e7d32]",
};

export default function ProductCard({ product }: { product: ProductItem }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [favorited, setFavorited] = useState(false);
  const [justAdded, setJustAdded] = useState<{ quantity: number; size: string } | null>(null);

  useEffect(() => {
    if (!justAdded) return;
    const timer = setTimeout(() => setJustAdded(null), 1500);
    return () => clearTimeout(timer);
  }, [justAdded]);

  const handleAddToCart = () => {
    if (quantity <= 0) return;
    addItem(
      {
        id: `${product.slug}-${selectedSize}`,
        name: product.name,
        size: selectedSize,
        unitPrice: product.price,
        image: product.cartImage ?? product.image,
        imageBg: product.cartImageBg,
      },
      quantity
    );
    setJustAdded({ quantity, size: selectedSize });
    setQuantity(0);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e8f0e5] bg-white">
      <div className="relative h-[200px] w-full">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-[linear-gradient(135deg,#fce4ec_0%,#f48fb1_100%)]" />
        )}

        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-[10px] py-1 font-sans text-[11px] font-bold text-white ${badgeColors[product.badge]}`}
          >
            {product.badge}
          </span>
        )}

        <button
          type="button"
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
          aria-pressed={favorited}
          onClick={() => setFavorited((prev) => !prev)}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-transform active:scale-90"
        >
          <img
            src={favorited ? "/icons/icon-heart-filled.svg" : "/icons/icon-heart-outline.svg"}
            alt=""
            className="h-4 w-4"
          />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-sans text-sm font-bold text-[#101828]">{product.name}</h3>

        <div className="mt-1.5 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              src={
                index < Math.floor(product.rating)
                  ? "/icons/icon-star-filled.svg"
                  : "/icons/icon-star-empty.svg"
              }
              alt=""
              className="h-3.5 w-3.5"
            />
          ))}
          <span className="ml-1 font-sans text-xs font-semibold text-[#364153]">
            {product.rating}
          </span>
          <span className="font-sans text-xs font-normal text-[#99a1af]">({product.reviews})</span>
        </div>

        <p className="mt-2 line-clamp-2 font-sans text-xs font-normal text-[#6a7282]">
          {product.description}
        </p>

        <p className="mt-3 font-sans text-lg font-black text-[#1a3a1e]">₹{product.price}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {product.sizes.map((size) => {
            const active = size === selectedSize;
            return (
              <button
                key={size}
                type="button"
                aria-pressed={active}
                onClick={() => setSelectedSize(size)}
                className={`rounded-full px-3 py-1.5 font-sans text-xs font-semibold transition-colors ${
                  active
                    ? "border border-[#1c3d2e] bg-[#1c3d2e] text-white"
                    : "border border-[#d1d5db] bg-white text-[#555555] hover:border-[#1c3d2e]"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center rounded-full border border-[#d1d5db]">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQuantity((q) => Math.max(0, q - 1))}
              disabled={quantity <= 0}
              className="flex h-8 w-8 items-center justify-center font-sans text-lg font-light text-[#6a7282] disabled:opacity-40"
            >
              −
            </button>
            <span className="w-4 text-center font-sans text-sm font-semibold text-[#1e2939]">
              {quantity}
            </span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQuantity((q) => q + 1)}
              className="flex h-8 w-8 items-center justify-center font-sans text-lg font-light text-[#6a7282]"
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={quantity <= 0}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#1c3d2e] py-2.5 font-sans text-xs font-semibold text-white transition-colors hover:bg-[#254d38] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-[#1c3d2e]"
          >
            <img src="/icons/icon-cart-mini.svg" alt="" className="h-3.5 w-3.5" />
            {justAdded ? `Added ${justAdded.quantity} · ${justAdded.size}` : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
