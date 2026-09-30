"use client";

import { contactForm } from "@/data/contact";

const inputClass =
  "w-full rounded-lg border border-[#d5cbbc] bg-[#fafaf8] px-4 py-2.5 font-sans text-sm text-[#112519] placeholder:text-[#b5ada2] transition-colors focus:border-forest focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest/40";

const labelClass = "font-sans text-xs font-bold uppercase tracking-wide text-[#1c3d2e]";

function FieldLabel({ htmlFor, text }: { htmlFor: string; text: string }) {
  const required = text.endsWith("*");
  const base = required ? text.slice(0, -1).trim() : text;
  return (
    <label htmlFor={htmlFor} className={labelClass}>
      {base}
      {required && <span className="text-[#c8973a]"> *</span>}
    </label>
  );
}

const subjectOptions = [
  "General Enquiry",
  "Order Support",
  "Wholesale/Bulk Order",
  "Product Question",
  "Other",
];

export default function ContactForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <FieldLabel htmlFor="contact-name" text={contactForm.fields.name.label} />
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder={contactForm.fields.name.placeholder}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <FieldLabel htmlFor="contact-email" text={contactForm.fields.email.label} />
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder={contactForm.fields.email.placeholder}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <FieldLabel htmlFor="contact-phone" text={contactForm.fields.phone.label} />
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder={contactForm.fields.phone.placeholder}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <FieldLabel htmlFor="contact-subject" text={contactForm.fields.subject.label} />
          <select
            id="contact-subject"
            name="subject"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              {contactForm.fields.subject.placeholder}
            </option>
            {subjectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <FieldLabel htmlFor="contact-message" text={contactForm.fields.message.label} />
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder={contactForm.fields.message.placeholder}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-[#1c3d2e] px-6 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-[#254d38]"
      >
        <img src="/icons/icon-contact-send.svg" alt="" className="h-4 w-4" />
        {contactForm.submitLabel}
      </button>
    </form>
  );
}
