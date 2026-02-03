"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

export default function ContactBannerSection({ title }) {
  const [preview, setPreview] = useState(null);
  const [banner,setBanner]=useState("")
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      setSelectedFile(file);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

const handleConfirm = async () => {
    if (selectedFile) {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("image", selectedFile);
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/banner/contact/upload`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
       toast.success("Banner uploaded successfully.");
        setBanner(preview);
      } catch (err) {
        console.error(err);
        toast.error("Failed to upload banner.");
      }
    } else {
      alert("Please select an image first.");
    }
  };



  useEffect(()=>{
try {
    async function getBanner()
    {
        const res=await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/banner/contact/banner`)
        setBanner(res.data.image)
    }
    getBanner()
} catch (error) {
    console.log(error)
}
  },[])
  const imageSrc = preview || (banner ? banner : "/HeroBanner.jpg");


  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-[#278188] mb-2">{title}</h2>
      <div className="bg-[#FCFAF3] p-4 rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-black font-medium mb-2">Banner Present Image</p>
            <div className="w-[360px] h-[160px] relative rounded-md overflow-hidden bg-white flex items-center justify-center">
              <Image
                src={imageSrc}
                alt="Selected Banner"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        <div className="flex flex-col gap-2">
          <button
            onClick={openFileDialog}
            className="bg-[#278188] text-white px-4 py-2 rounded-md shadow hover:bg-teal-800 text-sm flex items-center gap-2"
          >
            <span className="text-white text-xl">+</span>
            Add New
          </button>

          <button
            onClick={handleConfirm}
            className="bg-[#278188] text-white px-4 py-2 rounded-md shadow hover:bg-[#1e6b70] text-sm"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
