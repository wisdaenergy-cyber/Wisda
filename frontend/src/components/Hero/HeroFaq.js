"use client";
import { useState } from "react";
import Image from "next/image";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FAQSection() {
  const faqs = [
    { question: "What is a Rooftop Solar Project?", answer: "A rooftop solar project involves installing solar panels on the roof of your home to generate electricity using sunlight. The power generated can be used for household consumption, and any surplus can be fed back to the grid through net metering." },
    { question: "How will rooftop solar reduce my electricity bill?", answer: "The system generates free power from sunlight.You use the solar energy first, reducing dependence on the grid.Surplus power is exported to the grid, and you receive credit via net metering.In many cases, bills drop to zero or stay at minimum fixed charges." },
    { question: "What safety measures does WISDA ensure in group housing installations?", answer: "Group housing projects involve higher capacity systems and shared infrastructure. WISDA ensures:Structural Safety Certification – verifying the rooftop can bear the system load.Fire & Electrical Safety Compliance – earthing, protection devices, and fire-retardant cables.Centralized Inverter Rooms with ventilation and restricted access.Emergency Shut-down Protocols for quick isolation in case of faults.24/7 Remote Monitoring for system health and preventive maintenance." },
    { question: "How long will it take to recover my investment?", answer: "Typically, the payback period is between 3–5 years, depending on the system size, your electricity consumption, and financing options. With subsidies and WISDA’s support, returns on investment are faster." },
    { question: "How can I get started with WISDA?", answer: "Contact WISDA through our website (www.wisda.in) or customer service helpline.Our team will conduct a site survey.We will provide a customized proposal covering subsidy, financing, and savings estimate.Once approved, WISDA handles the installation, monitoring, and documentation." },
  ];

  const [openIndex, setOpenIndex] = useState(-1);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? -1 : index);

  return (
    <section className="bg-[#FDF6E6] py-12 sm:py-16 px-4 sm:px-6 md:px-12 md:mt-20 md:mb-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div className="w-full">
          <h2 className="text-[20px] uppercase tracking-widest text-[#00382F] mb-20 px-2 md:px-0 font-medium">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-green-800 pb-4">
                <div
                  className="flex justify-between items-center cursor-pointer p-3 sm:p-4"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg pr-4">
                    {index + 1}. {faq.question}
                  </h3>
                  <div className="bg-[#8EC643] rounded-full p-1.5 sm:p-2 text-white flex items-center justify-center">
                    {openIndex === index ? <FiMinus size={16} /> : <FiPlus size={16} />}
                  </div>
                </div>
                {openIndex === index && faq.answer && (
                  <p className="text-gray-700 mt-2 text-sm sm:text-base px-3 sm:px-6">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full h-[528px] hidden md:block  top-17">
          <Image
            src="/HeroInstallation3.jpg"
            alt="FAQ related"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
