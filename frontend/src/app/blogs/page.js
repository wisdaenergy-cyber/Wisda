import Blogs from "@/components/Blogs/Blogs";
import BlogsBanner from "@/components/Blogs/BlogsBanner";

export const metadata = {
  title: "Solar and Clean Energy Blog | Wisda Energy Insights",
  description: "Read expert articles on solar power, energy savings, clean technology, and smart renewable trends from Wisda Energy.",
  alternates: {
    canonical: "https://www.wisda.in/blogs",
  },
};
export default function About()
{
    return (
        <div className="bg-[#FDF6E6]">
      <BlogsBanner/>
      <Blogs/>
      </div>
    )
}
