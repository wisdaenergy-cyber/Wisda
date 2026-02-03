export default function JobBanner() {
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
            Job Description
          </h1>
          {/* <p className="text-white mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Dolor vestibulum rhoncus non arcu id.
          </p> */}
        </div>
      </div>
      </div>)
}