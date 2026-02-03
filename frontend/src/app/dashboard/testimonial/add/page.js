"use client";

import axios from "axios";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CreateBlogPage() {
  const router = useRouter();
  const [fileError, setFileError] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
      if (!validTypes.includes(uploadedFile.type)) {
        setFileError("Please upload a valid image (JPG, PNG, GIF, or WEBP).");
        setSelectedFileName("");
        setFile(null);
        toast.error("Invalid image type.");
        return;
      }

      setFileError("");
      setSelectedFileName(uploadedFile.name);
      setFile(uploadedFile);
    }
  };

  const handleSubmit = async () => {
  if (!title.trim() || !content.trim()) {
    toast.error("Title and Content cannot be empty.");
    return;
  }

  if (!file) {
    toast.error("Please upload a valid image.");
    return;
  }

  const token = localStorage.getItem("token");
  const formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.append("image", file);

  try {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/testimonial/upload`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    toast.success("Testimonial created successfully! ✅");
    setTitle("");
    setContent("");
    setFile(null);
    setSelectedFileName("");
    router.push("/dashboard/testimonial");
  } catch (err) {
    toast.error("Something went wrong while creating the blog.");
    console.error(err);
  }
};


  return (
    <div className="flex min-h-screen bg-[#DCD6C8]">
      <div className="flex flex-col flex-1">
        <div className="p-8">
          <div className="bg-[#F8F6EF] rounded-xl border border-teal-800 p-6">
            <div className="flex items-center gap-2 mb-6 text-[#278188]">
              <div
                className="cursor-pointer"
                onClick={() => {
                  router.push("/dashboard/testimonial");
                }}
              >
                <ArrowLeft size={20} />
              </div>
              <h2 className="text-2xl font-semibold">Create Testimonial</h2>
            </div>

            <label className="text-[#278188] font-medium">Name</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border mt-1 mb-4 p-2 rounded"
              placeholder="Enter your name"
            />

            <label className="text-[#278188] font-medium">Text</label>
            <div className="border p-3 rounded mb-4 bg-white">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-32 p-2 border rounded resize-none"
                placeholder="Write your review here..."
              ></textarea>
            </div>

            <label className="text-[#278188] font-medium block mb-1">Image</label>
            <div className="mb-6">
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer inline-block bg-[#278188] text-white px-4 py-2 rounded hover:bg-[#226e70] transition"
              >
                Choose Image
              </label>
              {selectedFileName && (
                <span className="ml-3 text-sm text-gray-700">{selectedFileName}</span>
              )}
              {fileError && (
                <p className="text-red-600 text-sm mt-2">{fileError}</p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#278188] text-white py-2 rounded hover:bg-[#226e70] transition"
            >
              Create Testimonial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
