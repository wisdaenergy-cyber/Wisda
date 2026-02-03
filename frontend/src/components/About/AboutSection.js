'use client';

import Image from "next/image";
import solarImage from "@/public/AboutSolar1.jpg";
import solarImage2 from "@/public/AboutSolar2.jpg";
import { useRouter } from "next/navigation";


export default function AboutSection() {
  const router = useRouter();
  return (
    <section className="text-[#00382F] font-sans px-4 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center md:mb-20">
          <div>
            <h2 
              className="text-2xl sm:text-3xl font-bold md:mt-4 -mt-16" 
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Who Are We?
            </h2>
            <p className="mb-4 mt-5 text-base sm:text-lg">
              WISDA Energy stands for <em>Wisdom + Sustainability + Action.</em> We are a
              purpose-driven socio-commercial enterprise committed to building a clean,
              inclusive, and sustainable energy future for India.
            </p>
            <p className="mb-6 mt-5 text-base sm:text-lg">
              Inspired by the motto <em>“Together for Future,”</em> we work hand-in-hand with
              citizens, communities, corporates, and government bodies to make solar energy
              accessible and affordable.
            </p>
            <button
            onClick={() => router.push("/contact-us")}
            className="bg-[#8EC643] cursor-pointer transition-colors text-black mt-6 px-5 py-2 rounded-2xl shadow hover:bg-[#7ab837]">
              Get a Quote
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/dimfwawfk/image/upload/v1761831532/70af0ce1b107ca083c10d3c611f70ff3764ff7b0_n4ogek.jpg"
              alt="Solar Panel"
              className="hidden md:block rounded-lg shadow-lg object-cover max-w-full h-auto"
              width={500}
              height={600}
              priority
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 
              className="text-xl sm:text-[22px] font-semibold mb-4 text-center text-[#8EC643] md:mt-6"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Our Vision
            </h3>
            <p className="text-base sm:text-[17px] leading-relaxed mt-4">
              We envision a solar-powered India where every rooftop generates clean energy,
              every village is energy-resilient, and every citizen actively participates in
              building a sustainable future. By turning homes into power hubs and empowering
              rural communities, we aim to create a collective movement toward cleaner,
              greener living—one rooftop, one village, one citizen at a time.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="https://res.cloudinary.com/dimfwawfk/image/upload/v1761831606/617eb69cf682b745de005909fba1aab13ddf2997_hte7wp.jpg"
              alt="Solar Installation"
              className="rounded-lg shadow-lg object-cover max-w-full h-auto md:w-[800px] md:h-[400px]"
              width={400}
              height={400}
            />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 
              className="text-xl sm:text-[22px] font-semibold mb-4 text-center text-[#8EC643] mt-6 "
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Our Mission
            </h3>
            <p className="text-base sm:text-[17px] leading-relaxed mt-4 md:text-left text-center">
              Leverage flagship government programs like PM Surya Ghar, PM Kusum, and State
              Solar Policies to accelerate adoption of clean energy. Empower communities and
              local entrepreneurs to drive decentralized solar projects. Collaborate with
              Government, NGOs, and CSR foundations to scale sustainable infrastructure.
              Promote energy independence while ensuring environmental equity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
