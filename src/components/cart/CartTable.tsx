import Link from "next/link";
import type { CartItem } from "@/context/CartContext";
import CartItemRow from "@/components/cart/CartItemRow";

export default function CartTable({
  items,
  onQuantityChange,
  onRemove,
  onClear,
}: {
  items: CartItem[];
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
}) {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-[#e8f0e5] bg-white">
        <div className="hidden items-center gap-4 border-b border-[#f0f5ee] bg-[#fafaf8] px-5 py-3 sm:flex">
          <span className="w-[486px] font-sans text-xs font-semibold text-[#6a7282]">Product</span>
          <span className="w-24 font-sans text-xs font-semibold text-[#6a7282]">Price</span>
          <span className="w-[98px] font-sans text-xs font-semibold text-[#6a7282]">Quantity</span>
          <span className="w-16 text-right font-sans text-xs font-semibold text-[#6a7282]">Total</span>
          <span className="w-8" />
        </div>

        {items.length === 0 ? (
          <p className="px-5 py-12 text-center font-sans text-sm text-[#6a7282]">
            Your cart is empty.
          </p>
        ) : (
          items.map((item) => (
            <CartItemRow
              key={item.id}
              item={item}
              onQuantityChange={onQuantityChange}
              onRemove={onRemove}
            />
          ))
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#2e7d32] hover:text-[#256b28]"
        >
          ← Continue Shopping
        </Link>
        {items.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#6a7282] hover:text-[#101828]"
          >
            <img src="/icons/icon-trash.svg" alt="" className="h-4 w-4 opacity-70" />
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
}
