import Link from "next/link";
import { freeShippingThreshold, trustPoints } from "@/data/cart";

export default function OrderSummary({
  itemCount,
  subtotal,
}: {
  itemCount: number;
  subtotal: number;
}) {
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="rounded-2xl border border-[#e8f0e5] bg-white p-5">
      <h2 className="font-display text-lg font-black text-[#1a3a1e]">Order Summary</h2>

      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-sans text-sm text-[#4a5565]">Subtotal ({itemCount} items)</span>
          <span className="font-sans text-sm font-semibold text-[#101828]">₹ {subtotal.toLocaleString("en-IN")}</span>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 font-sans text-sm text-[#4a5565]">
              Shipping
              <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#99a1af] text-[10px] leading-none text-[#99a1af]">
                i
              </span>
            </span>
            <span className="font-sans text-sm font-semibold text-[#2e7d32]">
              {shipping === 0 ? "₹ 0" : `₹ ${shipping}`}
            </span>
          </div>
          <p className="mt-1 font-sans text-[11px] text-[#99a1af]">
            Free shipping on orders above ₹{freeShippingThreshold}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-[#f0f5ee] pt-4">
        <span className="font-sans text-base font-bold text-[#101828]">Total Amount</span>
        <div className="text-right">
          <p className="font-sans text-xl font-black text-[#1a3a1e]">₹ {total.toLocaleString("en-IN")}</p>
          <p className="font-sans text-[11px] text-[#99a1af]">(Inclusive of all taxes)</p>
        </div>
      </div>

      <Link
        href="/checkout"
        className="mt-5 flex items-center justify-center rounded-xl bg-[#1a3a1e] py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-[#254d29]"
      >
        Proceed to Checkout →
      </Link>

      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-[#f0f5ee] pt-5">
        {trustPoints.map((point) => (
          <div key={point.title} className="flex items-start gap-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8f5e9] text-base">
              {point.icon}
            </span>
            <div>
              <p className="font-sans text-xs font-semibold text-[#1e2939]">{point.title}</p>
              <p className="font-sans text-[10px] leading-snug text-[#99a1af]">{point.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
