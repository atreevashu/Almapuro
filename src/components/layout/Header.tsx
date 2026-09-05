import Image from "next/image";
import Link from "next/link";
import { mainNavLinks, siteInfo } from "@/data/site";

export default function Header() {
  return (
    <header className="relative w-full bg-cream">
      <Link
        href="/"
        className="absolute left-4 top-[-54px] z-20 h-24 w-24 sm:left-6 sm:h-32 sm:w-32 lg:left-8 lg:h-[172px] lg:w-[172px]"
        aria-label={siteInfo.name}
      >
        <Image
          src={siteInfo.logo}
          alt={`${siteInfo.name} — ${siteInfo.tagline}`}
          fill
          sizes="172px"
          className="object-contain drop-shadow-md"
          priority
        />
      </Link>

      <div className="container-page flex h-24 items-center justify-end gap-6">
        <nav className="hidden items-center gap-8 whitespace-nowrap pl-32 text-sm font-medium sm:pl-40 lg:flex lg:gap-6 lg:pl-[220px] xl:gap-10">
          {mainNavLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={i === 0 ? "border-b-2 border-gold-dark pb-1.5 text-gold-dark" : "text-[#364153] transition-colors hover:text-gold-dark"}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <button aria-label="Search">
            <img src="/icons/icon-search.svg" alt="" className="h-5 w-5" />
          </button>
          <Link href="/account" aria-label="Account">
            <img src="/icons/icon-user.svg" alt="" className="h-5 w-5" />
          </Link>
          <Link href="/cart" aria-label="Cart" className="relative">
            <img src="/icons/icon-cart.svg" alt="" className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-leaf text-[10px] text-white">
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
