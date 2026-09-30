import Image from "next/image";
import Link from "next/link";
import { contactInfo } from "@/data/contact";

const iconMap: Record<string, string> = {
  phone: "/icons/icon-contact-phone.svg",
  email: "/icons/icon-contact-email.svg",
  location: "/icons/icon-contact-location.svg",
};

const socialIconMap: Record<string, string> = {
  "social-0": "/icons/icon-contact-social-0.svg",
  "social-1": "/icons/icon-contact-social-1.svg",
  "social-2": "/icons/icon-contact-social-2.svg",
  "social-3": "/icons/icon-contact-social-3.svg",
  "social-4": "/icons/icon-contact-social-4.svg",
};

export default function ContactInfo() {
  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
        <div className="lg:min-w-0 lg:flex-1">
          <h2 className="font-display text-2xl font-bold leading-tight text-[#1c3d2e]">
            {contactInfo.heading}
          </h2>
          <p className="mt-3 whitespace-pre-line font-sans text-sm leading-[26px] text-[#6b6b5a]">
            {contactInfo.paragraph}
          </p>

          <div className="mt-8 flex flex-col gap-5">
            {contactInfo.items.map((item) => (
              <div key={item.title} className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1c3d2e]">
                  <img src={iconMap[item.icon]} alt="" className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold leading-tight text-[#1e2a1e]">{item.title}</p>
                  <p className="mt-1 font-sans text-xs leading-tight text-[#6b6b5a]">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <img
          src="/images/contact-office-leaf.png"
          alt=""
          className="w-full shrink-0 self-center lg:w-[340px] lg:self-start"
        />
      </div>

      <div className="mt-8">
        <span className="font-sans text-xs font-bold uppercase tracking-wide text-[#6b6b5a]">
          {contactInfo.socialLabel}
        </span>
        <div className="mt-3 flex items-center gap-3">
          {contactInfo.socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1a3a28] transition-colors hover:bg-[#1a3a28]/5"
            >
              <img src={socialIconMap[social.icon]} alt="" className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-[#e8e0d4] bg-[#e8f0e8]">
        <div className="relative aspect-[594/176] w-full">
          <Image
            src={contactInfo.office.mapImage}
            alt={`${contactInfo.office.name}, ${contactInfo.office.location}`}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-fit max-w-[90%] rounded-lg bg-white/95 px-4 py-3 text-center shadow-sm">
              <p className="font-sans text-sm font-bold leading-tight text-[#112519]">{contactInfo.office.name}</p>
              <p className="mt-0.5 font-sans text-xs leading-tight text-[#112519]/60">{contactInfo.office.location}</p>
            </div>
          </div>
        </div>
        <Link
          href={contactInfo.office.mapLink}
          className="flex items-center justify-center gap-2 py-3 font-sans text-sm font-semibold text-[#1c3d2e] transition-colors hover:text-forest-light"
        >
          <img src="/icons/icon-contact-map-pin.svg" alt="" className="h-4 w-4" />
          {contactInfo.office.mapLinkLabel}
        </Link>
      </div>
    </div>
  );
}
