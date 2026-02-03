import Image from 'next/image';

export default function HeroAbout() {
  return (
    <div className=" bg-[#FDF6E6] text-[#00382F] font-[Manrope, sans-serif]">
      <section className="max-w-7xl mx-auto px-4 md:py-20 py-10">
        <h2 className="text-[20px] uppercase tracking-widest text-[#00382F] mb-20 px-2 md:px-0 font-medium">
            Who We Are?
          </h2>
        <div className="max-w-5xl mx-auto text-center mb-24">
          <p className="text-lg sm:text-[30px] font-mediumleading-relaxed"style={{ fontFamily: 'Open Sans, sans-serif' }}>
            WISDA Energy blends Wisdom, Sustainability, and Action to power a better tomorrow. 
            We’re a purpose-driven enterprise building a clean, inclusive energy future for India. 
            Guided by the motto <span className="italic font-light">“Together for Future,”</span> 
            {" "}we collaborate across all sectors. Our mission: make solar energy accessible and affordable for all.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-72 sm:h-96 rounded overflow-hidden shadow-lg order-1 md:order-none md:ml-0">
  <Image
    src="/Whoweare.jpg"
    alt="Worker with solar panel"
    fill
    className="object-cover rounded-xl"
  />
</div>

          <div className="space-y-6 order-2 md:order-none md:mt-36" style={{ fontFamily: 'Open Sans, sans-serif' }}>
  <h3 className="text-xl sm:text-2xl font-semibold" style={{ fontFamily: 'Manrope, sans-serif' }}>
    Core Points
  </h3>
  <ul className="list-disc list-outside pl-5 space-y-2 text-base sm:text-lg sm:font-light">
  <li>Impact with Purpose: Merging social good with smart business for a greener future.</li>
  <li>Policy-Aligned: Advancing clean energy in sync with government initiatives.</li>
  <li>Powered by People: Community-led solar models that are inclusive and affordable.</li>
</ul>
</div>
        </div>
      </section>
    </div>
  );
}
