"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function TestimonialCard({ image, name, text, index, id }) {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  async function handleDelete() {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("You are not logged in");
        return;
      }

      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/testimonial/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Testimonial deleted successfully");
      window.location.reload();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete testimonial");
    }
  }

  return (
    <div
      key={index}
      className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-4 relative min-h-[160px]"
    >
      {/* Top Section */}
      <div className="flex items-center gap-3 relative">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <h3 className="font-semibold text-lg">{name}</h3>

        {/* Menu button */}
        <div
          className="ml-auto relative"
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          <button className="text-gray-500 hover:text-gray-700">⋮</button>

          {/* Dropdown menu */}
          {showMenu && (
            <div className="absolute right-0 top-6 w-40 bg-white rounded-md shadow-lg flex flex-col text-sm border z-20 -mt-3">
              <button
                className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-[#278188] border-b border-gray-200"
                onClick={() => {
                  router.push(`/dashboard/testimonial/edit/${id}`);
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6465 3.36519L13.9117 2.09919C14.1755 1.83543 14.5332 1.68726 14.9062 1.68726C15.2793 1.68726 15.637 1.83543 15.9008 2.09919C16.1645 2.36295 16.3127 2.72068 16.3127 3.09369C16.3127 3.4667 16.1645 3.82443 15.9008 4.08819L7.9365 12.0524C7.53999 12.4487 7.05102 12.74 6.51375 12.8999L4.5 13.4999L5.1 11.4862C5.25996 10.9489 5.55123 10.4599 5.9475 10.0634L12.6465 3.36519ZM12.6465 3.36519L14.625 5.34369M13.5 10.4999V14.0624C13.5 14.51 13.3222 14.9392 13.0057 15.2557C12.6893 15.5722 12.2601 15.7499 11.8125 15.7499H3.9375C3.48995 15.7499 3.06072 15.5722 2.74426 15.2557C2.42779 14.9392 2.25 14.51 2.25 14.0624V6.18744C2.25 5.73989 2.42779 5.31067 2.74426 4.9942C3.06072 4.67773 3.48995 4.49994 3.9375 4.49994H7.5"
                    stroke="#278188"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Edit
              </button>
              <button
                className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-[#FF4E4E]"
                onClick={handleDelete}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.055 6.7499L10.7955 13.4999M7.2045 13.4999L6.945 6.7499M14.421 4.3424C14.6775 4.3814 14.9325 4.42265 15.1875 4.4669M14.421 4.3424L13.62 14.7547C13.5873 15.1786 13.3958 15.5745 13.0838 15.8633C12.7717 16.1521 12.3622 16.3125 11.937 16.3124H6.063C5.63782 16.3125 5.22827 16.1521 4.91623 15.8633C4.6042 15.5745 4.41269 15.1786 4.38 14.7547L3.579 4.3424M14.421 4.3424C13.5554 4.21154 12.6853 4.11222 11.8125 4.04465M3.579 4.3424C3.3225 4.38065 3.0675 4.4219 2.8125 4.46615M3.579 4.3424C4.4446 4.21154 5.31468 4.11223 6.1875 4.04465M11.8125 4.04465V3.35765C11.8125 2.47265 11.13 1.73465 10.245 1.7069C9.41521 1.68038 8.58479 1.68038 7.755 1.7069C6.87 1.73465 6.1875 2.4734 6.1875 3.35765V4.04465M11.8125 4.04465C9.94029 3.89996 8.05971 3.89996 6.1875 4.04465"
                    stroke="#FF4E4E"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Text */}
      <p className="text-gray-700 text-sm">{text}</p>
    </div>
  );
}
