import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from "next/navigation";
export default function ProjectMap() {
  const router = useRouter();
  return (
    <div className="py-10 flex justify-center px-4">
      <div className="relative w-full max-w-[1300px] bg-[#fef7eb] rounded-md overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/ProjectMap.png"
            alt="Map background"
            fill
            className="object-cover rounded-md md:mt-0"
            quality={100}
            priority
          />
        </div>
        <div className="relative z-10 max-w-full md:max-w-[500px] bg-white p-6 sm:p-8 rounded-xl shadow-xl m-4 md:ml-10 md:mt-5">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 leading-snug">
            <span className='text-[#8EC643] italic'> WISDA ENERGY </span> Powering Homes Across Hyderabad with Solar Energy
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            WISDA Energy has successfully completed solar projects across Hyderabad, powering homes and communities with clean, affordable energy. From rooftops to ground-mounted systems, we’re helping the city reduce electricity costs and embrace a greener future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <button
            onClick={() => router.push("/contact-us")}
             className="cursor-pointer w-fit flex items-center justify-between md:justify-center gap-2 px-5 py-2 bg-[#8EC643] text-white rounded-full hover:bg-green-800 transition text-sm md:text-base">
             Get a Quote
              <span className="bg-[#166066] rounded-full text-white p-2">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>
            {/* <button className="flex items-center justify-between sm:justify-center gap-2 px-5 py-2 border border-[#8EC643] text-black rounded-full hover:bg-green-100 transition text-sm sm:text-base">
              
              <span className="bg-[#166066] rounded-full text-white p-2">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
