'use client';

import ProjectCard from "@/components/Dashboard/ProjectCard";
import axios from "axios";
import { useEffect, useState } from "react";


export default function ProjectsPage() {
  const [roof,setRoof]=useState(0)
  const [ground,setGround]=useState(0)
  const [pm,setPM]=useState(0)
  const [amc,setAMC]=useState(0)
  useEffect(()=>{
  async function getProject() {
      const roof = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/project/roof/all`)
      const ground = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/project/ground/all`)
      const pm = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/project/pm/all`)
      const amc = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/project/amc/all`)
        setRoof(roof.data.projects.length )
         setGround(ground.data.projects.length)
          setPM(pm.data.projects.length)
          setAMC(amc.data.projects.length)
    }
    getProject()
  },[])

  const projectData = [
    { title: "Rooftop solutions", count:roof ,onclick:"roof" },
    { title: "Ground mounted", count:ground,onclick:"ground" },
    // { title: "PM subsidy", count: pm,onclick:"pm" },
    { title: "AMC", count: amc,onclick:"amc" },
  ];

  return (
    <main className="min-h-screen bg-[#d7d0c4] px-10 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Projects</h1>
      <div className="flex flex-wrap gap-6">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
}
