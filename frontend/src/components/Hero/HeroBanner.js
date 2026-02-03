"use client"

import axios from "axios"
import { useEffect, useRef, useState } from "react"
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function HeroBanner() {
  
  const [banner, setBanner] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [serviceType, setServiceType] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [pincode, setPincode] = useState("")
  const [bill, setBill] = useState("")

  useEffect(() => {
    try {
      async function getBanner() {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/banner/banner`)
        setBanner(res.data.image)
      }
      getBanner()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const imgsrc = banner || "/AboveFooter.png"
  const videoRef = useRef(null);
    const handlePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.(com|net|org|in|edu)$/i;
  return regex.test(email);
};

  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone)
  const validatePincode = (pincode) => /^[0-9]{6}$/.test(pincode)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !email || !phone || !serviceType || !city || !state || !pincode || !bill) {
      toast.error("Please fill in all fields")
      return
    }
      if (!validateEmail(email)) {
    toast.error("Invalid email format. Allowed only: .com .net .org .in .edu");
    return;
  }
    if (!validatePhone(phone)) return toast.error("Phone must be 10 digits")
    if (!validatePincode(pincode)) return toast.error("Pincode must be 6 digits")

    try {
      const token = localStorage.getItem("token")
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/contact/upload`,
        { name, email, phone, solarType: serviceType, city, state, bill },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      toast.success("Form submitted successfully!")
         setName("")
    setEmail("")
    setPhone("")
    setServiceType("")
    setCity("")
    setState("")
    setPincode("")
    setBill("")
      setIsOpen(false)
    } catch (error) {
      console.log(error)
       toast.error("A submission already exists for this phone number and email.");
    }
  }
   const router = useRouter();

  return (
    <main className="bg-[#FDF6E6] min-h-screen pt-20 sm:pt-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#023020] leading-snug sm:leading-tight mt-8 sm:mt-12 text-center md:text-left">
            Together for Future:{" "}
            <span className="block">
              Empowering India Through{" "}
              <span className="text-[#8EC643] italic">Green Energy</span>
            </span>
          </h1>
          <p className="mt-4 sm:mt-5 text-gray-700 text-sm sm:text-base leading-relaxed text-center md:text-left">
            WISDA Energy is a next-gen green energy company accelerating
            India’s shift to solar. We deliver rooftop and ground-mount solar
            solutions, empowering individuals and communities through government
            support and local partnerships.
          </p>
          <button
          onClick={() => router.push("/contact-us")}
           className="cursor-pointer mt-5 sm:mt-6 items-center gap-2 bg-[#8EC643] text-white px-4 py-2 rounded-full text-sm sm:text-base font-medium transition hidden md:flex">
            Get free site visit
            <div className="bg-[#166066] p-2 rounded-full">
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </button>
          <div className="bg-[#EFF9CC] p-3 rounded-md mt-8 sm:mt-10 grid grid-cols-3 text-center gap-2">
            <div>
              <p className="text-lg sm:text-2xl font-semibold text-[#166066]">5M</p>
              <p className="text-xs sm:text-sm text-gray-700">Units of solar power & counting</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-semibold text-[#166066]">50K +</p>
              <p className="text-xs sm:text-sm text-gray-700">Tons of CO₂ <br/> Offset</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-semibold text-[#166066]">1k +</p>
              <p className="text-xs sm:text-sm text-gray-700">happy <br/> customers</p>
            </div>
          </div>
        </div>
        <div className="relative mt-6 sm:mt-10 flex justify-center lg:justify-end">
          <Image
            src={imgsrc}
            alt="Family with solar home"
            width={600}
            height={400}
            className="rounded-lg w-full max-w-[600px] h-auto"
          />
         <div className="absolute -bottom-16 sm:-bottom-20 left-4 sm:-left-10 bg-white shadow-lg rounded-md overflow-hidden max-w-[180px] sm:max-w-[220px] md:block hidden">
  <div className="relative p-1 sm:p-2">
    <img
      src="/HeroImageBanner.jpg"
      alt="Solar Installation"
      width={220}
      height={120}
      className="object-cover w-full h-auto rounded-lg"
    />
  </div>
  <p className="p-2 text-[10px] sm:text-xs text-gray-700">
    Unlock the power of solar energy and enjoy long term
  </p>
</div>
        </div>
        <div className="z-100 fixed hidden md:block w-10 h-10 right-10 cursor-pointer bottom-8" onClick={() => setIsOpen(true)}>
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="27" cy="27" r="27" fill="#8EC643"/>
<path d="M25.5 27C25.5 26.7033 25.588 26.4133 25.7528 26.1666C25.9177 25.92 26.1519 25.7277 26.426 25.6142C26.7001 25.5006 27.0017 25.4709 27.2927 25.5288C27.5836 25.5867 27.8509 25.7296 28.0607 25.9393C28.2705 26.1491 28.4133 26.4164 28.4712 26.7074C28.5291 26.9983 28.4994 27.2999 28.3859 27.574C28.2723 27.8481 28.0801 28.0824 27.8334 28.2472C27.5867 28.412 27.2967 28.5 27 28.5C26.6022 28.5 26.2207 28.342 25.9394 28.0607C25.6581 27.7794 25.5 27.3978 25.5 27ZM21.5 28.5C21.7967 28.5 22.0867 28.412 22.3334 28.2472C22.5801 28.0824 22.7723 27.8481 22.8859 27.574C22.9994 27.2999 23.0291 26.9983 22.9712 26.7074C22.9133 26.4164 22.7705 26.1491 22.5607 25.9393C22.3509 25.7296 22.0836 25.5867 21.7927 25.5288C21.5017 25.4709 21.2001 25.5006 20.926 25.6142C20.6519 25.7277 20.4177 25.92 20.2528 26.1666C20.088 26.4133 20 26.7033 20 27C20 27.3978 20.1581 27.7794 20.4394 28.0607C20.7207 28.342 21.1022 28.5 21.5 28.5ZM32.5 28.5C32.7967 28.5 33.0867 28.412 33.3334 28.2472C33.5801 28.0824 33.7723 27.8481 33.8859 27.574C33.9994 27.2999 34.0291 26.9983 33.9712 26.7074C33.9133 26.4164 33.7705 26.1491 33.5607 25.9393C33.3509 25.7296 33.0836 25.5867 32.7927 25.5288C32.5017 25.4709 32.2001 25.5006 31.926 25.6142C31.6519 25.7277 31.4177 25.92 31.2528 26.1666C31.088 26.4133 31 26.7033 31 27C31 27.3978 31.1581 27.7794 31.4394 28.0607C31.7207 28.342 32.1022 28.5 32.5 28.5ZM40 19V35C40 35.5304 39.7893 36.0391 39.4142 36.4142C39.0392 36.7893 38.5305 37 38 37H21.375L17.3 40.52L17.2888 40.5287C16.9288 40.8339 16.472 41.001 16 41C15.7062 40.9994 15.4161 40.9345 15.15 40.81C14.8049 40.6505 14.5129 40.395 14.309 40.074C14.1051 39.7531 13.9978 39.3802 14 39V19C14 18.4696 14.2107 17.9609 14.5858 17.5858C14.9609 17.2107 15.4696 17 16 17H38C38.5305 17 39.0392 17.2107 39.4142 17.5858C39.7893 17.9609 40 18.4696 40 19ZM38 19H16V39L20.3463 35.25C20.527 35.0906 20.7591 35.0019 21 35H38V19Z" fill="white"/>
</svg>

        </div>
      </div>

     {isOpen && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 mt-10">
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl relative">
     <button
  onClick={() => setIsOpen(false)}
  className="text-xl absolute -top-4 -right-4 bg-[#8EC643] text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
>
  ×
</button>

      <h2 className="text-center text-xl md:text-2xl font-semibold mb-8">
        Get in Touch with Wisda
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="John Gilbert"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            placeholder="JohnGilbert@gmail.com"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Phone Number<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="+91 12345 67890"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Solar for Home/ Commercial<span className="text-red-500">*</span>
          </label>
          <select
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
          >
            <option value="">Select the Service</option>
            <option>Home</option>
            <option>Commercial</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            City<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Select the City"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            State<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Select the State"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Pin code<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Pincode"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Monthly Electricity Bill<span className="text-red-500">*</span>
          </label>
          <select
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
        </div>

        <div className="col-span-1 md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-[#8EC643] text-black rounded-full font-medium hover:bg-green-500 transition"
          >
            Power it up
          </button>
        </div>
      </form>
    </div>
  </div>
)}
    </main>
  )
}
