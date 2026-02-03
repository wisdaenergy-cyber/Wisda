'use client';

import Image from 'next/image';
import solarImage from '@/public/AboveFooter.png';
import { useRouter } from "next/navigation";

export default function AboveFooter() {
      const router=useRouter();
  return (
    <section className="bg-white px-6 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-10 md:py-20">
      <div className="flex-1">
        <Image
          src={solarImage}
          alt="Solar Family"
          className="rounded-md w-full h-[350px] object-cover"
          placeholder="blur"
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl md:ml-5 font-semibold text-[#00382F] mb-6 leading-snug">
          “Lighting the Way for Generations to Come” <br className="hidden md:block" />
        </h2>

        <button 
        onClick={() => router.push("/contact-us")}
        className="cursor-pointer px-6 py-2 bg-[#166066] text-white rounded-md hover:bg-[#006b5a] transition ml-5">
          Get free site visit
        </button>
      </div>
    </section>
  );
}
