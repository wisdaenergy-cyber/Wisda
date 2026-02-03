"use client";
import Sidebar from "@/components/Dashboard/SideBar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import io from "socket.io-client";
import axios from "axios";

const socket = io(process.env.NEXT_PUBLIC_API_URL || "https://wisda-backend-1c9n.onrender.com");

export default function DashboardLayout({ children }) {
  const [count, setCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/contact/notifications/unread-count`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setCount(res.data.count || 0))
      .catch((err) => console.error(err));

    socket.on("newNotification", () => {
      setCount((prev) => prev + 1);
    });

    return () => {
      socket.off("newNotification");
    };
  }, []);

const handleClick = async () => {
  try {
    const token = localStorage.getItem("token");
    await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/contact/notifications/mark-all-read`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setCount(0);
    router.push("/dashboard/notifications");
  } catch (error) {
    console.error("Error marking notifications as read:", error);
  }
};

  return (
    <div>
      <Sidebar />
      <div className="ml-[240px] min-h-screen bg-white">
        <div className="bg-[#278188] h-16 flex items-center justify-between px-6">
          <input
            type="text"
            placeholder="Search product, supplier, order"
            className="bg-transparent border border-white/50 text-white px-4 py-2 rounded-md w-[300px] placeholder-white ml-12"
          />
          <div className="flex items-center gap-4">
            <button
              onClick={handleClick}
              className="relative text-white focus:outline-none"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5706 21.3525C20.8996 21.0767 23.188 20.5271 25.3881 19.715C23.5248 17.651 22.4953 14.9681 22.4994 12.1875V11.25C22.4994 9.26088 21.7092 7.35322 20.3027 5.9467C18.8962 4.54018 16.9885 3.75 14.9994 3.75C13.0103 3.75 11.1026 4.54018 9.69607 5.9467C8.28955 7.35322 7.49938 9.26088 7.49938 11.25V12.1875C7.50315 14.9683 6.47311 17.6512 4.60938 19.715C6.77563 20.515 9.05937 21.0713 11.4281 21.3525M18.5706 21.3525C16.1981 21.6339 13.8006 21.6339 11.4281 21.3525M18.5706 21.3525C18.7508 21.9148 18.7955 22.5117 18.7014 23.0947C18.6072 23.6776 18.3767 24.23 18.0286 24.707C17.6805 25.184 17.2248 25.572 16.6984 25.8395C16.172 26.107 15.5898 26.2465 14.9994 26.2465C14.4089 26.2465 13.8268 26.107 13.3004 25.8395C12.774 25.572 12.3182 25.184 11.9702 24.707C11.6221 24.23 11.3916 23.6776 11.2974 23.0947C11.2032 22.5117 11.248 21.9148 11.4281 21.3525"
                  stroke="#F4F5EE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1.5">
                  {count}
                </span>
              )}
            </button>
            <div className="w-8 h-8 rounded-full bg-white" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
