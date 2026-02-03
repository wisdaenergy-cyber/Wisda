import AboutBannerSection from "@/components/Media/AboutMedia";
import BannerSection from "@/components/Media/Banner";
import BlogBannerSection from "@/components/Media/BlogMedia";
import ContactBannerSection from "@/components/Media/ContactMedia";
import ProjectBannerSection from "@/components/Media/ProjectMedia";
import ServiceBannerSection from "@/components/Media/ServiceMedia";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#DBD7CB] p-6 md:p-12">
      <BannerSection title="Portfolio Page" />
      <ProjectBannerSection title="Project page" />
      <BlogBannerSection title="Blog Page" />
       <AboutBannerSection title="About Page"/>
       <ServiceBannerSection title="Service Page"/>
       <ContactBannerSection title="Contact Page"/>
    </main>
  );
}
