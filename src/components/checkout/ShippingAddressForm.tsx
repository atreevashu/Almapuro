"use client";

import { useState } from "react";
import Link from "next/link";
import { indianStates } from "@/data/checkout";

export type ShippingFormState = {
  fullName: string;
  phone: string;
  pincode: string;
  state: string;
  city: string;
  address: string;
  landmark: string;
  saveAddress: boolean;
};

export const emptyShippingForm: ShippingFormState = {
  fullName: "",
  phone: "",
  pincode: "",
  state: "",
  city: "",
  address: "",
  landmark: "",
  saveAddress: true,
};

const inputClass =
  "w-full rounded-xl border border-[#d1d5db] py-2.5 pl-10 pr-3 font-sans text-sm text-[#101828] placeholder:text-[#1a1a1a]/50 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/30";
const selectClass =
  "w-full appearance-none rounded-xl border border-[#d1d5db] bg-white py-2.5 pl-3 pr-9 font-sans text-sm text-[#101828] focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/30";
const labelClass = "font-sans text-xs font-semibold text-[#364153]";

export default function ShippingAddressForm({
  form,
  onChange,
}: {
  form: ShippingFormState;
  onChange: (form: ShippingFormState) => void;
}) {
  const [locationStatus, setLocationStatus] = useState<string | null>(null);

  const set = <K extends keyof ShippingFormState>(key: K, value: ShippingFormState[K]) => {
    onChange({ ...form, [key]: value });
  };

  const handleDetectLocation = () => {
    if (!("geolocation" in navigator)) {
      setLocationStatus("Location detection isn't supported on this device.");
      return;
    }
    setLocationStatus("Detecting your location…");
    navigator.geolocation.getCurrentPosition(
      () => setLocationStatus("Location detected — please confirm your pincode below."),
      () => setLocationStatus("Couldn't access your location. Please enter your pincode manually."),
      { timeout: 8000 }
    );
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e8f0e5] bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-5">
        <div className="flex items-center gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1a3a1e] font-sans text-sm font-bold text-white">
            1
          </span>
          <div>
            <p className="font-sans text-base font-bold text-[#101828]">Shipping Address</p>
            <p className="font-sans text-xs text-[#99a1af]">Enter your delivery details</p>
          </div>
        </div>
        <p className="font-sans text-xs text-[#99a1af]">
          Already have an account?{" "}
          <Link href="/account" className="font-semibold text-[#2e7d32] hover:text-[#256b28]">
            Login
          </Link>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 border-t border-[#f0f5ee] px-6 py-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="checkout-name">
            Full Name *
          </label>
          <div className="relative mt-2">
            <img
              src="/icons/checkout/icon-checkout-user.svg"
              alt=""
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
            />
            <input
              id="checkout-name"
              type="text"
              required
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={(e) => set("fullName", e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="checkout-phone">
            Phone Number *
          </label>
          <div className="mt-2 flex items-center gap-2">
            <span className="flex h-[42px] items-center gap-1.5 rounded-xl border border-[#d1d5db] px-3 font-sans text-sm font-medium text-[#364153]">
              <img src="/icons/checkout/icon-checkout-phone.svg" alt="" className="h-4 w-4" />
              +91
            </span>
            <input
              id="checkout-phone"
              type="tel"
              required
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              className="h-[42px] flex-1 rounded-xl border border-[#d1d5db] px-3 font-sans text-sm text-[#101828] placeholder:text-[#1a1a1a]/50 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/30"
            />
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="checkout-pincode">
            Pincode *
          </label>
          <div className="relative mt-2">
            <img
              src="/icons/checkout/icon-checkout-pin.svg"
              alt=""
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
            />
            <input
              id="checkout-pincode"
              type="text"
              inputMode="numeric"
              required
              placeholder="Enter pincode"
              value={form.pincode}
              onChange={(e) => set("pincode", e.target.value)}
              className={`${inputClass} pr-28`}
            />
            <button
              type="button"
              onClick={handleDetectLocation}
              className="absolute right-3 top-1/2 -translate-y-1/2 font-sans text-xs font-semibold text-[#2e7d32] hover:text-[#256b28]"
            >
              Detect Location
            </button>
          </div>
          {locationStatus && (
            <p className="mt-1.5 font-sans text-xs text-[#6a7282]">{locationStatus}</p>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="checkout-state">
            State *
          </label>
          <div className="relative mt-2">
            <select
              id="checkout-state"
              required
              value={form.state}
              onChange={(e) => set("state", e.target.value)}
              className={selectClass}
            >
              <option value="" disabled>
                Select state
              </option>
              {indianStates.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <img
              src="/icons/checkout/icon-checkout-chevron.svg"
              alt=""
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2"
            />
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="checkout-city">
            City *
          </label>
          <input
            id="checkout-city"
            type="text"
            required
            placeholder="Enter your city"
            value={form.city}
            onChange={(e) => set("city", e.target.value)}
            className="mt-2 w-full rounded-xl border border-[#d1d5db] px-3 py-2.5 font-sans text-sm text-[#101828] placeholder:text-[#1a1a1a]/50 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/30"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="checkout-address">
            Address (House No., Building, Street) *
          </label>
          <input
            id="checkout-address"
            type="text"
            required
            placeholder="Enter your full address"
            value={form.address}
            onChange={(e) => set("address", e.target.value)}
            className="mt-2 w-full rounded-xl border border-[#d1d5db] px-3 py-2.5 font-sans text-sm text-[#101828] placeholder:text-[#1a1a1a]/50 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/30"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="checkout-landmark">
            Landmark (Optional)
          </label>
          <input
            id="checkout-landmark"
            type="text"
            placeholder="Enter landmark (e.g. Near Metro Station)"
            value={form.landmark}
            onChange={(e) => set("landmark", e.target.value)}
            className="mt-2 w-full rounded-xl border border-[#d1d5db] px-3 py-2.5 font-sans text-sm text-[#101828] placeholder:text-[#1a1a1a]/50 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/30"
          />
        </div>

        <label className="flex cursor-pointer items-center gap-2.5 sm:col-span-2">
          <input
            type="checkbox"
            checked={form.saveAddress}
            onChange={(e) => set("saveAddress", e.target.checked)}
            className="sr-only"
          />
          <span
            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border border-[#1a3a1e] ${
              form.saveAddress ? "bg-[#1a3a1e]" : "bg-white"
            }`}
          >
            {form.saveAddress && (
              <img src="/icons/checkout/icon-checkout-check.svg" alt="" className="h-2.5 w-2.5" />
            )}
          </span>
          <span className="font-sans text-sm text-[#4a5565]">Save this address for future orders</span>
        </label>
      </div>
    </div>
  );
}
