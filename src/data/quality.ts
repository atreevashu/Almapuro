export const qualityHero = {
  heading: "Pure by Nature.\nTrusted by Standards.",
  paragraph:
    "At Almapuro, quality is not just a process — it's our promise. From soil to shelf, we ensure every product is pure, natural and safe for you and your family.",
  tagline: "Natural Goodness. Safe & Pure",
};

export const qualityPromise = {
  heading: "Our Quality Promise",
  paragraph:
    "We follow stringent quality control measures at every stage to deliver the highest standards of purity, freshness and nutritional value.",
  items: [
    { icon: "natural", title: "100% Natural", subtitle: "No artificial colours, flavours or preservatives." },
    { icon: "purity", title: "Purity Assured", subtitle: "Carefully tested for quality and safety." },
    { icon: "nutrient", title: "Nutrient Rich", subtitle: "Retains natural nutrition and flavour." },
    { icon: "ethical", title: "Ethically Sourced", subtitle: "Directly from trusted farmers." },
  ],
};

export const certifications = {
  heading: "Our Certifications",
  paragraph:
    "We are committed to meeting national and international standards for food safety, quality and sustainable practices.",
  items: [
    {
      badge: "fssai",
      badgeColor: "#e8523a",
      variant: "wordmark" as const,
      title: "FSSAI",
      subtitle: "Food Safety and Standards Authority of India",
    },
    {
      badge: "ISO",
      badgeLines: ["ISO", "9001", "2015"],
      ringColor: "#1447e6",
      textColor: "#1447e6",
      lastLineColor: "#155dfc",
      variant: "ring" as const,
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
    },
    {
      badgeLines: ["HACCP", "CERTIFIED"],
      bgColor: "#f0fdf4",
      ringColor: "#008236",
      textColor: "#016630",
      lastLineColor: "#008236",
      variant: "ring" as const,
      title: "HACCP",
      subtitle: "Food Safety Management",
    },
    {
      badgeLines: ["GMP", "CERTIFIED"],
      bgColor: "#f0fdf4",
      ringColor: "#00a63e",
      textColor: "#008236",
      lastLineColor: "#00a63e",
      variant: "ring" as const,
      title: "GMP",
      subtitle: "Good Manufacturing Practices",
    },
    {
      icon: "jaivik-leaf",
      badgeLines: ["JAIVIK"],
      bgColor: "#f0fdf4",
      ringColor: "#00c950",
      textColor: "#008236",
      variant: "icon" as const,
      title: "Jaivik Bharat",
      subtitle: "Certified Organic Products",
    },
  ],
};

export const farmToHome = {
  heading: "From Our Farms to You",
  paragraph: "Our end-to-end process ensures that only the best reaches your home.",
  steps: [
    { icon: "🌱", label: "1. Cultivation", subtitle: "Naturally grown in fertile soil" },
    { icon: "🌿", label: "2. Harvesting", subtitle: "Handpicked at the right time" },
    { icon: "⚙️", label: "3. Processing", subtitle: "Hygienic and advanced methods" },
    { icon: "✅", label: "4. Quality Check", subtitle: "Multiple stages of testing" },
    { icon: "📦", label: "5. Packaging", subtitle: "Sealed for freshness and purity" },
    { icon: "🏠", label: "6. To Your Home", subtitle: "Safe, natural and wholesome" },
  ],
};

export const testingBanner = {
  heading: "Rigorous Testing\nfor Your Safety",
  paragraph:
    "Our products undergo multiple laboratory tests for purity, contaminants and nutritional content, ensuring they are safe, high-quality and full of natural goodness.",
  cta: { label: "View Test Reports", href: "#" },
  image: "/images/quality-lab-photo.jpg",
};

export const farmersSection = {
  heading: "We Stand With\nOur Farmers",
  paragraph:
    "We work directly with local farmers, supporting sustainable farming practices that protect the soil, environment and livelihoods. Together, we create a healthier future for generations to come.",
  image: "/images/quality-farmer-photo.jpg",
  points: [
    { icon: "🌱", label: "Sustainable Farming" },
    { icon: "🤝", label: "Fair Trade Practices" },
    { icon: "👨‍👩‍👧‍👦", label: "Stronger Communities" },
  ],
};

export const qualityCta = {
  heading: "Good Food Today\nA Brighter Tomorrow.",
  subheading: "Pure. Natural. Always.",
  cta: { label: "Explore Our Products", href: "/products" },
  bg: "/images/cta-banner-bg.png",
};
