import Image from "next/image";
import Link from "next/link";
import { footerLinks, siteInfo } from "@/data/site";

const socialIcons: { key: keyof typeof siteInfo.social; bg: string; label: string }[] = [
  { key: "facebook", bg: "bg-[#1877f2]", label: "f" },
  { key: "instagram", bg: "bg-[#e1306c]", label: "ig" },
  { key: "whatsapp", bg: "bg-[#25d366]", label: "wa" },
  { key: "youtube", bg: "bg-[#ff0000]", label: "▶" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-forest text-white">
      <div className="container-page grid grid-cols-1 gap-8 pt-10 pb-[72px] sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="relative h-24 w-24 lg:h-40 lg:w-40">
            <Image src={siteInfo.logo} alt={`${siteInfo.name} — ${siteInfo.tagline}`} fill sizes="160px" className="object-contain" />
          </div>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-white">Company</h4>
          <ul className="space-y-2 text-sm text-[#d1d5dc]">
            {footerLinks.company.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-white">Customer Service</h4>
          <ul className="space-y-2 text-sm text-[#d1d5dc]">
            {footerLinks.customerService.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-white">Contact Us</h4>
          <ul className="space-y-2 text-sm text-[#d1d5dc]">
            <li className="flex items-start gap-2">
              <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 flex-shrink-0" fill="#d1d5dc">
                <path d="M7.99967 1.33203C5.41967 1.33203 3.33301 3.4187 3.33301 5.9987C3.33301 9.4987 7.99967 14.6654 7.99967 14.6654C7.99967 14.6654 12.6663 9.4987 12.6663 5.9987C12.6663 3.4187 10.5797 1.33203 7.99967 1.33203ZM7.99967 7.66536C7.07967 7.66536 6.33301 6.9187 6.33301 5.9987C6.33301 5.0787 7.07967 4.33203 7.99967 4.33203C8.91967 4.33203 9.66634 5.0787 9.66634 5.9987C9.66634 6.9187 8.91967 7.66536 7.99967 7.66536Z" />
              </svg>
              <span>{siteInfo.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0" fill="none" stroke="#d1d5dc" strokeWidth="1.6">
                <path d="M4 5c0 8.5 6.5 15 15 15l2-4-6-2-1.5 2A12 12 0 0 1 6.5 9.5L8.5 8l-2-6-4 1z" strokeLinejoin="round" />
              </svg>
              <a href={`tel:${siteInfo.phone}`}>{siteInfo.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span>
              <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
            </li>
          </ul>

          <h4 className="mt-6 text-sm font-bold uppercase tracking-wider text-white">Follow Us</h4>
          <div className="mt-3 flex gap-3">
            {socialIcons.map(({ key, bg, label }) => (
              <a
                key={key}
                href={siteInfo.social[key]}
                aria-label={key}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ${bg}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#0d542b] py-4">
        <p className="container-page text-center text-xs text-[#99a1af]">
          © {new Date().getFullYear()} {siteInfo.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
