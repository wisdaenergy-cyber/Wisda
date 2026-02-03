export default function ProjectImpact() {
  return (
    <section className=" px-6 md:px-20 py-12  border-gray-200">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#114329] mb-10">
        Impact
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center gap-2 mt-5">
            <div className="w-30 h-30 bg-gray-300 rounded-full" />
            <p className="text-xl font-thin mt-2">Lorem ipsum</p>
          </div>
        ))}
      </div>
    </section>
  );
}
