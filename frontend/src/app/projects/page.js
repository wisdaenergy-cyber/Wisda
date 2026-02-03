"use client"


import ProjectBanner from "@/components/Project/ProjectBanner";
import ProjectCards from "@/components/Project/ProjectCard";
import ProjectImpact from "@/components/Project/ProjectImpact";
import ProjectMap from "@/components/Project/ProjectMap";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {
  const [roof,setRoof]=useState([])
  const [ground,setGround]=useState([])
  const [PM,setPM]=useState([])
  const [AMC,setAMC]=useState([])


useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/project/roof/all`)
        setRoof(res.data.projects || []);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
    };
    fetchBlogs();
    const fetchGround = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/project/ground/all`)
        setGround(res.data.projects || []);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
    };
    fetchGround();
    const fetchPM = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/project/pm/all`)
        setPM(res.data.projects || []);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
    };
    fetchPM();
    const fetchAMC = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/project/amc/all`)
        setAMC(res.data.projects || []);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
    };
    fetchAMC();
  }, []);
  return (
    <main>
        <div className="bg-[#FDF6E6]">
     <ProjectBanner/>
     <ProjectCards heading={"Rooftop Solar Solution"} data={roof}/>
     {/* <ProjectImpact/> */}
     <ProjectCards heading={"Ground Mounted Solar"} data={ground}/>
     {/* <ProjectCards heading={"PM Subsidy"} data={PM}/> */}
     <ProjectCards heading={"AMC Services"} data={AMC}/>
     <ProjectMap/>
     </div>
    </main>
  );
}
