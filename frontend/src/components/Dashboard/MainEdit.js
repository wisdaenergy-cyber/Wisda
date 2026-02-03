import { useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/navigation";
export default function HomeScreenStats() {
  const [stats, setStats] = useState({
    units: "",
    kilowatts: "",
    solarPump: "",
    co2: "",
    happyCustomers: "",
  })
  const router = useRouter();
  useEffect(() => {
    async function fetchStats() {
      try {
        const token = localStorage.getItem("token")
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/stats/all`, {
          headers: { Authorization: `Bearer ${token}` },
        })

        if (res.data.stats) {
          const { units, kilowatts, solarPump, co2, happyCustomers } =
            res.data.stats
          setStats({ units, kilowatts, solarPump, co2, happyCustomers })
        }
      } catch (error) {
        console.error("Failed to fetch stats:", error)
      }
    }
    fetchStats()
  }, [])

  const handleChange = (e) => {
    setStats({ ...stats, [e.target.name]: e.target.value })
  }

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token")
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/stats/update`,
        stats,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      router.push("/dashboard/main")
    } catch (error) {
      alert(error.response?.data?.message || "Update failed")
    }
  }

  return (
    <div className="p-6 bg-[#E8E3DB] min-h-screen flex items-center justify-center">
      <div className="bg-[#F7F5EE] rounded-xl shadow-md p-6 w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-6">Home Screen Stats</h2>
        <div className="space-y-5">
          {Object.keys(stats).map((key) => (
            <div key={key} className="flex items-center">
              <label className="w-48 font-semibold text-gray-800 capitalize">
                {key}
              </label>
              <input
                type="text"
                name={key}
                value={stats[key] || ""}
                onChange={handleChange}
                className="flex-1 px-4 py-2 rounded-lg bg-[#D8D2C4] text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-[#166066] text-white rounded-lg shadow-md cursor-pointer transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
