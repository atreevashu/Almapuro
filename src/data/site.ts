export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://almapuroagri.com";

export const siteInfo = {
  name: "Almapuro Agri",
  legalName: "Almapuro Agri Private Limited",
  tagline: "Where Tech Meets Nature",
  phone: "+91 91488 53975",
  email: "Hello@almapuroagri.com",
  address: "Villa No.28, KAK Urban Ville, Gunjurpalye Road, Gunjun Bengaluru - 560087",
  logo: "/images/brand-emblem.png",
  social: {
    facebook: "#",
    instagram: "#",
    whatsapp: "#",
    youtube: "#",
  },
};

export const mainNavLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "About Us", href: "/about" },
  { label: "Quality & Certifications", href: "/quality" },
  { label: "Contact Us", href: "/contact" },
];

export const footerLinks = {
  company: [
    { label: "About Almapuro", href: "/about" },
    { label: "Our Farms", href: "/farms" },
    { label: "Quality & Certificates", href: "/quality" },
    { label: "Blog / Farm Journal", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ],
  customerService: [
    { label: "Shipping & Delivery", href: "/shipping" },
    { label: "Return & Refunds", href: "/returns" },
    { label: "Term of Use", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export const trustBadges = [
  { title: "100% Natural", subtitle: "No Preservatives" },
  { title: "FSSAI Certified", subtitle: "Safe & Trusted" },
  { title: "Farm Fresh", subtitle: "Sustainably Sourced" },
];

export const categories = [
  { name: "Sun-Dried Range", cta: "Shop Now", href: "/shop?category=sun-dried-range", image: "/images/category-sun-dried.jpg" },
  { name: "Leaf & Herb Powders", cta: "Shop Now", href: "/shop?category=leaf-herb-powders", image: "/images/category-leaf-herb.jpg" },
  { name: "Fruit & Root Powders", cta: "Shop Now", href: "/shop?category=fruit-root-powders", image: "/images/category-fruit-root.jpg" },
  { name: "Spice & Flavoured Blends", cta: "Shop Now", href: "/shop?category=spice-blends", image: "/images/category-spice-blends.jpg" },
  { name: "Gifting & Combo Packs", cta: "Shop Now", href: "/shop?category=gifting-combo-packs", image: "/images/category-gifting.jpg" },
  { name: "Wholesale / Bulk SKUs", cta: "Enquire Now", href: "/wholesale", image: "/images/category-wholesale.jpg" },
];

export const moringaBenefitColumns: { label: string; icon: string }[][] = [
  [
    { label: "Antioxidant", icon: "💊" },
    { label: "Neuro Support", icon: "🧠" },
    { label: "Joint Support", icon: "🦴" },
    { label: "Anti-Inflammatory", icon: "🔥" },
    { label: "Antimicrobial", icon: "🦠" },
    { label: "Anti-Tumoral", icon: "🎯" },
  ],
  [
    { label: "Anti-Diabetic", icon: "🩺" },
    { label: "Viral", icon: "🛡️" },
    { label: "Wound Healing", icon: "🩹" },
    { label: "Cardio Support", icon: "❤️" },
    { label: "Fungal", icon: "🍄" },
    { label: "Liver Support (NAFLD)", icon: "🫀" },
  ],
];

export type Product = {
  slug: string;
  name: string;
  price: number;
  unit: string;
  image: string;
};

export const bestSellers: Product[] = [
  { slug: "drielle-sun-dried-tomatoes", name: "Drielle Sun-Dried Tomatoes", price: 249, unit: "100g", image: "/images/product-sun-dried-tomatoes.jpg" },
  { slug: "moringa-leaf-powder", name: "Moringa (Drumstick) Leaf Powder", price: 199, unit: "100g", image: "/images/product-moringa-powder.jpg" },
  { slug: "lemon-powder", name: "Lemon Powder", price: 179, unit: "100g", image: "/images/product-lemon-powder.jpg" },
  { slug: "curry-leaf-powder", name: "Curry Leaf Powder", price: 179, unit: "100g", image: "/images/product-curry-leaf-powder.jpg" },
  { slug: "beetroot-powder", name: "Beetroot Powder", price: 199, unit: "100g", image: "/images/product-beetroot-powder.jpg" },
  { slug: "chilli-powder", name: "Chilli Powder", price: 159, unit: "100g", image: "/images/product-chilli-powder.jpg" },
];

export const certificationLogos = [
  { name: "FSSAI", image: "/images/logo-fssai.png", width: 81, height: 40 },
  { name: "MSME", image: "/images/logo-second-cert.png", width: 100, height: 36 },
];

export const certificationCaption = "FSSAI Certified | UDYAM Registered | Almapuro Trademark";

export const serviceStrip = [
  { title: "Secure Payments", subtitle: "100% Safe & Secure", icon: "🔒" },
  { title: "Pan India Shipping", subtitle: "Fast & Reliable Delivery", icon: "🚚" },
  { title: "7 Days Return", subtitle: "Easy Return Policy", icon: "🔄" },
  { title: "Dedicated Support", subtitle: "We're Here to Help", icon: "💬" },
];
