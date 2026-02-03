"use client"
export default function FAQBanner() {

  return (
    <div className="font-sans mb-20">
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/CareerBanner.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-4">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#8EC643] md:mt-40"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
           FAQs
          </h1>
        </div>
      </div>
      </div>)
}