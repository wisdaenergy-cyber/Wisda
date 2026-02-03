import AboutBanner from "@/components/About/AboutBanner";
import AboutSection from "@/components/About/AboutSection";
import AboutTeam from "@/components/About/AboutTeam";
import AboutTestimonial from "@/components/About/AboutTestimonial";
import { Divide } from "lucide-react";
import Head from "next/head";

export const metadata = {
  title: "Wisda Energy | Leading Solar Power & Clean Energy Experts",
  description: "Discover Wisda Energy, a trusted provider of rooftop solar, smart energy solutions and clean power systems for homes in Hyderabad.",
  alternates: {
    canonical: "https://www.wisda.in/about-us",
  },
};

export default function About()
{
    return (
        <div className="bg-[#FDF6E6]">
      <AboutBanner/>
      <AboutSection/>
      <AboutTeam/>
      <AboutTestimonial/>
      </div>
    )
}
