export const contactHero = {
  heading: "We'd Love to\nHear From You.",
  paragraph:
    "Whether you have a question, need assistance, want to explore bulk orders or simply want to say hello — we're here to help.",
  tagline: "Pure. Natural. Always Close to You.",
};

export const contactForm = {
  heading: "Send Us a Message",
  paragraph: "Fill out the form below and we'll get back to you as soon as possible.",
  fields: {
    name: { label: "Your Name *", placeholder: "Enter your name" },
    email: { label: "Email Address *", placeholder: "Enter your email address" },
    phone: { label: "Phone Number", placeholder: "Enter your phone number" },
    subject: { label: "Subject *", placeholder: "Select a subject" },
    message: { label: "Message *", placeholder: "Tell us how we can help..." },
  },
  submitLabel: "Send Message",
  photo: "/images/contact-form-photo.png",
};

export const contactInfo = {
  heading: "Our Contact Information",
  paragraph: "Reach out to us directly through any of the\nfollowing channels.",
  items: [
    { icon: "phone", title: "+91 91488 53975", subtitle: "Mon – Sat, 9:00 AM – 6:00 PM" },
    { icon: "email", title: "hello@almapuroagri.com", subtitle: "We usually respond within 24 hours" },
    { icon: "location", title: "No.28, KRK Urban Ville", subtitle: "Gunjur, Bengaluru 560087, Karnataka, India" },
  ],
  socialLabel: "Follow Us",
  socialLinks: [
    { icon: "social-0", name: "Instagram", href: "#" },
    { icon: "social-1", name: "Facebook", href: "#" },
    { icon: "social-2", name: "YouTube", href: "#" },
    { icon: "social-3", name: "WhatsApp", href: "#" },
    { icon: "social-4", name: "LinkedIn", href: "#" },
  ],
  office: {
    name: "Almapuro Agri Private Limited",
    location: "Bengaluru, Karnataka",
    mapImage: "/images/contact-map.jpg",
    mapLink: "#",
    mapLinkLabel: "View on Google Maps",
  },
};

export const helpTopics = {
  heading: "How Can We Help You?",
  paragraph: "Choose a topic and we'll make sure you get the right support.",
  items: [
    { icon: "order-delivery", title: "Order & Delivery", subtitle: "Get help with orders, payments and shipping." },
    { icon: "product-info", title: "Product Information", subtitle: "Know more about our natural products." },
    { icon: "wholesale", title: "Wholesale / Bulk Orders", subtitle: "For distributors, retailers and business enquiries." },
    { icon: "general-support", title: "General Support", subtitle: "Any other questions? We're here to help." },
  ],
};

export const contactCta = {
  heading: "Together for a\nHealthier Tomorrow.",
  subheading: "Real Food. Real People. A Better Planet.",
  cta: { label: "Get in Touch", href: "#contact-form" },
  bg: "/images/cta-banner-bg.png",
};
