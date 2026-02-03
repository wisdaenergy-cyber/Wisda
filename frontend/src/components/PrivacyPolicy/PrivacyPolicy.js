
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-[#FDF6E6] text-[#00382F] font-manrope">
      {/* Banner Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        {/* Placeholder for the banner image - replace src with your actual image path */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "linear-gradient(rgba(0, 56, 47, 0.5), rgba(0, 56, 47, 0.5)), url('/PrivacyPolicy.png')", 
            // fallback if no image
            backgroundColor: '#00382F' 
          }}
        ></div>
        
        <div className="absolute inset-0 flex items-end justify-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#8EC643] text-center px-4 pb-16">
                Privacy Policy
            </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-base md:text-lg leading-relaxed">
        <p className="mb-8">
          WISDA Energy (“we”, “our”, “us”) respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website wisda.in.
        </p>
        <p className="mb-8 font-medium">
          By using this website, you agree to the terms of this policy.
        </p>

        {/* 1. Information We Collect */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">1. Information We Collect</h2>
          <h3 className="text-lg font-semibold mb-2">a) Information you provide</h3>
          <p className="mb-2">We collect information when you:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 marker:text-[#00382F]">
            <li>Fill out our contact form</li>
            <li>Call or email us</li>
            <li>Submit any enquiries on our website</li>
          </ul>
          <p className="mb-2">This may include your:</p>
          <ul className="list-disc pl-5 space-y-1 marker:text-[#00382F]">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Address or location</li>
            <li>Any message you send us</li>
          </ul>
        </section>

        {/* 2. How We Use Your Information */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <p className="mb-2">We use your information to:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 marker:text-[#00382F]">
            <li>Contact you about your enquiry</li>
            <li>Provide information about our solar services</li>
            <li>Improve our website and services</li>
            <li>Send updates or follow-ups, if required</li>
          </ul>
          <p className="font-medium">We do not sell or rent your personal information to anyone.</p>
        </section>

        {/* 3. Cookies */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">3. Cookies</h2>
          <p className="mb-2">Our website may use cookies to:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 marker:text-[#00382F]">
            <li>Improve your browsing experience</li>
            <li>Understand how visitors use our website</li>
            <li>Track website performance</li>
          </ul>
          <p>You can disable cookies through your browser settings, but some features may not work properly afterward.</p>
        </section>

        {/* 4. Sharing Your Information */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">4. Sharing Your Information</h2>
          <p className="mb-2">We may share your information with:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 marker:text-[#00382F]">
            <li>Our internal team</li>
            <li>Trusted service partners who help us with installation or support</li>
            <li>Legal authorities if required by law</li>
          </ul>
          <p className="font-medium">We only share information when necessary.</p>
        </section>

        {/* 5. Data Security */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">5. Data Security</h2>
          <p className="mb-2">We take reasonable steps to protect your information from:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 marker:text-[#00382F]">
            <li>Unauthorized access</li>
            <li>Misuse</li>
            <li>Loss</li>
            <li>Alteration</li>
          </ul>
          <p>However, no method of data transfer or storage is 100% secure.</p>
        </section>

        {/* 6. Your Rights */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">6. Your Rights</h2>
          <p className="mb-2">You can request:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 marker:text-[#00382F]">
            <li>To know what information we have about you</li>
            <li>To correct or update your information</li>
            <li>To delete your information (where applicable)</li>
          </ul>
          <p>To do this, you can contact us using the details below.</p>
        </section>

        {/* 7. Third-party Links */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">7. Third-party Links</h2>
          <p>Our website may have links to external websites. We are not responsible for their content or privacy policies.</p>
        </section>

        {/* 8. Changes to This Policy */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with a new “Last updated” date.</p>
        </section>

        {/* 9. Contact Us */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">9. Contact Us</h2>
          <p className="mb-4">If you have questions about this Privacy Policy, you can reach us at:</p>
          <div className="space-y-2">
            <p><span className="font-bold">Email:</span> <a href="mailto:wisdaenergy@gmail.com" className="hover:underline text-[#00382F]">wisdaenergy@gmail.com</a></p>
            <p><span className="font-bold">Phone:</span> <a href="tel:+919876543210" className="hover:underline text-[#00382F]">+91 9876543210</a></p>
            <p><span className="font-bold">Address:</span> 12-13-1145, Street Number 11, Tarnaka, Secunderabad, Telangana – 500017</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
