"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Settings, LogOut } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = (path) => pathname === path;
   const [showModal, setShowModal] = useState(false);

  return (

    <>
    <aside className="fixed top-0 left-0 h-screen w-64 bg-[#FFFDF6] px-6 py-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-10">
          <div className="w-10 h-10 rounded-full bg-black" />
          <span className="text-lg font-semibold text-teal-800">Wisda Energy</span>
        </div>

        <nav className="flex flex-col gap-8 text-gray-800">
          <NavItem href="/dashboard/main" active={isActive("/dashboard/main")}>
            <Home size={18} /> Dashboard
          </NavItem>

          <NavItem href="/dashboard/blog" active={isActive("/dashboard/blog")}>
            <BlogIcon /> Blogs
          </NavItem>

          <NavItem href="/dashboard/media" active={isActive("/dashboard/media")}>
            <ImageIcon /> Media management
          </NavItem>

          <NavItem href="/dashboard/projects" active={isActive("/dashboard/projects")}>
            <span className="text-xl">///</span> Projects
          </NavItem>

          <NavItem href="/dashboard/testimonial" active={isActive("/dashboard/testimonial")}>
            <TestimonialIcon /> Testimonials
          </NavItem>

          <NavItem href="/dashboard/contact" active={isActive("/dashboard/contact")}>
            <ContactIcon /> Contacts
          </NavItem>
        </nav>
      </div>

      <div className="flex flex-col gap-4 mt-8 text-gray-800">
        <Link
          href="#"
          className="flex items-center gap-3 text-red-600 hover:text-red-700"
          onClick={() => setShowModal(true)}
        >
          <LogOut size={18} /> Log Out
        </Link>
      </div>
    </aside>
     {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-80 p-6 text-center">
            <h2 className="text-lg font-semibold mb-4">Are you sure to Log out?</h2>
            <div className="flex flex-col gap-3">
              <button
                className="text-red-600 font-semibold hover:text-red-700 cursor-pointer"
                onClick={() => {
                  localStorage.clear()
                  router.push("/dashboard/signin")
                  console.log("Logged out");
                }}
              >
                Log Out
              </button>
              <button
                className="text-gray-600 hover:text-gray-800 cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      </>
  );
}
function NavItem({ href, active, children }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 ${
        active ? "text-[#278188] font-semibold" : "text-gray-800"
      } hover:text-[#278188]`}
    >
      {children}
    </Link>
  );
}
function BlogIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="black" viewBox="0 0 24 24">
      <path
        d="M12 6.042C10.35 4.563 8.21 3.747 6 3.75c-1.052 0-2.062.18-3 .512v14.25A11.01 11.01 0 016 18c2.305 0 4.408.867 6 2.292M12 6.042C13.65 4.563 15.79 3.747 18 3.75c1.052 0 2.062.18 3 .512v14.25A11.01 11.01 0 0018 18c-2.21 0-4.35.816-6 2.292M12 6.042v14.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="black" viewBox="0 0 24 24">
      <path
        d="M2.25 15.75L7.4 10.6c.2-.2.45-.36.72-.47.27-.11.56-.17.88-.17s.61.06.88.17c.27.11.52.27.72.47L15.75 15.75M14.25 14.25L15.66 12.84a2.85 2.85 0 0 1 4.18 0L21.75 15.75M3.75 19.5h16.5a1.5 1.5 0 0 0 1.5-1.5v-12a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TestimonialIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M8 14H16V13.45C16 12.7167 15.6333 12.125 14.9 11.675C14.1667 11.225 13.2 11 12 11C10.8 11 9.83333 11.225 9.1 11.675C8.36667 12.125 8 12.7167 8 13.45V14ZM12 10C12.55 10 13.0208 9.80417 13.4125 9.4125C13.8042 9.02083 14 8.55 14 8C14 7.45 13.8042 6.97917 13.4125 6.5875C13.0208 6.19583 12.55 6 12 6C11.45 6 10.9792 6.19583 10.5875 6.5875C10.1958 6.97917 10 7.45 10 8C10 8.55 10.1958 9.02083 10.5875 9.4125C10.9792 9.80417 11.45 10 12 10ZM2 22V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H6L2 22ZM5.15 16H20V4H4V17.125L5.15 16Z"
        fill="black"
      />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="black" viewBox="0 0 24 24">
      <path
        d="M2.25 6.75C2.25 15.034 8.966 21.75 17.25 21.75H19.5a2.25 2.25 0 0 0 2.25-2.25V18.128a1.125 1.125 0 0 0-.852-1.09L16.475 15.93a1.125 1.125 0 0 0-1.173.418l-1.003 1.293a1.125 1.125 0 0 1-1.21.379C11.485 17.42 9.998 16.47 8.765 15.235 7.53 14.002 6.58 12.515 5.979 10.878a1.125 1.125 0 0 1 .38-1.21l1.293-1.003a1.125 1.125 0 0 0 .418-1.173L6.963 3.102A1.125 1.125 0 0 0 5.872 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5V6.75Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
