"use client"
import Link from "next/link";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Navbar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col md:flex-row w-full h-full mt-10">
        <div className="relative w-full md:w-1/2 h-[300px] md:h-auto min-h-[300px] md:min-h-[600px]">
          <Image
            src="/HeroInstallation3.jpg"
            alt="Solar Panels"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#00382F]/10"></div>
        </div>

        <div className="w-full md:w-1/2 bg-[#FDF6E6] flex flex-col justify-center px-6 py-12 md:px-16 lg:px-24">
          <div className="max-w-lg">
            <h1 className="text-[#00382F] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-manrope">
              Lost Your Way <br />
              to the Sun?
            </h1>
            
            <p className="text-[#00382F]/80 text-lg mb-8 leading-relaxed font-hanken-grotesk">
              The page you're looking for doesn't exist, but we can help you find a brighter path.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 font-hanken-grotesk">
              {/* Go to Homepage */}
              <Link href="/" className="group">
                <div className="bg-[#8EC643] text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-transform transform hover:scale-105">
                  <span className="font-semibold">Go to Homepage</span>
                </div>
              </Link>

              {/* Explore Services */}
              <Link href="/services" className="group">
                <div className="border border-[#00382F] text-[#00382F] px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all hover:bg-[#00382F] hover:text-[#EEFF57]">
                  <span className="font-semibold">Explore Services</span>
                </div>
              </Link>
            </div>

            {/* Secondary Links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4 border-t border-[#00382F]/10">
              <Link href="/contact-us" className="text-[#00382F] font-medium hover:underline flex items-center gap-1">
                Report an issue
              </Link>
              
              <Link href="/contact-us" className="hidden sm:flex items-center gap-2 text-[#8EC643] font-bold hover:opacity-80">
                <span>Get a Quote</span>
                <GoArrowUpRight className="text-lg" />
              </Link>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
