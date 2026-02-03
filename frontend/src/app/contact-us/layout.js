import Footer from "@/components/Footer/footer";
import Navbar from "@/components/NavBar/NavBar";


export default function ContactLayout({ children }) {
    return (
      <div>
      <Navbar/>
      <div className="w-screen h-screen bg-[#FDF6E6]">
        {children}
        <Footer/>
      </div>
      </div>
    );
  }
  