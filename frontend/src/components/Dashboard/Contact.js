import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ContactsTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getContacts() {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/contact/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(res.data.contacts);
      } catch (error) {
        console.log(error);
        toast.error("Failed to load contacts. Please try again.");
      }
    }

    getContacts();
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f0e8] px-8 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-black">All Contacts</h1>
        <button className="text-gray-500">
          <span className="text-2xl font-bold">⋮</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#E2DCD0] rounded-md">
          <thead className="text-left text-[#278188] text-sm font-light border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Customer Name</th>
              <th className="py-3 px-4">Solar Type</th>
              <th className="py-3 px-4">Phone Number</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">City</th>
              <th className="py-3 px-4">State</th>
              <th className="py-3 px-4">Bill</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {data.map((contact, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">{contact.name}</td>
                <td className="py-3 px-4">{contact.solarType}</td>
                <td className="py-3 px-4">{contact.phone}</td>
                <td className="py-3 px-4">{contact.email}</td>
                <td className="py-3 px-4">{contact.city}</td>
                <td className="py-3 px-4">{contact.state}</td>
                <td className="py-3 px-4">{contact.bill}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
