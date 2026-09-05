import Image from "next/image";
import Link from "next/link";
import { certificationCaption, certificationLogos } from "@/data/site";

export default function CtaStrip() {
  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-3">
        <div className="relative isolate flex flex-col justify-between overflow-hidden p-8 text-white">
          <Image src="/images/wholesale-panel.jpg" alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="-z-10 object-cover" />
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide">Wholesale / Bulk Orders</h3>
            <p className="mt-3 max-w-[85%] text-sm text-gray-300">
              Best pricing for bulk buyers, distributors, HORECA and export enquiries.
            </p>
          </div>
          <Link href="/wholesale" className="btn-outline-gold mt-8 w-fit">
            Book Now
          </Link>
        </div>

        <div className="flex flex-col justify-between bg-cream-dark p-8">
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-ink">Book an Appointment</h3>
            <p className="mt-3 max-w-[85%] text-sm text-[#4a5565]">
              Schedule a call, video meeting or farm/facility visit with our team.
            </p>
          </div>
          <div className="flex items-end justify-between">
            <Link href="/contact" className="btn-outline-ink w-fit">
              Book Now
            </Link>
            <img src="/icons/icon-calendar-clock.svg" alt="" className="h-16 w-16" />
          </div>
        </div>

        <div className="relative flex flex-col justify-between border border-gray-100 bg-white p-8">
          <div className="absolute right-8 top-8 h-[102px] w-[110px]">
            <Image src="/images/premium-seal.png" alt="Premium" fill sizes="110px" className="object-contain" />
          </div>
          <div className="pr-28">
            <h3 className="text-lg font-bold uppercase tracking-wide text-ink">Trusted &amp; Certified</h3>
            <p className="mt-1 text-sm text-[#4a5565]">Your health is our priority.</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {certificationLogos.map((cert) => (
                <div key={cert.name} className="relative" style={{ width: cert.width, height: cert.height }}>
                  <Image src={cert.image} alt={cert.name} fill sizes="100px" className="object-contain object-left" />
                </div>
              ))}
            </div>
          </div>
          <p className="mt-8 text-xs text-[#6a7282]">{certificationCaption}</p>
        </div>
      </div>
    </section>
  );
}
