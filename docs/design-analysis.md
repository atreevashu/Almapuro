# Almapuro Agri — Homepage Design Analysis

Source: homepage mockup screenshot (Figma/design export), analyzed 2026-09-02.
Purpose: single reference doc so we don't have to re-analyze the image on every future step (token savings).

## Brand
- **Name:** Almapuro Agri Private Limited
- **Sub-brand:** Drielle (used for sun-dried tomato line — "Almapuro & Drielle")
- **Tagline:** "Where Tech Meets Nature"
- **Hero headline:** "Pure by Nature. Powered by Technology."
- **Hero sub-copy:** "Sun-Dried. Naturally Processed. Expertly Packed."
- **Positioning:** Premium, organic, farm-to-table Indian agri-produce brand (Karnataka-based) with a tech/quality-process angle. Certification-heavy (FSSAI, UDYAM, MSME) to build trust.
- **Contact:** +91 91488 53975 · Hello@almapuroagri.com
- **Address:** Villa No.28, KAK Urban Ville, Gunjurpalya Road, Gunjur, Bengaluru – 560087
- **Social:** Facebook, Instagram, WhatsApp, YouTube

## Visual system
| Token | Value (approx) |
|---|---|
| Primary (dark green) | `#1B3B2C`-ish forest green — header/footer bg, buttons, badges |
| Background (cream) | `#F6F1E7`-ish warm off-white — section backgrounds |
| Accent (gold/mustard) | `#C79A45`-ish — icons, borders, secondary CTA, "PREMIUM" seal |
| Text | Dark charcoal/near-black on cream; white on green |
| Buttons | Pill/rounded-rectangle; solid green primary, outlined gold secondary |
| Imagery | Product pouches/bowls shot on rustic wood surfaces, farm backdrop in hero, circular category thumbnails |
| Typography feel | Serif or high-contrast display face for headlines ("Pure by Nature..."), clean sans for body/nav |

## Page sections (top to bottom)

1. **Announcement/utility bar** (dark green, thin)
   - "Made in Karnataka, India" · "From Our Farms to Your Homes"
   - Phone number · "Track Order"

2. **Main nav** (cream bg, sticky presumably)
   - Logo (circular emblem, tree icon, "Almapuro Agri Private Limited — Where Tech Meets Nature")
   - Links: Home, Shop, Wholesale, About Us, Quality & Certifications, Blog, Contact Us
   - Icons: Search, Account, Cart (with count badge)

3. **Hero**
   - Farm landscape background photo
   - Left: headline, sub-copy, short description, two CTAs — "SHOP NOW" (filled), "WHOLESALE ENQUIRY" (outlined)
   - Right: three product pouches (Drielle Tomatoes, Moringa Leaf Powder, Lemon Powder) + bowls of tomatoes/lemons, ribbon badge "ALMAPURO & DRIELLE — Premium Quality Trusted Purity"
   - Below: 3 trust icons — 100% Natural (No Preservatives), FSSAI Certified (Safe & Trusted), Farm Fresh (Sustainably Sourced)

4. **Shop by Category** (carousel, circular thumbnails, prev/next arrows)
   - Sun-Dried Range · Leaf & Herb Powders · Fruit & Root Powders · Spice & Flavoured Blends · Gifting & Combo Packs · Wholesale/Bulk SKUs
   - Each has a "Shop Now" / "Enquire Now" link

5. **Moringa Oleifera Benefits** (feature/education block, light sage-green bg)
   - Left: two-column checklist of 11 benefits (Antioxidant, Anti-Diabetic, Neuro Support, Viral, Joint Support, Wound Healing, Anti-Inflammatory, Cardio Support, Antimicrobial, Fungal, Anti-Tumoral, Liver Support/NAFLD), each with a small icon
   - Right: "Nature's Powerhouse of Nutrition" heading + description + "EXPLORE MORINGA PRODUCTS" button, photo of moringa powder bowl with leaves

6. **Our Best Sellers** (6-product grid, cream bg)
   - Drielle Sun-Dried Tomatoes — ₹249 (100g)
   - Moringa (Drumstick) Leaf Powder — ₹199 (100g)
   - Lemon Powder — ₹179 (100g)
   - Curry Leaf Powder — ₹179 (100g)
   - Beetroot Powder — ₹199 (100g)
   - Chilli Powder — ₹159 (100g)
   - Each card: product photo (bowl), name, price, "ADD TO CART" button

7. **3-panel CTA strip**
   - Wholesale/Bulk Orders (dark green panel) — copy + "BOOK NOW"
   - Book an Appointment (cream panel) — calendar icon + "BOOK NOW"
   - Trusted & Certified (cream panel) — FSSAI/UDYAM/MSME logos + gold "PREMIUM" seal badge

8. **Trust strip** (4 icons, cream bg)
   - Secure Payments · Pan India Shipping · 7 Days Return · Dedicated Support

9. **Footer** (dark green)
   - Logo + tagline
   - Columns: Company (About, Our Farms, Quality & Certificates, Blog/Farm Journal, Careers) · Customer Service (Shipping & Delivery, Return & Refunds, Term of Use, Privacy Policy, Contact Us) · Contact Us (address/phone/email) · Follow Us (social icons)

## Implied site structure / pages
Home, Shop (with category filters matching the 6 categories), Wholesale, About Us, Quality & Certifications, Blog, Contact Us, Cart, Account, Track Order, product detail pages, Shipping & Delivery, Returns & Refunds, Terms of Use, Privacy Policy.

## Build notes for next steps
- This is an e-commerce site → will need product data model (name, price, weight/unit, category, images), cart, and category taxonomy at minimum for a functional front end.
- Content (11 Moringa benefits, product prices, certifications) is explicit in the mockup — reuse verbatim rather than inventing copy.
- No indication yet of tech stack — to be decided before scaffolding.
