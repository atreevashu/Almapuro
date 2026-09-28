import Image from "next/image";
import type { CartItem } from "@/context/CartContext";

export default function CartItemRow({
  item,
  onQuantityChange,
  onRemove,
}: {
  item: CartItem;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}) {
  const total = item.unitPrice * item.quantity;

  return (
    <div className="flex flex-wrap items-center gap-4 border-t border-[#f0f5ee] px-5 py-4 sm:flex-nowrap">
      <div className="flex flex-1 items-center gap-4 sm:w-[486px] sm:flex-none">
        <div
          className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl"
          style={{ backgroundColor: item.imageBg }}
        >
          {item.image ? (
            <Image src={item.image} alt={item.name} fill sizes="64px" className="object-cover" />
          ) : (
            <div className="h-full w-full bg-[linear-gradient(135deg,#fce4ec_0%,#f48fb1_100%)]" />
          )}
        </div>
        <div>
          <p className="font-sans text-sm font-semibold text-[#101828]">{item.name}</p>
          <p className="font-sans text-xs text-[#99a1af]">{item.size}</p>
        </div>
      </div>

      <div className="w-24 sm:w-24">
        <p className="font-sans text-sm font-bold text-[#101828]">₹ {item.unitPrice}</p>
        <p className="font-sans text-[11px] text-[#99a1af]">
          (₹ {item.unitPrice} / {item.size})
        </p>
      </div>

      <div className="flex items-center rounded-full border border-[#d1d5db]">
        <button
          type="button"
          aria-label={`Decrease ${item.name} quantity`}
          onClick={() => onQuantityChange(item.id, Math.max(1, item.quantity - 1))}
          disabled={item.quantity <= 1}
          className="flex h-8 w-8 items-center justify-center font-sans text-base font-light text-[#6a7282] disabled:opacity-40"
        >
          −
        </button>
        <span className="w-8 text-center font-sans text-sm font-semibold text-[#1e2939]">
          {item.quantity}
        </span>
        <button
          type="button"
          aria-label={`Increase ${item.name} quantity`}
          onClick={() => onQuantityChange(item.id, item.quantity + 1)}
          className="flex h-8 w-8 items-center justify-center font-sans text-base font-light text-[#6a7282]"
        >
          +
        </button>
      </div>

      <div className="w-16 text-right">
        <p className="font-sans text-sm font-bold text-[#101828]">₹ {total}</p>
      </div>

      <button
        type="button"
        aria-label={`Remove ${item.name} from cart`}
        onClick={() => onRemove(item.id)}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-[#fafaf8]"
      >
        <img src="/icons/icon-trash.svg" alt="" className="h-4 w-4" />
      </button>
    </div>
  );
}
