"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

export default function HeroCertifications() {
  const logos = [
    "/Certification1.png",
    "/Certification2.webp",
    "/Certification3.webp",
    "/Certification4.png",
    "/Certification5.jpg",
    "/Certification6.png",
    "/Certification7.png",
  ];

  const certificates = [
    "https://res.cloudinary.com/dimfwawfk/image/upload/v1761812246/48ef82e43c90da9c36fdd1fa2330161a664bee9a_ywbmol.jpg",
    "https://res.cloudinary.com/dimfwawfk/image/upload/v1761812140/b8e40fc7ba1c6d6f6c5e0ae379c63d00274846af_t9hn6z.jpg",
    "https://res.cloudinary.com/dimfwawfk/image/upload/v1761811972/e3622a1d8d970cb45eb79511df7d2687e2dc8707_ej2kum.jpg",
    "https://res.cloudinary.com/dimfwawfk/image/upload/v1761812323/1ac44bb3ce7835acdc2f8ba65b813cfbde698fa4_xnkjom.jpg",
    null,
    null,
    null,
  ];

  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) setItemsPerPage(2);
      else if (window.innerWidth < 1024) setItemsPerPage(3);
      else setItemsPerPage(5);
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
    <section className="bg-[#FDF6E6] py-16 px-4 sm:px-8 md:px-12 md:mb-30 relative">
      <h2 className="text-[20px] uppercase tracking-widest text-[#00382F] mb-20 px-2 md:px-0 font-medium md:ml-10">
        CERTIFICATION
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
            {logos.slice(index, index + itemsPerPage).map((logo, idx) => {
              const actualIndex = index + idx;
              const cert = certificates[actualIndex];
              return (
                <div
                  key={idx}
                  className={`w-20 h-20 sm:w-38 sm:h-38 bg-white rounded-full flex items-center justify-center overflow-hidden relative transition-transform duration-200 hover:scale-105 ${
                    cert ? "cursor-pointer" : "cursor-default"
                  }`}
                  onClick={() => cert && setSelectedCertificate(cert)}
                >
                  <Image
                    src={logo}
                    alt={`Partner ${idx}`}
                    width={90}
                    height={90}
                    className="object-cover bg-white border-white"
                  />
                  {cert && (
                    <div className="absolute inset-0 bg-black/25 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white text-xs">
                      View Certificate
                    </div>
                  )}
                </div>
              );
            })}
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
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 mt-20"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative bg-transparent rounded-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-2 right-2 text-black hover:text-red-600 bg-white rounded-2xl p-2"
            >
              <FiX size={24} />
            </button>
            <Image
              src={selectedCertificate}
              alt="Certificate"
              width={600}
              height={600}
              className="rounded-lg max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
