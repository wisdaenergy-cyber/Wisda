import FAQ from "@/components/Faq/Faq";
import FAQBanner from "@/components/Faq/FaqBanner";


export const metadata = {
  title: "Solar Services FAQs | Wisda Energy Questions & Answers",
  description: "Find answers to common solar questions including installation, pricing, subsidies, maintenance, warranties, and how Wisda Energy helps you save.",
  alternates: {
    canonical: "https://www.wisda.in/faqs",
  },
};

export default function Faq() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Rooftop Solar Project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A rooftop solar project involves installing solar panels on the roof of your home to generate electricity using sunlight. The power generated can be used for household consumption, and any surplus can be fed back to the grid through net metering."
        }
      },
      {
        "@type": "Question",
        "name": "What is the PM Surya Ghar: Muft Bijli Yojana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The PM Surya Ghar: Muft Bijli Yojana, launched by the Government of India, aims to provide free electricity up to 300 units per month for households that adopt rooftop solar. The scheme includes subsidies, financial support, and easy loan facilities to make solar energy affordable for domestic consumers."
        }
      },
      {
        "@type": "Question",
        "name": "Who can apply for the PM Surya Ghar scheme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Any residential household with a suitable rooftop can apply. The house must have a valid electricity connection in the name of the applicant. The rooftop must be technically feasible for installing solar panels (sufficient space, sunlight availability, and structural strength)."
        }
      },
      {
        "@type": "Question",
        "name": "What financial benefits are available under the PM Surya Ghar scheme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Central Government Subsidy: Up to ₹78,000 subsidy (depending on the system capacity). Zero upfront cost option: Consumers can apply for loans from banks/NBFCs where subsidies directly reduce the loan burden. Savings on electricity bills: Reduced or zero monthly power bills, plus income from selling excess power to the grid."
        }
      },
      {
        "@type": "Question",
        "name": "How much subsidy will I get for my rooftop solar system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The subsidy is linked to the capacity of the system: 1 kW – Rs. 30,000/- 2 kW - Rs. 60,000/- 3 kW or above - Rs. 78,000/- (Subsidy amounts may vary between States depending on additional incentives provided by State Governments, and are also subject to change in accordance with future directives from the Government of India.)"
        }
      },
      {
        "@type": "Question",
        "name": "How do I apply for rooftop solar under this scheme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visit the National Portal for Rooftop Solar (www.pmsuryaghar.gov.in). Register with your electricity consumer number. Submit your application and choose a vendor registered with your state DISCOM. Install the system through the approved vendor. Claim your subsidy after installation and verification. Or just CALL WISDA Team for handling the work from survey to subsidy."
        }
      },
      {
        "@type": "Question",
        "name": "Are loans available for rooftop solar installations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Multiple financing options are available: Public Sector Banks (SBI, PNB, Canara Bank, etc.) offer priority sector loans at lower interest rates. Private Banks (HDFC, ICICI, Axis, etc.) provide flexible repayment options. NBFCs and Microfinance Institutions offer quick disbursement and customized loan products. Repayment periods generally range from 5–10 years."
        }
      },
      {
        "@type": "Question",
        "name": "What are the technical requirements for rooftop solar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Available roof space (approx. 100 sq. ft. per kW). Unshaded exposure to sunlight for most of the day. Net Metering facility approved by your DISCOM. Use of MNRE-approved panels and inverters. WE (WISDA Energy) ensures all installations meet statutory, technical, and safety guidelines."
        }
      },
      {
        "@type": "Question",
        "name": "What approvals are required?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DISCOM approval for net metering. Compliance with MNRE standards. Registration on the National Rooftop Solar Portal. WE (WISDA Energy) assists customers at every step to simplify the documentation and approval process."
        }
      },
      {
        "@type": "Question",
        "name": "How will rooftop solar reduce my electricity bill?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The system generates free power from sunlight. You use the solar energy first, reducing dependence on the grid. Surplus power is exported to the grid, and you receive credit via net metering. In many cases, bills drop to zero or stay at minimum fixed charges."
        }
      },
      {
        "@type": "Question",
        "name": "Why should I choose WISDA Energy for my rooftop solar system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WISDA Energy goes beyond standard installations by offering: 5-Year Comprehensive Warranty on every system. Real-time Monitoring of all installed systems through digital dashboards. Dedicated Support Team for regular checks, service, and performance optimization. Expertise in approvals, financing, and subsidy claims, ensuring a hassle-free experience as WE (Wisda Energy) handles “survey to subsidy” in a seamless manner. Wisda Energy uses premium solar panels from top brands like Tata, Premier, Mvee, and Waaree for high efficiency and reliability. Inverters, all wiring and cables are supplied by Polycab, ensuring compliance with international standards, including IEC certification for safety and quality. Earthing materials and Lightning Arrestors used are also IEC certified, ensuring robust safety for all installations. Every component is selected for durability, optimal performance, and long-term reliability."
        }
      },
      {
        "@type": "Question",
        "name": "How does WISDA monitor installed systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every rooftop solar system installed by WISDA is equipped with a monitoring device that tracks performance in real time. Our team regularly reviews the data to ensure optimal energy generation, detect and resolve issues proactively, and provide customers with transparent reports on savings and performance."
        }
      },
      {
        "@type": "Question",
        "name": "How long will it take to recover my investment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically, the payback period is between 3–5 years, depending on the system size, your electricity consumption, and financing options. With subsidies and WISDA’s support, returns on investment are faster."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after the warranty period?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Even after the 5-year WISDA warranty, the system continues to work efficiently for 20–25 years. Customers can opt for extended service contracts for regular maintenance."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get started with WISDA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contact WISDA through our website (www.wisda.in) or customer service helpline. Our team will conduct a site survey. We will provide a customized proposal covering subsidy, financing, and savings estimate. Once approved, WISDA handles the installation, monitoring, and documentation."
        }
      },
      {
        "@type": "Question",
        "name": "Can group housing societies and apartments apply for rooftop solar under the PM Surya Ghar scheme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The PM Surya Ghar scheme specifically allows Group Housing Societies (GHS) and Resident Welfare Associations (RWAs/CGHS) to install common rooftop solar systems. These systems supply electricity to common facilities (lifts, lighting, water pumps, etc.)."
        }
      },
      {
        "@type": "Question",
        "name": "How are subsidies given for group housing solar projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Subsidy is provided based on the solar capacity installed at ₹18,000 per kW. The scheme encourages collective adoption by offering financial incentives for shared infrastructure."
        }
      },
      {
        "@type": "Question",
        "name": "What safety measures does WISDA ensure in group housing installations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Group housing projects involve higher capacity systems and shared infrastructure. WISDA ensures: Structural Safety Certification – verifying the rooftop can bear the system load. Fire & Electrical Safety Compliance – earthing, protection devices, and fire-retardant cables. Centralized Inverter Rooms with ventilation and restricted access. Emergency Shut-down Protocols for quick isolation in case of faults. 24/7 Remote Monitoring for system health and preventive maintenance."
        }
      },
      {
        "@type": "Question",
        "name": "How does WISDA ensure compliance with PM Surya Ghar guidelines for group housing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WISDA strictly follows MNRE-approved vendors and components, DISCOM and State Nodal Agency approvals, PMSG guidelines ensuring that subsidy allocation, system size, and household benefit distribution are transparent, and proper documentation for each resident’s eligibility."
        }
      },
      {
        "@type": "Question",
        "name": "What unique benefits does WISDA offer group housing societies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "End-to-end project management: From feasibility study to subsidy claim. Transparent allocation model: Ensuring fair distribution of savings and subsidy among residents. Regular safety audits and on-call maintenance support. 5-Year Warranty & Monitoring for peace of mind. Assistance with loan tie-ups for RWAs and societies, reducing upfront costs."
        }
      },
      {
        "@type": "Question",
        "name": "How does rooftop solar reduce electricity bills in apartments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common utilities (lighting, lifts, pumps) are powered by solar, lowering shared electricity costs. Net metering ensures credit for excess energy, reducing bills further. Residents enjoy lower monthly maintenance charges."
        }
      },
      {
        "@type": "Question",
        "name": "What is the payback period for group housing solar projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically 4–6 years, depending on system size, subsidy, and electricity tariff of the DISCOM. With WISDA’s monitoring and service, societies maximize savings."
        }
      }
    ]
  };

  return (
    <div className="bg-[#FDF6E6]">
      {/* FAQ Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <FAQBanner />
      <FAQ />
    </div>
  );
}
