import Image from "next/image";
import { contactForm } from "@/data/contact";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactFormSection() {
  return (
    <section id="contact-form" className="bg-white">
      <div className="container-page py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="relative overflow-hidden rounded-2xl bg-[#f3f3ea] p-8">
            <Image
              src={contactForm.photo}
              alt=""
              width={296}
              height={196}
              className="pointer-events-none absolute bottom-0 right-0 h-auto w-[45%] max-w-[280px] select-none"
            />

            <div className="relative">
              <h2 className="font-display text-2xl font-bold leading-tight text-[#112519] sm:text-3xl lg:text-[30px]">
                {contactForm.heading}
              </h2>
              <p className="mt-3 font-lato text-base leading-[26px] text-[#112519]/70">
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
