'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import solarWorker from "@/public/AboutTestimonial.jpg"; 

const testimonials = [
  {
    text: '“WISDA made going solar effortless. From the first visit to installation, everything was smooth, and now our bills are almost half!”',
    author: '~ Vishwesh Thakur',
  },
  {
    text: '“The team was professional and explained every step. Switching to solar was the best decision for our home.”',
    author: '~ Ananya Sharma',
  },
  {
    text: '“Great service and excellent support even after installation. Highly recommend WISDA to anyone considering solar.”',
    author: '~ Rohan Mehta',
  },
];

export default function AboutTestimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="font-sans md:mt-20  md:mb-0 -mb-34">
      <div className="grid md:grid-cols-2">
        <div className="relative w-screen h-[400px] overflow-hidden">
          <Image
            src={solarWorker}
            alt="Solar Worker"
            fill
            className="object-cover object-bottom scale-x-[-1]"
          />
        </div>
        <div className="flex items-center justify-center px-4 py-16">
          <div className="-mt-120 bg-white max-w-xl rounded-lg p-8  md:mt-0 md:p-10 md:-ml-[600px] z-40 md:w-[700px] opacity-80 transition-all duration-500">
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              {testimonials[index].text}
            </p>
            <p className="mt-2 text-sm">{testimonials[index].author}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
