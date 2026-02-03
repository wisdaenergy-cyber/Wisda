"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function HeroPartner() {
  const logos = [
    "https://res.cloudinary.com/dimfwawfk/image/upload/v1761763260/WhatsApp_Image_2025-09-18_at_2.12.26_PM_zgkksb.jpg",
    "https://res.cloudinary.com/dimfwawfk/image/upload/v1761763508/75abc9bf3741005ee507e20c2ccebe3c335d27b6_zwjtig.png",
    "https://res.cloudinary.com/dimfwawfk/image/upload/v1761763550/638c410593ac363f39548b2dd2a835873ab249d2_hrzjpx.png",
    "https://res.cloudinary.com/dimfwawfk/image/upload/v1761763584/64ead7c04b25bea72d7753f972fef978fe34ea41_stbyxc.jpg",
    "https://res.cloudinary.com/dimfwawfk/image/upload/v1761763622/5a823f6fd0c68a6c368d0441b032f96d90a21a1b_dqkosl.png"
  ];

  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(5);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0
        ? Math.max(logos.length - itemsPerPage, 0)
        : Math.max(prev - itemsPerPage, 0)
    );
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev + itemsPerPage >= logos.length ? 0 : prev + itemsPerPage
    );
  };

  return (
    <section className="bg-[#FDF6E6] py-16 px-4 sm:px-8 md:px-12 md:mb-30">
      <h2  className="text-[20px] uppercase tracking-widest text-[#00382F] mb-20 px-2 md:px-0 font-medium md:ml-10">
        PARTNERS & COLLABORATION
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 sm:gap-6 relative">
          <button
            onClick={prevSlide}
            className="p-2 sm:p-3 bg-white shadow-md rounded-full text-green-900"
          >
            <FiChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          <div className="flex gap-6 sm:gap-10 md:gap-20">
            {logos.slice(index, index + itemsPerPage).map((logo, idx) => (
              <div
                key={idx}
                className="w-20 h-20 sm:w-38 sm:h-38 bg-white rounded-full flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={logo}
                  alt={`Partner ${idx}`}
                  width={90}
                  height={90}
                  className="object-cover bg-white   border-white"
                />
              </div>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 sm:p-3 bg-white shadow-md rounded-full text-green-900"
          >
            <FiChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

        <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-xl text-black max-w-4xl mx-auto text-center">
          We collaborate with government bodies, CSR initiatives, and
          development organizations to scale sustainable energy
        </p>
      </div>
    </section>
  );
}
