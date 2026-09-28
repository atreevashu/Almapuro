import type { ReactNode } from "react";

export default function AccordionStep({
  step,
  title,
  subtitle,
  open,
  onToggle,
  children,
}: {
  step: number;
  title: string;
  subtitle: string;
  open: boolean;
  onToggle: () => void;
  children?: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e8f0e5] bg-white">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <div className="flex items-center gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1a3a1e] font-sans text-sm font-bold text-white">
            {step}
          </span>
          <div>
            <p className="font-sans text-base font-bold text-[#101828]">{title}</p>
            <p className="font-sans text-xs text-[#99a1af]">{subtitle}</p>
          </div>
        </div>
        <img
          src="/icons/checkout/icon-checkout-toggle.svg"
          alt=""
          className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && children && <div className="border-t border-[#f0f5ee] px-6 py-6">{children}</div>}
    </div>
  );
}
