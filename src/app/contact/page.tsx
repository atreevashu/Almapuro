import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import HelpTopics from "@/components/contact/HelpTopics";
import ContactCtaBanner from "@/components/contact/ContactCtaBanner";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Almapuro Agri Private Limited for questions, bulk orders or support — we're here to help.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <HelpTopics />
      <ContactCtaBanner />
    </>
  );
}
