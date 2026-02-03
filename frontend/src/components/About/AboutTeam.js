'use client';

import Image from 'next/image';
import team1 from '@/public/AboutLeader1.jpg';
import team2 from '@/public/AboutLeader4.jpg';
import team3 from '@/public/AboutLeader3.jpg';


export default function AboutTeam() {
  return (
    <section className=" font-sans px-4 md:px-12 py-10 md:py-16">
      <div className="max-w-7xl mx-auto space-y-20">
        <div>
          <h2
            className="text-xl sm:text-2xl font-bold mb-10 md:mb-20 text-center md:text-left"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Our Leadership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <Image
                src="/Venkatesh.jpg"
                alt="Venkatesh Parasuram"
                width={300}
                height={300}
                className="w-full max-w-[280px] sm:max-w-[370px] h-auto object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[#00382F]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Venkatesh Parasuram
              </h3>
              {/* <p className="font-medium mb-4 text-[#00382F]">Director</p> */}
              <p className="text-base mb-4 leading-relaxed">
              Venkat, a management postgraduate with 25+ years of experience, has worked across IT, telecom, and the NGO sector. As Chairman of CSI Hyderabad, he introduced initiatives to support young IT aspirants and later managed telecom projects worth Rs. 15 million. He played a key role in APFAMGS (FAO-UN) and the Safe Water Network by Paul Newman Foundation & PepsiCo, establishing 100+ community water plants in Andhra Pradesh and Telangana. 
              </p>
              <p className="text-base leading-relaxed">
               At NTR Trust, he led the NTR Sujala Program, raising INR 90 million in CSR support and delivering safe water solutions to 66 lakh people. Currently, as Principal Consultant at Wisda Ventures, he continues his mission, supporting water treatment plants with a cumulative capacity of 2,34,000 LPH.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[#00382F]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Narender Soma
              </h3>
              {/* <p className="font-medium mb-4 text-[#00382F]">Director</p> */}
              <p className="text-base mb-4 leading-relaxed">
                Narender, a management postgraduate with over a decade of experience in social development, has specialized in safe drinking water projects. He began his career with MARI Foundation, working at the grassroots level with Safe Water Network India. 
              </p>
              <p className="text-base leading-relaxed">
               Later, at TATA Projects Community Development Trust, he managed water projects under the TATA Water Mission across five states. He then joined NTR Trust, where he oversaw operations of the NTR Sujala units, providing safe water to nearly 4 lakh people daily. Currently, as a consultant with Wisda, he continues to drive impactful water solutions for communities.
              </p>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <Image
                src="/narendraWisda.png"
                alt="Narender Soma"
                width={300}
                height={300}
                className="w-full max-w-[280px] sm:max-w-[370px] h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16">
            <div className="flex justify-center">
              <Image
                src="/KishorePA.jpg"
                alt="Kishore P A"
                width={300}
                height={300}
                className="w-full max-w-[280px] sm:max-w-[370px] h-auto object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[#00382F]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Kishore P A
              </h3>
              
              <p className="text-base mb-4 leading-relaxed">
               Kishore, a management postgraduate with 22 years of experience, has worked across IT and FMCG sectors. He played a key role in building Bibo Water into a successful brand, managing sales, distribution, and production while implementing ISO 9001 and ISO 22000 standards. 
              </p>
              <p className="text-base leading-relaxed">
                In addition to his FMCG expertise, he has experience in IT, particularly in Geographical Information Systems. Skilled in feasibility studies, data analysis, and business analytics, Kishore brings a multi-dimensional approach to developing effective solutions and products at Wisda.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[#00382F]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Ramesh Bandi
              </h3>
              <p className="text-base mb-4 leading-relaxed">
                Ramesh Bandi epitomizes operational mastery in business, his distinguished tenure within the FMCG domain spanning over thirty years—a testament to his resolute dedication. An alumnus of IPE (Osmania University), complemented by certification in digital marketing from ISB, he wields grassroots sales and marketing expertise with the craftsmanship of a seasoned sculptor molding raw material into artistry. 
              </p>
              <p className="text-base leading-relaxed">
               His adeptness in implementing Quality Management Systems ensures every initiative performs in concert with established protocols.
              </p>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <Image
                src="/RameshBandi.jpg"
                alt="Ramesh Bandi"
                width={300}
                height={300}
                className="w-full max-w-[280px] sm:max-w-[370px] h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* <div>
          <h2
            className="text-xl sm:text-2xl font-bold mb-10 md:mb-20 text-center md:text-left"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Meet Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { src: team1, name: "John Doe", role: "Managing Director" },
              { src: team2, name: "Liza Sharma", role: "Head - Strategy & Finance" },
              { src: team3, name: "Vijay Reddy", role: "Chief Projects Officer" }
            ].map((member, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg shadow group w-full aspect-square"
              >
                <Image
                  src={member.src}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#00382F] text-[#EEFF57] px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-center">
                  <h4 className="font-semibold text-lg sm:text-xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {member.name}
                  </h4>
                  <p className="text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
