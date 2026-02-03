"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowUpRight } from "lucide-react";

import ServiceContent from "./ServiceContent";
import ServiceBanner from "./ServiceBanner";
import ProjectCards from "../Project/ProjectCard";

export default function ServiceSwitcher() {
  const [roof, setRoof] = useState([]);
  const [ground, setGround] = useState([]);
  const [PM, setPM] = useState([]);
  const [AMC, setAMC] = useState([]);
  const [activeKey, setActiveKey] = useState("roof");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [roofRes, groundRes, pmRes, amcRes] = await Promise.all([
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/project/roof/all`),
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/project/ground/all`),
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/project/pm/all`),
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/project/amc/all`),
        ]);
        setRoof(roofRes.data.projects || []);
        setGround(groundRes.data.projects || []);
        setPM(pmRes.data.projects || []);
        setAMC(amcRes.data.projects || []);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };
    fetchData();
  }, []);

  const serviceMap = {
    roof: { heading: "Rooftop Solar Solutions", data: roof },
    ground: { heading: "Ground Mounted Solar", data: ground },
    pm: { heading: "Annual Maintenance", data: AMC },
  };

  return (
    <div className="flex flex-col">
      <ServiceBanner title={serviceMap[activeKey].heading} />
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 px-4 md:px-6 py-6">
        <div className="flex flex-col w-full md:w-1/4 gap-4 md:ml-6">
          {Object.keys(serviceMap).map((key) => (
            <button
              key={key}
              onClick={() => setActiveKey(key)}
              className={`flex items-center justify-between px-3 py-3 rounded-2xl shadow-md font-medium md:font-semibold transition-all text-sm md:text-base ${
                activeKey === key
                  ? "bg-[#EBFFD0] text-black"
                  : "bg-[#8EC643] text-white hover:bg-[#EBFFD0] hover:text-black"
              }`}
            >
              <span className="truncate">{serviceMap[key].heading}</span>
              <div className="bg-[#166066] p-2 rounded-full ml-2 shrink-0">
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
            </button>
          ))}
        </div>
        <div className="w-full md:w-3/4">
          <ServiceContent serviceKey={activeKey} />
        </div>
      </div>
      <div className="px-4 md:px-6 pb-12">
        <ProjectCards
          heading={serviceMap[activeKey].heading}
          data={serviceMap[activeKey].data}
        />
      </div>
    </div>
  );
}
