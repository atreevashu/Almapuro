"use client";

import { useState } from "react";
import { paymentTabs, upiApps, type PaymentTabId } from "@/data/checkout";

export default function PaymentMethodPanel() {
  const [activeTab, setActiveTab] = useState<PaymentTabId>("upi");
  const [selectedApp, setSelectedApp] = useState("gpay");
  const [upiId, setUpiId] = useState("");
  const [verifyStatus, setVerifyStatus] = useState<"idle" | "checking" | "verified">("idle");

  const handleVerify = () => {
    if (!upiId.trim()) return;
    setVerifyStatus("checking");
    setTimeout(() => setVerifyStatus("verified"), 600);
  };

  return (
    <div className="flex flex-col gap-6 sm:flex-row">
      <div className="flex shrink-0 flex-col gap-1 sm:w-44">
        {paymentTabs.map((tab) => {
          const active = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 rounded-lg px-3 py-3 text-left font-sans text-sm transition-colors ${
                active ? "bg-[#1a3a1e] text-white" : "text-[#374151] hover:bg-[#fafaf8]"
              }`}
            >
              <img
                src={tab.icon}
                alt=""
                className={`h-5 w-5 shrink-0 ${active ? "brightness-0 invert" : ""}`}
              />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="flex-1">
        {activeTab === "upi" ? (
          <div>
            <p className="font-sans text-sm font-semibold text-[#1e2939]">Pay using UPI</p>
            <p className="mt-0.5 font-sans text-xs text-[#99a1af]">
              Scan the QR code or enter your UPI ID
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {upiApps.map((app) => {
                const active = app.id === selectedApp;
                return (
                  <button
                    key={app.id}
                    type="button"
                    onClick={() => setSelectedApp(app.id)}
                    aria-pressed={active}
                    className={`flex flex-col items-center gap-2 rounded-xl border p-4 transition-colors ${
                      active ? "border-[#1a3a1e] bg-[#f0f5ee]" : "border-[#e5e7eb] bg-white hover:border-[#1a3a1e]/40"
                    }`}
                  >
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full font-sans text-sm font-black text-white"
                      style={{ backgroundColor: app.bg }}
                    >
                      {app.letter}
                    </span>
                    <span className="font-sans text-[11px] font-medium text-[#364153]">{app.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-5">
              <label className="font-sans text-xs font-semibold text-[#364153]" htmlFor="upi-id">
                UPI ID
              </label>
              <div className="mt-2 flex items-center gap-3">
                <div className="relative flex-1">
                  <img
                    src="/icons/checkout/icon-checkout-at.svg"
                    alt=""
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
                  />
                  <input
                    id="upi-id"
                    type="text"
                    placeholder="Enter your UPI ID (e.g. name@upi)"
                    value={upiId}
                    onChange={(e) => {
                      setUpiId(e.target.value);
                      setVerifyStatus("idle");
                    }}
                    className="w-full rounded-xl border border-[#d1d5db] py-2.5 pl-10 pr-3 font-sans text-sm text-[#101828] placeholder:text-[#1a1a1a]/50 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/30"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleVerify}
                  disabled={!upiId.trim() || verifyStatus === "checking"}
                  className="shrink-0 rounded-xl bg-[#e8f5e9] px-5 py-2.5 font-sans text-sm font-semibold text-[#2e7d32] transition-colors hover:bg-[#d7ecd8] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {verifyStatus === "checking" ? "…" : verifyStatus === "verified" ? "Verified ✓" : "Verify"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-full min-h-[180px] items-center justify-center rounded-xl border border-dashed border-[#e5e7eb] px-6 text-center">
            <p className="font-sans text-sm text-[#99a1af]">
              {paymentTabs.find((t) => t.id === activeTab)?.label} isn&apos;t available yet — please
              pay using UPI for now.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
