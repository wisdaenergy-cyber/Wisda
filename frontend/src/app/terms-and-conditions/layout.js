import AboveFooter from "@/components/AboveFooter/AboveFooter";
import Footer from "@/components/Footer/footer";
import Navbar from "@/components/NavBar/NavBar";

export const metadata = {
  title: 'Privacy Policy | WISDA Energy',
  description: 'Privacy Policy for WISDA Energy website.',
}

export default function PrivacyLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF6E6]">
      {/* Navbar sits at the top */}
      <Navbar />
      
      {/* Main content area */}
      <main className="flex-grow w-full">
        {children}
      </main>

      {/* Footer sections at the bottom */}
      <div className="w-full">
        <AboveFooter />
        <Footer />
      </div>
    </div>
  );
}