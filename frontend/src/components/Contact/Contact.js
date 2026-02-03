"use client"


import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [bill, setBill] = useState("");

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.(com|net|org|in|edu)$/i;
  return regex.test(email);
};

 const validatePhone = (phone) => {
  return /^[6-9][0-9]{9}$/.test(phone);
};

  const validatePincode = (pincode) => {
    return /^[0-9]{6}$/.test(pincode);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!name || !email || !phone || !serviceType || !city || !state || !pincode || !bill) {
      toast.error("Please fill in all fields");
      return;
    }
      if (!validateEmail(email)) {
    toast.error("Invalid email format. Allowed only: .com .net .org .in .edu");
    return;
  }
    if (!validatePhone(phone)) {
      toast.error("Phone must be a 10-digit number");
      return;
    }
    
    if (!validatePincode(pincode)) {
      toast.error("Pincode must be 6 digits");
      return;
    }
    const token=localStorage.getItem("token")
    try {
      const res=await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/contact/upload`,{
        name:name,
        email:email,
        phone:phone,
        solarType:serviceType,
        city:city,
        state:state,
        bill:bill
      },{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
       toast.success("Form submitted successfully!");
    } catch (error) {
      console.log(error)
       toast.error("A submission already exists for this phone number and email.");
    }

  };


  const [banner,setBanner]=useState("")

useEffect(()=>{
  try {
    async function getBanner()
    {
      const res=await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/banner/contact/banner`)
      setBanner(res.data.image)
    }
    getBanner()
  } catch (error) {
    console.log(error)
  }
},[])

  return (
    <div className="font-sans bg-[#FDF6E6]">
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-center"
        style={{
         backgroundImage: `url("${banner}")`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8EC643] md:mt-40 mt-10">
            Contact Us
          </h1>
          {/* <p className="text-white mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Dolor vestibulum rhoncus non arcu id.
          </p> */}
        </div>
      </div>

      <section className="w-full mx-auto px-4 py-36 grid md:grid-cols-2 gap-12 md:gap-16">
        <div className="space-y-6 md:mt-20">
          <h2 className="text-3xl md:text-[56px] md:ml-20 md:mt-0 -mt-20 font-bold">
            Let’s power up <br /> your future — talk <br /> to our solar <br /> specialists today!
          </h2>
          {/* <p className="text-black text-base md:text-[16px] md:w-[520px] md:ml-20 md:mt-12">
            Lorem ipsum dolor sit amet consectetur. Lectus eu semper odio ultricies dignissim habitasse arcu metus.
          </p> */}
        </div>

        <form className="space-y-6 md:mr-20 " onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-3 text-sm font-medium">
                Full Name<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-black px-3 py-2 rounded-md bg-transparent"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-3 text-sm font-medium">
                Email<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border border-black px-3 py-2 rounded-md bg-transparent shadow"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-3 text-sm font-medium mt-3">
                Phone Number<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="tel"
                placeholder="+91 12345 67890"
                className="w-full border border-black px-3 py-2 rounded-md bg-transparent shadow"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-3 text-sm font-medium mt-3">
                Service Type<span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <select
                  className="appearance-none w-full border border-black px-3 py-2 pr-10 rounded-md bg-transparent shadow"
                  required
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                >
                  <option value="">Select</option>
                  <option>Home</option>
                  <option>Commercial</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg
                    className="w-4 h-4 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-3 text-sm font-medium mt-5">
                City<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter a City"
                className="w-full border border-black px-3 py-2 rounded-md bg-transparent shadow"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-3 text-sm font-medium mt-5">
                State<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter a State"
                className="w-full border border-black px-3 py-2 rounded-md bg-transparent shadow"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-3 text-sm font-medium mt-5">
                Pincode<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                placeholder="500033"
                className="w-full border border-black px-3 py-2 rounded-md bg-transparent shadow"
                required
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-3 text-sm font-medium mt-5">
                Electricity Bill<span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <select
                  className="appearance-none w-full border border-black px-3 py-2 pr-10 rounded-md bg-transparent shadow"
                  required
                  value={bill}
                  onChange={(e) => setBill(e.target.value)}
                >
                  <option value="">Select</option>
                  <option>₹0 - ₹200</option>
                  <option>₹200 - ₹500</option>
                  <option>₹500 - ₹1000</option>
                  <option>₹1000 - ₹1500</option>
                  <option>₹1500 and above</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg
                    className="w-4 h-4 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#8EC643] text-black px-6 py-2 rounded-md cursor-pointer transition w-full md:w-74 text-md font-medium md:mt-8 md:rounded-2xl"
          >
            Power it up
          </button>
        </form>
      </section>

<section className="bg-white text-black py-20 px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          {/* Phone Number - Click to Call */}
            <div className="flex flex-col items-center transition-transform duration-300 group-hover:scale-105 cursor-pointer">
                <svg width="109" height="115" viewBox="0 0 109 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M77.6791 94.9292C77.3536 94.9292 77.0281 94.9292 76.7027 94.9292L75.7263 94.8207C59.5612 93.8443 44.3725 86.9009 32.8725 75.5094C21.264 63.7924 14.3206 48.1698 13.5612 31.6792C13.3442 27.2311 15.08 22.8915 18.1178 19.7452L23.6508 14.2122C24.5187 13.3443 25.8206 13.3443 26.6885 14.2122L44.264 31.7877C44.698 32.2217 44.9149 32.7641 44.9149 33.3066C44.9149 33.849 44.698 34.3915 44.264 34.8254L36.0187 43.0707C35.5847 43.5047 35.4763 44.0471 35.5847 44.5896L35.9102 45.6745C37.5376 51.9669 40.7923 57.6085 45.3489 62.1651C50.1225 66.9386 56.198 70.3018 62.8159 71.8207C63.3583 71.9292 63.9008 71.8207 64.2263 71.3868L72.58 63.033C73.448 62.1651 74.7498 62.1651 75.6178 63.033L94.1697 81.5849C94.6036 82.0188 94.8206 82.5613 94.8206 83.1037C94.8206 83.6462 94.6036 84.1886 94.1697 84.6226L88.7451 90.0471C85.9244 93.3018 81.9102 94.9292 77.6791 94.9292ZM25.2781 18.7688L21.264 22.783C18.9857 25.0613 17.7923 28.2075 17.9008 31.4622C18.6602 46.9764 25.0612 61.5141 36.0187 72.4717C46.7593 83.2122 60.9715 89.6132 76.0517 90.5896L77.0281 90.6981C80.2829 90.9151 83.5376 89.7217 85.8159 87.3349L89.7215 83.4292L74.2074 67.8066L67.3725 74.6415C65.9621 76.0519 63.9008 76.7028 61.948 76.1603C54.5706 74.4245 47.7357 70.7358 42.4197 65.3113C37.3206 60.2122 33.6319 53.8113 31.7876 46.8679L31.4621 45.783C30.9197 43.8302 31.5706 41.6603 32.981 40.1415L39.7074 33.4151L25.2781 18.7688Z" fill="#8EC643"/>
                </svg>

                <h3 className="text-lg font-semibold mb-2 mt-8 group-hover:text-[#8EC643] transition-colors">Phone Number</h3>
                <a 
                  href="tel:+919876543210" 
                  className="group block"
                  aria-label="Call +91 9876543210"
                >
                <p className="text-sm text-black w-[180px]">
                +91 9876543210
                </p>
                </a>
            </div>

          {/* Gmail - Click to Email */}
            <div className="flex flex-col items-center transition-transform duration-300 group-hover:scale-105 cursor-pointer">
                <svg width="100" height="110" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M69.8996 13.3H56.0996V16.4H69.8996V13.3Z" fill="#8EC643"/>
                    <path d="M69.8996 25.5H30.0996V28.6H69.8996V25.5Z" fill="#8EC643"/>
                    <path d="M69.8996 37.8H30.0996V40.9001H69.8996V37.8Z" fill="#8EC643"/>
                    <path d="M83.7 33.4V1H16.3V33.4L1 39.8V99H99V39.8L83.7 33.4ZM94.2 41.1L83.7 47.7V36.7L94.2 41.1ZM80.6 4.1V49.6L50 68.8L19.4 49.6V4.1H80.6ZM16.3 47.6L5.8 41.1L16.3 36.7V47.6ZM4.1 95.9V43.6L50 72.4L95.9 43.6V96H4.1V95.9Z" fill="#8EC643"/>
                </svg>

                <h3 className="text-lg font-semibold mb-2 mt-8 group-hover:text-[#8EC643] transition-colors">Gmail</h3>
                <a 
                  href="mailto:Supportwisda@gmail.com" 
                  className="group block"
                  aria-label="Email Supportwisda@gmail.com"
                >
                <p className="text-sm text-black w-[180px]">
                Supportwisda@gmail.com
                </p>
                </a>
            </div>

          {/* Address - Click to Open Maps */}
            <div className="flex flex-col items-center transition-transform duration-300 group-hover:scale-105 cursor-pointer">
                <svg width="100" height="125" viewBox="0 0 100 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_249_70)">
                    <path d="M82.359 63.058H59.031L71.279 37.748L73.301 33.565C73.544 32.913 73.763 32.249 73.952 31.573C74.547 29.443 74.888 27.207 74.888 24.886C74.888 11.142 63.743 -0.000976562 49.998 -0.000976562C36.253 -0.000976562 25.109 11.142 25.109 24.886C25.109 27.206 25.451 29.442 26.046 31.573C26.234 32.249 26.453 32.913 26.696 33.565L28.719 37.747L40.964 63.058H17.638L0 99.999H99.999L82.359 63.058ZM49.999 15.982C54.916 15.982 58.906 19.97 58.906 24.886C58.906 29.806 54.917 33.791 49.999 33.791C45.081 33.791 41.094 29.804 41.094 24.886C41.094 19.97 45.081 15.982 49.999 15.982ZM35.871 72.19C40.057 72.759 42.515 75.68 45.526 79.307C50.311 85.068 56.266 92.24 72.155 92.24C81.872 92.24 87.822 90.475 89.881 87L94.404 96.471H35.871V72.19ZM83.94 74.557C77.752 74.572 70.854 74.515 67.468 71.137C66.304 69.973 65.655 68.461 65.452 66.584H80.137L83.94 74.557ZM49.999 81.726L57.326 66.585H63.694C63.92 68.94 64.741 70.905 66.223 72.387C69.955 76.112 76.808 76.322 83.116 76.322C83.527 76.322 83.934 76.322 84.339 76.322L84.784 76.32L88.845 84.824C88.788 85.135 88.705 85.444 88.565 85.745C87.572 87.905 83.919 90.477 72.158 90.477C57.098 90.477 51.672 83.945 46.887 78.18C43.822 74.492 40.888 71.024 35.875 70.431V66.586H42.676L49.999 81.726ZM19.862 66.585H34.108V70.314C26.408 70.375 22.93 72.997 20.135 75.116C18.295 76.509 16.781 77.644 14.443 77.938L19.862 66.585ZM13.57 79.762C17.018 79.662 19.058 78.141 21.199 76.522C23.917 74.462 27.011 72.141 34.108 72.084V96.471H5.593L13.57 79.762Z" fill="#8EC643"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_249_70">
                    <rect width="99.999" height="125" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>

                <h3 className="text-lg font-semibold mb-2 mt-4 group-hover:text-[#8EC643] transition-colors">Address</h3>
                <a 
                  href="https://maps.google.com/?q=12-13-1145, Street Number 11, Tarnaka, Secunderabad, Telangana 500017" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block"
                  aria-label="Open Address in Google Maps"
                >
                <p className="text-sm text-black w-[220px]">
                12-13-1145, Street Number 11, Tarnaka, Secunderabad, 
                Telangana 500017
                </p>
                </a>
            </div>
        </div>
    </section>
    <div className="flex justify-center items-center px-4 py-12">
    <div className="w-full max-w-[1200px] h-[300px] rounded-lg overflow-hidden shadow-lg">
    <iframe
      title="Studio Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5977357066695!2d78.5367833!3d17.4310821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bd8a797cb7d%3A0x87edde2c9b22db07!2s12-13-1144%2C%2012-13-1145%2C%20Street%20Number%2011%2C%20Siddharth%20Nagar%20Colony%2C%20Gokul%20Nagar%2C%20Tarnaka%2C%20Secunderabad%2C%20Telangana%20500017!5e0!3m2!1sen!2sin!4v1764320040573!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
    </div>
  );
}
