'use client';

import BlogCard from "./BlogCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import BlogCard2 from "./BlogsCard2";
import BlogCard3 from "./BlogsCard3";
import axios from "axios";

export default function Blogs() {
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

  const chunkSize = 3;
  const chunkedBlogs = Array.from(
    { length: Math.ceil(blogs.length / chunkSize) },
    (_, i) => blogs.slice(i * chunkSize, i * chunkSize + chunkSize)
  );

  if (loading) return <div className="p-10 text-center text-xl">Loading...</div>;
  if (blogs.length === 0) return <div className="p-10 text-center text-xl">No blogs available.</div>;

  return (
    <main className="bg-[#fdf7e8] p-4 sm:p-6 min-h-screen">
      <section className="mt-10 mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#00382F] mb-6 sm:mb-10 ml-2 sm:ml-14">
          Latest Blogs
        </h2>
        <div className="relative">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            className="absolute left-0 z-10 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-[#00382F] hover:text-white hidden sm:flex"
          >
            <ChevronLeft />
          </button>

          {chunkedBlogs[page] && (
            <div className="
              grid gap-4 px-2 sm:px-14
              grid-cols-1 
              sm:grid-cols-3 sm:grid-rows-2
            ">
              <div className="sm:col-span-2 sm:row-span-2">
                {chunkedBlogs[page][0] && (
                  <BlogCard2
                    {...chunkedBlogs[page][0]}
                    description={
                      chunkedBlogs[page][0]?.content?.slice(0, 10) + "..." ||
                      "Lorem ipsum dolor sit amet consectetur."
                    }
                  />
                )}
              </div>
              {chunkedBlogs[page].slice(1).map((blog, idx) => (
                <div key={idx} className="sm:col-span-1 sm:row-span-1">
                  <BlogCard3
                    {...blog}
                    description={
                      blog?.content?.slice(0, 10) + "..." ||
                      "Lorem ipsum dolor sit amet consectetur."
                    }
                  />
                </div>
              ))}
            </div>
          )}
          <button
            onClick={() =>
              setPage((p) => (p + 1 < chunkedBlogs.length ? p + 1 : p))
            }
            className="absolute right-0 z-10 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-[#00382F] hover:text-white hidden sm:flex"
          >
            <ChevronRight />
          </button>
        </div>
      </section>
      <section className="mb-20">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-green-950 ml-2 sm:ml-10 mb-4 sm:mb-10">
            Some Popular Blogs
          </h2>
          <a href="#" className="text-[#00382F] font-medium hover:underline mr-2 sm:mr-5 md:block hidden">
            View More →
          </a>
        </div>
        <div className="relative">
          <button
            onClick={() => scroll(popularRef, 'left')}
            className="absolute left-0 z-10 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-[#00382F] hover:text-white hidden sm:flex"
          >
            <ChevronLeft />
          </button>
          <div
            ref={popularRef}
            className="flex space-x-4 overflow-x-auto no-scrollbar scroll-smooth px-2 sm:px-10"
          >
            {blogs.map((blog, idx) => (
              <div key={idx} className="min-w-[260px] sm:min-w-[300px] flex-shrink-0">
                <BlogCard {...blog} />
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll(popularRef, 'right')}
            className="absolute right-0 z-10 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-[#00382F] hover:text-white hidden sm:flex"
          >
            <ChevronRight />
          </button>
        </div>
      </section>
    </main>
  );
}
