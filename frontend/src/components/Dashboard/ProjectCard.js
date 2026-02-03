"use client";

import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function ProjectCard({ title, count, onclick }) {
  const router = useRouter();

  return (
    <div
      className="bg-[#FEFCF5] p-6 rounded-xl shadow-md min-w-[300px] flex flex-col justify-between hover:shadow-lg transition cursor-pointer"
      onClick={() => {
        router.push(`/dashboard/projects/${onclick}`);
      }}
    >
      <div className="text-2xl font-extrabold text-gray-900">{title}</div>
      <div className="text-sm text-gray-500 mt-1">{count} projects</div>
      <div className="ml-auto mt-2">
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </div>
    </div>
  );
}
