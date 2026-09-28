"use client";

import { useState } from "react";
import ShippingAddressForm, {
  emptyShippingForm,
  type ShippingFormState,
} from "@/components/checkout/ShippingAddressForm";
import AccordionStep from "@/components/checkout/AccordionStep";
import PaymentMethodPanel from "@/components/checkout/PaymentMethodPanel";
import CheckoutOrderSummary from "@/components/checkout/CheckoutOrderSummary";

const requiredFields: (keyof ShippingFormState)[] = [
  "fullName",
  "phone",
  "pincode",
  "state",
  "city",
  "address",
];

export default function CheckoutPageClient() {
  const [shippingForm, setShippingForm] = useState<ShippingFormState>(emptyShippingForm);
  const [paymentOpen, setPaymentOpen] = useState(true);
  const [reviewOpen, setReviewOpen] = useState(false);

  const isShippingValid = requiredFields.every((field) => shippingForm[field].toString().trim() !== "");

  return (
    <section className="bg-[#fafaf8]">
      <div className="container-page py-8 lg:py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <div className="flex flex-col gap-6">
            <ShippingAddressForm form={shippingForm} onChange={setShippingForm} />

            <AccordionStep
              step={2}
              title="Payment Method"
              subtitle="Choose your preferred payment option"
              open={paymentOpen}
              onToggle={() => setPaymentOpen((v) => !v)}
            >
              <PaymentMethodPanel />
            </AccordionStep>

            <AccordionStep
              step={3}
              title="Review & Place Order"
              subtitle="Review your details before placing the order"
              open={reviewOpen}
              onToggle={() => setReviewOpen((v) => !v)}
            >
              <div className="space-y-3 font-sans text-sm text-[#4a5565]">
                <p>
                  <span className="font-semibold text-[#101828]">Deliver to: </span>
                  {shippingForm.fullName || "—"}
                  {shippingForm.address ? `, ${shippingForm.address}` : ""}
                  {shippingForm.city ? `, ${shippingForm.city}` : ""}
                  {shippingForm.state ? `, ${shippingForm.state}` : ""}
                  {shippingForm.pincode ? ` – ${shippingForm.pincode}` : ""}
                </p>
                <p>
                  <span className="font-semibold text-[#101828]">Phone: </span>
                  {shippingForm.phone ? `+91 ${shippingForm.phone}` : "—"}
                </p>
                <p className="text-xs text-[#99a1af]">
                  Double-check your details above, then use Place Order in the summary to confirm.
                </p>
              </div>
            </AccordionStep>
          </div>

          <CheckoutOrderSummary isShippingValid={isShippingValid} />
        </div>
      </div>
    </section>
  );
}
