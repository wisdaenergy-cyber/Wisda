import HeroPartner from "@/components/Hero/HeroPartner";
import Navbar from "@/components/NavBar/NavBar";

export default function HeroLayout({ children }) {
    return (
      <div>
        <Navbar/>
      <div className="w-screen h-screen bg-[#FDF6E6]">
        {children}
      </div>
      </div>
    );
  }
  