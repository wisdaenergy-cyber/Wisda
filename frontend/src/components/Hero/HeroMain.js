"use client";

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
import Navbar from "@/components/NavBar/NavBar";
import HeroCertifications from "@/components/Hero/HeroCertifications";

export default function HomeClient() {
  const popularRef = useRef(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs/all`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBlogs(res.data.blogs || []);
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
      <Navbar />
      <HeroBanner />
      <HeroAbout />
      <HeroService />
      <HeroInstallation />
      <HeroTestimonial />
      <HeroPartner />

      <section className="mt-0 pb-10 bg-[#FDF6E6] px-4 sm:px-8 md:px-10">
        <h2 className="text-lg sm:text-xl md:text-[20px] uppercase tracking-widest text-[#00382F] mb-6 sm:mb-10">
          LATEST FROM THE BLOG
        </h2>

        <div className="relative">
          <button
            onClick={() => scroll(popularRef, "left")}
            className="absolute left-2 z-10 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow"
          >
            <ChevronLeft />
          </button>

          <div
            ref={popularRef}
            className="flex space-x-4 overflow-x-auto no-scrollbar scroll-smooth px-2 pt-4"
          >
            {blogs.map((blog, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[80%] sm:w-[240px] md:w-[350px] px-1"
              >
                <BlogCard {...blog} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(popularRef, "right")}
            className="absolute right-2 z-10 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      <FAQ />
      <HeroCertifications />
      <AboveFooter />
      <Footer />
    </main>
  );
}
