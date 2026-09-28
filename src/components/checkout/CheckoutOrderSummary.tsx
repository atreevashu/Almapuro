"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { freeShippingThreshold } from "@/data/cart";

export default function CheckoutOrderSummary({ isShippingValid }: { isShippingValid: boolean }) {
  const { items, updateQuantity, clearCart, itemCount, subtotal } = useCart();
  const [promoOpen, setPromoOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoMessage, setPromoMessage] = useState<string | null>(null);
  const [placeError, setPlaceError] = useState<string | null>(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const shipping = 0;
  const total = subtotal + shipping;

  const handleApplyPromo = () => {
    if (!promoCode.trim()) return;
    setPromoMessage("Promo codes aren't available yet — stay tuned!");
  };

  const handlePlaceOrder = () => {
    if (items.length === 0) {
      setPlaceError("Your cart is empty — add something before checking out.");
      return;
    }
    if (!isShippingValid) {
      setPlaceError("Please fill in your shipping address above first.");
      return;
    }
    setPlaceError(null);
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="rounded-2xl border border-[#e8f0e5] bg-white p-6 text-center">
        <p className="font-display text-lg font-black text-[#1a3a1e]">Order placed!</p>
        <p className="mt-2 font-sans text-sm text-[#6a7282]">
          Thank you — we&apos;ve received your order and will be in touch shortly to confirm delivery.
        </p>
        <Link
          href="/products"
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#1a3a1e] px-6 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-[#254d29]"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#e8f0e5] bg-white p-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-base font-black text-[#1a3a1e]">
          Order Summary ({itemCount} item{itemCount === 1 ? "" : "s"})
        </h2>
        <Link
          href="/cart"
          className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#2e7d32] hover:text-[#256b28]"
        >
          <img src="/icons/checkout/icon-checkout-edit.svg" alt="" className="h-3.5 w-3.5" />
          Edit Cart
        </Link>
      </div>

      {items.length === 0 ? (
        <p className="mt-6 font-sans text-sm text-[#6a7282]">Your cart is empty.</p>
      ) : (
        <div className="mt-4 divide-y divide-[#f0f5ee]">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
              <div
                className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl"
                style={{ backgroundColor: item.imageBg }}
              >
                {item.image ? (
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full bg-[linear-gradient(135deg,#fce4ec_0%,#f48fb1_100%)]" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-sans text-sm font-semibold text-[#101828]">{item.name}</p>
                <p className="font-sans text-xs text-[#99a1af]">{item.size}</p>
                <div className="mt-1.5 flex items-center gap-2">
                  <div className="relative">
                    <select
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                      className="appearance-none rounded-lg border border-[#d1d5db] bg-white py-1 pl-2 pr-6 font-sans text-xs text-[#101828] focus:outline-none"
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          Qty: {n}
                        </option>
                      ))}
                    </select>
                    <img
                      src="/icons/checkout/icon-checkout-qty-chevron.svg"
                      alt=""
                      className="pointer-events-none absolute right-1.5 top-1/2 h-3 w-3 -translate-y-1/2"
                    />
                  </div>
                  <span className="font-sans text-xs text-[#99a1af]">
                    ₹ {item.unitPrice}
                    {item.quantity > 1 ? " each" : ""}
                  </span>
                </div>
              </div>
              <p className="shrink-0 font-sans text-sm font-bold text-[#1a3a1e]">
                ₹ {(item.unitPrice * item.quantity).toLocaleString("en-IN")}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 rounded-xl border border-[#e8f0e5]">
        <button
          type="button"
          onClick={() => setPromoOpen((v) => !v)}
          className="flex w-full items-center justify-between px-4 py-3"
        >
          <span className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#364153]">
            <img src="/icons/checkout/icon-checkout-tag.svg" alt="" className="h-4 w-4" />
            Have a Promo Code?
          </span>
          <img
            src="/icons/checkout/icon-checkout-promo-chevron.svg"
            alt=""
            className={`h-4 w-4 transition-transform ${promoOpen ? "rotate-180" : ""}`}
          />
        </button>
        {promoOpen && (
          <div className="border-t border-[#f0f5ee] p-3">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => {
                  setPromoCode(e.target.value);
                  setPromoMessage(null);
                }}
                className="flex-1 rounded-lg border border-[#d1d5db] px-3 py-2 font-sans text-xs text-[#101828] placeholder:text-[#1a1a1a]/50 focus:border-forest focus:outline-none"
              />
              <button
                type="button"
                onClick={handleApplyPromo}
                className="shrink-0 rounded-lg bg-[#1a3a1e] px-3 py-2 font-sans text-xs font-semibold text-white hover:bg-[#254d29]"
              >
                Apply
              </button>
            </div>
            {promoMessage && <p className="mt-2 font-sans text-xs text-[#99a1af]">{promoMessage}</p>}
          </div>
        )}
      </div>

      <div className="mt-4 space-y-3 border-t border-[#f0f5ee] pt-4">
        <div className="flex items-center justify-between">
          <span className="font-sans text-sm text-[#4a5565]">Subtotal ({itemCount} items)</span>
          <span className="font-sans text-sm font-semibold text-[#101828]">
            ₹ {subtotal.toLocaleString("en-IN")}
          </span>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 font-sans text-sm text-[#4a5565]">
              Shipping
              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#99a1af] text-[9px] leading-none text-[#99a1af]">
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

      <button
        type="button"
        onClick={handlePlaceOrder}
        className="mt-5 flex w-full items-center justify-center rounded-xl bg-[#1a3a1e] py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-[#254d29]"
      >
        Place Order →
      </button>
      {placeError && (
        <p className="mt-2 text-center font-sans text-xs font-medium text-red-600">{placeError}</p>
      )}

      <p className="mt-4 flex items-start gap-2 font-sans text-xs text-[#99a1af]">
        <img src="/icons/checkout/icon-checkout-shield.svg" alt="" className="mt-0.5 h-3.5 w-auto shrink-0" />
        100% Secure Payment. Your information is safe with us.
      </p>
    </div>
  );
}
