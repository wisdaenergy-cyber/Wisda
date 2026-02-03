"use client"
import HeroAbout from "@/components/Hero/HeroAbout";
import HeroBanner from "@/components/Hero/HeroBanner";
import HeroInstallation from "@/components/Hero/HeroInstallation";
import HeroService from "@/components/Hero/HeroService";
import HeroTestimonial from "@/components/Hero/HeroTestimonial";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import BlogCard from "@/components/Blogs/BlogCard";
import AboveFooter from "@/components/AboveFooter/AboveFooter";
import Footer from "@/components/Footer/footer";
import FAQ from "@/components/Hero/HeroFaq";
import HeroPartner from "@/components/Hero/HeroPartner";




export default function Home() {
    const popularRef = useRef(null);
  const [page, setPage] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data.blogs)
        const fetched = res.data.blogs || [];
        setBlogs(fetched);
        setPage(0);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const scroll = (ref, dir) => {
    if (!ref.current) return;
    const { scrollLeft, clientWidth } = ref.current;
    const scrollAmount = clientWidth * 0.9;
    ref.current.scrollTo({
      left: dir === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <HeroBanner/>
      <HeroAbout/>
      <HeroService/>
      <HeroInstallation/>
      <HeroTestimonial/>
      <HeroPartner/>
      <section className="mt-0 pb-30 bg-[#FDF6E6] p-10 h-[500px]">
           <h2 className="text-[25px] uppercase tracking-widest text-black mb-10 px-20 font-extrabold md:ml-10">
           LATEST FROM THE BLOG
          </h2>
        <div className="relative">
          <button
            onClick={() => scroll(popularRef, 'left')}
            className="absolute left-0 z-10 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-[#8EC643] hover:text-white"
          >
            <ChevronLeft />
          </button>
          <div
            ref={popularRef}
            className="flex space-x-4 overflow-x-auto no-scrollbar scroll-smooth px-10 pt-10"
          >
            {blogs.map((blog, idx) => (
              <div key={idx} className="min-w-[300px] flex-shrink-0">
                <BlogCard {...blog} />
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll(popularRef, 'right')}
            className="absolute right-0 z-10 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-[#8EC643] hover:text-white"
          >
            <ChevronRight />
          </button>
        </div>
      </section>
      <FAQ/>
      <AboveFooter/>
      <Footer/>
    </main>
  );
}
