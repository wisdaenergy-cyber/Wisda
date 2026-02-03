"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BlogCard from "@/components/Dashboard/BlogCard";
import axios from "axios";
import ProjectCardsGround from "@/components/Dashboard/ProjectCardPM";


const fallbackDescription =
  "Lorem ipsum dolor sit amet consectetur. Aliquam eu placerat sagittis mi. Pellentesque lacus pharetra molestie purus.";

export default function RoofPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/dashboard/signin");
    } else {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/project/pm/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlogs(res.data.projects || []);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return null;

  return (
    <div className="flex min-h-screen bg-[#E2DCD0]">
      <div className="flex-1 p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="bg-[#FFFDF6] rounded-xl px-6 py-4 shadow flex flex-col sm:flex-row gap-4 items-start sm:items-center md:w-[800px]">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
               PM subsidy
              </h2>
              <p className="text-[#278188] font-medium">Total {Blogs.length}</p>
            </div>
          </div>

          <button className="px-25 py-6 bg-white rounded-2xl border border-[#278188] text-[#278188] font-medium shadow hover:bg-teal-50 cursor-pointer" onClick={()=>{
            router.push("/dashboard/projects/pm/add")
          }}>
            + Create New
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Blogs.map((b, idx) => (
            <ProjectCardsGround
              key={idx}
              id={b._id}
              title={b.title}
              image={b.image}
              location={b.location}
              description={
                b.content
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
