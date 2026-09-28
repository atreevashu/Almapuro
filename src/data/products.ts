export const productsHero = {
  heading: "Pure Nature.\nAlways Close to You.",
  paragraph:
    "Explore our range of farm-fresh, sun-dried, chemical-free powders, blends and more — straight from our farms to your home.",
  bg: "/images/products-hero-bg.png",
};

export type ProductBadge = "Best Seller" | "New" | null;

export type ProductItem = {
  slug: string;
  name: string;
  rating: number;
  reviews: number;
  description: string;
  price: number;
  sizes: string[];
  badge: ProductBadge;
  image: string | null;
  /** Small thumbnail used in the cart line item; falls back to `image` when not set. */
  cartImage?: string;
  /** Backdrop colour behind the cart thumbnail. */
  cartImageBg: string;
};

export const products: ProductItem[] = [
  {
    slug: "moringa-powder",
    name: "Moringa Powder",
    rating: 4.8,
    reviews: 120,
    description: "Rich in vitamins, minerals and antioxidants to support daily wellness.",
    price: 299,
    sizes: ["100g", "250g", "500g"],
    badge: "Best Seller",
    image: "/images/products-moringa.jpg",
    cartImage: "/images/cart-moringa.jpg",
    cartImageBg: "#e8f5e9",
  },
  {
    slug: "turmeric-powder",
    name: "Turmeric Powder",
    rating: 4.8,
    reviews: 110,
    description: "Pure and potent turmeric for daily immunity support.",
    price: 249,
    sizes: ["100g", "250g", "500g"],
    badge: null,
    image: "/images/products-turmeric.jpg",
    cartImage: "/images/cart-turmeric.jpg",
    cartImageBg: "#fff8e1",
  },
  {
    slug: "ashwagandha-powder",
    name: "Ashwagandha Powder",
    rating: 4.6,
    reviews: 88,
    description: "Helps manage stress and supports overall vitality.",
    price: 349,
    sizes: ["100g", "250g", "500g"],
    badge: "New",
    image: "/images/products-ashwagandha.jpg",
    cartImage: "/images/cart-ashwagandha.jpg",
    cartImageBg: "#fce4ec",
  },
  {
    slug: "beetroot-powder",
    name: "Beetroot Powder",
    rating: 4.5,
    reviews: 72,
    description: "Supports energy, stamina and healthy circulation.",
    price: 299,
    sizes: ["100g", "250g", "500g"],
    badge: null,
    image: null,
    cartImageBg: "#fce4ec",
  },
  {
    slug: "wheatgrass-powder",
    name: "Wheatgrass Powder",
    rating: 4.7,
    reviews: 96,
    description: "Detoxifies, energizes and boosts immunity naturally.",
    price: 299,
    sizes: ["100g", "250g", "500g"],
    badge: "Best Seller",
    image: "/images/products-wheatgrass.jpg",
    cartImageBg: "#f0f5ee",
  },
  {
    slug: "amla-powder",
    name: "Amla Powder",
    rating: 4.7,
    reviews: 95,
    description: "Natural source of Vitamin C for immunity and healthy skin.",
    price: 249,
    sizes: ["100g", "250g", "500g"],
    badge: null,
    image: "/images/products-amla.jpg",
    cartImageBg: "#f0f5ee",
  },
];

export const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Top Rated"];
