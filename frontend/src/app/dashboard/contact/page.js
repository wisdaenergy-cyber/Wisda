"use client"


import ContactsTable from "@/components/Dashboard/Contact";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function About()
{
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
    return (
        <div>
      <ContactsTable/>
      </div>
    )
}