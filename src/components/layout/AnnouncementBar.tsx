import { siteInfo } from "@/data/site";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-forest text-cream">
      <div className="container-page flex items-center justify-between py-6 text-xs">
        <div className="hidden items-center gap-6 whitespace-nowrap lg:flex lg:pl-[220px]">
          <span className="flex items-center gap-1.5">
            <img src="/icons/icon-made-in-karnataka.svg" alt="" className="h-4 w-4" />
            Made in Karnataka, India
          </span>
          <span className="flex items-center gap-1.5">
            <img src="/icons/icon-location.svg" alt="" className="h-4 w-4" />
            From Our Farms to Your Homes
          </span>
        </div>
        <div className="ml-auto flex items-center gap-4 whitespace-nowrap">
          <a href={`tel:${siteInfo.phone}`} className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.5c0-.6.4-1 1-1H7.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1l-2.3 2.3z" />
            </svg>
            {siteInfo.phone}
          </a>
          <span className="text-[#99a1af]">|</span>
          <a href="/track-order" className="flex items-center gap-1.5">
            <img src="/icons/icon-track-order.svg" alt="" className="h-[18px] w-4" />
            Track Order
          </a>
        </div>
      </div>
    </div>
  );
}
