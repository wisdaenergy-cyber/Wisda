"use client"
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function BlogBanner() {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs/blog/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const fetched = res.data.blog || {};
        setBlog(fetched);
      } catch (error) {
        console.error("Failed to fetch blog", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchBlogs();
  }, [id]);
  return (
    <div className="font-sans mb-20">
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/CareerBanner.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-4">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#8EC643] md:mt-40"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
           {blog.title}
          </h1>
        </div>
      </div>
      </div>)
}
