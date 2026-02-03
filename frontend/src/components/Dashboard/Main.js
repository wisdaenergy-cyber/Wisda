"use client"

import axios from "axios"
import { Users, Zap, Droplet, Leaf } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const [blogs, setBlogs] = useState([])
  const [blogLen, setBloglen] = useState(0)
  const [contacts, setContacts] = useState([])
  const [contactlen, setContactlen] = useState(0)
  const [testimonials, setTestimonials] = useState([])
  const [testimoniallen, setTestimoniallen] = useState(0)
  const [totalproject, setTotalProject] = useState(0)

  const [stats, setStats] = useState({
    units: "",
    kilowatts: "",
    solarPump: "",
    co2: "",
    happyCustomers: "",
  })

  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")

    async function getBlog() {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs/all`)
      setBlogs(res.data.blogs)
      setBloglen(res.data.blogs.length)
    }

    async function getContact() {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/contact/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setContacts(res.data.contacts)
      setContactlen(res.data.contacts.length)
    }

    async function getTestimonial() {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/testimonial/all`)
      setTestimonials(res.data.blogs)
      setTestimoniallen(res.data.blogs.length)
    }

    async function getProject() {
      const roof = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/project/roof/all`)
      const ground = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/project/ground/all`)
      const pm = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/project/pm/all`)
      const amc = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/project/amc/all`)

      setTotalProject(
        roof.data.projects.length +
          ground.data.projects.length +
          pm.data.projects.length +
          amc.data.projects.length
      )
    }

    async function getStats() {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/stats/all`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.data.stats) {
        const { units, kilowatts, solarPump, co2, happyCustomers } = res.data.stats
        setStats({ units, kilowatts, solarPump, co2, happyCustomers })
      }
    }

    getBlog()
    getContact()
    getTestimonial()
    getProject()
    getStats()
  }, [])

  return (
    <div className="p-8 bg-[#E8E3DB] min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Hello User!</h1>
        <button
          className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          onClick={() => {
            router.push("/dashboard/main/edit")
          }}
        >
          Edit
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-[#116E72] text-white rounded-xl shadow-md p-4">
          <div className="flex items-center gap-2 mb-1">
            <Users size={18} />
            <span className="text-sm">Units</span>
          </div>
          <p className="text-2xl font-bold">{stats.units || "0"}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center gap-2 mb-1">
            <Zap size={18} />
            <span className="text-sm">Kilowatt</span>
          </div>
          <p className="text-xl font-semibold">{stats.kilowatts || "0"}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center gap-2 mb-1">
            <Droplet size={18} />
            <span className="text-sm">Solar Pumps</span>
          </div>
          <p className="text-xl font-semibold">{stats.solarPump || "0"}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center gap-2 mb-1">
            <Leaf size={18} />
            <span className="text-sm">CO₂ Offsets</span>
          </div>
          <p className="text-xl font-semibold">{stats.co2 || "0"}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-1">
            <Users size={18} />
            <span className="text-sm">Happy Customers</span>
          </div>
          <p className="text-xl font-semibold">{stats.happyCustomers || "0"}</p>
        </div>
        <div className="bg-[#116E72] text-white rounded-xl shadow-md p-4 flex justify-between items-center">
          <div>
            <p className="text-sm">Total Blogs</p>
            <p className="text-lg font-bold">{blogLen} Blogs</p>
          </div>
          <button className="text-white">→</button>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 flex justify-between items-center">
          <div>
            <p className="text-sm">Total Projects</p>
            <p className="text-lg font-bold">{totalproject} Projects</p>
          </div>
          <button>→</button>
        </div>
        <div className="bg-[#116E72] text-white rounded-xl shadow-md p-4 flex justify-between items-center">
          <div>
            <p className="text-sm">Total Testimonials</p>
            <p className="text-lg font-bold">{testimoniallen} Testimonials</p>
          </div>
          <button className="text-white">→</button>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 flex justify-between items-center">
          <div>
            <p className="text-sm">Total Contacts</p>
            <p className="text-lg font-bold">{contactlen} Contacts</p>
          </div>
          <button>→</button>
        </div>
      </div>
    </div>
  )
}
