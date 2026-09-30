import Image from "next/image";
import { contactForm } from "@/data/contact";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactFormSection() {
  return (
    <section id="contact-form" className="bg-white">
      <div className="container-page py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-[88px]">
          <div className="relative overflow-hidden rounded-2xl border border-[#f2f4ea] bg-[#f3f3ea] p-8">
            <Image
              src={contactForm.photo}
              alt=""
              width={296}
              height={196}
              className="pointer-events-none absolute bottom-0 right-0 h-auto w-[45%] max-w-[280px] select-none"
            />

            <div className="relative">
              <h2 className="font-display text-2xl font-normal leading-tight text-[#1c3d2e]">
                {contactForm.heading}
              </h2>
              <p className="mt-3 font-sans text-sm leading-[26px] text-[#6b6b5a]">
                {contactForm.paragraph}
              </p>

              <ContactForm />
            </div>
          </div>

          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
