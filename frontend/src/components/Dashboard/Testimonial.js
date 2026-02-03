"use client";

import { Plus } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const testimonials = [
  {
    name: "Ravi Kumar",
    text: "We were paying huge monthly electricity bills before switching to solar. The team at [Your Company Name] did a free audit and installed a rooftop system within a week. Now, our bills are down by 80%! Super professional and helpful.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Neha Sharma",
    text: "I was worried solar installation would take weeks, but [Your Company Name] completed it in just 4 days. They handled all government approvals and subsidy paperwork. Truly smooth experience!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Manoj Jain",
    text: "We were facing frequent power cuts in our industrial unit. The team recommended a ground-mounted solar + battery backup system. Now, our operations run non-stop with clean energy.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Ankita Desai",
    text: "After 6 months, one panel had a wiring issue. I called them and they came the next day and fixed it without any extra charges. Great after-sales support and very responsive team.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Ramesh Iyer",
    text: "As a senior citizen, I was hesitant about switching to solar. Their advisor explained everything in simple terms, showed me how much I could save, and didn’t pressure me. I felt confident and now I’m glad I made the switch.",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
];



export default function TestimonialsPage() {
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
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/testimonial/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlogs(res.data.blogs || []);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return null;
  return (
    <div className="bg-[#E2DCD0] min-h-screen p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="bg-[#FFFDF6] rounded-xl px-6 py-4 shadow flex flex-col sm:flex-row gap-4 items-start sm:items-center md:w-[800px]">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Number of Testimonials
              </h2>
              <p className="text-[#278188] font-medium">Total {Blogs.length}</p>
            </div>
          </div>

          <button className="px-25 py-6 bg-white rounded-2xl border border-[#278188] text-[#278188] font-medium shadow hover:bg-teal-50 cursor-pointer" onClick={()=>{
            router.push("/dashboard/testimonial/add")
          }}>
            + Create New
          </button>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Blogs.map((t, index) => (
          <TestimonialCard name={t.title} image={t.image} text={t.content} index={index} key={index} id={t._id}/>
        ))}
      </div>
    </div>
  );
}
