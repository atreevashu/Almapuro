import { products, sortOptions } from "@/data/products";

export default function ProductToolbar() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="font-sans text-sm text-[#6a7282]">Showing {products.length} products</p>

      <div className="flex items-center gap-3">
        <span className="font-sans text-sm text-[#6a7282]">Sort by:</span>
        <div className="relative">
          <select
            defaultValue={sortOptions[0]}
            className="appearance-none rounded-lg border border-[#d1d5db] bg-white py-2 pl-4 pr-9 font-sans text-sm text-[#374151] focus:outline-none"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <img
            src="/icons/icon-chevron-down.svg"
            alt=""
            className="pointer-events-none absolute right-3 top-1/2 h-[6px] w-[10px] -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
}
