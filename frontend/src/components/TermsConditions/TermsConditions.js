
import React from "react";
const TermsConditions = () => {
  return (
    <div className="w-full bg-[#FDF6E6] text-[#00382F] font-manrope">
      {/* Banner Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 56, 47, 0.5), rgba(0, 56, 47, 0.5)), url('/PrivacyPolicy.png')",
            backgroundColor: "#00382F",
          }}
        ></div>

        <div className="absolute inset-0 flex items-end justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#8EC643] text-center px-4 pb-16">
            Terms & Conditions
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-base md:text-lg leading-relaxed">
        <p className="mb-8">
          Welcome to WISDA Energy’s website. By using this website (wisda.in),
          you agree to follow and be bound by these Terms & Conditions. If you do
          not agree, please do not use the site.
        </p>

        {/* 1. Who we are */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">1. Who We Are</h2>
          <p>
            WISDA Energy is a green-energy company offering rooftop and
            ground-mounted solar solutions, maintenance services, and related
            support.
          </p>
        </section>

        {/* 2. Use of the Website */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            2. Use of the Website
          </h2>
          <p className="mb-4">
            You may use this website to learn about our services, contact us,
            or request a site visit.
          </p>
          <p>
            You agree not to use the website for any unlawful purpose or in a
            way that harms the website or other users.
          </p>
        </section>

        {/* 3. Intellectual Property */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            3. Intellectual Property
          </h2>
          <p className="mb-2">
            All content on this website, including text, images, logos, and
            graphics, is the property of WISDA Energy or its licensors.
          </p>
          <p className="mb-2">
            You may view or download content for personal, non-commercial use
            only.
          </p>
          <p>
            You may not copy, reproduce, distribute, modify, or use the content
            in any other way without our written permission.
          </p>
        </section>

        {/* 4. Third-party Links */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            4. Third-party Links
          </h2>
          <p>
            Our website may contain links to third-party websites. We do not
            control these websites and are not responsible for their content
            or policies.
          </p>
        </section>

        {/* 5. No Warranties */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            5. No Warranties (“As-Is”)
          </h2>
          <p>
            This website is provided “as is.” We do not guarantee that the
            information will always be accurate, complete, or up-to-date, or
            that the website will be uninterrupted or error-free.
          </p>
        </section>

        {/* 6. Limitation of Liability */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            6. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, WISDA Energy and its team
            will not be liable for any direct or indirect loss or damage
            arising from your use of this website.
          </p>
        </section>

        {/* 7. Changes to Terms */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            7. Changes to Terms
          </h2>
          <p>
            We may update these Terms & Conditions at any time. Continued use
            of the website after changes means you accept the updated terms.
          </p>
        </section>

        {/* 8. Governing Law */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            8. Governing Law & Disputes
          </h2>
          <p>
            These terms are governed by the laws applicable to Telangana,
            India (or as per the company’s registered jurisdiction).
          </p>
        </section>

        {/* 9. Contact Information */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            9. Contact Information
          </h2>
          <div className="space-y-2">
            <p>
              <span className="font-bold">Email:</span>{" "}
              <a
                href="mailto:wisdaenergy@gmail.com"
                className="hover:underline"
              >
                wisdaenergy@gmail.com
              </a>
            </p>
            <p>
              <span className="font-bold">Phone:</span>{" "}
              <a href="tel:+919876543210" className="hover:underline">
                +91 9876543210
              </a>
            </p>
            <p>
              <span className="font-bold">Address:</span> 12-13-1145, Street
              Number 11, Tarnaka, Secunderabad, Telangana – 500017
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;
