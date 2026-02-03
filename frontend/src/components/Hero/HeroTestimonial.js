'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "“Switching to WISDA’s rooftop solar cut our monthly electricity bill by more than 60%. Their team made the site visit and installation seamless, and the system has been performing flawlessly since day one.”",
    name: "Sanskruti Sen",
    city: "Hyderabad",
    images: Array(8).fill('https://res.cloudinary.com/dimfwawfk/image/upload/v1767796775/WhatsApp_Image_2026-01-07_at_11.51.18_AM_jlpvuw.jpg'),
  },
  {
    id: 2,
    text: "“I was surprised by how quickly the installation was completed. The team was professional, and the savings on my bill were immediate. Highly recommend WISDA for anyone looking to go green.”",
    name: "Rahul Kumar",
    city: "Hyderabad",
    images: Array(8).fill('https://res.cloudinary.com/dimfwawfk/image/upload/v1767796866/WhatsApp_Image_2026-01-07_at_11.51.19_AM_1_zyfwmp.jpg'),
  },
  {
    id: 3,
    text: "“I was surprised by how quickly the installation was completed. The team was professional, and the savings on my bill were immediate. Highly recommend WISDA for anyone looking to go green.”",
    name: "Rahul Kumar",
    city: "Hyderabad",
    images: Array(8).fill('https://res.cloudinary.com/dimfwawfk/image/upload/v1767796965/WhatsApp_Image_2026-01-07_at_11.51.19_AM_2_uvvvxp.jpg'),
  },
  {
    id: 4,
    text: "“Switching to WISDA’s rooftop solar cut our monthly electricity bill by more than 60%. Their team made the site visit and installation seamless, and the system has been performing flawlessly since day one.”",
    name: "Sanskruti Sen",
    city: "Hyderabad",
    images: Array(8).fill('https://res.cloudinary.com/dimfwawfk/image/upload/v1767797051/WhatsApp_Image_2026-01-07_at_11.51.19_AM_3_dgxv8y.jpg'),
  },
];

export default function HeroTestimonial() {
  const [index, setIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const testimonial = testimonials[index];

  const prev = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIndex((index + 1) % testimonials.length);
  };

  return (
    <div
      className="relative bg-[#FFFFFF] min-h-[70vh] flex items-center justify-center px-4 py-16 text-center font-sans overflow-hidden"
      style={{ fontFamily: 'Manrope, sans-serif' }}
    >
      <div
        className="absolute top-0 left-0 text-[15rem] sm:text-[25rem] lg:text-[39rem] leading-none pointer-events-none select-none"
        style={{ color: "#8EC643" }}
      >
        &ldquo;
      </div>
      <div
        className="absolute top-96 sm:top-52 right-0 text-[15rem] sm:text-[25rem] lg:text-[39rem] leading-none pointer-events-none select-none"
        style={{ color: "#8EC643" }}
      >
        &rdquo;
      </div>

      <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 z-10">
        <p className="text-base sm:text-lg md:text-xl font-medium text-gray-800 px-2">
          {testimonial.text}
        </p>

        <div className="flex justify-center items-center -space-x-2 sm:-space-x-3">
          {(() => {
            const windowSize = 5;
            const halfWindow = Math.floor(windowSize / 2);
            const centerIndex = Math.floor(testimonial.images.length / 2);

            let start = centerIndex - halfWindow;
            let end = centerIndex + halfWindow + 1;

            if (start < 0) {
              end += -start;
              start = 0;
            }
            if (end > testimonial.images.length) {
              const overshoot = end - testimonial.images.length;
              start = Math.max(0, start - overshoot);
              end = testimonial.images.length;
            }

            const visibleImages = testimonial.images.slice(start, end);

            return visibleImages.map((src, i) => {
              const localCenter = Math.floor(visibleImages.length / 2);
              const distance = Math.abs(i - localCenter);

              const size = 60 - distance * 8;
              const zIndex = 30 - distance * 2;

              return (
                <div
                  key={i}
                  onClick={() => setSelectedImage(src)}
                  className="relative rounded-full overflow-hidden border border-[#8EC643] cursor-pointer transition-transform hover:scale-105"
                  style={{
                    width: `${Math.max(size, 36)}px`,
                    height: `${Math.max(size, 36)}px`,
                    zIndex,
                  }}
                >
                  <img src={src} alt="Testimonial" className="w-full h-full object-cover" />
                  {distance !== 0 && (
                    <div className="absolute inset-0 bg-white opacity-40" />
                  )}
                </div>
              );
            });
          })()}
        </div>

        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{testimonial.name}</h3>
          <p className="text-xs sm:text-sm text-gray-700">{testimonial.city}</p>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 sm:left-8 sm:translate-x-0 flex space-x-3 sm:space-x-4 z-10">
        <button
          onClick={prev}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={next}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-500"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white p-4 rounded-lg max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-3 -right-3 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>

            <img
              src={selectedImage}
              alt="Testimonial Large"
              className="max-w-full max-h-[80vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}
