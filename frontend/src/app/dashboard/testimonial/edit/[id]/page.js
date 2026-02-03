
"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const blogId = params?.id;

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/testimonial/blog/${blogId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const { title, content, image } = res.data.blog;
        setForm({ title, description:content, image });
      } catch (err) {
        toast.error("Failed to load blog data.");
        router.push("/dashboard/testimonial");
      }
    };

    if (blogId) fetchBlog();
  }, [blogId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("content", form.description);
    formData.append("blogId", blogId);
    if (file) formData.append("image", file);

    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/testimonial/update`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Testimonial updated successfully!");
      router.push("/dashboard/testimonial");
    } catch (err) {
      toast.error("Update failed!");
    }
  };

  return (
    <div className="min-h-screen bg-[#E2DCD0] p-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-[#278188]">Edit Testimonial</h2>

        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Text</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded p-2 h-32"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Image</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="bg-[#278188] text-white px-4 py-2 rounded"
          />
          {form.image && (
            <div className="mt-2">
              <img src={form.image} alt="Current" className="w-32 h-20 object-cover rounded" />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#278188] text-white px-6 py-2 rounded shadow hover:bg-teal-700"
        >
          Update Testimonial
        </button>
      </form>
    </div>
  );
}
