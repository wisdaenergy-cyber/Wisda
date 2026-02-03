"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function DashboardAuthWrapper({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (pathname.startsWith("/dashboard") && pathname !== "/dashboard/signin") {
      if (!token) {
        router.replace("/dashboard/signin");
      }
    }
  }, [pathname, router]);

  return children;
}
