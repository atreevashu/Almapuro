import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurPurpose from "@/components/about/OurPurpose";
import OurValues from "@/components/about/OurValues";
import SustainableFarming from "@/components/about/SustainableFarming";
import OurCommitment from "@/components/about/OurCommitment";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Almapuro Agri Private Limited brings pure, natural, sun-dried farm produce from Karnataka's farmers to homes across India and beyond.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurPurpose />
      <OurValues />
      <SustainableFarming />
      <OurCommitment />
    </>
  );
}
