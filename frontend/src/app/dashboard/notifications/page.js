"use client";

import { useEffect, useState } from "react";
import io from "socket.io-client";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const socket = io(process.env.NEXT_PUBLIC_API_URL || "https://wisda-backend-1c9n.onrender.com");

export default function NotificationsPanel() {
  const [notifications, setNotifications] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/contact/notifications`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then((data) => setNotifications(data.notifications || []));

    socket.on("newNotification", (notification) => {
      setNotifications((prev) => [notification, ...prev]);
    });

    return () => socket.off("newNotification");
  }, []);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="bg-[#d8d0c2] min-h-screen p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#008080] ml-20">Notifications</h2>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
            className="sr-only"
          />
        </label>
      </div>

      <div className="space-y-3 w-[1000px] ml-20">
        {notifications.map((n) => (
          <div
            key={n._id || n.id}
            className="bg-[#f7f5f0] border rounded-xl p-4 shadow-sm"
          >
            <div className="flex items-center">
              <img
                src="/AboutLeader3.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full mr-4 object-cover"
              />
              <div className="flex-1">
                <p className="font-semibold text-gray-900">
                  {n.name || "Unknown"}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(n.timestamp).toLocaleString()}
                </p>
              </div>
              <button onClick={() => toggleExpand(n._id || n.id)}>
                {expanded === (n._id || n.id) ? (
                  <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>

            {expanded === (n._id || n.id) && (
              <div className="mt-3 text-sm text-gray-700 space-y-1">
                <p>Email: {n.email || "N/A"}</p>
                <p>Phone: {n.phone || "N/A"}</p>
                <p>City: {n.city || "N/A"}</p>
                <p>State: {n.state || "N/A"}</p>
                <p>Solar Type: {n.solarType || "N/A"}</p>
                <p>Bill: {n.bill || "N/A"}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
