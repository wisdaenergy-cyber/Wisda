import CareerBanner from "@/components/Career/CareerBanner";
import CareerMain from "@/components/Career/CareerMain";

export const metadata = {
  title: "Wisda Energy Careers | Jobs Opportunities in Wisda Energy",
  description: "Explore career opportunities at Wisda Energy. Join a growing team in technology and innovation, work on exciting projects, and build a rewarding long-term career with us.",
  alternates: {
    canonical: "https://www.wisda.in/careers",
  },
};

export default function About()
{
    return (
        <div className="bg-[#FDF6E6]">
            <CareerBanner/>
            <CareerMain/>
      </div>
    )
}
