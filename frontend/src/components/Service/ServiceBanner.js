export default function ServiceBanner({title}) {
  return (
    <div className="font-sans mb-20">
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dimfwawfk/image/upload/v1761831694/ea7b3c020cd780fa5c2f25413dabb86923dcbf07_crfnqq.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-4">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#8EC643] md:mt-40 mt-10"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
           {title}
          </h1>
          {/* <p className="text-white mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Dolor vestibulum rhoncus non arcu id.
          </p> */}
        </div>
      </div>
      </div>)
}