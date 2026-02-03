export default function ServiceContent({ serviceKey }) {
  const contentMap = {
    roof: {
      image: "https://res.cloudinary.com/dimfwawfk/image/upload/v1761832461/cdcd906cdb863777f1c5e0a471d53361db3ea777_kxujau.jpg",
      heading: "Rooftop Solar Solutions",
      paragraphs: [
        `At WISDA Energy, we provide complete rooftop solar panel solutions that help you generate clean, cost-saving electricity right from your rooftop. Our solar panels capture sunlight and convert it into direct current (DC) electricity, which is then passed through an advanced inverter to transform it into alternating current (AC) — the type of electricity used in your home or business. This energy powers your appliances efficiently and reduces your dependency on the grid. Any excess electricity is either sent back to the power grid through net metering, earning you credits, or stored in a battery system for later use.`,
        `Rooftop solar solutions are an efficient and sustainable way to reduce electricity bills and contribute to a greener planet. By utilizing unused roof space, solar panels generate clean energy directly from sunlight, cutting down your dependency on grid power. This not only leads to long-term savings but also helps lower carbon emissions. With minimal maintenance, a lifespan of over 25 years, and attractive government subsidies, rooftop solar is a smart investment for both homes and businesses. Whether you’re looking for energy independence or a way to reduce your environmental footprint, rooftop solar offers a reliable and cost-effective solution.`,
        `Installing rooftop solar panels can significantly increase your property value by making your home more energy-efficient, cost-effective, and environmentally friendly. Homes with solar systems are highly attractive to buyers due to the promise of lower electricity bills and reduced reliance on the power grid. In today’s market, many people actively seek sustainable living options, and a solar-equipped home stands out as a smart, future-ready investment. Additionally, the availability of government incentives and the appeal of energy independence make solar-powered properties more desirable, often leading to faster sales and higher resale value.`,
      ],
    },
    ground: {
      image: "/HeroInstallation3.jpg",
      heading: "Ground Mounted Solar",
      paragraphs: [
        `Ground-mounted solar solutions are perfect for properties with ample land space and high electricity demands. These systems are installed on open ground using a mounting structure that optimizes panel positioning for maximum sunlight exposure.`,
        `They are highly customizable and scalable, making them suitable for large-scale solar farms, industrial setups, and agricultural applications. Ground-mounted systems can also be adjusted for seasonal sun movement, improving energy output.`,
        `With durable construction, minimal maintenance requirements, and high efficiency, ground-mounted solar solutions offer long-term reliability and excellent returns on investment.`,
      ],
    },
    pm: {
      image: "https://res.cloudinary.com/dimfwawfk/image/upload/v1761832613/3ad37aad8657e6ea87b89619fc106088517438b0_budfcq.jpg",
      heading: "PM Subsidy",
      paragraphs: [
        `The PM Subsidy scheme is a government initiative designed to make solar energy more accessible and affordable for households and businesses.`,
        `Through this program, eligible applicants receive financial support to offset the cost of purchasing and installing solar panels. This reduces the initial investment required and accelerates the return on investment.`,
        `By taking advantage of the PM Subsidy, you can lower your energy costs while contributing to national renewable energy goals.`,
      ],
    },
    amc: {
      image: "/ProjectBanner.jpg",
      heading: "AMC Services",
      paragraphs: [
        `Our Annual Maintenance Contract (AMC) services ensure that your solar system operates at peak efficiency throughout its lifespan.`,
        `We provide routine inspections, cleaning, performance monitoring, and quick repairs when needed.`,
        `With AMC services, you can maximize energy production, extend equipment lifespan, and enjoy peace of mind knowing your investment is well-maintained.`,
      ],
    },
  };

  const { image, heading, paragraphs } = contentMap[serviceKey];

  return (
    <div className="bg-[#FDF6E6] p-4 sm:p-6 md:p-8 rounded-lg max-w-[1000px] w-full mx-auto">
      <img
        src={image}
        alt={heading}
        className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover rounded-lg mb-6"
      />

      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{heading}</h2>
      <div className="space-y-4 text-justify text-gray-800 leading-relaxed">
        {paragraphs.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>
    </div>
  );
}
