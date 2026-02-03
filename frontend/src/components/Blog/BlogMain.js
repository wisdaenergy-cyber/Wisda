'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import BlogCard4 from '../Blogs/BlogsCard4';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';

const createSlug = (title) => {
  if (!title) return "";
  const lowerSlug = title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') 
    .replace(/[\s_-]+/g, '-') 
    .replace(/^-+|-+$/g, ''); 
  
  return lowerSlug.charAt(0).toUpperCase() + lowerSlug.slice(1);
};
export default function BlogMain() {
  const { id: slug } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  // Removed popularRef as it is no longer needed for sliding
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs/all`);
        const fetched = res.data.blogs || [];
        setBlogs(fetched);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      if (!slug || blogs.length === 0) return;

      setLoading(true);
      try {
        const foundBlog = blogs.find(b => createSlug(b.title) === slug);

        if (foundBlog) {
          const token = localStorage.getItem("token");
          const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs/blog/${foundBlog._id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setBlog(res.data.blog || {});
        } else {
          console.error("Blog not found for slug:", slug);
        }
      } catch (error) {
        console.error("Failed to fetch specific blog", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [slug, blogs]);

  const content = blog.content || "";
  const words = content.split(/\s+/);
  const firstHalf = words.slice(0, 500).join(" ");
  const rest = words.slice(500).join(" ");

  return (
    <main className="px-4 sm:px-6 md:px-20 py-8 space-y-10">
      {/* Blog Meta */}
      <div className="text-xs sm:text-sm text-gray-500 flex flex-wrap gap-2 sm:gap-4 items-center">
        <span>June 25, 2025</span>
        <span className="flex gap-1 sm:gap-2">• 222 Reads</span>
        <span className="flex gap-1 sm:gap-2">• 9 mins</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
        <Image
          src={blog.image}
          alt="Family with Solar"
          width={600}
          height={200}
          className="rounded-lg object-cover w-full"
        />
        <div className="text-justify text-gray-700 space-y-4 text-sm sm:text-base">
          <p>{firstHalf || "Loading blog content..."}</p>
        </div>
      </div>
      {rest && (
        <div className="text-justify text-gray-700 space-y-6 text-sm sm:text-base">
          <p>{rest}</p>
        </div>
      )}
      
      <section className="mb-16">
        <div className="flex justify-between items-center mb-4 sm:mb-6 md:mt-20">
          <h2 className="text-xl sm:text-3xl font-semibold text-green-950">
            Related Blogs
          </h2>
        </div>
        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {blogs.map((blog, idx) => (
            <div key={idx} className="w-full flex justify-center">
              <BlogCard4 {...blog} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
