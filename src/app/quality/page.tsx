import type { Metadata } from "next";
import QualityHero from "@/components/quality/QualityHero";
import QualityPromise from "@/components/quality/QualityPromise";
import Certifications from "@/components/quality/Certifications";
import FarmersSection from "@/components/quality/FarmersSection";
import QualityCtaBanner from "@/components/quality/QualityCtaBanner";

export const metadata: Metadata = {
  title: "Quality & Certifications",
  description:
    "Almapuro Agri follows stringent quality control and holds ISO 22000, HACCP, ICI UK and Jaivik Bharat certifications to guarantee pure, safe and natural products.",
  alternates: {
    canonical: "/quality",
  },
};

export default function QualityPage() {
  return (
    <>
      <QualityHero />
      <QualityPromise />
      <Certifications />
      <FarmersSection />
      <QualityCtaBanner />
    </>
  );
}
